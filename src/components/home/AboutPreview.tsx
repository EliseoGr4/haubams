import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Button } from '@/components/ui/Button';
import { company, aboutStats } from '@/data/company';

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle eyebrow="Qui sommes-nous" title="Un partenaire technique pour la santé de demain" />
            <p className="mt-6 text-base leading-relaxed text-navy-700/90 sm:text-lg">
              {company.edito[0]}
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-700/90 sm:text-lg">
              {company.mission}
            </p>
            <div className="mt-8">
              <Button to="/a-propos" variant="ghost-dark" icon={<ArrowRight size={16} />}>
                En savoir plus sur Haubans
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6"
          >
            {aboutStats.map((stat) => {
              const numeric = parseInt(stat.value.replace(/\D/g, ''), 10);
              return (
                <div
                  key={stat.label}
                  className="border border-navy-900/10 bg-white px-6 py-7 shadow-sm lg:flex lg:items-center lg:gap-6 lg:px-8"
                >
                  <div className="font-mono text-4xl font-semibold text-navy-900 sm:text-5xl">
                    <AnimatedCounter target={numeric} prefix={stat.value.includes('+') ? '+' : ''} />
                  </div>
                  <p className="mt-2 text-sm text-navy-700/70 lg:mt-0">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
