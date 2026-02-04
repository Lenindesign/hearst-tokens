'use client';

import { cn } from '@/lib/utils';

/**
 * TrendingSection Component - Migrated to Tailwind CSS
 */

// Circle Badge Component
function CircleBadge({ number }: { number: number }) {
  return (
    <div className="absolute -top-2 -left-2 flex items-center justify-center w-8 h-8 bg-brand-blue border-2 border-white rounded-full">
      <span className="font-sans text-base font-extrabold tracking-tight leading-none text-white text-center">
        {number}
      </span>
    </div>
  );
}

// Story Card Trending Component
export interface StoryCardTrendingProps {
  imageSrc?: string;
  title: string;
  badgeNumber: number;
  showPlayIcon?: boolean;
}

export function StoryCardTrending({ 
  imageSrc, 
  title, 
  badgeNumber,
  showPlayIcon = false,
}: StoryCardTrendingProps) {
  return (
    <div className="flex flex-col items-stretch gap-2 flex-1 min-w-0">
      {/* Image Group with Badge */}
      <div className="relative w-full aspect-square">
        {/* Image */}
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
              backgroundSize: '12px 12px',
              backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
            }} 
          />
        )}
        
        {/* Play Icon (optional) */}
        {showPlayIcon && (
          <div className="absolute bottom-1 left-1 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center shadow-md pl-0.5">
            <svg width="10" height="12" viewBox="0 0 12 14" fill="none">
              <path d="M0 0L12 7L0 14V0Z" fill="#198294" />
            </svg>
          </div>
        )}
        
        {/* Circle Badge */}
        <CircleBadge number={badgeNumber} />
      </div>
      
      {/* Head and Dek Section */}
      <div className="flex flex-col justify-between gap-2 w-full min-h-[70px] pl-1 border-b border-neutral-300">
        {/* Headline */}
        <div className="flex flex-col gap-1 w-full">
          {/* Title */}
          <span className="font-sans text-base font-bold leading-tight text-neutral-900 w-full overflow-hidden line-clamp-3">
            {title}
          </span>
        </div>
        
        {/* Comments and Time to Read Row */}
        <div className="flex flex-row gap-3 w-full pb-1.5">
          {/* Comments */}
          <div className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 3C1 1.89543 1.89543 1 3 1H11C12.1046 1 13 1.89543 13 3V8C13 9.10457 12.1046 10 11 10H8L5 13V10H3C1.89543 10 1 9.10457 1 8V3Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-sans text-[10px] font-normal leading-normal text-neutral-900">
              12
            </span>
          </div>
          
          {/* Time to Read */}
          <div className="flex items-center gap-1 flex-1">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#666666" strokeWidth="1.5"/>
              <path d="M7 4V7L9 9" stroke="#666666" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="font-sans text-[10px] font-normal leading-normal text-neutral-900">
              3 min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Trending Card Data Interface
export interface TrendingCardData {
  id: string | number;
  imageSrc?: string;
  title: string;
  showPlayIcon?: boolean;
}

// Main TrendingSection Component
export interface TrendingSectionProps {
  title?: string;
  cards?: TrendingCardData[];
  className?: string;
}

export function TrendingSection({ 
  title = 'TRENDING',
  cards = [
    { id: 1, title: "2026 Explorer Tremor Drive: Big Power, Big Bucks" },
    { id: 2, title: "The Winningest Cars in 10Best History" },
    { id: 3, title: "View Interior Photos of the 2027 Mercedes S-Class" },
    { id: 4, title: "Ezra Dyer: The Altima Secretly Thirsts for Mayhem" },
    { id: 5, title: "Revealed! 591-HP Donkervoort P24 RS Is Super Light" },
  ],
  className,
}: TrendingSectionProps) {
  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      {/* Strap (Header) */}
      <div className="flex flex-col w-full border-b-[5px] border-black pb-2">
        <span className="font-display text-[30px] font-semibold leading-none text-black whitespace-nowrap uppercase">
          {title}
        </span>
      </div>
      
      {/* Trending Cards Row */}
      <div className="flex flex-row gap-3 justify-between w-full">
        {cards.map((card, index) => (
          <StoryCardTrending
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            badgeNumber={index + 1}
            showPlayIcon={card.showPlayIcon}
          />
        ))}
      </div>
    </div>
  );
}

// Export tokens for backward compatibility
export const trendingSectionTokens = {
  colors: {
    text: '#222222',
    textSecondary: '#222222',
    background: '#ffffff',
    strapBorder: '#1B5F8A',
    badgeBg: '#ffffff',
    badgeBorder: '#222222',
    imagePlaceholder: '#F5F5F5',
  },
};
