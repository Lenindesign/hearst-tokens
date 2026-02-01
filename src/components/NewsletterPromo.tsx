'use client';

/**
 * NewsletterPromo Component
 * 
 * Based on Pencil design node: jnZaB (extracted from SecondLeftSection)
 * 
 * Structure:
 * - NEWSLETTER PROMO (Card/Base with gray bg #d6d6d6, padding: [32,48,48,48])
 *   - Card/Core/Content (vertical, gap: 12px)
 *     - Eyebrow: "Brand Name Newsletter" (SF Pro, 20px, normal, #121212, letterSpacing: -0.2, lineHeight: 1.2)
 *     - Title: {title} (SF Pro, 13px, bold, #121212, letterSpacing: 0.4, lineHeight: 1.23)
 */

// Design tokens from Pencil
export const newsletterPromoTokens = {
  colors: {
    text: '#121212',
    background: '#d6d6d6',
  },
  spacing: {
    contentGap: 12,
    cardGap: 8,
  },
  padding: {
    top: 32,
    right: 48,
    bottom: 48,
    left: 48,
  },
  typography: {
    eyebrow: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: -0.2,
      lineHeight: 1.2,
    },
    title: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 0.4,
      lineHeight: 1.23,
    },
  },
};

// NewsletterPromo Component
export interface NewsletterPromoProps {
  eyebrow?: string;
  title?: string;
}

export function NewsletterPromo({ 
  eyebrow = 'Brand Name Newsletter', 
  title = '{title}' 
}: NewsletterPromoProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        backgroundColor: newsletterPromoTokens.colors.background,
        paddingTop: newsletterPromoTokens.padding.top,
        paddingRight: newsletterPromoTokens.padding.right,
        paddingBottom: newsletterPromoTokens.padding.bottom,
        paddingLeft: newsletterPromoTokens.padding.left,
        gap: newsletterPromoTokens.spacing.cardGap,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Card Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: newsletterPromoTokens.spacing.contentGap,
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <span
            style={{
              fontFamily: newsletterPromoTokens.typography.eyebrow.fontFamily,
              fontSize: newsletterPromoTokens.typography.eyebrow.fontSize,
              fontWeight: newsletterPromoTokens.typography.eyebrow.fontWeight,
              letterSpacing: newsletterPromoTokens.typography.eyebrow.letterSpacing,
              lineHeight: newsletterPromoTokens.typography.eyebrow.lineHeight,
              color: newsletterPromoTokens.colors.text,
              width: '100%',
            }}
          >
            {eyebrow}
          </span>
        </div>
        
        {/* Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <span
            style={{
              fontFamily: newsletterPromoTokens.typography.title.fontFamily,
              fontSize: newsletterPromoTokens.typography.title.fontSize,
              fontWeight: newsletterPromoTokens.typography.title.fontWeight,
              letterSpacing: newsletterPromoTokens.typography.title.letterSpacing,
              lineHeight: newsletterPromoTokens.typography.title.lineHeight,
              color: newsletterPromoTokens.colors.text,
            }}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
