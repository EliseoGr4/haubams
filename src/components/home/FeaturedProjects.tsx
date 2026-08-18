import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

const FEATURED_IDS = ['protection-ionisante', 'architecture-hospitaliere', 'cloisons-amovibles'];

export function FeaturedProjects() {
  const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <section className="bg-navy-900/2 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Nos réalisations"
            title="Hôpital Général de Douala, 2022–2025"
            description="Premier simulateur numérique de cobaltothérapie du Cameroun : un programme complet, du gros œuvre à la radioprotection."
          />
          <Button to="/nos-realisations" variant="ghost-dark" icon={<ArrowRight size={16} />} className="shrink-0">
            Voir toutes les réalisations
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
