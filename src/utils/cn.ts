import clsx, { type ClassValue } from 'clsx';

/** Combine des classes conditionnelles. Simple alias autour de clsx. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
