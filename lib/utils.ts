import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const range = (n: number) => Array.from({ length: n }).map((_, i) => i + 1);

export const getInitials = (name: string) => {
  const nameSplit = name.split(' ');
  return nameSplit.length > 1
      ? nameSplit[0][0].toUpperCase() + nameSplit[1][0].toUpperCase()
      : name[0].toUpperCase();
}
