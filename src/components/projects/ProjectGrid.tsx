import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import type { Project } from '@/types';

interface ProjectGridProps {
  projects: Project[];
  categories: Project['category'][];
}

export function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const [active, setActive] = useState<Project['category'] | 'Tous'>('Tous');

  const filtered = useMemo(
    () => (active === 'Tous' ? projects : projects.filter((p) => p.category === active)),
    [projects, active]
  );

  return (
    <div>
      <ProjectFilter categories={categories} active={active} onChange={setActive} />

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-navy-700/60">
          Aucune réalisation dans cette catégorie pour le moment.
        </p>
      )}
    </div>
  );
}
