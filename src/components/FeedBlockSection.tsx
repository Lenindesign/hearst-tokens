'use client';

/**
 * FeedBlockSection Component
 * 
 * Based on Pencil design node: EWnG9
 * 
 * Structure:
 * - Frame: Feed block (vertical layout, width: 960px, gap: 40px)
 *   - Card/Core/Content/Title: H2 Headline (SF Pro, 64px, bold, #121212, letterSpacing: -2, lineHeight: 1.125)
 *   - content (horizontal layout, gap: 24px, width: fill_container)
 *     - big story (horizontal layout, gap: 32px, width: fill_container)
 *       - Card/Base (vertical, gap: 8px, white bg, width: fill_container)
 *         - Image (height: 344.8125px)
 *         - Card/Core/Content (vertical, gap: 4px)
 *           - Eyebrow (SF Pro, 15px, normal, #121212, letterSpacing: 0.2, lineHeight: 1.07)
 *           - Title (SF Pro, 32px, bold, #121212, letterSpacing: -1, lineHeight: 1.125)
 *           - Author (SF Pro, 15px, normal, #bdbdbd, letterSpacing: 0.2, lineHeight: 1.07)
 *     - column (vertical layout, gap: 24px, width: 323px)
 *       - 4x Card/Base (vertical, gap: 8px, white bg)
 *         - Image (height: 157.5px)
 *         - Card/Core/Content (vertical, gap: 4px)
 *           - Eyebrow (SF Pro, 13px, normal, #121212, letterSpacing: 0.4, lineHeight: 1.23)
 *           - Title (SF Pro, 16px, bold, #121212, lineHeight: 1.25)
 *           - Subtitle (SF Pro, 14px, normal, #121212, letterSpacing: 0.4, lineHeight: 1.14)
 *           - Timestamp (SF Pro, 12px, normal, #121212, letterSpacing: 0.4, lineHeight: 1.33)
 *           - Author (SF Pro, 12px, normal, #bdbdbd, letterSpacing: 0.4, lineHeight: 1.33)
 */

// Design tokens from Pencil - using official Car and Driver brand colors
const tokens = {
  colors: {
    text: '#222222',           // Dark Grey - official C&D primary
    textSecondary: '#A59143',  // Dark Gold - official C&D secondary
    background: '#ffffff',     // White
    imagePlaceholder: '#F5F5F5', // Light Grey - official C&D
  },
  spacing: {
    sectionGap: 40,
    contentGap: 24,
    bigStoryGap: 32,
    columnGap: 24,
    cardGap: 8,
    contentInnerGap: 4,
  },
  sizes: {
    sectionWidth: 1200,
    columnWidth: 360,
    bigImageHeight: 400,
    smallImageSize: 120, // Square image for sidebar cards
  },
  typography: {
    sectionTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 64,
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 1.125,
    },
    bigStoryEyebrow: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: 0.2,
      lineHeight: 1.07,
    },
    bigStoryTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: -1,
      lineHeight: 1.125,
    },
    bigStoryAuthor: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: 0.2,
      lineHeight: 1.07,
    },
    smallCardEyebrow: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.23,
    },
    smallCardTitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.25,
    },
    smallCardSubtitle: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.14,
    },
    smallCardTimestamp: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.33,
    },
    smallCardAuthor: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.33,
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

// Big Story Card Component
interface BigStoryCardProps {
  imageSrc?: string;
  eyebrow?: string;
  title: string;
  author?: string;
}

function BigStoryCard({ 
  imageSrc, 
  eyebrow = '{eyebrow}', 
  title, 
  author = '{author}' 
}: BigStoryCardProps) {
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
            height: tokens.sizes.bigImageHeight,
            objectFit: 'cover',
          }}
        />
      ) : (
        <ImagePlaceholder height={tokens.sizes.bigImageHeight} />
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
        {/* Eyebrow */}
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
              fontFamily: tokens.typography.bigStoryEyebrow.fontFamily,
              fontSize: tokens.typography.bigStoryEyebrow.fontSize,
              fontWeight: tokens.typography.bigStoryEyebrow.fontWeight,
              letterSpacing: tokens.typography.bigStoryEyebrow.letterSpacing,
              lineHeight: tokens.typography.bigStoryEyebrow.lineHeight,
              color: tokens.colors.text,
              width: '100%',
            }}
          >
            {eyebrow}
          </span>
        </div>
        
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
              fontFamily: tokens.typography.bigStoryTitle.fontFamily,
              fontSize: tokens.typography.bigStoryTitle.fontSize,
              fontWeight: tokens.typography.bigStoryTitle.fontWeight,
              letterSpacing: tokens.typography.bigStoryTitle.letterSpacing,
              lineHeight: tokens.typography.bigStoryTitle.lineHeight,
              color: tokens.colors.text,
              width: '100%',
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
              fontFamily: tokens.typography.bigStoryAuthor.fontFamily,
              fontSize: tokens.typography.bigStoryAuthor.fontSize,
              fontWeight: tokens.typography.bigStoryAuthor.fontWeight,
              letterSpacing: tokens.typography.bigStoryAuthor.letterSpacing,
              lineHeight: tokens.typography.bigStoryAuthor.lineHeight,
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

