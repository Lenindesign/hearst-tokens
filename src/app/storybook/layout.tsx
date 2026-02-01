'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { colors, spacing, font, typography, elevation } from '@/lib/designTokens';

// Sidebar Navigation Item
interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  indent?: boolean;
}

function NavItem({ href, label, isActive, indent = false }: NavItemProps) {
  return (
    <Link
      href={href}
      style={{
        display: 'block',
        padding: `${spacing.xs}px ${spacing.md}px`,
        paddingLeft: indent ? spacing['2xl'] : spacing.md,
        fontSize: font.size.sm,
        fontWeight: isActive ? font.weight.semibold : font.weight.regular,
        color: isActive ? colors.neutral.darkest : colors.neutral[600],
        backgroundColor: isActive ? colors.neutral[200] : 'transparent',
        borderRadius: 6,
        textDecoration: 'none',
        transition: 'all 0.15s ease',
      }}
    >
      {label}
    </Link>
  );
}

// Section Header
interface SectionHeaderProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

function SectionHeader({ title, isOpen, onClick }: SectionHeaderProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: `${spacing.xs}px ${spacing.md}px`,
        fontSize: font.size.xs,
        fontWeight: font.weight.semibold,
        color: colors.neutral[600],
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: 1,
      }}
    >
      {title}
      <span style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
        ▶
      </span>
    </button>
  );
}

// Main Layout
export default function StorybookLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState({
    tokens: true,
    components: true,
    pages: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const tokenPages = [
    { href: '/storybook/tokens/colors', label: 'Colors' },
    { href: '/storybook/tokens/brand-colors', label: 'Brand Colors' },
    { href: '/storybook/tokens/typography', label: 'Typography' },
    { href: '/storybook/tokens/spacing', label: 'Spacing' },
    { href: '/storybook/tokens/layout', label: 'Layout' },
    { href: '/storybook/tokens/borders', label: 'Borders' },
    { href: '/storybook/tokens/elevation', label: 'Elevation' },
  ];

  const componentPages = [
    { href: '/storybook/components/main-navigation', label: 'MainNavigation' },
    { href: '/storybook/components/footer', label: 'Footer' },
    { href: '/storybook/components/big-card', label: 'BigCard' },
    { href: '/storybook/components/big-story-card', label: 'BigStoryCard' },
    { href: '/storybook/components/feed-block-section', label: 'FeedBlockSection' },
    { href: '/storybook/components/four-across-grid', label: 'FourAcrossGrid' },
    { href: '/storybook/components/seo-block-grid', label: 'SeoBlockGrid' },
    { href: '/storybook/components/left-sidebar', label: 'LeftSidebarColumn' },
    { href: '/storybook/components/right-sidebar', label: 'RightSidebarColumn' },
    { href: '/storybook/components/newsletter-promo', label: 'NewsletterPromo' },
    { href: '/storybook/components/toast', label: 'Toast' },
  ];

  const pageExamples = [
    { href: '/storybook/pages/homepage', label: 'Car & Driver Homepage' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: colors.neutral[100] }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 280,
          backgroundColor: colors.neutral.lightest,
          borderRight: `1px solid ${colors.neutral[300]}`,
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          overflowY: 'auto',
        }}
      >
        {/* Logo/Header */}
        <div
          style={{
            padding: spacing.lg,
            borderBottom: `1px solid ${colors.neutral[300]}`,
          }}
        >
          <Link href="/storybook" style={{ textDecoration: 'none' }}>
            <h1
              style={{
                ...typography.heading.md,
                color: colors.neutral.darkest,
                margin: 0,
              }}
            >
              Hearst Design System
            </h1>
            <p
              style={{
                ...typography.caption.md,
                color: colors.neutral[600],
                margin: `${spacing.xs}px 0 0`,
              }}
            >
              Tokens & Components
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: `${spacing.md}px 0` }}>
          {/* Overview */}
          <div style={{ marginBottom: spacing.md }}>
            <NavItem
              href="/storybook"
              label="Overview"
              isActive={pathname === '/storybook'}
            />
          </div>

          {/* Tokens Section */}
          <div style={{ marginBottom: spacing.sm }}>
            <SectionHeader
              title="Design Tokens"
              isOpen={openSections.tokens}
              onClick={() => toggleSection('tokens')}
            />
            {openSections.tokens && (
              <div style={{ marginTop: spacing['2xs'] }}>
                {tokenPages.map(page => (
                  <NavItem
                    key={page.href}
                    href={page.href}
                    label={page.label}
                    isActive={pathname === page.href}
                    indent
                  />
                ))}
              </div>
            )}
          </div>

          {/* Components Section */}
          <div style={{ marginBottom: spacing.sm }}>
            <SectionHeader
              title="Components"
              isOpen={openSections.components}
              onClick={() => toggleSection('components')}
            />
            {openSections.components && (
              <div style={{ marginTop: spacing['2xs'] }}>
                {componentPages.map(page => (
                  <NavItem
                    key={page.href}
                    href={page.href}
                    label={page.label}
                    isActive={pathname === page.href}
                    indent
                  />
                ))}
              </div>
            )}
          </div>

          {/* Pages Section */}
          <div style={{ marginBottom: spacing.sm }}>
            <SectionHeader
              title="Page Examples"
              isOpen={openSections.pages}
              onClick={() => toggleSection('pages')}
            />
            {openSections.pages && (
              <div style={{ marginTop: spacing['2xs'] }}>
                {pageExamples.map(page => (
                  <NavItem
                    key={page.href}
                    href={page.href}
                    label={page.label}
                    isActive={pathname === page.href}
                    indent
                  />
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Footer */}
        <div
          style={{
            padding: spacing.md,
            borderTop: `1px solid ${colors.neutral[300]}`,
          }}
        >
          <p style={{ ...typography.caption.sm, color: colors.neutral[500], margin: 0 }}>
            Version 1.0.0
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          marginLeft: 280,
          minHeight: '100vh',
        }}
      >
        {children}
      </main>
    </div>
  );
}
