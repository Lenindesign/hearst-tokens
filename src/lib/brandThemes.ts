/**
 * Hearst Brand Themes
 * 
 * This file contains theme configurations for all Hearst brands.
 * Each theme includes colors, typography, and spacing customizations.
 * 
 * Source: https://figma-connector.kubeprod.hearstapps.com/token-studio/tokens
 */

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

// Base theme that all brands extend from
const baseTheme = {
  typography: {
    fontFamily: {
      primary: '-apple-system, BlinkMacSystemFont, "SF Pro", "Segoe UI", Roboto, sans-serif',
      secondary: 'Georgia, "Times New Roman", serif',
      display: '-apple-system, BlinkMacSystemFont, "SF Pro", "Segoe UI", Roboto, sans-serif',
    },
    headerWeight: 700,
    bodyWeight: 400,
  },
  spacing: {
    scale: 1,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
  },
};

export const brandThemes: Record<string, BrandTheme> = {
  // Car and Driver - Automotive focus, blue/gray palette
  carAndDriver: {
    id: 'carAndDriver',
    name: 'Car and Driver',
    colors: {
      primary: '#d22329',      // Red accent
      secondary: '#1c5f8b',    // Dark blue
      accent: '#6abd45',       // Green
      background: '#ffffff',
      surface: '#f5f5f5',
      text: '#121212',
      textSecondary: '#757575',
      headerBg: '#ededed',
      headerText: '#121212',
      strapBg: '#d22329',
      strapText: '#ffffff',
      link: '#1c5f8b',
      linkHover: '#0d58c9',
      border: '#d6d6d6',
    },
    typography: {
      fontFamily: {
        primary: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        secondary: 'Georgia, serif',
        display: '"Barlow Condensed", -apple-system, sans-serif',
      },
      headerWeight: 700,
      bodyWeight: 400,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 0, md: 0, lg: 0 },
  },

  // Cosmopolitan - Bold, feminine, pink/red
  cosmopolitan: {
    id: 'cosmopolitan',
    name: 'Cosmopolitan',
    colors: {
      primary: '#d70000',      // Cosmo red
      secondary: '#F6D3E5',    // Pink
      accent: '#ff69b4',       // Hot pink
      background: '#ffffff',
      surface: '#fef7f9',
      text: '#1a1a1a',
      textSecondary: '#666666',
      headerBg: '#d70000',
      headerText: '#ffffff',
      strapBg: '#d70000',
      strapText: '#ffffff',
      link: '#d70000',
      linkHover: '#a00000',
      border: '#f0d4dc',
    },
    typography: {
      fontFamily: {
        primary: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        secondary: 'Georgia, serif',
        display: '"Playfair Display", Georgia, serif',
      },
      headerWeight: 700,
      bodyWeight: 400,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 4, md: 8, lg: 16 },
  },

  // Esquire - Sophisticated, masculine, navy/orange
  esquire: {
    id: 'esquire',
    name: 'Esquire',
    colors: {
      primary: '#15263d',      // Navy
      secondary: '#ff3a30',    // Orange-red
      accent: '#ff5a52',       // Coral
      background: '#ffffff',
      surface: '#f5f6f8',
      text: '#161616',
      textSecondary: '#515150',
      headerBg: '#15263d',
      headerText: '#ffffff',
      strapBg: '#ff3a30',
      strapText: '#ffffff',
      link: '#15263d',
      linkHover: '#ff3a30',
      border: '#ececec',
    },
    typography: {
      fontFamily: {
        primary: '"Chronicle SSm", Georgia, serif',
        secondary: '"Decimal", -apple-system, sans-serif',
        display: '"Chronicle Display", Georgia, serif',
      },
      headerWeight: 600,
      bodyWeight: 400,
    },
    spacing: { scale: 1.1 },
    borderRadius: { sm: 0, md: 0, lg: 0 },
  },

  // Good Housekeeping - Trustworthy, teal/red
  goodHousekeeping: {
    id: 'goodHousekeeping',
    name: 'Good Housekeeping',
    colors: {
      primary: '#198294',      // Teal
      secondary: '#53c2be',    // Light teal
      accent: '#d24432',       // Red accent
      background: '#ffffff',
      surface: '#f8f3f4',
      text: '#125c68',
      textSecondary: '#666666',
      headerBg: '#198294',
      headerText: '#ffffff',
      strapBg: '#d24432',
      strapText: '#ffffff',
      link: '#198294',
      linkHover: '#125c68',
      border: '#e0e0e0',
    },
    typography: {
      fontFamily: {
        primary: '"Proxima Nova", -apple-system, sans-serif',
        secondary: 'Georgia, serif',
        display: '"Proxima Nova", -apple-system, sans-serif',
      },
      headerWeight: 700,
      bodyWeight: 400,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 4, md: 8, lg: 12 },
  },

  // Harper's BAZAAR - High fashion, black/red
  harpersBazaar: {
    id: 'harpersBazaar',
    name: "Harper's BAZAAR",
    colors: {
      primary: '#000000',      // Black
      secondary: '#aa0703',    // Deep red
      accent: '#ff0000',       // Red
      background: '#ffffff',
      surface: '#fafafa',
      text: '#000000',
      textSecondary: '#77747b',
      headerBg: '#000000',
      headerText: '#ffffff',
      strapBg: '#aa0703',
      strapText: '#ffffff',
      link: '#000000',
      linkHover: '#aa0703',
      border: '#e0e0e0',
    },
    typography: {
      fontFamily: {
        primary: '"Didot", "Playfair Display", Georgia, serif',
        secondary: '"Helvetica Neue", sans-serif',
        display: '"Didot", Georgia, serif',
      },
      headerWeight: 400,
      bodyWeight: 400,
    },
    spacing: { scale: 1.2 },
    borderRadius: { sm: 0, md: 0, lg: 0 },
  },

  // ELLE - Elegant, minimalist, black/cream
  elle: {
    id: 'elle',
    name: 'ELLE',
    colors: {
      primary: '#000000',      // Black
      secondary: '#f5f5f4',    // Off-white
      accent: '#f0ede6',       // Cream
      background: '#ffffff',
      surface: '#f5f5f4',
      text: '#000000',
      textSecondary: '#666666',
      headerBg: '#000000',
      headerText: '#ffffff',
      strapBg: '#000000',
      strapText: '#ffffff',
      link: '#000000',
      linkHover: '#333333',
      border: '#e5e5e5',
    },
    typography: {
      fontFamily: {
        primary: '"Didot", Georgia, serif',
        secondary: '"Helvetica Neue", sans-serif',
        display: '"Didot", Georgia, serif',
      },
      headerWeight: 400,
      bodyWeight: 400,
    },
    spacing: { scale: 1.15 },
    borderRadius: { sm: 0, md: 0, lg: 0 },
  },

  // Delish - Fun, colorful, food-focused
  delish: {
    id: 'delish',
    name: 'Delish',
    colors: {
      primary: '#004685',      // Blue
      secondary: '#ffc035',    // Yellow
      accent: '#ff553e',       // Orange-red
      background: '#ffffff',
      surface: '#ebf7fc',
      text: '#343434',
      textSecondary: '#666666',
      headerBg: '#004685',
      headerText: '#ffffff',
      strapBg: '#ff553e',
      strapText: '#ffffff',
      link: '#004685',
      linkHover: '#278090',
      border: '#c6e9f0',
    },
    typography: {
      fontFamily: {
        primary: '"Proxima Nova", -apple-system, sans-serif',
        secondary: 'Georgia, serif',
        display: '"Proxima Nova", -apple-system, sans-serif',
      },
      headerWeight: 800,
      bodyWeight: 400,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 8, md: 12, lg: 20 },
  },

  // Men's Health - Bold, athletic, red/yellow
  mensHealth: {
    id: 'mensHealth',
    name: "Men's Health",
    colors: {
      primary: '#d2232e',      // Red
      secondary: '#fff200',    // Yellow
      accent: '#202020',       // Dark gray
      background: '#ffffff',
      surface: '#f5f5f5',
      text: '#202020',
      textSecondary: '#696969',
      headerBg: '#d2232e',
      headerText: '#ffffff',
      strapBg: '#d2232e',
      strapText: '#ffffff',
      link: '#d2232e',
      linkHover: '#a01a22',
      border: '#878787',
    },
    typography: {
      fontFamily: {
        primary: '"Trade Gothic", -apple-system, sans-serif',
        secondary: 'Georgia, serif',
        display: '"Trade Gothic Bold Condensed", -apple-system, sans-serif',
      },
      headerWeight: 700,
      bodyWeight: 400,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 0, md: 4, lg: 8 },
  },

  // Women's Health - Modern, energetic, blue/green
  womensHealth: {
    id: 'womensHealth',
    name: "Women's Health",
    colors: {
      primary: '#1d4ed8',      // Blue
      secondary: '#ebff7c',    // Yellow-green
      accent: '#14b8a6',       // Teal
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      headerBg: '#1d4ed8',
      headerText: '#ffffff',
      strapBg: '#14b8a6',
      strapText: '#ffffff',
      link: '#1d4ed8',
      linkHover: '#1e40af',
      border: '#e2e8f0',
    },
    typography: {
      fontFamily: {
        primary: '"Proxima Nova", -apple-system, sans-serif',
        secondary: 'Georgia, serif',
        display: '"Proxima Nova", -apple-system, sans-serif',
      },
      headerWeight: 700,
      bodyWeight: 400,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 4, md: 8, lg: 16 },
  },

  // Popular Mechanics - Technical, teal/orange
  popularMechanics: {
    id: 'popularMechanics',
    name: 'Popular Mechanics',
    colors: {
      primary: '#1c6a65',      // Teal
      secondary: '#f04e3e',    // Orange-red
      accent: '#fef837',       // Yellow
      background: '#ffffff',
      surface: '#f8f8f8',
      text: '#414141',
      textSecondary: '#595959',
      headerBg: '#1c6a65',
      headerText: '#ffffff',
      strapBg: '#f04e3e',
      strapText: '#ffffff',
      link: '#1c6a65',
      linkHover: '#145550',
      border: '#ececec',
    },
    typography: {
      fontFamily: {
        primary: '"Roboto", -apple-system, sans-serif',
        secondary: '"Roboto Slab", Georgia, serif',
        display: '"Roboto Condensed", -apple-system, sans-serif',
      },
      headerWeight: 700,
      bodyWeight: 400,
    },
    spacing: { scale: 1 },
    borderRadius: { sm: 2, md: 4, lg: 8 },
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
