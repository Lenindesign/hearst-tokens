'use client';

/**
 * MainNavigation Component
 * 
 * Based on Pencil design node: PHdoW (Nav Bar)
 * 
 * Structure:
 * - Nav Bar (vertical layout, full width)
 *   - Nav container
 *     - nav bar (vertical, padding: [4,8], fill: #ededed, border-bottom: #757575)
 *       - utilities bar (horizontal, height: 32px, fill: #121212, padding: [4,8], gap: 4)
 *         - left side (horizontal, gap: 4, fill container)
 *           - Shop button (white text, padding: [6,12])
 *           - US button
 *           - Newsletter button
 *           - Sign in button
 *           - Hamburger icon button (24x24, padding: 4)
 *         - right side (horizontal, gap: 4, justify: end)
 *           - Subscribe button
 *       - action nav bar (horizontal, justify: space-between, padding: [16,0], gap: 10)
 *         - Left Side (search input 256px wide, rounded full)
 *         - Logo (Hearst, centered)
 *         - Right Side (Label button ghost, Label button filled)
 *       - menu item bar (horizontal, height: 48px, border-bottom: 1px, justify: space-between)
 *         - menu (horizontal, gap: 36, 8 link items)
 */

// Design tokens from Pencil - Updated for Car and Driver style
const tokens = {
  colors: {
    utilitiesBg: '#121212',
    navBarBg: '#ffffff',
    navBarBorder: '#e5e5e5',
    textWhite: '#ffffff',
    textDark: '#121212',
    textMuted: '#6b7280',
    buttonFilled: '#1c5f8b', // Car and Driver teal/blue
    buttonGhost: 'rgba(255, 255, 255, 0.04)',
    inputBg: '#f5f5f5',
    inputBorder: '#d1d5db',
  },
  spacing: {
    navBarPadding: [0, 24] as [number, number],
    utilitiesPadding: [4, 8] as [number, number],
    buttonPadding: [10, 20] as [number, number],
    iconButtonPadding: 8,
    actionNavPadding: [16, 0] as [number, number],
    menuGap: 0,
    buttonGap: 4,
    sectionGap: 24,
    inputGap: 8,
  },
  sizes: {
    utilitiesHeight: 32,
    menuHeight: 48,
    inputWidth: 500,
    inputHeight: 44,
    iconSize: 20,
    largeIconSize: 24,
    logoWidth: 180,
    logoHeight: 32,
  },
  typography: {
    button: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.25,
    },
    link: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 0.5,
      lineHeight: 1.14,
    },
    input: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.5,
    },
  },
};

// Hamburger Menu Icon
function HamburgerIcon({ color = tokens.colors.textWhite }: { color?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12h18M3 6h18M3 18h18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Search Icon
function SearchIcon({ color = tokens.colors.textDark }: { color?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="6" stroke={color} strokeWidth="1.5" />
      <path d="M13.5 13.5L17 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// External Link Icon
function ExternalLinkIcon({ color = tokens.colors.textDark }: { color?: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
        stroke={color}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 2H14V6" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66699 9.33333L14.0003 2" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Utility Button Component (for top bar)
interface UtilityButtonProps {
  label: string;
  onClick?: () => void;
}

function UtilityButton({ label, onClick }: UtilityButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: tokens.spacing.buttonGap,
        padding: `${tokens.spacing.buttonPadding[0]}px ${tokens.spacing.buttonPadding[1]}px`,
        backgroundColor: tokens.colors.utilitiesBg,
        border: `1px solid ${tokens.colors.buttonFilled}`,
        cursor: 'pointer',
        fontFamily: tokens.typography.button.fontFamily,
        fontSize: tokens.typography.button.fontSize,
        fontWeight: tokens.typography.button.fontWeight,
        lineHeight: tokens.typography.button.lineHeight,
        color: tokens.colors.textWhite,
      }}
    >
      {label}
    </button>
  );
}

// Icon Button Component (for hamburger menu)
interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'dark' | 'light';
}

function IconButton({ icon, onClick, variant = 'dark' }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: tokens.spacing.iconButtonPadding,
        backgroundColor: variant === 'dark' ? tokens.colors.utilitiesBg : 'transparent',
        border: variant === 'dark' ? `1px solid ${tokens.colors.buttonFilled}` : 'none',
        cursor: 'pointer',
      }}
    >
      {icon}
    </button>
  );
}

// Action Button Component (for action nav bar)
interface ActionButtonProps {
  label: string;
  variant?: 'ghost' | 'filled';
  onClick?: () => void;
}

function ActionButton({ label, variant = 'ghost', onClick }: ActionButtonProps) {
  const isGhost = variant === 'ghost';
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: tokens.spacing.buttonGap,
        padding: `${tokens.spacing.buttonPadding[0]}px ${tokens.spacing.buttonPadding[1]}px`,
        backgroundColor: isGhost ? tokens.colors.buttonGhost : tokens.colors.buttonFilled,
        border: isGhost ? 'none' : `1px solid ${tokens.colors.buttonFilled}`,
        cursor: 'pointer',
        fontFamily: tokens.typography.button.fontFamily,
        fontSize: tokens.typography.button.fontSize,
        fontWeight: tokens.typography.button.fontWeight,
        lineHeight: tokens.typography.button.lineHeight,
        color: isGhost ? tokens.colors.textDark : tokens.colors.textWhite,
      }}
    >
      {label}
    </button>
  );
}

