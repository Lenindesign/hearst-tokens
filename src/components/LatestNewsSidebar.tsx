'use client';

import { font, colors } from '@/lib/designTokens';

/**
 * LatestNewsSidebar Component (Car and Driver Version)
 * 
 * Based on Pencil design node: DaukG
 * Pixel-perfect implementation from canvas.pen
 * 
 * Structure:
 * - Frame: Latest (vertical layout, width: 290px, gap: 24px)
 *   - Strap (height: 36px, fill: #d22329, padding: 0 12px)
 *     - Column Title: Barlow Condensed, 24px, 600 weight, white, lineHeight: 1, centered
 *   - Story Card Latest (multiple cards, gap: 24px)
 *     - Latest Story Card (horizontal layout, gap: 16px)
 *       - Image thumbnail (80x80px) with optional media icon overlay
 *       - Text content (vertical layout, gap: 16px, padding-top: 2px)
 *         - Title: Inter, 16px, 700 weight, #000000, letterSpacing: 0.16, lineHeight: 1.1
 *         - Timestamp: Inter, 13px, normal, #198294, lineHeight: 1.3
 *   - Media Icon: 32x32px, cornerRadius: 16, position: bottom-left (4px, 44px from top-left of image)
 */

// Exact design tokens from Pencil (Car and Driver brand)
const tokens = {
  colors: {
    strapBackground: '#d22329',  // Car and Driver red
    strapText: '#ffffff',
    titleText: '#000000',
    timestampText: '#198294',    // Teal accent
    imagePlaceholder: '#e5e5e5',
    mediaIconBg: '#ffffffe5',    // White with 90% opacity
    mediaIconShadow: '0 2px 4px #0000004f',
  },
  spacing: {
    containerGap: 24,
    cardGap: 16,
    textGap: 16,
    strapPaddingX: 12,
    textPaddingTop: 2,
  },
  sizes: {
    containerWidth: 290,
    imageSize: 80,
    strapHeight: 36,
    mediaIconSize: 32,
    mediaIconRadius: 16,
    mediaIconX: 4,
    mediaIconY: 44,
  },
  typography: {
    columnTitle: {
      fontFamily: font.family.barlowCondensed,
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1,
    },
    title: {
      fontFamily: font.family.inter,
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '1%',  // 1% letter spacing
      lineHeight: 1.1,      // 110%
    },
    timestamp: {
      fontFamily: font.family.inter,
      fontSize: 13,
      fontWeight: 400,
      lineHeight: 1.3,
    },
  },
};

// Image Placeholder Component with checkered pattern
function ImagePlaceholder({ size, showPlayIcon = false }: { size: number; showPlayIcon?: boolean }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        position: 'relative',
        overflow: 'hidden',
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
            bottom: tokens.sizes.imageSize - tokens.sizes.mediaIconY - tokens.sizes.mediaIconSize,
            left: tokens.sizes.mediaIconX,
            width: tokens.sizes.mediaIconSize,
            height: tokens.sizes.mediaIconSize,
            borderRadius: tokens.sizes.mediaIconRadius,
            backgroundColor: tokens.colors.mediaIconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: tokens.colors.mediaIconShadow,
            paddingLeft: 3,
          }}
        >
          {/* Play icon triangle */}
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M0 0L12 7L0 14V0Z" fill="#000000" />
          </svg>
        </div>
      )}
    </div>
  );
}

// Story Card Component
interface StoryCardProps {
  imageSrc?: string;
  title: string;
  timestamp: string;
  showPlayIcon?: boolean;
}

