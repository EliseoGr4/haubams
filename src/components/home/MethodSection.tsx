import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { MethodTimeline } from '@/components/method/MethodTimeline';
import { methodSteps } from '@/data/company';

export function MethodSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Notre méthode"
            title="Un processus maîtrisé, de l'étude à la maintenance"
          />
          <Button to="/notre-methode" variant="ghost-dark" icon={<ArrowRight size={16} />} className="shrink-0">
            Notre méthode en détail
          </Button>
        </div>

        <div className="mt-14">
          <MethodTimeline steps={methodSteps} />
        </div>
      </Container>
    </section>
  );
}
