import type { Publication } from '@/types';

/**
 * Publications Haubans SARL.
 * Les URL onlineUrl/fileUrl pointent vers "#" en attendant
 * les vrais fichiers PDF fournis par Haubans.
 */
export const publications: Publication[] = [
  {
    id: 'rapport-activite-2025',
    title: "Rapport d'Activite 2025",
    description:
      "Notre rapport d'activite annuel presente les realisations, les chiffres cles et les perspectives de Haubans SARL pour l'annee 2025.",
    date: '2025-06-01',
    category: 'Rapport annuel',
    coverImage: '/images/avenir-visite-officielle.jpg',
    onlineUrl: '#',
    fileUrl: '#',
  },
  {
    id: 'rapport-durabilite-volontaire',
    title: 'Premier Rapport de Durabilite Volontaire',
    description:
      "Notre premier rapport de durabilite volontaire temoigne de notre engagement en faveur d'un developpement responsable de l'ingenierie hospitaliere au Cameroun.",
    date: '2025-09-01',
    category: 'Durabilite',
    coverImage: '/images/methode-bureau-etude-equipe.jpg',
    onlineUrl: '#',
    fileUrl: '#',
  },
];

export function getPublicationById(id: string): Publication | undefined {
  return publications.find((p) => p.id === id);
}
