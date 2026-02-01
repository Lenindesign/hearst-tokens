'use client';

import { LeftSidebarColumn } from './LeftSidebarColumn';
import { LatestNewsSidebar } from './LatestNewsSidebar';
import { BigCard } from './BigCard';
import { RightSidebarColumn } from './RightSidebarColumn';
import { SecondLeftSection } from './SecondLeftSection';
import { FeedBlockSection } from './FeedBlockSection';
import { FourAcrossGrid } from './FourAcrossGrid';
import { BigStoryCard } from './BigStoryCard';
import { Footer } from './Footer';
import { MainNavigation } from './MainNavigation';
import { SeoBlockGrid } from './SeoBlockGrid';

// Import centralized design tokens
import { 
  colors, 
  spacing, 
  layout, 
  font,
  primitives 
} from '@/lib/designTokens';

/**
 * Car and Driver Homepage Component
 * 
 * This component uses the centralized Hearst Design System tokens from:
 * src/lib/designTokens.ts
 * 
 * Token categories used:
 * - colors.neutral (gray scale)
 * - spacing (consistent spacing scale)
 * - layout (container widths)
 * - font (typography settings)
 */

// Map design system tokens to component-friendly format
const tokens = {
  colors: {
    // Brand-specific colors (Car and Driver)
    brand9: '#1c5f8b',  // Dark blue - primary brand color
    brand13: '#dae2e5', // Light blue-gray - newsletter bg
    // Neutral palette from design system
    gray7: colors.neutral.darkest,      // #121212
    gray11: colors.neutral[1000],       // #1c1c1c
    gray16: colors.neutral[900],        // #292929
    gray23: colors.neutral[800],        // #3b3b3b
    gray34: colors.neutral[700],        // #575757
    gray46: colors.neutral[600],        // #757575
    gray58: colors.neutral[500],        // #949494
    gray74: colors.neutral[400],        // #bdbdbd
    gray84: colors.neutral[300],        // #d6d6d6
    gray93: colors.neutral[200],        // #ededed
    gray96: colors.neutral[100],        // #f5f5f5
    gray100: colors.neutral.lightest,   // #ffffff
  },
  layout: {
    '4xs': layout['4xs'],
    '3xs': layout['3xs'],
    '2xs': layout['2xs'],
    xs: layout.xs,
    sm: layout.sm,
    md: layout.md,
    lg: layout.lg,
    xl: layout.xl,
    '2xl': layout['2xl'],
    '3xl': layout['3xl'],
    '4xl': layout['4xl'],
  },
  spacing: {
    none: spacing.none,
    '3xs': spacing['3xs'],
    '2xs': spacing['2xs'],
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
    '2xl': spacing['2xl'],
    '3xl': spacing['3xl'],
    '4xl': spacing['4xl'],
  },
  font: {
    // Car and Driver typography:
    // - Inter: Headlines and body text
    // - Barlow Condensed: Section headers, eyebrows, navigation
    family: {
      primary: font.family.inter,           // Inter - headlines & body
      display: font.family.barlowCondensed, // Barlow Condensed - section headers, eyebrows
      default: font.family.default,         // System fallback
    },
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
                fontFamily: tokens.font.family.display, // Barlow Condensed for eyebrows
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
              fontFamily: tokens.font.family.primary, // Inter for headlines
            }}
          >
            {title}
          </h3>
          {author && (
            <span 
              style={{ 
                fontSize: 12,
                color: tokens.colors.gray74,
                fontFamily: tokens.font.family.primary, // Inter for body text
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
              fontFamily: tokens.font.family.display, // Barlow Condensed for eyebrows
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
            fontFamily: tokens.font.family.primary, // Inter for headlines
          }}
        >
          {title}
        </h3>
        {author && (
          <span 
            style={{ 
              fontSize: 12,
              color: tokens.colors.gray74,
              fontFamily: tokens.font.family.primary, // Inter for body text
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
            fontFamily: tokens.font.family.primary,
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
            fontFamily: tokens.font.family.primary,
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
            fontFamily: tokens.font.family.display, // Barlow Condensed for section label
          }}
        >
          NEWSLETTER
        </span>
        <h3 
          style={{ 
            fontSize: 18,
            fontWeight: 700,
            color: tokens.colors.gray7,
            fontFamily: tokens.font.family.primary, // Inter for headlines
          }}
        >
          Get the Latest Car News
        </h3>
        <p 
          style={{ 
            fontSize: 14,
            color: tokens.colors.gray34,
            fontFamily: tokens.font.family.primary, // Inter for body text
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
              fontFamily: tokens.font.family.primary,
            }}
          />
          <button 
            className="rounded font-semibold transition-opacity hover:opacity-90"
            style={{ 
              padding: `${tokens.spacing.xs}px ${tokens.spacing.md}px`,
              backgroundColor: tokens.colors.brand9,
              color: tokens.colors.gray100,
              fontSize: 14,
              fontFamily: tokens.font.family.display, // Barlow Condensed for buttons
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
          fontFamily: tokens.font.family.display, // Barlow Condensed for section headers
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
                  fontFamily: tokens.font.family.display, // Barlow Condensed for numbers
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
      {/* Navigation - Full width background */}
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
      
      {/* Page Container - 1200px max width */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
        }}
      >
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
              maxWidth: '100%',
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
                {/* Left Column (Col1) - LatestNewsSidebar (Car and Driver version) */}
                <div 
                  className="flex flex-col"
                  style={{ 
                    width: '100%',
                    maxWidth: 290,
                    gap: tokens.spacing.md,
                  }}
                >
                  <LatestNewsSidebar
                    title="Latest News"
                    stories={[
                      { id: 1, title: "Tesla Will Kill the Model S and Model X This Year", timestamp: '19 mins ago' },
                      { id: 2, title: "Genesis Has Sold Some Copies of This Wild Concept", timestamp: '1 hr ago' },
                      { id: 3, title: "2026 Ineos Grenadier Gets a Black Edition", timestamp: '1 hr ago', showPlayIcon: true },
                      { id: 4, title: "Cadillac CT5-V Blackwing's New Package Costs $27K", timestamp: '2 hrs ago' },
                      { id: 5, title: "Hyundai Planning to Drop Santa Cruz Pickup", timestamp: '3 hrs ago', showPlayIcon: true },
                      { id: 6, title: "Hameedi Venturo's Project Origine Will Have a V-12", timestamp: '6 hrs ago' },
                      { id: 7, title: "Refreshed S-Class Has Stars in It's Eyes", timestamp: '1 day ago' },
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
          className="w-full"
          style={{ 
            paddingLeft: tokens.spacing.md,
            paddingRight: tokens.spacing.md,
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
          className="w-full"
          style={{ 
            paddingLeft: tokens.spacing.md,
            paddingRight: tokens.spacing.md,
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
          className="w-full"
          style={{ 
            paddingLeft: tokens.spacing.md,
            paddingRight: tokens.spacing.md,
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
          className="w-full"
          style={{ 
            paddingLeft: tokens.spacing.md,
            paddingRight: tokens.spacing.md,
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
        
        {/* SEO Block Grid Section */}
        <section 
          className="w-full"
          style={{ 
            paddingLeft: tokens.spacing.md,
            paddingRight: tokens.spacing.md,
          }}
        >
          <SeoBlockGrid
            title="More From Car and Driver"
            cards={[
              { id: 1, title: '2024 Best Performance Cars Under $50K' },
              { id: 2, title: 'Electric SUV Comparison: Tesla vs Rivian' },
              { id: 3, title: 'How to Choose the Right Tires for Your Car' },
              { id: 4, title: 'Top 10 Most Reliable Used Cars in 2024' },
              { id: 5, title: 'Best Luxury Sedans for Long Road Trips' },
              { id: 6, title: 'Understanding Your Car\'s Warning Lights' },
              { id: 7, title: 'First Drive: 2025 Porsche 911 Turbo S' },
              { id: 8, title: 'Best Car Insurance Companies Ranked' },
              { id: 9, title: 'How to Negotiate the Best Car Deal' },
              { id: 10, title: 'Top Picks: Best Family SUVs of 2024' },
              { id: 11, title: 'EV Charging Guide: Everything You Need' },
              { id: 12, title: 'Classic Cars Worth Investing In Now' },
            ]}
          />
        </section>
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
    </div>
  );
}
