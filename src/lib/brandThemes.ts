/**
 * Hearst Brand Themes
 * 
 * This file contains theme configurations for all Hearst brands.
 * Each theme includes colors, typography, and spacing customizations.
 * 
 * Source: https://figma-connector.kubeprod.hearstapps.com/token-studio/tokens
 * 
 * IMPORTANT: Brand colors are fetched from the token API.
 * Base tokens (neutral colors, spacing, etc.) come from designTokens.ts
 */

import { colors as baseColors, spacing, font, border } from './designTokens';

export interface BrandTheme {
  id: string;
  name: string;
  logo?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    headerBg: string;
    headerText: string;
    strapBg: string;
    strapText: string;
    link: string;
    linkHover: string;
    border: string;
  };
  typography: {
    fontFamily: {
      primary: string;
      secondary: string;
      display: string;
    };
    headerWeight: number;
    bodyWeight: number;
  };
  spacing: {
    scale: number; // Multiplier for spacing (1 = default)
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
  };
}

// Base theme that all brands extend from - uses design tokens
const baseTheme = {
  typography: {
    fontFamily: {
      primary: font.family.default,
      secondary: font.family.serif,
      display: font.family.default,
    },
    headerWeight: font.weight.bold,
    bodyWeight: font.weight.regular,
  },
  spacing: {
    scale: 1,
  },
  borderRadius: {
    sm: border.radius.sm,
    md: border.radius.md,
    lg: border.radius.lg,
  },
};

// Base neutral colors from design tokens
const neutralColors = {
  background: baseColors.neutral.lightest,
  surface: baseColors.neutral[100],
  text: baseColors.neutral.darkest,
  textSecondary: baseColors.neutral[600],
  border: baseColors.neutral[300],
};

