'use client';

import { useState } from 'react';

// Code Block Component
function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden mb-5">
      {title && (
        <div className="px-4 py-3 bg-[#2d2d2d] border-b border-[#3d3d3d]">
          <span className="font-mono text-sm text-[#9d9d9d]">{title}</span>
        </div>
      )}
      <pre className="m-0 p-5 overflow-auto font-mono text-[13px] leading-relaxed text-[#d4d4d4]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Info Card for different audiences
function AudienceCard({ 
  title, 
  audience, 
  children 
}: { 
  title: string; 
  audience: 'designer' | 'developer' | 'pm';
  children: React.ReactNode;
}) {
  const labels = { designer: 'For Designers', developer: 'For Developers', pm: 'For Product Managers' };
  
  return (
    <div className="bg-neutral-100 border-neutral-400 border rounded-lg p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-neutral-300 text-neutral-800 text-xs font-medium px-2 py-1 rounded">
          {labels[audience]}
        </span>
      </div>
      <h4 className="text-base font-semibold text-neutral-900 m-0 mb-2">{title}</h4>
      <div className="text-sm text-neutral-700">{children}</div>
    </div>
  );
}

// Phase Card Component
function PhaseCard({ 
  phase, 
  title, 
  status,
  children 
}: { 
  phase: number; 
  title: string; 
  status: 'current' | 'next' | 'future';
  children: React.ReactNode;
}) {
  const statusStyles = {
    current: 'bg-neutral-900',
    next: 'bg-neutral-600',
    future: 'bg-neutral-400',
  };
  const statusLabels = {
    current: 'Current State',
    next: 'Next Step',
    future: 'Future Goal',
  };

  return (
    <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-6 mb-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-lg">
            {phase}
          </div>
          <h3 className="text-xl font-bold text-neutral-900 m-0">{title}</h3>
        </div>
        <span className={`${statusStyles[status]} text-white text-xs font-medium px-3 py-1 rounded-full`}>
          {statusLabels[status]}
        </span>
      </div>
      <div className="text-base text-neutral-700">{children}</div>
    </div>
  );
}

