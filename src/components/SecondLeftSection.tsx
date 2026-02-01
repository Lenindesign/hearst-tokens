'use client';

/**
 * SecondLeftSection Component (2nd Left)
 * 
 * Based on Pencil design node: jnZaB
 * 
 * This component composes NewsletterPromo and TrendingSection components.
 * Each sub-component can also be used independently.
 */

import { NewsletterPromo, type NewsletterPromoProps } from './NewsletterPromo';
import { TrendingSection, type TrendingCardData, type TrendingSectionProps } from './TrendingSection';

// Design tokens for the container
const tokens = {
  spacing: {
    sectionGap: 20,
  },
};

// Main Second Left Section Component
export interface SecondLeftSectionProps {
  newsletterEyebrow?: string;
  newsletterTitle?: string;
  sectionTitle?: string;
  trendingCards?: TrendingCardData[];
}

export function SecondLeftSection({
  newsletterEyebrow = 'Brand Name Newsletter',
  newsletterTitle = '{title}',
  sectionTitle = '{title}',
  trendingCards = [
    { id: 1, title: "2026 Explorer Tremor Drive: Big Power, Big Bucks" },
    { id: 2, title: "The Winningest Cars in 10Best History" },
    { id: 3, title: "View Interior Photos of the 2027 Mercedes S-Class" },
    { id: 4, title: "Ezra Dyer: The Altima Secretly Thirsts for Mayhem" },
    { id: 5, title: "Revealed! 591-HP Donkervoort P24 RS Is Super Light" },
  ],
}: SecondLeftSectionProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.sectionGap,
        width: '100%',
      }}
    >
      {/* Newsletter Promo */}
      <NewsletterPromo eyebrow={newsletterEyebrow} title={newsletterTitle} />
      
      {/* Trending Section */}
      <TrendingSection title={sectionTitle} cards={trendingCards} />
    </div>
  );
}

// Re-export individual components for convenience
export { NewsletterPromo, TrendingSection };
export type { NewsletterPromoProps, TrendingCardData, TrendingSectionProps };
