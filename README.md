# Site web — Haubans SARL

Site vitrine professionnel pour **Haubans SARL**, bureau d'ingénierie hospitalière basé au Cameroun.
Construit à partir du portfolio PDF *"Portfolio en ingénierie hospitalière — Édition 2027"* comme source
de vérité unique : aucune information (chiffre, client, certification, projet) n'a été inventée.

## Stack technique

- **React 19** + **TypeScript** (strict) + **Vite**
- **Tailwind CSS v4** (configuration CSS-first, voir `src/index.css`)
- **React Router v7** — routage par page, chargement différé (`React.lazy`)
- **Framer Motion** — animations d'apparition, transitions, compteurs animés
- **Lucide React** — iconographie
- `clsx` — seule dépendance ajoutée au-delà de la liste demandée, pour la gestion des classes conditionnelles

## Démarrage

```bash
npm install
npm run dev       # serveur de développement (http://localhost:5173)
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build de production
npm run lint       # oxlint
```

Le projet ne nécessite aucune variable d'environnement pour fonctionner en l'état.

## Structure du projet

```
src/
├── components/
│   ├── layout/      Navbar, Footer, PageHeader
│   ├── ui/          Button, Container, Logo, SectionTitle, StatBlock,
│   │                 AnimatedCounter, ActivityDonut, BrandIcons
│   ├── home/         Sections assemblées sur la page d'accueil
│   ├── expertise/    Carte + grille des spécialités
│   ├── projects/     Carte, grille filtrable, filtre, galerie lightbox
│   ├── method/       Timeline 4 étapes + schéma d'approche
│   └── contact/      Formulaire de contact
├── pages/            Une page par route (voir App.tsx)
├── data/             company.ts, expertise.ts, projects.ts — contenu séparé de l'UI
├── types/            Types TypeScript partagés
├── hooks/            useSEO, useCountUp, useScrolled
└── utils/            cn.ts (classes conditionnelles), contactService.ts
```

## Contenu : fidélité à la source

- **`src/data/company.ts`, `expertise.ts`, `projects.ts`** portent chacun un commentaire d'en-tête expliquant
  d'où vient le contenu et les choix de structuration faits par rapport au PDF.
- **9 réalisations** = les 9 lots techniques du programme "Hôpital Général de Douala, 2022–2025"
  (simulateur numérique de cobaltothérapie), chacun avec ses vraies contraintes et chiffres.
- **10 spécialités** = liste exacte du portfolio. *Génie civil* et *Architecture* sont deux cartes
  distinctes (comme dans le PDF, pages 28 et 30) plutôt qu'une seule fusionnée.
- **Biomédical** et **Fournitures & maintenance** ont un texte volontairement général : le portfolio ne
  leur consacre pas de page chiffrée dédiée.

### Points laissés en l'état, à compléter par vous

| Élément | État actuel | Pourquoi |
|---|---|---|
| Adresse email | Non affichée | Absente du portfolio — non inventée |
| B.P. (boîte postale) | `B.P. 0000, Yaoundé` | C'est déjà ainsi dans le PDF source (probablement un champ jamais complété) |
| Réseaux sociaux | Icônes visibles mais liens désactivés (`available: false` dans `company.ts`) | Pictos YouTube/Instagram/Facebook aperçus sur les gilets du portfolio, sans identifiant fourni |
| Logo | Recréation SVG maison dans `components/ui/Logo.tsx` | Aucun fichier vectoriel de marque fourni — un seul fichier à modifier le jour où vous en avez un |

Pour publier une info manquante, il suffit d'éditer `src/data/company.ts` (ex. `email: 'contact@...'`,
ou passer `available: true` sur le bon réseau social dans `socialLinks`).

## Formulaire de contact

Le formulaire (`src/components/contact/ContactForm.tsx`) valide les champs côté client et simule un envoi
via `src/utils/contactService.ts`. **Aucun email n'est réellement envoyé** — un message clair l'indique
sous le formulaire.

Pour brancher un vrai envoi plus tard, il n'y a qu'un seul fichier à modifier :
`src/utils/contactService.ts` (des exemples pour une API maison, Firebase ou un service d'emailing
sont commentés directement dans le fichier). Le composant `ContactForm` n'a besoin d'aucun changement.

## Images

Les 14 photos fournies sont dans `public/images/`, renommées explicitement selon leur contenu
(ex. `cloisons-montage-cadre.jpg`, `protection-ionisante` illustrée par la visite officielle, etc.).
Pour remplacer une image, il suffit de déposer le nouveau fichier dans `public/images/` sous le même nom,
ou de mettre à jour le chemin dans `src/data/projects.ts` / les composants concernés.

## Décisions techniques notables

- **Pas de librairie de graphique** : le donut "Nos activités" (page À propos) est un SVG animé fait main
  (`components/ui/ActivityDonut.tsx`) — une seule visualisation ne justifiait pas une dépendance dédiée.
- **Pas de react-helmet** : `hooks/useSEO.ts` met à jour `document.title` et les meta tags par un simple
  effet React, propre à une SPA à une seule page montée à la fois.
- **Polices auto-hébergées** via `@fontsource`, sous-ensembles `latin` + `latin-ext` uniquement (le site
  est en français — inutile d'embarquer cyrillique, grec ou vietnamien).
- **Chunking manuel** (`vite.config.ts`) : `react`/`react-router` et `framer-motion` sont isolés du code
  applicatif pour un meilleur cache navigateur ; chaque page est en plus son propre chunk (`React.lazy`).
- **Rendu 100% client (CSR)** : les meta tags par page ne sont donc pas visibles par les robots qui
  n'exécutent pas JavaScript, ni par certains aperçus de partage sur réseaux sociaux. Standard pour un
  site vitrine B2B ; si un SEO/preview parfait devient critique, une migration vers un framework SSR
  (Next.js, Astro) serait l'étape logique suivante.

## Accessibilité

Navigation clavier testée sur la navbar/menu mobile, `focus-visible` cohérent avec la charte, labels de
formulaire associés, `alt` descriptifs sur toutes les images, une seule balise `<h1>` par page,
`prefers-reduced-motion` respecté (voir `useCountUp.ts` et `index.css`).

## Déploiement

Le build (`npm run build`) génère un dossier `dist/` statique, déployable tel quel sur Netlify, Vercel,
GitHub Pages ou tout hébergement statique. Comme il s'agit d'une SPA avec React Router, configurez une
redirection de toutes les routes vers `index.html` côté hébergeur (ex. fichier `_redirects` sur Netlify :
`/* /index.html 200`).
