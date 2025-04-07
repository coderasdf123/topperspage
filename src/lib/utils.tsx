import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A helper function to merge Tailwind classes dynamically.
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
