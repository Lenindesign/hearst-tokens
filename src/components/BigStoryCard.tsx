'use client';

import { cn } from '@/lib/utils';

/**
 * BigStoryCard Component - Migrated to Tailwind CSS
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

// Main BigStoryCard Component
export interface BigStoryCardProps {
  imageSrc?: string;
  eyebrow?: string;
  title?: string;
  author?: string;
  showEyebrow?: boolean;
  showAuthor?: boolean;
  className?: string;
}

export function BigStoryCard({
  imageSrc,
  eyebrow = '{eyebrow}',
  title = 'Big Card Title Goes Here. Will be Two Lines. Big Card Title Goes Here.',
  author = '{author}',
  showEyebrow = true,
  showAuthor = true,
  className,
}: BigStoryCardProps) {
  return (
    <div className={cn("flex flex-row gap-8 w-full", className)}>
      {/* Card/Base */}
      <div className="flex flex-col gap-2 bg-neutral-100 w-full overflow-hidden">
        {/* Image */}
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-[540px] object-cover"
          />
        ) : (
          <ImagePlaceholder height={540} />
        )}
        
        {/* Card/Core/Content */}
        <div className="flex flex-col gap-1 w-full">
          {/* Eyebrow */}
          {showEyebrow && (
            <div className="flex flex-col w-full">
              <span className="font-display text-sm font-medium tracking-wide leading-tight uppercase text-neutral-900 w-full">
                {eyebrow}
              </span>
            </div>
          )}
          
          {/* Title */}
          <div className="flex w-full">
            <span className="font-sans text-5xl font-bold tracking-tight leading-tight text-neutral-900 w-full">
              {title}
            </span>
          </div>
          
          {/* Author */}
          {showAuthor && (
            <div className="flex w-full">
              <span className="font-sans text-sm font-normal tracking-wide leading-tight text-neutral-900 w-full">
                {author}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
