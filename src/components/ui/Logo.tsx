import { cn } from '@/utils/cn';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

/**
 * Recréation SVG légère du symbole Haubans (deux tours reliées par une
 * arche), observé sur les casques et gilets du portfolio. Aucun fichier
 * vectoriel officiel n'a été fourni : à remplacer par le vrai logo dès
 * qu'un fichier de marque est disponible — ce composant est le seul
 * endroit à modifier.
 */
export function Logo({ variant = 'dark', className, showTagline = true }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';
  const taglineColor = variant === 'light' ? 'text-white/60' : 'text-navy-700/60';

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 64 56"
        className="h-8 w-9 shrink-0 text-accent-500"
        aria-hidden="true"
      >
        <path
          d="M16 25C16 14.507 24.507 6 35 6C45.493 6 54 14.507 54 25"
          stroke="currentColor"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="6" y="22" width="15" height="29" rx="1.5" fill="currentColor" />
        <rect x="43" y="22" width="15" height="29" rx="1.5" fill="currentColor" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn('font-display text-lg font-extrabold tracking-tight', textColor)}>
          HAUBANS
        </span>
        {showTagline && (
          <span className={cn('font-mono text-[9px] font-medium uppercase tracking-[0.15em]', taglineColor)}>
            Let&rsquo;s Plan the Future
          </span>
        )}
      </span>
    </span>
  );
}
