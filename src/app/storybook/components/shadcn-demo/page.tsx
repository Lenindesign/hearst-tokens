'use client';

import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
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
          className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
          style={{
            backgroundColor: currentTheme === theme.kebabId ? 'var(--primary)' : 'var(--secondary)',
            color: currentTheme === theme.kebabId ? 'var(--primary-foreground)' : 'var(--secondary-foreground)',
          }}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}

// Styled container component for demo sections
function DemoContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div 
      className={`p-6 rounded-lg ${className}`}
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
      }}
    >
      {children}
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
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
          shadcn/ui Components
        </h1>
        <p style={{ color: 'var(--muted-foreground)' }}>
          Multi-brand themed components using shadcn/ui. Select a brand theme below to see how components adapt.
        </p>
      </div>

      {/* Theme Selector */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Select Brand Theme</h2>
        <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      </div>

      {/* Buttons Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Buttons</h2>
        <DemoContainer className="flex flex-wrap gap-4">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </DemoContainer>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2" style={{ color: 'var(--muted-foreground)' }}>Button Sizes</h3>
          <DemoContainer className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
            </Button>
          </DemoContainer>
        </div>
      </section>

      {/* Badges Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Badges</h2>
        <DemoContainer className="flex flex-wrap gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </DemoContainer>
      </section>

      {/* Input Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Inputs</h2>
        <div 
          className="p-6 rounded-lg"
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            maxWidth: 448,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ width: '100%' }}>
            <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--foreground)' }}>Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div style={{ width: '100%' }}>
            <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--foreground)' }}>Password</label>
            <Input type="password" placeholder="Enter your password" />
          </div>
          <div style={{ width: '100%' }}>
            <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--foreground)' }}>Disabled</label>
            <Input type="text" placeholder="Disabled input" disabled />
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Accordion</h2>
        <div 
          className="p-6 rounded-lg"
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            maxWidth: 600,
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern for accordions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match your brand theme, and can be customized using CSS variables.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It uses CSS animations for smooth open/close transitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Carousel</h2>
        
        {/* Default Carousel */}
        <div 
          className="p-6 rounded-lg mb-6"
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
          }}
        >
          <h3 className="text-sm font-medium mb-4" style={{ color: 'var(--muted-foreground)' }}>Default</h3>
          <div className="mx-auto" style={{ maxWidth: 400, paddingLeft: 48, paddingRight: 48 }}>
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent 
                          className="flex items-center justify-center p-6"
                          style={{ aspectRatio: '1 / 1' }}
                        >
                          <span 
                            className="text-4xl font-semibold"
                            style={{ color: 'var(--foreground)' }}
                          >
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Sizes - Multiple Items */}
        <div 
          className="p-6 rounded-lg"
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
          }}
        >
          <h3 className="text-sm font-medium mb-2" style={{ color: 'var(--muted-foreground)' }}>Sizes</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
            To set the size of the items, you can use the <code style={{ backgroundColor: 'var(--muted)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>basis</code> utility class on the <code style={{ backgroundColor: 'var(--muted)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>&lt;CarouselItem /&gt;</code>.
          </p>
          <div className="mx-auto" style={{ maxWidth: 500, paddingLeft: 48, paddingRight: 48 }}>
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent 
                          className="flex items-center justify-center p-6"
                          style={{ aspectRatio: '1 / 1' }}
                        >
                          <span 
                            className="text-3xl font-semibold"
                            style={{ color: 'var(--foreground)' }}
                          >
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Card */}
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
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
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
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
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Current Theme Colors</h2>
        <DemoContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="text-center">
            <div className="w-full h-16 rounded-md mb-2" style={{ backgroundColor: 'var(--primary)' }}></div>
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Primary</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md mb-2" style={{ backgroundColor: 'var(--secondary)' }}></div>
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Secondary</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md mb-2" style={{ backgroundColor: 'var(--accent)' }}></div>
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Accent</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md mb-2" style={{ backgroundColor: 'var(--muted)' }}></div>
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Muted</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md mb-2" style={{ backgroundColor: 'var(--destructive)' }}></div>
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Destructive</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded-md mb-2" style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}></div>
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Background</span>
          </div>
        </DemoContainer>
      </section>

      {/* Usage Instructions */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Usage</h2>
        <Card>
          <CardContent className="pt-6">
            <pre 
              className="p-4 rounded-md overflow-x-auto text-sm"
              style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}
            >
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
