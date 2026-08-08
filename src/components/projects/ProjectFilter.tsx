import { cn } from '@/utils/cn';
import type { Project } from '@/types';

interface ProjectFilterProps {
  categories: Project['category'][];
  active: Project['category'] | 'Tous';
  onChange: (category: Project['category'] | 'Tous') => void;
}

export function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  const options: (Project['category'] | 'Tous')[] = ['Tous', ...categories];

  return (
    <div
      role="group"
      aria-label="Filtrer les réalisations par spécialité"
      className="flex flex-wrap gap-2.5"
    >
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={cn(
              'border px-4 py-2 font-display text-sm font-semibold transition-colors duration-200',
              isActive
                ? 'border-navy-900 bg-navy-900 text-white'
                : 'border-navy-900/15 bg-transparent text-navy-700 hover:border-navy-900/40'
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
