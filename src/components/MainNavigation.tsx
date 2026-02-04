'use client';

import { cn } from '@/lib/utils';

/**
 * MainNavigation Component - Migrated to Tailwind CSS
 */

// Hamburger Menu Icon
function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Search Icon
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// User Icon
function UserIcon({ className }: { className?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Car and Driver Logo Component
function CarAndDriverLogo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 1364 262" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-auto", className)}
    >
      <path fill="currentColor" d="M68.022 210.901C74.858 210.901 76.91 205.432 76.91 197.571V146.641H132.626V199.276C132.626 231.41 116.903 261.83 72.468 261.83H62.554C15.04 261.83 0 233.462 0 194.496V65.289C0 28.712 16.408 0 62.213 0H72.468C117.588 0 132.626 25.978 132.626 59.473V101.177H76.91V61.869C76.91 53.667 74.858 49.222 67.682 49.222C60.502 49.222 58.452 52.982 58.452 61.869V197.571C58.452 206.114 60.846 210.901 68.022 210.901Z"/>
      <path fill="currentColor" d="M272.324 257.729H217.63L213.53 220.47H187.551L183.791 257.729H134.911L167.384 3.41907H236.774L272.324 257.729ZM192.681 170.223H208.402L200.54 92.9747L192.681 170.223Z"/>
      <path fill="currentColor" d="M366.797 3.41907C391.752 3.41907 408.842 18.1158 408.842 48.1925V81.6935C408.842 105.278 396.534 115.873 386.624 120.318C396.194 124.079 408.842 134.331 408.842 153.477V237.561C408.842 247.13 410.55 252.601 412.258 256.021V257.729H356.542C354.149 254.654 352.101 248.844 352.101 239.616V165.781C352.101 157.237 350.047 153.477 342.527 153.477H334.666V257.729H278.268V3.41907H366.797ZM334.665 105.623H341.845C349.021 105.623 352.1 102.203 352.1 93.3126V59.1349C352.1 50.245 350.391 47.1691 342.871 47.1691H334.666L334.665 105.623Z"/>
      <path d="M428.499 63.023H594.769V3.61597H428.5L428.499 63.023Z" fill="#D2232A"/>
      <path d="M428.499 257.046H594.769V197.644H428.5L428.499 257.046Z" fill="#0061AF"/>
      <path fill="currentColor" d="M481.039 182.672H461.599L460.098 167.332H449.987L448.607 182.672H430.7L442.597 77.9894H468.019L481.039 182.672ZM451.864 147.839H458.219L454.742 111.882L451.864 147.839Z"/>
      <path fill="currentColor" d="M486.974 182.672V77.9889H507.008L517.652 128.64V77.9889H535.31V182.671H517.152L504.881 128.077V182.672H486.974Z"/>
      <path fill="currentColor" d="M573.909 77.9874C585.429 77.9875 592.567 84.3239 592.567 101.067V158.609C592.567 174.929 586.18 182.672 574.035 182.672H544.356V77.9874H573.909ZM564.175 162.549H567.647C570.653 162.549 571.531 160.579 571.531 156.219V103.459C571.531 99.2341 570.653 97.4093 567.898 97.4093H564.175V162.549Z"/>
      <path fill="currentColor" d="M696.341 3.41907C727.79 3.41907 747.273 18.8019 747.273 59.4728V199.276C747.273 238.928 729.839 257.729 696.682 257.729H615.674V3.41907H696.341ZM671.389 208.852H679.251C687.454 208.852 689.847 204.065 689.847 193.469V65.2892C689.847 55.0342 687.453 50.589 679.933 50.589H671.389V208.852Z"/>
      <path fill="currentColor" d="M845.438 3.41907C870.393 3.41907 887.48 18.1158 887.48 48.1925V81.6935C887.48 105.278 875.177 115.873 865.264 120.318C874.833 124.079 887.48 134.331 887.48 153.477V237.561C887.48 247.13 889.191 252.601 890.899 256.021V257.729H835.183C832.79 254.654 830.738 248.844 830.738 239.616V165.781C830.738 157.237 828.689 153.477 821.169 153.477H813.307L813.308 257.729H756.907V3.41907H845.438ZM813.307 105.623H820.482C827.662 105.623 830.737 102.203 830.737 93.3126V59.1349C830.737 50.245 829.03 47.1691 821.51 47.1691H813.307V105.623Z"/>
      <path fill="currentColor" d="M956.492 257.732H900.092V3.41895H956.492V257.732Z"/>
      <path fill="currentColor" d="M1073.15 257.729H999.319L962.748 3.41895H1022.22L1037.6 162.705L1052.99 3.41895H1107.34L1073.15 257.729Z"/>
      <path fill="currentColor" d="M1113.59 257.729V3.41895H1219.21V56.0569H1169.3V99.4689H1209.3V153.477H1169.3V204.065H1221.26V257.729H1113.59Z"/>
      <path fill="currentColor" d="M1285.45 47.1689H1293.65C1301.17 47.1689 1302.88 50.2449 1302.88 59.1349V93.313C1302.88 102.203 1299.81 105.623 1292.63 105.623H1285.45V47.1689ZM1285.45 153.477H1293.31C1300.83 153.477 1302.88 157.237 1302.88 165.781V239.616C1302.88 248.844 1304.93 254.654 1307.33 257.729H1363.04V256.021C1361.33 252.601 1359.62 247.131 1359.62 237.561V153.477C1359.62 134.331 1346.98 124.08 1337.41 120.319C1347.32 115.874 1359.62 105.279 1359.62 81.6939V48.1929C1359.62 18.1159 1342.54 3.41895 1317.58 3.41895H1229.05V257.729H1285.45V153.477Z"/>
    </svg>
  );
}

