import { motion } from "framer-motion";
import { CheckCircle, DraftingCompass, HardHat, Settings, Wrench, Package } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { servicesList } from "@/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  "drafting-compass": DraftingCompass,
  "hard-hat": HardHat,
  settings: Settings,
  wrench: Wrench,
  package: Package,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Services() {
  useSEO({
    title: "Nos services",
    description: "Decouvrez la gamme de services proposes par Haubans SARL : etudes, realisation, mise en exploitation, maintenance et fournitures pour l'ingenierie hospitaliere.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        title="Ce que nous faisons pour vous"
        description="De l'etude a la maintenance, Haubans SARL vous accompagne a chaque etape de votre projet d'ingenierie hospitaliere."
      />

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
            <SectionTitle
              eyebrow="Notre approche"
              title="Des prestations integrees, du bureau d'etude a la maintenance"
              description="Contrairement a une vision parcellisee du chantier, Haubans propose une approche globale : nos equipes interviennent sur l'ensemble du cycle de vie de votre infrastructure hospitaliere."
            />
            <div className="space-y-4">
              {["Interlocuteur unique tout au long du projet", "Maitrise de 8+ corps d'etat techniques", "Capacite de deploiement dans les 10 regions du Cameroun", "Conformite aux normes hospitalieres et reglementations en vigueur", "Continuite des activites medicales pendant les travaux"].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-accent-500" />
                  <span className="text-sm leading-relaxed text-navy-700/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services list */}
      <section className="bg-navy-900/2 py-20 sm:py-28 border-t border-navy-900/10">
        <Container>
          <div className="space-y-20">
            {servicesList.map((service, i) => {
              const Icon = ICON_MAP[service.icon] ?? Settings;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Icon bloc */}
                  <div className={`flex flex-col ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="inline-flex h-14 w-14 items-center justify-center bg-accent-500/10 text-accent-500">
                      <Icon size={28} />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-900">{service.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-navy-700/80">{service.description}</p>
                    <div className="mt-6">
                      <Button to="/projet" variant="secondary" size="md">
                        Parler de votre projet
                      </Button>
                    </div>
                  </div>
                  {/* Features */}
                  <div className={`space-y-3 ${!isEven ? "lg:order-1" : ""}`}>
                    {service.features.map((feat) => (
                      <div key={feat} className="flex gap-3 rounded border border-navy-900/8 bg-white p-4">
                        <CheckCircle size={16} className="mt-0.5 shrink-0 text-accent-500" />
                        <span className="text-sm leading-relaxed text-navy-800">{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-20">
        <Container size="narrow" className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-white">Vous avez un projet ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Contactez notre equipe pour etudier ensemble la solution la mieux adaptee a vos besoins.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/projet" variant="primary" size="lg">Parlons de votre projet</Button>
            <Button to="/nos-expertises" variant="ghost-light" size="lg">Voir nos expertises</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
