import { motion } from 'framer-motion';

interface ActivityDonutProps {
  data: readonly { label: string; value: number }[];
}

const COLORS = ['#0f2436', '#dc8a2d', '#6b5238', '#3f7594'];
const RADIUS = 70;
const STROKE = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Donut chart SVG fait main (un seul graphique dans tout le site : une
 * dépendance de charting complète n'apportait pas assez de valeur).
 * Reprend la répartition du CA par type d'activité (portfolio, page 5).
 */
export function ActivityDonut({ data }: ActivityDonutProps) {
  let cumulative = 0;

  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
      <svg viewBox="0 0 180 180" className="h-44 w-44 shrink-0 -rotate-90">
        <circle cx="90" cy="90" r={RADIUS} fill="none" stroke="#0f243610" strokeWidth={STROKE} />
        {data.map((slice, index) => {
          const dash = (slice.value / 100) * CIRCUMFERENCE;
          const offset = -((cumulative / 100) * CIRCUMFERENCE);
          cumulative += slice.value;
          return (
            <motion.circle
              key={slice.label}
              cx="90"
              cy="90"
              r={RADIUS}
              fill="none"
              stroke={COLORS[index % COLORS.length]}
              strokeWidth={STROKE}
              strokeDasharray={`${dash} ${CIRCUMFERENCE - dash}`}
              strokeDashoffset={offset}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            />
          );
        })}
      </svg>

      <ul className="space-y-3">
        {data.map((slice, index) => (
          <li key={slice.label} className="flex items-center gap-3 text-sm">
            <span
              aria-hidden="true"
              className="h-3 w-3 shrink-0 rounded-sm"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="font-mono font-semibold text-navy-900">{slice.value}%</span>
            <span className="text-navy-700/70">{slice.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
