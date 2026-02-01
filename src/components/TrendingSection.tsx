'use client';

/**
 * TrendingSection Component
 * 
 * Based on Pencil design node: jnZaB (extracted from SecondLeftSection)
 * 
 * Structure:
 * - Title: {title} (SF Pro, 28px, bold, #121212, letterSpacing: -0.8, lineHeight: 1.14)
 * - Trending (horizontal, gap: 24px, justify: space_between)
 *   - Card Container with Badge (vertical, width: 168px)
 *     - Card/Base (vertical, gap: 8px, white bg)
 *       - Image (height: 168px)
 *       - Card/Core/Content (vertical, gap: 4px)
 *         - Title (SF Pro, 18px, bold, #121212, letterSpacing: -0.1, lineHeight: 1.11)
 *         - Timestamp (SF Pro, 12px, normal, #121212, letterSpacing: 0.4, lineHeight: 1.33)
 *         - Author (SF Pro, 12px, normal, #bdbdbd, letterSpacing: 0.4, lineHeight: 1.33)
 *     - Badge (circular, #121212 bg, white text, 32px height)
 */

// Design tokens from Pencil
export const trendingSectionTokens = {
  colors: {
    text: '#121212',
    textSecondary: '#bdbdbd',
    background: '#ffffff',
    badgeBg: '#121212',
    badgeText: '#ffffff',
    imagePlaceholder: '#e5e5e5',
  },
  spacing: {
    sectionGap: 20,
    trendingGap: 24,
    cardGap: 8,
    contentGap: 4,
  },
  sizes: {
    cardWidth: 168,
    cardImageHeight: 168,
    badgeSize: 32,
  },
  padding: {
    badge: {
      vertical: 8,
      horizontal: 12,
    },
  },
  typography: {
    sectionTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: -0.8,
      lineHeight: 1.14,
    },
    cardTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: -0.1,
      lineHeight: 1.11,
    },
    timestamp: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.33,
    },
    author: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.33,
    },
    badge: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.14,
    },
  },
};

// Story Card with Badge Component
export interface StoryCardWithBadgeProps {
  imageSrc?: string;
  title: string;
  timestamp?: string;
  author?: string;
  badgeNumber?: number;
  showBadge?: boolean;
}

export function StoryCardWithBadge({ 
  imageSrc, 
  title, 
  timestamp = '{timestamp}', 
  author = '{author}',
  badgeNumber = 4,
  showBadge = true,
}: StoryCardWithBadgeProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: trendingSectionTokens.sizes.cardWidth,
      }}
    >
      {/* Card/Base */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: trendingSectionTokens.spacing.cardGap,
          backgroundColor: trendingSectionTokens.colors.background,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Image */}
        <div
          style={{
            width: '100%',
            height: trendingSectionTokens.sizes.cardImageHeight,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
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
                backgroundColor: trendingSectionTokens.colors.imagePlaceholder,
              }}
            />
          )}
        </div>
        
        {/* Card Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: trendingSectionTokens.spacing.contentGap,
            width: '100%',
          }}
        >
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
                fontFamily: trendingSectionTokens.typography.cardTitle.fontFamily,
                fontSize: trendingSectionTokens.typography.cardTitle.fontSize,
                fontWeight: trendingSectionTokens.typography.cardTitle.fontWeight,
                letterSpacing: trendingSectionTokens.typography.cardTitle.letterSpacing,
                lineHeight: trendingSectionTokens.typography.cardTitle.lineHeight,
                color: trendingSectionTokens.colors.text,
                width: '100%',
              }}
            >
              {title}
            </span>
          </div>
          
          {/* Timestamp */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: trendingSectionTokens.typography.timestamp.fontFamily,
                fontSize: trendingSectionTokens.typography.timestamp.fontSize,
                fontWeight: trendingSectionTokens.typography.timestamp.fontWeight,
                letterSpacing: trendingSectionTokens.typography.timestamp.letterSpacing,
                lineHeight: trendingSectionTokens.typography.timestamp.lineHeight,
                color: trendingSectionTokens.colors.text,
              }}
            >
              {timestamp}
            </span>
          </div>
          
          {/* Author */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: trendingSectionTokens.typography.author.fontFamily,
                fontSize: trendingSectionTokens.typography.author.fontSize,
                fontWeight: trendingSectionTokens.typography.author.fontWeight,
                letterSpacing: trendingSectionTokens.typography.author.letterSpacing,
                lineHeight: trendingSectionTokens.typography.author.lineHeight,
                color: trendingSectionTokens.colors.textSecondary,
              }}
            >
              {author}
            </span>
          </div>
        </div>
      </div>
      
      {/* Badge */}
      {showBadge && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: trendingSectionTokens.colors.badgeBg,
            borderRadius: 1024,
            height: trendingSectionTokens.sizes.badgeSize,
            paddingTop: trendingSectionTokens.padding.badge.vertical,
            paddingBottom: trendingSectionTokens.padding.badge.vertical,
            paddingLeft: trendingSectionTokens.padding.badge.horizontal,
            paddingRight: trendingSectionTokens.padding.badge.horizontal,
            alignSelf: 'flex-start',
            marginTop: trendingSectionTokens.spacing.cardGap,
          }}
        >
          <span
            style={{
              fontFamily: trendingSectionTokens.typography.badge.fontFamily,
              fontSize: trendingSectionTokens.typography.badge.fontSize,
              fontWeight: trendingSectionTokens.typography.badge.fontWeight,
              letterSpacing: trendingSectionTokens.typography.badge.letterSpacing,
              lineHeight: trendingSectionTokens.typography.badge.lineHeight,
              color: trendingSectionTokens.colors.badgeText,
              textAlign: 'center',
            }}
          >
            {badgeNumber}
          </span>
        </div>
      )}
    </div>
  );
}

// Trending Card Data Interface
export interface TrendingCardData {
  id: string | number;
  imageSrc?: string;
  title: string;
  timestamp?: string;
  author?: string;
  badgeNumber?: number;
  showBadge?: boolean;
}

// Main TrendingSection Component
export interface TrendingSectionProps {
  title?: string;
  cards?: TrendingCardData[];
  showTitle?: boolean;
}

export function TrendingSection({ 
  title = '{title}',
  showTitle = true,
  cards = [
    { id: 1, title: "I Tried a Workout Designed for Menopausal Women", badgeNumber: 4 },
    { id: 2, title: "I Tried a Workout Designed for Menopausal Women", badgeNumber: 4 },
    { id: 3, title: "I Tried a Workout Designed for Menopausal Women", badgeNumber: 4 },
  ]
}: TrendingSectionProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: trendingSectionTokens.spacing.sectionGap,
        width: '100%',
      }}
    >
      {/* Section Title */}
      {showTitle && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: trendingSectionTokens.typography.sectionTitle.fontFamily,
              fontSize: trendingSectionTokens.typography.sectionTitle.fontSize,
              fontWeight: trendingSectionTokens.typography.sectionTitle.fontWeight,
              letterSpacing: trendingSectionTokens.typography.sectionTitle.letterSpacing,
              lineHeight: trendingSectionTokens.typography.sectionTitle.lineHeight,
              color: trendingSectionTokens.colors.text,
            }}
          >
            {title}
          </span>
        </div>
      )}
      
      {/* Trending Cards Row */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: trendingSectionTokens.spacing.trendingGap,
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {cards.map((card) => (
          <StoryCardWithBadge
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            timestamp={card.timestamp}
            author={card.author}
            badgeNumber={card.badgeNumber}
            showBadge={card.showBadge !== false}
          />
        ))}
      </div>
    </div>
  );
}
