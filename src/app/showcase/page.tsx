'use client';

import { useState, useRef, useEffect } from 'react';

// Import all custom components we created
import { LatestNewsSidebar } from '@/components/LatestNewsSidebar';
import { BigCard } from '@/components/BigCard';
import { RightSidebarColumn } from '@/components/RightSidebarColumn';
import { NewsletterPromo } from '@/components/NewsletterPromo';
import { TrendingSection } from '@/components/TrendingSection';
import { FeedBlockSection } from '@/components/FeedBlockSection';
import { FourAcrossGrid } from '@/components/FourAcrossGrid';
import { BigStoryCard } from '@/components/BigStoryCard';
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';

// Component metadata
const components = [
  {
    id: 'main-navigation',
    name: 'MainNavigation',
    pencilNode: 'PHdoW',
    description: 'Main navigation bar with utilities, search, logo, action buttons, and menu links',
  },
  {
    id: 'left-sidebar-column',
    name: 'LatestNewsSidebar',
    pencilNode: '802fn',
    description: 'Latest news sidebar with images, timestamps, and play icons (Car and Driver style)',
  },
  {
    id: 'big-card',
    name: 'BigCard',
    pencilNode: 'ElCNS',
    description: 'Featured big card with large image, title, and author',
  },
  {
    id: 'right-sidebar-column',
    name: 'RightSidebarColumn',
    pencilNode: 'ZEf63',
    description: 'Right sidebar with supporting feature cards, descriptions, and play icons',
  },
  {
    id: 'newsletter-promo',
    name: 'NewsletterPromo',
    pencilNode: 'jnZaB',
    description: 'Newsletter signup promo card with eyebrow and title',
  },
  {
    id: 'trending-section',
    name: 'TrendingSection',
    pencilNode: 'jnZaB',
    description: 'Trending stories section with title and cards with badges',
  },
  {
    id: 'feed-block-section',
    name: 'FeedBlockSection',
    pencilNode: 'EWnG9',
    description: 'Feed block with large headline, big story, and sidebar of small cards',
  },
  {
    id: 'four-across-grid',
    name: 'FourAcrossGrid',
    pencilNode: 'nfOyj',
    description: '4-across grid with H2 headline and cards with images, titles, and buttons',
  },
  {
    id: 'big-story-card',
    name: 'BigStoryCard',
    pencilNode: 'KnvvB',
    description: 'Large story card with 540px image, eyebrow, title, and author',
  },
  {
    id: 'footer',
    name: 'Footer',
    pencilNode: 'wbopn',
    description: 'Full footer with logo, social icons, mega menu, legal text, and privacy controls',
  },
];

// Design tokens
const tokens = {
  colors: {
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#121212',
    textSecondary: '#666666',
    textMuted: '#999999',
    border: '#e0e0e0',
    primary: '#121212',
    primaryHover: '#333333',
    navBg: '#1c1c1c',
    navText: '#ffffff',
    navHover: '#333333',
    activeIndicator: '#3b82f6',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
  },
};

