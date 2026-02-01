'use client';

import { font, colors, spacing } from '@/lib/designTokens';

/**
 * BigStoryCard Component
 * 
 * Based on Pencil design node: KnvvB
 * 
 * Structure:
 * - Frame: big story (horizontal layout, gap: 32px, width: fill_container)
 *   - Card/Base (vertical layout, gap: 8px, white bg, width: fill_container)
 *     - Image (height: 540px, width: fill_container)
 *     - Card/Core/Content (vertical layout, gap: 4px, width: fill_container)
 *       - Eyebrow (Barlow Condensed, 15px, normal, #121212, letterSpacing: 0.2, lineHeight: 1.067)
 *       - Title (Inter, 48px, bold, #121212, letterSpacing: -2, lineHeight: 1.083)
 *       - Author (Inter, 15px, normal, #bdbdbd, letterSpacing: 0.2, lineHeight: 1.067)
 * 
 * Typography (Car and Driver):
 * - Barlow Condensed: Eyebrows
 * - Inter: Headlines and body text
 */

// Design tokens from Pencil - using centralized tokens
const tokens = {
  colors: {
    text: colors.neutral.darkest,
    textSecondary: colors.neutral[400],
    background: colors.neutral.lightest,
    imagePlaceholder: colors.neutral[300],
  },
  spacing: {
    containerGap: spacing['2xl'],
    cardGap: spacing.xs,
    contentGap: spacing['2xs'],
  },
  sizes: {
    imageHeight: 540,
  },
  typography: {
    eyebrow: {
      // Barlow Condensed for eyebrows
      fontFamily: font.family.barlowCondensed,
      fontSize: font.size.sm,
      fontWeight: font.weight.regular,
      letterSpacing: 0.2,
      lineHeight: 1.067,
    },
    title: {
      // Inter for headlines
      fontFamily: font.family.inter,
      fontSize: font.size['5xl'],
      fontWeight: font.weight.bold,
      letterSpacing: -2,
      lineHeight: 1.083,
    },
    author: {
      // Inter for body text
      fontFamily: font.family.inter,
      fontSize: font.size.sm,
      fontWeight: font.weight.regular,
      letterSpacing: 0.2,
      lineHeight: 1.067,
    },
  },
};

// Image Placeholder Component
function ImagePlaceholder({ height }: { height: number }) {
  return (
    <div
      style={{
        width: '100%',
        height,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(45deg, #d5d5d5 25%, transparent 25%),
            linear-gradient(-45deg, #d5d5d5 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #d5d5d5 75%),
            linear-gradient(-45deg, transparent 75%, #d5d5d5 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          backgroundColor: tokens.colors.imagePlaceholder,
        }}
      />
    </div>
  );
}

// Main BigStoryCard Component
export interface BigStoryCardProps {
  imageSrc?: string;
  eyebrow?: string;
  title?: string;
  author?: string;
  showEyebrow?: boolean;
  showAuthor?: boolean;
}

export function BigStoryCard({
  imageSrc,
  eyebrow = '{eyebrow}',
  title = 'Big Card Title Goes Here. Will be Two Lines. Big Card Title Goes Here.',
  author = '{author}',
  showEyebrow = true,
  showAuthor = true,
}: BigStoryCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: tokens.spacing.containerGap,
        width: '100%',
      }}
    >
      {/* Card/Base */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.cardGap,
          backgroundColor: tokens.colors.background,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Image */}
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: '100%',
              height: tokens.sizes.imageHeight,
              objectFit: 'cover',
            }}
          />
        ) : (
          <ImagePlaceholder height={tokens.sizes.imageHeight} />
        )}
        
        {/* Card/Core/Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing.contentGap,
            width: '100%',
          }}
        >
          {/* Eyebrow */}
          {showEyebrow && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <span
                style={{
                  fontFamily: tokens.typography.eyebrow.fontFamily,
                  fontSize: tokens.typography.eyebrow.fontSize,
                  fontWeight: tokens.typography.eyebrow.fontWeight,
                  letterSpacing: tokens.typography.eyebrow.letterSpacing,
                  lineHeight: tokens.typography.eyebrow.lineHeight,
                  color: tokens.colors.text,
                  width: '100%',
                }}
              >
                {eyebrow}
              </span>
            </div>
          )}
          
          {/* Title */}
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <span
              style={{
                fontFamily: tokens.typography.title.fontFamily,
                fontSize: tokens.typography.title.fontSize,
                fontWeight: tokens.typography.title.fontWeight,
                letterSpacing: tokens.typography.title.letterSpacing,
                lineHeight: tokens.typography.title.lineHeight,
                color: tokens.colors.text,
                width: '100%',
              }}
            >
              {title}
            </span>
          </div>
          
          {/* Author */}
          {showAuthor && (
            <div
              style={{
                display: 'flex',
                width: '100%',
              }}
            >
              <span
                style={{
                  fontFamily: tokens.typography.author.fontFamily,
                  fontSize: tokens.typography.author.fontSize,
                  fontWeight: tokens.typography.author.fontWeight,
                  letterSpacing: tokens.typography.author.letterSpacing,
                  lineHeight: tokens.typography.author.lineHeight,
                  color: tokens.colors.textSecondary,
                  width: '100%',
                }}
              >
                {author}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Export tokens for reuse
export { tokens as bigStoryCardTokens };
