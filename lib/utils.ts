import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function publicAssetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  return path.startsWith("/") ? `${basePath}${path}` : path
}
