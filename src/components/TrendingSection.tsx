'use client';

/**
 * TrendingSection Component (Car and Driver)
 * 
 * Based on Pencil design node: 1FgAE (Trending)
 * Adjusted to fit 5 cards in a responsive container
 * 
 * Structure:
 * - Container: 100% width, vertical layout, gap 16px
 * - Strap (header):
 *   - "TRENDING" text: Barlow Condensed, 20px, 700 weight, black
 *   - Bottom border: 4px solid #0061af
 * - Trending Cards row: horizontal, gap 16px, justify space-between
 *   - 5x Story Card Trending (flexible width):
 *     - Image group with diamond badge overlay
 *       - Image: 120x120px
 *       - Diamond badge: rotated 45deg white square with black border, number inside
 *     - Head and Dek section:
 *       - Title: Inter, 13px, 700 weight, lineHeight 1.2
 *       - Comments/Time to read row
 */

// Design tokens - adjusted for 5 cards in smaller container
export const trendingSectionTokens = {
  colors: {
    text: '#000000',
    textSecondary: '#666666',
    background: '#ffffff',
    strapBorder: '#0061af',
    badgeBg: '#ffffff',
    badgeBorder: '#000000',
    imagePlaceholder: '#e5e5e5',
  },
  spacing: {
    containerGap: 16,
    cardsGap: 12,
    cardGap: 8,
    headDekGap: 8,
    headlineGap: 4,
  },
  sizes: {
    strapHeight: 28,
    strapBorderWidth: 4,
    cardWidth: 140,
    imageSize: 120,
    headDekHeight: 70,
    badgeSize: 24,
  },
  typography: {
    strapTitle: {
      fontFamily: '"Barlow Condensed", Barlow, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1,
    },
    cardTitle: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.25,
    },
    badge: {
      fontFamily: '"Barlow Condensed", Barlow, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: -0.5,
      lineHeight: 1.08,
    },
    meta: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 1.3,
    },
  },
};

// Diamond Badge Component
function DiamondBadge({ number }: { number: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 26,
      }}
    >
      {/* Rotated diamond background */}
      <div
        style={{
          position: 'absolute',
          width: trendingSectionTokens.sizes.badgeSize,
          height: trendingSectionTokens.sizes.badgeSize,
          backgroundColor: trendingSectionTokens.colors.badgeBg,
          border: `1px solid ${trendingSectionTokens.colors.badgeBorder}`,
          transform: 'rotate(45deg)',
        }}
      />
      {/* Number */}
      <span
        style={{
          position: 'relative',
          fontFamily: trendingSectionTokens.typography.badge.fontFamily,
          fontSize: trendingSectionTokens.typography.badge.fontSize,
          fontWeight: trendingSectionTokens.typography.badge.fontWeight,
          letterSpacing: trendingSectionTokens.typography.badge.letterSpacing,
          lineHeight: trendingSectionTokens.typography.badge.lineHeight,
          color: trendingSectionTokens.colors.text,
          textAlign: 'center',
        }}
      >
        {number}
      </span>
    </div>
  );
}

// Image Placeholder Component
function ImagePlaceholder({ size }: { size: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundImage: `
          linear-gradient(45deg, #d5d5d5 25%, transparent 25%),
          linear-gradient(-45deg, #d5d5d5 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #d5d5d5 75%),
          linear-gradient(-45deg, transparent 75%, #d5d5d5 75%)
        `,
        backgroundSize: '12px 12px',
        backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
        backgroundColor: trendingSectionTokens.colors.imagePlaceholder,
      }}
    />
  );
}

// Story Card Trending Component
export interface StoryCardTrendingProps {
  imageSrc?: string;
  title: string;
  badgeNumber: number;
  showPlayIcon?: boolean;
}

