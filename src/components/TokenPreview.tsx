'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * TokenPreview Component
 * 
 * A compact preview of the Hearst Design System tokens
 * for embedding in the homepage above the footer.
 */

// Design tokens
const tokens = {
  colors: {
    text: '#121212',
    textSecondary: '#757575',
    textMuted: '#bdbdbd',
    background: '#f5f5f5',
    surface: '#ffffff',
    border: '#e0e0e0',
    primary: '#0d58c9',
    primaryHover: '#063c98',
  },
  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
  },
  font: {
    family: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
  },
};

// Color palette data (subset for preview)
const colorPalettes = {
  gray: [
    { name: '7', value: '#121212' },
    { name: '23', value: '#3b3b3b' },
    { name: '46', value: '#757575' },
    { name: '74', value: '#bdbdbd' },
    { name: '93', value: '#ededed' },
    { name: '100', value: '#ffffff' },
  ],
  blue: [
    { name: '16', value: '#041d4e' },
    { name: '31', value: '#063c98' },
    { name: '42', value: '#0d58c9' },
    { name: '60', value: '#3689fc' },
    { name: '83', value: '#aad1fd' },
    { name: '97', value: '#f0f7ff' },
  ],
  red: [
    { name: '27', value: '#7c110e' },
    { name: '48', value: '#cc2828' },
    { name: '63', value: '#f4504e' },
    { name: '82', value: '#fea8a5' },
    { name: '92', value: '#fed7d7' },
    { name: '96', value: '#feecec' },
  ],
  green: [
    { name: '17', value: '#0a4d33' },
    { name: '27', value: '#088153' },
    { name: '39', value: '#1bac72' },
    { name: '66', value: '#71e0b0' },
    { name: '85', value: '#bcf5da' },
    { name: '93', value: '#defdeb' },
  ],
};

// Spacing scale data
const spacingScale = [
  { name: 'none', value: '0px' },
  { name: '3xs', value: '2px' },
  { name: '2xs', value: '4px' },
  { name: 'xs', value: '8px' },
  { name: 'sm', value: '12px' },
  { name: 'md', value: '16px' },
  { name: 'lg', value: '20px' },
  { name: 'xl', value: '24px' },
  { name: '2xl', value: '32px' },
  { name: '3xl', value: '48px' },
];

// Typography scale data
const typographyScale = [
  { name: '3xs', size: '12px', lineHeight: '16px' },
  { name: 'xs', size: '14px', lineHeight: '16px' },
  { name: 'md', size: '16px', lineHeight: '20px' },
  { name: 'xl', size: '20px', lineHeight: '24px' },
  { name: '3xl', size: '28px', lineHeight: '32px' },
  { name: '5xl', size: '48px', lineHeight: '52px' },
];

// Color Swatch Component
function ColorSwatch({ name, value }: { name: string; value: string }) {
  const isLight = value === '#ffffff' || value === '#f0f7ff' || value === '#feecec' || value === '#defdeb' || value.includes('fd') || value.includes('f5');
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          backgroundColor: value,
          borderRadius: 8,
          border: isLight ? '1px solid #e0e0e0' : 'none',
        }}
      />
      <span
        style={{
          fontSize: 11,
          color: tokens.colors.textSecondary,
          fontFamily: tokens.font.family,
        }}
      >
        {name}
      </span>
    </div>
  );
}

// Section Header Component
function SectionHeader({ title }: { title: string }) {
  return (
    <h3
      style={{
        fontSize: 14,
        fontWeight: 600,
        color: tokens.colors.text,
        fontFamily: tokens.font.family,
        marginBottom: tokens.spacing.sm,
        textTransform: 'uppercase',
        letterSpacing: 1,
      }}
    >
      {title}
    </h3>
  );
}

// Main TokenPreview Component
export function TokenPreview() {
  const [activeTab, setActiveTab] = useState<'colors' | 'spacing' | 'typography'>('colors');

  return (
    <section
      style={{
        backgroundColor: tokens.colors.background,
        padding: `${tokens.spacing['2xl']}px ${tokens.spacing.lg}px`,
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: tokens.spacing.xl,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: tokens.colors.text,
                fontFamily: tokens.font.family,
                marginBottom: 4,
              }}
            >
              Design System Tokens
            </h2>
            <p
              style={{
                fontSize: 14,
                color: tokens.colors.textSecondary,
                fontFamily: tokens.font.family,
              }}
            >
              Explore the Hearst Design System primitives and semantic tokens
            </p>
          </div>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: `${tokens.spacing.xs}px ${tokens.spacing.md}px`,
              backgroundColor: tokens.colors.primary,
              color: '#ffffff',
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 500,
              fontFamily: tokens.font.family,
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
          >
            View Full Token Library
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: 4,
            marginBottom: tokens.spacing.lg,
            borderBottom: `1px solid ${tokens.colors.border}`,
            paddingBottom: tokens.spacing.xs,
          }}
        >
          {(['colors', 'spacing', 'typography'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: `${tokens.spacing.xs}px ${tokens.spacing.md}px`,
                backgroundColor: activeTab === tab ? tokens.colors.text : 'transparent',
                color: activeTab === tab ? '#ffffff' : tokens.colors.textSecondary,
                border: 'none',
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: tokens.font.family,
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.2s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            backgroundColor: tokens.colors.surface,
            borderRadius: 12,
            padding: tokens.spacing.lg,
            border: `1px solid ${tokens.colors.border}`,
          }}
        >
          {/* Colors Tab */}
          {activeTab === 'colors' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: tokens.spacing.xl,
              }}
            >
              {Object.entries(colorPalettes).map(([paletteName, colors]) => (
                <div key={paletteName}>
                  <SectionHeader title={paletteName} />
                  <div
                    style={{
                      display: 'flex',
                      gap: tokens.spacing.sm,
                      flexWrap: 'wrap',
                    }}
                  >
                    {colors.map((color) => (
                      <ColorSwatch key={color.name} name={color.name} value={color.value} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Spacing Tab */}
          {activeTab === 'spacing' && (
            <div>
              <SectionHeader title="Spacing Scale" />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: tokens.spacing.md,
                  flexWrap: 'wrap',
                }}
              >
                {spacingScale.map((space) => (
                  <div
                    key={space.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: parseInt(space.value) || 4,
                        height: 48,
                        backgroundColor: tokens.colors.primary,
                        borderRadius: 4,
                        minWidth: 4,
                      }}
                    />
                    <div
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: tokens.colors.text,
                          fontFamily: tokens.font.family,
                        }}
                      >
                        {space.name}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: tokens.colors.textSecondary,
                          fontFamily: tokens.font.family,
                        }}
                      >
                        {space.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typography Tab */}
          {activeTab === 'typography' && (
            <div>
              <SectionHeader title="Type Scale" />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: tokens.spacing.md,
                }}
              >
                {typographyScale.map((type) => (
                  <div
                    key={type.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: tokens.spacing.lg,
                      paddingBottom: tokens.spacing.sm,
                      borderBottom: `1px solid ${tokens.colors.border}`,
                    }}
                  >
                    <div
                      style={{
                        width: 60,
                        fontSize: 12,
                        color: tokens.colors.textSecondary,
                        fontFamily: tokens.font.family,
                      }}
                    >
                      {type.name}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        fontSize: parseInt(type.size),
                        lineHeight: type.lineHeight,
                        fontWeight: 500,
                        color: tokens.colors.text,
                        fontFamily: tokens.font.family,
                      }}
                    >
                      The quick brown fox
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: tokens.colors.textMuted,
                        fontFamily: 'monospace',
                      }}
                    >
                      {type.size} / {type.lineHeight}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
