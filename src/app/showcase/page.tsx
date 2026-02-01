'use client';

import { useState, useRef, useEffect } from 'react';

// Import all custom components we created
import { LeftSidebarColumn } from '@/components/LeftSidebarColumn';
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
    name: 'LeftSidebarColumn',
    pencilNode: '802fn',
    description: 'Left sidebar with category labels and story card headlines',
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

  // Scroll to component section
  const scrollToComponent = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveComponent(id);
    }
  };

  // Update active component on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const component of components) {
        const element = sectionRefs.current[component.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveComponent(component.id);
            break;
          }
        }
      }
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
        <div style={{ maxWidth: 1200 }}>
          <MainNavigation
            brandName="HEARST"
            utilityLinks={[
              { label: 'Shop' },
              { label: 'US' },
              { label: 'Newsletter' },
              { label: 'Sign in' },
            ]}
            menuLinks={[
              { label: 'News' },
              { label: 'Reviews' },
              { label: 'Buying Guide' },
              { label: 'Features' },
              { label: 'Motorsports' },
              { label: 'Videos' },
              { label: 'Podcasts' },
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
        <div style={{ maxWidth: 224 }}>
          <LeftSidebarColumn
            cards={[
              { id: 1, eyebrow: 'REVIEWS', title: '2024 Tesla Model S Review' },
              { id: 2, eyebrow: 'NEWS', title: 'Electric Vehicle Sales Surge' },
              { id: 3, eyebrow: 'FEATURES', title: 'Best Road Trip Cars of 2024' },
            ]}
          />
        </div>
      );

    case 'big-card':
      return (
        <div style={{ maxWidth: 500 }}>
          <BigCard
            eyebrow="FEATURED"
            title="The Future of Automotive Design: A Deep Dive"
            author="By Design Editor"
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
                title: 'New EV Technology Breakthrough',
                description: 'Revolutionary battery tech promises 500-mile range.',
                author: 'By Tech Team',
                showPlayIcon: true,
              },
              {
                id: 2,
                title: 'Classic Car Restoration Guide',
                description: 'Expert tips for bringing vintage vehicles back to life.',
                author: 'By Restoration Desk',
                showPlayIcon: false,
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
            title="Trending Now"
            cards={[
              { id: 1, badgeNumber: 1, title: 'Best SUVs for Families in 2024' },
              { id: 2, badgeNumber: 2, title: 'Electric vs Hybrid: Which Is Right?' },
              { id: 3, badgeNumber: 3, title: 'Top 10 Sports Cars Under $50K' },
            ]}
          />
        </div>
      );

    case 'feed-block-section':
      return (
        <div style={{ maxWidth: 960 }}>
          <FeedBlockSection
            title="Latest News"
            bigStory={{
              eyebrow: 'AUTOMOTIVE',
              title: 'The Future of Electric Vehicles Is Here',
              author: 'By Auto Editor',
            }}
            sideCards={[
              {
                id: 1,
                title: '2024 BMW M3 Competition Review',
                subtitle: 'Full Review',
                timestamp: '2 hours ago',
                author: 'By John Smith',
              },
              {
                id: 2,
                title: 'Mercedes-AMG GT First Drive',
                subtitle: 'First Look',
                timestamp: '4 hours ago',
                author: 'By Jane Doe',
              },
            ]}
          />
        </div>
      );

    case 'four-across-grid':
      return (
        <div style={{ maxWidth: 960 }}>
          <FourAcrossGrid
            title="Reviews"
            cards={[
              { id: 1, title: '2024 BMW M3 Competition', author: 'By Auto Editor', buttonLabel: 'Read Review' },
              { id: 2, title: '2024 Mercedes-AMG GT', author: 'By Car Expert', buttonLabel: 'Read Review' },
              { id: 3, title: '2024 Porsche 911 Turbo S', author: 'By Racing Desk', buttonLabel: 'Read Review' },
              { id: 4, title: '2024 Audi RS7 Sportback', author: 'By Test Driver', buttonLabel: 'Read Review' },
            ]}
          />
        </div>
      );

    case 'big-story-card':
      return (
        <div style={{ maxWidth: 800 }}>
          <BigStoryCard
            eyebrow="FEATURED"
            title="The All-New 2025 Porsche 911 GT3 RS Sets a New Standard"
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
