import { cn } from '@/utils/cn';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

/**
 * Logo officiel Haubans — image fournie par le client.
 * Pour changer le logo, remplacez uniquement le fichier
 * /public/images/logo-haubans.jpg
 */
export function Logo({ variant = 'dark', className, showTagline = true }: LogoProps) {
  const taglineColor = variant === 'light' ? 'text-white/70' : 'text-navy-700/60';

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <img
        src="/images/logo-haubans.jpg"
        alt="Haubans — Let's Plan the Future"
        className="h-10 w-auto object-contain"
        style={{ maxWidth: '180px' }}
      />
      {showTagline === false && null}
      {showTagline && (
        <span className={cn('font-mono text-[9px] font-medium uppercase tracking-[0.15em] hidden', taglineColor)}>
          Let&rsquo;s Plan the Future
        </span>
      )}
    </span>
  );
}
