import type { Service } from '@/types';

/**
 * Nos services — gamme de prestations proposees par Haubans SARL.
 * Distinct de "Nos expertises" (domaines techniques) :
 * les services decrivent CE QUE HAUBANS FAIT pour ses clients.
 */
export const servicesList: Service[] = [
  {
    id: 'bureau-etude',
    icon: 'drafting-compass',
    title: "Bureau d'etude et conseil",
    description:
      "Analyse des besoins, etudes de faisabilite, conception architecturale et technique, planification et pilotage de projets complexes en milieu hospitalier.",
    features: [
      'Etudes de faisabilite et diagnostic technique',
      'Conception architecturale et plans',
      'Planification et ordonnancement de chantier',
      'Coordination avec les autorites de reglementation',
      'Conseil en normes hospitalieres et radioprotection',
    ],
  },
  {
    id: 'realisation-travaux',
    icon: 'hard-hat',
    title: 'Realisation de travaux',
    description:
      "Execution de tous corps d'etat (genie civil, electricite, cloisons, plafonds, sol) dans le strict respect des normes hospitalieres et sans interruption des activites medicales.",
    features: [
      'Travaux de genie civil et second oeuvre',
      'Electricite et systemes courants forts/faibles',
      'Cloisons amovibles et amenagements interieurs',
      'Plafonds acoustiques et thermiques',
      'Sols antistatiques et finitions',
    ],
  },
  {
    id: 'mise-en-service',
    icon: 'settings',
    title: 'Mise en exploitation',
    description:
      "Accompagnement complet lors de la mise en service des installations pour garantir des environnements de soins surs et operationnels des le premier jour.",
    features: [
      'Tests et receptions techniques',
      'Mise en service des equipements',
      'Formation des equipes utilisatrices',
      'Documentation technique et plans de recolement',
      'Suivi post-ouverture',
    ],
  },
  {
    id: 'maintenance-sav',
    icon: 'wrench',
    title: 'Maintenance et S.A.V',
    description:
      "Suivi technique rigoureux, maintenance preventive et corrective, assistance continue pour assurer la perennite de vos infrastructures et equipements hospitaliers.",
    features: [
      'Maintenance preventive et planifiee',
      'Interventions correctives en urgence',
      'Contrats de maintenance annuels',
      'Audits techniques periodiques',
      'Hotline technique disponible',
    ],
  },
  {
    id: 'fournitures',
    icon: 'package',
    title: 'Fournitures et approvisionnement',
    description:
      "Sourcing et fourniture de materiaux, equipements et consommables techniques de qualite pour vos chantiers hospitaliers, avec suivi logistique integre.",
    features: [
      'Fourniture de materiaux de construction certifies',
      'Equipements electriques et systemes',
      'Materiels de radioprotection et EPI',
      'Consommables techniques',
      'Gestion logistique et livraison sur site',
    ],
  },
];
