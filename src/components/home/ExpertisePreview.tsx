import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { ExpertiseGrid } from '@/components/expertise/ExpertiseGrid';
import { expertiseList } from '@/data/expertise';

export function ExpertisePreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Nos expertises"
            title="8 spécialités maîtrisées, une approche intégrée"
            description="Des corps d'états techniques aux corps d'états architecturaux, nos équipes couvrent l'ensemble des besoins d'un projet hospitalier."
          />
          <Button to="/nos-expertises" variant="ghost-dark" icon={<ArrowRight size={16} />} className="shrink-0">
            Toutes nos expertises
          </Button>
        </div>

        <div className="mt-12">
          <ExpertiseGrid items={expertiseList.slice(0, 6)} />
        </div>
      </Container>
    </section>
  );
}
