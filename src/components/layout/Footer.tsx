import { Link } from "react-router-dom";
import { MapPin, Phone, Globe, ExternalLink } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { YoutubeIcon, InstagramIcon, FacebookIcon } from "@/components/ui/BrandIcons";
import { company, navLinks, socialLinks } from "@/data/company";
import { expertiseList } from "@/data/expertise";

const SOCIAL_ICONS = { YouTube: YoutubeIcon, Instagram: InstagramIcon, Facebook: FacebookIcon } as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Colonne 1 — Identité */}
          <div>
            <Logo variant="light" />
            <p className="mt-1.5 text-xs font-mono uppercase tracking-widest text-accent-400">
              Ingénierie hospitalière
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Bureau d&rsquo;ingénierie hospitalière au Cameroun : conception, réalisation et
              maintenance d&rsquo;infrastructures de santé.
            </p>
            <ul className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.available ? social.label : `${social.label} — bientôt disponible`}
                      aria-disabled={!social.available}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-accent-500 hover:text-accent-500"
                      onClick={(e) => !social.available && e.preventDefault()}
                    >
                      <Icon size={16} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/" className="text-sm transition-colors hover:text-accent-400">
                  Accueil
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm transition-colors hover:text-accent-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Expertises */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Nos expertises
            </h3>
            <ul className="mt-5 space-y-3">
              {expertiseList.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link to="/nos-expertises" className="text-sm transition-colors hover:text-accent-400">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Coordonnées */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Coordonnées
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin size={17} className="mt-0.5 shrink-0 text-accent-500" />
                <span>
                  {company.contact.department}
                  <br />
                  {company.contact.address}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={17} className="mt-0.5 shrink-0 text-accent-500" />
                <a href={`tel:${company.contact.phoneRaw}`} className="hover:text-accent-400">
                  {company.contact.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Globe size={17} className="mt-0.5 shrink-0 text-accent-500" />
                <a
                  href={`https://${company.contact.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent-400"
                >
                  {company.contact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Groupe Léon Grosse */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="mb-4 text-xs font-mono uppercase tracking-widest text-white/40">
            Les autres sites du Groupe Léon Grosse
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.leongrosse.fr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/60 transition-colors hover:border-accent-500/50 hover:text-accent-400"
            >
              Léon Grosse — Construction
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName} — Tous droits réservés.
          </p>
          <p>Ingénierie hospitalière — Yaoundé &amp; Douala, Cameroun</p>
        </div>
      </Container>
    </footer>
  );
}