// Small Card Component - Horizontal layout (image left, content right)
interface SmallCardProps {
  imageSrc?: string;
  title: string;
  subtitle?: string;
  description?: string;
  timestamp?: string;
  author?: string;
  showDescription?: boolean;
}

function SmallCard({ 
  imageSrc, 
  title, 
  subtitle = '{subtitle}',
  description = '{description}',
  timestamp = '{timestamp}', 
  author = '{author}',
  showDescription = false,
}: SmallCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: tokens.spacing.cardGap,
        backgroundColor: tokens.colors.background,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Image - Left Side (Square) */}
      <div
        style={{
          width: tokens.sizes.smallImageSize,
          height: tokens.sizes.smallImageSize,
          flexShrink: 0,
          overflow: 'hidden',
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
      
      {/* Card Content - Right Side */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.contentInnerGap,
          flex: 1,
          justifyContent: 'center',
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
              fontFamily: tokens.typography.smallCardTitle.fontFamily,
              fontSize: tokens.typography.smallCardTitle.fontSize,
              fontWeight: tokens.typography.smallCardTitle.fontWeight,
              letterSpacing: tokens.typography.smallCardTitle.letterSpacing,
              lineHeight: tokens.typography.smallCardTitle.lineHeight,
              color: tokens.colors.text,
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
              fontFamily: tokens.typography.smallCardTimestamp.fontFamily,
              fontSize: tokens.typography.smallCardTimestamp.fontSize,
              fontWeight: tokens.typography.smallCardTimestamp.fontWeight,
              letterSpacing: tokens.typography.smallCardTimestamp.letterSpacing,
              lineHeight: tokens.typography.smallCardTimestamp.lineHeight,
              color: tokens.colors.text,
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
            width: '100%',
          }}
        >
          <span
            style={{
              fontFamily: tokens.typography.smallCardAuthor.fontFamily,
              fontSize: tokens.typography.smallCardAuthor.fontSize,
              fontWeight: tokens.typography.smallCardAuthor.fontWeight,
              letterSpacing: tokens.typography.smallCardAuthor.letterSpacing,
              lineHeight: tokens.typography.smallCardAuthor.lineHeight,
              color: tokens.colors.textSecondary,
              width: '100%',
            }}
          >
            {author}
          </span>
        </div>
      </div>
    </div>
  );
}

// Main Feed Block Section Component
export interface FeedBlockSectionProps {
  title?: string;
  bigStory?: {
    imageSrc?: string;
    eyebrow?: string;
    title: string;
    author?: string;
  };
  sideCards?: Array<{
    id: string | number;
    imageSrc?: string;
    title: string;
    subtitle?: string;
    description?: string;
    timestamp?: string;
    author?: string;
    showDescription?: boolean;
  }>;
}

export function FeedBlockSection({
  title = 'H2 Headline',
  bigStory = {
    eyebrow: '{eyebrow}',
    title: 'Big Card Title Goes Here. Will be Two Lines. Big Card Title Goes Here. Will be Two Lines.',
    author: '{author}',
  },
  sideCards = [
    { id: 1, title: 'Big Card Title Goes Here. Will be Three Lines', subtitle: '{subtitle}', description: '{description}', timestamp: '{timestamp}', author: '{author}', showDescription: true },
    { id: 2, title: 'Big Card Title Goes Here. Will be Three Lines', subtitle: '{subtitle}', timestamp: '{timestamp}', author: '{author}', showDescription: false },
    { id: 3, title: 'Big Card Title Goes Here. Will be Three Lines', subtitle: '{subtitle}', timestamp: '{timestamp}', author: '{author}', showDescription: false },
    { id: 4, title: 'Big Card Title Goes Here. Will be Three Lines', subtitle: '{subtitle}', timestamp: '{timestamp}', author: '{author}', showDescription: false },
  ],
}: FeedBlockSectionProps) {
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
      
      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: tokens.spacing.contentGap,
          width: '100%',
        }}
      >
        {/* Big Story */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: tokens.spacing.bigStoryGap,
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <BigStoryCard
            imageSrc={bigStory.imageSrc}
            eyebrow={bigStory.eyebrow}
            title={bigStory.title}
            author={bigStory.author}
          />
        </div>
        
        {/* Side Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing.columnGap,
            width: tokens.sizes.columnWidth,
            flexShrink: 0,
          }}
        >
          {sideCards.map((card) => (
            <SmallCard
              key={card.id}
              imageSrc={card.imageSrc}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              timestamp={card.timestamp}
              author={card.author}
              showDescription={card.showDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Export individual components and tokens
export { BigStoryCard, SmallCard, tokens as feedBlockTokens };
