import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { useScrolled } from '@/hooks/useScrollPosition';
import { navLinks } from '@/data/company';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(24);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (href === '/#engagements' && isHome) {
      e.preventDefault();
      document.getElementById('engagements')?.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    } else if (href === '/#engagements') {
      e.preventDefault();
      navigate('/');
      setMobileOpen(false);
      window.setTimeout(() => {
        document.getElementById('engagements')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        transparent ? 'bg-transparent py-5' : 'bg-paper/90 py-3 shadow-sm backdrop-blur-md'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" onClick={() => setMobileOpen(false)} aria-label="Haubans — Accueil">
          <Logo variant={transparent ? 'light' : 'dark'} />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.slice(0, -1).map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={cn(
                  'font-display text-sm font-semibold tracking-wide transition-colors',
                  transparent ? 'text-white/90 hover:text-white' : 'text-navy-800 hover:text-accent-600',
                  !link.isAnchor && location.pathname === link.href && (transparent ? 'text-white' : 'text-accent-600')
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/contact" variant={transparent ? 'ghost-light' : 'secondary'} size="md">
            Contact
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className={cn('p-2 lg:hidden', transparent ? 'text-white' : 'text-navy-900')}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden bg-paper lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="block border-b border-navy-900/10 py-3.5 font-display text-base font-semibold text-navy-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
