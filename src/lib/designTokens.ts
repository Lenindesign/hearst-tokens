/**
 * Hearst Design System Tokens
 * 
 * This file contains resolved design tokens from the Hearst Design System API.
 * Source: https://figma-connector.kubeprod.hearstapps.com/token-studio/tokens
 * 
 * These tokens are organized by category and can be imported into any component.
 * For brand-specific tokens, use the brand objects (e.g., brands.carAndDriver).
 */

// =============================================================================
// PRIMITIVES - Base values that alias tokens reference
// =============================================================================

export const primitives = {
  palette: {
    gray: {
      7: '#121212',
      11: '#1c1c1c',
      16: '#292929',
      23: '#3b3b3b',
      34: '#575757',
      46: '#757575',
      58: '#949494',
      74: '#bdbdbd',
      84: '#d6d6d6',
      93: '#ededed',
      96: '#f5f5f5',
      100: '#ffffff',
    },
    blue: {
      9: '#03112b',
      16: '#041d4e',
      23: '#052b70',
      31: '#063c98',
      42: '#0d58c9',
      60: '#3689fc',
      69: '#63a8fd',
      83: '#aad1fd',
      92: '#d7e9fe',
      97: '#f0f7ff',
    },
    red: {
      12: '#360807',
      19: '#580a09',
      27: '#7c110e',
      38: '#a81a1f',
      48: '#cc2828',
      63: '#f4504e',
      73: '#fc7d79',
      82: '#fea8a5',
      92: '#fed7d7',
      96: '#feecec',
    },
    green: {
      8: '#052416',
      11: '#063221',
      17: '#0a4d33',
      22: '#086843',
      27: '#088153',
      39: '#1bac72',
      46: '#29c287',
      66: '#71e0b0',
      85: '#bcf5da',
      93: '#defdeb',
    },
    orange: {
      13: '#392009',
      18: '#542f08',
      24: '#723a08',
      34: '#a1520c',
      45: '#d06d16',
      55: '#f28c26',
      63: '#faa747',
      74: '#fec57c',
      88: '#ffe3c2',
      93: '#fff1db',
    },
    yellow: {
      11: '#382b00',
      16: '#523a00',
      23: '#755000',
      29: '#946500',
      37: '#bd8400',
      43: '#db9d00',
      50: '#f0b80f',
      71: '#fbd570',
      83: '#fdecaa',
      90: '#fdf7ce',
    },
  },
  font: {
    family: {
      macDefault: 'SF Pro',
      windows: 'Segoe UI',
      international: 'Microsoft YaHei',
    },
  },
  size: {
    0: 0,
    1: 1,
    2: 2,
    4: 4,
    6: 6,
    8: 8,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    17: 17,
    18: 18,
    20: 20,
    24: 24,
    28: 28,
    32: 32,
    36: 36,
    40: 40,
    44: 44,
    48: 48,
    52: 52,
    56: 56,
    60: 60,
    64: 64,
    72: 72,
    80: 80,
    96: 96,
    128: 128,
    192: 192,
    224: 224,
    256: 256,
    320: 320,
    384: 384,
    512: 512,
    768: 768,
    1024: 1024,
    1280: 1280,
    1440: 1440,
    1600: 1600,
  },
  opacity: {
    0: 0,
    4: 0.04,
    8: 0.08,
    12: 0.12,
    16: 0.16,
    24: 0.24,
    32: 0.32,
    48: 0.48,
    64: 0.64,
    72: 0.72,
    80: 0.80,
    88: 0.88,
    96: 0.96,
    100: 1,
  },
} as const;

// =============================================================================
// COLORS - Semantic color tokens (resolved from primitives)
// =============================================================================

