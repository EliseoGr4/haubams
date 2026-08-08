import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/utils/cn';

interface AnimatedCounterProps {
  /** Valeur numérique à animer */
  target: number;
  /** Préfixe affiché avant le nombre, ex. "+" */
  prefix?: string;
  /** Suffixe affiché après le nombre, ex. "+", "%" */
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ target, prefix = '', suffix = '', className }: AnimatedCounterProps) {
  const { ref, value } = useCountUp(target);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={cn('font-mono tabular-nums', className)}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
