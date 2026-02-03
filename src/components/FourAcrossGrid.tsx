'use client';

/**
 * FourAcrossGrid Component
 * 
 * Based on Pencil design node: nfOyj
 * 
 * Structure:
 * - Frame: Feed block (vertical layout, width: 960px, gap: 40px, justifyContent: center)
 *   - Card/Core/Content/Title: H2 Headline (SF Pro, 64px, bold, #121212, letterSpacing: -2, lineHeight: 1.125)
 *   - content (horizontal layout, gap: 24px, width: fill_container, alignItems: center)
 *     - 4x Card/Base (vertical layout, gap: 8px, white bg, width: fill_container)
 *       - Image (height: 222px, width: fill_container)
 *       - Card/Core/Content (vertical layout, gap: 4px)
 *         - Title (SF Pro, 13px, bold, #121212, letterSpacing: 0.4, lineHeight: 1.23)
 *         - Author (SF Pro, 12px, normal, #bdbdbd, letterSpacing: 0.4, lineHeight: 1.33)
 *         - Button "Label" (black bg, white text, padding: 4px 8px)
 */

// Design tokens from Pencil - using official Car and Driver brand colors
const tokens = {
  colors: {
    text: '#222222',           // Dark Grey - official C&D primary
    textSecondary: '#222222',  // Dark Grey - for bylines and timestamps
    background: '#ffffff',     // White
    buttonBg: '#222222',       // Dark Grey - official C&D primary
    buttonText: '#ffffff',     // White
    imagePlaceholder: '#F5F5F5', // Light Grey - official C&D
  },
  spacing: {
    sectionGap: 40,
    contentGap: 24,
    cardGap: 8,
    contentInnerGap: 4,
    buttonPaddingV: 4,
    buttonPaddingH: 8,
    buttonGap: 4,
  },
  sizes: {
    sectionWidth: 1200,
    imageHeight: 260,
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
      letterSpacing: 0.4,
      lineHeight: 1.23,
    },
    cardAuthor: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.33,
    },
    button: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.23,
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

// Grid Card Component
interface GridCardProps {
  imageSrc?: string;
  title: string;
  author?: string;
}

function GridCard({ 
  imageSrc, 
  title = '{title}', 
  author = '{author}',
}: GridCardProps) {
  return (
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
      
      {/* Card Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.contentInnerGap,
          width: '100%',
        }}
      >
        {/* Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
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
            }}
          >
            {title}
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
              fontFamily: tokens.typography.cardAuthor.fontFamily,
              fontSize: tokens.typography.cardAuthor.fontSize,
              fontWeight: tokens.typography.cardAuthor.fontWeight,
              letterSpacing: tokens.typography.cardAuthor.letterSpacing,
              lineHeight: tokens.typography.cardAuthor.lineHeight,
              color: tokens.colors.textSecondary,
            }}
          >
            {author}
          </span>
        </div>
        
      </div>
    </div>
  );
}

// Main Four Across Grid Component
export interface FourAcrossGridProps {
  title?: string;
  cards?: Array<{
    id: string | number;
    imageSrc?: string;
    title: string;
    author?: string;
  }>;
}

export function FourAcrossGrid({
  title = 'H2 Headline',
  cards = [
    { id: 1, title: '{title}', author: '{author}' },
    { id: 2, title: '{title}', author: '{author}' },
    { id: 3, title: '{title}', author: '{author}' },
    { id: 4, title: '{title}', author: '{author}' },
  ],
}: FourAcrossGridProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: tokens.spacing.sectionGap,
        width: '100%',
        maxWidth: tokens.sizes.sectionWidth,
      }}
    >
      {/* Section Title - Strap style with bottom border */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          borderBottom: '5px solid #000000',
          paddingBottom: 8,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-barlow-condensed), "Barlow Condensed", Barlow, -apple-system, sans-serif',
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 0,
            lineHeight: 1,
            color: '#000000',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </span>
      </div>
      
      {/* Content - 4 Across Grid */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: tokens.spacing.contentGap,
          width: '100%',
        }}
      >
        {cards.map((card) => (
          <GridCard
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            author={card.author}
          />
        ))}
      </div>
    </div>
  );
}

// Export individual components and tokens
export { GridCard, tokens as fourAcrossGridTokens };
