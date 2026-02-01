'use client';

/**
 * BigStoryCard Component
 * 
 * Based on Pencil design node: KnvvB
 * 
 * Structure:
 * - Frame: big story (horizontal layout, gap: 32px, width: fill_container)
 *   - Card/Base (vertical layout, gap: 8px, white bg, width: fill_container)
 *     - Image (height: 540px, width: fill_container)
 *     - Card/Core/Content (vertical layout, gap: 4px, width: fill_container)
 *       - Eyebrow (SF Pro, 15px, normal, #121212, letterSpacing: 0.2, lineHeight: 1.067)
 *       - Title (SF Pro, 48px, bold, #121212, letterSpacing: -2, lineHeight: 1.083)
 *       - Author (SF Pro, 15px, normal, #bdbdbd, letterSpacing: 0.2, lineHeight: 1.067)
 */

// Design tokens from Pencil
const tokens = {
  colors: {
    text: '#121212',
    textSecondary: '#bdbdbd',
    background: '#ffffff',
    imagePlaceholder: '#e5e5e5',
  },
  spacing: {
    containerGap: 32,
    cardGap: 8,
    contentGap: 4,
  },
  sizes: {
    imageHeight: 540,
  },
  typography: {
    eyebrow: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: 0.2,
      lineHeight: 1.067,
    },
    title: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 48,
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 1.083,
    },
    author: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: 0.2,
      lineHeight: 1.067,
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

// Main BigStoryCard Component
export interface BigStoryCardProps {
  imageSrc?: string;
  eyebrow?: string;
  title?: string;
  author?: string;
  showEyebrow?: boolean;
  showAuthor?: boolean;
}

export function BigStoryCard({
  imageSrc,
  eyebrow = '{eyebrow}',
  title = 'Big Card Title Goes Here. Will be Two Lines. Big Card Title Goes Here.',
  author = '{author}',
  showEyebrow = true,
  showAuthor = true,
}: BigStoryCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: tokens.spacing.containerGap,
        width: '100%',
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
        
        {/* Card/Core/Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing.contentGap,
            width: '100%',
          }}
        >
          {/* Eyebrow */}
          {showEyebrow && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <span
                style={{
                  fontFamily: tokens.typography.eyebrow.fontFamily,
                  fontSize: tokens.typography.eyebrow.fontSize,
                  fontWeight: tokens.typography.eyebrow.fontWeight,
                  letterSpacing: tokens.typography.eyebrow.letterSpacing,
                  lineHeight: tokens.typography.eyebrow.lineHeight,
                  color: tokens.colors.text,
                  width: '100%',
                }}
              >
                {eyebrow}
              </span>
            </div>
          )}
          
          {/* Title */}
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <span
              style={{
                fontFamily: tokens.typography.title.fontFamily,
                fontSize: tokens.typography.title.fontSize,
                fontWeight: tokens.typography.title.fontWeight,
                letterSpacing: tokens.typography.title.letterSpacing,
                lineHeight: tokens.typography.title.lineHeight,
                color: tokens.colors.text,
                width: '100%',
              }}
            >
              {title}
            </span>
          </div>
          
          {/* Author */}
          {showAuthor && (
            <div
              style={{
                display: 'flex',
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
      </div>
    </div>
  );
}

// Export tokens for reuse
export { tokens as bigStoryCardTokens };
