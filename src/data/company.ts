import type {
  CompanyStat,
  KeyFigure,
  MethodStep,
  ValueItem,
  EngagementItem,
  SocialLink,
  NavLink,
} from '@/types';

/**
 * Informations générales — toutes sourcées du portfolio "Haubans 2027".
 * Ne rien inventer ici : si une info manque dans le portfolio, laisser
 * le champ vide/undefined plutôt que d'en fabriquer une.
 */
export const company = {
  name: 'Haubans',
  legalName: 'Haubans SARL',
  tagline: "Let's Plan the Future",
  heroHeadline: 'Construire pour la santé de demain, avec exigence et innovation.',
  heroSubtext:
    "Depuis plus de cinq ans, Haubans SARL accompagne les établissements de santé du Cameroun dans la conception, la réalisation et la maintenance de projets d'ingénierie hospitalière.",
  ceo: {
    name: 'Ing. Reminick Djapou',
    role: 'Directeur Général de Haubans SARL',
    quote:
      'Nos équipes connaissent bien ces environnements sensibles, où la sécurité des patients, les besoins du personnel soignant et la continuité des services sont essentiels.',
  },
  edito: [
    "Depuis plus de cinq ans, Haubans SARL accompagne les établissements de santé dans la conception et la réalisation de projets qui sont à la fois performants, durables, parfaitement adaptés à leurs besoins, qui optimisent les coûts et répondent aux normes hospitalières.",
    "Devenu partenaire de la grande vision de modernisation des infrastructures de l'Hôpital Général de Douala, notre expertise en ingénierie hospitalière y a été sollicitée entre 2022 et 2025 dans le cadre de projets majeurs : l'aménagement du local du premier simulateur numérique à cobaltothérapie au Cameroun, la radioprotection, la conception d'un pavillon dédié au futur service d'hospitalisation VIP.",
    "Travailler dans un environnement hospitalier nécessite une grande rigueur, une réactivité rapide et une expertise solide. Nos équipes connaissent bien ces environnements sensibles, où la sécurité des patients, les besoins du personnel soignant et la continuité des services sont essentiels.",
    "Nous vous accompagnons à chaque étape de vos projets, en vous proposant des solutions personnalisées qui ajoutent de la valeur, avec une approche globale pour répondre à vos besoins.",
  ],
  mission:
    "Parce que la qualité des soins dépend directement de la disponibilité et de la fiabilité des infrastructures hospitalières, notre mission est d'assurer la pérennité de vos investissements grâce à un suivi technique rigoureux, une maintenance proactive et une assistance continue. De la mise en service à l'exploitation quotidienne, nous restons aux côtés de nos clients pour garantir des environnements de soins sûrs.",
  contact: {
    department: 'Direction Générale',
    address: 'B.P. 0000, Yaoundé, Cameroun',
    phone: '+237 678 899 542',
    phoneRaw: '+237678899542',
    website: 'www.haubanscameroun.com',
    // Aucun email n'apparaît dans le portfolio — ne pas en inventer.
    email: undefined,
    regionalOffices: ['Yaoundé', 'Douala'],
  },
} as const;

/** Statistiques compactes — section "À propos" (page 5 du portfolio) */
export const aboutStats: CompanyStat[] = [
  { value: '+5', label: "années d'expérience" },
  { value: '+17', label: 'contrats réalisés' },
  { value: '2+', label: 'villes au Cameroun' },
];

/** Chiffres clés — section dédiée, grand format (pages 5, 8, 9 du portfolio) */
export const keyFigures: KeyFigure[] = [
  { value: 5, prefix: '+', label: "Années d'expérience" },
  { value: 17, prefix: '+', label: 'Contrats / projets réalisés' },
  { value: 2, prefix: '+', label: 'Villes au Cameroun' },
  { value: 8, label: 'Spécialités maîtrisées' },
  { value: 10, label: 'Régions — capacité de déploiement' },
];

/** Répartition du chiffre d'affaires par type d'activité (page 5) */
export const activityBreakdown = [
  { label: 'Travaux de rénovation', value: 71 },
  { label: 'Travaux de maintenance', value: 17 },
  { label: 'Études', value: 7 },
  { label: 'Travaux de viabilisation', value: 5 },
] as const;

/**
 * Notre méthode — 4 étapes.
 * Le portfolio présente 3 blocs sur la page "À propos" (Analyse, Réalisation,
 * Mise en exploitation + S.A.V réunis). On les répartit ici en 4 étapes en
 * séparant mise en exploitation et SAV/maintenance, qui sont deux phases
 * distinctes décrites séparément dans "Notre Mission" (page 6).
 */
