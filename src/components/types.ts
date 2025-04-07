import { LucideIcon } from 'lucide-react';

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colors: [string, string];
  keyPoints: string[];
  interactiveElement: React.ReactNode;
}