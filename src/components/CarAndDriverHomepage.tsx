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
function AdUnit({ size = '300x250', imageSrc }: { size?: '300x250' | '300x600' | '728x90'; imageSrc?: string }) {
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
          backgroundColor: imageSrc ? 'transparent' : tokens.colors.gray96,
        }}
      >
        {imageSrc ? (
          <img 
            src={imageSrc}
            alt="Advertisement"
            style={{
              width,
              height,
              objectFit: 'cover',
              display: 'block',
            }}
          />
        ) : (
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
        )}
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

// Top Ad Banner Component
function TopAdBanner({ imageSrc }: { imageSrc: string }) {
  return (
    <div 
      className="w-full"
      style={{ 
        backgroundColor: tokens.colors.gray7,
      }}
    >
      <a 
        href="#" 
        className="block w-full"
        style={{ 
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        <img 
          src={imageSrc}
          alt="Advertisement"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: 292,
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </a>
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
      {/* Top Ad Banner - Full width */}
      <TopAdBanner imageSrc="https://pub-4345f0f77c424370b4354c6a404ac802.r2.dev/4fbe118138d25dacf069f118fa39c265b4374c2e.jpg" />
      
      {/* Navigation - Full width background */}
      <MainNavigation
        brandName="CAR AND DRIVER"
        menuLinks={[
          { label: 'SHOP NEW CARS' },
          { label: 'SHOP USED CARS' },
          { label: 'RESEARCH CARS' },
          { label: 'EXPERT REVIEWS' },
          { label: "WHAT'S MY CAR WORTH?" },
          { label: 'EXPERT-TESTED GEAR' },
          { label: 'NEWS + STORIES' },
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
              {/* Top Row: Col1 + Col2 - Always side by side on tablet and up */}
              <div 
                className="hero-row flex"
                style={{ gap: tokens.spacing.xl }}
              >
                {/* Left Column (Col1) - LatestNewsSidebar (Car and Driver version) */}
                <div 
                  className="hero-sidebar flex flex-col flex-shrink-0"
                  style={{ 
                    width: 220,
                    gap: tokens.spacing.md,
                  }}
                >
                  <LatestNewsSidebar
                    title="Latest News"
                    stories={[
                      { id: 1, title: "Tesla Will Kill the Model S and Model X This Year", timestamp: '19 mins ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-tesla-model-s-plaid-134-68f6610846819.jpg' },
                      { id: 2, title: "Genesis Has Sold Some Copies of This Wild Concept", timestamp: '1 hr ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/02-x-skorpio-concept-exterior-6978725403776.jpg?crop=1xw:0.9997037914691943xh;center,top&resize=1800:*' },
                      { id: 3, title: "2026 Ineos Grenadier Gets a Black Edition", timestamp: '1 hr ago', showPlayIcon: true, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/07-my26-grenadier-quartermaster-black-edition-studio-697a27265b491.jpeg?crop=1.00xw:0.754xh;0,0.166xh&resize=1800:*' },
                      { id: 4, title: "Cadillac CT5-V Blackwing's New Package Costs $27K", timestamp: '2 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-117-6787c5548e855.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*' },
                      { id: 5, title: "Hyundai Planning to Drop Santa Cruz Pickup", timestamp: '3 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-santa-cruz-exterior-113-66042095b2fac.jpg?crop=0.748xw:0.686xh;0.0901xw,0.255xh&resize=980:*', showPlayIcon: true },
                      { id: 6, title: "Hameedi Venturo's Project Origine Will Have a V-12", timestamp: '6 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/hameedi-venturo-lead-image-693f91845d5a0.jpg?crop=0.9958746996690693xw:1xh;center,top&resize=1800:*' },
                      { id: 7, title: "Refreshed S-Class Has Stars in It's Eyes", timestamp: '1 day ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-exterior-pr-111-697927a180999.jpg?crop=0.847xw:0.714xh;0.153xw,0.253xh&resize=1800:*' },
                    ]}
                  />
                </div>
                
                {/* Center Column (Col2) - BigCard */}
                <div className="hero-main flex-1 min-w-0">
                  <BigCard
                    imageSrc="https://hips.hearstapps.com/hmg-prod/images/2026-honda-pilot-101-6978de7b7c09b.jpg"
                    imageAlt="2026 Honda Pilot"
                    eyebrow="FIRST DRIVE"
                    title="2026 Pilot Does Just Enough to Stay Afloat"
                    description="The upgraded Pilot's extra equipment and freshened look help it remain a solid, if unexciting, choice in this competitive segment."
                    author="Reviewed By Joey Capparella"
                  />
                </div>
              </div>
              
              {/* Second Left Section - Newsletter Promo + Trending Cards */}
              <SecondLeftSection
                newsletterEyebrow="Car and Driver Newsletter"
                newsletterTitle="GET THE LATEST NEWS"
                sectionTitle="TRENDING"
                trendingCards={[
                  { id: 1, title: "2026 Explorer Tremor Drive: Big Power, Big Bucks", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/2026-ford-explorer-tremor-108-69779a008b74c.jpg?crop=0.903xw:0.762xh;0.0697xw,0.118xh&resize=1800:*" },
                  { id: 2, title: "The Winningest Cars in 10Best History", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-corvette-02-656dfe74cae6f.jpg?crop=0.774xw:0.582xh;0.0577xw,0.370xh&resize=1800:*" },
                  { id: 3, title: "View Interior Photos of the 2027 Mercedes S-Class", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-interior-pr-105-6979283bd56bf.jpg?crop=1.00xw:1.00xh;0,0&resize=1800:*" },
                  { id: 4, title: "Ezra Dyer: The Altima Secretly Thirsts for Mayhem", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/ezra-dyer-column-sept-oct-2025-104-68af525872973.jpg?crop=1xw:0.9995555555555555xh;center,top&resize=980:*" },
                  { id: 5, title: "Revealed! 591-HP Donkervoort P24 RS Is Super Light", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/donkervoort-p24-rs-2-6977d57b09a09.jpg?crop=1.00xw:1.00xh;0,0&resize=1800:*" },
                ]}
              />
            </div>
            
            {/* Right Column (Col3) - RightSidebarColumn */}
            <div 
              className="hidden lg:flex flex-col flex-shrink-0"
              style={{ 
                width: 304,
                gap: tokens.spacing.xl,
              }}
            >
              <RightSidebarColumn
                cards={[
                  { 
                    id: 1, 
                    sectionLabel: 'ESSENTIAL READS',
                    title: "Mercedes Design Boss Gorden Wagener Picks His Faves",
                    dek: "Retiring after 30 years Wagener chooses his favorite Benz creations.",
                    author: 'By Brett Berk',
                    imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/25c0255-057-source-6978d8ab61150.jpg?resize=1800:*',
                  },
                  { 
                    id: 2, 
                    sectionLabel: 'ESSENTIAL READS',
                    title: "An F1 Fan's First Daytona 24 Hours",
                    dek: "A lifelong F1 fan attends his first 24-hour endurance race.",
                    author: 'By Samantha MacAvoy',
                    showPlayIcon: true,
                    imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-2258128426-6978ed1a82c20.jpg?crop=0.663xw:0.559xh;0.306xw,0.441xh&resize=1800:*',
                  },
                  { 
                    id: 3, 
                    sectionLabel: 'ESSENTIAL READS',
                    title: "Every New Car You Can Still Buy with a Stick Shift",
                    dek: "The cars on this list keep the #SaveTheManuals mission alive.",
                    author: 'By Greg S. Fink and Joey Capparella',
                    imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/honda-civic-type-r-101-654e4f5880cc4.jpg?crop=0.573xw:0.485xh;0.250xw,0.304xh',
                  },
                ]}
              />
              <AdUnit size="300x600" imageSrc="https://pub-4345f0f77c424370b4354c6a404ac802.r2.dev/ef73c64adb64cd518143fd362dabee21e03eb061.png" />
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
              imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/afeela-prototype-2026-3-695d25d188596.jpg?crop=0.838xw:0.909xh;0.0577xw,0.00604xh',
              eyebrow: 'AUTOMOTIVE',
              title: 'The Future of Electric Vehicles Is Here. Everything You Need to Know About the Latest EV Technology.',
              author: 'By Auto Editor',
            }}
            sideCards={[
              { id: 1, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-m3-110-1674509061.jpg?crop=0.760xw:0.642xh;0.0641xw,0.243xh&resize=1200:*', title: '2024 Tesla Model S Review: Still the Best?', subtitle: '{subtitle}', description: '{description}', timestamp: '2 hours ago', author: 'By John Smith', showDescription: true },
              { id: 2, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-mercedes-amg-gt63-643-66b52543c907c.jpg?crop=0.647xw:0.545xh;0.112xw,0.355xh&resize=1200:*', title: 'Ford Mustang Mach-E Gets Major Update', subtitle: '{subtitle}', timestamp: '3 hours ago', author: 'By Sarah Johnson', showDescription: false },
              { id: 3, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-exterior-pr-111-697927a180999.jpg?crop=0.847xw:0.714xh;0.153xw,0.253xh&resize=1800:*', title: 'Best SUVs for Families in 2024', subtitle: '{subtitle}', timestamp: '5 hours ago', author: 'By Mike Davis', showDescription: false },
              { id: 4, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-porsche-911-gt3-rs-112-64ecdc018c917.jpg?crop=0.740xw:0.625xh;0.179xw,0.281xh&resize=1800:*', title: 'Porsche 911 GT3 RS Track Test', subtitle: '{subtitle}', timestamp: '6 hours ago', author: 'By Racing Desk', showDescription: false },
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
              { id: 1, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-mazda-mx-5-miata-red-white-in-motion-65b3c9d045b5a.jpg?crop=0.420xw:0.356xh;0.322xw,0.577xh&resize=700:*', title: '2024 BMW M3 Competition', author: 'By Auto Editor', buttonLabel: 'Read Review', showButton: true },
              { id: 2, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-mercedes-amg-gt63-643-66b52543c907c.jpg?crop=0.647xw:0.545xh;0.112xw,0.355xh&resize=1200:*', title: '2024 Mercedes-AMG GT', author: 'By Car Expert', buttonLabel: 'Read Review', showButton: true },
              { id: 3, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-porsche-911-gt3-rs-112-64ecdc018c917.jpg?crop=0.740xw:0.625xh;0.179xw,0.281xh&resize=1200:*', title: '2024 Porsche 911 Turbo S', author: 'By Racing Desk', buttonLabel: 'Read Review', showButton: true },
              { id: 4, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-rs7-performance-motion-front-2-1669663936.jpg?crop=0.729xw:0.615xh;0.255xw,0.300xh&resize=1200:*', title: '2024 Audi RS7 Sportback', author: 'By Test Driver', buttonLabel: 'Read Review', showButton: true },
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
            imageSrc="https://hips.hearstapps.com/mtg-prod/6712b4229c4b0b00082ee450/2025porsche911gt3sportscar-1.jpg"
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
              { id: 1, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-audi-a3-sedan-front-three-quarters-65ef2c5450bd0.jpg?crop=0.580xw:0.506xh;0.324xw,0.385xh&resize=700:*', title: 'Best Luxury Sedans of 2025', author: 'By Luxury Desk', buttonLabel: 'Read More', showButton: true },
              { id: 2, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-hyundai-palisade-hybrid-428-690e25d21d13f.jpg?crop=0.881xw:0.746xh;0.119xw,0.161xh&resize=700:*', title: 'Top 10 Family SUVs Ranked', author: 'By Family Auto', buttonLabel: 'Read More', showButton: true },
              { id: 3, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-rivian-r1t-tri-motor-286-685c20551a09b.jpg?crop=0.832xw:0.702xh;0.0897xw,0.267xh&resize=700:*', title: 'Electric Trucks Comparison', author: 'By EV Team', buttonLabel: 'Read More', showButton: true },
              { id: 4, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2023-chevrolet-corvette-stingray-convertible-3lt-z51-681-1665496990.jpg?crop=0.686xw:0.578xh;0.268xw,0.422xh&resize=700:*', title: 'Sports Car Buying Guide', author: 'By Performance', buttonLabel: 'Read More', showButton: true },
            ]}
          />
        </section>
        
        {/* Ad */}
        <AdUnit size="728x90" imageSrc="https://pub-4345f0f77c424370b4354c6a404ac802.r2.dev/image%202.jpg" />
        
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
              { id: 1, title: '2024 Best Performance Cars Under $50K', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-mazda-mx-5-miata-red-white-in-motion-65b3c9d045b5a.jpg?crop=0.420xw:0.356xh;0.322xw,0.577xh&resize=700:*' },
              { id: 2, title: 'Electric SUV Comparison: Tesla vs Rivian', imageSrc: 'https://www.usnews.com/object/image/00000191-e1a3-d4fa-a9b3-e9afe6100000/modelx-63-1.jpg?update-time=1745511030616&size=responsive970' },
              { id: 3, title: 'How to Choose the Right Tires for Your Car', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/pile-of-tires-on-white-background-royalty-free-image-672151801-1561751929.jpg?resize=2048:*'},
              { id: 4, title: 'Top 10 Most Reliable Used Cars in 2024', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2019-group-10best-1574285577.jpg?crop=1.00xw:0.751xh;0,0.199xh' },
              { id: 5, title: 'Best Luxury Sedans for Long Road Trips', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-honda-civic-hybrid-hatchback-103-66e8b084b901e.jpg?crop=0.643xw:0.685xh;0.210xw,0.212xh&resize=700:*' },
              { id: 6, title: 'Understanding Your Car\'s Warning Lights', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/adobestock-121798525-1616195640.jpeg?crop=1.00xw:1.00xh;0,0' },
              { id: 7, title: 'First Drive: 2025 Porsche 911 Turbo S', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-porsche-911-gt3-rs-112-64ecdc018c917.jpg?crop=0.740xw:0.625xh;0.179xw,0.281xh&resize=1200:*' },
              { id: 8, title: 'Best Car Insurance Companies Ranked', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/cropped-hands-photographing-damaged-car-with-smart-royalty-free-image-1589573927.jpg' },
              { id: 9, title: 'How to Negotiate the Best Car Deal', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/toyota-dealership-is-seen-on-november-19-2025-in-austin-news-photo-1767796356.pjpeg?crop=1.00xw:0.847xh;0,0.153xh&resize=980:*' },
              { id: 10, title: 'Top Picks: Best Family SUVs of 2024', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-honda-cr-v-trailsport-107-680fdb057f4fd.jpg?crop=0.780xw:0.662xh;0.131xw,0.192xh&resize=700:*' },
              { id: 11, title: 'EV Charging Guide: Everything You Need', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/tesla-charging-1560371738.jpg?crop=0.468xw:0.624xh;0.478xw,0.249xh' },
              { id: 12, title: 'Classic Cars Worth Investing In Now', imageSrc: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/10/classics.png?fill=2:1' },
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
