'use client';

import { font, colors, spacing } from '@/lib/designTokens';

/**
 * LatestNewsSidebar Component (Car and Driver Version)
 * 
 * Based on Pencil design node: DaukG
 * 
 * Structure:
 * - Frame: Latest (vertical layout, width: 290px, gap: 24px)
 *   - Strap (header with red background #d22329, white text)
 *     - Column Title: "Latest News" (Barlow Condensed, 24px, 600 weight, white)
 *   - Story Card Latest (multiple cards, vertical layout, gap: 24px)
 *     - Latest Story Card (horizontal layout, gap: 16px)
 *       - Image thumbnail (80x80px) with optional media icon overlay
 *       - Text content (vertical layout, gap: 16px)
 *         - Title (Inter, 16px, bold, #000000, letterSpacing: 0.16, lineHeight: 1.1)
 *         - Timestamp (Inter, 13px, normal, #198294, lineHeight: 1.3)
 * 
 * Typography:
 * - Barlow Condensed: Section header (strap)
 * - Inter: Headlines and body text
 */

// Design tokens from Pencil (Car and Driver brand) - using centralized tokens
const tokens = {
  colors: {
    strapBackground: '#d22329',  // Car and Driver red
    strapText: colors.neutral.lightest,
    titleText: colors.neutral.darkest,
    timestampText: '#198294',    // Teal accent
    imagePlaceholder: colors.neutral[300],
    mediaIconBg: '#ffffffe5',
    mediaIconShadow: '#0000004f',
  },
  spacing: {
    containerGap: spacing.xl,
    cardGap: spacing.md,
    strapPadding: spacing.sm,
  },
  sizes: {
    containerWidth: 290,
    imageSize: 80,
    strapHeight: 36,
    mediaIconSize: 32,
  },
  typography: {
    columnTitle: {
      // Barlow Condensed for section headers
      fontFamily: font.family.barlowCondensed,
      fontSize: font.size['2xl'],
      fontWeight: font.weight.semibold,
      lineHeight: 1,
    },
    title: {
      // Inter for headlines
      fontFamily: font.family.inter,
      fontSize: font.size.md,
      fontWeight: font.weight.bold,
      letterSpacing: 0.16,
      lineHeight: 1.1,
    },
    timestamp: {
      // Inter for body text
      fontFamily: font.family.inter,
      fontSize: font.size['2xs'],
      fontWeight: font.weight.regular,
      lineHeight: 1.3,
    },
  },
};

// Image Placeholder Component
function ImagePlaceholder({ size, showPlayIcon = false }: { size: number; showPlayIcon?: boolean }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        position: 'relative',
        overflow: 'hidden',
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
            boxShadow: `0 2px 4px ${tokens.colors.mediaIconShadow}`,
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
        <div style={{ position: 'relative', minWidth: tokens.sizes.imageSize }}>
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
                bottom: 4,
                left: 4,
                width: tokens.sizes.mediaIconSize,
                height: tokens.sizes.mediaIconSize,
                borderRadius: 16,
                backgroundColor: tokens.colors.mediaIconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 2px 4px ${tokens.colors.mediaIconShadow}`,
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
          gap: tokens.spacing.cardGap,
          paddingTop: 2,
          flex: 1,
        }}
      >
        {/* Title */}
        <span
          style={{
            fontFamily: tokens.typography.title.fontFamily,
            fontSize: tokens.typography.title.fontSize,
            fontWeight: tokens.typography.title.fontWeight,
            letterSpacing: tokens.typography.title.letterSpacing,
            lineHeight: tokens.typography.title.lineHeight,
            color: tokens.colors.titleText,
          }}
        >
          {title}
        </span>

        {/* Timestamp */}
        <span
          style={{
            fontFamily: tokens.typography.timestamp.fontFamily,
            fontSize: tokens.typography.timestamp.fontSize,
            fontWeight: tokens.typography.timestamp.fontWeight,
            lineHeight: tokens.typography.timestamp.lineHeight,
            color: tokens.colors.timestampText,
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
      {/* Strap Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: tokens.sizes.strapHeight,
          padding: `0 ${tokens.spacing.strapPadding}px`,
          backgroundColor: tokens.colors.strapBackground,
        }}
      >
        <span
          style={{
            fontFamily: tokens.typography.columnTitle.fontFamily,
            fontSize: tokens.typography.columnTitle.fontSize,
            fontWeight: tokens.typography.columnTitle.fontWeight,
            lineHeight: tokens.typography.columnTitle.lineHeight,
            color: tokens.colors.strapText,
            textAlign: 'center',
            width: '100%',
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
