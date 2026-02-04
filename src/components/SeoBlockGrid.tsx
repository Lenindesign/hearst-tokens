'use client';

import { cn } from '@/lib/utils';

/**
 * SeoBlockGrid Component - Migrated to Tailwind CSS
 */

// Card Image Component
interface CardImageProps {
  src?: string;
  alt?: string;
}

function CardImage({ src, alt = '' }: CardImageProps) {
  return (
    <div className="w-full h-[180px] overflow-hidden flex justify-center items-center bg-neutral-200">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className="w-full h-full"
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
  );
}

// SEO Block Card Component
interface SeoBlockCardProps {
  imageSrc?: string;
  title: string;
}

function SeoBlockCard({ imageSrc, title }: SeoBlockCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-neutral-100 overflow-hidden flex-1 min-w-0">
      {/* Image */}
      <CardImage src={imageSrc} alt={title} />
      
      {/* Card Content */}
      <div className="flex flex-col gap-1 w-full">
        {/* Title */}
        <div className="flex items-start w-full">
          <span className="font-sans text-xl font-bold tracking-tight leading-tight text-neutral-900 w-full text-left">
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
  className?: string;
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
  className,
}: SeoBlockGridProps) {
  return (
    <div className={cn("flex flex-col gap-9 w-full max-w-[1200px]", className)}>
      {/* Section Title - Strap style */}
      <div className="flex flex-col w-full border-b-[5px] border-black pb-2">
        <span className="font-display text-[30px] font-semibold leading-none text-black whitespace-nowrap uppercase">
          {title}
        </span>
      </div>

      {/* Card Grid - 4 columns */}
      <div className="grid grid-cols-4 gap-6 w-full">
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