export const methodSteps: MethodStep[] = [
  {
    number: '01',
    title: "Analyse / Bureau d'étude",
    description:
      "Un véritable pôle d'expertise interne dédié à la conception, à la planification et au pilotage de projets complexes.",
  },
  {
    number: '02',
    title: 'Réalisation',
    description:
      'Exécution dans le respect strict des normes techniques, médicales et environnementales (hygiène, ventilation, circuits propres/sales).',
  },
  {
    number: '03',
    title: 'Mise en exploitation',
    description:
      "Accompagnement lors de la mise en service, pour garantir des environnements de soins sûrs et opérationnels dès le premier jour.",
  },
  {
    number: '04',
    title: 'S.A.V / Maintenance',
    description:
      'Suivi technique rigoureux, maintenance proactive et assistance continue pour assurer la pérennité des installations.',
  },
];

/** Nos valeurs (page "À propos" + éléments repris page "Architecture") */
export const values: ValueItem[] = [
  {
    title: 'Sécurité et qualité des soins',
    description:
      "Concevoir des structures sûres, conformes aux normes sanitaires, qui garantissent la sécurité des patients, du personnel et des visiteurs.",
  },
  {
    title: 'Approche centrée sur le patient',
    description:
      'Conception des espaces en tenant compte du confort, de l\'accessibilité et du bien-être des patients : lumière naturelle, ergonomie, réduction du stress.',
  },
  {
    title: 'Fiabilité et respect des délais',
    description:
      "Livrer des projets dans les temps avec un haut niveau de qualité, car les retards peuvent impacter l'accès aux soins.",
  },
  {
    title: 'Confort et flexibilité des espaces',
    description:
      "Des solutions qui privilégient le confort et la flexibilité, pour accompagner l'évolution des besoins de santé dans la durée.",
  },
  {
    title: 'Durabilité',
    description:
      'Des infrastructures pensées pour durer, qui optimisent les coûts sur le long terme sans compromis sur la qualité.',
  },
  {
    title: 'Innovation',
    description:
      "Une expertise mobilisée sur des premières nationales, comme le premier simulateur numérique à cobaltothérapie du Cameroun.",
  },
];

/** Nos engagements (page "Nos engagements") */
export const engagements: EngagementItem[] = [
  { title: 'Continuité des services médicaux' },
  { title: 'Sécurité des patients' },
  { title: 'Respect des délais' },
  { title: 'Qualité des services' },
];

/** Objectif sécurité/santé affiché en grand (page 7) */
export const safetyGoal = {
  value: '0',
  label: 'Accident / Contamination',
  context:
    'Renforcer la confiance des patients, tout en soutenant la performance et la compétitivité des établissements.',
};

/** Pourquoi Haubans (page 8) */
export const whyHaubans = [
  {
    icon: 'award' as const,
    title: 'Expertise hospitalière',
    description: "+5 ans d'activités en ingénierie hospitalière et partenaire d'hôpitaux publics.",
  },
  {
    icon: 'layers' as const,
    title: 'Solutions intégrées',
    description: "8 spécialités maîtrisées en corps d'états techniques et corps d'états architecturaux.",
  },
  {
    icon: 'badge-check' as const,
    title: 'Conformité',
    description: '100% de respect des exigences hospitalières, des normes et réglementations en vigueur.',
  },
  {
    icon: 'building-2' as const,
    title: 'Continuité des soins',
    description: '17+ projets réalisés sans interruption des activités médicales.',
  },
];

export const deployment = {
  regionalOffices: 'Directions régionales : Yaoundé — Douala',
  capacity: 'Capacité de déploiement dans les 10 régions du Cameroun',
};

/** Réseaux sociaux : des pictos apparaissent sur les gilets de sécurité du
 * portfolio (YouTube / Instagram / Facebook) mais sans identifiant ni lien
 * fourni. La structure est prête ; `available: false` masque le lien tant
 * qu'aucune URL réelle n'est communiquée. */
export const socialLinks: SocialLink[] = [
  { label: 'YouTube', href: '#', available: false },
  { label: 'Instagram', href: '#', available: false },
  { label: 'Facebook', href: '#', available: false },
];

export const navLinks: NavLink[] = [
  { label: 'À propos', href: '/a-propos' },
  {
    label: 'Nos expertises',
    href: '/nos-expertises',
    children: [
      { label: 'Nos expertises', href: '/nos-expertises' },
      { label: 'Nos services', href: '/nos-services' },
      { label: 'Notre méthode', href: '/notre-methode' },
    ],
  },
  { label: 'Nos réalisations', href: '/nos-realisations' },
  { label: 'Nos engagements', href: '/#engagements', isAnchor: true },
  { label: 'Publications', href: '/publications' },
  { label: 'Nous rejoindre', href: '/carrieres' },
  { label: 'Contact', href: '/contact' },
];
