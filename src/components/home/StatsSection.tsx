import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { keyFigures } from '@/data/company';

export function StatsSection() {
  return (
    <section className="bg-navy-900 py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Haubans en chiffres"
          title="Une expertise mesurable, sur le terrain"
          theme="dark"
        />

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {keyFigures.map((figure) => (
            <div key={figure.label} className="border-l-2 border-accent-500/50 pl-4">
              <div className="font-mono text-4xl font-semibold text-white sm:text-5xl">
                <AnimatedCounter target={figure.value} prefix={figure.prefix} suffix={figure.suffix} />
              </div>
              <p className="mt-2 text-sm leading-snug text-white/60">{figure.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
