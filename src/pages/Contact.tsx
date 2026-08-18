import { motion } from 'framer-motion';
import { MapPin, Phone, Globe } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/contact/ContactForm';
import { company } from '@/data/company';

export default function Contact() {
  useSEO({
    title: 'Contact',
    description:
      "Contactez Haubans SARL pour vos projets d'ingénierie hospitalière : Direction Générale, B.P. 0000 Yaoundé — +237 678 899 542.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Notre équipe vous répond pour toute question technique, demande de devis ou prise de rendez-vous."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-lg font-bold text-navy-900">{company.contact.department}</h2>

              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent-600" />
                  <span className="leading-relaxed text-navy-700/85">{company.contact.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-accent-600" />
                  <a href={`tel:${company.contact.phoneRaw}`} className="text-navy-800 hover:text-accent-600">
                    {company.contact.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Globe size={18} className="mt-0.5 shrink-0 text-accent-600" />
                  <a
                    href={`https://${company.contact.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-navy-800 hover:text-accent-600"
                  >
                    {company.contact.website}
                  </a>
                </li>
              </ul>

              <div className="mt-10 border border-navy-900/10 bg-navy-900/2 p-6">
                <h3 className="font-display text-sm font-bold text-navy-900">Directions régionales</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/75">
                  {company.contact.regionalOffices.join(' — ')}, avec une capacité de déploiement dans les 10
                  régions du Cameroun.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
