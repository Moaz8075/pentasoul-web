import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Compass,
  PenTool,
  Smartphone,
  Sparkles,
} from "lucide-react";

export type Service = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Product Strategy",
    body: "We turn a real-world problem into a clear product direction — from first insight through launch.",
    icon: Compass,
  },
  {
    title: "UI/UX Design",
    body: "Interfaces designed for daily use. Simple, considered, and easy to live with over time.",
    icon: PenTool,
  },
  {
    title: "Web & Mobile Development",
    body: "Reliable software across web and mobile, engineered to last and grow with the people who use it.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    body: "Quiet, resilient infrastructure so products stay available as they find their place in the world.",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    body: "Practical intelligence that removes friction from everyday work — never technology for its own sake.",
    icon: Sparkles,
  },
];
