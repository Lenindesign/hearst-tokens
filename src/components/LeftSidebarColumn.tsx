'use client';

/**
 * LeftSidebarColumn Component (Col1)
 * 
 * Migrated to Tailwind CSS with design tokens
 * 
 * Structure:
 * - Frame: Col1 (vertical layout, width: 220px, gap: 4px)
 *   - Section title (28px, bold, tracking-tight)
 *   - Multiple horizontal story cards
 *     - Media thumbnail (80x80 with optional play icon)
 *     - Card content (title + timestamp)
 */

import { cn } from '@/lib/utils';

// Play Icon SVG Component
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 26 26" 
      fill="none" 
      className={cn("w-[26px] h-[26px]", className)}
    >
      <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M10 8L18 13L10 18V8Z" fill="currentColor" />
    </svg>
  );
}

// Media Thumbnail Component
function MediaThumbnail({ 
  imageSrc, 
  showPlayIcon = true,
  className,
}: { 
  imageSrc?: string; 
  showPlayIcon?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-20 h-20 bg-neutral-200 flex items-center justify-center shrink-0 relative overflow-hidden",
        className
      )}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
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
            backgroundSize: '16px 16px',
            backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
          }}
        />
      )}
      {showPlayIcon && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
          <PlayIcon className="text-neutral-900" />
        </div>
      )}
    </div>
  );
}

// Card Content Component
interface CardContentProps {
  title: string;
  timestamp?: string;
}

function CardContent({ title, timestamp }: CardContentProps) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      {/* Title */}
      <span className="font-sans text-base font-bold leading-tight text-neutral-900">
        {title}
      </span>
      
      {/* Timestamp */}
      {timestamp && (
        <span className="font-sans text-2xs font-normal tracking-wide leading-normal text-neutral-900">
          {timestamp}
        </span>
      )}
    </div>
  );
}

// Horizontal Story Card Component
interface HorizontalStoryCardProps {
  title: string;
  timestamp?: string;
  imageSrc?: string;
  showPlayIcon?: boolean;
}

function HorizontalStoryCard({ 
  title, 
  timestamp, 
  imageSrc, 
  showPlayIcon = true 
}: HorizontalStoryCardProps) {
  return (
    <div className="flex flex-row gap-3 bg-neutral-100 w-full">
      {/* Media Thumbnail */}
      <MediaThumbnail imageSrc={imageSrc} showPlayIcon={showPlayIcon} />
      
      {/* Card Base */}
      <div className="flex flex-col gap-2 bg-neutral-100 flex-1 overflow-hidden">
        {/* Card Content */}
        <CardContent title={title} timestamp={timestamp} />
        
        {/* Slot (empty spacer) */}
        <div className="p-2 overflow-hidden" />
      </div>
    </div>
  );
}

// Main Left Sidebar Column Component
export interface LeftSidebarColumnProps {
  title?: string;
  stories?: Array<{
    id: string | number;
    title: string;
    timestamp?: string;
    imageSrc?: string;
    showPlayIcon?: boolean;
  }>;
  className?: string;
}

export function LeftSidebarColumn({ 
  title = '{title}',
  stories = [
    { id: 1, title: "Why Did Valerie Bertinelli Leave 'Kids", timestamp: '{timestamp}', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-santa-cruz-exterior-113-66042095b2fac.jpg?crop=0.748xw:0.686xh;0.0901xw,0.255xh&resize=980:*' },
    { id: 2, title: "Why Did Valerie Bertinelli Leave 'Kids", timestamp: '{timestamp}', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-117-6787c5548e855.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*' },
    { id: 3, title: "Why Did Valerie Bertinelli Leave 'Kids", timestamp: '{timestamp}' },
    { id: 4, title: "Why Did Valerie Bertinelli Leave 'Kids", timestamp: '{timestamp}' },
    { id: 5, title: "Hyundai Planning to Drop Santa Cruz Pickup", timestamp: '3 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-santa-cruz-exterior-113-66042095b2fac.jpg?crop=0.748xw:0.686xh;0.0901xw,0.255xh&resize=980:*', showPlayIcon: false },
    { id: 6, title: "Hameedi Venturo's Project Origine Will Have a V-12", timestamp: '6 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-117-6787c5548e855.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*', showPlayIcon: false },
    { id: 7, title: "Refreshed S-Class Has Stars in It's Eyes", timestamp: '1 day ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-exterior-pr-111-697927a180999.jpg?crop=0.847xw:0.714xh;0.153xw,0.253xh&resize=1800:*', showPlayIcon: false },
  ],
  className,
}: LeftSidebarColumnProps) {
  return (
    <div className={cn("flex flex-col gap-1 w-[220px]", className)}>
      {/* Section Title */}
      <span className="font-sans text-3xl font-bold tracking-tight leading-tight text-neutral-900">
        {title}
      </span>
      
      {/* Story Cards */}
      {stories.map((story) => (
        <HorizontalStoryCard
          key={story.id}
          title={story.title}
          timestamp={story.timestamp}
          imageSrc={story.imageSrc}
          showPlayIcon={story.showPlayIcon !== false}
        />
      ))}
    </div>
  );
}