// Menu Link Component
interface MenuLinkProps {
  label: string;
  href?: string;
  showIcon?: boolean;
  onClick?: () => void;
}

function MenuLink({ label, href = '#', showIcon = false, onClick }: MenuLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: tokens.spacing.buttonGap,
        textDecoration: 'none',
        cursor: 'pointer',
        fontFamily: tokens.typography.link.fontFamily,
        fontSize: tokens.typography.link.fontSize,
        fontWeight: tokens.typography.link.fontWeight,
        letterSpacing: tokens.typography.link.letterSpacing,
        lineHeight: tokens.typography.link.lineHeight,
        color: tokens.colors.textDark,
      }}
    >
      {label}
      {showIcon && <ExternalLinkIcon />}
    </a>
  );
}

// Search Input Component - Car and Driver style with wide search bar
function SearchInput({ placeholder = 'e.g. 2025 Toyota RAV4' }: { placeholder?: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacing.inputGap,
        flex: 1,
        maxWidth: 700,
        height: tokens.sizes.inputHeight,
        padding: '8px 16px',
        backgroundColor: tokens.colors.inputBg,
        border: `1px solid ${tokens.colors.inputBorder}`,
        borderRadius: 1024,
        overflow: 'hidden',
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          fontFamily: tokens.typography.input.fontFamily,
          fontSize: tokens.typography.input.fontSize,
          fontWeight: tokens.typography.input.fontWeight,
          letterSpacing: tokens.typography.input.letterSpacing,
          lineHeight: tokens.typography.input.lineHeight,
          color: tokens.colors.textMuted,
        }}
      />
      <SearchIcon color={tokens.colors.textMuted} />
    </div>
  );
}

// User Icon Component
function UserIcon({ color = tokens.colors.textDark }: { color?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.5" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Car and Driver Logo Component
function CarAndDriverLogo() {
  return (
    <svg 
      viewBox="0 0 1364 262" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: 32, width: 'auto' }}
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
  // If brandName contains "CAR AND DRIVER", use the SVG logo
  if (brandName.toUpperCase().includes('CAR AND DRIVER') || brandName.toUpperCase().includes('CAR & DRIVER')) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: tokens.colors.textDark,
        }}
      >
        <CarAndDriverLogo />
      </div>
    );
  }
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontFamily: tokens.typography.button.fontFamily,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 6,
          color: tokens.colors.textDark,
        }}
      >
        {brandName}
      </span>
    </div>
  );
}

// Subscribe Button Component - Car and Driver teal style
function SubscribeButton({ label = 'SUBSCRIBE', onClick }: { label?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 104,
        height: 38,
        padding: 0,
        backgroundColor: tokens.colors.buttonFilled,
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        fontFamily: tokens.typography.button.fontFamily,
        fontSize: 12,
        fontWeight: tokens.typography.button.fontWeight,
        lineHeight: tokens.typography.button.lineHeight,
        color: tokens.colors.textWhite,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>
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
}: MainNavigationProps) {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: tokens.colors.navBarBg,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Nav Content Container - Constrained to max width */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: `${tokens.spacing.navBarPadding[0]}px ${tokens.spacing.navBarPadding[1]}px`,
        }}
      >
        {/* Top Row - Logo, Search, Subscribe, User */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 0',
            gap: tokens.spacing.sectionGap,
            width: '100%',
          }}
        >
          {/* Left Side - Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <Logo brandName={brandName} />
          </div>

          {/* Center - Wide Search Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              padding: '0 24px',
            }}
          >
            <SearchInput placeholder="e.g. 2025 Toyota RAV4" />
          </div>

          {/* Right Side - Subscribe Button and User Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexShrink: 0,
            }}
          >
            <SubscribeButton label="SUBSCRIBE" />
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <UserIcon color={tokens.colors.textDark} />
            </button>
          </div>
        </div>

        {/* Bottom Row - Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: tokens.sizes.menuHeight,
            width: '100%',
            borderTop: `1px solid ${tokens.colors.navBarBorder}`,
          }}
        >
          {/* Menu Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
            }}
          >
            {menuLinks.map((link, index) => (
              <a
                key={index}
                href={link.href || '#'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontFamily: tokens.typography.link.fontFamily,
                  fontSize: tokens.typography.link.fontSize,
                  fontWeight: tokens.typography.link.fontWeight,
                  letterSpacing: tokens.typography.link.letterSpacing,
                  lineHeight: tokens.typography.link.lineHeight,
                  color: tokens.colors.textDark,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Export tokens for reuse
export { tokens as mainNavigationTokens };
