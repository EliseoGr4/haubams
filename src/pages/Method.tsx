import { useSEO } from '@/hooks/useSEO';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MethodTimeline } from '@/components/method/MethodTimeline';
import { ApproachDiagram } from '@/components/method/ApproachDiagram';
import { methodSteps } from '@/data/company';

export default function Method() {
  useSEO({
    title: 'Notre méthode',
    description:
      "De l'analyse en bureau d'étude à la maintenance, découvrez le processus en 4 étapes que Haubans applique à chaque projet hospitalier.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Notre méthode"
        title="Un processus maîtrisé, à chaque étape de vos projets"
        description="Analyse, réalisation, mise en exploitation, maintenance : une méthode conçue pour les exigences des environnements hospitaliers."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <MethodTimeline steps={methodSteps} />
        </Container>
      </section>

      <section className="border-y border-navy-900/10">
        <div className="relative">
          <img
            src="/images/methode-bureau-etude-equipe.jpg"
            alt="Équipe Haubans et médecins de l'Hôpital Général de Douala examinant les plans du service"
            className="h-[420px] w-full object-cover sm:h-[480px]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
          <Container className="absolute inset-x-0 bottom-0 pb-10">
            <p className="max-w-lg font-display text-lg font-medium leading-snug text-white sm:text-xl">
              Notre bureau d&rsquo;étude interne travaille en lien direct avec les équipes médicales, à
              chaque étape du projet.
            </p>
          </Container>
        </div>
      </section>

      <section className="bg-navy-900/2 py-20 sm:py-28">
        <Container>
          <SectionTitle
            eyebrow="Notre approche"
            title="Des besoins des patients aux environnements de soins fiables"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <ApproachDiagram />
          </div>
        </Container>
      </section>
    </>
  );
}
