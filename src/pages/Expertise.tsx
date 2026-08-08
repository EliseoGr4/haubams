import { useSEO } from '@/hooks/useSEO';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { ExpertiseGrid } from '@/components/expertise/ExpertiseGrid';
import { expertiseList } from '@/data/expertise';

export default function Expertise() {
  useSEO({
    title: 'Nos expertises',
    description:
      "8 spécialités maîtrisées en corps d'états techniques et architecturaux : radioprotection, électricité, climatisation, cloisons, génie civil, architecture hospitalière et plus.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Nos expertises"
        title="Une expertise intégrée, au service du secteur hospitalier"
        description="Des corps d'états techniques aux corps d'états architecturaux, chaque spécialité répond aux exigences propres à l'environnement hospitalier."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <ExpertiseGrid items={expertiseList} />
        </Container>
      </section>
    </>
  );
}
