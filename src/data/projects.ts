import type { Project } from '@/types';

/**
 * Le portfolio documente en détail UN programme : la modernisation de
 * l'Hôpital Général de Douala (2022–2025), centrée sur l'aménagement du
 * premier simulateur numérique de cobaltothérapie du Cameroun. Ce programme
 * se décompose en 9 lots techniques, chacun avec son propre contexte,
 * contraintes et chiffres — c'est ce qui alimente la grille filtrable des
 * "réalisations". Le total de "+17 contrats" annoncé par Haubans couvre un
 * historique plus large que ce seul programme, non détaillé page à page
 * dans ce portfolio ; on ne fabrique donc pas 17 fiches projet distinctes.
 */

const IMG = '/images'; // voir src/assets/images — copié dans public au build

export const projects: Project[] = [
  {
    id: 'cloisons-amovibles',
    slug: 'cloisons-amovibles-oncologie',
    title: "Cloisons amovibles — Service d'oncologie",
    category: 'Cloisons',
    client: 'Hôpital Général de Douala',
    location: 'Douala, Cameroun',
    period: '2022 – 2025',
    summary:
      'Cloisonnement en menuiserie aluminium pour créer des bureaux de consultation supplémentaires et une salle de contrôle sécurisée.',
    context:
      "La mise en service du simulateur numérique au service d'oncologie a eu des conséquences sur l'architecture du service : un besoin d'espaces bureaux supplémentaires pour faire face à l'afflux croissant de patients, et la création d'une salle de contrôle sécurisée pour les opérateurs.",
    challenge:
      "Réaménager des espaces peu flexibles tout en assurant les dimensions requises par les normes d'accessibilité hospitalière, avec un excellent rendu esthétique et une parfaite conformité aux normes d'hygiène — sans interrompre les activités médicales du service.",
    solution:
      "Construction d'une solution de cloisonnement en menuiserie aluminium, fabriquée sur chantier et posée par les équipes Haubans, permettant de gagner un espace bureau de consultation supplémentaire tout en optimisant la circulation.",
    constraints: [
      "Respect des normes d'accessibilité hospitalières",
      "Réalisation des travaux dans la zone tampon entre la salle d'attente patients et les bureaux de consultation, sans interruption des activités médicales",
    ],
    results:
      "L'accroissement continu du nombre de patients appelle à penser des infrastructures évolutives sans perdre en efficacité.",
    keyStats: [
      { value: '83 m²', label: 'de cloisons posées en 48h, sans interruption des activités médicales' },
    ],
    coverImage: `${IMG}/cloisons-montage-cadre.jpg`,
    images: [`${IMG}/cloisons-montage-cadre.jpg`, `${IMG}/cloisons-decoupe-aluminium.jpg`],
  },
  {
    id: 'plafond-acoustique-thermique',
    slug: 'plafond-acoustique-thermique',
    title: 'Plafond acoustique et thermique — Local du simulateur',
    category: 'Plafonds',
    client: 'Hôpital Général de Douala',
    location: 'Douala, Cameroun',
    period: '2022',
    summary:
      "Plafond en dalle minérale de classe A pour la salle du simulateur numérique et sa salle de contrôle.",
    context:
      "Afin d'assurer l'intégrité des blindages en béton lors des travaux de réseaux, de favoriser le confort des patients et de contrôler l'ambiance thermique, le cahier des charges de l'aménagement du local du simulateur de cobaltothérapie prévoyait la construction d'un plafond en dalle minérale.",
    challenge:
      "Une solution classique pour les salles de machines médicales, mais dont la pose exige beaucoup de rigueur : l'ossature métallique sert de support à de lourds câbles électriques, les fixations se font sur un béton très dense, et les panneaux sont exposés en permanence à une température de salle inférieure à 20°C.",
    solution:
      "Installation de dalles minérales de classe A, choisies pour leur isolation acoustique et thermique, leur réaction au feu, leur résistance à l'humidité et la qualité de l'air qu'elles préservent — un enjeu majeur pour la stabilité des patients et la confidentialité selon les normes d'architecture hospitalière.",
    constraints: [
      "L'ossature métallique du plafond sert de support aux réseaux sous dalle, dont de lourds câbles électriques type 6x4 mm² (0,54 kg/m)",
      'Fixation des éléments sur un béton très dense',
      "Exposition permanente des panneaux à une température de salle inférieure à 20°C",
    ],
    keyStats: [
      { value: '45 m²', label: 'de plafond pour le local simulateur et la salle de contrôle, construits en 36h' },
    ],
    coverImage: `${IMG}/biomedical-simulateur-technicien.jpg`,
    images: [`${IMG}/biomedical-simulateur-technicien.jpg`],
  },
  {
    id: 'protection-ionisante',
    slug: 'protection-ionisante',
    title: 'Protection ionisante — Porte blindée du simulateur',
    category: 'Radioprotection',
    client: 'Hôpital Général de Douala',
    location: 'Douala, Cameroun',
    period: '2022 – 2025',
    summary:
      'Porte blindée au plomb et système de contrôle sécurisé pour protéger le personnel soignant du service de cobaltothérapie.',
    context:
      "L'Hôpital Général de Douala a mis à disposition des moyens de surveillance et de mesure d'impact des activités radioactives sur la santé du personnel soignant du service de cobaltothérapie, avec la conviction de renforcer la sécurité de son personnel.",
    challenge:
      "Assurer des barrières étanches contre le rayonnement X émis par le simulateur numérique, dans un environnement très radioactif, sous le contrôle strict de l'Agence Nationale de Radioprotection.",
    solution:
      "Conformément aux normes de radioprotection, construction d'une porte blindée au plomb de 3mm et installation de son système de contrôle d'ouverture sécurisée.",
    constraints: [
      "La porte massive pesait environ 135,5 kg, nécessitant des moyens logistiques efficaces pour préserver l'intégrité du blindage lors du transport et de la pose",
      "Réglementation de radioprotection stricte, avec contrôle des travaux assuré par l'Agence Nationale de Radioprotection",
      'Travaux exécutés dans un environnement très radioactif',
    ],
    results:
      "L'efficacité des blindages en radioprotection est un engagement d'une structure sanitaire à protéger son personnel contre les rayonnements ionisants.",
    keyStats: [
      { value: '135,5 kg', label: 'poids de la porte blindée' },
      { value: '3 mm', label: 'épaisseur du blindage plomb' },
      { value: '1200×2000 mm', label: 'dimensions de la porte' },
    ],
    coverImage: `${IMG}/avenir-visite-officielle.jpg`,
    images: [`${IMG}/avenir-visite-officielle.jpg`, `${IMG}/biomedical-installation-equipement.jpg`],
  },
  {
    id: 'protection-electrostatique',
    slug: 'protection-electrostatique',
    title: "Protection électrostatique — Sol E.S.D du service d'oncologie",
    category: 'Protection électrostatique',
    client: 'Hôpital Général de Douala',
    location: 'Douala, Cameroun',
    period: '2022 – 2025',
    summary:
      'Sol PVC antistatique haute résistance pour protéger les équipements du simulateur des décharges électrostatiques.',
    context:
      "Dans son souci de mise en service sécurisée de son simulateur numérique, l'Hôpital Général de Douala a défini des objectifs en matière de protection contre les décharges électrostatiques et les surtensions électriques.",
    challenge:
      "Ces décharges et surtensions sont responsables de problèmes temporaires, d'erreurs de fonctionnement, voire de pannes définitives des systèmes — un risque direct pour la fiabilité des examens médicaux et la sécurité des patients.",
    solution:
      "Pose dans les règles de l'art d'un système de sol PVC E.S.D de 2mm d'épaisseur, offrant une résistance électrique très élevée de 10⁹ Ω, installé en deux phases : avant l'installation du simulateur, puis lors des travaux de raccords en finition.",
    constraints: [
      'Disponibilité sur le marché local des matériaux du système de sol PVC E.S.D',
      'Protection du système face au roulement des équipements du simulateur, installés en parallèle',
    ],
    keyStats: [
      { value: '37 m²', label: 'de sol antistatique posé en deux phases' },
      { value: '10⁹ Ω', label: 'résistance électrique du revêtement' },
    ],
    coverImage: `${IMG}/genie-civil-finition-sol.jpg`,
    images: [`${IMG}/genie-civil-finition-sol.jpg`],
  },
  {
    id: 'electricite-systemes',
    slug: 'electricite-systemes',
    title: 'Électricité et systèmes — Alimentation du simulateur numérique',
    category: 'Électricité',
    client: 'Hôpital Général de Douala',
    location: 'Douala, Cameroun',
    period: '2022 – 2025',
    summary:
      "Restructuration complète du réseau électrique et des appareillages du local du simulateur et de sa salle de contrôle.",
    context:
      "Conscient des enjeux de la qualité de l'alimentation électrique nécessaire au fonctionnement optimal du simulateur numérique et de ses équipements, l'Hôpital Général de Douala a commandé la restructuration complète du réseau électrique et des appareillages du local, en connexion avec la salle de contrôle nouvellement construite.",
    challenge:
      "Gérer la continuité de la fourniture du courant électrique et la sécurité des personnes autour du projet, dans un environnement radioactif.",
    solution:
      "Depuis le TGBT jusqu'aux prises de courant de 220 Volts, mise à disposition d'une tension de 420 Volts requise par le générateur de puissance du simulateur, et mise à niveau des armoires de distribution du service de cobaltothérapie — des travaux réalisés sans interruption des activités médicales.",
    constraints: [
      'Gestion de la continuité de la fourniture du courant électrique',
      'Sécurité des personnes autour du projet',
      'Environnement radioactif',
    ],
    results:
      'Des installations électriques pensées pour protéger les personnes, sécuriser les équipements médicaux et minimiser les pertes d\'énergie.',
    keyStats: [
      { value: '420 V', label: "puissance installée pour l'accélérateur du simulateur numérique" },
      { value: '220 V', label: 'puissance installée pour les équipements' },
    ],
    coverImage: `${IMG}/electricite-controle-armoire.jpg`,
    images: [`${IMG}/electricite-controle-armoire.jpg`, `${IMG}/electricite-armoire-technique.jpg`],
  },
  {
    id: 'videosurveillance',
    slug: 'videosurveillance',
    title: 'Vidéosurveillance — Sécurité du service de cobaltothérapie',
    category: 'Vidéosurveillance',
    client: 'Hôpital Général de Douala',
    location: 'Douala, Cameroun',
    period: '2022 – 2025',
    summary:
      'Caméras dôme IP pour sécuriser les patients pendant les examens et renforcer le contrôle depuis la zone blindée.',
    context:
      "Après discussion sur la sécurité du patient exposé au rayonnement X, les oncologues ont convenu de l'installation de caméras en complément de la baie vitrée plombée, renforçant l'efficacité d'intervention des opérateurs depuis la zone de contrôle blindée.",
    challenge:
      "Vérifier le positionnement du patient et assurer sa sécurité pendant toute la durée de l'exposition aux rayons X, depuis une zone de contrôle protégée du rayonnement.",
    solution:
      "Installation de caméras CCTV type dôme mini IP 4MP IK10 IP54, avec vision nocturne pour les conditions de faible éclairage, enregistrement continu pour documentation, monitoring en temps réel depuis la zone de contrôle protégée, et zoom pour surveiller de près le patient.",
    constraints: [],
    results:
      'Les infrastructures hospitalières modernes sont un environnement où la sécurité des patients, du personnel soignant et des équipements médicaux est une priorité absolue.',
    keyStats: [{ value: '4MP · IK10 · IP54', label: 'caméras dôme IP haute résistance' }],
    coverImage: `${IMG}/hero-hopital-general-douala.jpg`,
    images: [`${IMG}/hero-hopital-general-douala.jpg`],
  },
  {
    id: 'climatisation-vmc',
    slug: 'climatisation-vmc',
    title: "Climatisation & V.M.C — Confort thermique du service d'oncologie",
    category: 'Climatisation',
    client: 'Hôpital Général de Douala',
    location: 'Douala, Cameroun',
    period: '2022 – 2025',
    summary:
      'Dimensionnement et installation du système de climatisation du local simulateur, économique et efficace sur le plan énergétique.',
    context:
      "La mise en service du nouveau simulateur numérique a entraîné un afflux massif de patients, et donc un besoin de restructuration des locaux du service d'oncologie — notamment de ses systèmes de ventilation et de climatisation.",
    challenge:
      "Équilibrer la température entre la salle de contrôle et le local du simulateur afin de réduire les buées sur la vitre plombée située à la frontière des deux enceintes, tout en garantissant un taux d'humidité maîtrisé.",
    solution:
      "Dimensionnement et installation d'un système de climatisation fonctionnel et efficace sur le plan énergétique, apportant le confort thermique au personnel soignant et aux patients tout en garantissant la pérennité du simulateur numérique et de l'ensemble de ses équipements.",
    constraints: [
      'Équilibrer la température de la salle de contrôle et celle du local du simulateur pour réduire les buées sur la vitre plombée',
      "Garantir un taux d'humidité en dessous de 75%",
    ],
    keyStats: [{ value: '< 75 %', label: "taux d'humidité garanti" }],
    coverImage: `${IMG}/architecture-couloir-vitre.jpg`,
    images: [`${IMG}/architecture-couloir-vitre.jpg`],
  },
  {
    id: 'genie-civil',
    slug: 'genie-civil',
    title: 'Génie civil — Modernisation des bâtiments historiques',
    category: 'Génie civil',
    client: 'Hôpital Général de Douala',
    location: 'Douala, Cameroun',
    period: 'Depuis 2021',
    summary:
      "Modernisation, maintenance et normalisation des infrastructures d'un hôpital construit à la fin des années 90.",
    context:
      "L'Hôpital Général de Douala a été construit à la fin des années 90. Les besoins actuels portent à la fois sur la construction d'édifices modernes et sur d'importants travaux de modernisation et de normalisation des infrastructures des anciens bâtiments.",
    challenge:
      "Accompagner cette phase de transition avec des projets à fort impact sur l'efficacité des infrastructures, tout en assurant la continuité des services et en minimisant l'impact des travaux sur l'accessibilité aux bâtiments.",
    solution:
      "Depuis 2021, l'expertise Haubans dans les métiers du bâtiment (V.R.D, assainissement, matériaux, construction) accompagne l'hôpital avec des projets qui améliorent en continu la qualité de prise en charge des patients et les conditions de travail du personnel.",
    constraints: [
      'Haut niveau de sécurité des personnes et de l\'environnement',
      "Organisation opérationnelle pour minimiser l'impact des travaux sur l'accessibilité aux bâtiments",
      'Analyse des besoins sanitaires national et local actuels',
      "Continuité des services et réorganisation de l'accessibilité",
    ],
    keyStats: [{ value: '2021', label: "début de l'accompagnement de la phase de modernisation" }],
    coverImage: `${IMG}/genie-civil-percement.jpg`,
    images: [`${IMG}/genie-civil-percement.jpg`, `${IMG}/genie-civil-finition-sol.jpg`],
  },
  {
    id: 'architecture-hospitaliere',
    slug: 'architecture-pavillon-vip-neonatalogie',
    title: 'Architecture — Pavillon VIP, néonatalogie et mise aux normes PMR',
    category: 'Architecture',
    client: 'Hôpital Général de Douala',
    location: 'Douala, Cameroun',
    period: '2022 – 2025',
    summary:
      "Extension de la néonatalogie, création d'un pavillon VIP et mise aux normes PMR — au service d'une offre hôtelière modernisée.",
    context:
      "Fort de sa position de premier établissement hospitalier du Cameroun, l'Hôpital Général s'est lancé dans un vaste projet de modernisation de son offre hôtelière, ouvrant aux patients de nouvelles expériences de soins plus particulières et efficaces.",
    challenge:
      "Moderniser et renforcer la capacité d'accueil de l'hôpital dans le strict respect des normes architecturales et de l'accessibilité.",
    solution:
      "Trois projets majeurs confiés à Haubans : l'extension et la modernisation du service de néonatalogie avec la création d'une salle Kangourou pour un meilleur développement des prématurés ; la création d'un pavillon V.I.P offrant un niveau de service hôtelier haut de gamme dans un environnement hautement sécurisé ; la modernisation et la mise aux normes PMR des toilettes des chambres individuelles.",
    constraints: [],
    results:
      "Nos solutions privilégient le confort, la flexibilité des espaces, l'innovation et la durabilité, afin d'accompagner l'évolution des besoins de santé tout en renforçant la confiance des patients et des partenaires.",
    keyStats: [
      { value: '1300 m²', label: 'de surface de plancher rénovée' },
      { value: '60', label: 'chambres individuelles impactées par la mise aux normes' },
    ],
    coverImage: `${IMG}/architecture-chambre-patient.jpg`,
    images: [
      `${IMG}/architecture-chambre-patient.jpg`,
      `${IMG}/architecture-couloir-vitre.jpg`,
      `${IMG}/hero-hopital-general-douala.jpg`,
    ],
  },
];

export const projectCategories: Project['category'][] = [
  'Architecture',
  'Électricité',
  'Radioprotection',
  'Climatisation',
  'Vidéosurveillance',
  'Protection électrostatique',
  'Cloisons',
  'Plafonds',
  'Génie civil',
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