export const colors = {
  neutral: {
    100: primitives.palette.gray[96],  // #f5f5f5
    200: primitives.palette.gray[93],  // #ededed
    300: primitives.palette.gray[84],  // #d6d6d6
    400: primitives.palette.gray[74],  // #bdbdbd
    500: primitives.palette.gray[58],  // #949494
    600: primitives.palette.gray[46],  // #757575
    700: primitives.palette.gray[34],  // #575757
    800: primitives.palette.gray[23],  // #3b3b3b
    900: primitives.palette.gray[16],  // #292929
    1000: primitives.palette.gray[11], // #1c1c1c
    lightest: primitives.palette.gray[100], // #ffffff
    darkest: primitives.palette.gray[7],    // #121212
  },
  // Brand colors from token system
  brand: {
    1: '#1d4ed8',   // Primary blue
    2: '#ebff7c',   // Yellow-green accent
    3: '#14b8a6',   // Teal
    4: '#e9d5ff',   // Light purple
    5: '#f9a8d4',   // Pink
    6: '#ffedd5',   // Light orange
    7: '#ef4444',   // Red
    8: '#ec4899',   // Magenta
    9: '#0d9488',   // Dark teal
    10: '#ffffff',  // White
    11: '#ffffff',
    12: '#ffffff',
    13: '#ffffff',
    14: '#ffffff',
  },
  // Primary color scale (based on brand.1 blue)
  primary: {
    100: '#f0f7ff',
    200: '#d7e9fe',
    300: '#aad1fd',
    400: '#63a8fd',
    500: '#3689fc',
    600: '#1d4ed8',  // brand.1
    700: '#063c98',
    800: '#052b70',
    900: '#041d4e',
    1000: '#03112b',
  },
  // Content colors (semantic)
  content: {
    default: primitives.palette.gray[7],      // #121212
    defaultHover: primitives.palette.gray[7],
    defaultActive: primitives.palette.gray[7],
    brand: '#1d4ed8',       // primary.600
    brandHover: '#1d4ed8',
    brandActive: '#1d4ed8',
    onBrand: primitives.palette.gray[100],    // #ffffff
    defaultSubtle: primitives.palette.gray[74], // #bdbdbd
  },
  // Danger/Error colors
  danger: {
    100: '#feecec',
    200: '#fed7d7',
    300: '#fea8a5',
    400: '#fc7d79',
    500: '#f4504e',
    600: '#cc2828',
    700: '#a81a1f',
    800: '#7c110e',
    900: '#580a09',
    1000: '#360807',
  },
  alert: {
    success: {
      100: primitives.palette.green[93],
      200: primitives.palette.green[85],
      300: primitives.palette.green[66],
      400: primitives.palette.green[46],
      500: primitives.palette.green[39],
      600: primitives.palette.green[27],
      700: primitives.palette.green[22],
      800: primitives.palette.green[17],
      900: primitives.palette.green[11],
      1000: primitives.palette.green[8],
    },
    warning: {
      100: primitives.palette.orange[93],
      200: primitives.palette.orange[88],
      300: primitives.palette.orange[74],
      400: primitives.palette.orange[63],
      500: primitives.palette.orange[55],
      600: primitives.palette.orange[45],
      700: primitives.palette.orange[34],
      800: primitives.palette.orange[24],
      900: primitives.palette.orange[18],
      1000: primitives.palette.orange[13],
    },
    error: {
      100: primitives.palette.red[96],
      200: primitives.palette.red[92],
      300: primitives.palette.red[82],
      400: primitives.palette.red[73],
      500: primitives.palette.red[63],
      600: primitives.palette.red[48],
      700: primitives.palette.red[38],
      800: primitives.palette.red[27],
      900: primitives.palette.red[19],
      1000: primitives.palette.red[12],
    },
    info: {
      100: primitives.palette.blue[97],
      200: primitives.palette.blue[92],
      300: primitives.palette.blue[83],
      400: primitives.palette.blue[69],
      500: primitives.palette.blue[60],
      600: primitives.palette.blue[42],
      700: primitives.palette.blue[31],
      800: primitives.palette.blue[23],
      900: primitives.palette.blue[16],
      1000: primitives.palette.blue[9],
    },
  },
} as const;

// =============================================================================
// SPACING - Consistent spacing scale
// =============================================================================

export const spacing = {
  none: 0,
  '3xs': 2,
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
  '4xl': 64,
} as const;

// =============================================================================
// LAYOUT - Container and component widths
// =============================================================================

export const layout = {
  '5xs': 128,
  '4xs': 128,
  '3xs': 192,
  '2xs': 224,
  xs: 256,
  sm: 320,
  md: 384,
  lg: 512,
  xl: 768,
  '2xl': 1024,
  '3xl': 1280,
  '4xl': 1600,
} as const;

// =============================================================================
// BREAKPOINTS - Responsive design breakpoints
// =============================================================================

export const breakpoints = {
  sm: 320,
  md: 768,
  lg: 1024,
  xl: 1440,
  '2xl': 1600,
} as const;

// =============================================================================
// TYPOGRAPHY - Font settings
// =============================================================================

export const font = {
  family: {
    default: '-apple-system, BlinkMacSystemFont, "SF Pro", "Segoe UI", Roboto, sans-serif',
    sansSerif: '-apple-system, BlinkMacSystemFont, "SF Pro", "Segoe UI", Roboto, sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
    mono: 'SF Mono, Monaco, Consolas, monospace',
  },
  size: {
    '3xs': 12,
    '2xs': 13,
    xs: 14,
    sm: 15,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 48,
    '6xl': 64,
    '7xl': 80,
    '8xl': 96,
    '9xl': 128,
  },
  weight: {
    ultraLight: 100,
    thin: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
    black: 900,
  },
  lineHeight: {
    '3xs': 16,
    '2xs': 16,
    xs: 16,
    sm: 16,
    md: 20,
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
    '4xl': 36,
    '5xl': 52,
    '6xl': 72,
    '7xl': 88,
    '8xl': 100,
    '9xl': 128,
  },
  letterSpacing: {
    '3xs': 0.05,
    '2xs': 0.04,
    xs: 0.03,
    sm: 0.2,
    md: 0,
    lg: -0.1,
    xl: -0.2,
    '2xl': -0.3,
    '3xl': -0.4,
    '4xl': -0.5,
    '5xl': -0.6,
    '6xl': -0.8,
    '7xl': -1,
    '8xl': -1.1,
    '9xl': -1.2,
  },
} as const;

