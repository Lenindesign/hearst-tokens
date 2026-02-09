'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Area, AreaChart, CartesianGrid, XAxis, YAxis, Cell } from 'recharts';

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

// Section wrapper for showcase
function ShowcaseSection({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-bold text-foreground m-0 mb-1">{title}</h3>
      {description && <p className="text-sm text-muted-foreground m-0 mb-4">{description}</p>}
      {!description && <div className="mb-4" />}
      <div className="space-y-4">{children}</div>
    </section>
  );
}

// Suspense-style loading demo
function SuspenseDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const simulateLoad = () => {
    setIsLoading(true);
    setHasLoaded(false);
    setTimeout(() => {
      setIsLoading(false);
      setHasLoaded(true);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button size="sm" variant="outline" onClick={simulateLoad} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Simulate Suspense'}
        </Button>
        {hasLoaded && <span className="text-xs text-muted-foreground">Content loaded!</span>}
      </div>
      <div className="flex items-center space-x-4">
        {isLoading || !hasLoaded ? (
          <>
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </>
        ) : (
          <>
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              CD
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Car and Driver</p>
              <p className="text-sm text-muted-foreground">Automotive journalism since 1955</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ShadcnThemingGuidePage() {
  const [selectedTheme, setSelectedTheme] = useState('car-and-driver');
  const [activeTab, setActiveTab] = useState<'guide' | 'showcase'>('guide');
  const [sliderValue, setSliderValue] = useState([33]);
  const [progressValue, setProgressValue] = useState(66);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);

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
      <div className="mb-8 border-b border-neutral-400 pb-6">
        <p className="text-xs text-neutral-600 m-0 uppercase tracking-wide">Guide</p>
        <h1 className="text-5xl font-bold text-neutral-1000 mt-2 m-0">
          shadcn/ui Multi-Brand Theming
        </h1>
        <p className="text-lg text-neutral-700 mt-4 max-w-[700px]">
          Learn how to create shadcn/ui components that automatically adapt to each Hearst brand&apos;s 
          unique visual identity using CSS variables and our theming system.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-10 border-b border-neutral-400 pb-0">
        {[
          { id: 'guide' as const, label: 'Guide' },
          { id: 'showcase' as const, label: 'Component Showcase' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
              activeTab === tab.id
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-neutral-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'guide' && (
      <>
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
          <li>Define brand themes using <code className="text-neutral-300">[data-theme=&quot;brand-name&quot;]</code> selectors</li>
          <li>shadcn/ui components automatically adapt when you follow this pattern</li>
          <li>Adding a new brand = adding CSS variables (no component changes)</li>
          <li>Theme switching is instant and requires no JavaScript re-renders</li>
        </ul>
      </section>
      </>
      )}

      {/* ========== COMPONENT SHOWCASE TAB ========== */}
      {activeTab === 'showcase' && (
        <div data-theme={selectedTheme}>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground m-0 mb-2">
              Component Showcase
            </h2>
            <p className="text-base text-muted-foreground m-0">
              Every shadcn/ui component below adapts to the selected brand theme via CSS variables. Switch brands to see the transformation.
            </p>

          </div>

          {/* Brand Theme Picker - Sticky */}
          <div className="sticky top-0 z-50 bg-neutral-100/95 backdrop-blur-sm border-b border-neutral-400 -mx-12 px-12 py-3 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wide flex-shrink-0">Brand</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'car-and-driver', label: 'Car and Driver' },
                  { id: 'esquire', label: 'Esquire' },
                  { id: 'cosmopolitan', label: 'Cosmopolitan' },
                  { id: 'good-housekeeping', label: 'Good Housekeeping' },
                  { id: 'harpers-bazaar', label: "Harper's Bazaar" },
                  { id: 'elle', label: 'Elle' },
                  { id: 'delish', label: 'Delish' },
                  { id: 'mens-health', label: "Men's Health" },
                  { id: 'womens-health', label: "Women's Health" },
                  { id: 'popular-mechanics', label: 'Popular Mechanics' },
                ].map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => setSelectedTheme(brand.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      selectedTheme === brand.id
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'bg-neutral-300 text-neutral-700 hover:bg-neutral-400'
                    }`}
                  >
                    {brand.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Separator className="mb-10" />

          {/* ===== LAYOUT ===== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Layout</h2>

            <ShowcaseSection title="Aspect Ratio" description="Displays content within a desired ratio.">
              <div className="w-[300px]">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                  <div className="flex items-center justify-center h-full bg-primary/10 text-primary font-semibold text-sm">
                    16:9 Aspect Ratio
                  </div>
                </AspectRatio>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Scroll Area" description="Augments native scroll functionality for custom, cross-browser styling.">
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="text-sm text-foreground">
                      Article headline {i + 1} — The latest automotive news from the track
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </ShowcaseSection>

            <ShowcaseSection title="Separator" description="Visually or semantically separates content.">
              <div className="bg-card rounded-lg border border-border p-6">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Car and Driver</h4>
                  <p className="text-sm text-muted-foreground">Automotive journalism since 1955.</p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>Reviews</div>
                  <Separator orientation="vertical" />
                  <div>News</div>
                  <Separator orientation="vertical" />
                  <div>Features</div>
                  <Separator orientation="vertical" />
                  <div>Best Cars</div>
                </div>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Resizable" description="Accessible resizable panel groups and layouts.">
              <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border">
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-[120px] items-center justify-center p-6">
                    <span className="font-semibold">Panel A</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-[120px] items-center justify-center p-6">
                    <span className="font-semibold">Panel B</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ShowcaseSection>
          </div>

          {/* ===== FORMS ===== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Forms</h2>

            <ShowcaseSection title="Checkbox" description="A control that allows selecting multiple options.">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" defaultChecked />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="news" />
                  <Label htmlFor="news">Subscribe to Car and Driver newsletter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled" disabled />
                  <Label htmlFor="disabled" className="opacity-50">Disabled option</Label>
                </div>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Label" description="Renders an accessible label associated with controls.">
              <div className="grid w-full max-w-sm gap-1.5">
                <Label htmlFor="email-label">Email</Label>
                <Input type="email" id="email-label" placeholder="editor@caranddriver.com" />
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Input" description="Text input for forms.">
              <div className="grid w-full max-w-sm gap-4">
                <Input placeholder="Default input" />
                <Input type="email" placeholder="Email" />
                <Input disabled placeholder="Disabled" />
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Radio Group" description="A set of checkable buttons where only one can be checked at a time.">
              <RadioGroup defaultValue="performance">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="performance" id="r1" />
                  <Label htmlFor="r1">Performance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="luxury" id="r2" />
                  <Label htmlFor="r2">Luxury</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="electric" id="r3" />
                  <Label htmlFor="r3">Electric</Label>
                </div>
              </RadioGroup>
            </ShowcaseSection>

            <ShowcaseSection title="Select" description="Displays a list of options for the user to pick from.">
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                  <SelectItem value="coupe">Coupe</SelectItem>
                  <SelectItem value="convertible">Convertible</SelectItem>
                </SelectContent>
              </Select>
            </ShowcaseSection>

            <ShowcaseSection title="Slider" description="An input where the user selects a value from within a given range.">
              <div className="w-full max-w-sm space-y-2">
                <Label>Horsepower: {sliderValue[0] * 10}</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                />
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Switch" description="A control that allows toggling between checked and not checked.">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch id="dark-mode" />
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" defaultChecked />
                  <Label htmlFor="notifications">Push Notifications</Label>
                </div>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Textarea" description="A multi-line text input.">
              <Textarea placeholder="Write your review of the 2026 Porsche 911 GT3 RS..." className="max-w-lg" />
            </ShowcaseSection>
          </div>

          {/* ===== DATA DISPLAY ===== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Data Display</h2>

            <ShowcaseSection title="Avatar" description="An image element with a fallback for representing the user.">
              <div className="flex gap-4 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="Editor" />
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Badge" description="Displays a badge or a component that looks like a badge.">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Progress" description="Displays an indicator showing the completion progress of a task.">
              <div className="w-full max-w-md space-y-3">
                <Progress value={progressValue} />
                <p className="text-sm text-muted-foreground">{progressValue}% complete</p>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Skeleton & Suspense" description="Used to show a placeholder while content is loading. Click to simulate a loading state.">
              <div className="bg-card rounded-lg border border-border p-6 space-y-6">
                {/* Static skeleton example */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">Skeleton Placeholder</p>
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Suspense-style loading demo */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">Suspense Demo</p>
                  <SuspenseDemo />
                </div>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Table" description="A responsive table component.">
              <Table>
                <TableCaption>2026 Performance Car Comparison</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Model</TableHead>
                    <TableHead>HP</TableHead>
                    <TableHead>0-60 mph</TableHead>
                    <TableHead className="text-right">MSRP</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Porsche 911 GT3 RS</TableCell>
                    <TableCell>518</TableCell>
                    <TableCell>3.0s</TableCell>
                    <TableCell className="text-right">$223,800</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">BMW M3 Competition</TableCell>
                    <TableCell>503</TableCell>
                    <TableCell>3.4s</TableCell>
                    <TableCell className="text-right">$76,900</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mercedes-AMG C63 S</TableCell>
                    <TableCell>671</TableCell>
                    <TableCell>3.3s</TableCell>
                    <TableCell className="text-right">$85,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Chevrolet Corvette Z06</TableCell>
                    <TableCell>670</TableCell>
                    <TableCell>2.6s</TableCell>
                    <TableCell className="text-right">$113,900</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ShowcaseSection>

            <ShowcaseSection title="Card" description="Displays a card with header, content, and footer.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>2026 Porsche 911 GT3 RS</CardTitle>
                    <CardDescription>First Drive Review</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      The GT3 RS continues to push the boundaries of what a road-legal sports car can do on a circuit.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Read Review</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Best SUVs for 2026</CardTitle>
                    <CardDescription>Buyer&apos;s Guide</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      From compact crossovers to full-size luxury, our picks for every budget and need.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">View List</Button>
                  </CardFooter>
                </Card>
              </div>
            </ShowcaseSection>
          </div>

          {/* ===== FEEDBACK ===== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Feedback</h2>

            <ShowcaseSection title="Alert" description="Displays a callout for important information.">
              <div className="space-y-4 max-w-lg">
                <Alert>
                  <AlertTitle>New Review Published</AlertTitle>
                  <AlertDescription>
                    Your 2026 Corvette Z06 review is now live on the site.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Recall Notice</AlertTitle>
                  <AlertDescription>
                    A safety recall has been issued for the 2025 model year.
                  </AlertDescription>
                </Alert>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Alert Dialog" description="A modal dialog that interrupts the user with important content.">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Delete Review</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your review and remove it from the site.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </ShowcaseSection>

            <ShowcaseSection title="Tooltip" description="A popup that displays information related to an element.">
              <TooltipProvider>
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip with Car and Driver styling</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </ShowcaseSection>
          </div>

          {/* ===== NAVIGATION ===== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Navigation</h2>

            <ShowcaseSection title="Breadcrumb" description="Displays the path to the current resource using a hierarchy of links.">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Reviews</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Sports Cars</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Porsche 911 GT3 RS</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </ShowcaseSection>

            <ShowcaseSection title="Dropdown Menu" description="Displays a menu to the user triggered by a button.">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Reviews</DropdownMenuItem>
                  <DropdownMenuItem>News</DropdownMenuItem>
                  <DropdownMenuItem>Features</DropdownMenuItem>
                  <DropdownMenuItem>Best Cars Lists</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>My Account</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ShowcaseSection>

            <ShowcaseSection title="Menubar" description="A visually persistent menu common in desktop applications.">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New Article</MenubarItem>
                    <MenubarItem>Open Draft</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Save</MenubarItem>
                    <MenubarItem>Publish</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Preview</MenubarItem>
                    <MenubarItem>Desktop</MenubarItem>
                    <MenubarItem>Mobile</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </ShowcaseSection>

            <ShowcaseSection title="Navigation Menu" description="A collection of links for navigating websites.">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Reviews</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px]">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">First Drives</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our first impressions from behind the wheel
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Comparison Tests</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Head-to-head matchups of competing models
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Best Cars</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px]">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">10Best Cars</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our annual list of the best vehicles on sale
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </ShowcaseSection>

            <ShowcaseSection title="Pagination" description="Pagination with page navigation, previous and next links.">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </ShowcaseSection>

            <ShowcaseSection title="Tabs" description="A set of layered sections of content, known as tab panels.">
              <Tabs defaultValue="performance" className="w-full max-w-lg">
                <TabsList>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="specs">Specs</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                </TabsList>
                <TabsContent value="performance" className="p-4 border rounded-md mt-2">
                  <p className="text-sm text-muted-foreground">518 hp flat-six, 3.0s 0-60, 184 mph top speed. The GT3 RS is track-focused but street-legal.</p>
                </TabsContent>
                <TabsContent value="specs" className="p-4 border rounded-md mt-2">
                  <p className="text-sm text-muted-foreground">4.0L flat-six, 7-speed PDK, rear-wheel drive, 3,268 lbs curb weight.</p>
                </TabsContent>
                <TabsContent value="pricing" className="p-4 border rounded-md mt-2">
                  <p className="text-sm text-muted-foreground">Base MSRP: $223,800. Weissach Package adds $31,000. Most examples exceed $280K with options.</p>
                </TabsContent>
              </Tabs>
            </ShowcaseSection>

            <ShowcaseSection title="Context Menu" description="Displays a menu at the pointer's position on right-click.">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[100px] w-[250px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                  Right-click here
                </ContextMenuTrigger>
                <ContextMenuContent className="w-48">
                  <ContextMenuItem>Save Article</ContextMenuItem>
                  <ContextMenuItem>Share</ContextMenuItem>
                  <ContextMenuItem>Print</ContextMenuItem>
                  <ContextMenuItem>Report Issue</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </ShowcaseSection>
          </div>

          {/* ===== OVERLAY ===== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Overlay</h2>

            <ShowcaseSection title="Dialog" description="A window overlaid on the primary window, rendering content underneath inert.">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Subscribe to Car and Driver</DialogTitle>
                    <DialogDescription>
                      Get unlimited access to reviews, features, and buyer&apos;s guides.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="sub-email">Email</Label>
                      <Input id="sub-email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Subscribe</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </ShowcaseSection>

            <ShowcaseSection title="Sheet" description="Extends the Dialog component to display content that complements the main content.">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Article Settings</SheetTitle>
                    <SheetDescription>
                      Configure publishing options for this article.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label>Category</Label>
                      <Input defaultValue="Reviews" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Author</Label>
                      <Input defaultValue="Car and Driver Staff" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="featured" />
                      <Label htmlFor="featured">Featured Article</Label>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </ShowcaseSection>

            <ShowcaseSection title="Hover Card" description="For sighted users to preview content available behind a link.">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="text-primary">@caranddriver</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Car and Driver</h4>
                      <p className="text-sm text-muted-foreground">
                        Automotive journalism since 1955. Reviews, news, and buyer&apos;s guides.
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          Joined December 1955
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </ShowcaseSection>

            <ShowcaseSection title="Popover" description="Displays rich content in a portal, triggered by a button.">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Filter Results</h4>
                      <p className="text-sm text-muted-foreground">
                        Set filters for the vehicle search.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label>Min Price</Label>
                        <Input className="col-span-2 h-8" defaultValue="$20,000" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label>Max Price</Label>
                        <Input className="col-span-2 h-8" defaultValue="$80,000" />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </ShowcaseSection>
          </div>

          {/* ===== OTHER ===== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Other</h2>

            <ShowcaseSection title="Collapsible" description="An interactive component which expands/collapses a panel.">
              <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="w-full max-w-sm space-y-2">
                <div className="flex items-center justify-between space-x-4">
                  <h4 className="text-sm font-semibold">3 Related Articles</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      {collapsibleOpen ? 'Hide' : 'Show'}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 text-sm">
                  2026 Porsche 911 GT3 RS First Drive
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 text-sm">
                    Porsche 911 GT3 vs. BMW M4 CSL Comparison
                  </div>
                  <div className="rounded-md border px-4 py-3 text-sm">
                    Best Sports Cars for 2026
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </ShowcaseSection>

            <ShowcaseSection title="Toggle" description="A two-state button that can be either on or off.">
              <div className="flex gap-2">
                <Toggle aria-label="Toggle bold">
                  <span className="font-bold">B</span>
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <span className="italic">I</span>
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <span className="underline">U</span>
                </Toggle>
              </div>
            </ShowcaseSection>

            <ShowcaseSection title="Toggle Group" description="A set of two-state buttons that can be toggled on or off.">
              <ToggleGroup type="single" defaultValue="grid">
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  Grid
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  List
                </ToggleGroupItem>
                <ToggleGroupItem value="kanban" aria-label="Kanban view">
                  Kanban
                </ToggleGroupItem>
              </ToggleGroup>
            </ShowcaseSection>
          </div>

          {/* ===== BUTTONS (all variants) ===== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Buttons — All Variants</h2>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* ===== CHARTS ===== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Charts — Pricing &amp; Data</h2>

            {/* Bar Chart — MSRP Comparison */}
            <ShowcaseSection title="Bar Chart — MSRP Comparison" description="Compare base pricing across performance models.">
              <Card>
                <CardHeader>
                  <CardTitle>2026 Sports Car MSRP</CardTitle>
                  <CardDescription>Base manufacturer&apos;s suggested retail price (USD)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      msrp: { label: 'MSRP', color: '#1B5F8A' },
                    }}
                    className="h-[300px] w-full"
                  >
                    <BarChart
                      data={[
                        { model: 'Civic Si', msrp: 30800 },
                        { model: 'GR86', msrp: 32600 },
                        { model: 'Supra', msrp: 57540 },
                        { model: 'M3 Comp', msrp: 76900 },
                        { model: 'AMG C63', msrp: 85500 },
                        { model: 'Corvette Z06', msrp: 113900 },
                        { model: '911 GT3 RS', msrp: 223800 },
                      ]}
                      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="model" tickLine={false} axisLine={false} fontSize={12} />
                      <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} tickLine={false} axisLine={false} fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent formatter={(value) => `$${Number(value).toLocaleString()}`} />} />
                      <Bar dataKey="msrp" fill="#1B5F8A" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </ShowcaseSection>

            {/* Line Chart — Price Trends */}
            <ShowcaseSection title="Line Chart — Price Trends" description="Track how average new car prices have changed over recent years.">
              <Card>
                <CardHeader>
                  <CardTitle>Average New Car Transaction Price</CardTitle>
                  <CardDescription>U.S. average in thousands (USD)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      sedan: { label: 'Sedan', color: '#1B5F8A' },
                      suv: { label: 'SUV', color: '#DBCA8B' },
                      truck: { label: 'Truck', color: '#D2232A' },
                    }}
                    className="h-[300px] w-full"
                  >
                    <LineChart
                      data={[
                        { year: '2020', sedan: 32, suv: 41, truck: 44 },
                        { year: '2021', sedan: 34, suv: 44, truck: 48 },
                        { year: '2022', sedan: 37, suv: 48, truck: 53 },
                        { year: '2023', sedan: 36, suv: 47, truck: 55 },
                        { year: '2024', sedan: 35, suv: 46, truck: 56 },
                        { year: '2025', sedan: 36, suv: 48, truck: 58 },
                        { year: '2026', sedan: 37, suv: 49, truck: 60 },
                      ]}
                      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="year" tickLine={false} axisLine={false} fontSize={12} />
                      <YAxis tickFormatter={(v) => `$${v}k`} tickLine={false} axisLine={false} fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent formatter={(value) => `$${value}k`} />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Line type="monotone" dataKey="sedan" stroke="#1B5F8A" strokeWidth={2} dot={{ r: 4 }} />
                      <Line type="monotone" dataKey="suv" stroke="#DBCA8B" strokeWidth={2} dot={{ r: 4 }} />
                      <Line type="monotone" dataKey="truck" stroke="#D2232A" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </ShowcaseSection>

            {/* Area Chart — EV Adoption */}
            <ShowcaseSection title="Area Chart — EV Market Share" description="Electric vehicle sales as percentage of total new car sales.">
              <Card>
                <CardHeader>
                  <CardTitle>EV Market Share Growth</CardTitle>
                  <CardDescription>Percentage of new vehicle sales that are fully electric</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      ev: { label: 'EV Share %', color: '#1B5F8A' },
                    }}
                    className="h-[250px] w-full"
                  >
                    <AreaChart
                      data={[
                        { year: '2019', ev: 1.8 },
                        { year: '2020', ev: 2.2 },
                        { year: '2021', ev: 4.1 },
                        { year: '2022', ev: 5.9 },
                        { year: '2023', ev: 7.6 },
                        { year: '2024', ev: 9.8 },
                        { year: '2025', ev: 12.4 },
                        { year: '2026', ev: 15.1 },
                      ]}
                      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="year" tickLine={false} axisLine={false} fontSize={12} />
                      <YAxis tickFormatter={(v) => `${v}%`} tickLine={false} axisLine={false} fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent formatter={(value) => `${value}%`} />} />
                      <defs>
                        <linearGradient id="fillEv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1B5F8A" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#1B5F8A" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="ev" stroke="#1B5F8A" strokeWidth={2} fill="url(#fillEv)" />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </ShowcaseSection>

            {/* Pie Chart — Segment Breakdown */}
            <ShowcaseSection title="Pie Chart — Market Segment Breakdown" description="U.S. new vehicle sales by segment for 2026.">
              <Card>
                <CardHeader>
                  <CardTitle>2026 U.S. Sales by Segment</CardTitle>
                  <CardDescription>Estimated market share by vehicle type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      suv: { label: 'SUV / Crossover', color: '#1B5F8A' },
                      truck: { label: 'Pickup Truck', color: '#222222' },
                      sedan: { label: 'Sedan', color: '#DBCA8B' },
                      ev: { label: 'Electric', color: '#A59143' },
                      other: { label: 'Other', color: '#D2232A' },
                    }}
                    className="h-[300px] w-full"
                  >
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Pie
                        data={[
                          { name: 'SUV / Crossover', value: 54, fill: '#1B5F8A' },
                          { name: 'Pickup Truck', value: 20, fill: '#222222' },
                          { name: 'Sedan', value: 12, fill: '#DBCA8B' },
                          { name: 'Electric', value: 9, fill: '#A59143' },
                          { name: 'Other', value: 5, fill: '#D2232A' },
                        ]}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        strokeWidth={2}
                        stroke="#fff"
                      />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </ShowcaseSection>

            {/* Grouped Bar — Pricing by Segment */}
            <ShowcaseSection title="Grouped Bar — Average Price by Segment" description="Compare average transaction prices across vehicle segments and powertrains.">
              <Card>
                <CardHeader>
                  <CardTitle>Average Price: ICE vs Electric</CardTitle>
                  <CardDescription>2026 average transaction price by segment (USD)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      ice: { label: 'ICE / Hybrid', color: '#1B5F8A' },
                      electric: { label: 'Electric', color: '#DBCA8B' },
                    }}
                    className="h-[300px] w-full"
                  >
                    <BarChart
                      data={[
                        { segment: 'Compact', ice: 28500, electric: 34200 },
                        { segment: 'Midsize', ice: 35800, electric: 42500 },
                        { segment: 'SUV', ice: 48200, electric: 55800 },
                        { segment: 'Luxury', ice: 68500, electric: 78300 },
                        { segment: 'Truck', ice: 58900, electric: 72400 },
                      ]}
                      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="segment" tickLine={false} axisLine={false} fontSize={12} />
                      <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} tickLine={false} axisLine={false} fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent formatter={(value) => `$${Number(value).toLocaleString()}`} />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Bar dataKey="ice" fill="#1B5F8A" radius={[2, 2, 0, 0]} />
                      <Bar dataKey="electric" fill="#DBCA8B" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </ShowcaseSection>
          </div>

          {/* Summary */}
          <section className="bg-neutral-900 rounded-lg p-8 text-neutral-100">
            <h2 className="text-2xl font-bold m-0 mb-3">
              35+ Components, 10 Brands
            </h2>
            <p className="text-base text-neutral-400 m-0">
              Every component above is styled entirely through CSS variables. Switch brands using the picker above and they all update instantly — no code changes, no re-renders. The same components power Car and Driver, Esquire, Cosmopolitan, and every other Hearst property.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
