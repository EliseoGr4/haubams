import type { JobOffer } from '@/types';

/**
 * Offres de stage, emploi et opportunites Haubans SARL.
 * Les donnees ci-dessous sont des structures de demonstration.
 * Haubans peut les remplacer par de vraies offres.
 */
export const jobOffers: JobOffer[] = [
  {
    id: 'stage-genie-civil-2025',
    title: 'Stage en Genie Civil et BTP',
    type: 'stage',
    location: 'Douala, Cameroun',
    description:
      "Nous recherchons un(e) stagiaire en genie civil ou BTP pour appuyer nos equipes sur des chantiers hospitaliers. Le stagiaire participera aux etudes de terrain, au suivi des travaux et a la redaction de rapports techniques. Ce stage est une opportunite unique de decouvrir l'ingenierie hospitaliere en milieu reel.",
    publishedAt: '2026-07-15',
    expiresAt: '2026-09-30',
  },
  {
    id: 'stage-electricite-2025',
    title: "Stage en Electricite et Systemes",
    type: 'stage',
    location: 'Yaounde, Cameroun',
    description:
      "Stage en electricite du batiment et systemes de controle pour nos projets d'ingenierie hospitaliere. Le stagiaire participera a la mise en oeuvre et au suivi des installations electriques, appareillages et reseaux courants forts/courants faibles.",
    publishedAt: '2026-08-01',
    expiresAt: '2026-10-31',
  },
];

export function getJobOfferById(id: string): JobOffer | undefined {
  return jobOffers.find((j) => j.id === id);
}
