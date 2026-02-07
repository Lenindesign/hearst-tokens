'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

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
      className={cn(
        "block py-2 px-4 text-sm rounded-md no-underline transition-all duration-150",
        indent ? "pl-8" : "pl-4",
        isActive 
          ? "font-semibold text-neutral-1000 bg-neutral-200" 
          : "font-normal text-neutral-700 bg-transparent hover:bg-neutral-200/50"
      )}
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
      className="flex items-center justify-between w-full py-2 px-4 text-xs font-semibold text-neutral-700 bg-transparent border-none cursor-pointer uppercase tracking-wide"
    >
      {title}
      <span className={cn("transition-transform duration-200", isOpen ? "rotate-90" : "rotate-0")}>
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
    guides: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const tokenPages = [
    { href: '/storybook/tokens/colors', label: 'Colors' },
    { href: '/storybook/tokens/brand-colors', label: 'Brand Colors' },
    { href: '/storybook/tokens/car-and-driver-colors', label: 'Car and Driver Colors' },
    { href: '/storybook/tokens/typography', label: 'Typography' },
    { href: '/storybook/tokens/spacing', label: 'Spacing' },
    { href: '/storybook/tokens/layout', label: 'Layout' },
    { href: '/storybook/tokens/borders', label: 'Borders' },
    { href: '/storybook/tokens/elevation', label: 'Elevation' },
  ];

  const componentPages = [
    { href: '/storybook/components/shadcn-demo', label: 'shadcn/ui Components' },
    { href: '/storybook/components/article-card', label: 'ArticleCard' },
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
    { href: '/storybook/pages/themed-homepage', label: 'Themed Homepage Preview' },
  ];

  const guidePages = [
    { href: '/storybook/guides/shadcn-theming', label: 'shadcn/ui Multi-Brand Theming' },
    { href: '/storybook/guides/token-pipeline', label: 'Token Pipeline Setup' },
    { href: '/storybook/guides/tailwind-migration', label: 'Tailwind Migration' },
  ];

  return (
    <div className="flex min-h-screen bg-neutral-200">
      {/* Sidebar */}
      <aside className="w-[280px] bg-neutral-100 border-r border-neutral-400 flex flex-col fixed top-0 left-0 bottom-0 overflow-y-auto">
        {/* Logo/Header */}
        <div className="p-5 border-b border-neutral-400">
          <Link href="/storybook" className="no-underline">
            <h1 className="text-xl font-semibold text-neutral-1000 m-0">
              Hearst Design System
            </h1>
            <p className="text-xs text-neutral-700 mt-2 m-0">
              Tokens & Components
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          {/* Overview */}
          <div className="mb-4">
            <NavItem
              href="/storybook"
              label="Overview"
              isActive={pathname === '/storybook'}
            />
          </div>

          {/* Tokens Section */}
          <div className="mb-3">
            <SectionHeader
              title="Design Tokens"
              isOpen={openSections.tokens}
              onClick={() => toggleSection('tokens')}
            />
            {openSections.tokens && (
              <div className="mt-1">
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
          <div className="mb-3">
            <SectionHeader
              title="Components"
              isOpen={openSections.components}
              onClick={() => toggleSection('components')}
            />
            {openSections.components && (
              <div className="mt-1">
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
          <div className="mb-3">
            <SectionHeader
              title="Page Examples"
              isOpen={openSections.pages}
              onClick={() => toggleSection('pages')}
            />
            {openSections.pages && (
              <div className="mt-1">
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

          {/* Guides Section */}
          <div className="mb-3">
            <SectionHeader
              title="Guides"
              isOpen={openSections.guides}
              onClick={() => toggleSection('guides')}
            />
            {openSections.guides && (
              <div className="mt-1">
                {guidePages.map(page => (
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
        <div className="p-4 border-t border-neutral-400">
          <p className="text-xs text-neutral-600 m-0">
            Version 1.0.0
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[280px] min-h-screen">
        {children}
      </main>
    </div>
  );
}
