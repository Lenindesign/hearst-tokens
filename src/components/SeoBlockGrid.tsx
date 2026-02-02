'use client';

/**
 * SeoBlockGrid Component
 * 
 * Based on Pencil design node: cstYQ
 * 
 * Structure:
 * - Frame: Feed block (vertical layout, width: 960px, gap: 36px)
 *   - Card/Core/Content/Title: H2 Headline (SF Pro, 64px, bold, #121212, letterSpacing: -2, lineHeight: 1.125)
 *   - Frame 37491 (grid layout, 4 columns, 3 rows)
 *     - 12x SEO BLOCK cards (width: 222px each)
 *       - Card/Base (vertical, gap: 8px, white bg, clip: true)
 *         - Image (height: 166.5px)
 *         - Card/Core/Content (vertical, gap: 4px)
 *           - Title (SF Pro, 20px, bold, #121212, letterSpacing: -0.2, lineHeight: 1.2)
 */

// Design tokens from Pencil
const tokens = {
  colors: {
    text: '#121212',
    textSecondary: '#bdbdbd',
    background: '#ffffff',
    imagePlaceholder: '#f6f5f5',
  },
  spacing: {
    sectionGap: 36,
    cardGap: 8,
    contentGap: 4,
    gridGap: 24,
    titlePadding: 4,
  },
  sizes: {
    sectionWidth: 1200,
    cardWidth: 280, // Adjusted for 1200px width (4 columns with gaps)
    imageHeight: 180, // Slightly taller for 1200px layout
  },
  typography: {
    sectionTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 64,
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 1.125,
    },
    cardTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: -0.2,
      lineHeight: 1.2,
    },
  },
};

// Card Image Component
interface CardImageProps {
  src?: string;
  alt?: string;
}

function CardImage({ src, alt = '' }: CardImageProps) {
  return (
    <div
      style={{
        width: '100%',
        height: tokens.sizes.imageHeight,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: tokens.colors.imagePlaceholder,
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
  );
}

// SEO Block Card Component
interface SeoBlockCardProps {
  imageSrc?: string;
  title: string;
}

function SeoBlockCard({ imageSrc, title }: SeoBlockCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.cardGap,
        backgroundColor: tokens.colors.background,
        overflow: 'hidden',
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* Image */}
      <CardImage src={imageSrc} alt={title} />
      
      {/* Card Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.contentGap,
          width: '100%',
        }}
      >
        {/* Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <span
            style={{
              fontFamily: tokens.typography.cardTitle.fontFamily,
              fontSize: tokens.typography.cardTitle.fontSize,
              fontWeight: tokens.typography.cardTitle.fontWeight,
              letterSpacing: tokens.typography.cardTitle.letterSpacing,
              lineHeight: tokens.typography.cardTitle.lineHeight,
              color: tokens.colors.text,
              width: '100%',
              textAlign: 'left',
            }}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

// Main SEO Block Grid Component
export interface SeoBlockGridProps {
  title?: string;
  cards?: Array<{
    id: string | number;
    imageSrc?: string;
    title: string;
  }>;
}

export function SeoBlockGrid({
  title = 'H2 Headline',
  cards = [
    { id: 1, title: 'Card sample title card base vertical card component' },
    { id: 2, title: 'Card sample title card base vertical card component' },
    { id: 3, title: 'Card sample title card base vertical card component' },
    { id: 4, title: 'Card sample title card base vertical card component' },
    { id: 5, title: 'Card sample title card base vertical card component' },
    { id: 6, title: 'Card sample title card base vertical card component' },
    { id: 7, title: 'Card sample title card base vertical card component' },
    { id: 8, title: 'Card sample title card base vertical card component' },
    { id: 9, title: 'Card sample title card base vertical card component' },
    { id: 10, title: 'Card sample title card base vertical card component' },
    { id: 11, title: 'Card sample title card base vertical card component' },
    { id: 12, title: 'Card sample title card base vertical card component' },
  ],
}: SeoBlockGridProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.sectionGap,
        width: '100%',
        maxWidth: tokens.sizes.sectionWidth,
      }}
    >
      {/* Section Title - Centered with lines on both sides */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: 16,
        }}
      >
        {/* Left Line */}
        <div
          style={{
            flex: 1,
            height: 1,
            backgroundColor: tokens.colors.text,
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-barlow-condensed), "Barlow Condensed", Barlow, -apple-system, sans-serif',
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: 0,
            lineHeight: tokens.typography.sectionTitle.lineHeight,
            color: tokens.colors.text,
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </span>
        {/* Right Line */}
        <div
          style={{
            flex: 1,
            height: 1,
            backgroundColor: tokens.colors.text,
          }}
        />
      </div>

      {/* Card Grid - 4 columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: tokens.spacing.gridGap,
          width: '100%',
        }}
      >
        {cards.map((card) => (
          <SeoBlockCard
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}

// Export tokens for reuse
export { tokens as seoBlockGridTokens };