// =============================================================================
// TYPOGRAPHY PRESETS - Common text style combinations
// =============================================================================

export const typography = {
  // Display styles (large headlines)
  display: {
    lg: {
      fontFamily: font.family.default,
      fontSize: font.size['6xl'],
      fontWeight: font.weight.bold,
      lineHeight: `${font.lineHeight['6xl']}px`,
      letterSpacing: font.letterSpacing['6xl'],
    },
    md: {
      fontFamily: font.family.default,
      fontSize: font.size['5xl'],
      fontWeight: font.weight.bold,
      lineHeight: `${font.lineHeight['5xl']}px`,
      letterSpacing: font.letterSpacing['5xl'],
    },
    sm: {
      fontFamily: font.family.default,
      fontSize: font.size['4xl'],
      fontWeight: font.weight.bold,
      lineHeight: `${font.lineHeight['4xl']}px`,
      letterSpacing: font.letterSpacing['4xl'],
    },
  },
  // Heading styles
  heading: {
    xl: {
      fontFamily: font.family.default,
      fontSize: font.size['3xl'],
      fontWeight: font.weight.bold,
      lineHeight: `${font.lineHeight['3xl']}px`,
      letterSpacing: font.letterSpacing['3xl'],
    },
    lg: {
      fontFamily: font.family.default,
      fontSize: font.size['2xl'],
      fontWeight: font.weight.bold,
      lineHeight: `${font.lineHeight['2xl']}px`,
      letterSpacing: font.letterSpacing['2xl'],
    },
    md: {
      fontFamily: font.family.default,
      fontSize: font.size.xl,
      fontWeight: font.weight.semibold,
      lineHeight: `${font.lineHeight.xl}px`,
      letterSpacing: font.letterSpacing.xl,
    },
    sm: {
      fontFamily: font.family.default,
      fontSize: font.size.lg,
      fontWeight: font.weight.semibold,
      lineHeight: `${font.lineHeight.lg}px`,
      letterSpacing: font.letterSpacing.lg,
    },
  },
  // Body text styles
  body: {
    lg: {
      fontFamily: font.family.default,
      fontSize: font.size.lg,
      fontWeight: font.weight.regular,
      lineHeight: `${font.lineHeight.lg}px`,
      letterSpacing: font.letterSpacing.md,
    },
    md: {
      fontFamily: font.family.default,
      fontSize: font.size.md,
      fontWeight: font.weight.regular,
      lineHeight: `${font.lineHeight.md}px`,
      letterSpacing: font.letterSpacing.md,
    },
    sm: {
      fontFamily: font.family.default,
      fontSize: font.size.sm,
      fontWeight: font.weight.regular,
      lineHeight: `${font.lineHeight.sm}px`,
      letterSpacing: font.letterSpacing.sm,
    },
  },
  // Caption/label styles
  caption: {
    md: {
      fontFamily: font.family.default,
      fontSize: font.size.xs,
      fontWeight: font.weight.regular,
      lineHeight: `${font.lineHeight.xs}px`,
      letterSpacing: font.letterSpacing.xs,
    },
    sm: {
      fontFamily: font.family.default,
      fontSize: font.size['2xs'],
      fontWeight: font.weight.regular,
      lineHeight: `${font.lineHeight['2xs']}px`,
      letterSpacing: font.letterSpacing['2xs'],
    },
  },
  // Button text
  button: {
    lg: {
      fontFamily: font.family.default,
      fontSize: font.size.md,
      fontWeight: font.weight.medium,
      lineHeight: `${font.lineHeight.md}px`,
      letterSpacing: font.letterSpacing.md,
    },
    md: {
      fontFamily: font.family.default,
      fontSize: font.size.sm,
      fontWeight: font.weight.medium,
      lineHeight: `${font.lineHeight.sm}px`,
      letterSpacing: font.letterSpacing.sm,
    },
    sm: {
      fontFamily: font.family.default,
      fontSize: font.size.xs,
      fontWeight: font.weight.medium,
      lineHeight: `${font.lineHeight.xs}px`,
      letterSpacing: font.letterSpacing.xs,
    },
  },
} as const;

// =============================================================================
// BORDERS
// =============================================================================

export const border = {
  radius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
  },
  width: {
    none: 0,
    thin: 1,
    medium: 2,
    thick: 4,
  },
} as const;

// =============================================================================
// SHADOWS / ELEVATION
// =============================================================================

export const elevation = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
} as const;

// =============================================================================
// Z-INDEX
// =============================================================================

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

// =============================================================================
// COMBINED TOKENS OBJECT - For easy access to all tokens
// =============================================================================

export const tokens = {
  primitives,
  colors,
  spacing,
  layout,
  breakpoints,
  font,
  typography,
  border,
  elevation,
  zIndex,
} as const;

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type Primitives = typeof primitives;
export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Layout = typeof layout;
export type Breakpoints = typeof breakpoints;
export type Font = typeof font;
export type Typography = typeof typography;
export type Border = typeof border;
export type Elevation = typeof elevation;
export type ZIndex = typeof zIndex;
export type Tokens = typeof tokens;

// Default export
export default tokens;
