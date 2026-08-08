import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company';

export function CTASection() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-8 border border-navy-900/10 bg-navy-900 px-8 py-12 sm:px-14 sm:py-16 lg:flex-row lg:items-center"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Un projet d&rsquo;infrastructure hospitalière à l&rsquo;étude ?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Parlons de vos besoins en conception, réalisation ou maintenance. Notre bureau d&rsquo;étude
              vous répond depuis Yaoundé et Douala.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Nous contacter
            </Button>
            <Button
              href={`tel:${company.contact.phoneRaw}`}
              variant="ghost-light"
              size="lg"
              icon={<Phone size={16} />}
            >
              {company.contact.phone}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
