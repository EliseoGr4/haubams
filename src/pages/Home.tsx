import { useSEO } from '@/hooks/useSEO';
import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { StatsSection } from '@/components/home/StatsSection';
import { ExpertisePreview } from '@/components/home/ExpertisePreview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { MethodSection } from '@/components/home/MethodSection';
import { WhyHaubansSection } from '@/components/home/WhyHaubansSection';
import { EngagementsSection } from '@/components/home/EngagementsSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  useSEO({
    title: 'Haubans SARL',
    description:
      "Haubans SARL conçoit, réalise et maintient des infrastructures hospitalières au Cameroun. Partenaire de la modernisation de l'Hôpital Général de Douala depuis 2022.",
  });

  return (
    <>
      <Hero />
      <AboutPreview />
      <StatsSection />
      <ExpertisePreview />
      <FeaturedProjects />
      <MethodSection />
      <WhyHaubansSection />
      <EngagementsSection />
      <CTASection />
    </>
  );
}
