'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArticleCard } from '@/components/ArticleCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Article type
type Article = {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
};

// Brand-specific article data
const brandArticles: Record<string, Article[]> = {
  'car-and-driver': [
    {
      title: 'The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon',
      excerpt: 'With 518 horsepower and aerodynamics borrowed from motorsport, the new GT3 RS sets a new benchmark for road-legal track cars.',
      category: 'First Drive',
      imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=450&fit=crop',
      author: 'John Smith',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '8 min read',
    },
    {
      title: 'BMW M3 vs Mercedes-AMG C63: The Ultimate Showdown',
      excerpt: 'We put two of the most iconic sport sedans head-to-head on track and street to find out which deserves your money.',
      category: 'Comparison Test',
      imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=450&fit=crop',
      author: 'Mike Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '12 min read',
    },
    {
      title: 'Electric Trucks Are Finally Ready for Real Work',
      excerpt: 'After years of promises, the latest electric pickups can actually tow, haul, and work as hard as their gas-powered rivals.',
      category: 'Technology',
      imageUrl: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&h=450&fit=crop',
      author: 'Sarah Mitchell',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '7 min read',
    },
  ],
  'esquire': [
    {
      title: 'The New Rules of Power Dressing in 2026',
      excerpt: 'Forget everything you knew about suits. The modern professional wardrobe is being redefined by a new generation of designers.',
      category: 'Style',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
      author: 'James Crawford',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '6 min read',
    },
    {
      title: 'Inside the Mind of Hollywood\'s Most Reclusive Director',
      excerpt: 'After a decade of silence, the filmmaker behind some of cinema\'s greatest works finally opens up about art, legacy, and regret.',
      category: 'Interview',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop',
      author: 'David Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '15 min read',
    },
    {
      title: 'The Whiskey That\'s Worth the 20-Year Wait',
      excerpt: 'A rare Japanese single malt finally hits American shores. We traveled to Kyoto to understand why collectors are obsessed.',
      category: 'Drinks',
      imageUrl: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&h=450&fit=crop',
      author: 'Robert Hayes',
      authorAvatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '8 min read',
    },
  ],
  'cosmopolitan': [
    {
      title: '15 Date Night Looks That Will Make Them Stare',
      excerpt: 'From bold reds to unexpected textures, these outfits are guaranteed to turn heads and boost your confidence.',
      category: 'Fashion',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=450&fit=crop',
      author: 'Jessica Park',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '5 min read',
    },
    {
      title: 'The Relationship Green Flags You Might Be Missing',
      excerpt: 'We asked therapists to share the subtle signs that your partner is actually a keeper. Number 7 will surprise you.',
      category: 'Love',
      imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=450&fit=crop',
      author: 'Dr. Amanda Lee',
      authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '7 min read',
    },
    {
      title: 'The Skincare Ingredient Dermatologists Are Obsessed With',
      excerpt: 'Move over retinol. This powerhouse ingredient is changing everything we know about anti-aging skincare.',
      category: 'Beauty',
      imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=450&fit=crop',
      author: 'Michelle Torres',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '6 min read',
    },
  ],
  'good-housekeeping': [
    {
      title: '25 Easy Weeknight Dinners the Whole Family Will Love',
      excerpt: 'These simple, nutritious recipes take 30 minutes or less and are kid-approved. Your meal planning just got easier.',
      category: 'Recipes',
      imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=450&fit=crop',
      author: 'Martha Williams',
      authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '10 min read',
    },
    {
      title: 'The Spring Cleaning Checklist You Actually Need',
      excerpt: 'Our experts break down exactly what to clean, when, and how. Plus, the products that make it all easier.',
      category: 'Home',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=450&fit=crop',
      author: 'Susan Baker',
      authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '8 min read',
    },
    {
      title: 'Best Air Fryers of 2026: Tested by Our Kitchen Lab',
      excerpt: 'We cooked over 200 batches of fries, chicken, and vegetables to find the air fryers that actually deliver.',
      category: 'Product Reviews',
      imageUrl: 'https://images.unsplash.com/photo-1585325701165-351af916e581?w=800&h=450&fit=crop',
      author: 'Test Kitchen Team',
      authorAvatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '12 min read',
    },
  ],
  'harpers-bazaar': [
    {
      title: 'The Designers Redefining Haute Couture',
      excerpt: 'A new wave of visionaries is bringing fresh perspectives to fashion\'s most exclusive realm. Meet the names to know.',
      category: 'Fashion',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
      author: 'Victoria Laurent',
      authorAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '9 min read',
    },
    {
      title: 'Inside the World\'s Most Exclusive Art Collection',
      excerpt: 'A rare glimpse into a private collection that rivals major museums, curated over three generations of passionate collectors.',
      category: 'Culture',
      imageUrl: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=450&fit=crop',
      author: 'Alexandra Moore',
      authorAvatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '11 min read',
    },
    {
      title: 'The Jewelry Trends That Will Define This Year',
      excerpt: 'From sculptural gold to meaningful gemstones, these are the pieces fashion insiders are investing in now.',
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=450&fit=crop',
      author: 'Sophie Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '6 min read',
    },
  ],
  'elle': [
    {
      title: 'The Rise of Quiet Luxury: Less Logo, More Impact',
      excerpt: 'Why the fashion world is embracing understated elegance and what it means for your wardrobe this season.',
      category: 'Trends',
      imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=450&fit=crop',
      author: 'Nina Patel',
      authorAvatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '7 min read',
    },
    {
      title: 'Meet the Women Changing the Tech Industry',
      excerpt: 'These founders, engineers, and executives are breaking barriers and building the future. Their advice for the next generation.',
      category: 'Women in Tech',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop',
      author: 'Rachel Kim',
      authorAvatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '10 min read',
    },
    {
      title: 'The Wellness Rituals That Actually Work',
      excerpt: 'We cut through the noise to find the self-care practices backed by science. Your morning routine is about to change.',
      category: 'Wellness',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop',
      author: 'Dr. Emily Walsh',
      authorAvatar: 'https://images.unsplash.com/photo-1546961342-ea5f71b193f3?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '8 min read',
    },
  ],
};

