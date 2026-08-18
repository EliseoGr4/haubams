/**
 * Types centraux du site Haubans SARL.
 * Toutes les données affichées sont typées ici pour garder une séparation
 * stricte entre les données (src/data) et l'interface (src/components, src/pages).
 */

export type ProjectCategory =
  | 'Architecture'
  | 'Électricité'
  | 'Radioprotection'
  | 'Climatisation'
  | 'Vidéosurveillance'
  | 'Protection électrostatique'
  | 'Cloisons'
  | 'Plafonds'
  | 'Génie civil';

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  location: string;
  period: string;
  /** Résumé court affiché sur la carte de la grille */
  summary: string;
  /** Contexte du besoin */
  context: string;
  /** Problématique technique rencontrée */
  challenge: string;
  /** Solution mise en œuvre par Haubans */
  solution: string;
  constraints: string[];
  results?: string;
  keyStats: ProjectStat[];
  coverImage: string;
  images: string[];
}

export interface Expertise {
  id: string;
  slug: string;
  /** Nom d'icône Lucide (clé du composant, résolu dans ExpertiseCard) */
  icon: ExpertiseIconName;
  title: string;
  shortDescription: string;
  fullDescription: string;
  /** id du projet associé dans data/projects.ts, si applicable */
  relatedProjectId?: string;
}

export type ExpertiseIconName =
  | 'panels'
  | 'shield-radiation'
  | 'thermometer'
  | 'zap'
  | 'shield-electric'
  | 'camera'
  | 'wind'
  | 'stethoscope'
  | 'building'
  | 'building-2'
  | 'wrench';

export interface CompanyStat {
  value: string;
  label: string;
}

export interface KeyFigure {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface EngagementItem {
  title: string;
}

export interface SocialLink {
  label: string;
  href: string;
  available: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  /** true = ancre sur la page d'accueil plutôt que route dédiée */
  isAnchor?: boolean;
  /** sous-liens pour les dropdowns */
  children?: Pick<NavLink, 'label' | 'href'>[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  /** Qualité / Fonction professionnelle de l'émetteur */
  quality: string;
  company: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export type ContactSubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

/* ─────────────────────────────────────────
   NOUVELLES INTERFACES — ajoutées suite aux
   demandes de Docs.pdf
───────────────────────────────────────── */

export interface Publication {
  id: string;
  title: string;
  description?: string;
  date: string; // ISO 8601, ex: "2025-06-01"
  category?: string;
  coverImage?: string;
  /** URL pour consultation en ligne (PDF viewer, etc.) */
  onlineUrl?: string;
  /** URL pour téléchargement direct */
  fileUrl?: string;
}

export type JobOfferType = 'stage' | 'emploi' | 'opportunite' | 'partenariat';

export interface JobOffer {
  id: string;
  title: string;
  type: JobOfferType;
  location?: string;
  description: string;
  publishedAt: string; // ISO 8601
  expiresAt?: string;  // ISO 8601
  applyEmail?: string;
}

export type NewsCategory = 'actualite' | 'realisation' | 'publication' | 'partenariat' | 'emploi';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  publishedAt: string; // ISO 8601
  coverImage?: string;
  /** Lien interne ou externe vers le contenu complet */
  href?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}
