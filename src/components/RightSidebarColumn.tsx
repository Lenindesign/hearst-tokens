'use client';

import { font, colors } from '@/lib/designTokens';

/**
 * RightSidebarColumn Component (Car and Driver)
 * 
 * Based on Pencil design node: OZWRf
 * Pixel-perfect implementation from canvas.pen
 * 
 * Structure:
 * - Container: width 300px, vertical layout, gap 24px
 * - Each "Story Card Supporting Feature" card:
 *   - Top border: 1px black line
 *   - Story section: vertical layout, gap 12px
 *     - Section Label: "ESSENTIAL READS" - Barlow Condensed, 16px, 500 weight, black
 *     - Title: Inter, 20px, 700 weight, black, lineHeight 1.2
 *   - Image + Dek section: horizontal layout, gap 20px
 *     - Text column: vertical layout, gap 20px
 *       - Dek: Inter, 16px, normal, black, lineHeight 1.3
 *       - Author: Barlow, 13px, 500 weight, #666666
 *     - Image: 120x120px on the right
 */

// Design tokens from Pencil (Car and Driver brand) - node OZWRf
const tokens = {
  colors: {
    text: '#000000',
    textSecondary: '#666666',
    sectionLabel: '#1c5f8b',  // Car and Driver blue
    background: '#ffffff',
    border: '#000000',
    imagePlaceholder: '#e5e5e5',
    mediaIconBg: '#ffffffe5',
  },
  spacing: {
    containerGap: 24,
    cardGap: 16,
    storyGap: 12,
    sectionHeadlineGap: 8,
    imageDekGap: 20,
    dekAuthorGap: 20,
  },
  sizes: {
    containerWidth: 300,
    imageSize: 120,
    mediaIconSize: 32,
  },
  typography: {
    sectionLabel: {
      fontFamily: font.family.barlowCondensed,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1,
    },
    title: {
      fontFamily: font.family.inter,
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    dek: {
      fontFamily: font.family.inter,
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.3,
    },
    author: {
      fontFamily: 'Barlow, ' + font.family.default,
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.3,
    },
  },
};

// Image placeholder with optional play icon
function ImagePlaceholder({ size, showPlayIcon = false }: { size: number; showPlayIcon?: boolean }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        position: 'relative',
        flexShrink: 0,
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
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
          backgroundColor: tokens.colors.imagePlaceholder,
        }}
      />
      {showPlayIcon && (
        <div
          style={{
            position: 'absolute',
            bottom: 4,
            left: 4,
            width: tokens.sizes.mediaIconSize,
            height: tokens.sizes.mediaIconSize,
            borderRadius: 16,
            backgroundColor: tokens.colors.mediaIconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            paddingLeft: 3,
          }}
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M0 0L12 7L0 14V0Z" fill="#000000" />
          </svg>
        </div>
      )}
    </div>
  );
}

// Story Card Supporting Feature Component
interface SupportingFeatureCardProps {
  sectionLabel?: string;
  title: string;
  dek?: string;
  author?: string;
  imageSrc?: string;
  showPlayIcon?: boolean;
}

function SupportingFeatureCard({ 
  sectionLabel = 'ESSENTIAL READS',
  title,
  dek,
  author,
  imageSrc,
  showPlayIcon = false,
}: SupportingFeatureCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.cardGap,
        width: tokens.sizes.containerWidth,
      }}
    >
      {/* Top border line */}
      <div
        style={{
          width: '100%',
          height: 0,
          borderTop: `1px solid ${tokens.colors.border}`,
        }}
      />
      
      {/* Story section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.storyGap,
          width: '100%',
        }}
      >
        {/* Section Label and Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing.sectionHeadlineGap,
            width: '100%',
          }}
        >
          {/* Section Label */}
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
                fontFamily: tokens.typography.sectionLabel.fontFamily,
                fontSize: tokens.typography.sectionLabel.fontSize,
                fontWeight: tokens.typography.sectionLabel.fontWeight,
                lineHeight: tokens.typography.sectionLabel.lineHeight,
                color: tokens.colors.sectionLabel,
                width: '100%',
                textTransform: 'uppercase',
              }}
            >
              {sectionLabel}
            </span>
          </div>
          
          {/* Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 4,
              width: '100%',
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
        </div>
        
        {/* Image + Dek section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: tokens.spacing.imageDekGap,
            width: '100%',
          }}
        >
          {/* Text column (Dek + Author) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacing.dekAuthorGap,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {/* Dek */}
            {dek && (
              <span
                style={{
                  fontFamily: tokens.typography.dek.fontFamily,
                  fontSize: tokens.typography.dek.fontSize,
                  fontWeight: tokens.typography.dek.fontWeight,
                  lineHeight: tokens.typography.dek.lineHeight,
                  color: tokens.colors.text,
                }}
              >
                {dek}
              </span>
            )}
            
            {/* Author */}
            {author && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
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
          
          {/* Image */}
          {imageSrc ? (
            <div
              style={{
                width: tokens.sizes.imageSize,
                height: tokens.sizes.imageSize,
                minWidth: tokens.sizes.imageSize,
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <img
                src={imageSrc}
                alt={title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              {showPlayIcon && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 4,
                    left: 4,
                    width: tokens.sizes.mediaIconSize,
                    height: tokens.sizes.mediaIconSize,
                    borderRadius: 16,
                    backgroundColor: tokens.colors.mediaIconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    paddingLeft: 3,
                  }}
                >
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M0 0L12 7L0 14V0Z" fill="#000000" />
                  </svg>
                </div>
              )}
            </div>
          ) : (
            <ImagePlaceholder size={tokens.sizes.imageSize} showPlayIcon={showPlayIcon} />
          )}
        </div>
      </div>
    </div>
  );
}

// Main Right Sidebar Column Component
export interface RightSidebarColumnProps {
  cards?: Array<{
    id: string | number;
    sectionLabel?: string;
    title: string;
    dek?: string;
    author?: string;
    imageSrc?: string;
    showPlayIcon?: boolean;
  }>;
}

export function RightSidebarColumn({ 
  cards = [
    { 
      id: 1, 
      sectionLabel: 'ESSENTIAL READS',
      title: "Mercedes Design Boss Gorden Wagener Picks His Faves",
      dek: "Retiring after 30 years Wagener chooses his favorite Benz creations.",
      author: 'By Brett Berk',
      imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-acura-integra-101-6936dee00fb9b.jpg?crop=1.00xw:0.845xh;0,0.0845xh',
    },
    { 
      id: 2, 
      sectionLabel: 'ESSENTIAL READS',
      title: "An F1 Fan's First Daytona 24 Hours",
      dek: "A lifelong F1 fan attends his first 24-hour endurance race.",
      author: 'By Samantha MacAvoy',
      showPlayIcon: true,
    },
    { 
      id: 3, 
      sectionLabel: 'ESSENTIAL READS',
      title: "Every New Car You Can Still Buy with a Stick Shift",
      dek: "The cars on this list keep the #SaveTheManuals mission alive.",
      author: 'By Greg S. Fink and Joey Capparella',
    },
  ]
}: RightSidebarColumnProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.containerGap,
        width: tokens.sizes.containerWidth,
      }}
    >
      {cards.map((card) => (
        <SupportingFeatureCard
          key={card.id}
          sectionLabel={card.sectionLabel}
          title={card.title}
          dek={card.dek}
          author={card.author}
          imageSrc={card.imageSrc}
          showPlayIcon={card.showPlayIcon}
        />
      ))}
    </div>
  );
}

// Export individual components and tokens
export { SupportingFeatureCard, tokens as rightSidebarTokens };
