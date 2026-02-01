'use client';

/**
 * BigCard Component (Col2)
 * 
 * Based on Pencil design node: ElCNS
 * 
 * Structure:
 * - Frame: Col2 (horizontal layout implied, width: fill_container, gap: 10px)
 *   - Card/Base (vertical layout, gap: 8px, white bg, clip: true, width: fill_container)
 *     - Image (height: 291px, width: fill_container, clip: true)
 *     - Card/Core/Content (vertical layout, gap: 4px, width: fill_container)
 *       - Eyebrow (SF Pro, 13px, normal, #121212, letterSpacing: 0.4, lineHeight: 1.23)
 *       - Title (SF Pro, 48px, bold, #121212, letterSpacing: -2, lineHeight: 1.08)
 *       - Author (SF Pro, 12px, normal, #bdbdbd, letterSpacing: 0.4, lineHeight: 1.33)
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
    containerGap: 10,
    cardGap: 8,
    contentGap: 4,
  },
  sizes: {
    imageHeight: 291,
  },
  typography: {
    eyebrow: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.23,
    },
    title: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 48,
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 1.08,
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

// Image Component
interface ImageProps {
  src?: string;
  alt?: string;
  height?: number;
}

function CardImage({ src, alt = '', height = tokens.sizes.imageHeight }: ImageProps) {
  return (
    <div
      style={{
        width: '100%',
        height,
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
          }}
        />
      )}
    </div>
  );
}

// Card Content Component
interface CardContentProps {
  eyebrow?: string;
  title: string;
  author?: string;
}

function CardContent({ eyebrow, title, author }: CardContentProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.contentGap,
        width: '100%',
      }}
    >
      {/* Eyebrow */}
      {eyebrow && (
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
          alignItems: 'center',
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
              letterSpacing: tokens.typography.author.letterSpacing,
              lineHeight: tokens.typography.author.lineHeight,
              color: tokens.colors.textSecondary,
            }}
          >
            {author}
          </span>
        </div>
      )}
    </div>
  );
}

// Main Big Card Component
export interface BigCardProps {
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: number;
  eyebrow?: string;
  title?: string;
  author?: string;
}

export function BigCard({
  imageSrc,
  imageAlt,
  imageHeight = tokens.sizes.imageHeight,
  eyebrow = '{eyebrow}',
  title = 'Big Card Title Goes Here. Will be Two Lines',
  author = '{author}',
}: BigCardProps) {
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
        <CardImage src={imageSrc} alt={imageAlt} height={imageHeight} />
        
        {/* Card Content */}
        <CardContent eyebrow={eyebrow} title={title} author={author} />
      </div>
    </div>
  );
}

// Export tokens for use in other components
export { tokens as bigCardTokens };
