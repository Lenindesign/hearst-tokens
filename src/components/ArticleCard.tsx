'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface ArticleCardProps {
  /** Article title */
  title: string;
  /** Short description or excerpt */
  excerpt: string;
  /** Category label */
  category: string;
  /** Hero image URL */
  imageUrl: string;
  /** Author name */
  author: string;
  /** Author avatar URL (optional) */
  authorAvatar?: string;
  /** Publication date */
  date: string;
  /** Reading time (optional) */
  readTime?: string;
  /** Link to full article */
  href?: string;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for the Read More button */
  onReadMore?: () => void;
}

/**
 * ArticleCard - A composite component demonstrating shadcn/ui primitives
 * with Hearst design tokens for multi-brand theming.
 * 
 * This component automatically adapts to the active brand theme via CSS variables.
 */
export function ArticleCard({
  title,
  excerpt,
  category,
  imageUrl,
  author,
  authorAvatar,
  date,
  readTime,
  href = '#',
  className,
  onReadMore,
}: ArticleCardProps) {
  return (
    <Card className={cn('overflow-hidden flex flex-col h-full', className)}>
      {/* Hero Image */}
      <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Category Badge - positioned over image */}
        <div className="absolute top-3 left-3">
          <Badge>{category}</Badge>
        </div>
      </div>

      <CardContent className="flex flex-col flex-1 p-5">
        {/* Title - fixed height for 2 lines */}
        <h3 
          className="text-lg font-bold leading-tight mb-2 line-clamp-2 min-h-[3.5rem]"
          style={{ 
            color: 'var(--card-foreground)',
            fontFamily: 'var(--font-display, inherit)',
          }}
        >
          {title}
        </h3>

        {/* Excerpt - fixed height for 3 lines */}
        <p 
          className="text-sm mb-4 line-clamp-3 min-h-[3.75rem]"
          style={{ color: 'var(--muted-foreground)' }}
        >
          {excerpt}
        </p>

        {/* Spacer to push author and button to bottom */}
        <div className="flex-1" />

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          {/* Avatar */}
          <div 
            className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
            style={{ backgroundColor: 'var(--muted)' }}
          >
            {authorAvatar ? (
              <Image
                src={authorAvatar}
                alt={author}
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            ) : (
              <div 
                className="w-full h-full flex items-center justify-center text-xs font-semibold"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                {author.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
            )}
          </div>
          
          {/* Author Name & Date */}
          <div className="flex flex-col min-w-0">
            <span 
              className="text-sm font-medium truncate"
              style={{ color: 'var(--card-foreground)' }}
            >
              {author}
            </span>
            <span 
              className="text-xs"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {date}
              {readTime && ` · ${readTime}`}
            </span>
          </div>
        </div>

        {/* Read More Button */}
        <Button 
          variant="default" 
          className="w-full mt-auto"
          onClick={onReadMore}
          asChild={!!href && href !== '#'}
        >
          {href && href !== '#' ? (
            <a href={href}>Read More</a>
          ) : (
            <span>Read More</span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
