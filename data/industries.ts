import type { LucideIcon } from "lucide-react";
import {
  Building2,
  GraduationCap,
  Scale,
  Store,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

export const industries: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Law Firms", icon: Scale },
  { label: "Schools", icon: GraduationCap },
  { label: "Retail & POS", icon: Store },
  { label: "Hospitality", icon: UtensilsCrossed },
  { label: "Logistics", icon: Truck },
  { label: "Startups", icon: Building2 },
];
