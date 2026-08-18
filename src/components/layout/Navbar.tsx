import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useScrolled } from "@/hooks/useScrollPosition";
import { navLinks } from "@/data/company";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const scrolled = useScrolled(24);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (href === "/#engagements" && isHome) {
      e.preventDefault();
      document.getElementById("engagements")?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
      setOpenDropdown(null);
    } else if (href === "/#engagements") {
      e.preventDefault();
      navigate("/");
      setMobileOpen(false);
      setOpenDropdown(null);
      window.setTimeout(() => {
        document.getElementById("engagements")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setMobileOpen(false);
      setOpenDropdown(null);
    }
  };

  const linkClass = (href: string, isAnchor?: boolean) =>
    cn(
      "font-display text-sm font-semibold tracking-wide transition-colors",
      transparent ? "text-white/90 hover:text-white" : "text-navy-800 hover:text-accent-600",
      !isAnchor && location.pathname === href && (transparent ? "text-white" : "text-accent-600")
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent ? "bg-transparent py-5" : "bg-paper/90 py-3 shadow-sm backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" ref={dropdownRef}>
        {/* Logo */}
        <Link to="/" onClick={() => setMobileOpen(false)} aria-label="Haubans — Accueil">
          <Logo variant={transparent ? "light" : "dark"} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.children ? (
                /* Dropdown item */
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={cn(
                      "inline-flex items-center gap-1",
                      linkClass(link.href)
                    )}
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        openDropdown === link.label ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.ul
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-2 min-w-[180px] overflow-hidden border border-navy-900/10 bg-paper shadow-lg"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <li key={child.label} role="none">
                            <Link
                              to={child.href}
                              role="menuitem"
                              className={cn(
                                "block px-4 py-3 text-sm font-semibold font-display transition-colors hover:bg-accent-500/10 hover:text-accent-600",
                                location.pathname === child.href
                                  ? "bg-accent-500/10 text-accent-600"
                                  : "text-navy-800"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Regular link */
                <Link
                  to={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={linkClass(link.href, link.isAnchor)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA — "Votre projet" */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            to="/projet"
            variant={transparent ? "primary" : "primary"}
            size="md"
          >
            Votre projet
          </Button>
        </div>

        {/* Hamburger mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className={cn("p-2 lg:hidden", transparent ? "text-white" : "text-navy-900")}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-paper lg:hidden"
          >
            <div className="px-5 pb-6 pt-2 sm:px-8">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.children ? (
                      /* Mobile expandable group */
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenDropdown(openDropdown === link.label ? null : link.label)
                          }
                          className="flex w-full items-center justify-between border-b border-navy-900/10 py-3.5 font-display text-base font-semibold text-navy-900"
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={cn(
                              "transition-transform",
                              openDropdown === link.label ? "rotate-180" : ""
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4"
                            >
                              {link.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    to={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block border-b border-navy-900/5 py-2.5 text-sm font-medium text-navy-700 hover:text-accent-600"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="block border-b border-navy-900/10 py-3.5 font-display text-base font-semibold text-navy-900"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-5">
                <Button to="/projet" variant="primary" size="md" className="w-full justify-center">
                  Votre projet
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