// Default articles (fallback)
const sampleArticles = brandArticles['car-and-driver'];

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
          className="rounded-lg p-4 sm:p-8"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <div className="flex items-center justify-between mb-4 sm:hidden">
            <p 
              className="text-sm font-medium"
              style={{ color: 'var(--foreground)' }}
            >
              {(brandArticles[activeTheme] || sampleArticles).length} Articles
            </p>
            <p 
              className="text-xs"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Swipe to browse
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            className="w-full touch-pan-y"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {(brandArticles[activeTheme] || sampleArticles).map((article, index) => (
                <CarouselItem 
                  key={`${activeTheme}-${index}`}
                  className="pl-3 sm:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <ArticleCard
                    {...article}
                    onReadMore={() => alert(`Clicked: ${article.title}`)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-2" />
            <CarouselNext className="hidden sm:flex right-2" />
          </Carousel>
          {/* Mobile dots indicator */}
          <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
            {(brandArticles[activeTheme] || sampleArticles).slice(0, 5).map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.3 }}
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

      {/* Component Anatomy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-2">
          Component Anatomy
        </h2>
        <p className="text-base text-neutral-700 mb-6">
          A detailed breakdown of every element in the ArticleCard and the Carousel wrapper, with the design tokens and CSS properties that drive each piece.
        </p>

        {/* --- ArticleCard Anatomy --- */}
        <h3 className="text-xl font-bold text-neutral-900 mb-4 mt-8">
          ArticleCard
        </h3>

        <div className="space-y-4 mb-10" data-theme={activeTheme}>
          {/* 1. Card Container */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">1</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Card Container</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  The outer wrapper built on the <code className="bg-neutral-300 px-1 rounded text-xs">Card</code> shadcn/ui primitive. Provides the surface, border, and elevation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">background: var(--card)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">border: 1px solid var(--border)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">border-radius: var(--radius)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">shadow</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
              <div
                className="w-full h-[80px] shadow"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                }}
              >
                <div className="h-full flex items-center justify-center text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  Card Surface
                </div>
              </div>
            </div>
          </div>

          {/* 2. Hero Image */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">2</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Hero Image</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  A 16:9 responsive image area using Next.js <code className="bg-neutral-300 px-1 rounded text-xs">Image</code> with object-fit cover. Includes a hover zoom transition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">aspect-ratio: 16/9</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">object-fit: cover</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">hover: scale(1.05)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">transition: 300ms</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
              <div className="relative w-full aspect-[16/9] overflow-hidden" style={{ borderRadius: 'var(--radius)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=400&h=225&fit=crop"
                  alt="Sample hero"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* 3. Category Badge */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">3</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Category Badge</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  Positioned absolutely over the top-left corner of the hero image. Uses the <code className="bg-neutral-300 px-1 rounded text-xs">Badge</code> shadcn/ui primitive with accent colors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">background: var(--accent)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">color: var(--accent-foreground)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">border-radius: var(--radius)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-size: 12px</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-weight: 600</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center gap-2">
              <Badge>First Drive</Badge>
              <Badge>Recipes</Badge>
            </div>
          </div>

          {/* 4. Title */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">4</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Title</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  The article headline. Uses the brand&apos;s display font and weight, making this one of the most visually distinct elements across themes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-family: var(--font-display)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-weight: var(--font-display-weight)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">color: var(--card-foreground)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-size: 16px / 18px (sm)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">line-height: snug</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center">
              <h3
                className="text-lg leading-snug m-0"
                style={{
                  color: 'var(--card-foreground)',
                  fontFamily: 'var(--font-display, inherit)',
                  fontWeight: 'var(--font-display-weight, 700)' as React.CSSProperties['fontWeight'],
                }}
              >
                The 2026 Porsche 911 GT3 RS
              </h3>
            </div>
          </div>

          {/* 5. Excerpt */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">5</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Excerpt</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  A short description of the article content. Uses the muted foreground color for visual hierarchy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">color: var(--muted-foreground)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-size: 14px</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">margin-bottom: 16px</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center">
              <p className="text-sm m-0" style={{ color: 'var(--muted-foreground)' }}>
                With 518 horsepower and aerodynamics borrowed from motorsport...
              </p>
            </div>
          </div>

          {/* 6. Author Avatar */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">6</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Author Avatar</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  A 32&times;32 circular image. Falls back to a styled initials placeholder using the brand&apos;s primary color palette.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">width/height: 32px</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">border-radius: full</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">fallback bg: var(--primary)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">fallback color: var(--primary-foreground)</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center gap-3">
              {/* Photo avatar */}
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0" style={{ backgroundColor: 'var(--muted)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                  alt="Photo avatar"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Initials fallback */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                JS
              </div>
              <span className="text-xs text-neutral-600">Photo &amp; Fallback</span>
            </div>
          </div>

          {/* 7. Author Name */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">7</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Author Name</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  Displayed in uppercase with wide tracking. Truncates with ellipsis when the card is narrow.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">color: var(--card-foreground)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-size: 14px</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-weight: 500</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">text-transform: uppercase</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">letter-spacing: wide</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">overflow: truncate</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center">
              <span
                className="font-medium uppercase tracking-wide"
                style={{ color: 'var(--card-foreground)', fontSize: '14px' }}
              >
                John Smith
              </span>
            </div>
          </div>

          {/* 8. Date & Read Time */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">8</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Date &amp; Read Time</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  Publication date and optional reading time, separated by a middle dot. Smallest text in the card for clear hierarchy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">color: var(--muted-foreground)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-size: 12px</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">text-transform: uppercase</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">letter-spacing: wide</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center">
              <span
                className="uppercase tracking-wide"
                style={{ color: 'var(--muted-foreground)', fontSize: '12px' }}
              >
                Feb 4, 2026 &middot; 8 min read
              </span>
            </div>
          </div>

          {/* 9. CTA Button */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">9</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">CTA Button</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  Full-width call-to-action at the bottom of the card. Uses the <code className="bg-neutral-300 px-1 rounded text-xs">Button</code> shadcn/ui primitive. Automatically pushed to the bottom via flex layout.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">background: var(--primary)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">color: var(--primary-foreground)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">border-radius: var(--radius)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">text-transform: var(--button-text-transform)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-size: var(--button-font-size)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">font-weight: 700</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
              <Button variant="default" className="w-full">
                <span>Read More</span>
              </Button>
            </div>
          </div>
        </div>

        {/* --- Carousel Anatomy --- */}
        <h3 className="text-xl font-bold text-neutral-900 mb-4 mt-10">
          Carousel
        </h3>
        <p className="text-sm text-neutral-700 mb-4">
          The Carousel wraps the ArticleCards in a horizontally scrollable, swipeable container powered by <code className="bg-neutral-300 px-1 rounded text-xs">embla-carousel-react</code>.
        </p>

        <div className="space-y-4" data-theme={activeTheme}>
          {/* Carousel Container */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white text-sm font-bold">A</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Carousel</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  The root wrapper. Sets up the Embla carousel context with options for alignment, looping, and drag behavior.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">align: start</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">loop: true</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">dragFree: true</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">containScroll: trimSnaps</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
              <div className="w-full h-[52px] border-2 border-dashed border-neutral-500 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="flex gap-1.5 px-2">
                  <div className="w-10 h-8 rounded bg-neutral-400 flex-shrink-0" />
                  <div className="w-10 h-8 rounded bg-neutral-400 flex-shrink-0" />
                  <div className="w-10 h-8 rounded bg-neutral-400 flex-shrink-0" />
                  <div className="w-5 h-8 rounded bg-neutral-400/50 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>

          {/* CarouselContent */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white text-sm font-bold">B</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">CarouselContent</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  The scrollable track. A flex row with negative left margin to create consistent gutters between items via matching padding-left on each item.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">display: flex</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">margin-left: -12px / -16px (sm)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">cursor: grab</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
              <div className="w-full flex gap-2 cursor-grab">
                <div className="flex-1 h-8 rounded bg-neutral-400 flex items-center justify-center text-[9px] text-neutral-100 font-mono">flex</div>
                <div className="flex-1 h-8 rounded bg-neutral-400 flex items-center justify-center text-[9px] text-neutral-100 font-mono">flex</div>
                <div className="flex-1 h-8 rounded bg-neutral-400 flex items-center justify-center text-[9px] text-neutral-100 font-mono">flex</div>
              </div>
            </div>
          </div>

          {/* CarouselItem */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white text-sm font-bold">C</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">CarouselItem</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  Each slide slot. Uses responsive flex-basis to show different numbers of cards at each breakpoint.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">padding-left: 12px / 16px (sm)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">basis: 85% (mobile)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">basis: 50% (sm)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">basis: 33.3% (lg)</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
              <div className="w-full flex gap-1">
                <div className="basis-1/3 flex-shrink-0">
                  <div className="h-10 rounded border-2 border-neutral-900 bg-neutral-300 flex items-center justify-center text-[9px] font-mono text-neutral-800">33%</div>
                </div>
                <div className="basis-1/3 flex-shrink-0">
                  <div className="h-10 rounded border border-dashed border-neutral-500 bg-neutral-200 flex items-center justify-center text-[9px] font-mono text-neutral-600">33%</div>
                </div>
                <div className="basis-1/3 flex-shrink-0">
                  <div className="h-10 rounded border border-dashed border-neutral-500 bg-neutral-200 flex items-center justify-center text-[9px] font-mono text-neutral-600">33%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white text-sm font-bold">D</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">CarouselPrevious / CarouselNext</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  Arrow navigation buttons positioned on the left and right edges. Hidden on mobile (touch swiping is the primary interaction), visible from the <code className="bg-neutral-300 px-1 rounded text-xs">sm</code> breakpoint up.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">display: hidden / flex (sm+)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">variant: outline</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">size: icon</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">border-radius: full</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center gap-3">
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Button>
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white text-sm font-bold">E</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-1000 m-0 text-base">Mobile Dot Indicators</h4>
                <p className="text-sm text-neutral-700 mt-1 mb-2">
                  Pagination dots shown only on mobile screens to indicate how many slides exist. Replaces the arrow buttons at small viewports.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">display: flex / hidden (sm+)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">width/height: 8px</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">border-radius: full</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">color: var(--muted-foreground)</span>
                  <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">opacity: 0.3</span>
                </div>
              </div>
            </div>
            {/* Visual Sample */}
            <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.8 }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.3 }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.3 }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.3 }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.3 }} />
              </div>
            </div>
          </div>
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
