'use client';

import { LeftSidebarColumn } from './LeftSidebarColumn';
import { BigCard } from './BigCard';
import { RightSidebarColumn } from './RightSidebarColumn';
import { SecondLeftSection } from './SecondLeftSection';
import { FeedBlockSection } from './FeedBlockSection';
import { FourAcrossGrid } from './FourAcrossGrid';
import { BigStoryCard } from './BigStoryCard';
import { Footer } from './Footer';
import { MainNavigation } from './MainNavigation';

/**
 * Car and Driver Homepage Component
 * 
 * Design Tokens Used:
 * - Brand Colors: #8dafc5, #b1b1b1, #444444, #e2e2e2, #eaeaea, #6abd45, #6f6f6f, #00a4db, #1c5f8b, #f1f7f7, #dbca8b, #607d8b, #dae2e5, #aaaaaa
 * - Breakpoints: sm: 320px, md: 768px, lg: 1024px, xl: 1440px, 2xl: 1600px
 * - Layout: 4xs: 128px, 3xs: 192px, 2xs: 224px, xs: 256px, sm: 320px, md: 384px, lg: 512px, xl: 768px, 2xl: 1024px, 3xl: 1280px, 4xl: 1600px
 * - Spacing: none: 0, 3xs: 2px, 2xs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, 2xl: 32px, 3xl: 48px, 4xl: 64px
 * - Font: SF Pro (mac-default)
 */

// Car and Driver Design Tokens
const tokens = {
  colors: {
    brand1: '#8dafc5',  // Light blue
    brand2: '#b1b1b1',  // Gray
    brand3: '#444444',  // Dark gray
    brand4: '#e2e2e2',  // Light gray
    brand5: '#eaeaea',  // Very light gray
    brand6: '#6abd45',  // Green
    brand7: '#6f6f6f',  // Medium gray
    brand8: '#00a4db',  // Cyan/Blue
    brand9: '#1c5f8b',  // Dark blue
    brand10: '#f1f7f7', // Off-white
    brand11: '#dbca8b', // Gold/Tan
    brand12: '#607d8b', // Blue-gray
    brand13: '#dae2e5', // Light blue-gray
    brand14: '#aaaaaa', // Gray
    // Neutral palette from primitives
    gray7: '#121212',
    gray11: '#1c1c1c',
    gray16: '#292929',
    gray23: '#3b3b3b',
    gray34: '#575757',
    gray46: '#757575',
    gray58: '#949494',
    gray74: '#bdbdbd',
    gray84: '#d6d6d6',
    gray93: '#ededed',
    gray96: '#f5f5f5',
    gray100: '#ffffff',
  },
  breakpoints: {
    sm: 320,
    md: 768,
    lg: 1024,
    xl: 1440,
    '2xl': 1600,
  },
  layout: {
    '4xs': 128,
    '3xs': 192,
    '2xs': 224,
    xs: 256,
    sm: 320,
    md: 384,
    lg: 512,
    xl: 768,
    '2xl': 1024,
    '3xl': 1280,
    '4xl': 1600,
  },
  spacing: {
    none: 0,
    '3xs': 2,
    '2xs': 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 32,
    '3xl': 48,
    '4xl': 64,
  },
  font: {
    family: '-apple-system, BlinkMacSystemFont, "SF Pro", "Segoe UI", Roboto, sans-serif',
  },
};


