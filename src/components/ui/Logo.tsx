import { cn } from '@/utils/cn';

export interface LogoProps {
  /**
   * 'light' -> pour arrière-plans sombres (navbar transparente sur le hero, footer sombre)
   * 'dark'  -> pour arrière-plans clairs (navbar au scroll, pages à fond blanc/clair)
   * 'white' -> version monochrome blanc pur sur fond sombre
   */
  variant?: 'light' | 'dark' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ variant = 'dark', className, size = 'md' }: LogoProps) {
  // Sélection de l'image officielle adaptée au fond
  const src =
    variant === 'white'
      ? '/images/logo-white.png'
      : variant === 'light'
      ? '/images/logo-dark.png' // Fond sombre : emblème orange + texte blanc
      : '/images/logo-light.png'; // Fond clair : emblème orange + texte sombre

  const heightClass = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  }[size];

  return (
    <span className={cn('inline-flex items-center', className)}>
      <img
        src={src}
        alt="Haubans — Let's Plan The Future"
        className={cn(
          'w-auto object-contain transition-opacity duration-300',
          heightClass
        )}
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
