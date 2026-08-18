import { motion } from 'framer-motion';
import {
  PanelsTopLeft,
  ShieldAlert,
  Thermometer,
  Zap,
  ShieldCheck,
  Camera,
  Wind,
  Stethoscope,
  Building,
  Building2,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Expertise, ExpertiseIconName } from '@/types';

const ICONS: Record<ExpertiseIconName, LucideIcon> = {
  panels: PanelsTopLeft,
  'shield-radiation': ShieldAlert,
  thermometer: Thermometer,
  zap: Zap,
  'shield-electric': ShieldCheck,
  camera: Camera,
  wind: Wind,
  stethoscope: Stethoscope,
  building: Building,
  'building-2': Building2,
  wrench: Wrench,
};

interface ExpertiseCardProps {
  expertise: Expertise;
  index?: number;
}

export function ExpertiseCard({ expertise, index = 0 }: ExpertiseCardProps) {
  const Icon = ICONS[expertise.icon];
  const href = expertise.relatedProjectId ? `/nos-realisations` : '/nos-expertises';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col border border-navy-900/10 bg-white p-7 transition-colors duration-300 hover:border-accent-500/60"
    >
      <div className="flex h-12 w-12 items-center justify-center border border-navy-900/10 bg-navy-900/3 text-navy-800 transition-colors duration-300 group-hover:border-accent-500/40 group-hover:bg-accent-500/10 group-hover:text-accent-600">
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <h3 className="mt-6 font-display text-lg font-bold text-navy-900">{expertise.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/75">
        {expertise.shortDescription}
      </p>

      <Link
        to={href}
        className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy-800 transition-colors group-hover:text-accent-600"
      >
        En savoir plus
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}
