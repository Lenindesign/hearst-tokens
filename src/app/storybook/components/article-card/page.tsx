'use client';

import { useState } from 'react';
import { ArticleCard } from '@/components/ArticleCard';

// Sample article data
const sampleArticles = [
  {
    title: 'The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon',
    excerpt: 'With 518 horsepower and aerodynamics borrowed from motorsport, the new GT3 RS sets a new benchmark for road-legal track cars.',
    category: 'First Drive',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=450&fit=crop',
    author: 'John Smith',
    date: 'Feb 4, 2026',
    readTime: '8 min read',
  },
  {
    title: '10 Spring Fashion Trends You Need to Know About',
    excerpt: 'From bold colors to sustainable fabrics, these are the trends that will define the season according to top designers.',
    category: 'Style',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
    author: 'Emma Johnson',
    date: 'Feb 3, 2026',
    readTime: '5 min read',
  },
  {
    title: 'The Science Behind Better Sleep: What Experts Say',
    excerpt: 'New research reveals surprising insights about sleep cycles and how small changes can dramatically improve your rest.',
    category: 'Wellness',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=450&fit=crop',
    author: 'Dr. Sarah Chen',
    date: 'Feb 2, 2026',
    readTime: '6 min read',
  },
];

const themes = [
  { id: 'car-and-driver', name: 'Car and Driver' },
  { id: 'esquire', name: 'Esquire' },
  { id: 'cosmopolitan', name: 'Cosmopolitan' },
  { id: 'good-housekeeping', name: 'Good Housekeeping' },
  { id: 'harpers-bazaar', name: "Harper's Bazaar" },
  { id: 'elle', name: 'Elle' },
];

// Code example for documentation
const codeExample = `import { ArticleCard } from '@/components/ArticleCard';

function MyPage() {
  return (
    <ArticleCard
      title="Article Title"
      excerpt="A brief description of the article content..."
      category="Category"
      imageUrl="/path/to/image.jpg"
      author="Author Name"
      date="Feb 4, 2026"
      readTime="5 min read"
      href="/articles/my-article"
    />
  );
}`;

