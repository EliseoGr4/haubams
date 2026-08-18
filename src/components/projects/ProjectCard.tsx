import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
    >
      <Link
        to={`/realisations/${project.slug}`}
        className="group block overflow-hidden border border-navy-900/10 bg-white"
      >
        <div className="relative aspect-4/3 overflow-hidden bg-navy-900">
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
          <span className="absolute left-4 top-4 border border-white/30 bg-navy-950/50 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
            {project.category}
          </span>
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-navy-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-base font-bold leading-snug text-navy-900 transition-colors group-hover:text-accent-600">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy-700/70">
            {project.summary}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-navy-900/10 pt-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-navy-700/60">
              <MapPin size={13} />
              {project.location}
            </span>
            {project.keyStats[0] && (
              <span className="font-mono text-xs font-semibold text-accent-600">
                {project.keyStats[0].value}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
