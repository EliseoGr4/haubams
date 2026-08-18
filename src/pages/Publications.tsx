import { motion } from "framer-motion";
import { BookOpen, Download, Calendar, ExternalLink } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { publications } from "@/data/publications";
import { timeAgo, formatDate } from "@/utils/timeAgo";

const CATEGORY_COLORS: Record<string, string> = {
  "Rapport annuel": "bg-navy-900/10 text-navy-700",
  "Durabilite": "bg-accent-500/10 text-accent-700",
};

export default function Publications() {
  useSEO({
    title: "Publications",
    description: "Consultez les rapports et publications de Haubans SARL : rapport d'activite, rapport de durabilite volontaire et autres documents institutionnels.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Nos rapports et documents"
        description="Retrouvez nos publications institutionnelles : rapports d'activite, rapports de durabilite et documents de reference."
      />

      <section className="py-20 sm:py-28">
        <Container>
          {publications.length === 0 ? (
            <p className="text-center text-navy-700/60">Aucune publication disponible pour le moment.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {publications.map((pub, i) => (
                <motion.article
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col overflow-hidden border border-navy-900/10 bg-white transition-shadow hover:shadow-md"
                >
                  {/* Cover */}
                  {pub.coverImage && (
                    <div className="aspect-video overflow-hidden bg-navy-900/5">
                      <img
                        src={pub.coverImage}
                        alt={pub.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    {/* Category */}
                    {pub.category && (
                      <span className={`inline-block self-start px-2.5 py-1 text-xs font-mono font-semibold uppercase tracking-wide ${CATEGORY_COLORS[pub.category] ?? "bg-navy-900/10 text-navy-700"}`}>
                        {pub.category}
                      </span>
                    )}

                    <h2 className="mt-3 font-display text-lg font-bold leading-snug text-navy-900">
                      {pub.title}
                    </h2>

                    {pub.description && (
                      <p className="mt-2 text-sm leading-relaxed text-navy-700/75 line-clamp-3">
                        {pub.description}
                      </p>
                    )}

                    {/* Date */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-navy-700/50">
                      <Calendar size={13} />
                      <time dateTime={pub.date}>{formatDate(pub.date)}</time>
                      <span className="mx-1">·</span>
                      <span>{timeAgo(pub.date)}</span>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 flex flex-wrap gap-3">
                      {pub.onlineUrl && (
                        <a
                          href={pub.onlineUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 bg-accent-500 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-accent-600"
                        >
                          <BookOpen size={13} />
                          Lire en ligne
                          <ExternalLink size={11} />
                        </a>
                      )}
                      {pub.fileUrl && (
                        <a
                          href={pub.fileUrl}
                          download
                          className="inline-flex items-center gap-1.5 border border-navy-900/20 px-4 py-2 text-xs font-bold text-navy-800 transition-colors hover:border-accent-500 hover:text-accent-600"
                        >
                          <Download size={13} />
                          Telecharger
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
