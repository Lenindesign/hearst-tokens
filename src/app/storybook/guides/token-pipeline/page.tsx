'use client';

import { colors, spacing, typography, border, font } from '@/lib/designTokens';

// Code Block Component
function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        borderRadius: border.radius.lg,
        overflow: 'hidden',
        marginBottom: spacing.lg,
      }}
    >
      {title && (
        <div
          style={{
            padding: `${spacing.sm}px ${spacing.md}px`,
            backgroundColor: '#2d2d2d',
            borderBottom: '1px solid #3d3d3d',
          }}
        >
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: font.size.sm,
              color: '#9d9d9d',
            }}
          >
            {title}
          </span>
        </div>
      )}
      <pre
        style={{
          margin: 0,
          padding: spacing.lg,
          overflow: 'auto',
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace',
          fontSize: 13,
          lineHeight: 1.6,
          color: '#d4d4d4',
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Note Box Component
function NoteBox({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div
      style={{
        backgroundColor: colors.neutral[100],
        borderLeft: `3px solid ${colors.neutral[400]}`,
        borderRadius: border.radius.md,
        padding: spacing.lg,
        marginBottom: spacing.lg,
      }}
    >
      {title && (
        <div style={{ ...typography.body.md, fontWeight: font.weight.semibold, color: colors.neutral.darkest, marginBottom: spacing.xs }}>
          {title}
        </div>
      )}
      <div style={{ ...typography.body.md, color: colors.neutral[700] }}>{children}</div>
    </div>
  );
}

// Flow Diagram Component
function FlowDiagram() {
  const boxStyle = {
    backgroundColor: colors.neutral.lightest,
    border: `1px solid ${colors.neutral[300]}`,
    borderRadius: border.radius.md,
    padding: spacing.lg,
    textAlign: 'center' as const,
    minWidth: 150,
  };

  const arrowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.neutral[400],
    fontSize: 20,
    padding: `0 ${spacing.sm}px`,
  };

  return (
    <div
      style={{
        backgroundColor: colors.neutral[100],
        borderRadius: border.radius.lg,
        padding: spacing.xl,
        marginBottom: spacing.xl,
        overflowX: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: spacing.xs,
          flexWrap: 'wrap',
        }}
      >
        <div style={boxStyle}>
          <div style={{ ...typography.body.md, fontWeight: font.weight.semibold, color: colors.neutral.darkest }}>
            Figma + Token Studio
          </div>
          <div style={{ ...typography.caption.sm, color: colors.neutral[600], marginTop: spacing['2xs'] }}>
            Design tokens source
          </div>
        </div>

        <div style={arrowStyle}>→</div>

        <div style={boxStyle}>
          <div style={{ ...typography.body.md, fontWeight: font.weight.semibold, color: colors.neutral.darkest }}>
            GitHub Sync
          </div>
          <div style={{ ...typography.caption.sm, color: colors.neutral[600], marginTop: spacing['2xs'] }}>
            Auto-push JSON
          </div>
        </div>

        <div style={arrowStyle}>→</div>

        <div style={boxStyle}>
          <div style={{ ...typography.body.md, fontWeight: font.weight.semibold, color: colors.neutral.darkest }}>
            Style Dictionary
          </div>
          <div style={{ ...typography.caption.sm, color: colors.neutral[600], marginTop: spacing['2xs'] }}>
            Transform tokens
          </div>
        </div>

        <div style={arrowStyle}>→</div>

        <div style={boxStyle}>
          <div style={{ ...typography.body.md, fontWeight: font.weight.semibold, color: colors.neutral.darkest }}>
            CSS Variables
          </div>
          <div style={{ ...typography.caption.sm, color: colors.neutral[600], marginTop: spacing['2xs'] }}>
            Runtime theming
          </div>
        </div>
      </div>
    </div>
  );
}

// Summary Table Component
function SummaryTable() {
  const rows = [
    { tool: 'Token Studio', purpose: 'Design tokens live in Figma' },
    { tool: 'GitHub Sync', purpose: 'Auto-push token JSON to repo' },
    { tool: 'Style Dictionary', purpose: 'Transform JSON to CSS/TypeScript' },
    { tool: '@tokens-studio/sd-transforms', purpose: 'Handle Token Studio format' },
    { tool: 'GitHub Action', purpose: 'Auto-rebuild when tokens change' },
    { tool: 'CSS Variables', purpose: 'Runtime theming for shadcn/ui' },
  ];

  return (
    <div
      style={{
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.lg,
        border: `1px solid ${colors.neutral[300]}`,
        overflow: 'hidden',
        marginBottom: spacing.xl,
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: colors.neutral[200] }}>
            <th
              style={{
                ...typography.body.md,
                fontWeight: font.weight.semibold,
                color: colors.neutral.darkest,
                padding: spacing.md,
                textAlign: 'left',
                borderBottom: `1px solid ${colors.neutral[300]}`,
              }}
            >
              Tool
            </th>
            <th
              style={{
                ...typography.body.md,
                fontWeight: font.weight.semibold,
                color: colors.neutral.darkest,
                padding: spacing.md,
                textAlign: 'left',
                borderBottom: `1px solid ${colors.neutral[300]}`,
              }}
            >
              Purpose
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.tool} style={{ backgroundColor: index % 2 === 0 ? colors.neutral.lightest : colors.neutral[100] }}>
              <td
                style={{
                  ...typography.body.md,
                  fontWeight: font.weight.medium,
                  color: colors.neutral.darkest,
                  padding: spacing.md,
                  borderBottom: `1px solid ${colors.neutral[200]}`,
                }}
              >
                {row.tool}
              </td>
              <td
                style={{
                  ...typography.body.md,
                  color: colors.neutral[700],
                  padding: spacing.md,
                  borderBottom: `1px solid ${colors.neutral[200]}`,
                }}
              >
                {row.purpose}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// File Structure Component
function FileStructure() {
  const structure = `tokens/                          Output:
├── colors.json       ──────▶    src/app/tokens.css (CSS variables)
├── spacing.json      ──────▶    src/lib/tokens.ts (TypeScript)
├── typography.json   ──────▶    tailwind theme values
└── brands/
    ├── car-and-driver.json
    ├── esquire.json
    ├── cosmopolitan.json
    ├── elle.json
    └── ...`;

  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        borderRadius: border.radius.lg,
        padding: spacing.xl,
        marginBottom: spacing.xl,
        fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace',
        fontSize: 13,
        lineHeight: 1.8,
        color: '#4ec9b0',
        whiteSpace: 'pre',
        overflow: 'auto',
      }}
    >
      {structure}
    </div>
  );
}

