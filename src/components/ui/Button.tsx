import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost-light' | 'ghost-dark';

interface BaseProps {
  variant?: Variant;
  size?: 'md' | 'lg';
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-accent-500 text-navy-950 hover:bg-accent-400 focus-visible:bg-accent-400',
  secondary:
    'bg-navy-900 text-white hover:bg-navy-800 focus-visible:bg-navy-800',
  'ghost-light':
    'border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm',
  'ghost-dark':
    'border border-navy-900/20 text-navy-900 hover:bg-navy-900/5',
};

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-display font-semibold tracking-wide rounded-sm transition-colors duration-200';

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  to?: undefined;
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  href?: undefined;
}

interface ButtonAsAnchor extends BaseProps {
  href: string;
  to?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button({ variant = 'primary', size = 'md', icon, className, children, ...props }: ButtonProps) {
  const classes = cn(baseClasses, VARIANTS[variant], SIZES[size], className);

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
      {icon}
    </button>
  );
}