// Visual Flow Diagram
function FlowDiagram({ phase }: { phase: 1 | 2 | 3 }) {
  type FlowItem = { label: string; sublabel: string; active: boolean; highlight?: boolean };
  
  const phases: Record<1 | 2 | 3, FlowItem[]> = {
    1: [
      { label: 'Figma', sublabel: 'Design tokens', active: true },
      { label: 'Manual Export', sublabel: 'Copy values', active: true },
      { label: 'Code Files', sublabel: 'globals.css', active: true },
    ],
    2: [
      { label: 'Figma', sublabel: 'Design tokens', active: true },
      { label: 'tokens.json', sublabel: 'Single source', active: true, highlight: true },
      { label: 'Build Process', sublabel: 'Style Dictionary', active: true },
      { label: 'All Outputs', sublabel: 'CSS, TS, Figma', active: true },
    ],
    3: [
      { label: 'tokens.json', sublabel: 'Git versioned', active: true, highlight: true },
      { label: 'AI Assistant', sublabel: 'Validates & suggests', active: true },
      { label: 'Auto Deploy', sublabel: 'CI/CD pipeline', active: true },
      { label: 'All Platforms', sublabel: 'Web, iOS, Android', active: true },
    ],
  };

  return (
    <div className="bg-neutral-200 rounded-lg p-6 mb-5 overflow-x-auto">
      <div className="flex items-center justify-center gap-2 min-w-max">
        {phases[phase].map((item, index) => (
          <div key={index} className="flex items-center">
            <div className={`
              px-4 py-3 rounded-lg text-center min-w-[120px]
              ${item.highlight ? 'bg-neutral-900 text-white' : 'bg-white border border-neutral-300'}
            `}>
              <div className={`font-semibold text-sm ${item.highlight ? 'text-white' : 'text-neutral-900'}`}>
                {item.label}
              </div>
              <div className={`text-xs mt-1 ${item.highlight ? 'text-neutral-300' : 'text-neutral-500'}`}>
                {item.sublabel}
              </div>
            </div>
            {index < phases[phase].length - 1 && (
              <div className="text-neutral-400 text-xl px-2">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TokenPipelinePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'technical'>('overview');

  const tokensJsonExample = `{
  "global": {
    "colors": {
      "neutral": {
        "100": { "value": "#ffffff", "type": "color" },
        "200": { "value": "#f5f5f5", "type": "color" },
        "900": { "value": "#222222", "type": "color" }
      }
    },
    "spacing": {
      "sm": { "value": "12px", "type": "dimension" },
      "md": { "value": "16px", "type": "dimension" },
      "lg": { "value": "24px", "type": "dimension" }
    },
    "radius": {
      "sm": { "value": "4px", "type": "dimension" },
      "md": { "value": "8px", "type": "dimension" }
    }
  },
  "brands": {
    "car-and-driver": {
      "colors": {
        "primary": { "value": "#1B5F8A", "type": "color" },
        "accent": { "value": "#DBCA8B", "type": "color" }
      },
      "radius": { "value": "0px", "type": "dimension" },
      "font": {
        "display": { "value": "Barlow Condensed", "type": "fontFamily" }
      }
    },
    "cosmopolitan": {
      "colors": {
        "primary": { "value": "#d70000", "type": "color" },
        "accent": { "value": "#ff69b4", "type": "color" }
      },
      "radius": { "value": "8px", "type": "dimension" },
      "font": {
        "display": { "value": "Playfair Display", "type": "fontFamily" }
      }
    }
  }
}`;

  const cssOutputExample = `/* Generated automatically from tokens.json */

/* Global tokens (shared by all brands) */
:root {
  --color-neutral-100: #ffffff;
  --color-neutral-200: #f5f5f5;
  --color-neutral-900: #222222;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}

/* Car & Driver theme */
[data-theme="car-and-driver"] {
  --primary: #1B5F8A;
  --accent: #DBCA8B;
  --radius: 0px;
  --font-display: "Barlow Condensed", sans-serif;
}

/* Cosmopolitan theme */
[data-theme="cosmopolitan"] {
  --primary: #d70000;
  --accent: #ff69b4;
  --radius: 8px;
  --font-display: "Playfair Display", serif;
}`;

  const styleDictionaryConfig = `// build-tokens.js
const StyleDictionary = require('style-dictionary');

// Read tokens.json and generate outputs
StyleDictionary.extend({
  source: ['tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/app/',
      files: [{
        destination: 'generated-tokens.css',
        format: 'css/variables'
      }]
    },
    typescript: {
      transformGroup: 'js',
      buildPath: 'src/lib/',
      files: [{
        destination: 'generated-tokens.ts',
        format: 'javascript/es6'
      }]
    }
  }
}).buildAllPlatforms();`;

  const componentExample = `// A shadcn/ui Button - works with ANY brand automatically
import { Button } from '@/components/ui/button';

function ArticlePage() {
  return (
    <article>
      <h1 className="text-foreground">Article Title</h1>
      <p className="text-muted-foreground">Article content...</p>
      
      {/* This button automatically uses the correct brand colors */}
      <Button>Read More</Button>
    </article>
  );
}

// At runtime:
// - Car & Driver: Blue button, sharp corners
// - Cosmopolitan: Red button, rounded corners
// - No code changes needed!`;

  return (
    <div className="p-12 max-w-[1000px] mx-auto">
      {/* Header */}
      <div className="mb-12 border-b border-neutral-400 pb-6">
        <p className="text-xs text-neutral-600 m-0 uppercase tracking-wide">Guide</p>
        <h1 className="text-5xl font-bold text-neutral-1000 mt-2 m-0">
          Design Token Pipeline
        </h1>
        <p className="text-lg text-neutral-700 mt-4 max-w-[800px]">
          Understanding how design tokens flow from Figma to production code, and why 
          a JSON-based single source of truth enables scalable multi-brand design systems.
        </p>
      </div>

      {/* Audience Tabs */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'overview'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
        >
          Overview (All Audiences)
        </button>
        <button
          onClick={() => setActiveTab('technical')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'technical'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
        >
          Technical Implementation
        </button>
      </div>

      {activeTab === 'overview' && (
        <>
          {/* The Big Picture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              The Big Picture
            </h2>
            <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-6 mb-6">
              <p className="text-base text-neutral-700 m-0">
                <strong>The Problem:</strong> Hearst has 10+ brands (Car & Driver, Esquire, Cosmopolitan, etc.), 
                each with unique colors, fonts, and styles. Maintaining consistency across all brands while 
                allowing each to have its own personality is challenging.
              </p>
              <p className="text-base text-neutral-700 mt-4 m-0">
                <strong>The Solution:</strong> A centralized token system where design decisions are defined once 
                and automatically distributed to all platforms (web, iOS, Android) and all brands.
              </p>
            </div>
          </section>

          {/* What Are Design Tokens */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              What Are Design Tokens?
            </h2>
            <p className="text-base text-neutral-700 mb-5">
              Design tokens are the smallest pieces of your design system - the fundamental values that 
              define how things look. Think of them as design decisions stored as data.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
                <div className="w-8 h-8 rounded bg-neutral-900 mb-3"></div>
                <h4 className="font-semibold text-neutral-900 m-0 mb-1">Colors</h4>
                <p className="text-sm text-neutral-600 m-0">Primary: #1B5F8A</p>
                <p className="text-sm text-neutral-600 m-0">Background: #ffffff</p>
              </div>
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
                <div className="flex gap-1 mb-3">
                  <div className="w-2 h-8 bg-neutral-400 rounded"></div>
                  <div className="w-4 h-8 bg-neutral-400 rounded"></div>
                  <div className="w-6 h-8 bg-neutral-400 rounded"></div>
                </div>
                <h4 className="font-semibold text-neutral-900 m-0 mb-1">Spacing</h4>
                <p className="text-sm text-neutral-600 m-0">Small: 12px</p>
                <p className="text-sm text-neutral-600 m-0">Medium: 16px</p>
              </div>
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
                <div className="text-2xl font-bold mb-3">Aa</div>
                <h4 className="font-semibold text-neutral-900 m-0 mb-1">Typography</h4>
                <p className="text-sm text-neutral-600 m-0">Font: Inter</p>
                <p className="text-sm text-neutral-600 m-0">Size: 16px</p>
              </div>
            </div>

            <div className="bg-neutral-200 border border-neutral-400 rounded-lg p-5">
              <p className="text-sm text-neutral-800 m-0">
                <strong>Key Insight:</strong> Instead of a developer writing <code className="bg-neutral-300 px-1 rounded">#1B5F8A</code> in 
                code, they write <code className="bg-neutral-300 px-1 rounded">var(--primary)</code>. The actual color value 
                comes from the token system, making it easy to change across the entire application.
              </p>
            </div>
          </section>

          {/* The Three Phases */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              Evolution of the Token Pipeline
            </h2>

            <PhaseCard phase={1} title="Figma as Source (Current)" status="current">
              <FlowDiagram phase={1} />
              <p className="mb-4">
                Designers create tokens in Figma. When changes are needed, someone manually copies 
                values from Figma into code files. This works but has limitations:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                <li>Manual process is slow and error-prone</li>
                <li>No version history for token changes</li>
                <li>Hard to track what changed and when</li>
                <li>Developers and designers can get out of sync</li>
              </ul>
            </PhaseCard>

            <PhaseCard phase={2} title="JSON as Single Source of Truth (Recommended)" status="next">
              <FlowDiagram phase={2} />
              <p className="mb-4">
                A JSON file in the code repository becomes the single source of truth. 
                A build process automatically generates all outputs:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                <li>CSS variables for web (Tailwind/shadcn)</li>
                <li>TypeScript constants for type-safe access</li>
                <li>Sync back to Figma via API</li>
                <li>iOS and Android token files</li>
              </ul>
              <div className="mt-4 p-4 bg-neutral-200 border border-neutral-400 rounded-lg">
                <p className="text-sm text-neutral-800 m-0">
                  <strong>Benefits:</strong> Version control, automated builds, single source of truth, 
                  works with CI/CD pipelines, enables AI-assisted token management.
                </p>
              </div>
            </PhaseCard>

            <PhaseCard phase={3} title="AI-Enhanced Token Management (Future)" status="future">
              <FlowDiagram phase={3} />
              <p className="mb-4">
                AI assistants can help manage tokens by:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                <li>Validating accessibility (contrast ratios)</li>
                <li>Suggesting new brand themes from a primary color</li>
                <li>Detecting inconsistencies across brands</li>
                <li>Generating documentation automatically</li>
                <li>Proposing token optimizations</li>
              </ul>
            </PhaseCard>
          </section>

          {/* How It Connects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              How Everything Connects
            </h2>
            
            <div className="bg-neutral-900 text-neutral-100 rounded-lg p-6 mb-6 font-mono text-sm overflow-x-auto">
              <pre className="m-0 whitespace-pre">{`
┌─────────────────────────────────────────────────────────────────┐
│                        tokens.json                              │
│                   (Single Source of Truth)                      │
│                                                                 │
│  Contains: Colors, Spacing, Typography, Border Radius           │
│  Per-brand overrides: Car&Driver, Esquire, Cosmo, etc.         │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Build Process                               │
│                  (Style Dictionary)                             │
│                                                                 │
│  Transforms JSON into platform-specific formats                 │
└───────┬─────────────────┬─────────────────┬─────────────────────┘
        │                 │                 │
        ▼                 ▼                 ▼
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│  globals.css  │ │  tokens.ts    │ │  Figma Sync   │
│               │ │               │ │               │
│ CSS Variables │ │ TypeScript    │ │ Push to Figma │
│ for Tailwind  │ │ Constants     │ │ Variables API │
└───────┬───────┘ └───────────────┘ └───────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Tailwind CSS                               │
│                                                                 │
│  @theme { --color-primary: var(--primary); }                   │
│                                                                 │
│  Makes CSS variables available as utility classes:              │
│  bg-primary, text-foreground, rounded-md, p-4, etc.            │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                      shadcn/ui Components                       │
│                                                                 │
│  <Button className="bg-primary rounded-md">                    │
│                                                                 │
│  Components use Tailwind classes that reference CSS variables.  │
│  They automatically adapt to any brand theme!                   │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Runtime                                 │
│                                                                 │
│  <html data-theme="cosmopolitan">                              │
│                                                                 │
│  CSS cascade applies the correct brand's variables.             │
│  All components instantly reflect the brand's look.             │
└─────────────────────────────────────────────────────────────────┘
`}</pre>
            </div>
          </section>

          {/* What This Means For Each Role */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              What This Means For You
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AudienceCard title="Your Workflow" audience="designer">
                <ul className="list-disc pl-4 space-y-2 m-0">
                  <li>Continue designing in Figma as usual</li>
                  <li>Token changes sync automatically to code</li>
                  <li>See your changes live in Storybook</li>
                  <li>No need to hand off hex codes manually</li>
                  <li>Version history tracks all changes</li>
                </ul>
              </AudienceCard>
              
              <AudienceCard title="Your Workflow" audience="developer">
                <ul className="list-disc pl-4 space-y-2 m-0">
                  <li>Use Tailwind classes: <code className="bg-neutral-300 px-1 rounded text-xs">bg-primary</code></li>
                  <li>TypeScript autocomplete for tokens</li>
                  <li>No hardcoded colors or values</li>
                  <li>Components work for all brands</li>
                  <li>Build process handles transformations</li>
                </ul>
              </AudienceCard>
              
              <AudienceCard title="Your Benefits" audience="pm">
                <ul className="list-disc pl-4 space-y-2 m-0">
                  <li>Faster design-to-dev handoff</li>
                  <li>Consistent brand experience</li>
                  <li>Easy to add new brands</li>
                  <li>Reduced QA for styling issues</li>
                  <li>Clear audit trail of changes</li>
                </ul>
              </AudienceCard>
            </div>
          </section>

          {/* Practical Example */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              Practical Example: Adding a New Brand Color
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0">Designer updates tokens.json</h4>
                  <p className="text-sm text-neutral-600 mt-1">Change Cosmopolitan's primary color from #d70000 to #e60012</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0">Commit triggers build</h4>
                  <p className="text-sm text-neutral-600 mt-1">GitHub Action runs Style Dictionary automatically</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0">CSS variables update</h4>
                  <p className="text-sm text-neutral-600 mt-1">globals.css now has <code className="bg-neutral-200 px-1 rounded">--primary: #e60012</code> for Cosmopolitan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0">All components update</h4>
                  <p className="text-sm text-neutral-600 mt-1">Every Button, Card, and component using <code className="bg-neutral-200 px-1 rounded">bg-primary</code> now shows the new color</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0">Zero code changes needed</h4>
                  <p className="text-sm text-neutral-600 mt-1">Developers didn't touch any component code. The token system handled everything.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="bg-neutral-900 rounded-lg p-8 text-neutral-100">
            <h2 className="text-2xl font-bold m-0 mb-4">Key Takeaways</h2>
            <ul className="text-base text-neutral-300 m-0 pl-5 space-y-2">
              <li><strong className="text-white">Single Source of Truth:</strong> tokens.json contains all design decisions</li>
              <li><strong className="text-white">Automated Pipeline:</strong> Changes flow automatically from tokens to code</li>
              <li><strong className="text-white">Multi-Brand Support:</strong> One codebase serves all Hearst brands</li>
              <li><strong className="text-white">No Manual Sync:</strong> Designers and developers always have the same values</li>
              <li><strong className="text-white">Version Controlled:</strong> Every token change is tracked in git history</li>
              <li><strong className="text-white">Platform Agnostic:</strong> Same tokens can output to web, iOS, Android</li>
            </ul>
          </section>
        </>
      )}

      {activeTab === 'technical' && (
        <>
          {/* Technical Implementation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              Technical Implementation
            </h2>
            <p className="text-base text-neutral-700 mb-6">
              This section covers the technical details for developers setting up the token pipeline.
            </p>

            {/* tokens.json Structure */}
            <h3 className="text-lg font-semibold text-neutral-1000 mb-3">
              1. Token JSON Structure
            </h3>
            <p className="text-base text-neutral-700 mb-4">
              The tokens.json file contains global tokens (shared by all brands) and brand-specific overrides:
            </p>
            <CodeBlock code={tokensJsonExample} title="tokens.json" />

            {/* Style Dictionary Config */}
            <h3 className="text-lg font-semibold text-neutral-1000 mb-3 mt-8">
              2. Style Dictionary Configuration
            </h3>
            <p className="text-base text-neutral-700 mb-4">
              Style Dictionary transforms the JSON into platform-specific outputs:
            </p>
            <CodeBlock code={styleDictionaryConfig} title="build-tokens.js" />

            {/* Generated CSS */}
            <h3 className="text-lg font-semibold text-neutral-1000 mb-3 mt-8">
              3. Generated CSS Output
            </h3>
            <p className="text-base text-neutral-700 mb-4">
              The build process generates CSS variables with brand-specific selectors:
            </p>
            <CodeBlock code={cssOutputExample} title="generated-tokens.css (output)" />

            {/* Component Usage */}
            <h3 className="text-lg font-semibold text-neutral-1000 mb-3 mt-8">
              4. Component Usage
            </h3>
            <p className="text-base text-neutral-700 mb-4">
              shadcn/ui components use CSS variables via Tailwind classes. They automatically 
              adapt to whichever brand theme is active:
            </p>
            <CodeBlock code={componentExample} title="Using themed components" />

            {/* Package.json Scripts */}
            <h3 className="text-lg font-semibold text-neutral-1000 mb-3 mt-8">
              5. Build Scripts
            </h3>
            <p className="text-base text-neutral-700 mb-4">
              Add these scripts to your package.json:
            </p>
            <CodeBlock 
              code={`{
  "scripts": {
    "build:tokens": "node build-tokens.js",
    "build": "npm run build:tokens && next build",
    "dev": "npm run build:tokens && next dev"
  }
}`} 
              title="package.json" 
            />

            {/* GitHub Action */}
            <h3 className="text-lg font-semibold text-neutral-1000 mb-3 mt-8">
              6. CI/CD Integration (GitHub Actions)
            </h3>
            <p className="text-base text-neutral-700 mb-4">
              Automatically rebuild tokens when the JSON file changes:
            </p>
            <CodeBlock 
              code={`name: Build Tokens

on:
  push:
    paths:
      - 'tokens.json'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build:tokens
      - name: Commit generated files
        run: |
          git config user.name "GitHub Action"
          git config user.email "action@github.com"
          git add src/
          git diff --staged --quiet || git commit -m "chore: regenerate tokens"
          git push`} 
              title=".github/workflows/build-tokens.yml" 
            />

            {/* Dependencies */}
            <h3 className="text-lg font-semibold text-neutral-1000 mb-3 mt-8">
              7. Required Dependencies
            </h3>
            <CodeBlock 
              code={`npm install style-dictionary @tokens-studio/sd-transforms`} 
              title="Installation" 
            />
          </section>

          {/* Tools Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              Tools Summary
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-neutral-100 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-neutral-200">
                    <th className="text-left p-4 font-semibold text-neutral-900">Tool</th>
                    <th className="text-left p-4 font-semibold text-neutral-900">Purpose</th>
                    <th className="text-left p-4 font-semibold text-neutral-900">When It Runs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-300">
                    <td className="p-4 font-medium">tokens.json</td>
                    <td className="p-4 text-neutral-700">Single source of truth for all design values</td>
                    <td className="p-4 text-neutral-600">Edited manually or via Figma sync</td>
                  </tr>
                  <tr className="border-t border-neutral-300 bg-neutral-200/50">
                    <td className="p-4 font-medium">Style Dictionary</td>
                    <td className="p-4 text-neutral-700">Transforms JSON to CSS, TypeScript, etc.</td>
                    <td className="p-4 text-neutral-600">Build time (npm run build:tokens)</td>
                  </tr>
                  <tr className="border-t border-neutral-300">
                    <td className="p-4 font-medium">CSS Variables</td>
                    <td className="p-4 text-neutral-700">Runtime theming via data-theme attribute</td>
                    <td className="p-4 text-neutral-600">Runtime (browser)</td>
                  </tr>
                  <tr className="border-t border-neutral-300 bg-neutral-200/50">
                    <td className="p-4 font-medium">Tailwind CSS</td>
                    <td className="p-4 text-neutral-700">Utility classes that reference CSS variables</td>
                    <td className="p-4 text-neutral-600">Build time (CSS compilation)</td>
                  </tr>
                  <tr className="border-t border-neutral-300">
                    <td className="p-4 font-medium">shadcn/ui</td>
                    <td className="p-4 text-neutral-700">Components using Tailwind + CSS variables</td>
                    <td className="p-4 text-neutral-600">Runtime (React components)</td>
                  </tr>
                  <tr className="border-t border-neutral-300 bg-neutral-200/50">
                    <td className="p-4 font-medium">GitHub Actions</td>
                    <td className="p-4 text-neutral-700">Auto-rebuild when tokens.json changes</td>
                    <td className="p-4 text-neutral-600">On git push</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
