import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  sub?: string;
}

export interface PricingRow {
  volume: string;
  price: string;
  note: string;
}
