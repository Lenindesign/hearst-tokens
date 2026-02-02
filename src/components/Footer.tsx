'use client';

/**
 * Footer Component
 * 
 * Based on Pencil design node: wbopn
 * 
 * Structure:
 * - footer container (vertical layout, width: 956px, gap: 48px, padding: [32,0])
 *   - logos and icons (horizontal, gap: 32px)
 *     - logo (Hearst logo, 200x24)
 *     - social icons (X, TikTok, YouTube, Facebook, Instagram, Pinterest) gap: 32px
 *   - mega menu (horizontal, 4 columns, gap: 32px)
 *     - Menu Widget (vertical, gap: 16px)
 *       - Section Link (18px, with arrow icon)
 *       - Link items (14px, with arrow icons)
 *       - View all sections (16px)
 *   - legal section (vertical, gap: 32px)
 *     - Lifestyle and Design Group logo
 *     - footer-legal text
 *     - footer legal links
 *     - Privacy choices button
 */

// Design tokens from Pencil
const tokens = {
  colors: {
    text: '#121212',
    textBlack: '#000000',
    background: '#ffffff',
    border: '#757575',
    logoBlue: '#4c759f',
    logoGray: '#99989d',
  },
  spacing: {
    containerPadding: 32,
    sectionGap: 48,
    logoSocialGap: 32,
    menuColumnGap: 32,
    menuItemGap: 16,
    linkGap: 4,
    legalGap: 32,
    legalLinksGap: 24,
    socialIconGap: 32,
  },
  sizes: {
    containerWidth: 1200,
    logoWidth: 200,
    logoHeight: 24,
    socialIconSize: 24,
    menuHeight: 376,
  },
  typography: {
    sectionLink: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: -0.1,
      lineHeight: 1.11,
    },
    menuLink: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.14,
    },
    viewAllLink: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.25,
    },
    legalText: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: -0.1,
      lineHeight: 1.11,
    },
    legalLink: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.14,
    },
    privacyButton: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: 0.4,
      lineHeight: 1.23,
    },
  },
};

// Arrow Icon Component
function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4L10 8L6 12"
        stroke={tokens.colors.text}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// External Link Icon Component
function ExternalLinkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
        stroke={tokens.colors.text}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2H14V6"
        stroke={tokens.colors.text}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66699 9.33333L14.0003 2"
        stroke={tokens.colors.text}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Social Icons