export function StoryCardTrending({ 
  imageSrc, 
  title, 
  badgeNumber,
  showPlayIcon = false,
}: StoryCardTrendingProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: trendingSectionTokens.spacing.cardGap,
        flex: '1 1 0',
        minWidth: 0,
      }}
    >
      {/* Image Group with Badge */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
        }}
      >
        {/* Image */}
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
              backgroundSize: '12px 12px',
              backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
              backgroundColor: trendingSectionTokens.colors.imagePlaceholder,
            }} 
          />
        )}
        
        {/* Play Icon (optional) */}
        {showPlayIcon && (
          <div
            style={{
              position: 'absolute',
              bottom: 4,
              left: 4,
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
              paddingLeft: 2,
            }}
          >
            <svg width="10" height="12" viewBox="0 0 12 14" fill="none">
              <path d="M0 0L12 7L0 14V0Z" fill="#198294" />
            </svg>
          </div>
        )}
        
        {/* Diamond Badge */}
        <DiamondBadge number={badgeNumber} />
      </div>
      
      {/* Head and Dek Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: trendingSectionTokens.spacing.headDekGap,
          width: '100%',
          minHeight: trendingSectionTokens.sizes.headDekHeight,
          paddingLeft: 4,
          borderBottom: '1px solid #e5e5e5',
        }}
      >
        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: trendingSectionTokens.spacing.headlineGap,
            width: '100%',
          }}
        >
          {/* Title */}
          <span
            style={{
              fontFamily: trendingSectionTokens.typography.cardTitle.fontFamily,
              fontSize: trendingSectionTokens.typography.cardTitle.fontSize,
              fontWeight: trendingSectionTokens.typography.cardTitle.fontWeight,
              lineHeight: trendingSectionTokens.typography.cardTitle.lineHeight,
              color: trendingSectionTokens.colors.text,
              width: '100%',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </span>
        </div>
        
        {/* Comments and Time to Read Row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
            width: '100%',
            paddingBottom: 6,
          }}
        >
          {/* Comments */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 3C1 1.89543 1.89543 1 3 1H11C12.1046 1 13 1.89543 13 3V8C13 9.10457 12.1046 10 11 10H8L5 13V10H3C1.89543 10 1 9.10457 1 8V3Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span
              style={{
                fontFamily: trendingSectionTokens.typography.meta.fontFamily,
                fontSize: trendingSectionTokens.typography.meta.fontSize,
                fontWeight: trendingSectionTokens.typography.meta.fontWeight,
                lineHeight: trendingSectionTokens.typography.meta.lineHeight,
                color: trendingSectionTokens.colors.textSecondary,
              }}
            >
              12
            </span>
          </div>
          
          {/* Time to Read */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              flex: 1,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#666666" strokeWidth="1.5"/>
              <path d="M7 4V7L9 9" stroke="#666666" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span
              style={{
                fontFamily: trendingSectionTokens.typography.meta.fontFamily,
                fontSize: trendingSectionTokens.typography.meta.fontSize,
                fontWeight: trendingSectionTokens.typography.meta.fontWeight,
                lineHeight: trendingSectionTokens.typography.meta.lineHeight,
                color: trendingSectionTokens.colors.textSecondary,
              }}
            >
              3 min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Trending Card Data Interface
export interface TrendingCardData {
  id: string | number;
  imageSrc?: string;
  title: string;
  showPlayIcon?: boolean;
}

// Main TrendingSection Component
export interface TrendingSectionProps {
  title?: string;
  cards?: TrendingCardData[];
}

export function TrendingSection({ 
  title = 'TRENDING',
  cards = [
    { id: 1, title: "2026 Explorer Tremor Drive: Big Power, Big Bucks" },
    { id: 2, title: "The Winningest Cars in 10Best History" },
    { id: 3, title: "View Interior Photos of the 2027 Mercedes S-Class" },
    { id: 4, title: "Ezra Dyer: The Altima Secretly Thirsts for Mayhem" },
    { id: 5, title: "Revealed! 591-HP Donkervoort P24 RS Is Super Light" },
  ]
}: TrendingSectionProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: trendingSectionTokens.spacing.containerGap,
        width: '100%',
      }}
    >
      {/* Strap (Header) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: trendingSectionTokens.sizes.strapHeight,
          borderBottom: `${trendingSectionTokens.sizes.strapBorderWidth}px solid ${trendingSectionTokens.colors.strapBorder}`,
        }}
      >
        {/* Column Title */}
        <span
          style={{
            fontFamily: trendingSectionTokens.typography.strapTitle.fontFamily,
            fontSize: trendingSectionTokens.typography.strapTitle.fontSize,
            fontWeight: trendingSectionTokens.typography.strapTitle.fontWeight,
            lineHeight: trendingSectionTokens.typography.strapTitle.lineHeight,
            color: trendingSectionTokens.colors.text,
            width: '100%',
          }}
        >
          {title}
        </span>
      </div>
      
      {/* Trending Cards Row */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: trendingSectionTokens.spacing.cardsGap,
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {cards.map((card, index) => (
          <StoryCardTrending
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            badgeNumber={index + 1}
            showPlayIcon={card.showPlayIcon}
          />
        ))}
      </div>
    </div>
  );
}
