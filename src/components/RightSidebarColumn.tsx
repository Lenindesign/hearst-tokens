'use client';

/**
 * RightSidebarColumn Component (Col3)
 * 
 * Based on Pencil design node: ZEf63
 * 
 * Structure:
 * - Frame: Col3 (vertical layout, width: fill_container, gap: 16px)
 *   - Multiple "Story Card Supporting Feature" cards (width: 304px)
 *     - Top border: black 1px
 *     - Padding: [16, 0, 0, 0] (top only)
 *     - Card/Base (vertical layout, gap: 8px, white bg)
 *       - Card/Core/Content (vertical layout, gap: 8px)
 *         - Description (SF Pro, 15px, normal, #121212, letterSpacing: 0.2, lineHeight: 1.33)
 *         - Author (SF Pro, 12px, normal, #bdbdbd, letterSpacing: 0.4, lineHeight: 1.33)
 *       - Image (height: 148px, with play button)
 */

// Design tokens from Pencil
const tokens = {
  colors: {
    text: '#121212',
    textSecondary: '#bdbdbd',
    background: '#ffffff',
    border: '#000000',
    imagePlaceholder: '#e5e5e5',
    iconBg: 'rgba(255, 255, 255, 0.04)',
  },
  spacing: {
    columnGap: 16,
    cardGap: 8,
    contentGap: 8,
    cardPaddingTop: 16,
  },
  sizes: {
    cardWidth: 304,
    imageHeight: 148,
    iconSize: 32,
    iconInnerSize: 26,
  },
  border: {
    top: 1,
  },
  typography: {
    description: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: 0.2,
      lineHeight: 1.33,
    },
    author: {
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

// Card Image Component with Play Button
interface CardImageProps {
  src?: string;
  alt?: string;
  showPlayIcon?: boolean;
}

function CardImage({ src, alt = '', showPlayIcon = true }: CardImageProps) {
  return (
    <div
      style={{
        width: '100%',
        height: tokens.sizes.imageHeight,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
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
      
      {/* Play Button Overlay */}
      {showPlayIcon && (
        <div
          style={{
            position: 'absolute',
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
  description: string;
  author?: string;
}

function CardContent({ description, author }: CardContentProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.contentGap,
        width: '100%',
      }}
    >
      {/* Description */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span
          style={{
            fontFamily: tokens.typography.description.fontFamily,
            fontSize: tokens.typography.description.fontSize,
            fontWeight: tokens.typography.description.fontWeight,
            letterSpacing: tokens.typography.description.letterSpacing,
            lineHeight: tokens.typography.description.lineHeight,
            color: tokens.colors.text,
            width: '100%',
          }}
        >
          {description}
        </span>
      </div>
      
      {/* Author */}
      {author && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
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
  );
}

// Story Card Supporting Feature Component
interface SupportingFeatureCardProps {
  description: string;
  author?: string;
  imageSrc?: string;
  imageAlt?: string;
  showPlayIcon?: boolean;
}

function SupportingFeatureCard({ 
  description, 
  author, 
  imageSrc, 
  imageAlt,
  showPlayIcon = true 
}: SupportingFeatureCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: tokens.spacing.cardGap,
        width: tokens.sizes.cardWidth,
        backgroundColor: tokens.colors.background,
        paddingTop: tokens.spacing.cardPaddingTop,
        borderTop: `${tokens.border.top}px solid ${tokens.colors.border}`,
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
        {/* Card Content */}
        <CardContent description={description} author={author} />
        
        {/* Image */}
        <CardImage src={imageSrc} alt={imageAlt} showPlayIcon={showPlayIcon} />
      </div>
    </div>
  );
}

// Main Right Sidebar Column Component
export interface RightSidebarColumnProps {
  cards?: Array<{
    id: string | number;
    description: string;
    author?: string;
    imageSrc?: string;
    imageAlt?: string;
    showPlayIcon?: boolean;
  }>;
}

export function RightSidebarColumn({ 
  cards = [
    { 
      id: 1, 
      description: "The cell company rolls out Gen Z influencers and fan experiences.", 
      author: '{author}' 
    },
    { 
      id: 2, 
      description: "The cell company rolls out Gen Z influencers and fan experiences.", 
      author: '{author}' 
    },
    { 
      id: 3, 
      description: "The cell company rolls out Gen Z influencers and fan experiences.", 
      author: '{author}' 
    },
  ]
}: RightSidebarColumnProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.columnGap,
        width: '100%',
      }}
    >
      {cards.map((card) => (
        <SupportingFeatureCard
          key={card.id}
          description={card.description}
          author={card.author}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          showPlayIcon={card.showPlayIcon !== false}
        />
      ))}
    </div>
  );
}

// Export individual components and tokens
export { SupportingFeatureCard, tokens as rightSidebarTokens };
