import { motion } from 'framer-motion';
import { Award, Layers, BadgeCheck, Building2, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { whyHaubans } from '@/data/company';

const ICONS: Record<string, LucideIcon> = {
  award: Award,
  layers: Layers,
  'badge-check': BadgeCheck,
  'building-2': Building2,
};

export function WhyHaubansSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionTitle eyebrow="Pourquoi Haubans" title="Un partenaire technique à la hauteur des enjeux hospitaliers" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyHaubans.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-navy-900/10 bg-white p-7"
              >
                <Icon size={26} strokeWidth={1.6} className="text-accent-600" />
                <h3 className="mt-5 font-display text-base font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-700/75">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
