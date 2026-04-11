import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE = "919021665092";
export const PHONE_DISPLAY = "+91 9021665092";
export const WA_BASE = `https://wa.me/${PHONE}`;

export function waLink(msg: string) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

export const BUSINESS_NAME = "Queen Quatters";
export const BUSINESS_ADDRESS =
  "Behind PCCOE, Sector 26, Pradhikaran, Nigdi, Pune, Maharashtra 411044";
export const BUSINESS_AREA = "Pradhikaran, Nigdi, Pune";
