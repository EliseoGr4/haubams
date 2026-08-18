import { useSEO } from "@/hooks/useSEO";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { ExpertisePreview } from "@/components/home/ExpertisePreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SocialWall } from "@/components/home/SocialWall";
import { MethodSection } from "@/components/home/MethodSection";
import { WhyHaubansSection } from "@/components/home/WhyHaubansSection";
import { EngagementsSection } from "@/components/home/EngagementsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  useSEO({
    title: "Haubans — Ingenierie hospitaliere au Cameroun",
    description:
      "Haubans SARL concoit, realise et maintient des infrastructures hospitalieres au Cameroun. Partenaire de la modernisation de l'Hopital General de Douala depuis 2022.",
  });

  return (
    <>
      <Hero />
      <AboutPreview />
      <StatsSection />
      <ExpertisePreview />
      <FeaturedProjects />
      <SocialWall />
      <MethodSection />
      <WhyHaubansSection />
      <EngagementsSection />
      <CTASection />
    </>
  );
}
