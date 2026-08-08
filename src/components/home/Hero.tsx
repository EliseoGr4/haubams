import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { company } from '@/data/company';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-navy-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-hopital-general-douala.jpg)' }}
        role="img"
        aria-label="Couloir de l'Hôpital Général de Douala, rénové par Haubans SARL"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
      <div className="absolute inset-0 bg-navy-950/25" />

      <Container className="relative pb-24 pt-48 sm:pb-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span
            variants={item}
            className="mb-5 inline-block border border-accent-500/40 bg-accent-500/10 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-400"
          >
            Ingénierie hospitalière — Cameroun
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl"
          >
            {company.heroHeadline}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {company.heroSubtext}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button to="/nos-realisations" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Découvrir nos réalisations
            </Button>
            <Button to="/contact" variant="ghost-light" size="lg">
              Nous contacter
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Défiler</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
