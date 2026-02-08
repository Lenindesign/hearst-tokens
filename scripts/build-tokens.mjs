/**
 * Build script: Transforms Token Studio JSON → CSS custom properties
 * 
 * Reads token files from /tokens directory and generates
 * src/app/tokens-generated.css with :root and [data-theme] blocks.
 * 
 * Usage: node scripts/build-tokens.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TOKENS_DIR = join(ROOT, 'tokens');
const OUTPUT_FILE = join(ROOT, 'src', 'app', 'tokens-generated.css');

// ============================================
// Brand configuration
// ============================================
const DEFAULT_BRAND = 'car-and-driver';

const BRANDS = [
  'car-and-driver',
  'esquire',
  'cosmopolitan',
  'good-housekeeping',
  'harpers-bazaar',
  'elle',
  'delish',
  'mens-health',
  'womens-health',
  'popular-mechanics',
];

// Next.js font variable prefixes — these get prepended to font-family values
// for Next.js font optimization. Only needed for fonts loaded via next/font.
const NEXT_FONT_MAP = {
  'Inter, -apple-system, BlinkMacSystemFont, sans-serif': 'var(--font-inter), ',
  'Lora, Georgia, serif': 'var(--font-lora), ',
  'Barlow Semi Condensed, -apple-system, sans-serif': 'var(--font-barlow-semi-condensed), ',
};

// ============================================
// Token file reader
// ============================================
function readTokenFile(name) {
  const filePath = join(TOKENS_DIR, `${name}.json`);
  if (!existsSync(filePath)) {
    console.error(`Token file not found: ${filePath}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

// ============================================
// CSS variable name mapping
// ============================================
// Maps Token Studio JSON structure → CSS variable names
// 
// Brand token files use grouping for Token Studio UI:
//   colors.background   → --background
//   brand.dark           → --brand-dark
//   typography.font-primary → --font-primary
//   component.radius     → --radius
//
function brandTokenToCSS(group, key) {
  switch (group) {
    case 'colors':
      return `--${key}`;
    case 'brand':
      return `--brand-${key}`;
    case 'typography':
      return `--${key}`;
    case 'component':
      return `--${key}`;
    default:
      return `--${group}-${key}`;
  }
}

// Generic CSS font families that should NOT be quoted
const GENERIC_FAMILIES = new Set([
  'serif', 'sans-serif', 'monospace', 'cursive', 'fantasy',
  'system-ui', 'ui-serif', 'ui-sans-serif', 'ui-monospace', 'ui-rounded',
  '-apple-system',
]);

// ============================================
// Font value processor
// ============================================
// Properly quotes multi-word font family names,
// then adds Next.js font variable prefix for optimized fonts
function processFontValue(value) {
  // First: quote multi-word font names in the stack
  const fonts = value.split(',').map(f => f.trim()).map(font => {
    if (font.startsWith('"') || font.startsWith("'")) return font;
    if (GENERIC_FAMILIES.has(font) || !font.includes(' ')) return font;
    return `"${font}"`;
  });
  const quoted = fonts.join(', ');

  // Then: add Next.js font variable prefix if applicable
  const prefix = NEXT_FONT_MAP[value];
  if (prefix) {
    return `${prefix}${quoted}`;
  }

  return quoted;
}

// ============================================
// Generate CSS for a brand token set
// ============================================
function generateBrandCSS(brandName, tokens) {
  const lines = [];

  for (const [group, groupTokens] of Object.entries(tokens)) {
    for (const [key, token] of Object.entries(groupTokens)) {
      const varName = brandTokenToCSS(group, key);
      let value = token.value;

      // Process font families — add Next.js variable prefix and quote multi-word names
      if (token.type === 'fontFamilies') {
        value = processFontValue(value);
      }

      lines.push(`  ${varName}: ${value};`);
    }
  }

  return lines.join('\n');
}

// ============================================
// Main build
// ============================================
function build() {
  console.log('Building CSS from design tokens...\n');

  const parts = [];

  // File header
  parts.push(`/* ============================================`);
  parts.push(`   AUTO-GENERATED — DO NOT EDIT MANUALLY`);
  parts.push(`   Generated from /tokens by build-tokens.mjs`);
  parts.push(`   Run: npm run build:tokens`);
  parts.push(`   ============================================ */\n`);

  // ---- DEFAULT THEME (:root) ----
  const defaultTokens = readTokenFile(DEFAULT_BRAND);
  parts.push(`/* ============================================`);
  parts.push(`   BASE/DEFAULT THEME (${DEFAULT_BRAND})`);
  parts.push(`   ============================================ */`);
  parts.push(`:root {`);
  parts.push(generateBrandCSS(DEFAULT_BRAND, defaultTokens));
  parts.push(`}\n`);

  // ---- NON-DEFAULT THEME OVERRIDE ----
  // Non-Car-and-Driver themes get a larger article card title by default
  // This is handled per-brand (each brand file has article-card-title-size: 22px)

  // ---- BRAND THEMES ----
  for (const brand of BRANDS) {
    if (brand === DEFAULT_BRAND) continue;

    const tokens = readTokenFile(brand);
    const displayName = brand
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    parts.push(`/* ============================================`);
    parts.push(`   ${displayName.toUpperCase()} THEME`);
    parts.push(`   ============================================ */`);
    parts.push(`[data-theme="${brand}"] {`);
    parts.push(generateBrandCSS(brand, tokens));
    parts.push(`}\n`);
  }

  // Write output
  const css = parts.join('\n') + '\n';
  writeFileSync(OUTPUT_FILE, css);

  console.log(`✓ Generated ${OUTPUT_FILE}`);
  console.log(`  Brands: ${BRANDS.length}`);
  console.log(`  Default: ${DEFAULT_BRAND}\n`);
}

build();