const propsData = [
  { name: 'title', type: 'string', required: true, description: 'Article title' },
  { name: 'excerpt', type: 'string', required: true, description: 'Short description or excerpt' },
  { name: 'category', type: 'string', required: true, description: 'Category label shown as badge' },
  { name: 'imageUrl', type: 'string', required: true, description: 'Hero image URL' },
  { name: 'author', type: 'string', required: true, description: 'Author name' },
  { name: 'authorAvatar', type: 'string', required: false, description: 'Author avatar URL' },
  { name: 'date', type: 'string', required: true, description: 'Publication date' },
  { name: 'readTime', type: 'string', required: false, description: 'Estimated reading time' },
  { name: 'href', type: 'string', required: false, description: 'Link to full article' },
  { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
  { name: 'onReadMore', type: '() => void', required: false, description: 'Click handler for Read More button' },
];

export default function ArticleCardPage() {
  const [activeTheme, setActiveTheme] = useState('car-and-driver');

  return (
    <div className="p-12 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-12 border-b border-neutral-400 pb-6">
        <p className="text-xs text-neutral-600 m-0 uppercase tracking-wide">Component</p>
        <h1 className="text-5xl font-bold text-neutral-1000 mt-2 m-0">
          Article Card
        </h1>
        <p className="text-lg text-neutral-700 mt-4 max-w-[800px]">
          A composite component combining shadcn/ui primitives (Card, Badge, Button) 
          with design tokens. Automatically adapts to any Hearst brand theme.
        </p>
      </div>

      {/* Theme Switcher */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-4">
          Live Preview
        </h2>
        <p className="text-base text-neutral-700 mb-5">
          Switch between brand themes to see how the same component adapts its appearance.
        </p>
        
        {/* Theme Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(theme.id)}
              className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                activeTheme === theme.id
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Preview Area */}
        <div 
          data-theme={activeTheme}
          className="rounded-lg p-8"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleArticles.map((article, index) => (
              <ArticleCard
                key={index}
                {...article}
                onReadMore={() => alert(`Clicked: ${article.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-4">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
            <h4 className="font-semibold text-neutral-900 m-0 mb-2">1. CSS Variables</h4>
            <p className="text-sm text-neutral-700 m-0">
              The component uses CSS variables like <code className="bg-neutral-300 px-1 rounded">var(--primary)</code> for 
              colors, which are defined per-brand in globals.css.
            </p>
          </div>
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
            <h4 className="font-semibold text-neutral-900 m-0 mb-2">2. shadcn/ui Primitives</h4>
            <p className="text-sm text-neutral-700 m-0">
              Built with Card, Badge, and Button from shadcn/ui. These components 
              already reference CSS variables for theming.
            </p>
          </div>
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
            <h4 className="font-semibold text-neutral-900 m-0 mb-2">3. Theme Activation</h4>
            <p className="text-sm text-neutral-700 m-0">
              Set <code className="bg-neutral-300 px-1 rounded">data-theme=&quot;brand-name&quot;</code> on any 
              parent element to activate that brand&apos;s styles.
            </p>
          </div>
        </div>
      </section>

      {/* Components Used */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-4">
          shadcn/ui Components Used
        </h2>
        
        <div className="bg-neutral-100 border border-neutral-400 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-200">
                <th className="text-left p-4 font-semibold text-neutral-900">Component</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Usage</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Themed Properties</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-300">
                <td className="p-4 font-medium">Card</td>
                <td className="p-4 text-neutral-700">Container wrapper</td>
                <td className="p-4 text-neutral-600">background, border, border-radius</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-4 font-medium">Badge</td>
                <td className="p-4 text-neutral-700">Category label</td>
                <td className="p-4 text-neutral-600">background (primary), text color, border-radius</td>
              </tr>
              <tr className="border-t border-neutral-300">
                <td className="p-4 font-medium">Button</td>
                <td className="p-4 text-neutral-700">Read More CTA</td>
                <td className="p-4 text-neutral-600">background (primary), text color, border-radius</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Props Documentation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-4">
          Props
        </h2>
        
        <div className="bg-neutral-100 border border-neutral-400 rounded-lg overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-neutral-200">
                <th className="text-left p-4 font-semibold text-neutral-900">Prop</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Type</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Required</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Description</th>
              </tr>
            </thead>
            <tbody>
              {propsData.map((prop, index) => (
                <tr 
                  key={prop.name} 
                  className={`border-t border-neutral-300 ${index % 2 === 1 ? 'bg-neutral-200/50' : ''}`}
                >
                  <td className="p-4 font-mono text-sm">{prop.name}</td>
                  <td className="p-4 font-mono text-sm text-neutral-600">{prop.type}</td>
                  <td className="p-4">
                    {prop.required ? (
                      <span className="bg-neutral-900 text-white text-xs px-2 py-1 rounded">Required</span>
                    ) : (
                      <span className="text-neutral-500 text-sm">Optional</span>
                    )}
                  </td>
                  <td className="p-4 text-neutral-700">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-4">
          Usage Example
        </h2>
        
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
          <div className="px-4 py-3 bg-[#2d2d2d] border-b border-[#3d3d3d]">
            <span className="font-mono text-sm text-[#9d9d9d]">Example.tsx</span>
          </div>
          <pre className="m-0 p-5 overflow-auto font-mono text-[13px] leading-relaxed text-[#d4d4d4]">
            <code>{codeExample}</code>
          </pre>
        </div>
      </section>

      {/* Brand Differences */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-4">
          Brand Differences
        </h2>
        <p className="text-base text-neutral-700 mb-5">
          The same ArticleCard component looks different across brands due to CSS variable overrides:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-neutral-100 border border-neutral-400 rounded-lg overflow-hidden min-w-[600px]">
            <thead>
              <tr className="bg-neutral-200">
                <th className="text-left p-4 font-semibold text-neutral-900">Brand</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Primary Color</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Border Radius</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Typography Feel</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-300">
                <td className="p-4 font-medium">Car and Driver</td>
                <td className="p-4"><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#1B5F8A'}}></span>#1B5F8A (Blue)</td>
                <td className="p-4">0px (Sharp)</td>
                <td className="p-4 text-neutral-700">Bold, condensed, automotive</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-4 font-medium">Esquire</td>
                <td className="p-4"><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#15263d'}}></span>#15263d (Navy)</td>
                <td className="p-4">4px (Subtle)</td>
                <td className="p-4 text-neutral-700">Sophisticated, minimal</td>
              </tr>
              <tr className="border-t border-neutral-300">
                <td className="p-4 font-medium">Cosmopolitan</td>
                <td className="p-4"><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#d70000'}}></span>#d70000 (Red)</td>
                <td className="p-4">8px (Rounded)</td>
                <td className="p-4 text-neutral-700">Bold, playful, feminine</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-4 font-medium">Good Housekeeping</td>
                <td className="p-4"><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#c41230'}}></span>#c41230 (Red)</td>
                <td className="p-4">8px (Rounded)</td>
                <td className="p-4 text-neutral-700">Warm, trustworthy, classic</td>
              </tr>
              <tr className="border-t border-neutral-300">
                <td className="p-4 font-medium">Harper&apos;s Bazaar</td>
                <td className="p-4"><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#000000'}}></span>#000000 (Black)</td>
                <td className="p-4">0px (Sharp)</td>
                <td className="p-4 text-neutral-700">Elegant, high-fashion</td>
              </tr>
              <tr className="border-t border-neutral-300 bg-neutral-200/50">
                <td className="p-4 font-medium">Elle</td>
                <td className="p-4"><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#000000'}}></span>#000000 (Black)</td>
                <td className="p-4">0px (Sharp)</td>
                <td className="p-4 text-neutral-700">Modern, editorial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-neutral-900 rounded-lg p-8 text-neutral-100">
        <h2 className="text-2xl font-bold m-0 mb-4">Key Takeaways</h2>
        <ul className="text-base text-neutral-300 m-0 pl-5 space-y-2">
          <li><strong className="text-white">One Component, Many Brands:</strong> Write the component once, it works for all Hearst brands</li>
          <li><strong className="text-white">shadcn/ui Foundation:</strong> Built on accessible, well-tested primitives</li>
          <li><strong className="text-white">CSS Variable Theming:</strong> Brand personality comes from CSS, not component code</li>
          <li><strong className="text-white">No Conditional Logic:</strong> No if/else for brands - the cascade handles everything</li>
          <li><strong className="text-white">Easy to Extend:</strong> Add new brands by defining CSS variables, no component changes needed</li>
        </ul>
      </section>
    </div>
  );
}