// Story Card Component
interface StoryCardProps {
  title: string;
  eyebrow?: string;
  author?: string;
  imageHeight?: number;
  horizontal?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

function StoryCard({ title, eyebrow, author, imageHeight = 160, horizontal = false, size = 'md' }: StoryCardProps) {
  const titleSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  const fontWeights = {
    sm: '400',
    md: '500',
    lg: '700',
  };

  if (horizontal) {
    return (
      <article 
        className="flex"
        style={{ 
          gap: tokens.spacing.sm,
          backgroundColor: tokens.colors.gray100,
        }}
      >
        <div 
          className="flex-shrink-0 rounded"
          style={{ 
            width: 80, 
            height: 80, 
            backgroundColor: tokens.colors.gray84,
          }} 
        />
        <div 
          className="flex-1 flex flex-col"
          style={{ gap: tokens.spacing['2xs'] }}
        >
          {eyebrow && (
            <span 
              className="uppercase tracking-wider"
              style={{ 
                fontSize: 10,
                color: tokens.colors.gray46,
                fontFamily: tokens.font.family,
              }}
            >
              {eyebrow}
            </span>
          )}
          <h3 
            className="leading-tight"
            style={{ 
              fontSize: titleSizes[size],
              fontWeight: fontWeights[size],
              color: tokens.colors.gray7,
              fontFamily: tokens.font.family,
            }}
          >
            {title}
          </h3>
          {author && (
            <span 
              style={{ 
                fontSize: 12,
                color: tokens.colors.gray74,
                fontFamily: tokens.font.family,
              }}
            >
              {author}
            </span>
          )}
        </div>
      </article>
    );
  }

  return (
    <article 
      className="flex flex-col"
      style={{ 
        gap: tokens.spacing.xs,
        backgroundColor: tokens.colors.gray100,
      }}
    >
      <div 
        className="w-full rounded"
        style={{ 
          height: imageHeight,
          backgroundColor: tokens.colors.gray84,
        }}
      />
      <div 
        className="flex flex-col"
        style={{ 
          gap: tokens.spacing['2xs'],
          paddingLeft: tokens.spacing.md,
          paddingRight: tokens.spacing.md,
        }}
      >
        {eyebrow && (
          <span 
            className="uppercase tracking-wider"
            style={{ 
              fontSize: 10,
              color: tokens.colors.gray46,
              fontFamily: tokens.font.family,
            }}
          >
            {eyebrow}
          </span>
        )}
        <h3 
          className="leading-tight"
          style={{ 
            fontSize: titleSizes[size],
            fontWeight: fontWeights[size],
            color: tokens.colors.gray7,
            fontFamily: tokens.font.family,
          }}
        >
          {title}
        </h3>
        {author && (
          <span 
            style={{ 
              fontSize: 12,
              color: tokens.colors.gray74,
              fontFamily: tokens.font.family,
            }}
          >
            {author}
          </span>
        )}
      </div>
    </article>
  );
}

// Big Card Component - Using imported BigCard from ./BigCard

// Ad Unit Component
function AdUnit({ size = '300x250' }: { size?: '300x250' | '300x600' }) {
  const [width, height] = size.split('x').map(Number);
  
  return (
    <div 
      className="flex flex-col items-center"
      style={{ 
        gap: tokens.spacing.sm,
        paddingTop: tokens.spacing.sm,
        paddingBottom: tokens.spacing.sm,
        paddingLeft: tokens.spacing.xs,
        paddingRight: tokens.spacing.xs,
        backgroundColor: tokens.colors.gray100,
      }}
    >
      <div 
        className="flex items-center w-full"
        style={{ gap: tokens.spacing['2xs'] }}
      >
        <div className="flex-1" style={{ height: 1, backgroundColor: tokens.colors.gray84 }} />
        <span 
          style={{ 
            fontSize: 12,
            color: tokens.colors.gray34,
            paddingLeft: tokens.spacing.xs,
            paddingRight: tokens.spacing.xs,
            fontFamily: tokens.font.family,
          }}
        >
          Advertisement - Continue Reading Below
        </span>
        <div className="flex-1" style={{ height: 1, backgroundColor: tokens.colors.gray84 }} />
      </div>
      <div 
        className="flex items-center justify-center"
        style={{ 
          width, 
          height,
          backgroundColor: tokens.colors.gray96,
        }}
      >
        <span 
          className="text-center"
          style={{ 
            fontSize: 14,
            color: tokens.colors.gray58,
            fontFamily: tokens.font.family,
          }}
        >
          AD<br/>{size}
        </span>
      </div>
      <div className="w-full" style={{ height: 1, backgroundColor: tokens.colors.gray84 }} />
    </div>
  );
}

// Newsletter Promo Component
function NewsletterPromo() {
  return (
    <section 
      style={{ 
        backgroundColor: tokens.colors.brand13,
        padding: tokens.spacing['2xl'],
      }}
    >
      <div 
        className="flex flex-col"
        style={{ gap: tokens.spacing.sm }}
      >
        <span 
          className="tracking-wider"
          style={{ 
            fontSize: 13,
            color: tokens.colors.gray7,
            fontFamily: tokens.font.family,
          }}
        >
          NEWSLETTER
        </span>
        <h3 
          style={{ 
            fontSize: 18,
            fontWeight: 700,
            color: tokens.colors.gray7,
            fontFamily: tokens.font.family,
          }}
        >
          Get the Latest Car News
        </h3>
        <p 
          style={{ 
            fontSize: 14,
            color: tokens.colors.gray34,
            fontFamily: tokens.font.family,
          }}
        >
          Subscribe to get the latest automotive news delivered to your inbox.
        </p>
        <div 
          className="flex"
          style={{ 
            gap: tokens.spacing.xs,
            marginTop: tokens.spacing.xs,
          }}
        >
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 rounded"
            style={{ 
              padding: `${tokens.spacing.xs}px ${tokens.spacing.sm}px`,
              fontSize: 14,
              border: `1px solid ${tokens.colors.gray74}`,
              fontFamily: tokens.font.family,
            }}
          />
          <button 
            className="rounded font-semibold transition-opacity hover:opacity-90"
            style={{ 
              padding: `${tokens.spacing.xs}px ${tokens.spacing.md}px`,
              backgroundColor: tokens.colors.brand9,
              color: tokens.colors.gray100,
              fontSize: 14,
              fontFamily: tokens.font.family,
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

// Trending Section Component
function TrendingSection() {
  return (
    <section 
      style={{ 
        paddingLeft: tokens.spacing.xl,
        paddingRight: tokens.spacing.xl,
        paddingTop: tokens.spacing.xl,
        paddingBottom: tokens.spacing.xl,
      }}
    >
      <h2 
        style={{ 
          fontSize: 18,
          fontWeight: 700,
          color: tokens.colors.gray7,
          marginBottom: tokens.spacing.md,
          fontFamily: tokens.font.family,
        }}
      >
        Trending Now
      </h2>
      <div 
        className="flex flex-col"
        style={{ gap: tokens.spacing.xl }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i} 
            className="flex"
            style={{ gap: tokens.spacing.sm }}
          >
            <div 
              className="flex-shrink-0 rounded flex items-center justify-center relative"
              style={{ 
                width: 80, 
                height: 80,
                backgroundColor: tokens.colors.gray84,
              }}
            >
              <span 
                className="absolute rounded-full flex items-center justify-center"
                style={{ 
                  width: 32,
                  height: 32,
                  fontSize: 16,
                  fontWeight: 700,
                  backgroundColor: tokens.colors.brand9,
                  color: tokens.colors.gray100,
                  fontFamily: tokens.font.family,
                }}
              >
                {i}
              </span>
            </div>
            <div className="flex-1">
              <StoryCard
                title={`Trending Story ${i}: Latest Automotive News`}
                eyebrow="News"
                horizontal
                size="sm"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Supporting Story Card Component
function SupportingStoryCard() {
  return (
    <div 
      className="flex flex-col"
      style={{ 
        borderTop: `1px solid ${tokens.colors.gray7}`,
        paddingTop: tokens.spacing.md,
        gap: tokens.spacing.xs,
      }}
    >
      <StoryCard
        title="Supporting Story Headline Here"
        eyebrow="Category"
        horizontal
        size="sm"
      />
      <StoryCard
        title="Another Supporting Story"
        eyebrow="Category"
        imageHeight={160}
        size="sm"
      />
    </div>
  );
}

// Main Homepage Component
export function CarAndDriverHomepage() {
  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: tokens.colors.gray100 }}
    >
      <MainNavigation
        brandName="CAR AND DRIVER"
        utilityLinks={[
          { label: 'Shop' },
          { label: 'US' },
          { label: 'Newsletter' },
          { label: 'Sign in' },
        ]}
        menuLinks={[
          { label: 'News' },
          { label: 'Reviews' },
          { label: "Buyer's Guide" },
          { label: 'Features' },
          { label: 'Video' },
          { label: 'Podcasts' },
          { label: 'Motorsports' },
          { label: 'More' },
        ]}
        actionButtons={[
          { label: 'Sign In', variant: 'ghost' },
          { label: 'Subscribe', variant: 'filled' },
        ]}
      />
      
      <main 
        className="flex flex-col"
        style={{ 
          gap: tokens.spacing['3xl'],
          paddingBottom: tokens.spacing['3xl'],
        }}
      >
        {/* Hero Section */}
        <section 
          className="w-full mx-auto"
          style={{ 
            maxWidth: tokens.layout['2xl'],
            paddingLeft: tokens.spacing.md,
            paddingRight: tokens.spacing.md,
            paddingTop: tokens.spacing.xl,
          }}
        >
          <div 
            className="flex flex-col lg:flex-row"
            style={{ gap: tokens.spacing.xl }}
          >
            {/* Left 2/3 Columns Container */}
            <div 
              className="flex-1 flex flex-col"
              style={{ gap: tokens.spacing['2xl'] }}
            >
              {/* Top Row: Col1 + Col2 */}
              <div 
                className="flex flex-col lg:flex-row"
                style={{ gap: tokens.spacing.xl }}
              >
                {/* Left Column (Col1) - LeftSidebarColumn */}
                <div 
                  className="flex flex-col"
                  style={{ 
                    width: '100%',
                    maxWidth: tokens.layout['2xs'],
                    gap: tokens.spacing.md,
                  }}
                >
                  <LeftSidebarColumn
                    title="Trending Now"
                    stories={[
                      { id: 1, title: "Why Did Valerie Bertinelli Leave 'Kids Baking Championship'?", timestamp: '2 hours ago' },
                      { id: 2, title: "The Best New Cars Coming in 2024", timestamp: '3 hours ago' },
                      { id: 3, title: "10 Kitchen Gadgets That Are Worth the Investment", timestamp: '5 hours ago' },
                      { id: 4, title: "Celebrity Chef Reveals Secret Recipe", timestamp: '6 hours ago' },
                      { id: 5, title: "Home Renovation Tips from the Experts", timestamp: '8 hours ago' },
                      { id: 6, title: "The Most Anticipated Movies of the Year", timestamp: '10 hours ago' },
                    ]}
                  />
                </div>
                
                {/* Center Column (Col2) - BigCard */}
                <div className="flex-1">
                  <BigCard
                    eyebrow="FEATURED"
                    title="Big Card Title Goes Here. Will be Two Lines"
                    author="By Author Name"
                  />
                </div>
              </div>
              
              {/* Second Left Section - Newsletter Promo + Trending Cards */}
              <SecondLeftSection
                newsletterEyebrow="Car and Driver Newsletter"
                newsletterTitle="Get the latest automotive news"
                sectionTitle="Popular Stories"
                trendingCards={[
                  { id: 1, title: "I Tried a Workout Designed for Menopausal Women", timestamp: '2 hours ago', author: 'By Fitness Editor', badgeNumber: 1 },
                  { id: 2, title: "The Best Kitchen Gadgets of 2024", timestamp: '3 hours ago', author: 'By Home Editor', badgeNumber: 2 },
                  { id: 3, title: "Celebrity Chef Shares Secret Recipe", timestamp: '5 hours ago', author: 'By Food Editor', badgeNumber: 3 },
                ]}
              />
            </div>
            
            {/* Right Column (Col3) - RightSidebarColumn */}
            <div 
              className="flex flex-col"
              style={{ 
                width: '100%',
                maxWidth: tokens.layout.sm - 16,
                gap: tokens.spacing.xl,
              }}
            >
              <RightSidebarColumn
                cards={[
                  { 
                    id: 1, 
                    description: "The cell company rolls out Gen Z influencers and fan experiences.", 
                    author: 'By Marketing Team' 
                  },
                  { 
                    id: 2, 
                    description: "New electric vehicles are changing the automotive landscape forever.", 
                    author: 'By Auto Desk' 
                  },
                  { 
                    id: 3, 
                    description: "Celebrity chefs share their favorite kitchen gadgets for home cooks.", 
                    author: 'By Food Editor' 
                  },
                ]}
              />
              <AdUnit size="300x250" />
            </div>
          </div>
        </section>
        
        {/* Feed Block Section - New Component */}
        <section 
          className="w-full mx-auto"
          style={{ 
            maxWidth: 1024,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <FeedBlockSection
            title="Latest News"
            bigStory={{
              eyebrow: 'AUTOMOTIVE',
              title: 'The Future of Electric Vehicles Is Here. Everything You Need to Know About the Latest EV Technology.',
              author: 'By Auto Editor',
            }}
            sideCards={[
              { id: 1, title: '2024 Tesla Model S Review: Still the Best?', subtitle: '{subtitle}', description: '{description}', timestamp: '2 hours ago', author: 'By John Smith', showDescription: true },
              { id: 2, title: 'Ford Mustang Mach-E Gets Major Update', subtitle: '{subtitle}', timestamp: '3 hours ago', author: 'By Sarah Johnson', showDescription: false },
              { id: 3, title: 'Best SUVs for Families in 2024', subtitle: '{subtitle}', timestamp: '5 hours ago', author: 'By Mike Davis', showDescription: false },
              { id: 4, title: 'Porsche 911 GT3 RS Track Test', subtitle: '{subtitle}', timestamp: '6 hours ago', author: 'By Racing Desk', showDescription: false },
            ]}
          />
        </section>
        
        {/* Four Across Grid Section */}
        <section 
          className="w-full mx-auto"
          style={{ 
            maxWidth: 1024,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <FourAcrossGrid
            title="Reviews"
            cards={[
              { id: 1, title: '2024 BMW M3 Competition', author: 'By Auto Editor', buttonLabel: 'Read Review', showButton: true },
              { id: 2, title: '2024 Mercedes-AMG GT', author: 'By Car Expert', buttonLabel: 'Read Review', showButton: true },
              { id: 3, title: '2024 Porsche 911 Turbo S', author: 'By Racing Desk', buttonLabel: 'Read Review', showButton: true },
              { id: 4, title: '2024 Audi RS7 Sportback', author: 'By Test Driver', buttonLabel: 'Read Review', showButton: true },
            ]}
          />
        </section>
        
        {/* Big Story Card Section */}
        <section 
          className="w-full mx-auto"
          style={{ 
            maxWidth: 1024,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <BigStoryCard
            eyebrow="FEATURED"
            title="The All-New 2025 Porsche 911 GT3 RS Sets a New Standard for Track Performance"
            author="By Racing Editor"
          />
        </section>
        
        {/* Four Across Grid Section - After Big Story */}
        <section 
          className="w-full mx-auto"
          style={{ 
            maxWidth: 1024,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <FourAcrossGrid
            title="More Stories"
            cards={[
              { id: 1, title: 'Best Luxury Sedans of 2025', author: 'By Luxury Desk', buttonLabel: 'Read More', showButton: true },
              { id: 2, title: 'Top 10 Family SUVs Ranked', author: 'By Family Auto', buttonLabel: 'Read More', showButton: true },
              { id: 3, title: 'Electric Trucks Comparison', author: 'By EV Team', buttonLabel: 'Read More', showButton: true },
              { id: 4, title: 'Sports Car Buying Guide', author: 'By Performance', buttonLabel: 'Read More', showButton: true },
            ]}
          />
        </section>
        
        {/* Ad */}
        <AdUnit size="300x250" />
      </main>
      
      {/* Footer */}
      <Footer
        brandName="HEARST"
        menuColumns={[
          { sectionTitle: 'News', links: ['Politics', 'World', 'Business', 'Tech', 'Science', 'Health', 'Sports', 'Entertainment'] },
          { sectionTitle: 'Reviews', links: ['Cars', 'SUVs', 'Trucks', 'Electric', 'Luxury', 'Performance', 'Classic', 'Comparison'] },
          { sectionTitle: 'Buying Guide', links: ['New Cars', 'Used Cars', 'Financing', 'Insurance', 'Maintenance', 'Recalls', 'Deals', 'Calculator'] },
          { sectionTitle: 'More', links: ['About Us', 'Careers', 'Advertise', 'Contact', 'Newsletter', 'Subscribe', 'Shop', 'Events'] },
        ]}
        legalText={{
          company: 'A Part of Hearst Digital Media',
          affiliate: 'Car and Driver participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.',
          copyright: '©2025 Hearst Magazine Media, Inc. All Rights Reserved.',
        }}
        legalLinks={['Privacy Notice', 'CA Notice at Collection', 'Your CA Privacy Rights', 'DAA Industry Opt Out', 'Terms of Use', 'Site Map']}
      />
    </div>
  );
}