function SocialIcon({ type }: { type: 'x' | 'tiktok' | 'youtube' | 'facebook' | 'instagram' | 'pinterest' }) {
  // TikTok uses a different viewBox, so we handle it separately
  if (type === 'tiktok') {
    return (
      <div
        style={{
          width: tokens.sizes.socialIconSize,
          height: tokens.sizes.socialIconSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <svg
          width={20}
          height={20}
          viewBox="0 0 50 58"
          fill={tokens.colors.textBlack}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd"
            d="M42.53 11.49A13.72 13.72 0 0 1 36.3 0h-9.86l-.02 39.5a8.28 8.28 0 1 1-5.82-8.21V21.22A18.16 18.16 0 0 0 0 39.2a18.17 18.17 0 0 0 18.14 18.14c10 0 18.14-8.14 18.14-18.14V19.15c4 2.88 8.8 4.42 13.72 4.42V13.7c-2.65 0-5.25-.77-7.47-2.22Z" 
          />
        </svg>
      </div>
    );
  }

  const iconPaths: Record<string, string> = {
    x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    youtube: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z',
    facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    instagram: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z',
    pinterest: 'M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.805-2.425 1.808-2.425.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z',
  };

  return (
    <div
      style={{
        width: tokens.sizes.socialIconSize,
        height: tokens.sizes.socialIconSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill={tokens.colors.textBlack}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconPaths[type]} />
      </svg>
    </div>
  );
}

// Hearst Network Logo (from Car and Driver design tokens)
// Source: https://www.caranddriver.com/_assets/design-tokens/caranddriver/static/images/logos/network-logo.636bea0.svg
function NetworkLogo({ color = '#000000' }: { color?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 349 82"
      style={{ height: 40, width: 'auto' }}
    >
      <title>Network Logo</title>
      <desc>Network Logo for Hearst Autos</desc>
      <path 
        style={{ fill: color, fillOpacity: 1 }} 
        d="M37.381.448v30.414H11.64L0 50.99h37.381v30.266h20.967V.448H37.38Zm51.036 29.967V.447h11.267v10.139h5.297V.447h11.267v29.968h-11.267V19.233h-5.297v11.181H88.417Zm49.245 0V.447h22.458v7.678h-11.117v3.28H159.3v7.679h-10.297v3.503h11.49v7.753h-22.831v.075Zm40.664 0L188.25.447h15.221l9.476 29.968h-12.386l-1.045-4.771h-8.73l-1.119 4.77h-11.341Zm19.549-12.077L195.263 6.56l-2.76 11.778h5.372Zm33.501 12.076V.448h15.296c8.207 0 12.087 1.64 12.087 7.604 0 3.653-2.014 5.963-5.894 7.007 4.029.671 4.999 2.46 5.521 6.784l.373 3.205c.149 1.342.522 3.131 1.045 5.293h-11.416c-.373-1.49-.672-2.833-.895-4.174l-.299-2.237c-.448-3.28-.821-4.547-3.507-4.547-.298 0-.671 0-1.044.074V30.34h-11.267v.075Zm11.267-17.592c.298.074.597.074.82.074 2.686 0 4.104-1.192 4.104-3.056s-1.119-2.684-3.656-2.684c-.373 0-.821 0-1.268.075v5.59Zm34.993 7.976h10.745v.224c0 2.013.895 2.982 2.835 2.982 1.716 0 2.761-.895 2.761-2.162 0-.97-.448-1.715-1.194-2.087-1.567-.746-4.253-1.193-7.76-2.311-4.85-1.566-7.088-3.877-7.088-8.126.074-5.814 4.85-9.318 13.579-9.318 7.909 0 12.162 2.982 12.162 8.2v.596h-9.923c-.149-1.789-.97-2.683-2.612-2.683-1.567 0-2.462.894-2.462 2.012 0 2.088 2.089 2.013 5.894 3.057 6.94 1.864 10.297 3.802 10.297 9.243 0 6.337-5.074 10.437-13.729 10.437-8.804 0-13.43-3.355-13.43-9.02-.149-.298-.149-.671-.075-1.044ZM348.295.448v7.976h-7.237v21.99h-11.565V8.424h-7.163V.447h25.965ZM137.96 51.734h5.969V68.88c0 5.069 1.642 8.349 6.193 8.349s6.193-3.28 6.193-8.35V51.735h5.969V70.67c0 7.976-4.477 11.182-12.087 11.182-7.611 0-12.088-3.28-12.088-11.182V51.735h-.149Zm54.318 4.696h-8.506v-4.696h22.907v4.697h-8.506v24.973h-5.969V56.43h.074Zm52.901-5.217c9.327 0 14.55 6.261 14.55 15.282 0 9.02-5.148 15.43-14.55 15.43-9.55 0-14.549-6.336-14.549-15.43 0-9.095 5.074-15.282 14.549-15.282Zm0 26.016c6.119 0 8.357-5.367 8.357-10.734 0-5.219-2.387-10.586-8.357-10.586-5.894 0-8.356 5.367-8.356 10.586 0 5.367 2.238 10.734 8.356 10.734ZM101.996 57.698h.075l8.431 23.407.075.299h6.64l-11.714-29.67h-6.715l-11.565 29.67h6.193l8.58-23.706Zm177.73 15.729h4.849v.15c0 1.267.448 2.31 1.418 3.13.97.82 2.612 1.268 4.85 1.268 2.014 0 3.656-.522 4.924-1.491 1.269-.97 1.866-2.162 1.866-3.43 0-1.789-1.194-3.056-3.656-3.801l-2.537-.746-1.642-.522-3.357-1.043c-3.806-1.417-5.745-3.802-5.745-7.082 0-2.311.895-4.324 2.76-6.038 1.866-1.715 4.626-2.61 8.282-2.61 3.582 0 6.193.746 7.76 2.237 1.567 1.49 2.313 3.13 2.313 4.92v.075h-4.85v-.075c0-.97-.522-1.715-1.492-2.31-.97-.597-2.313-.82-3.88-.82-1.94 0-3.432.372-4.477 1.192-1.044.82-1.567 1.789-1.567 2.982 0 .894.373 1.64 1.045 2.236.672.596 1.791 1.044 3.432 1.49l2.313.672 1.716.522c2.388.67 3.88 1.118 4.402 1.416.597.298 1.12.596 1.717 1.044.82.67 1.492 1.416 1.865 2.31.373.895.597 1.939.597 3.132 0 2.758-.97 5.069-2.985 6.932-2.014 1.864-4.85 2.833-8.655 2.833-2.387 0-4.402-.373-5.969-1.044-1.567-.745-2.835-1.714-3.805-2.981-.97-1.268-1.418-2.684-1.418-4.399v-.149h-.074Z"
      />
    </svg>
  );
}

// Menu Link Component
interface MenuLinkProps {
  text: string;
  isSection?: boolean;
  isViewAll?: boolean;
  showExternalIcon?: boolean;
}

function MenuLink({ text, isSection = false, isViewAll = false, showExternalIcon = true }: MenuLinkProps) {
  const typography = isSection 
    ? tokens.typography.sectionLink 
    : isViewAll 
      ? tokens.typography.viewAllLink 
      : tokens.typography.menuLink;
  
  const iconSize = isSection || isViewAll ? 20 : 16;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacing.linkGap,
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.fontSize,
          fontWeight: typography.fontWeight,
          letterSpacing: typography.letterSpacing,
          lineHeight: typography.lineHeight,
          color: tokens.colors.text,
        }}
      >
        {text}
      </span>
      {showExternalIcon && <ExternalLinkIcon size={iconSize} />}
      {isViewAll && !showExternalIcon && <ArrowIcon size={iconSize} />}
    </div>
  );
}

