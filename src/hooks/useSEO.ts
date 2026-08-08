import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description: string;
}

const SITE_NAME = 'Haubans SARL';

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Met à jour document.title et les meta tags de description / Open Graph
 * pour la page courante. Volontairement sans dépendance (react-helmet) :
 * une seule page à la fois est montée par React Router, donc un effet
 * simple suffit et évite d'ajouter un paquet supplémentaire.
 */
export function useSEO({ title, description }: SEOOptions) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
  }, [title, description]);
}
