'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { brandThemes } from '@/lib/brandThemes';

// Theme selector component
function ThemeSelector({ currentTheme, onThemeChange }: { 
  currentTheme: string; 
  onThemeChange: (theme: string) => void;
}) {
  const themes = Object.entries(brandThemes).map(([id, theme]) => ({
    id,
    name: theme.name,
    kebabId: id.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
  }));

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {themes.map((theme) => (
        <button
          key={theme.id}
          onClick={() => onThemeChange(theme.kebabId)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            currentTheme === theme.kebabId
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}

export default function ShadcnDemoPage() {
  const [currentTheme, setCurrentTheme] = useState('car-and-driver');

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          shadcn/ui Components
        </h1>
        <p className="text-muted-foreground">
          Multi-brand themed components using shadcn/ui. Select a brand theme below to see how components adapt.
        </p>
      </div>

      {/* Theme Selector */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Select Brand Theme</h2>
        <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      </div>

      {/* Buttons Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4 p-6 bg-card rounded-lg border border-border">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4 p-6 bg-card rounded-lg border border-border">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Badges</h2>
        <div className="flex flex-wrap gap-4 p-6 bg-card rounded-lg border border-border">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* Input Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Inputs</h2>
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Password</label>
            <Input type="password" placeholder="Enter your password" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Disabled</label>
            <Input type="text" placeholder="Disabled input" disabled />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Card */}
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is the card content area. You can put any content here.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="default" size="sm">Action</Button>
            </CardFooter>
          </Card>

          {/* Feature Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="default">New</Badge>
                <CardTitle>Feature Card</CardTitle>
              </div>
              <CardDescription>With badge and multiple actions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cards can contain badges, buttons, and other components.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="default" size="sm">Primary</Button>
              <Button variant="outline" size="sm">Secondary</Button>
            </CardFooter>
          </Card>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Newsletter</CardTitle>
              <CardDescription>Subscribe to our newsletter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input type="email" placeholder="your@email.com" />
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Theme Variables Preview */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Current Theme Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 bg-card rounded-lg border border-border">
          <div className="text-center">
            <div className="w-full h-16 rounded-md bg-primary mb-2"></div>
            <span className="text-xs text-muted-foreground">Primary</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md bg-secondary mb-2"></div>
            <span className="text-xs text-muted-foreground">Secondary</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md bg-accent mb-2"></div>
            <span className="text-xs text-muted-foreground">Accent</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md bg-muted mb-2"></div>
            <span className="text-xs text-muted-foreground">Muted</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md bg-destructive mb-2"></div>
            <span className="text-xs text-muted-foreground">Destructive</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md border border-border bg-background mb-2"></div>
            <span className="text-xs text-muted-foreground">Background</span>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4">Usage</h2>
        <Card>
          <CardContent className="pt-6">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`// Import components
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

// Use in your component
<Button variant="default">Click me</Button>

// Theme switching (set on <html> element)
document.documentElement.setAttribute('data-theme', 'esquire')

// Available themes:
// - car-and-driver (default)
// - esquire
// - cosmopolitan
// - good-housekeeping
// - harpers-bazaar
// - elle
// - delish
// - mens-health
// - womens-health
// - popular-mechanics`}
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
