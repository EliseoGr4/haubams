import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="bg-navy-900 pb-16 pt-36 sm:pb-20 sm:pt-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-400">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && <p className="mt-4 text-lg leading-relaxed text-white/70">{description}</p>}
        </motion.div>
      </Container>
    </div>
  );
}