// Step Card Component
function StepCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.lg,
        border: `1px solid ${colors.neutral[300]}`,
        padding: spacing.xl,
        marginBottom: spacing.lg,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md, marginBottom: spacing.lg }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: colors.neutral.darkest,
            color: colors.neutral.lightest,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: font.weight.semibold,
            fontSize: font.size.md,
          }}
        >
          {number}
        </div>
        <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, margin: 0 }}>{title}</h3>
      </div>
      <div style={{ ...typography.body.md, color: colors.neutral[700] }}>{children}</div>
    </div>
  );
}

// Main Page Component
export default function TokenPipelinePage() {
  const styleDictionaryConfig = `// style-dictionary.config.js
const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

// Register Token Studio transforms
registerTransforms(StyleDictionary);

// Define your brands
const brands = [
  'car-and-driver',
  'esquire', 
  'cosmopolitan',
  'elle',
  'harpers-bazaar',
  'mens-health',
  'womens-health',
  'road-and-track',
  'country-living',
  'good-housekeeping'
];

// Base config for shared tokens
const baseConfig = {
  source: ['tokens/core/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/app/',
      files: [{
        destination: 'tokens-base.css',
        format: 'css/variables',
        selector: ':root'
      }]
    },
    ts: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/lib/',
      files: [{
        destination: 'tokens.ts',
        format: 'javascript/es6'
      }]
    }
  }
};

// Brand-specific configs
const brandConfigs = brands.map(brand => ({
  source: [
    'tokens/core/**/*.json',
    \`tokens/brands/\${brand}/**/*.json\`
  ],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/app/',
      files: [{
        destination: \`tokens-\${brand}.css\`,
        format: 'css/variables',
        selector: \`[data-theme="\${brand}"]\`
      }]
    }
  }
}));

module.exports = [baseConfig, ...brandConfigs];`;

  const tokenStudioJson = `// tokens/core/colors.json
{
  "colors": {
    "neutral": {
      "100": {
        "value": "#f5f5f5",
        "type": "color"
      },
      "900": {
        "value": "#222222",
        "type": "color"
      }
    }
  }
}

// tokens/brands/car-and-driver/colors.json
{
  "colors": {
    "primary": {
      "value": "#1B5F8A",
      "type": "color"
    },
    "secondary": {
      "value": "#E31837",
      "type": "color"
    }
  }
}`;

  const cssOutput = `/* src/app/tokens-base.css */
:root {
  --colors-neutral-100: #f5f5f5;
  --colors-neutral-900: #222222;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  /* ... */
}

/* src/app/tokens-car-and-driver.css */
[data-theme="car-and-driver"] {
  --colors-primary: #1B5F8A;
  --colors-secondary: #E31837;
  --font-family-heading: 'Barlow Condensed', sans-serif;
  /* ... */
}

/* src/app/tokens-esquire.css */
[data-theme="esquire"] {
  --colors-primary: #000000;
  --colors-secondary: #C41230;
  /* ... */
}`;

  const shadcnMapping = `// In style-dictionary.config.js
StyleDictionary.registerFormat({
  name: 'css/shadcn',
  formatter: function({ dictionary }) {
    const mappings = {
      'colors.primary': '--primary',
      'colors.neutral.100': '--background',
      'colors.neutral.900': '--foreground',
      'colors.neutral.200': '--muted',
      'colors.neutral.300': '--border',
      'colors.neutral.400': '--muted-foreground',
      'border.radius.md': '--radius',
    };
    
    let output = '';
    dictionary.allTokens.forEach(token => {
      const shadcnVar = mappings[token.path.join('.')];
      if (shadcnVar) {
        output += \`  \${shadcnVar}: \${token.value};\\n\`;
      }
      // Also output the original variable
      output += \`  --\${token.path.join('-')}: \${token.value};\\n\`;
    });
    
    return output;
  }
});`;

  const githubAction = `# .github/workflows/build-tokens.yml
name: Build Tokens

on:
  push:
    paths:
      - 'tokens/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build tokens
        run: npm run build:tokens
        
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add src/app/tokens*.css src/lib/tokens.ts
          git diff --staged --quiet || git commit -m "chore: rebuild tokens"
          git push`;

  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 900, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'], borderBottom: `1px solid ${colors.neutral[300]}`, paddingBottom: spacing.xl }}>
        <p style={{ ...typography.caption.md, color: colors.neutral[500], margin: 0, textTransform: 'uppercase', letterSpacing: 1 }}>
          Guide
        </p>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: `${spacing.sm}px 0 0` }}>
          Token Pipeline Setup
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 700 }}>
          Set up an automated pipeline that syncs design tokens from Figma (via Token Studio) 
          directly into your codebase using Style Dictionary and GitHub Actions.
        </p>
      </div>

      {/* Overview */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Overview
        </h2>
        <FlowDiagram />
        <NoteBox title="Why automate?">
          With 10+ Hearst brands, manual token updates are error-prone and time-consuming. 
          This pipeline ensures designers can update tokens in Figma and see changes reflected in code automatically.
        </NoteBox>
      </section>

      {/* File Structure */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          File Structure
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[700], marginBottom: spacing.lg }}>
          Style Dictionary takes token JSON files as input and transforms them into multiple output formats 
          (CSS, TypeScript, iOS, Android, etc.) based on a configuration file.
        </p>
        <FileStructure />
      </section>

      {/* Setup Steps */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.xl }}>
          Setup Steps
        </h2>

        <StepCard number={1} title="Enable GitHub Sync in Token Studio">
          <ol style={{ margin: 0, paddingLeft: spacing.xl, display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
            <li>In Figma, open the <strong>Token Studio</strong> plugin</li>
            <li>Go to <strong>Settings → Sync Providers</strong></li>
            <li>Click <strong>Add GitHub</strong> and authorize with your GitHub account</li>
            <li>Configure the sync settings:
              <ul style={{ marginTop: spacing.xs }}>
                <li><strong>Repository:</strong> <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>Lenindesign/hearst-tokens</code></li>
                <li><strong>Branch:</strong> <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>main</code> (or a dedicated <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>tokens</code> branch)</li>
                <li><strong>File path:</strong> <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>tokens/</code></li>
              </ul>
            </li>
            <li>Use <strong>Push/Pull</strong> to sync tokens whenever you save</li>
          </ol>
        </StepCard>

        <StepCard number={2} title="Install Dependencies">
          <p style={{ marginBottom: spacing.md }}>Add Style Dictionary and the Token Studio transforms to your project:</p>
          <CodeBlock code="npm install style-dictionary @tokens-studio/sd-transforms" />
        </StepCard>

        <StepCard number={3} title="Create Style Dictionary Config">
          <p style={{ marginBottom: spacing.md }}>
            Create a configuration file that defines how tokens are transformed and where they&apos;re output:
          </p>
          <CodeBlock code={styleDictionaryConfig} title="style-dictionary.config.js" />
        </StepCard>

        <StepCard number={4} title="Add Build Script">
          <p style={{ marginBottom: spacing.md }}>Add a script to your <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>package.json</code>:</p>
          <CodeBlock
            code={`{
  "scripts": {
    "build:tokens": "style-dictionary build",
    "build": "npm run build:tokens && next build"
  }
}`}
            title="package.json"
          />
        </StepCard>

        <StepCard number={5} title="Set Up GitHub Action">
          <p style={{ marginBottom: spacing.md }}>
            Create a GitHub Action that automatically rebuilds tokens when the <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>tokens/</code> folder changes:
          </p>
          <CodeBlock code={githubAction} title=".github/workflows/build-tokens.yml" />
        </StepCard>
      </section>

      {/* Token Studio JSON Structure */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Token Studio JSON Structure
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[700], marginBottom: spacing.lg }}>
          Token Studio exports tokens in a specific JSON format. Here&apos;s how to structure your core and brand-specific tokens:
        </p>
        <CodeBlock code={tokenStudioJson} title="Token JSON Examples" />
      </section>

      {/* CSS Output */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Generated CSS Output
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[700], marginBottom: spacing.lg }}>
          Style Dictionary generates CSS variables that can be used for runtime theming. Each brand gets its own 
          selector using the <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>data-theme</code> attribute:
        </p>
        <CodeBlock code={cssOutput} title="Generated CSS Variables" />
      </section>

      {/* shadcn/ui Mapping */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Mapping to shadcn/ui Variables
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[700], marginBottom: spacing.lg }}>
          shadcn/ui expects specific CSS variable names. Create a custom format to map your Figma tokens to these:
        </p>
        <CodeBlock code={shadcnMapping} title="Custom shadcn Format" />
        
        <NoteBox title="Variable Mapping">
          This ensures your design tokens from Figma automatically work with 
          shadcn/ui components without manual intervention.
        </NoteBox>
      </section>

      {/* Summary Table */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Summary
        </h2>
        <SummaryTable />
      </section>

      {/* Benefits */}
      <section style={{ marginBottom: spacing.xl }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Benefits
        </h2>
        <ul style={{ ...typography.body.md, color: colors.neutral[700], margin: 0, paddingLeft: spacing.xl, display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
          <li><strong>Single Source of Truth</strong> — Figma is the source, code is always in sync</li>
          <li><strong>Type Safety</strong> — Generated TypeScript means autocomplete and compile-time checks</li>
          <li><strong>Multi-brand Support</strong> — Style Dictionary outputs per-brand CSS variable sets</li>
          <li><strong>shadcn/ui Compatible</strong> — Output matches the variables shadcn expects</li>
          <li><strong>No Manual Work</strong> — Designer saves in Figma, tokens appear in code</li>
          <li><strong>Reduced Errors</strong> — Automation eliminates human error in token updates</li>
        </ul>
      </section>
    </div>
  );
}
