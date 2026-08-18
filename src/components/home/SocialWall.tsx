import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Newspaper, Briefcase, Star, Handshake } from "lucide-react";
import { newsItems } from "@/data/news";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timeAgo } from "@/utils/timeAgo";
import type { NewsCategory } from "@/types";

const CATEGORY_CONFIG: Record<NewsCategory, { label: string; icon: React.ElementType; color: string }> = {
  actualite: { label: "Actualite", icon: Newspaper, color: "bg-navy-900/10 text-navy-700" },
  realisation: { label: "Realisation", icon: Star, color: "bg-accent-500/10 text-accent-700" },
  publication: { label: "Publication", icon: Newspaper, color: "bg-blue-50 text-blue-700" },
  partenariat: { label: "Partenariat", icon: Handshake, color: "bg-purple-50 text-purple-700" },
  emploi: { label: "Emploi / Stage", icon: Briefcase, color: "bg-green-50 text-green-700" },
};

export function SocialWall() {
  const displayed = newsItems.slice(0, 6);

  return (
    <section className="border-t border-navy-900/10 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Actualites"
            title="Ce qui se passe chez Haubans"
          />
          <Link
            to="/publications"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
          >
            Toutes les actualites <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((item, i) => {
            const cfg = CATEGORY_CONFIG[item.category];
            const Icon = cfg.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex flex-col overflow-hidden border border-navy-900/10 bg-white transition-shadow hover:shadow-md"
              >
                {item.coverImage && (
                  <div className="aspect-video overflow-hidden bg-navy-900/5">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <span className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${cfg.color}`}>
                    <Icon size={12} />
                    {cfg.label}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug text-navy-900 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/70 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-navy-700/50">
                      <Clock size={12} />
                      {timeAgo(item.publishedAt)}
                    </span>
                    {item.href && (
                      <Link
                        to={item.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600 transition-colors hover:text-accent-700"
                      >
                        Lire <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/carrieres"
            className="inline-flex items-center gap-2 border border-navy-900/20 px-5 py-2.5 text-sm font-bold text-navy-800 transition-colors hover:border-accent-500 hover:text-accent-600"
          >
            <Briefcase size={15} />
            Nos offres de stage et emploi
          </Link>
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 border border-navy-900/20 px-5 py-2.5 text-sm font-bold text-navy-800 transition-colors hover:border-accent-500 hover:text-accent-600"
          >
            <Newspaper size={15} />
            Nos publications
          </Link>
        </div>
      </Container>
    </section>
  );
}