// Logo Component
function Logo({ brandName = 'HEARST' }: { brandName?: string }) {
  if (brandName.toUpperCase().includes('CAR AND DRIVER') || brandName.toUpperCase().includes('CAR & DRIVER')) {
    return (
      <div className="flex items-center justify-center text-neutral-900">
        <CarAndDriverLogo />
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center">
      <span className="font-sans text-xl font-bold tracking-[6px] text-neutral-900">
        {brandName}
      </span>
    </div>
  );
}

// Search Input Component
function SearchInput({ placeholder = 'e.g. 2025 Toyota RAV4' }: { placeholder?: string }) {
  return (
    <div className="flex items-center gap-2 flex-1 max-w-[700px] h-11 px-4 bg-neutral-200 border border-neutral-200 rounded-full overflow-hidden">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 border-none outline-none bg-transparent font-sans text-sm text-black/50 placeholder:text-black/50"
      />
      <SearchIcon className="text-black/50" />
    </div>
  );
}

// Subscribe Button Component
function SubscribeButton({ label = 'SUBSCRIBE', onClick }: { label?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-[104px] h-[38px] bg-brand-blue border-none rounded-sm cursor-pointer font-sans text-xs font-semibold text-neutral-100 uppercase tracking-wide whitespace-nowrap hover:opacity-90 transition-opacity"
    >
      {label}
    </button>
  );
}

// Mobile Search Input Component
function MobileSearchInput({ placeholder = 'e.g. 2025 Toyota RAV4' }: { placeholder?: string }) {
  return (
    <div className="mobile-search-container flex items-center gap-2 w-full px-4 pb-4">
      <div className="flex items-center flex-1 h-11 px-4 bg-neutral-200 border border-neutral-200 rounded-full overflow-hidden">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 border-none outline-none bg-transparent font-sans text-sm italic text-black/50 placeholder:text-black/50"
        />
      </div>
      <button className="flex items-center justify-center w-11 h-11 bg-brand-blue border-none rounded-full cursor-pointer shrink-0">
        <SearchIcon className="text-neutral-100" />
      </button>
    </div>
  );
}

// Main Navigation Component
export interface MainNavigationProps {
  brandName?: string;
  utilityLinks?: Array<{ label: string; href?: string }>;
  menuLinks?: Array<{ label: string; href?: string }>;
  actionButtons?: Array<{ label: string; variant: 'ghost' | 'filled' }>;
  onMenuClick?: () => void;
  onSearch?: (query: string) => void;
  className?: string;
}

export function MainNavigation({
  brandName = 'HEARST',
  menuLinks = [
    { label: 'SHOP NEW CARS' },
    { label: 'SHOP USED CARS' },
    { label: 'RESEARCH CARS' },
    { label: 'EXPERT REVIEWS' },
    { label: "WHAT'S MY CAR WORTH?" },
    { label: 'EXPERT-TESTED GEAR' },
    { label: 'NEWS + STORIES' },
  ],
  className,
}: MainNavigationProps) {
  return (
    <nav
      className={cn(
        "flex flex-col w-full bg-neutral-100 shadow-md sticky top-0 z-[1000]",
        className
      )}
    >
      {/* Mobile Navigation */}
      <div className="nav-mobile">
        {/* Mobile Top Row */}
        <div className="flex items-center justify-between px-4 py-3 w-full">
          {/* Hamburger Menu */}
          <button className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer">
            <HamburgerIcon className="text-neutral-900" />
          </button>

          {/* Centered Logo */}
          <div className="flex items-center justify-center flex-1">
            <Logo brandName={brandName} />
          </div>

          {/* User Icon */}
          <button className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer">
            <UserIcon className="text-neutral-900" />
          </button>
        </div>

        {/* Mobile Search Bar */}
        <MobileSearchInput placeholder="e.g. 2025 Toyota RAV4" />
      </div>

      {/* Desktop/Tablet Navigation */}
      <div className="nav-desktop">
        {/* Nav Content Container */}
        <div className="flex flex-col w-full max-w-[1200px] mx-auto px-6">
          {/* Top Row - Logo, Search, Subscribe, User */}
          <div className="flex items-center justify-between py-4 gap-6 w-full">
            {/* Left Side - Logo */}
            <div className="flex items-center shrink-0">
              <Logo brandName={brandName} />
            </div>

            {/* Center - Wide Search Bar */}
            <div className="flex items-center justify-center flex-1 px-6">
              <SearchInput placeholder="e.g. 2025 Toyota RAV4" />
            </div>

            {/* Right Side - Subscribe Button and User Icon */}
            <div className="flex items-center gap-4 shrink-0">
              <SubscribeButton label="SUBSCRIBE" />
              <button className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer">
                <UserIcon className="text-neutral-900" />
              </button>
            </div>
          </div>

          {/* Bottom Row - Navigation Links */}
          <div
            className="nav-menu-row flex items-center justify-start h-12 w-full border-t border-neutral-200 overflow-hidden"
          >
            {/* Menu Links */}
            <div className="nav-menu-links flex items-center justify-between w-full h-full">
              {menuLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href || '#'}
                  className={cn(
                    "nav-link flex items-center no-underline cursor-pointer font-sans text-xs font-medium tracking-wide text-neutral-900 uppercase whitespace-nowrap hover:text-brand-blue transition-colors",
                    `nav-link-${index + 1}`
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
