'use client';

import { colors, spacing, font, typography, border } from '@/lib/designTokens';

// Typography Sample Component
interface TypeSampleProps {
  name: string;
  style: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
  };
  tokenPath: string;
}

function TypeSample({ name, style, tokenPath }: TypeSampleProps) {
  return (
    <div
      style={{
        padding: spacing.lg,
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.md,
        border: `1px solid ${colors.neutral[300]}`,
        marginBottom: spacing.md,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.md }}>
        <div>
          <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, margin: 0 }}>
            {name}
          </h3>
          <code style={{ fontSize: font.size['2xs'], color: colors.neutral[600], fontFamily: font.family.mono }}>
            {tokenPath}
          </code>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ ...typography.caption.sm, color: colors.neutral[500], margin: 0 }}>
            {style.fontSize}px / {style.lineHeight}px
          </p>
          <p style={{ ...typography.caption.sm, color: colors.neutral[500], margin: 0 }}>
            Weight: {style.fontWeight}
          </p>
        </div>
      </div>
      <p
        style={{
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: `${style.lineHeight}px`,
          letterSpacing: style.letterSpacing,
          color: colors.neutral.darkest,
          margin: 0,
        }}
      >
        The quick brown fox jumps over the lazy dog
      </p>
    </div>
  );
}

// Font Size Scale
function FontSizeScale() {
  const sizes = Object.entries(font.size);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
      {sizes.map(([key, value]) => (
        <div
          key={key}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing.lg,
            padding: `${spacing.sm}px ${spacing.md}px`,
            backgroundColor: colors.neutral.lightest,
            borderRadius: border.radius.sm,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        >
          <code style={{ width: 60, fontFamily: font.family.mono, fontSize: font.size['2xs'], color: colors.neutral[600] }}>
            {key}
          </code>
          <span style={{ width: 50, fontSize: font.size['2xs'], color: colors.neutral[500] }}>
            {value}px
          </span>
          <span style={{ fontSize: value, color: colors.neutral.darkest, whiteSpace: 'nowrap' }}>
            Aa
          </span>
        </div>
      ))}
    </div>
  );
}