export default function ComponentShowcase() {
  const [activeComponent, setActiveComponent] = useState<string>(components[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const isScrollingRef = useRef<boolean>(false);

  // Scroll to component section
  const scrollToComponent = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      // Disable scroll handler during programmatic scroll
      isScrollingRef.current = true;
      setActiveComponent(id);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Re-enable scroll handler after animation completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  // Update active component on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Skip if we're programmatically scrolling
      if (isScrollingRef.current) return;
      
      const navHeight = 110; // Height of fixed nav
      
      // Find the component that is currently most visible in the viewport
      let currentComponent = components[0].id;
      
      for (const component of components) {
        const element = sectionRefs.current[component.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the top of the section is at or above the nav area
          if (rect.top <= navHeight + 50) {
            currentComponent = component.id;
          }
        }
      }
      
      setActiveComponent(currentComponent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: tokens.colors.background,
        fontFamily: tokens.typography.fontFamily,
      }}
    >
      {/* Fixed Navigation Bar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: tokens.colors.navBg,
          zIndex: 1000,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            padding: `${tokens.spacing.sm}px ${tokens.spacing.md}px`,
          }}
        >
          {/* Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: tokens.spacing.sm,
            }}
          >
            <h1
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: tokens.colors.navText,
                margin: 0,
              }}
            >
              Component Showcase
            </h1>
            <span
              style={{
                fontSize: 12,
                color: tokens.colors.textMuted,
              }}
            >
              {components.length} components
            </span>
          </div>
          
          {/* Component Navigation */}
          <div
            style={{
              display: 'flex',
              gap: tokens.spacing.xs,
              overflowX: 'auto',
              paddingBottom: tokens.spacing.xs,
            }}
          >
            {components.map((component) => (
              <button
                key={component.id}
                onClick={() => scrollToComponent(component.id)}
                style={{
                  padding: `${tokens.spacing.xs}px ${tokens.spacing.md}px`,
                  backgroundColor: activeComponent === component.id 
                    ? tokens.colors.activeIndicator 
                    : 'transparent',
                  color: tokens.colors.navText,
                  border: `1px solid ${activeComponent === component.id ? tokens.colors.activeIndicator : tokens.colors.navHover}`,
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: activeComponent === component.id ? 600 : 400,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeComponent !== component.id) {
                    e.currentTarget.style.backgroundColor = tokens.colors.navHover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeComponent !== component.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {component.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main
        style={{
          paddingTop: 100,
          paddingBottom: tokens.spacing['3xl'],
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: `0 ${tokens.spacing.md}px`,
          }}
        >
          {/* Page Header */}
          <div
            style={{
              marginBottom: tokens.spacing['2xl'],
              paddingTop: tokens.spacing.xl,
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: tokens.colors.text,
                marginBottom: tokens.spacing.sm,
              }}
            >
              Hearst Design System Components
            </h2>
            <p
              style={{
                fontSize: 16,
                color: tokens.colors.textSecondary,
                maxWidth: 600,
              }}
            >
              A collection of pixel-perfect React components built from Pencil designs.
              Click on any component name in the navigation bar to jump to that section.
            </p>
          </div>

          {/* Component Sections */}
          {components.map((component) => (
            <section
              key={component.id}
              ref={(el) => { sectionRefs.current[component.id] = el; }}
              id={component.id}
              style={{
                marginBottom: tokens.spacing['3xl'],
                scrollMarginTop: 110,
              }}
            >
              {/* Component Header */}
              <div
                style={{
                  backgroundColor: tokens.colors.surface,
                  padding: tokens.spacing.lg,
                  borderRadius: 8,
                  marginBottom: tokens.spacing.md,
                  border: `1px solid ${tokens.colors.border}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: tokens.spacing.md,
                    marginBottom: tokens.spacing.sm,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: tokens.colors.text,
                      margin: 0,
                    }}
                  >
                    {component.name}
                  </h3>
                  <span
                    style={{
                      fontSize: 12,
                      color: tokens.colors.textMuted,
                      backgroundColor: tokens.colors.background,
                      padding: `${tokens.spacing.xs}px ${tokens.spacing.sm}px`,
                      borderRadius: 4,
                      fontFamily: 'monospace',
                    }}
                  >
                    Pencil: {component.pencilNode}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: tokens.colors.textSecondary,
                    margin: 0,
                  }}
                >
                  {component.description}
                </p>
              </div>

              {/* Component Preview */}
              <div
                style={{
                  backgroundColor: tokens.colors.surface,
                  padding: tokens.spacing.xl,
                  borderRadius: 8,
                  border: `1px solid ${tokens.colors.border}`,
                  overflow: 'hidden',
                }}
              >
                <ComponentPreview componentId={component.id} />
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: tokens.colors.navBg,
          padding: `${tokens.spacing.xl}px ${tokens.spacing.md}px`,
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: tokens.colors.textMuted,
            margin: 0,
          }}
        >
          Hearst Design System - Component Showcase
        </p>
      </footer>
    </div>
  );
}

// Component Preview - renders each component with example data
function ComponentPreview({ componentId }: { componentId: string }) {
  switch (componentId) {
    case 'main-navigation':
      return (
        <div style={{ width: '100%', margin: '0 -32px', padding: '0' }}>
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
        </div>
      );

    case 'left-sidebar-column':
      return (
        <div style={{ maxWidth: 290 }}>
          <LatestNewsSidebar
            title="Latest News"
            stories={[
              { id: 1, title: "Tesla Will Kill the Model S and Model X This Year", timestamp: '19 mins ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-tesla-model-s-plaid-134-68f6610846819.jpg' },
              { id: 2, title: "Genesis Has Sold Some Copies of This Wild Concept", timestamp: '1 hr ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/02-x-skorpio-concept-exterior-6978725403776.jpg?crop=1xw:0.9997037914691943xh;center,top&resize=1800:*' },
              { id: 3, title: "2026 Ineos Grenadier Gets a Black Edition", timestamp: '1 hr ago', showPlayIcon: true, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/07-my26-grenadier-quartermaster-black-edition-studio-697a27265b491.jpeg?crop=1.00xw:0.754xh;0,0.166xh&resize=1800:*' },
              { id: 4, title: "Cadillac CT5-V Blackwing's New Package Costs $27K", timestamp: '2 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-117-6787c5548e855.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*' },
              { id: 5, title: "Hyundai Planning to Drop Santa Cruz Pickup", timestamp: '3 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-santa-cruz-exterior-113-66042095b2fac.jpg?crop=0.748xw:0.686xh;0.0901xw,0.255xh&resize=980:*', showPlayIcon: true },
            ]}
          />
        </div>
      );

    case 'big-card':
      return (
        <div style={{ maxWidth: 610 }}>
          <BigCard
            imageSrc="https://hips.hearstapps.com/hmg-prod/images/2026-honda-pilot-101-6978de7b7c09b.jpg"
            imageAlt="2026 Honda Pilot"
            eyebrow="FIRST DRIVE"
            title="2026 Pilot Does Just Enough to Stay Afloat"
            description="The upgraded Pilot's extra equipment and freshened look help it remain a solid, if unexciting, choice in this competitive segment."
            author="Reviewed By Joey Capparella"
          />
        </div>
      );

    case 'right-sidebar-column':
      return (
        <div style={{ maxWidth: 304 }}>
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
        </div>
      );

    case 'newsletter-promo':
      return (
        <div style={{ maxWidth: 640 }}>
          <NewsletterPromo
            eyebrow="Car and Driver Newsletter"
            title="Get the Latest Automotive News Delivered to Your Inbox"
          />
        </div>
      );

    case 'trending-section':
      return (
        <div style={{ maxWidth: 640 }}>
          <TrendingSection
            title="TRENDING"
            cards={[
              { id: 1, title: "2026 Explorer Tremor Drive: Big Power, Big Bucks", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/2026-ford-explorer-tremor-108-69779a008b74c.jpg?crop=0.903xw:0.762xh;0.0697xw,0.118xh&resize=1800:*" },
              { id: 2, title: "The Winningest Cars in 10Best History", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-corvette-02-656dfe74cae6f.jpg?crop=0.774xw:0.582xh;0.0577xw,0.370xh&resize=1800:*" },
              { id: 3, title: "View Interior Photos of the 2027 Mercedes S-Class", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-interior-pr-105-6979283bd56bf.jpg?crop=1.00xw:1.00xh;0,0&resize=1800:*" },
              { id: 4, title: "Ezra Dyer: The Altima Secretly Thirsts for Mayhem", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/ezra-dyer-column-sept-oct-2025-104-68af525872973.jpg?crop=1xw:0.9995555555555555xh;center,top&resize=980:*" },
              { id: 5, title: "Revealed! 591-HP Donkervoort P24 RS Is Super Light", imageSrc: "https://hips.hearstapps.com/hmg-prod/images/donkervoort-p24-rs-2-6977d57b09a09.jpg?crop=1.00xw:1.00xh;0,0&resize=1800:*" },
            ]}
          />
        </div>
      );

    case 'feed-block-section':
      return (
        <div style={{ maxWidth: 1200 }}>
          <FeedBlockSection
            title="Latest News"
            bigStory={{
              imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/afeela-prototype-2026-3-695d25d188596.jpg?crop=0.838xw:0.909xh;0.0577xw,0.00604xh',
              eyebrow: 'AUTOMOTIVE',
              title: 'The Future of Electric Vehicles Is Here. Everything You Need to Know About the Latest EV Technology.',
              author: 'By Auto Editor',
            }}
            sideCards={[
              {
                id: 1,
                imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-m3-110-1674509061.jpg?crop=0.760xw:0.642xh;0.0641xw,0.243xh&resize=1200:*',
                title: '2024 Tesla Model S Review: Still the Best?',
                subtitle: 'Electric Sedan',
                timestamp: '2 hours ago',
                author: 'By John Smith',
                showDescription: true,
              },
              {
                id: 2,
                imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-117-6787c5548e855.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*',
                title: 'Ford Mustang Mach-E Gets Major Update',
                subtitle: 'Electric SUV',
                timestamp: '3 hours ago',
                author: 'By Sarah Johnson',
                showDescription: false,
              },
              {
                id: 3,
                imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-exterior-pr-111-697927a180999.jpg?crop=0.847xw:0.714xh;0.153xw,0.253xh&resize=1800:*',
                title: 'Best SUVs for Families in 2024',
                subtitle: 'Family Vehicles',
                timestamp: '5 hours ago',
                author: 'By Mike Davis',
                showDescription: false,
              },
              {
                id: 4,
                imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-porsche-911-gt3-rs-112-64ecdc018c917.jpg?crop=0.740xw:0.625xh;0.179xw,0.281xh&resize=1800:*',
                title: 'Porsche 911 GT3 RS Track Test',
                subtitle: 'Sports Car',
                timestamp: '6 hours ago',
                author: 'By Racing Desk',
                showDescription: false,
              },
            ]}
          />
        </div>
      );

    case 'four-across-grid':
      return (
        <div style={{ maxWidth: 1200 }}>
          <FourAcrossGrid
            title="Reviews"
            cards={[
              { id: 1, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-m3-110-1674509061.jpg?crop=0.760xw:0.642xh;0.0641xw,0.243xh&resize=1200:*', title: '2024 BMW M3 Competition', author: 'By Auto Editor' },
              { id: 2, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-exterior-pr-111-697927a180999.jpg?crop=0.847xw:0.714xh;0.153xw,0.253xh&resize=1200:*', title: '2024 Mercedes-AMG GT', author: 'By Car Expert' },
              { id: 3, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-porsche-911-gt3-rs-112-64ecdc018c917.jpg?crop=0.740xw:0.625xh;0.179xw,0.281xh&resize=1200:*', title: '2024 Porsche 911 Turbo S', author: 'By Racing Desk' },
              { id: 4, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-santa-cruz-exterior-113-66042095b2fac.jpg?crop=0.748xw:0.686xh;0.0901xw,0.255xh&resize=1200:*', title: '2024 Audi RS7 Sportback', author: 'By Test Driver' },
            ]}
          />
        </div>
      );

    case 'big-story-card':
      return (
        <div style={{ maxWidth: 1000 }}>
          <BigStoryCard
            imageSrc="https://hips.hearstapps.com/hmg-prod/images/afeela-prototype-2026-3-695d25d188596.jpg?crop=0.838xw:0.909xh;0.0577xw,0.00604xh"
            eyebrow="FEATURED"
            title="The All-New 2025 Porsche 911 GT3 RS Sets a New Standard for Track Performance"
            author="By Racing Editor"
          />
        </div>
      );

    case 'footer':
      return (
        <div style={{ maxWidth: 960 }}>
          <Footer
            brandName="HEARST"
            menuColumns={[
              { sectionTitle: 'News', links: ['Politics', 'World', 'Business', 'Tech', 'Science', 'Health', 'Sports', 'Entertainment'] },
              { sectionTitle: 'Lifestyle', links: ['Food', 'Travel', 'Style', 'Home', 'Wellness', 'Relationships', 'Parenting', 'Pets'] },
              { sectionTitle: 'Reviews', links: ['Cars', 'Electronics', 'Appliances', 'Furniture', 'Beauty', 'Fashion', 'Fitness', 'Outdoor'] },
              { sectionTitle: 'More', links: ['About Us', 'Careers', 'Advertise', 'Contact', 'Newsletter', 'Subscribe', 'Shop', 'Events'] },
            ]}
            legalText={{
              company: 'A Part of Hearst Digital Media',
              affiliate: 'This site participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.',
              copyright: '©2025 Hearst Magazine Media, Inc. All Rights Reserved.',
            }}
            legalLinks={['Privacy Notice', 'CA Notice at Collection', 'Your CA Privacy Rights', 'DAA Industry Opt Out', 'Terms of Use', 'Site Map']}
          />
        </div>
      );

    default:
      return <div>Component not found</div>;
  }
}
