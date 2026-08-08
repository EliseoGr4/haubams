import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { projects, projectCategories } from '@/data/projects';

export default function Projects() {
  useSEO({
    title: 'Nos réalisations',
    description:
      "Aménagement du premier simulateur numérique de cobaltothérapie du Cameroun, à l'Hôpital Général de Douala (2022–2025) : radioprotection, électricité, climatisation, architecture et génie civil.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Nos réalisations"
        title="Hôpital Général de Douala"
        description="Entre 2022 et 2025, Haubans a accompagné la modernisation des infrastructures de l'Hôpital Général de Douala, avec pour projet phare l'aménagement du premier simulateur numérique de cobaltothérapie du Cameroun."
      />

      <section className="border-b border-navy-900/10 py-14 sm:py-16">
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-base leading-relaxed text-navy-700/85 sm:text-lg"
          >
            Ce programme s&rsquo;est décomposé en plusieurs lots techniques et architecturaux, chacun mené
            en site hospitalier occupé, sans interruption des activités médicales. Explorez chaque lot
            ci-dessous, ou filtrez par spécialité.
          </motion.p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ProjectGrid projects={projects} categories={projectCategories} />
        </Container>
      </section>
    </>
  );
}
