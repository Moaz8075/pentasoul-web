import type { LucideIcon } from "lucide-react";
import { Atom, Lightbulb, PenTool, Settings } from "lucide-react";

export type ApproachStep = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const approachSteps: ApproachStep[] = [
  {
    title: "Understand",
    body: "Your goals, users and challenges.",
    icon: Lightbulb,
  },
  {
    title: "Design",
    body: "Turn ideas into intuitive solutions.",
    icon: PenTool,
  },
  {
    title: "Build",
    body: "Engineer with quality and speed.",
    icon: Settings,
  },
  {
    title: "Grow",
    body: "Provide ongoing support and scale.",
    icon: Atom,
  },
];
