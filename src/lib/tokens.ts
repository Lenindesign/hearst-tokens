// Design Tokens Library
export const TOKENS_URL = 'https://figma-connector.kubeprod.hearstapps.com/token-studio/tokens';

export interface TokenValue {
  value: string | number | Record<string, string>;
  type: string;
}

export interface TokenData {
  values: Record<string, Record<string, unknown>>;
}

// Fetch tokens from the API
export async function fetchTokens(): Promise<TokenData> {
  const response = await fetch(TOKENS_URL, { next: { revalidate: 3600 } });
  if (!response.ok) {
    throw new Error('Failed to fetch tokens');
  }
  return response.json();
}

// Flatten nested token objects into a flat structure
export function flattenTokens(
  obj: Record<string, unknown>,
  prefix = ''
): Record<string, TokenValue> {
  const result: Record<string, TokenValue> = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (value && typeof value === 'object' && 'value' in value && 'type' in value) {
      result[newKey] = value as TokenValue;
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flattenTokens(value as Record<string, unknown>, newKey));
    }
  }

  return result;
}

// Get color tokens
export function getColorTokens(tokens: Record<string, TokenValue>): Record<string, TokenValue> {
  return Object.fromEntries(
    Object.entries(tokens).filter(([_, v]) => v.type === 'color')
  );
}

// Get dimension tokens
export function getDimensionTokens(tokens: Record<string, TokenValue>): Record<string, TokenValue> {
  return Object.fromEntries(
    Object.entries(tokens).filter(([_, v]) => v.type === 'dimension')
  );
}

// Get font tokens
export function getFontTokens(tokens: Record<string, TokenValue>): Record<string, TokenValue> {
  return Object.fromEntries(
    Object.entries(tokens).filter(([_, v]) => 
      v.type === 'fontFamilies' || 
      v.type === 'fontSizes' || 
      v.type === 'fontWeights' ||
      v.type === 'lineHeights' ||
      v.type === 'letterSpacing'
    )
  );
}

// Get typography tokens
export function getTypographyTokens(tokens: Record<string, TokenValue>): Record<string, TokenValue> {
  return Object.fromEntries(
    Object.entries(tokens).filter(([_, v]) => v.type === 'typography')
  );
}

// Get opacity tokens
export function getOpacityTokens(tokens: Record<string, TokenValue>): Record<string, TokenValue> {
  return Object.fromEntries(
    Object.entries(tokens).filter(([_, v]) => v.type === 'opacity')
  );
}

// Convert token name to CSS variable name
export function tokenToCssVar(tokenName: string): string {
  return `--${tokenName.replace(/\./g, '-').replace(/\s/g, '-').toLowerCase()}`;
}

// Get contrast color for text readability
export function getContrastColor(hexColor: string): string {
  if (!hexColor || !hexColor.startsWith('#')) return '#000000';
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

// Brand configurations
export const BRANDS = [
  'White Label',
  'Autoweek',
  'Best Products',
  'Bicycling',
] as const;

export type Brand = typeof BRANDS[number];
