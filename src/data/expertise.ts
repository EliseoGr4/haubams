import type { Expertise } from '@/types';

/**
 * Les 10 "spécialités maîtrisées" annoncées par le portfolio se répartissent
 * ici en 11 cartes : Génie civil et Architecture sont présentés séparément
 * (comme dans le portfolio, pages 28 et 30, et comme dans la liste des
 * catégories de réalisations) plutôt que fusionnés en une seule carte, pour
 * rester cohérent avec le filtre des réalisations.
 * Biomédical et Fournitures & maintenance n'ont pas de page de contenu
 * chiffrée dédiée dans le portfolio : leur texte reste volontairement
 * général, sans statistique inventée.
 */
export const expertiseList: Expertise[] = [
  {
    id: 'cloisons-amovibles',
    slug: 'cloisons-amovibles',
    icon: 'panels',
    title: 'Cloisons amovibles',
    shortDescription:
      'Cloisonnement en menuiserie aluminium pour créer des espaces hospitaliers modulables, sans interrompre les activités médicales.',
    fullDescription:
      "Une solution privilégiée pour les réaménagements d'espaces peu flexibles : elle assure les dimensions requises par les normes d'accessibilité hospitalière, avec un excellent rendu esthétique et une parfaite conformité aux normes d'hygiène en milieu hospitalier.",
    relatedProjectId: 'cloisons-amovibles',
  },
  {
    id: 'protection-ionisante',
    slug: 'protection-ionisante',
    icon: 'shield-radiation',
    title: 'Protection ionisante',
    shortDescription:
      'Blindages et portes plombées conformes aux normes de radioprotection pour les services utilisant des rayonnements ionisants.',
    fullDescription:
      "Barrières étanches contre les rayonnements, portes blindées au plomb et systèmes de contrôle d'ouverture sécurisée, réalisés sous le contrôle de l'Agence Nationale de Radioprotection.",
    relatedProjectId: 'protection-ionisante',
  },
  {
    id: 'plafond-acoustique-thermique',
    slug: 'plafond-thermique-acoustique',
    icon: 'thermometer',
    title: 'Plafond thermique et acoustique',
    shortDescription:
      'Plafonds en dalle minérale alliant isolation acoustique, confort thermique et conformité aux normes hospitalières.',
    fullDescription:
      "Les plafonds en dalle minérale participent pleinement à la qualité de prise en charge médicale : isolation acoustique, réaction au feu, résistance à l'humidité et qualité de l'air, pour des chambres, salles de consultation et salles d'examens conformes.",
    relatedProjectId: 'plafond-acoustique-thermique',
  },
  {
    id: 'electricite-systemes',
    slug: 'electricite-systemes',
    icon: 'zap',
    title: 'Électricité et systèmes',
    shortDescription:
      'Restructuration de réseaux électriques et appareillages, du TGBT aux équipements médicaux les plus exigeants.',
    fullDescription:
      "Des installations électriques pensées pour protéger les personnes, sécuriser les équipements médicaux et minimiser les pertes d'énergie, avec une continuité de fourniture assurée en permanence.",
    relatedProjectId: 'electricite-systemes',
  },
  {
    id: 'protection-electrostatique',
    slug: 'protection-electrostatique',
    icon: 'shield-electric',
    title: 'Protection électrostatique',
    shortDescription:
      'Sols antistatiques PVC E.S.D pour protéger les équipements médicaux sensibles des décharges et surtensions.',
    fullDescription:
      "Pose dans les règles de l'art de systèmes de sol E.S.D à haute résistance électrique, afin de garantir la fiabilité des examens médicaux et la sécurité des patients face aux décharges électrostatiques.",
    relatedProjectId: 'protection-electrostatique',
  },
  {
    id: 'videosurveillance',
    slug: 'videosurveillance',
    icon: 'camera',
    title: 'Vidéosurveillance',
    shortDescription:
      "Systèmes de vidéosurveillance dédiés à la sécurité des patients et à l'efficacité des interventions en zone sensible.",
    fullDescription:
      'Caméras dôme IP avec vision nocturne, enregistrement continu et monitoring en temps réel depuis une zone de contrôle protégée, pour sécuriser les patients pendant les examens les plus sensibles.',
    relatedProjectId: 'videosurveillance',
  },
  {
    id: 'climatisation-vmc',
    slug: 'climatisation-vmc',
    icon: 'wind',
    title: 'Climatisation & V.M.C',
    shortDescription:
      'Systèmes de climatisation et de ventilation économiques, garantissant confort et stabilité hygrométrique.',
    fullDescription:
      "Des systèmes dimensionnés pour apporter le confort thermique au personnel soignant et aux patients, tout en garantissant l'ambiance hygrométrique nécessaire à la pérennité des équipements médicaux.",
    relatedProjectId: 'climatisation-vmc',
  },
  {
    id: 'biomedical',
    slug: 'biomedical',
    icon: 'stethoscope',
    title: 'Biomédical',
    shortDescription:
      "Appui technique lors de l'installation et du suivi d'équipements biomédicaux sensibles.",
    fullDescription:
      "Nos équipes interviennent en coordination avec les fabricants et les services hospitaliers concernés lors de l'installation et de la mise en service d'équipements biomédicaux sensibles, dans le respect des exigences techniques propres à chaque appareil.",
  },
  {
    id: 'genie-civil',
    slug: 'genie-civil',
    icon: 'building',
    title: 'Génie civil',
    shortDescription:
      'Construction, modernisation et mise aux normes des infrastructures hospitalières, en site occupé.',
    fullDescription:
      "Accompagnement des établissements de santé dans la modernisation, la maintenance et la normalisation de leurs infrastructures anciennes, avec un haut niveau de sécurité et une organisation opérationnelle qui minimise l'impact sur l'accessibilité aux bâtiments.",
    relatedProjectId: 'genie-civil',
  },
  {
    id: 'architecture',
    slug: 'architecture',
    icon: 'building-2',
    title: 'Architecture',
    shortDescription:
      "Conception et restructuration d'espaces hospitaliers haut de gamme, du pavillon VIP à la mise aux normes PMR.",
    fullDescription:
      "Des solutions qui privilégient le confort, la flexibilité des espaces, l'innovation et la durabilité, pour accompagner l'évolution des besoins de santé tout en renforçant la confiance des patients et des partenaires.",
    relatedProjectId: 'architecture-hospitaliere',
  },
  {
    id: 'fournitures-maintenance',
    slug: 'fournitures-maintenance',
    icon: 'wrench',
    title: 'Fournitures & maintenance',
    shortDescription:
      'Fournitures techniques, audit, réalisation et maintenance pour des équipements hospitaliers fiables dans la durée.',
    fullDescription:
      'Des matériels et fournitures de qualité pour transformer les défis hospitaliers en solutions durables : audit technique, réalisation, maintenance et réparation, dans le respect des normes et de la sécurité.',
  },
];
