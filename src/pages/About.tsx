import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ActivityDonut } from '@/components/ui/ActivityDonut';
import { company, aboutStats, values, activityBreakdown } from '@/data/company';

export default function About() {
  useSEO({
    title: 'À propos',
    description:
      "Depuis plus de cinq ans, Haubans SARL accompagne les établissements de santé du Cameroun dans la conception, la réalisation et la maintenance de leurs infrastructures.",
  });

  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Un partenaire technique de confiance pour la santé"
        description="Ingénierie, conception et maintenance au service des établissements de santé du Cameroun."
      />

      {/* Édito */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/equipe-directeur-general.jpg"
                alt="Ing. Reminick Djapou, Directeur Général de Haubans SARL"
                className="aspect-[4/5] w-full max-w-sm object-cover"
              />
              <div className="mt-6 max-w-sm border-l-2 border-accent-500 pl-5">
                <Quote size={20} className="text-accent-500" />
                <p className="mt-3 font-display text-base font-medium italic leading-relaxed text-navy-900">
                  {company.ceo.quote}
                </p>
                <p className="mt-4 text-sm text-navy-700/70">
                  {company.ceo.name}
                  <br />
                  {company.ceo.role}
                </p>
              </div>
            </motion.div>

            <div>
              <SectionTitle eyebrow="Édito" title="Bâtir la confiance, projet après projet" />
              <div className="mt-8 space-y-5">
                {company.edito.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-navy-700/85">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="border border-navy-900/10 bg-white px-4 py-5">
                    <div className="font-mono text-2xl font-semibold text-navy-900 sm:text-3xl">
                      {stat.value}
                    </div>
                    <p className="mt-1 text-xs leading-snug text-navy-700/65">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container size="narrow">
          <SectionTitle eyebrow="Notre mission" title="Assurer la pérennité de vos investissements" theme="dark" />
          <p className="mt-6 text-lg leading-relaxed text-white/75">{company.mission}</p>
        </Container>
      </section>

      {/* Valeurs */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Ce qui guide chacun de nos projets"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8">
                <h3 className="font-display text-base font-bold text-navy-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/75">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Activités */}
      <section className="border-t border-navy-900/10 py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <SectionTitle
              eyebrow="Nos activités"
              title="Répartition du chiffre d'affaires par type d'activité"
              description="Une activité dominée par la rénovation de bâtiments hospitaliers existants, complétée par la maintenance, les études et la viabilisation."
            />
            <ActivityDonut data={activityBreakdown} />
          </div>
        </Container>
      </section>
    </>
  );
}
