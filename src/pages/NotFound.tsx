import { ArrowLeft } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  useSEO({
    title: 'Page introuvable',
    description: "Cette page n'existe pas ou plus.",
  });

  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container size="narrow" className="text-center">
        <span className="font-mono text-6xl font-bold text-accent-500 sm:text-7xl">404</span>
        <h1 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          Page introuvable
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy-700/75">
          La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/" variant="secondary" icon={<ArrowLeft size={16} />}>
            Retour à l&rsquo;accueil
          </Button>
        </div>
      </Container>
    </section>
  );
}
