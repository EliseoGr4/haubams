import { motion } from 'framer-motion';
import type { MethodStep } from '@/types';

interface MethodTimelineProps {
  steps: MethodStep[];
  theme?: 'light' | 'dark';
}

export function MethodTimeline({ steps, theme = 'light' }: MethodTimelineProps) {
  const isDark = theme === 'dark';

  return (
    <ol className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
      {steps.map((step, index) => (
        <motion.li
          key={step.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          className="relative flex gap-5 lg:block lg:gap-0"
        >
          {/* Ligne de connexion — horizontale sur desktop, verticale sur mobile */}
          {index < steps.length - 1 && (
            <span
              aria-hidden="true"
              className={cnLine(isDark)}
            />
          )}

          <span
            className={
              'font-mono text-3xl font-semibold shrink-0 ' +
              (isDark ? 'text-accent-400' : 'text-accent-600')
            }
          >
            {step.number}
          </span>

          <div className="lg:mt-4">
            <h3 className={'font-display text-lg font-bold ' + (isDark ? 'text-white' : 'text-navy-900')}>
              {step.title}
            </h3>
            <p className={'mt-2 text-sm leading-relaxed ' + (isDark ? 'text-white/65' : 'text-navy-700/75')}>
              {step.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

function cnLine(isDark: boolean) {
  const color = isDark ? 'bg-white/15' : 'bg-navy-900/10';
  return [
    'absolute',
    // mobile : trait vertical à gauche, reliant à l'étape suivante
    'left-[15px] top-10 h-[calc(100%+1rem)] w-px',
    // desktop : trait horizontal en haut de carte
    'lg:left-auto lg:right-[-1.5rem] lg:top-[18px] lg:h-px lg:w-12',
    color,
  ].join(' ');
}