// Menu Widget Component
interface MenuWidgetProps {
  sectionTitle: string;
  links: string[];
  viewAllText?: string;
}

function MenuWidget({ sectionTitle, links, viewAllText = 'View all sections' }: MenuWidgetProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.menuItemGap,
        flex: 1,
      }}
    >
      {/* Section Title */}
      <div style={{ padding: '4px 0' }}>
        <MenuLink text={sectionTitle} isSection showExternalIcon={false} />
      </div>
      
      {/* Links */}
      {links.map((link, index) => (
        <MenuLink key={index} text={link} showExternalIcon={false} />
      ))}
      
      {/* View All */}
      <div style={{ padding: 4 }}>
        <MenuLink text={viewAllText} isViewAll showExternalIcon={false} />
      </div>
    </div>
  );
}

// Legal Link Component
function LegalLink({ text }: { text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacing.linkGap,
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          fontFamily: tokens.typography.legalLink.fontFamily,
          fontSize: tokens.typography.legalLink.fontSize,
          fontWeight: tokens.typography.legalLink.fontWeight,
          letterSpacing: tokens.typography.legalLink.letterSpacing,
          lineHeight: tokens.typography.legalLink.lineHeight,
          color: tokens.colors.text,
        }}
      >
        {text}
      </span>
    </div>
  );
}

// Privacy Choices Button
function PrivacyChoicesButton() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacing.linkGap,
        padding: '4px 8px',
        border: `1px solid ${tokens.colors.border}`,
        cursor: 'pointer',
      }}
    >
      {/* Privacy Icon */}
      <svg width="37" height="22" viewBox="0 0 37 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="35" height="20" rx="10" stroke={tokens.colors.text} strokeWidth="1"/>
        <circle cx="11" cy="11" r="7" fill={tokens.colors.text}/>
      </svg>
      <span
        style={{
          fontFamily: tokens.typography.privacyButton.fontFamily,
          fontSize: tokens.typography.privacyButton.fontSize,
          fontWeight: tokens.typography.privacyButton.fontWeight,
          letterSpacing: tokens.typography.privacyButton.letterSpacing,
          lineHeight: tokens.typography.privacyButton.lineHeight,
          color: tokens.colors.text,
        }}
      >
        Your Privacy Choices: Opt Out of Sale/Targeted Ads
      </span>
    </div>
  );
}

