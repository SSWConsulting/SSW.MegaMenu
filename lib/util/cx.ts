import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const cx = (...args: ClassValue[]) => {
  return twMerge(clsx(args))
}