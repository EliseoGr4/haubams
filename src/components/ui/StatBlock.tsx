import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * Élément signature du design : les chiffres du portfolio (83 m², 420 V,
 * 10⁹ Ω…) sont traités comme des cotes de plan technique — police mono,
 * petits traits d'attache — plutôt que comme de simples stats marketing.
 * Cohérent avec l'univers du métier (plans, relevés, appareils de mesure).
 */
export function StatBlock({ value, label, className }: StatBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('relative bg-umber-800 px-6 py-7 text-white', className)}
    >
      <span aria-hidden="true" className="absolute left-3 top-3 h-2.5 w-2.5 border-l border-t border-white/30" />
      <span aria-hidden="true" className="absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-white/30" />
      <div className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">{value}</div>
      <p className="mt-2 text-sm leading-snug text-white/75">{label}</p>
    </motion.div>
  );
}