function StoryCard({ imageSrc, title, timestamp, showPlayIcon = false }: StoryCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: tokens.spacing.cardGap,
        width: '100%',
      }}
    >
      {/* Image */}
      {imageSrc ? (
        <div 
          style={{ 
            position: 'relative', 
            width: tokens.sizes.imageSize,
            height: tokens.sizes.imageSize,
            minWidth: tokens.sizes.imageSize,
            flexShrink: 0,
          }}
        >
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: tokens.sizes.imageSize,
              height: tokens.sizes.imageSize,
              objectFit: 'cover',
            }}
          />
          {showPlayIcon && (
            <div
              style={{
                position: 'absolute',
                top: tokens.sizes.mediaIconY,
                left: tokens.sizes.mediaIconX,
                width: tokens.sizes.mediaIconSize,
                height: tokens.sizes.mediaIconSize,
                borderRadius: tokens.sizes.mediaIconRadius,
                backgroundColor: tokens.colors.mediaIconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: tokens.colors.mediaIconShadow,
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

      {/* Text Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.textGap,
          paddingTop: tokens.spacing.textPaddingTop,
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* Title - Inter, 16px, 700, line-height 110%, letter-spacing 1% */}
        <span
          style={{
            fontFamily: tokens.typography.title.fontFamily,
            fontSize: tokens.typography.title.fontSize,
            fontWeight: tokens.typography.title.fontWeight,
            letterSpacing: '0.01em',  // 1% = 0.01em
            lineHeight: 1.1,          // 110%
            color: tokens.colors.titleText,
            display: 'block',
          }}
        >
          {title}
        </span>

        {/* Timestamp - Inter, 13px, 400, line-height 130%, letter-spacing 0% */}
        <span
          style={{
            fontFamily: tokens.typography.timestamp.fontFamily,
            fontSize: tokens.typography.timestamp.fontSize,
            fontWeight: tokens.typography.timestamp.fontWeight,
            lineHeight: 1.3,          // 130%
            letterSpacing: 0,         // 0%
            color: tokens.colors.timestampText,
            display: 'block',
          }}
        >
          {timestamp}
        </span>
      </div>
    </div>
  );
}

// Main LatestNewsSidebar Component
export interface LatestNewsSidebarProps {
  title?: string;
  stories?: Array<{
    id: string | number;
    imageSrc?: string;
    title: string;
    timestamp: string;
    showPlayIcon?: boolean;
  }>;
}

export function LatestNewsSidebar({
  title = 'Latest News',
  stories = [
    { id: 1, title: 'Tesla Will Kill the Model S and Model X This Year', timestamp: '19 mins ago' },
    { id: 2, title: 'Genesis Has Sold Some Copies of This Wild Concept', timestamp: '1 hr ago' },
    { id: 3, title: '2026 Ineos Grenadier Gets a Black Edition', timestamp: '1 hr ago', showPlayIcon: true },
    { id: 4, title: "Cadillac CT5-V Blackwing's New Package Costs $27K", timestamp: '2 hrs ago' },
    { id: 5, title: 'Hyundai Planning to Drop Santa Cruz Pickup', timestamp: '3 hrs ago', showPlayIcon: true },
    { id: 6, title: "Hameedi Venturo's Project Origine Will Have a V-12", timestamp: '6 hrs ago', showPlayIcon: true },
    { id: 7, title: "Refreshed S-Class Has Stars in It's Eyes", timestamp: '1 day ago' },
  ],
}: LatestNewsSidebarProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.containerGap,
        width: tokens.sizes.containerWidth,
      }}
    >
      {/* Strap Header - matches Pencil node 8sq8G */}
      {/* Width: hug content, Height: 36px fixed, Padding: 0 12px */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: tokens.sizes.strapHeight,
          paddingLeft: tokens.spacing.strapPaddingX,
          paddingRight: tokens.spacing.strapPaddingX,
          backgroundColor: tokens.colors.strapBackground,
          boxSizing: 'border-box',
          alignSelf: 'flex-start',
        }}
      >
        <span
          style={{
            fontFamily: tokens.typography.columnTitle.fontFamily,
            fontSize: tokens.typography.columnTitle.fontSize,
            fontWeight: tokens.typography.columnTitle.fontWeight,
            lineHeight: tokens.typography.columnTitle.lineHeight,
            color: tokens.colors.strapText,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </span>
      </div>

      {/* Story Cards */}
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          imageSrc={story.imageSrc}
          title={story.title}
          timestamp={story.timestamp}
          showPlayIcon={story.showPlayIcon}
        />
      ))}
    </div>
  );
}

export default LatestNewsSidebar;
