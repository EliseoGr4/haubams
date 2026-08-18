import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Calendar } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getJobOfferById, jobOffers } from "@/data/careers";
import { timeAgo, formatDate } from "@/utils/timeAgo";

const TYPE_LABELS: Record<string, string> = {
  stage: "Stage", emploi: "Emploi", opportunite: "Opportunite", partenariat: "Partenariat",
};
const TYPE_COLORS: Record<string, string> = {
  stage: "bg-blue-50 text-blue-700", emploi: "bg-green-50 text-green-700",
  opportunite: "bg-amber-50 text-amber-700", partenariat: "bg-purple-50 text-purple-700",
};

export default function CareerDetail() {
  const { id } = useParams<{ id: string }>();
  const offer = id ? getJobOfferById(id) : undefined;

  useSEO({
    title: offer ? offer.title : "Offre",
    description: offer ? offer.description.slice(0, 160) : "Detail d'une offre Haubans SARL.",
  });

  if (!offer) return <Navigate to="/carrieres" replace />;

  const related = jobOffers.filter((j) => j.id !== offer.id && j.type === offer.type).slice(0, 3);

  return (
    <>
      <div className="relative flex min-h-[40vh] items-end overflow-hidden bg-navy-950 pt-32">
        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/80 to-navy-950/30" />
        <Container className="relative pb-14">
          <Link to="/carrieres" className="inline-flex items-center gap-2 font-display text-sm font-semibold text-white/70 transition-colors hover:text-white">
            <ArrowLeft size={16} /> Toutes les offres
          </Link>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-6">
            <span className={`inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${TYPE_COLORS[offer.type] ?? "bg-white/10 text-white"}`}>
              {TYPE_LABELS[offer.type] ?? offer.type}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">{offer.title}</h1>
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/60">
              {offer.location && <span className="flex items-center gap-2"><MapPin size={15} className="text-accent-400" />{offer.location}</span>}
              <span className="flex items-center gap-2"><Clock size={15} className="text-accent-400" />Publie {timeAgo(offer.publishedAt)}</span>
              <span className="flex items-center gap-2"><Calendar size={15} className="text-accent-400" />{formatDate(offer.publishedAt)}</span>
            </div>
          </motion.div>
        </Container>
      </div>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Description du poste</h2>
                <p className="mt-4 text-base leading-relaxed text-navy-700/85">{offer.description}</p>
              </div>
              {offer.expiresAt && (
                <div className="border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
                  <strong>Date limite de candidature :</strong> {formatDate(offer.expiresAt)}
                </div>
              )}
            </div>
            <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <div className="border border-navy-900/10 bg-white p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">Postuler</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/75">
                  Envoyez votre CV et lettre de motivation via notre formulaire de contact.
                </p>
                <div className="mt-5 space-y-3">
                  <Button to="/contact" variant="primary" size="md" className="w-full justify-center">Postuler maintenant</Button>
                  <Button to="/carrieres" variant="secondary" size="md" className="w-full justify-center">Voir toutes les offres</Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-navy-900/10 bg-navy-900/2 py-16">
          <Container>
            <h2 className="font-display text-xl font-bold text-navy-900">Autres offres similaires</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((j) => (
                <Link key={j.id} to={`/carrieres/${j.id}`} className="border border-navy-900/10 bg-white p-5 transition-shadow hover:shadow-md">
                  <span className={`inline-block px-2 py-0.5 text-xs font-semibold uppercase ${TYPE_COLORS[j.type] ?? ""}`}>{TYPE_LABELS[j.type] ?? j.type}</span>
                  <h3 className="mt-2 font-display text-base font-bold text-navy-900">{j.title}</h3>
                  {j.location && <p className="mt-1 text-xs text-navy-700/60">{j.location}</p>}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
