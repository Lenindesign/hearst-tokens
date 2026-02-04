'use client';

import { cn } from '@/lib/utils';

/**
 * LatestNewsSidebar Component - Migrated to Tailwind CSS
 */

// Image Placeholder Component
function ImagePlaceholder({ showPlayIcon = false, className }: { showPlayIcon?: boolean; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden shrink-0", className)}>
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
        <div className="sidebar-play-icon absolute bg-white/90 flex items-center justify-center shadow-md pl-0.5">
          <svg className="sidebar-play-svg" viewBox="0 0 12 14" fill="none">
            <path d="M0 0L12 7L0 14V0Z" fill="#000000" />
          </svg>
        </div>
      )}
    </div>
  );
}

// Story Card Component
interface StoryCardProps {
  imageSrc?: string;
  title: string;
  timestamp: string;
  showPlayIcon?: boolean;
}

function StoryCard({ imageSrc, title, timestamp, showPlayIcon = false }: StoryCardProps) {
  return (
    <div className="sidebar-story-card flex flex-row items-start w-full">
      {/* Image */}
      {imageSrc ? (
        <div className="sidebar-story-image relative shrink-0">
          <img
            src={imageSrc}
            alt={title}
            className="sidebar-story-img object-cover"
          />
          {showPlayIcon && (
            <div className="sidebar-play-icon absolute bg-white/90 flex items-center justify-center shadow-md pl-0.5">
              <svg className="sidebar-play-svg" viewBox="0 0 12 14" fill="none">
                <path d="M0 0L12 7L0 14V0Z" fill="#000000" />
              </svg>
            </div>
          )}
        </div>
      ) : (
        <ImagePlaceholder showPlayIcon={showPlayIcon} className="sidebar-story-image w-20 h-20 min-w-[80px]" />
      )}

      {/* Text Content */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        {/* Title */}
        <span
          className="sidebar-story-title font-sans font-bold tracking-[0.01em] leading-tight text-neutral-900 line-clamp-4"
        >
          {title}
        </span>

        {/* Timestamp */}
        <span className="sidebar-story-timestamp font-sans font-normal leading-normal text-neutral-900">
          {timestamp}
        </span>
      </div>
    </div>
  );
}

// Main LatestNewsSidebar Component
export interface LatestNewsSidebarProps {
  title?: string;
  stories?: Array<{
    id: string | number;
    imageSrc?: string;
    title: string;
    timestamp: string;
    showPlayIcon?: boolean;
  }>;
  className?: string;
}

export function LatestNewsSidebar({
  title = 'Latest News',
  stories = [
    { id: 1, title: 'Tesla Will Kill the Model S and Model X This Year', timestamp: '19 mins ago' },
    { id: 2, title: 'Genesis Has Sold Some Copies of This Wild Concept', timestamp: '1 hr ago' },
    { id: 3, title: '2026 Ineos Grenadier Gets a Black Edition', timestamp: '1 hr ago', showPlayIcon: true },
    { id: 4, title: "Cadillac CT5-V Blackwing's New Package Costs $27K", timestamp: '2 hrs ago' },
    { id: 5, title: 'Hyundai Planning to Drop Santa Cruz Pickup', timestamp: '3 hrs ago', showPlayIcon: true },
    { id: 6, title: "Hameedi Venturo's Project Origine Will Have a V-12", timestamp: '6 hrs ago', showPlayIcon: true },
    { id: 7, title: "Refreshed S-Class Has Stars in It's Eyes", timestamp: '1 day ago' },
  ],
  className,
}: LatestNewsSidebarProps) {
  return (
    <div className={cn("latest-news-sidebar flex flex-col", className)}>
      {/* Strap Header */}
      <div className="flex flex-col w-full border-b-[5px] border-black pb-2">
        <span className="font-display text-2xl font-semibold leading-none text-black whitespace-nowrap uppercase">
          {title}
        </span>
      </div>

      {/* Story Cards */}
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          imageSrc={story.imageSrc}
          title={story.title}
          timestamp={story.timestamp}
          showPlayIcon={story.showPlayIcon}
        />
      ))}
    </div>
  );
}

export default LatestNewsSidebar;
