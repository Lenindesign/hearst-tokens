'use client';

import { cn } from '@/lib/utils';

/**
 * RightSidebarColumn Component - Migrated to Tailwind CSS
 */

// Image placeholder with optional play icon
function ImagePlaceholder({ showPlayIcon = false, className }: { showPlayIcon?: boolean; className?: string }) {
  return (
    <div className={cn("relative shrink-0", className)}>
      <div
        className="w-full h-full bg-neutral-200"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #d5d5d5 25%, transparent 25%),
            linear-gradient(-45deg, #d5d5d5 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #d5d5d5 75%),
            linear-gradient(-45deg, transparent 75%, #d5d5d5 75%)
          `,
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
        }}
      />
      {showPlayIcon && (
        <div className="absolute bottom-1 left-1 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md pl-0.5">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M0 0L12 7L0 14V0Z" fill="#000000" />
          </svg>
        </div>
      )}
    </div>
  );
}

// Story Card Supporting Feature Component
interface SupportingFeatureCardProps {
  sectionLabel?: string;
  title: string;
  dek?: string;
  author?: string;
  imageSrc?: string;
  showPlayIcon?: boolean;
}

function SupportingFeatureCard({ 
  sectionLabel = 'ESSENTIAL READS',
  title,
  dek,
  author,
  imageSrc,
  showPlayIcon = false,
}: SupportingFeatureCardProps) {
  return (
    <div className="flex flex-col gap-4 w-[300px]">
      {/* Top border line */}
      <div className="w-full h-0 border-t border-neutral-900" />
      
      {/* Story section */}
      <div className="flex flex-col gap-3 w-full">
        {/* Section Label and Headline */}
        <div className="flex flex-col gap-2 w-full">
          {/* Section Label */}
          <div className="flex items-center justify-center w-full">
            <span className="font-display text-base font-medium leading-none text-brand-blue w-full uppercase">
              {sectionLabel}
            </span>
          </div>
          
          {/* Title */}
          <div className="flex items-center justify-center pb-1 w-full">
            <span className="font-sans text-xl font-bold leading-tight text-neutral-900 w-full">
              {title}
            </span>
          </div>
        </div>
        
        {/* Image + Dek section */}
        <div className="flex flex-row gap-5 w-full">
          {/* Text column (Dek + Author) */}
          <div className="flex flex-col gap-5 flex-1 justify-center">
            {/* Dek */}
            {dek && (
              <span className="font-sans text-base font-normal leading-normal text-neutral-900">
                {dek}
              </span>
            )}
            
            {/* Author */}
            {author && (
              <div className="flex items-center">
                <span className="font-sans text-xs font-medium leading-normal text-neutral-900">
                  {author}
                </span>
              </div>
            )}
          </div>
          
          {/* Image */}
          {imageSrc ? (
            <div className="w-[120px] h-[120px] min-w-[120px] relative shrink-0">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
              {showPlayIcon && (
                <div className="absolute bottom-1 left-1 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md pl-0.5">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M0 0L12 7L0 14V0Z" fill="#000000" />
                  </svg>
                </div>
              )}
            </div>
          ) : (
            <ImagePlaceholder showPlayIcon={showPlayIcon} className="w-[120px] h-[120px] min-w-[120px]" />
          )}
        </div>
      </div>
    </div>
  );
}

// Main Right Sidebar Column Component
export interface RightSidebarColumnProps {
  cards?: Array<{
    id: string | number;
    sectionLabel?: string;
    title: string;
    dek?: string;
    author?: string;
    imageSrc?: string;
    showPlayIcon?: boolean;
  }>;
  className?: string;
}

export function RightSidebarColumn({ 
  cards = [
    { 
      id: 1, 
      sectionLabel: 'ESSENTIAL READS',
      title: "Mercedes Design Boss Gorden Wagener Picks His Faves",
      dek: "Retiring after 30 years Wagener chooses his favorite Benz creations.",
      author: 'By Brett Berk',
      imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-acura-integra-101-6936dee00fb9b.jpg?crop=1.00xw:0.845xh;0,0.0845xh',
    },
    { 
      id: 2, 
      sectionLabel: 'ESSENTIAL READS',
      title: "An F1 Fan's First Daytona 24 Hours",
      dek: "A lifelong F1 fan attends his first 24-hour endurance race.",
      author: 'By Samantha MacAvoy',
      showPlayIcon: true,
    },
    { 
      id: 3, 
      sectionLabel: 'ESSENTIAL READS',
      title: "Every New Car You Can Still Buy with a Stick Shift",
      dek: "The cars on this list keep the #SaveTheManuals mission alive.",
      author: 'By Greg S. Fink and Joey Capparella',
    },
  ],
  className,
}: RightSidebarColumnProps) {
  return (
    <div className={cn("flex flex-col gap-6 w-[300px]", className)}>
      {cards.map((card) => (
        <SupportingFeatureCard
          key={card.id}
          sectionLabel={card.sectionLabel}
          title={card.title}
          dek={card.dek}
          author={card.author}
          imageSrc={card.imageSrc}
          showPlayIcon={card.showPlayIcon}
        />
      ))}
    </div>
  );
}

// Export individual components
export { SupportingFeatureCard };
