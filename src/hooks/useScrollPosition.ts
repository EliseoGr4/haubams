import { useEffect, useState } from 'react';

/**
 * Retourne `true` dès que la page a été défilée au-delà de `threshold` px.
 * Utilisé par la Navbar pour passer de transparente à opaque/floutée.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
