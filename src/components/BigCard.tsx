'use client';

import { cn } from '@/lib/utils';

/**
 * BigCard Component - Migrated to Tailwind CSS
 */

// Image with Section Label overlay
interface ImageWithLabelProps {
  src?: string;
  alt?: string;
  sectionLabel?: string;
}

function ImageWithLabel({ src, alt = '', sectionLabel }: ImageWithLabelProps) {
  return (
    <div className="relative w-full">
      {/* Image */}
      <div className="w-full h-[457px] overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={alt}
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
      
      {/* Section Label */}
      {sectionLabel && (
        <div className="absolute bottom-0 left-0 inline-flex items-center p-2 bg-accent">
          <span className="font-display text-base font-medium tracking-wide leading-none text-neutral-900 uppercase">
            {sectionLabel}
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
  eyebrow?: string;
  title?: string;
  description?: string;
  author?: string;
  showDescription?: boolean;
  className?: string;
}

export function BigCard({
  imageSrc,
  imageAlt,
  eyebrow = 'FEATURED',
  title = '2026 Pilot Does Just Enough to Stay Afloat',
  description = "The upgraded Pilot's extra equipment and freshened look help it remain a solid, if unexciting, choice in this competitive segment.",
  author = 'Reviewed By Joey Capparella',
  showDescription = true,
  className,
}: BigCardProps) {
  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      {/* Image with Section Label */}
      <ImageWithLabel 
        src={imageSrc} 
        alt={imageAlt} 
        sectionLabel={eyebrow} 
      />
      
      {/* Text Section */}
      <div className="flex flex-col gap-2 w-full">
        {/* Title */}
        <div className="flex items-center justify-center pb-1">
          <span className="font-sans text-5xl font-extrabold leading-none text-neutral-900 w-full">
            {title}
          </span>
        </div>
        
        {/* Dek and Byline Section */}
        <div className="flex flex-col gap-4 w-full">
          {/* Description/Dek */}
          {showDescription && description && (
            <div className="flex items-center justify-center">
              <span className="font-sans text-[22px] font-normal leading-relaxed text-neutral-900 w-full">
                {description}
              </span>
            </div>
          )}
          
          {/* Author */}
          {author && (
            <div className="flex items-center gap-2 h-4">
              {/* Verified icon */}
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <span className="font-sans text-xs font-medium leading-normal text-neutral-900">
                {author}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
