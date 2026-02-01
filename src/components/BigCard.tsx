'use client';

import { font, colors, spacing } from '@/lib/designTokens';

/**
 * BigCard Component (Car and Driver)
 * 
 * Based on Pencil design node: Bmqs6
 * Pixel-perfect implementation from canvas.pen
 * 
 * Structure:
 * - Container: width 610px, vertical layout, gap 16px, height fill
 * - Image Group:
 *   - Image: 612x457px
 *   - Section Label: positioned at bottom-left of image
 *     - Background: #dbc98f (gold), padding 8px
 *     - Text: Barlow Condensed, 16px, 500 weight, black, letterSpacing 0.16
 * - Text Section: vertical layout, gap 8px
 *   - Title: Inter, 48px, 800 weight (Extra Bold), black, lineHeight 1.05
 *   - Dek/Description: Inter, 22px, normal, black, lineHeight 1.4
 *   - Author: Inter, 13px, 500 weight, #666666
 */

// Design tokens from Pencil (Car and Driver brand) - node Bmqs6
const tokens = {
  colors: {
    text: '#000000',
    textSecondary: '#666666',
    textMuted: '#515150',
    background: colors.neutral.lightest,
    imagePlaceholder: colors.neutral[300],
    sectionLabelBg: '#dbc98f',  // Gold/tan color
    sectionLabelText: '#000000',
  },
  spacing: {
    containerGap: 16,
    textSectionGap: 8,
    dekBylineGap: 18,
    authorDateGap: 16,
    sectionLabelPadding: 8,
  },
  sizes: {
    containerWidth: 610,
    imageWidth: 612,
    imageHeight: 457,
  },
  typography: {
    sectionLabel: {
      fontFamily: font.family.barlowCondensed,
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: 0.16,
      lineHeight: 1,
    },
    title: {
      fontFamily: font.family.inter,
      fontSize: 48,
      fontWeight: 800,  // Extra Bold
      lineHeight: 1.05,
    },
    dek: {
      fontFamily: font.family.inter,
      fontSize: 22,
      fontWeight: 400,
      lineHeight: 1.4,
    },
    author: {
      fontFamily: font.family.inter,
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.3,
    },
  },
};

// Image with Section Label overlay
interface ImageWithLabelProps {
  src?: string;
  alt?: string;
  sectionLabel?: string;
}

function ImageWithLabel({ src, alt = '', sectionLabel }: ImageWithLabelProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Image */}
      <div
        style={{
          width: '100%',
          height: tokens.sizes.imageHeight,
          overflow: 'hidden',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          // Placeholder pattern (checkered)
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
        )}
      </div>
      
      {/* Section Label - positioned at bottom-left */}
      {sectionLabel && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            display: 'inline-flex',
            alignItems: 'center',
            padding: tokens.spacing.sectionLabelPadding,
            backgroundColor: tokens.colors.sectionLabelBg,
          }}
        >
          <span
            style={{
              fontFamily: tokens.typography.sectionLabel.fontFamily,
              fontSize: tokens.typography.sectionLabel.fontSize,
              fontWeight: tokens.typography.sectionLabel.fontWeight,
              letterSpacing: tokens.typography.sectionLabel.letterSpacing,
              lineHeight: tokens.typography.sectionLabel.lineHeight,
              color: tokens.colors.sectionLabelText,
              textTransform: 'uppercase',
            }}
          >
            {sectionLabel}
          </span>
        </div>
      )}
    </div>
  );
}

// Main Big Card Component
export interface BigCardProps {
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;  // Section label (e.g., "FIRST DRIVE")
  title?: string;
  description?: string;  // Dek
  author?: string;
  showDescription?: boolean;
}

export function BigCard({
  imageSrc,
  imageAlt,
  eyebrow = 'FEATURED',
  title = '2026 Pilot Does Just Enough to Stay Afloat',
  description = "The upgraded Pilot's extra equipment and freshened look help it remain a solid, if unexciting, choice in this competitive segment.",
  author = 'Reviewed By Joey Capparella',
  showDescription = true,
}: BigCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.containerGap,
        width: '100%',
      }}
    >
      {/* Image with Section Label */}
      <ImageWithLabel 
        src={imageSrc} 
        alt={imageAlt} 
        sectionLabel={eyebrow} 
      />
      
      {/* Text Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.textSectionGap,
          width: '100%',
        }}
      >
        {/* Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 4,
          }}
        >
          <span
            style={{
              fontFamily: tokens.typography.title.fontFamily,
              fontSize: tokens.typography.title.fontSize,
              fontWeight: tokens.typography.title.fontWeight,
              lineHeight: tokens.typography.title.lineHeight,
              color: tokens.colors.text,
              width: '100%',
            }}
          >
            {title}
          </span>
        </div>
        
        {/* Dek and Byline Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing.dekBylineGap,
            width: '100%',
          }}
        >
          {/* Description/Dek */}
          {showDescription && description && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: tokens.typography.dek.fontFamily,
                  fontSize: tokens.typography.dek.fontSize,
                  fontWeight: tokens.typography.dek.fontWeight,
                  lineHeight: tokens.typography.dek.lineHeight,
                  color: tokens.colors.text,
                  width: '100%',
                }}
              >
                {description}
              </span>
            </div>
          )}
          
          {/* Author */}
          {author && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                height: 16,
              }}
            >
              {/* Verified icon placeholder */}
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: '#1d9bf0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: tokens.typography.author.fontFamily,
                  fontSize: tokens.typography.author.fontSize,
                  fontWeight: tokens.typography.author.fontWeight,
                  lineHeight: tokens.typography.author.lineHeight,
                  color: tokens.colors.textSecondary,
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

// Export tokens for use in other components
export { tokens as bigCardTokens };
