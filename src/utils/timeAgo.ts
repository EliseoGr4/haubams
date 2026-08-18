/**
 * Calcule le temps ecoule depuis une date ISO 8601 et retourne
 * une chaine lisible en francais : "Il y a 3 jours", "Il y a 2 semaines", etc.
 * Utilise dans le Social Wall, les Publications et les Carrieres.
 */
export function timeAgo(dateIso: string): string {
  const now = Date.now();
  const then = new Date(dateIso).getTime();
  const diffMs = now - then;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSecs < 60) return "A l'instant";
  if (diffMins < 60) return `Il y a ${diffMins} min`;
  if (diffHours < 24) return `Il y a ${diffHours} h`;
  if (diffDays === 1) return 'Il y a 1 jour';
  if (diffDays < 7) return `Il y a ${diffDays} jours`;
  if (diffWeeks === 1) return 'Il y a 1 semaine';
  if (diffWeeks < 5) return `Il y a ${diffWeeks} semaines`;
  if (diffMonths === 1) return 'Il y a 1 mois';
  if (diffMonths < 12) return `Il y a ${diffMonths} mois`;
  if (diffYears === 1) return 'Il y a 1 an';
  return `Il y a ${diffYears} ans`;
}

/** Formate une date ISO 8601 en "15 janvier 2025" (format long francais). */
export function formatDate(dateIso: string): string {
  return new Date(dateIso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
