import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** narrow = colonnes de texte (édito, formulaire) ; wide = grilles */
  size?: 'narrow' | 'default' | 'wide';
}

const SIZES = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
};

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-5 sm:px-8 lg:px-12', SIZES[size], className)}>
      {children}
    </div>
  );
}