// Main Footer Component
export interface FooterProps {
  brandName?: string;
  menuColumns?: Array<{
    sectionTitle: string;
    links: string[];
  }>;
  legalText?: {
    company?: string;
    affiliate?: string;
    copyright?: string;
  };
  legalLinks?: string[];
}

export function Footer({
  brandName = 'HEARST',
  menuColumns = [
    { sectionTitle: 'Link Text', links: ['Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text'] },
    { sectionTitle: 'Link Text', links: ['Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text'] },
    { sectionTitle: 'Link Text', links: ['Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text'] },
    { sectionTitle: 'Link Text', links: ['Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text', 'Link Text'] },
  ],
  legalText = {
    company: 'A Part of Hearst Digital Media',
    affiliate: 'Good Housekeeping participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.',
    copyright: '©2025 Hearst Magazine Media, Inc. All Rights Reserved.',
  },
  legalLinks = ['Privacy Notice', 'CA Notice at Collection', 'Your CA Privacy Rights/Shine the Light', 'DAA Industry Opt Out', 'Terms of Use', 'Site Map'],
}: FooterProps) {
  return (
    <footer
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacing.sectionGap,
        width: '100%',
        maxWidth: tokens.sizes.containerWidth,
        padding: `${tokens.spacing.containerPadding}px 0`,
        margin: '0 auto',
      }}
    >
      {/* Logos and Social Icons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: tokens.spacing.logoSocialGap,
          padding: '4px 0',
        }}
      >
        {/* Hearst Logo */}
        <div style={{ width: 296 }}>
          <span
            style={{
              fontFamily: tokens.typography.sectionLink.fontFamily,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 8,
              color: tokens.colors.textBlack,
            }}
          >
            {brandName}
          </span>
        </div>
        
        {/* Social Icons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: tokens.spacing.socialIconGap,
            padding: '4px 0',
          }}
        >
          <SocialIcon type="x" />
          <SocialIcon type="tiktok" />
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="pinterest" />
        </div>
      </div>

      {/* Mega Menu */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: tokens.spacing.menuColumnGap,
          padding: '4px 0',
        }}
      >
        {menuColumns.map((column, index) => (
          <MenuWidget
            key={index}
            sectionTitle={column.sectionTitle}
            links={column.links}
          />
        ))}
      </div>

      {/* Legal Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.legalGap,
          padding: '4px 0',
        }}
      >
        {/* Hearst Autos Network Logo */}
        <div style={{ height: 56, display: 'flex', alignItems: 'center' }}>
          <NetworkLogo color={tokens.colors.text} />
        </div>

        {/* Footer Legal Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing.legalLinksGap,
          }}
        >
          <span
            style={{
              fontFamily: tokens.typography.legalText.fontFamily,
              fontSize: tokens.typography.legalText.fontSize,
              fontWeight: tokens.typography.legalText.fontWeight,
              letterSpacing: tokens.typography.legalText.letterSpacing,
              lineHeight: tokens.typography.legalText.lineHeight,
              color: tokens.colors.textBlack,
            }}
          >
            {legalText.affiliate}
          </span>
          <span
            style={{
              fontFamily: tokens.typography.legalText.fontFamily,
              fontSize: tokens.typography.legalText.fontSize,
              fontWeight: tokens.typography.legalText.fontWeight,
              letterSpacing: tokens.typography.legalText.letterSpacing,
              lineHeight: tokens.typography.legalText.lineHeight,
              color: tokens.colors.textBlack,
            }}
          >
            {legalText.copyright}
          </span>
        </div>

        {/* Legal Links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: tokens.spacing.legalLinksGap,
          }}
        >
          {legalLinks.map((link, index) => (
            <LegalLink key={index} text={link} />
          ))}
        </div>

        {/* Privacy Choices Button */}
        <PrivacyChoicesButton />
      </div>
    </footer>
  );
}

// Export tokens for reuse
export { tokens as footerTokens };