// Font Weight Scale
function FontWeightScale() {
  const weights = Object.entries(font.weight);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
      {weights.map(([key, value]) => (
        <div
          key={key}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing.lg,
            padding: `${spacing.sm}px ${spacing.md}px`,
            backgroundColor: colors.neutral.lightest,
            borderRadius: border.radius.sm,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        >
          <code style={{ width: 100, fontFamily: font.family.mono, fontSize: font.size['2xs'], color: colors.neutral[600] }}>
            {key}
          </code>
          <span style={{ width: 40, fontSize: font.size['2xs'], color: colors.neutral[500] }}>
            {value}
          </span>
          <span style={{ fontSize: font.size.lg, fontWeight: value, color: colors.neutral.darkest }}>
            The quick brown fox
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TypographyPage() {
  // Display Styles
  const displayStyles = Object.entries(typography.display).map(([key, value]) => ({
    name: `Display ${key.toUpperCase()}`,
    style: value,
    tokenPath: `typography.display.${key}`,
  }));

  // Heading Styles
  const headingStyles = Object.entries(typography.heading).map(([key, value]) => ({
    name: `Heading ${key.toUpperCase()}`,
    style: value,
    tokenPath: `typography.heading.${key}`,
  }));

  // Body Styles
  const bodyStyles = Object.entries(typography.body).map(([key, value]) => ({
    name: `Body ${key.toUpperCase()}`,
    style: value,
    tokenPath: `typography.body.${key}`,
  }));

  // Caption Styles
  const captionStyles = Object.entries(typography.caption).map(([key, value]) => ({
    name: `Caption ${key.toUpperCase()}`,
    style: value,
    tokenPath: `typography.caption.${key}`,
  }));

  // Button Styles
  const buttonStyles = Object.entries(typography.button).map(([key, value]) => ({
    name: `Button ${key.toUpperCase()}`,
    style: value,
    tokenPath: `typography.button.${key}`,
  }));

  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Typography
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          Our typography system provides consistent text styles across the design system. Use the pre-built typography presets for common use cases.
        </p>
      </div>

      {/* Font Families */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Font Families
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing.md }}>
          {Object.entries(font.family).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: spacing.lg,
                backgroundColor: colors.neutral.lightest,
                borderRadius: border.radius.md,
                border: `1px solid ${colors.neutral[300]}`,
              }}
            >
              <code style={{ fontSize: font.size['2xs'], color: colors.neutral[600], fontFamily: font.family.mono }}>
                font.family.{key}
              </code>
              <p style={{ fontFamily: value, fontSize: font.size.xl, color: colors.neutral.darkest, margin: `${spacing.md}px 0 0` }}>
                The quick brown fox
              </p>
              <p style={{ ...typography.caption.sm, color: colors.neutral[500], margin: `${spacing.xs}px 0 0`, wordBreak: 'break-all' }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Font Size Scale */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Font Size Scale
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.lg }}>
          A comprehensive size scale from 12px to 128px.
        </p>
        <FontSizeScale />
      </section>

      {/* Font Weight Scale */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Font Weights
        </h2>
        <FontWeightScale />
      </section>

      {/* Typography Presets */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.xl, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Typography Presets
        </h2>

        {/* Display */}
        <div style={{ marginBottom: spacing['2xl'] }}>
          <h3 style={{ ...typography.heading.md, color: colors.neutral.darkest, marginBottom: spacing.md }}>
            Display
          </h3>
          <p style={{ ...typography.body.sm, color: colors.neutral[600], marginBottom: spacing.lg }}>
            Large headlines for hero sections and page titles.
          </p>
          {displayStyles.map((style, index) => (
            <TypeSample key={index} {...style} />
          ))}
        </div>

        {/* Heading */}
        <div style={{ marginBottom: spacing['2xl'] }}>
          <h3 style={{ ...typography.heading.md, color: colors.neutral.darkest, marginBottom: spacing.md }}>
            Heading
          </h3>
          <p style={{ ...typography.body.sm, color: colors.neutral[600], marginBottom: spacing.lg }}>
            Section headings and subheadings.
          </p>
          {headingStyles.map((style, index) => (
            <TypeSample key={index} {...style} />
          ))}
        </div>

        {/* Body */}
        <div style={{ marginBottom: spacing['2xl'] }}>
          <h3 style={{ ...typography.heading.md, color: colors.neutral.darkest, marginBottom: spacing.md }}>
            Body
          </h3>
          <p style={{ ...typography.body.sm, color: colors.neutral[600], marginBottom: spacing.lg }}>
            Paragraph text and general content.
          </p>
          {bodyStyles.map((style, index) => (
            <TypeSample key={index} {...style} />
          ))}
        </div>

        {/* Caption */}
        <div style={{ marginBottom: spacing['2xl'] }}>
          <h3 style={{ ...typography.heading.md, color: colors.neutral.darkest, marginBottom: spacing.md }}>
            Caption
          </h3>
          <p style={{ ...typography.body.sm, color: colors.neutral[600], marginBottom: spacing.lg }}>
            Small text for labels, captions, and metadata.
          </p>
          {captionStyles.map((style, index) => (
            <TypeSample key={index} {...style} />
          ))}
        </div>

        {/* Button */}
        <div style={{ marginBottom: spacing['2xl'] }}>
          <h3 style={{ ...typography.heading.md, color: colors.neutral.darkest, marginBottom: spacing.md }}>
            Button
          </h3>
          <p style={{ ...typography.body.sm, color: colors.neutral[600], marginBottom: spacing.lg }}>
            Text styles for buttons and interactive elements.
          </p>
          {buttonStyles.map((style, index) => (
            <TypeSample key={index} {...style} />
          ))}
        </div>
      </section>
    </div>
  );
}
