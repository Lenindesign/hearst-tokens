'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

// Theme Preview Component
function ThemePreview({ theme, name }: { theme: string; name: string }) {
  return (
    <div 
      data-theme={theme}
      className="rounded-lg border border-neutral-400 overflow-hidden"
    >
      <div className="p-4 bg-background">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{name}</p>
        <div className="flex gap-2 mb-3">
          <Button size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="outline" size="sm">Outline</Button>
        </div>
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </div>
  );
}

// Info Card Component
function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-neutral-100 rounded-lg p-5 border border-neutral-400">
      <h4 className="text-base font-semibold text-neutral-1000 m-0 mb-2">{title}</h4>
      <div className="text-sm text-neutral-700">{children}</div>
    </div>
  );
}

export default function ShadcnThemingGuidePage() {
  const [selectedTheme, setSelectedTheme] = useState('car-and-driver');

  const themes = [
    { id: 'car-and-driver', name: 'Car and Driver', primary: '#1B5F8A' },
    { id: 'esquire', name: 'Esquire', primary: '#15263d' },
    { id: 'cosmopolitan', name: 'Cosmopolitan', primary: '#d70000' },
    { id: 'good-housekeeping', name: 'Good Housekeeping', primary: '#198294' },
    { id: 'harpers-bazaar', name: "Harper's Bazaar", primary: '#000000' },
    { id: 'elle', name: 'Elle', primary: '#000000' },
    { id: 'delish', name: 'Delish', primary: '#004685' },
    { id: 'mens-health', name: "Men's Health", primary: '#d2232e' },
    { id: 'womens-health', name: "Women's Health", primary: '#1d4ed8' },
    { id: 'popular-mechanics', name: 'Popular Mechanics', primary: '#1c6a65' },
  ];

  const cssVariablesCode = `/* globals.css - Define theme variables */
:root {
  /* Base theme (Car and Driver) */
  --primary: #1B5F8A;
  --primary-foreground: #ffffff;
  --secondary: #F5F5F5;
  --secondary-foreground: #222222;
  --accent: #DBCA8B;
  --accent-foreground: #222222;
  --background: #ffffff;
  --foreground: #222222;
  --muted: #F5F5F5;
  --muted-foreground: #A59143;
  --border: #F5F5F5;
  --radius: 0px;
  
  /* Brand-specific */
  --font-primary: var(--font-inter), Inter, sans-serif;
  --font-display: var(--font-barlow-condensed), "Barlow Condensed", sans-serif;
}

/* Esquire theme override */
[data-theme="esquire"] {
  --primary: #15263d;
  --primary-foreground: #ffffff;
  --accent: #ff3a30;
  --accent-foreground: #ffffff;
  --radius: 0px;
  --font-primary: "Chronicle SSm", Georgia, serif;
}

/* Cosmopolitan theme override */
[data-theme="cosmopolitan"] {
  --primary: #d70000;
  --primary-foreground: #ffffff;
  --accent: #ff69b4;
  --background: #fef7f9;
  --radius: 8px;
  --font-primary: "Helvetica Neue", sans-serif;
}`;

  const buttonComponentCode = `// components/ui/button.tsx
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "shadow",
        secondary: "shadow-sm",
        outline: "border shadow-sm",
        ghost: "",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Apply theme-aware colors via CSS variables
function getVariantStyles(variant: string | undefined) {
  switch (variant) {
    case 'secondary':
      return {
        backgroundColor: 'var(--secondary)',
        color: 'var(--secondary-foreground)',
      }
    case 'outline':
      return {
        border: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }
    default:
      return {
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
      }
  }
}

const Button = ({ variant, size, className, style, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      style={{
        borderRadius: 'var(--radius)',
        ...getVariantStyles(variant),
        ...style,
      }}
      {...props}
    />
  )
}`;

  const usageExampleCode = `// Using themed components - they automatically adapt!
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

function ArticleCard({ title, excerpt }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{excerpt}</p>
        <Button className="mt-4">Read More</Button>
      </CardContent>
    </Card>
  );
}

// The same component renders differently per brand:
// - Car & Driver: Blue buttons, no border radius
// - Cosmopolitan: Red/pink, rounded corners
// - Harper's Bazaar: Black, elegant serif fonts`;

  const themeProviderCode = `// lib/ThemeContext.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'car-and-driver' | 'esquire' | 'cosmopolitan' | /* ... */;

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({ theme: 'car-and-driver', setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('car-and-driver');

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);`;

  const addNewThemeCode = `/* To add a new brand theme: */

/* 1. Add CSS variables in globals.css */
[data-theme="new-brand"] {
  --primary: #your-brand-color;
  --primary-foreground: #ffffff;
  --secondary: #your-secondary;
  --accent: #your-accent;
  --background: #ffffff;
  --foreground: #222222;
  --radius: 8px; /* or 0px for sharp corners */
  
  /* Custom fonts */
  --font-primary: "Your Brand Font", sans-serif;
  --font-display: "Your Display Font", sans-serif;
}

/* 2. Add to ThemeContext types */
type Theme = 'car-and-driver' | 'esquire' | 'new-brand';

/* 3. That's it! All shadcn components automatically use the new theme */`;

  return (
    <div className="p-12 max-w-[900px] mx-auto">
      {/* Header */}
      <div className="mb-12 border-b border-neutral-400 pb-6">
        <p className="text-xs text-neutral-600 m-0 uppercase tracking-wide">Guide</p>
        <h1 className="text-5xl font-bold text-neutral-1000 mt-2 m-0">
          shadcn/ui Multi-Brand Theming
        </h1>
        <p className="text-lg text-neutral-700 mt-4 max-w-[700px]">
          Learn how to create shadcn/ui components that automatically adapt to each Hearst brand's 
          unique visual identity using CSS variables and our theming system.
        </p>
      </div>

      {/* Why shadcn/ui */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          Why shadcn/ui vs Other Component Libraries?
        </h2>
        <p className="text-base text-neutral-700 mb-5">
          shadcn/ui is fundamentally different from traditional component libraries like Material UI, 
          Chakra UI, or Ant Design. Here's why it's perfect for multi-brand design systems:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse bg-neutral-100 rounded-lg overflow-hidden text-sm">
            <thead>
              <tr className="bg-neutral-200">
                <th className="text-left p-3 font-semibold text-neutral-900">Feature</th>
                <th className="text-left p-3 font-semibold text-neutral-900">shadcn/ui</th>
                <th className="text-left p-3 font-semibold text-neutral-900">Traditional Libraries</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-300">
                <td className="p-3 font-medium">Ownership</td>
                <td className="p-3 text-green-700">You own the code - copy into your project</td>
                <td className="p-3 text-neutral-600">npm dependency - library owns the code</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-3 font-medium">Customization</td>
                <td className="p-3 text-green-700">Edit source directly, unlimited control</td>
                <td className="p-3 text-neutral-600">Limited to theme API and overrides</td>
              </tr>
              <tr className="border-t border-neutral-300">
                <td className="p-3 font-medium">Bundle Size</td>
                <td className="p-3 text-green-700">Only what you use, tree-shakeable</td>
                <td className="p-3 text-neutral-600">Often includes unused components</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-3 font-medium">Styling</td>
                <td className="p-3 text-green-700">Tailwind CSS + CSS variables</td>
                <td className="p-3 text-neutral-600">CSS-in-JS or proprietary system</td>
              </tr>
              <tr className="border-t border-neutral-300">
                <td className="p-3 font-medium">Multi-brand Theming</td>
                <td className="p-3 text-green-700">Native CSS variable support</td>
                <td className="p-3 text-neutral-600">Requires theme provider + runtime</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-3 font-medium">Updates</td>
                <td className="p-3 text-green-700">You control when/if to update</td>
                <td className="p-3 text-neutral-600">Breaking changes in npm updates</td>
              </tr>
              <tr className="border-t border-neutral-300">
                <td className="p-3 font-medium">Accessibility</td>
                <td className="p-3 text-green-700">Built on Radix UI primitives</td>
                <td className="p-3 text-neutral-600">Varies by library</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard title="Copy, Don't Install">
            Unlike npm packages, you copy shadcn components into your codebase. This means you 
            can modify them freely without fighting against library constraints.
          </InfoCard>
          <InfoCard title="Perfect for Design Systems">
            When building a multi-brand design system, you need full control over every pixel. 
            shadcn gives you that control while providing a solid foundation.
          </InfoCard>
          <InfoCard title="No Version Lock-in">
            Traditional libraries can break your app with major version updates. With shadcn, 
            your components are stable because you own them.
          </InfoCard>
          <InfoCard title="Performance First">
            No runtime CSS-in-JS overhead. Tailwind compiles to static CSS, and theme switching 
            happens via CSS variables with zero JavaScript.
          </InfoCard>
        </div>
      </section>

      {/* Why CSS Variables */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          Why CSS Variables for Theming?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard title="One Component, Many Brands">
            Write a Button component once. It automatically looks correct for Car & Driver, 
            Esquire, Cosmopolitan, and every other brand.
          </InfoCard>
          <InfoCard title="Zero JavaScript Runtime">
            Theme switching happens via CSS only. No re-renders, no JavaScript bundle bloat, 
            instant theme changes.
          </InfoCard>
          <InfoCard title="Easy to Extend">
            Adding a new brand is just adding CSS variables. No component code changes needed.
          </InfoCard>
          <InfoCard title="shadcn/ui Compatible">
            Works perfectly with shadcn/ui's architecture. Copy components from the library 
            and they just work.
          </InfoCard>
        </div>
      </section>

      {/* Live Theme Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          Live Theme Demo
        </h2>
        <p className="text-base text-neutral-700 mb-5">
          Select a brand to see how the same components adapt their appearance:
        </p>
        
        {/* Theme Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              className={`px-3 py-1.5 text-sm rounded-md border transition-all ${
                selectedTheme === theme.id
                  ? 'border-neutral-900 bg-neutral-900 text-white'
                  : 'border-neutral-400 bg-neutral-100 text-neutral-700 hover:border-neutral-600'
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Theme Preview */}
        <div 
          data-theme={selectedTheme}
          className="rounded-lg border-2 border-neutral-400 overflow-hidden"
        >
          <div className="p-6 bg-background">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: themes.find(t => t.id === selectedTheme)?.primary }}
              />
              <h3 className="text-xl font-bold text-foreground m-0">
                {themes.find(t => t.id === selectedTheme)?.name}
              </h3>
            </div>
            
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Sample Article Card</CardTitle>
                <CardDescription>This card adapts to each brand's theme</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The colors, border radius, and typography all change based on the selected brand theme.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Button>Primary Action</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2 flex-wrap">
              <Badge>Featured</Badge>
              <Badge variant="secondary">New</Badge>
              <Badge variant="outline">Trending</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          How It Works
        </h2>

        <h3 className="text-lg font-semibold text-neutral-1000 mb-3">
          Step 1: Define CSS Variables per Theme
        </h3>
        <p className="text-base text-neutral-700 mb-4">
          Each brand defines its own set of CSS variables. The <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">data-theme</code> attribute 
          on the HTML element determines which set is active.
        </p>
        <CodeBlock code={cssVariablesCode} title="globals.css" />

        <h3 className="text-lg font-semibold text-neutral-1000 mb-3 mt-8">
          Step 2: Components Reference CSS Variables
        </h3>
        <p className="text-base text-neutral-700 mb-4">
          shadcn/ui components use <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">var(--primary)</code>, 
          <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">var(--radius)</code>, etc. instead of hardcoded values.
        </p>
        <CodeBlock code={buttonComponentCode} title="components/ui/button.tsx" />

        <h3 className="text-lg font-semibold text-neutral-1000 mb-3 mt-8">
          Step 3: Use Components Normally
        </h3>
        <p className="text-base text-neutral-700 mb-4">
          Components automatically adapt. No props needed for theming.
        </p>
        <CodeBlock code={usageExampleCode} title="Using themed components" />
      </section>

      {/* Theme Provider */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          Theme Provider (Optional)
        </h2>
        <p className="text-base text-neutral-700 mb-4">
          For dynamic theme switching (like a theme picker), use a React context:
        </p>
        <CodeBlock code={themeProviderCode} title="lib/ThemeContext.tsx" />
      </section>

      {/* Brand Personality */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          What Makes Each Brand Unique?
        </h2>
        <p className="text-base text-neutral-700 mb-5">
          Each Hearst brand has its own personality expressed through design tokens:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-neutral-100 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-neutral-200">
                <th className="text-left p-3 text-sm font-semibold text-neutral-900">Brand</th>
                <th className="text-left p-3 text-sm font-semibold text-neutral-900">Primary Color</th>
                <th className="text-left p-3 text-sm font-semibold text-neutral-900">Border Radius</th>
                <th className="text-left p-3 text-sm font-semibold text-neutral-900">Typography Feel</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-300">
                <td className="p-3 text-sm font-medium">Car & Driver</td>
                <td className="p-3"><span className="inline-block w-4 h-4 rounded" style={{backgroundColor: '#1B5F8A'}} /> Blue</td>
                <td className="p-3 text-sm">Sharp (0px)</td>
                <td className="p-3 text-sm">Bold, Condensed</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-3 text-sm font-medium">Esquire</td>
                <td className="p-3"><span className="inline-block w-4 h-4 rounded" style={{backgroundColor: '#15263d'}} /> Navy</td>
                <td className="p-3 text-sm">Sharp (0px)</td>
                <td className="p-3 text-sm">Sophisticated Serif</td>
              </tr>
              <tr className="border-t border-neutral-300">
                <td className="p-3 text-sm font-medium">Cosmopolitan</td>
                <td className="p-3"><span className="inline-block w-4 h-4 rounded" style={{backgroundColor: '#d70000'}} /> Red</td>
                <td className="p-3 text-sm">Rounded (8px)</td>
                <td className="p-3 text-sm">Fun, Playful</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-3 text-sm font-medium">Harper's Bazaar</td>
                <td className="p-3"><span className="inline-block w-4 h-4 rounded border" style={{backgroundColor: '#000000'}} /> Black</td>
                <td className="p-3 text-sm">Sharp (0px)</td>
                <td className="p-3 text-sm">Elegant, High Fashion</td>
              </tr>
              <tr className="border-t border-neutral-300">
                <td className="p-3 text-sm font-medium">Good Housekeeping</td>
                <td className="p-3"><span className="inline-block w-4 h-4 rounded" style={{backgroundColor: '#198294'}} /> Teal</td>
                <td className="p-3 text-sm">Rounded (8px)</td>
                <td className="p-3 text-sm">Warm, Trustworthy</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-3 text-sm font-medium">Delish</td>
                <td className="p-3"><span className="inline-block w-4 h-4 rounded" style={{backgroundColor: '#004685'}} /> Blue</td>
                <td className="p-3 text-sm">Very Rounded (12px)</td>
                <td className="p-3 text-sm">Friendly, Appetizing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Adding New Themes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          Adding a New Brand Theme
        </h2>
        <p className="text-base text-neutral-700 mb-4">
          To add support for a new Hearst brand, you only need to add CSS variables:
        </p>
        <CodeBlock code={addNewThemeCode} title="Adding a new brand" />
      </section>

      {/* All Themes Preview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          All Brand Themes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {themes.slice(0, 6).map((theme) => (
            <ThemePreview key={theme.id} theme={theme.id} name={theme.name} />
          ))}
        </div>
      </section>

      {/* Available Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          Available shadcn/ui Components
        </h2>
        <p className="text-base text-neutral-700 mb-5">
          These components are currently installed in our design system. Each one automatically 
          adapts to the active brand theme.
        </p>

        {/* Installed Components */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-neutral-1000 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            Installed in This Project
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: 'Accordion', desc: 'Expandable content sections', path: '@/components/ui/accordion' },
              { name: 'Badge', desc: 'Status indicators and labels', path: '@/components/ui/badge' },
              { name: 'Button', desc: 'Clickable actions with variants', path: '@/components/ui/button' },
              { name: 'Card', desc: 'Container for content groups', path: '@/components/ui/card' },
              { name: 'Carousel', desc: 'Slideshow for images/content', path: '@/components/ui/carousel' },
              { name: 'Input', desc: 'Text input fields', path: '@/components/ui/input' },
            ].map((component) => (
              <div key={component.name} className="bg-neutral-100 border border-neutral-400 rounded-lg p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-neutral-1000">{component.name}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Installed</span>
                </div>
                <p className="text-sm text-neutral-600 m-0">{component.desc}</p>
                <code className="text-xs text-neutral-500 mt-2 block">{component.path}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Available to Add */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-1000 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-neutral-400"></span>
            Available to Add (from shadcn/ui)
          </h3>
          <p className="text-sm text-neutral-600 mb-4">
            Run <code className="bg-neutral-200 px-1.5 py-0.5 rounded">npx shadcn@latest add [component]</code> to install any of these:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              // Layout
              { name: 'Aspect Ratio', category: 'Layout' },
              { name: 'Scroll Area', category: 'Layout' },
              { name: 'Separator', category: 'Layout' },
              { name: 'Resizable', category: 'Layout' },
              // Forms
              { name: 'Checkbox', category: 'Forms' },
              { name: 'Form', category: 'Forms' },
              { name: 'Label', category: 'Forms' },
              { name: 'Radio Group', category: 'Forms' },
              { name: 'Select', category: 'Forms' },
              { name: 'Slider', category: 'Forms' },
              { name: 'Switch', category: 'Forms' },
              { name: 'Textarea', category: 'Forms' },
              // Data Display
              { name: 'Avatar', category: 'Data Display' },
              { name: 'Calendar', category: 'Data Display' },
              { name: 'Data Table', category: 'Data Display' },
              { name: 'Progress', category: 'Data Display' },
              { name: 'Skeleton', category: 'Data Display' },
              { name: 'Table', category: 'Data Display' },
              // Feedback
              { name: 'Alert', category: 'Feedback' },
              { name: 'Alert Dialog', category: 'Feedback' },
              { name: 'Sonner (Toast)', category: 'Feedback' },
              { name: 'Tooltip', category: 'Feedback' },
              // Navigation
              { name: 'Breadcrumb', category: 'Navigation' },
              { name: 'Command', category: 'Navigation' },
              { name: 'Dropdown Menu', category: 'Navigation' },
              { name: 'Menubar', category: 'Navigation' },
              { name: 'Navigation Menu', category: 'Navigation' },
              { name: 'Pagination', category: 'Navigation' },
              { name: 'Tabs', category: 'Navigation' },
              // Overlay
              { name: 'Context Menu', category: 'Overlay' },
              { name: 'Dialog', category: 'Overlay' },
              { name: 'Drawer', category: 'Overlay' },
              { name: 'Hover Card', category: 'Overlay' },
              { name: 'Popover', category: 'Overlay' },
              { name: 'Sheet', category: 'Overlay' },
              // Other
              { name: 'Collapsible', category: 'Other' },
              { name: 'Toggle', category: 'Other' },
              { name: 'Toggle Group', category: 'Other' },
            ].map((component) => (
              <div 
                key={component.name} 
                className="bg-neutral-200/50 border border-neutral-300 rounded px-3 py-2 text-sm"
              >
                <span className="text-neutral-800">{component.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Example */}
        <div className="mt-6 bg-[#1e1e1e] rounded-lg overflow-hidden">
          <div className="px-4 py-3 bg-[#2d2d2d] border-b border-[#3d3d3d]">
            <span className="font-mono text-sm text-[#9d9d9d]">Installing a new component</span>
          </div>
          <pre className="m-0 p-5 overflow-auto font-mono text-[13px] leading-relaxed text-[#d4d4d4]">
            <code>{`# Add a single component
npx shadcn@latest add dialog

# Add multiple components
npx shadcn@latest add dialog dropdown-menu tabs

# The component will be added to src/components/ui/
# and will automatically use your theme variables!`}</code>
          </pre>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-neutral-1000 rounded-lg p-8 text-neutral-100">
        <h2 className="text-2xl font-bold m-0 mb-4">
          Key Takeaways
        </h2>
        <ul className="text-base text-neutral-400 m-0 pl-5 space-y-2">
          <li>Use CSS variables (<code className="text-neutral-300">var(--primary)</code>) instead of hardcoded colors</li>
          <li>Define brand themes using <code className="text-neutral-300">[data-theme="brand-name"]</code> selectors</li>
          <li>shadcn/ui components automatically adapt when you follow this pattern</li>
          <li>Adding a new brand = adding CSS variables (no component changes)</li>
          <li>Theme switching is instant and requires no JavaScript re-renders</li>
        </ul>
      </section>
    </div>
  );
}
