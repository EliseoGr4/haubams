import { motion } from 'framer-motion';
import { Building2, Cable, ShieldCheck, Leaf } from 'lucide-react';

const PILLARS = [
  { icon: Building2, title: "Conception d'infrastructures" },
  { icon: Cable, title: 'Intégration des systèmes' },
  { icon: ShieldCheck, title: 'Assurer la sécurité' },
  { icon: Leaf, title: 'Optimiser la durabilité' },
];

/**
 * Recréation native du schéma "Notre Méthode" (page 11 du portfolio) :
 * les besoins des patients et soignants irriguent 4 piliers qui produisent
 * des environnements de soins fiables. L'original est un diagramme en
 * losanges empilés ; ici on privilégie une version en cartes, plus lisible
 * et responsive qu'un import d'image.
 */
export function ApproachDiagram() {
  return (
    <div className="border border-navy-900/10 bg-white px-6 py-10 sm:px-10 sm:py-12">
      <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-600">
        Besoins des patients et des soignants
      </p>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="flex flex-col items-center gap-3 border border-navy-900/10 bg-navy-900/2 px-4 py-6 text-center"
          >
            <pillar.icon size={24} strokeWidth={1.6} className="text-navy-800" />
            <span className="font-display text-sm font-semibold leading-snug text-navy-900">
              {pillar.title}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-md text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-600">
        Environnements de soins fiables
      </p>
    </div>
  );
}
