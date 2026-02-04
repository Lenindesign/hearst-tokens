'use client';

import { cn } from '@/lib/utils';

/**
 * FeedBlockSection Component - Migrated to Tailwind CSS
 */

// Image Placeholder Component
function ImagePlaceholder({ height, className }: { height: number; className?: string }) {
  return (
    <div
      className={cn("w-full overflow-hidden flex justify-center items-center", className)}
      style={{ height }}
    >
      <div
        className="w-full h-full bg-neutral-200"
        style={{
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
    <div className="flex flex-col gap-2 bg-neutral-100 w-full overflow-hidden">
      {/* Image */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
      ) : (
        <ImagePlaceholder height={400} />
      )}
      
      {/* Card Content */}
      <div className="flex flex-col gap-1 w-full">
        {/* Eyebrow */}
        <div className="flex items-center justify-center w-full">
          <span className="font-display text-[15px] font-medium tracking-wide leading-tight uppercase text-neutral-900 w-full">
            {eyebrow}
          </span>
        </div>
        
        {/* Title */}
        <div className="flex items-center w-full">
          <span className="font-sans text-[32px] font-bold tracking-tight leading-tight text-neutral-900 w-full">
            {title}
          </span>
        </div>
        
        {/* Author */}
        <div className="flex items-center">
          <span className="font-sans text-[15px] font-normal tracking-wide leading-tight text-neutral-900">
            {author}
          </span>
        </div>
      </div>
    </div>
  );
}

// Small Card Component - Horizontal layout
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
  timestamp = '{timestamp}', 
  author = '{author}',
}: SmallCardProps) {
  return (
    <div className="flex flex-row gap-2 bg-neutral-100 w-full overflow-hidden">
      {/* Image - Left Side (Square) */}
      <div className="w-[120px] h-[120px] shrink-0 overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full bg-neutral-200"
            style={{
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
      
      {/* Card Content - Right Side */}
      <div className="flex flex-col gap-1 flex-1 justify-center">
        {/* Title */}
        <div className="flex items-center w-full">
          <span className="font-sans text-base font-bold leading-tight text-neutral-900 w-full">
            {title}
          </span>
        </div>
        
        {/* Timestamp */}
        <div className="flex items-center">
          <span className="font-sans text-xs font-normal tracking-wide leading-normal text-neutral-900">
            {timestamp}
          </span>
        </div>
        
        {/* Author */}
        <div className="flex items-center w-full">
          <span className="font-sans text-xs font-normal tracking-wide leading-normal text-neutral-900 w-full">
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
  className?: string;
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
  className,
}: FeedBlockSectionProps) {
  return (
    <div className={cn("flex flex-col gap-10 w-full max-w-[1200px]", className)}>
      {/* Section Title - Strap style */}
      <div className="flex flex-col w-full border-b-[5px] border-black pb-2">
        <span className="font-display text-[30px] font-semibold leading-none text-black whitespace-nowrap uppercase">
          {title}
        </span>
      </div>
      
      {/* Content */}
      <div className="flex flex-row gap-6 w-full">
        {/* Big Story */}
        <div className="flex flex-row gap-8 flex-1 justify-between">
          <BigStoryCard
            imageSrc={bigStory.imageSrc}
            eyebrow={bigStory.eyebrow}
            title={bigStory.title}
            author={bigStory.author}
          />
        </div>
        
        {/* Side Column */}
        <div className="flex flex-col gap-6 w-[360px] shrink-0">
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

// Export individual components
export { BigStoryCard, SmallCard };

// Export tokens for backward compatibility
export const feedBlockTokens = {
  colors: {
    text: '#222222',
    textSecondary: '#222222',
    background: '#ffffff',
    imagePlaceholder: '#F5F5F5',
  },
};
