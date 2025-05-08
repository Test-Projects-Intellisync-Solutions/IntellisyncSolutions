import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Advanced: Tailwind-friendly class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple: Just joins class names
export function classNames(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}