import { ExpertiseCard } from '@/components/expertise/ExpertiseCard';
import type { Expertise } from '@/types';

interface ExpertiseGridProps {
  items: Expertise[];
}

export function ExpertiseGrid({ items }: ExpertiseGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((expertise, index) => (
        <ExpertiseCard key={expertise.id} expertise={expertise} index={index} />
      ))}
    </div>
  );
}
