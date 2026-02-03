'use client';

/**
 * LeftSidebarColumn Component (Col1)
 * 
 * Based on Pencil design node: 802fn
 * 
 * Structure:
 * - Frame: Col1 (vertical layout, width: 220px, gap: 4px)
 *   - Text: {title} (SF Pro, 28px, bold, #121212, letterSpacing: -0.8, lineHeight: 1.14)
 *   - Multiple "Temp Horizontal Solution" cards (horizontal layout, gap: 12px, white bg)
 *     - Media thumbnail (80x80, #d9d9d9 bg, with centered play icon)
 *     - Card/Base (vertical layout, gap: 8px, white bg, clip: true)
 *       - Card/Core/Content (vertical layout, gap: 4px)
 *         - Title (SF Pro, 16px, bold, #121212, lineHeight: 1.25)
 *         - Timestamp (SF Pro, 12px, normal, #121212, letterSpacing: 0.4, lineHeight: 1.33)
 */

// Design tokens from Pencil - using official Car and Driver brand colors
const tokens = {
  colors: {
    text: '#222222',           // Dark Grey - official C&D primary
    textSecondary: '#A59143',  // Dark Gold - official C&D secondary
    background: '#ffffff',     // White
    mediaBg: '#F5F5F5',        // Light Grey - official C&D
    iconBg: 'rgba(255, 255, 255, 0.04)',
  },
  spacing: {
    columnGap: 4,
    cardGap: 12,
    contentGap: 4,
    cardInnerGap: 8,
    slotPadding: 8,
  },
  sizes: {
    columnWidth: 220,
    mediaSize: 80,
    iconSize: 32,
    iconInnerSize: 26,
  },
  typography: {
    title: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: -0.8,
      lineHeight: 1.14,
    },
    cardTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.25,
    },
    timestamp: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.33,
    },
  },
};

// Play Icon SVG Component
function PlayIcon({ size = 26, color = '#121212' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="12" stroke={color} strokeWidth="2" />
      <path
        d="M10 8L18 13L10 18V8Z"
        fill={color}
      />
    </svg>
  );
}

// Media Thumbnail Component
function MediaThumbnail({ imageSrc, showPlayIcon = true }: { imageSrc?: string; showPlayIcon?: boolean }) {
  return (
    <div
      style={{
        width: tokens.sizes.mediaSize,
        height: tokens.sizes.mediaSize,
        backgroundColor: tokens.colors.mediaBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
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
            backgroundColor: tokens.colors.mediaBg,
          }}
        />
      )}
      {showPlayIcon && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: tokens.sizes.iconSize,
            height: tokens.sizes.iconSize,
            borderRadius: 1024,
            backgroundColor: tokens.colors.iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PlayIcon size={tokens.sizes.iconInnerSize} color={tokens.colors.text} />
        </div>
      )}
    </div>
  );
}

// Card Content Component
interface CardContentProps {
  title: string;
  timestamp?: string;
}

function CardContent({ title, timestamp }: CardContentProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.contentGap,
        flex: 1,
      }}
    >
      {/* Title */}
      <div style={{ width: '100%' }}>
        <span
          style={{
            fontFamily: tokens.typography.cardTitle.fontFamily,
            fontSize: tokens.typography.cardTitle.fontSize,
            fontWeight: tokens.typography.cardTitle.fontWeight,
            lineHeight: tokens.typography.cardTitle.lineHeight,
            color: tokens.colors.text,
            display: 'block',
          }}
        >
          {title}
        </span>
      </div>
      
      {/* Timestamp */}
      {timestamp && (
        <div>
          <span
            style={{
              fontFamily: tokens.typography.timestamp.fontFamily,
              fontSize: tokens.typography.timestamp.fontSize,
              fontWeight: tokens.typography.timestamp.fontWeight,
              letterSpacing: tokens.typography.timestamp.letterSpacing,
              lineHeight: tokens.typography.timestamp.lineHeight,
              color: tokens.colors.text,
            }}
          >
            {timestamp}
          </span>
        </div>
      )}
    </div>
  );
}

// Horizontal Story Card Component
interface HorizontalStoryCardProps {
  title: string;
  timestamp?: string;
  imageSrc?: string;
  showPlayIcon?: boolean;
}

function HorizontalStoryCard({ title, timestamp, imageSrc, showPlayIcon = true }: HorizontalStoryCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: tokens.spacing.cardGap,
        backgroundColor: tokens.colors.background,
        width: '100%',
      }}
    >
      {/* Media Thumbnail */}
      <MediaThumbnail imageSrc={imageSrc} showPlayIcon={showPlayIcon} />
      
      {/* Card Base */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.cardInnerGap,
          backgroundColor: tokens.colors.background,
          flex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Card Content */}
        <CardContent title={title} timestamp={timestamp} />
        
        {/* Slot (empty, padding: 8) */}
        <div
          style={{
            padding: tokens.spacing.slotPadding,
            overflow: 'hidden',
          }}
        />
      </div>
    </div>
  );
}

// Main Left Sidebar Column Component
export interface LeftSidebarColumnProps {
  title?: string;
  stories?: Array<{
    id: string | number;
    title: string;
    timestamp?: string;
    imageSrc?: string;
    showPlayIcon?: boolean;
  }>;
}

export function LeftSidebarColumn({ 
  title = '{title}',
  stories = [
    { id: 1, title: "Why Did Valerie Bertinelli Leave 'Kids", timestamp: '{timestamp}', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-santa-cruz-exterior-113-66042095b2fac.jpg?crop=0.748xw:0.686xh;0.0901xw,0.255xh&resize=980:*' },
    { id: 2, title: "Why Did Valerie Bertinelli Leave 'Kids", timestamp: '{timestamp}', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-117-6787c5548e855.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*' },
    { id: 3, title: "Why Did Valerie Bertinelli Leave 'Kids", timestamp: '{timestamp}' },
    { id: 4, title: "Why Did Valerie Bertinelli Leave 'Kids", timestamp: '{timestamp}' },
    { id: 5, title: "Hyundai Planning to Drop Santa Cruz Pickup", timestamp: '3 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-santa-cruz-exterior-113-66042095b2fac.jpg?crop=0.748xw:0.686xh;0.0901xw,0.255xh&resize=980:*', showPlayIcon: false },
    { id: 6, title: "Hameedi Venturo's Project Origine Will Have a V-12", timestamp: '6 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-117-6787c5548e855.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*', showPlayIcon: false },
    { id: 7, title: "Refreshed S-Class Has Stars in It's Eyes", timestamp: '1 day ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-exterior-pr-111-697927a180999.jpg?crop=0.847xw:0.714xh;0.153xw,0.253xh&resize=1800:*', showPlayIcon: false },
  ]
}: LeftSidebarColumnProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.columnGap,
        width: tokens.sizes.columnWidth,
      }}
    >
      {/* Section Title */}
      <span
        style={{
          fontFamily: tokens.typography.title.fontFamily,
          fontSize: tokens.typography.title.fontSize,
          fontWeight: tokens.typography.title.fontWeight,
          letterSpacing: tokens.typography.title.letterSpacing,
          lineHeight: tokens.typography.title.lineHeight,
          color: tokens.colors.text,
        }}
      >
        {title}
      </span>
      
      {/* Story Cards */}
      {stories.map((story) => (
        <HorizontalStoryCard
          key={story.id}
          title={story.title}
          timestamp={story.timestamp}
          imageSrc={story.imageSrc}
          showPlayIcon={story.showPlayIcon !== false}
        />
      ))}
    </div>
  );
}

// Export tokens for use in other components
export { tokens as leftSidebarTokens };
