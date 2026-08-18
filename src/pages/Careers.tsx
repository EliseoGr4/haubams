import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { jobOffers } from "@/data/careers";
import { timeAgo, formatDate } from "@/utils/timeAgo";
import { Button } from "@/components/ui/Button";

const TYPE_LABELS: Record<string, string> = {
  stage: "Stage",
  emploi: "Emploi",
  opportunite: "Opportunite",
  partenariat: "Partenariat",
};

const TYPE_COLORS: Record<string, string> = {
  stage: "bg-blue-50 text-blue-700",
  emploi: "bg-green-50 text-green-700",
  opportunite: "bg-amber-50 text-amber-700",
  partenariat: "bg-purple-50 text-purple-700",
};

export default function Careers() {
  useSEO({
    title: "Carrieres",
    description: "Rejoignez Haubans SARL — stages, emplois et opportunites en ingenierie hospitaliere au Cameroun. Decouvrez nos offres et candidatez.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Nous rejoindre"
        title="Construisons ensemble"
        description="Haubans SARL recherche des profils engages pour renforcer ses equipes d'ingenierie hospitaliere."
      />

      {/* Pourquoi rejoindre */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Travailler chez Haubans"
            title="Un environnement exigeant et enrichissant"
            align="center"
            className="mx-auto max-w-2xl"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Projets uniques", desc: "Travaillez sur des projets d'ingenierie hospitaliere a fort impact." },
              { title: "Expertise rare", desc: "Developpez une expertise sur des domaines techniques tres specialises." },
              { title: "Equipe soudee", desc: "Rejoignez une equipe passionnee et rigoureuse." },
              { title: "Impact reel", desc: "Vos realisations ameliorent concretement la sante des populations." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border border-navy-900/10 bg-white p-6"
              >
                <h3 className="font-display text-base font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Offres */}
      <section className="border-t border-navy-900/10 bg-navy-900/2 py-20 sm:py-28">
        <Container>
          <SectionTitle eyebrow="Nos offres" title="Stages et opportunites" />
          {jobOffers.length === 0 ? (
            <div className="mt-12 border border-dashed border-navy-900/20 py-16 text-center">
              <p className="text-navy-700/50">Aucune offre disponible actuellement. Revenez bientot.</p>
              <p className="mt-2 text-sm text-navy-700/40">Vous pouvez egalement nous envoyer une candidature spontanee via le formulaire de contact.</p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {jobOffers.map((offer, i) => (
                <motion.article
                  key={offer.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col border border-navy-900/10 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${TYPE_COLORS[offer.type] ?? "bg-gray-100 text-gray-700"}`}>
                        {TYPE_LABELS[offer.type] ?? offer.type}
                      </span>
                      <h2 className="mt-3 font-display text-lg font-bold text-navy-900 leading-snug">{offer.title}</h2>
                    </div>
                  </div>

                  {offer.location && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-navy-700/60">
                      <MapPin size={13} />
                      {offer.location}
                    </div>
                  )}

                  <p className="mt-4 text-sm leading-relaxed text-navy-700/80 line-clamp-3">{offer.description}</p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-navy-700/50">
                    <Clock size={13} />
                    <span>Publie {timeAgo(offer.publishedAt)} · {formatDate(offer.publishedAt)}</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      to={`/carrieres/${offer.id}`}
                      className="inline-flex items-center gap-1.5 bg-accent-500 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-accent-600"
                    >
                      Voir l'offre
                      <ArrowRight size={13} />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 border border-navy-900/20 px-4 py-2 text-xs font-bold text-navy-800 transition-colors hover:border-accent-500 hover:text-accent-600"
                    >
                      Postuler
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Candidature spontanee */}
          <div className="mt-14 border border-navy-900/10 bg-white p-8">
            <h3 className="font-display text-xl font-bold text-navy-900">Candidature spontanee</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
              Vous ne trouvez pas l'offre qui vous correspond ? Envoyez-nous votre candidature spontanee.
              Nous sommes toujours a la recherche de profils talentueux.
            </p>
            <div className="mt-6">
              <Button to="/contact" variant="secondary" size="md">Nous contacter</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
