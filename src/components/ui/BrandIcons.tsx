/**
 * lucide-react ne fournit plus d'icônes de marque (YouTube, Instagram,
 * Facebook) — ce fichier fournit des pictogrammes simplifiés au même
 * gabarit que les icônes Lucide utilisées ailleurs (viewBox 24x24,
 * currentColor), pour un rendu cohérent dans le footer.
 */
interface IconProps {
  size?: number;
  className?: string;
}

export function YoutubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 8.5H13.5C12.9477 8.5 12.5 8.94772 12.5 9.5V11.5H15L14.6 14H12.5V21H9.5V14H7.5V11.5H9.5V9.2C9.5 6.98 11.06 5.5 13.3 5.5H15V8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
