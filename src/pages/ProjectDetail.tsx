import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Building } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Container } from '@/components/ui/Container';
import { StatBlock } from '@/components/ui/StatBlock';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getProjectBySlug, projects } from '@/data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useSEO({
    title: project ? project.title : 'Réalisation',
    description: project?.summary ?? 'Détail d\'une réalisation Haubans SARL.',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  if (!project) {
    return <Navigate to="/nos-realisations" replace />;
  }

  const related = projects.filter((p) => p.id !== project.id && p.client === project.client).slice(0, 3);

  return (
    <>
      {/* Bandeau visuel */}
      <div className="relative flex min-h-[60vh] items-end overflow-hidden bg-navy-950 pt-32">
        <img
          src={project.coverImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />

        <Container className="relative pb-14">
          <Link
            to="/nos-realisations"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Toutes les réalisations
          </Link>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="mt-6 inline-block border border-accent-500/40 bg-accent-500/10 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-400">
              {project.category}
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Building size={15} className="text-accent-400" />
                <dt className="sr-only">Client</dt>
                <dd>{project.client}</dd>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-accent-400" />
                <dt className="sr-only">Localisation</dt>
                <dd>{project.location}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-accent-400" />
                <dt className="sr-only">Période</dt>
                <dd>{project.period}</dd>
              </div>
            </dl>
          </motion.div>
        </Container>
      </div>

      {/* Corps de l'article */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-12">
              <ArticleBlock title="Contexte" text={project.context} />
              <ArticleBlock title="Problématique" text={project.challenge} />
              <ArticleBlock title="Solution mise en œuvre" text={project.solution} />

              {project.constraints.length > 0 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-navy-900">Contraintes du chantier</h2>
                  <ul className="mt-4 space-y-3">
                    {project.constraints.map((constraint, index) => (
                      <li key={index} className="flex gap-3 text-sm leading-relaxed text-navy-700/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        {constraint}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.results && (
                <blockquote className="border-l-2 border-accent-500 pl-6 font-display text-lg font-medium italic leading-relaxed text-navy-900">
                  {project.results}
                </blockquote>
              )}

              {project.images.length > 0 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-navy-900">Galerie</h2>
                  <div className="mt-5">
                    <ProjectGallery images={project.images} title={project.title} />
                  </div>
                </div>
              )}
            </div>

            {/* Chiffres clés */}
            <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                Chiffres clés
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {project.keyStats.map((stat) => (
                  <StatBlock key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Réalisations liées */}
      {related.length > 0 && (
        <section className="border-t border-navy-900/10 bg-navy-900/2 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-xl font-bold text-navy-900">
              Autres lots du même programme
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, index) => (
                <ProjectCard key={p.id} project={p} index={index} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

function ArticleBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-navy-900">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-navy-700/85">{text}</p>
    </div>
  );
}
