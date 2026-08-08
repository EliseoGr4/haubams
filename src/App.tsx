import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useProtection } from '@/hooks/useProtection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Chargement paresseux par page : chaque route devient un chunk séparé,
// pour un premier chargement plus léger.
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Expertise = lazy(() => import('@/pages/Expertise'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const Method = lazy(() => import('@/pages/Method'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

/** Remonte en haut de page à chaque changement de route (hors ancres internes). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-navy-900/15 border-t-accent-500" />
    </div>
  );
}

function App() {
  // Protection anti-copie : bloque clic droit, raccourcis clavier et DevTools
  useProtection();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/nos-expertises" element={<Expertise />} />
            <Route path="/nos-realisations" element={<Projects />} />
            <Route path="/realisations/:slug" element={<ProjectDetail />} />
            <Route path="/notre-methode" element={<Method />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
