import { motion } from 'framer-motion';
import { RefreshCw, ShieldPlus, CalendarClock, ClipboardCheck, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { engagements, safetyGoal } from '@/data/company';

const ICONS: LucideIcon[] = [RefreshCw, ShieldPlus, CalendarClock, ClipboardCheck];

export function EngagementsSection() {
  return (
    <section id="engagements" className="scroll-mt-24 bg-navy-900 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionTitle eyebrow="Nos engagements" title="Ce que nous garantissons à chaque projet" theme="dark" />

            <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {engagements.map((engagement, index) => {
                const Icon = ICONS[index % ICONS.length];
                return (
                  <motion.li
                    key={engagement.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex items-center gap-4 border border-white/10 bg-white/3 px-5 py-5"
                  >
                    <Icon size={22} strokeWidth={1.6} className="shrink-0 text-accent-400" />
                    <span className="font-display text-sm font-semibold text-white">{engagement.title}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center border border-accent-500/20 bg-accent-500/6 p-10 text-center"
          >
            <span className="font-mono text-7xl font-bold text-accent-400 sm:text-8xl">{safetyGoal.value}</span>
            <span className="mt-2 font-display text-sm font-bold uppercase tracking-wider text-white">
              {safetyGoal.label}
            </span>
            <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-white/60">{safetyGoal.context}</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