export const brandThemes: Record<string, BrandTheme> = {
  // Car and Driver - Automotive focus, blue/gray palette
  // Brand colors from API: #8dafc5, #b1b1b1, #444444, #e2e2e2, #eaeaea, #6abd45, #6f6f6f, #00a4db, #1c5f8b, #f1f7f7, #dbca8b, #607d8b, #dae2e5
  carAndDriver: {
    id: 'carAndDriver',
    name: 'Car and Driver',
    colors: {
      primary: '#d22329',      // Red accent (strap color)
      secondary: '#1c5f8b',    // brand.9 - Dark blue
      accent: '#6abd45',       // brand.6 - Green
      background: neutralColors.background,
      surface: neutralColors.surface,
      text: neutralColors.text,
      textSecondary: neutralColors.textSecondary,
      headerBg: baseColors.neutral[200],  // #ededed
      headerText: neutralColors.text,
      strapBg: '#d22329',
      strapText: baseColors.neutral.lightest,
      link: '#1c5f8b',         // brand.9
      linkHover: '#00a4db',    // brand.8
      border: neutralColors.border,
    },
    typography: {
      fontFamily: {
        primary: 'Inter, ' + font.family.default,
        secondary: font.family.serif,
        display: '"Barlow Condensed", ' + font.family.default,
      },
      headerWeight: font.weight.bold,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 0, md: 0, lg: 0 },
  },

  // Cosmopolitan - Bold, feminine, pink/red
  // Brand colors from API: #d70000, #F6D3E5
  cosmopolitan: {
    id: 'cosmopolitan',
    name: 'Cosmopolitan',
    colors: {
      primary: '#d70000',      // brand.1 - Cosmo red
      secondary: '#F6D3E5',    // brand.2 - Pink
      accent: '#ff69b4',       // Hot pink
      background: neutralColors.background,
      surface: '#fef7f9',
      text: neutralColors.text,
      textSecondary: neutralColors.textSecondary,
      headerBg: '#d70000',
      headerText: baseColors.neutral.lightest,
      strapBg: '#d70000',
      strapText: baseColors.neutral.lightest,
      link: '#d70000',
      linkHover: '#a00000',
      border: '#f0d4dc',
    },
    typography: {
      fontFamily: {
        primary: '"Helvetica Neue", ' + font.family.default,
        secondary: font.family.serif,
        display: '"Playfair Display", ' + font.family.serif,
      },
      headerWeight: font.weight.bold,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: border.radius.sm, md: border.radius.md, lg: 16 },
  },

  // Esquire - Sophisticated, masculine, navy/orange
  // Brand colors from API: #ff3a30, #f5f6f8, #15263d, #ff5a52, #e00b00, #ececec, #515150, #161616
  esquire: {
    id: 'esquire',
    name: 'Esquire',
    colors: {
      primary: '#15263d',      // brand.3 - Navy
      secondary: '#ff3a30',    // brand.1 - Orange-red
      accent: '#ff5a52',       // brand.4 - Coral
      background: neutralColors.background,
      surface: '#f5f6f8',      // brand.2
      text: '#161616',         // brand.8
      textSecondary: '#515150', // brand.7
      headerBg: '#15263d',     // brand.3
      headerText: baseColors.neutral.lightest,
      strapBg: '#ff3a30',      // brand.1
      strapText: baseColors.neutral.lightest,
      link: '#15263d',
      linkHover: '#ff3a30',
      border: '#ececec',       // brand.6
    },
    typography: {
      fontFamily: {
        primary: '"Chronicle SSm", ' + font.family.serif,
        secondary: '"Decimal", ' + font.family.default,
        display: '"Chronicle Display", ' + font.family.serif,
      },
      headerWeight: font.weight.semibold,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1.1 },
    borderRadius: { sm: 0, md: 0, lg: 0 },
  },

  // Good Housekeeping - Trustworthy, teal/red
  // Brand colors from API: #53c2be, #198294, #125c68, #f8f3f4, #9e3326, #d24432
  goodHousekeeping: {
    id: 'goodHousekeeping',
    name: 'Good Housekeeping',
    colors: {
      primary: '#198294',      // brand.2 - Teal
      secondary: '#53c2be',    // brand.1 - Light teal
      accent: '#d24432',       // brand.6 - Red accent
      background: neutralColors.background,
      surface: '#f8f3f4',      // brand.4
      text: '#125c68',         // brand.3
      textSecondary: neutralColors.textSecondary,
      headerBg: '#198294',     // brand.2
      headerText: baseColors.neutral.lightest,
      strapBg: '#d24432',      // brand.6
      strapText: baseColors.neutral.lightest,
      link: '#198294',
      linkHover: '#125c68',
      border: baseColors.neutral[300],
    },
    typography: {
      fontFamily: {
        primary: '"Proxima Nova", ' + font.family.default,
        secondary: font.family.serif,
        display: '"Proxima Nova", ' + font.family.default,
      },
      headerWeight: font.weight.bold,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: border.radius.sm, md: border.radius.md, lg: border.radius.lg },
  },

  // Harper's BAZAAR - High fashion, black/red
  // Brand colors from API: #000000, #aa0703, #ff0000, #77747b, #ff5e5e
  harpersBazaar: {
    id: 'harpersBazaar',
    name: "Harper's BAZAAR",
    colors: {
      primary: '#000000',      // brand.1 - Black
      secondary: '#aa0703',    // brand.2 - Deep red
      accent: '#ff0000',       // brand.3 - Red
      background: neutralColors.background,
      surface: baseColors.neutral[100],
      text: '#000000',
      textSecondary: '#77747b', // brand.4
      headerBg: '#000000',
      headerText: baseColors.neutral.lightest,
      strapBg: '#aa0703',      // brand.2
      strapText: baseColors.neutral.lightest,
      link: '#000000',
      linkHover: '#aa0703',
      border: baseColors.neutral[300],
    },
    typography: {
      fontFamily: {
        primary: '"Didot", "Playfair Display", ' + font.family.serif,
        secondary: '"Helvetica Neue", ' + font.family.default,
        display: '"Didot", ' + font.family.serif,
      },
      headerWeight: font.weight.regular,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1.2 },
    borderRadius: { sm: 0, md: 0, lg: 0 },
  },

  // ELLE - Elegant, minimalist, black/cream
  // Brand colors from API: #000000, #f5f5f4, #f0ede6
  elle: {
    id: 'elle',
    name: 'ELLE',
    colors: {
      primary: '#000000',      // brand.1 - Black
      secondary: '#f5f5f4',    // brand.2 - Off-white
      accent: '#f0ede6',       // brand.3 - Cream
      background: neutralColors.background,
      surface: '#f5f5f4',      // brand.2
      text: '#000000',
      textSecondary: neutralColors.textSecondary,
      headerBg: '#000000',
      headerText: baseColors.neutral.lightest,
      strapBg: '#000000',
      strapText: baseColors.neutral.lightest,
      link: '#000000',
      linkHover: baseColors.neutral[800],
      border: baseColors.neutral[300],
    },
    typography: {
      fontFamily: {
        primary: '"Didot", ' + font.family.serif,
        secondary: '"Helvetica Neue", ' + font.family.default,
        display: '"Didot", ' + font.family.serif,
      },
      headerWeight: font.weight.regular,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1.15 },
    borderRadius: { sm: 0, md: 0, lg: 0 },
  },

  // Delish - Fun, colorful, food-focused
  // Brand colors from API: #004685, #ffc035, #ff553e, #adcf21, #66cecf, #c6e9f0, #ebf7fc, #278090, #343434
  delish: {
    id: 'delish',
    name: 'Delish',
    colors: {
      primary: '#004685',      // brand.1 - Blue
      secondary: '#ffc035',    // brand.2 - Yellow
      accent: '#ff553e',       // brand.3 - Orange-red
      background: neutralColors.background,
      surface: '#ebf7fc',      // brand.7
      text: '#343434',         // brand.9
      textSecondary: neutralColors.textSecondary,
      headerBg: '#004685',     // brand.1
      headerText: baseColors.neutral.lightest,
      strapBg: '#ff553e',      // brand.3
      strapText: baseColors.neutral.lightest,
      link: '#004685',
      linkHover: '#278090',    // brand.8
      border: '#c6e9f0',       // brand.6
    },
    typography: {
      fontFamily: {
        primary: '"Proxima Nova", ' + font.family.default,
        secondary: font.family.serif,
        display: '"Proxima Nova", ' + font.family.default,
      },
      headerWeight: font.weight.heavy,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 8, md: 12, lg: 20 },
  },

  // Men's Health - Bold, athletic, red/yellow
  // Brand colors from API: #d2232e, #fff200, #202020, #696969, #878787
  mensHealth: {
    id: 'mensHealth',
    name: "Men's Health",
    colors: {
      primary: '#d2232e',      // brand.1 - Red
      secondary: '#fff200',    // brand.2 - Yellow
      accent: '#202020',       // brand.3 - Dark gray
      background: neutralColors.background,
      surface: neutralColors.surface,
      text: '#202020',         // brand.3
      textSecondary: '#696969', // brand.4
      headerBg: '#d2232e',     // brand.1
      headerText: baseColors.neutral.lightest,
      strapBg: '#d2232e',      // brand.1
      strapText: baseColors.neutral.lightest,
      link: '#d2232e',
      linkHover: '#a01a22',
      border: '#878787',       // brand.5
    },
    typography: {
      fontFamily: {
        primary: '"Trade Gothic", ' + font.family.default,
        secondary: font.family.serif,
        display: '"Trade Gothic Bold Condensed", ' + font.family.default,
      },
      headerWeight: font.weight.bold,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 0, md: border.radius.sm, lg: border.radius.md },
  },

  // Women's Health - Modern, energetic, blue/green
  // Brand colors from API: #1d4ed8, #ebff7c, #14b8a6, #e9d5ff, #f9a8d4, #ffedd5, #ef4444, #ec4899, #0d9488
  womensHealth: {
    id: 'womensHealth',
    name: "Women's Health",
    colors: {
      primary: '#1d4ed8',      // brand.1 - Blue
      secondary: '#ebff7c',    // brand.2 - Yellow-green
      accent: '#14b8a6',       // brand.3 - Teal
      background: neutralColors.background,
      surface: '#f8fafc',
      text: neutralColors.text,
      textSecondary: neutralColors.textSecondary,
      headerBg: '#1d4ed8',     // brand.1
      headerText: baseColors.neutral.lightest,
      strapBg: '#14b8a6',      // brand.3
      strapText: baseColors.neutral.lightest,
      link: '#1d4ed8',
      linkHover: '#0d9488',    // brand.9
      border: baseColors.neutral[300],
    },
    typography: {
      fontFamily: {
        primary: '"Proxima Nova", ' + font.family.default,
        secondary: font.family.serif,
        display: '"Proxima Nova", ' + font.family.default,
      },
      headerWeight: font.weight.bold,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: border.radius.sm, md: border.radius.md, lg: 16 },
  },

  // Popular Mechanics - Technical, teal/orange
  // Brand colors from API: #1c6a65, #f04e3e, #fef837, #595959, #414141, #ececec, #f8f8f8
  popularMechanics: {
    id: 'popularMechanics',
    name: 'Popular Mechanics',
    colors: {
      primary: '#1c6a65',      // brand.1 - Teal
      secondary: '#f04e3e',    // brand.2 - Orange-red
      accent: '#fef837',       // brand.3 - Yellow
      background: neutralColors.background,
      surface: '#f8f8f8',      // brand.7
      text: '#414141',         // brand.5
      textSecondary: '#595959', // brand.4
      headerBg: '#1c6a65',     // brand.1
      headerText: baseColors.neutral.lightest,
      strapBg: '#f04e3e',      // brand.2
      strapText: baseColors.neutral.lightest,
      link: '#1c6a65',
      linkHover: '#145550',
      border: '#ececec',       // brand.6
    },
    typography: {
      fontFamily: {
        primary: '"Roboto", ' + font.family.default,
        secondary: '"Roboto Slab", ' + font.family.serif,
        display: '"Roboto Condensed", ' + font.family.default,
      },
      headerWeight: font.weight.bold,
      bodyWeight: font.weight.regular,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 2, md: border.radius.sm, lg: border.radius.md },
  },
};

// Get all brand theme IDs
export const brandThemeIds = Object.keys(brandThemes);

// Get theme by ID with fallback to Car and Driver
export function getTheme(themeId: string): BrandTheme {
  return brandThemes[themeId] || brandThemes.carAndDriver;
}

// Default theme
export const defaultTheme = brandThemes.carAndDriver;

export default brandThemes;
