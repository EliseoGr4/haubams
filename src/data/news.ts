import type { NewsItem } from '@/types';

/**
 * Actualites et evenements Haubans SARL.
 * Ces donnees constituent le "Social Wall" affiche sur la page d''accueil.
 * Haubans peut enrichir ce fichier avec de vraies actualites.
 */
export const newsItems: NewsItem[] = [
  {
    id: 'rapport-activite-2025',
    title: "Rapport d''Activite 2025 disponible",
    excerpt:
      "Notre rapport d''activite annuel est desormais consultable en ligne. Il presente nos realisations, chiffres cles et perspectives pour 2025.",
    category: 'publication',
    publishedAt: '2025-06-01',
    coverImage: '/images/avenir-visite-officielle.jpg',
    href: '/publications',
  },
  {
    id: 'rapport-durabilite',
    title: 'Premier Rapport de Durabilite Volontaire',
    excerpt:
      "Haubans SARL publie son premier rapport de durabilite volontaire, temoignant de son engagement pour un developpement responsable de l''ingenierie hospitaliere.",
    category: 'publication',
    publishedAt: '2025-09-01',
    coverImage: '/images/methode-bureau-etude-equipe.jpg',
    href: '/publications',
  },
  {
    id: 'modernisation-hopital-douala',
    title: "Modernisation de l''Hopital General de Douala",
    excerpt:
      "Haubans SARL accompagne l''Hopital General de Douala dans sa vaste operation de modernisation : cobaltotherapie, pavillon VIP, neonatalogie et mise aux normes PMR.",
    category: 'realisation',
    publishedAt: '2025-03-15',
    coverImage: '/images/hero-hopital-general-douala.jpg',
    href: '/nos-realisations',
  },
  {
    id: 'stage-genie-civil-2025',
    title: 'Stage en Genie Civil et BTP',
    excerpt:
      "Haubans SARL propose un stage en genie civil a Douala. Rejoignez nos equipes sur des chantiers hospitaliers et decouvrez l''ingenierie en milieu reel.",
    category: 'emploi',
    publishedAt: '2026-07-15',
    href: '/carrieres/stage-genie-civil-2025',
  },
  {
    id: 'stage-electricite-2025',
    title: 'Stage en Electricite et Systemes',
    excerpt:
      "Stage en electricite du batiment disponible a Yaounde. Participez a la mise en oeuvre d''installations electriques pour des infrastructures de sante.",
    category: 'emploi',
    publishedAt: '2026-08-01',
    href: '/carrieres/stage-electricite-2025',
  },
];
