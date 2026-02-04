'use client';

import { cn } from '@/lib/utils';

/**
 * FourAcrossGrid Component - Migrated to Tailwind CSS
 */

// Image Placeholder Component
function ImagePlaceholder({ height }: { height: number }) {
  return (
    <div
      className="w-full overflow-hidden flex justify-center items-center"
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
    <div className="flex flex-col gap-2 bg-neutral-100 w-full overflow-hidden">
      {/* Image */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[260px] object-cover"
        />
      ) : (
        <ImagePlaceholder height={260} />
      )}
      
      {/* Card Content */}
      <div className="flex flex-col gap-1 w-full">
        {/* Title */}
        <div className="flex items-center">
          <span className="font-sans text-xl font-bold tracking-wide leading-tight text-neutral-900">
            {title}
          </span>
        </div>
        
        {/* Author */}
        <div className="flex items-center">
          <span className="font-sans text-xs font-normal tracking-wide leading-normal text-neutral-900">
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
  className?: string;
}

export function FourAcrossGrid({
  title = 'H2 Headline',
  cards = [
    { id: 1, title: '{title}', author: '{author}' },
    { id: 2, title: '{title}', author: '{author}' },
    { id: 3, title: '{title}', author: '{author}' },
    { id: 4, title: '{title}', author: '{author}' },
  ],
  className,
}: FourAcrossGridProps) {
  return (
    <div className={cn("flex flex-col justify-center gap-10 w-full max-w-[1200px]", className)}>
      {/* Section Title - Strap style */}
      <div className="flex flex-col w-full border-b-[5px] border-black pb-2">
        <span className="font-display text-[30px] font-semibold leading-none text-black whitespace-nowrap uppercase">
          {title}
        </span>
      </div>
      
      {/* Content - 4 Across Grid */}
      <div className="flex flex-row items-start gap-6 w-full">
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

// Export individual components
export { GridCard };

// Export tokens for backward compatibility
export const fourAcrossGridTokens = {
  colors: {
    text: '#222222',
    textSecondary: '#222222',
    background: '#ffffff',
    buttonBg: '#222222',
    buttonText: '#ffffff',
    imagePlaceholder: '#F5F5F5',
  },
};
