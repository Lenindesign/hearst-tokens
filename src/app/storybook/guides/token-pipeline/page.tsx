'use client';

import { useState, useEffect } from 'react';
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

// Article type with optional ctaText
type Article = {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  ctaText?: string;
};

// Brand-specific demo articles (5 per brand for carousel)
const demoArticles: Record<string, Article[]> = {
  'car-and-driver': [
    {
      title: 'The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon',
      excerpt: 'With 518 horsepower and aerodynamics borrowed from motorsport, the new GT3 RS sets a new benchmark.',
      category: 'First Drive',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*',
      author: 'John Smith',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '8 min read',
      ctaText: 'SHOP NEW',
    },
    {
      title: 'BMW M3 vs Mercedes-AMG C63: The Ultimate Showdown',
      excerpt: 'We put two of the most iconic sport sedans head-to-head on track and street.',
      category: 'Comparison',
      imageUrl: '/images/bmw-m3-comparison.png',
      author: 'Mike Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '12 min read',
      ctaText: 'SHOP NEW',
    },
    {
      title: 'Electric Trucks Are Finally Ready for Real Work',
      excerpt: 'The latest electric pickups can actually tow, haul, and work as hard as gas rivals.',
      category: 'Technology',
      imageUrl: '/images/gmc-electric-truck.png',
      author: 'Sarah Mitchell',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '7 min read',
      ctaText: 'SHOP NEW',
    },
    {
      title: 'The Best Sports Cars Under $50,000 in 2026',
      excerpt: 'You don\'t need to spend a fortune to have fun behind the wheel.',
      category: 'Buyer\'s Guide',
      imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=450&fit=crop',
      author: 'Chris Taylor',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 1, 2026',
      readTime: '10 min read',
      ctaText: 'SHOP NEW',
    },
    {
      title: 'How Hyundai Became a Performance Powerhouse',
      excerpt: 'From economy cars to track-ready N models, the Korean brand\'s transformation is complete.',
      category: 'Feature',
      imageUrl: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&h=450&fit=crop',
      author: 'Amanda Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      date: 'Jan 31, 2026',
      readTime: '9 min read',
      ctaText: 'SHOP NEW',
    },
  ],
  'esquire': [
    {
      title: 'The New Rules of Power Dressing in 2026',
      excerpt: 'Forget everything you knew about suits. The modern professional wardrobe is being redefined.',
      category: 'Style',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/1-indexl-696fbe91e1e15.jpg',
      author: 'James Crawford',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '6 min read',
    },
    {
      title: 'Inside the Mind of Hollywood\'s Most Reclusive Director',
      excerpt: 'After a decade of silence, the filmmaker finally opens up about art and legacy.',
      category: 'Interview',
      imageUrl: 'https://pub-4345f0f77c424370b4354c6a404ac802.r2.dev/jason.jpg',
      author: 'David Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '15 min read',
    },
    {
      title: 'The Whiskey That\'s Worth the 20-Year Wait',
      excerpt: 'A rare Japanese single malt finally hits American shores.',
      category: 'Drinks',
      imageUrl: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&h=450&fit=crop',
      author: 'Robert Hayes',
      authorAvatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '8 min read',
    },
    {
      title: 'The Watch Collection Every Man Should Start With',
      excerpt: 'Five timepieces that form the foundation of a serious collection.',
      category: 'Watches',
      imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=450&fit=crop',
      author: 'Michael Torres',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 1, 2026',
      readTime: '7 min read',
    },
    {
      title: 'Why Every Man Needs a Good Tailor',
      excerpt: 'The difference between looking good and looking great is in the details.',
      category: 'Style',
      imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=450&fit=crop',
      author: 'William Park',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      date: 'Jan 31, 2026',
      readTime: '5 min read',
    },
  ],
  'cosmopolitan': [
    {
      title: '15 Date Night Looks That Will Make Them Stare',
      excerpt: 'From bold reds to unexpected textures, these outfits are guaranteed to turn heads.',
      category: 'Fashion',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=450&fit=crop',
      author: 'Jessica Park',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '5 min read',
    },
    {
      title: 'The Relationship Green Flags You Might Be Missing',
      excerpt: 'Therapists share the subtle signs that your partner is actually a keeper.',
      category: 'Love',
      imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=450&fit=crop',
      author: 'Dr. Amanda Lee',
      authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '7 min read',
    },
    {
      title: 'Sydney Sweeney Created This Moment. But Does It Belong to Her?',
      excerpt: 'The actor is selling underwear, not ideology—at least, that\'s the plan.',
      category: 'Beauty',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/f4eb21d0-0fc4-494d-ac4c-13b6eebbac5f.jpg',
      author: 'Michelle Torres',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '6 min read',
    },
    {
      title: 'How to Finally Get Over Your Ex (For Real This Time)',
      excerpt: 'Science-backed strategies for moving on and finding yourself again.',
      category: 'Relationships',
      imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=450&fit=crop',
      author: 'Sarah Kim',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 1, 2026',
      readTime: '8 min read',
    },
    {
      title: 'The Best Hair Colors for Your Skin Tone',
      excerpt: 'Find your perfect shade with our comprehensive guide.',
      category: 'Hair',
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=450&fit=crop',
      author: 'Emma Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      date: 'Jan 31, 2026',
      readTime: '6 min read',
    },
  ],
  'good-housekeeping': [
    {
      title: '25 Easy Weeknight Dinners the Whole Family Will Love',
      excerpt: 'These simple, nutritious recipes take 30 minutes or less and are kid-approved.',
      category: 'Recipes',
      imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=450&fit=crop',
      author: 'Martha Williams',
      authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '10 min read',
    },
    {
      title: 'The Spring Cleaning Checklist You Actually Need',
      excerpt: 'Our experts break down exactly what to clean, when, and how.',
      category: 'Home',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=450&fit=crop',
      author: 'Susan Baker',
      authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '8 min read',
    },
    {
      title: 'Best Air Fryers of 2026: Tested by Our Kitchen Lab',
      excerpt: 'We cooked over 200 batches to find the air fryers that actually deliver.',
      category: 'Reviews',
      imageUrl: 'https://images.unsplash.com/photo-1585325701165-351af916e581?w=800&h=450&fit=crop',
      author: 'Test Kitchen',
      authorAvatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '12 min read',
    },
    {
      title: 'How to Organize Your Pantry Like a Pro',
      excerpt: 'Simple systems that will transform your kitchen storage.',
      category: 'Organization',
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=450&fit=crop',
      author: 'Linda Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 1, 2026',
      readTime: '7 min read',
    },
    {
      title: 'The Best Plants for Every Room in Your Home',
      excerpt: 'Bring life to your space with these easy-care houseplants.',
      category: 'Gardening',
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=450&fit=crop',
      author: 'Nancy Green',
      authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      date: 'Jan 31, 2026',
      readTime: '6 min read',
    },
  ],
  'harpers-bazaar': [
    {
      title: 'Kaia Gerber Returns the Gaze',
      excerpt: 'A new wave of visionaries is bringing fresh perspectives to fashion\'s most exclusive realm.',
      category: 'Fashion',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/93277-lro-harpersbazaar-127-07-v5-digital-wm-695fe8db77cbd.jpg?resize=2048:*',
      author: 'Victoria Laurent',
      authorAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '9 min read',
    },
    {
      title: 'Inside the World\'s Most Exclusive Art Collection',
      excerpt: 'A rare glimpse into a private collection that rivals major museums.',
      category: 'Culture',
      imageUrl: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=450&fit=crop',
      author: 'Alexandra Moore',
      authorAvatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '11 min read',
    },
    {
      title: 'The Jewelry Trends That Will Define This Year',
      excerpt: 'From sculptural gold to meaningful gemstones, these are the pieces to invest in.',
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=450&fit=crop',
      author: 'Sophie Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '6 min read',
    },
    {
      title: 'The Supermodels Who Changed Fashion Forever',
      excerpt: 'A look back at the icons who defined an era.',
      category: 'Icons',
      imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=450&fit=crop',
      author: 'Diana Ross',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 1, 2026',
      readTime: '10 min read',
    },
    {
      title: 'The Most Anticipated Fashion Collaborations of 2026',
      excerpt: 'Designer partnerships that are set to shake up the industry.',
      category: 'News',
      imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=450&fit=crop',
      author: 'Claire Bennett',
      authorAvatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
      date: 'Jan 31, 2026',
      readTime: '7 min read',
    },
  ],
  'elle': [
    {
      title: 'The Rise of Quiet Luxury: Less Logo, More Impact',
      excerpt: 'Why the fashion world is embracing understated elegance and what it means for your wardrobe.',
      category: 'Trends',
      imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=450&fit=crop',
      author: 'Nina Patel',
      authorAvatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '7 min read',
    },
    {
      title: 'Meet the Women Changing the Tech Industry',
      excerpt: 'These founders and executives are breaking barriers and building the future.',
      category: 'Women in Tech',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/e0b52490-554a-4925-97b0-bfbd3f64df32.jpg?crop=1xw:0.748175182482xh;center,top',
      author: 'Rachel Kim',
      authorAvatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 3, 2026',
      readTime: '10 min read',
    },
    {
      title: 'The Wellness Rituals That Actually Work',
      excerpt: 'We cut through the noise to find the self-care practices backed by science.',
      category: 'Wellness',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop',
      author: 'Dr. Emily Walsh',
      authorAvatar: 'https://images.unsplash.com/photo-1546961342-ea5f71b193f3?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 2, 2026',
      readTime: '8 min read',
    },
    {
      title: 'The Capsule Wardrobe Guide for 2026',
      excerpt: 'Build a versatile closet with just 30 essential pieces.',
      category: 'Style',
      imageUrl: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=450&fit=crop',
      author: 'Olivia Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 1, 2026',
      readTime: '9 min read',
    },
    {
      title: 'How to Build Your Personal Brand in 2026',
      excerpt: 'Expert tips for standing out in a crowded digital landscape.',
      category: 'Career',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop',
      author: 'Maya Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      date: 'Jan 31, 2026',
      readTime: '6 min read',
    },
  ],
};

const themes = [
  { id: 'car-and-driver', name: 'Car and Driver' },
  { id: 'esquire', name: 'Esquire' },
  { id: 'cosmopolitan', name: 'Cosmopolitan' },
  { id: 'good-housekeeping', name: 'Good Housekeeping' },
  { id: 'harpers-bazaar', name: "Harper's Bazaar" },
  { id: 'elle', name: 'Elle' },
];

const brandLogos: Record<string, string> = {
  'car-and-driver': 'https://www.caranddriver.com/_assets/design-tokens/caranddriver/static/images/logos/logo.68b8e69.svg?primary=navLogoColor',
  'esquire': 'https://www.esquire.com/_assets/design-tokens/esquire/static/images/logos/logo.20861e6.svg?primary=navLogoColor',
  'cosmopolitan': 'https://www.cosmopolitan.com/_assets/design-tokens/cosmopolitan/static/images/logos/logo.eca17dd.svg?primary=%2523000000',
  'good-housekeeping': 'https://www.goodhousekeeping.com/_assets/design-tokens/goodhousekeeping/static/images/logos/logo.dc34ecc.svg?primary=navLogoColor',
  'harpers-bazaar': 'https://www.harpersbazaar.com/_assets/design-tokens/harpersbazaar/static/images/logos/logo.823d7af.svg?primary=%2523000000',
  'elle': 'https://www.elle.com/_assets/design-tokens/elle/static/images/logos/logo.2856426.svg?primary=navLogoColor',
};

export default function TokenPipelinePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'demo' | 'architecture' | 'articles' | 'simple' | 'naming'>('overview');
  const [demoTheme, setDemoTheme] = useState('car-and-driver');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isImageModalOpen) {
        setIsImageModalOpen(false);
      }
    };
    
    if (isImageModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Restore scrolling
    };
  }, [isImageModalOpen]);

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
      "radius": { "value": "4px", "type": "dimension" },
      "font": {
        "display": { "value": "Inter", "type": "fontFamily" }
      }
    },
    "cosmopolitan": {
      "colors": {
        "primary": { "value": "#d70000", "type": "color" },
        "accent": { "value": "#ff69b4", "type": "color" }
      },
      "radius": { "value": "8px", "type": "dimension" },
      "font": {
        "display": { "value": "ChronicleDisplay", "type": "fontFamily" }
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
  --radius: 4px;
  --font-display: Inter, sans-serif;
}

/* Cosmopolitan theme */
[data-theme="cosmopolitan"] {
  --primary: #d70000;
  --accent: #ff69b4;
  --radius: 8px;
  --font-display: "ChronicleDisplay", serif;
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
// - Car & Driver: Blue button, slightly rounded (4px)
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
          Overview
        </button>
        <button
          onClick={() => setActiveTab('demo')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'demo'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
        >
          Live Demo
        </button>
        <button
          onClick={() => setActiveTab('technical')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'technical'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
        >
          Technical
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'architecture'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
        >
          Architecture
        </button>
        <button
          onClick={() => setActiveTab('articles')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'articles'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
        >
          Articles
        </button>
        <button
          onClick={() => setActiveTab('simple')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'simple'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
        >
          Explain It Simply
        </button>
        <button
          onClick={() => setActiveTab('naming')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'naming'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
        >
          Token Naming
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
                     ┌────────────┴────────────┐
                     │                         │
                     ▼                         ▼
┌──────────────────────────────┐ ┌────────────────────────────────┐
│          Runtime             │ │     ★ Storybook (this app)     │
│                              │ │                                │
│  <html data-theme="cosmo">  │ │  Documents every layer above.  │
│                              │ │  Previews all 6 brands live.   │
│  CSS cascade applies the     │ │  Proves tokens → components   │
│  correct brand variables.    │ │  work end-to-end before code   │
│  Components instantly        │ │  ever ships to production.     │
│  reflect the brand's look.   │ │                                │
└──────────────────────────────┘ │  Acts as the single place      │
                                 │  where designers, developers,  │
                                 │  and PMs can verify the system │
                                 │  is working correctly.         │
                                 └────────────────────────────────┘
`}</pre>
            </div>

            <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 m-0 mb-4">How Storybook Ties It All Together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-neutral-300 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-neutral-900 m-0 mb-2">Visual Proof of the Pipeline</h4>
                  <p className="text-sm text-neutral-700 m-0">
                    Storybook renders the actual components with real tokens. If a token is wrong or a component breaks, you see it here first — not in production.
                  </p>
                </div>
                <div className="bg-white border border-neutral-300 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-neutral-900 m-0 mb-2">Cross-Brand Testing</h4>
                  <p className="text-sm text-neutral-700 m-0">
                    The Articles tab shows all 6 brands side by side. One glance confirms that the same component adapts correctly to every theme.
                  </p>
                </div>
                <div className="bg-white border border-neutral-300 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-neutral-900 m-0 mb-2">Living Documentation</h4>
                  <p className="text-sm text-neutral-700 m-0">
                    Instead of static specs that go stale, Storybook pulls from the same <code className="bg-neutral-200 px-1 rounded text-xs">globals.css</code> and components that production uses. Docs are always current.
                  </p>
                </div>
                <div className="bg-white border border-neutral-300 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-neutral-900 m-0 mb-2">Shared Language for Teams</h4>
                  <p className="text-sm text-neutral-700 m-0">
                    Designers, developers, and PMs all reference the same Storybook. It bridges the gap between Figma designs and shipped code.
                  </p>
                </div>
              </div>
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

      {activeTab === 'demo' && (
        <>
          {/* Live Demo Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              See the Token Pipeline in Action
            </h2>
            <p className="text-base text-neutral-700 mb-6">
              This ArticleCard component is built with shadcn/ui primitives (Card, Badge, Button) and 
              uses CSS variables for all styling. Switch between brands to see how the same component 
              automatically adapts - no code changes required.
            </p>

            {/* Theme Switcher */}
            <div className="flex flex-wrap gap-2 mb-6">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setDemoTheme(theme.id)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                    demoTheme === theme.id
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                  }`}
                >
                  {theme.name}
                </button>
              ))}
            </div>

            {/* Carousel Preview */}
            <div 
              data-theme={demoTheme}
              className="rounded-lg p-4 sm:py-8 sm:px-0 mb-6"
              style={{ backgroundColor: 'var(--background)' }}
            >
              <div className="flex items-start justify-center mb-4 gap-0 flex-wrap">
                <div className="flex items-center gap-4">
                  {brandLogos[demoTheme] && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={brandLogos[demoTheme]}
                      alt={themes.find(t => t.id === demoTheme)?.name ?? demoTheme}
                      className="h-5 sm:h-6 w-auto"
                    />
                  )}
                  <h3 
                    className="flex text-sm font-semibold"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Article Carousel (5 Cards)
                  </h3>
                </div>
                <p 
                  className="text-xs sm:hidden"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Swipe to browse
                </p>
              </div>
              <div className="sm:px-8">
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
                    {demoArticles[demoTheme].map((article, index) => (
                      <CarouselItem 
                        key={index} 
                        className="pl-3 sm:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                      >
                        <ArticleCard {...article} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </Carousel>
              </div>
              {/* Mobile dots indicator */}
              <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
                {demoArticles[demoTheme].map((_, index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.3 }}
                  />
                ))}
              </div>
            </div>

            {/* What's Happening */}
            <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 m-0 mb-4">What&apos;s Happening Behind the Scenes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-neutral-900 m-0 mb-2">The Component Code (unchanged)</h4>
                  <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-[#d4d4d4]">
                    <div><span className="text-[#569cd6]">{'<Card>'}</span></div>
                    <div className="pl-4"><span className="text-[#569cd6]">{'<Badge>'}</span><span className="text-[#ce9178]">{'{category}'}</span><span className="text-[#569cd6]">{'</Badge>'}</span></div>
                    <div className="pl-4"><span className="text-[#569cd6]">{'<h3>'}</span><span className="text-[#ce9178]">{'{title}'}</span><span className="text-[#569cd6]">{'</h3>'}</span></div>
                    <div className="pl-4"><span className="text-[#569cd6]">{'<Button>'}</span>Read More<span className="text-[#569cd6]">{'</Button>'}</span></div>
                    <div><span className="text-[#569cd6]">{'</Card>'}</span></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 m-0 mb-2">CSS Variables (per brand)</h4>
                  <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-[#d4d4d4]">
                    <div><span className="text-[#6a9955]">/* {demoTheme} */</span></div>
                    <div><span className="text-[#9cdcfe]">--primary</span>: <span className="text-[#ce9178]">{demoTheme === 'car-and-driver' ? '#1B5F8A' : demoTheme === 'cosmopolitan' ? '#d70000' : demoTheme === 'esquire' ? '#15263d' : demoTheme === 'harpers-bazaar' || demoTheme === 'elle' ? '#000000' : '#198294'}</span>;</div>
                    <div><span className="text-[#9cdcfe]">--radius</span>: <span className="text-[#ce9178]">{demoTheme === 'harpers-bazaar' || demoTheme === 'elle' || demoTheme === 'esquire' ? '0px' : demoTheme === 'car-and-driver' ? '4px' : '8px'}</span>;</div>
                    <div><span className="text-[#9cdcfe]">--background</span>: <span className="text-[#ce9178]">{demoTheme === 'car-and-driver' ? '#ffffff' : demoTheme === 'esquire' ? '#f5f6f8' : demoTheme === 'cosmopolitan' ? '#fef7f9' : '#f5f5f5'}</span>;</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mt-4 m-0">
                The component code stays exactly the same. Only the CSS variables change based on the 
                <code className="bg-neutral-200 px-1 mx-1 rounded">data-theme</code> attribute.
              </p>
            </div>
          </section>

          {/* Token Flow Visualization */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              How Tokens Flow to This Component
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-neutral-100 border border-neutral-400 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0">tokens.json defines brand values</h4>
                  <p className="text-sm text-neutral-600 mt-1 m-0">
                    <code className="bg-neutral-200 px-1 rounded">car-and-driver.primary: #1B5F8A</code>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-neutral-100 border border-neutral-400 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0">Style Dictionary generates CSS</h4>
                  <p className="text-sm text-neutral-600 mt-1 m-0">
                    <code className="bg-neutral-200 px-1 rounded">[data-theme=&quot;car-and-driver&quot;] {'{'} --primary: #1B5F8A {'}'}</code>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-neutral-100 border border-neutral-400 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0">shadcn Button uses the variable</h4>
                  <p className="text-sm text-neutral-600 mt-1 m-0">
                    <code className="bg-neutral-200 px-1 rounded">background-color: var(--primary)</code>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-neutral-100 border border-neutral-400 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0">Runtime applies the theme</h4>
                  <p className="text-sm text-neutral-600 mt-1 m-0">
                    <code className="bg-neutral-200 px-1 rounded">{'<div data-theme="car-and-driver">'}</code> activates the brand&apos;s CSS
                  </p>
                </div>
              </div>
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

            <div className="space-y-4 mb-10" data-theme={demoTheme}>
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
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
                  <div className="w-full h-[80px] shadow" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                    <div className="h-full flex items-center justify-center text-xs" style={{ color: 'var(--muted-foreground)' }}>Card Surface</div>
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
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
                  <div className="relative w-full aspect-[16/9] overflow-hidden" style={{ borderRadius: 'var(--radius)' }}>
                    <Image src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=400&h=225&fit=crop" alt="Sample hero" fill className="object-cover transition-transform duration-300 hover:scale-105" />
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
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center">
                  <h3 className="text-lg leading-snug m-0" style={{ color: 'var(--card-foreground)', fontFamily: 'var(--font-display, inherit)', fontWeight: 'var(--font-display-weight, 700)' as React.CSSProperties['fontWeight'] }}>
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
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center">
                  <p className="text-sm m-0" style={{ color: 'var(--muted-foreground)' }}>With 518 horsepower and aerodynamics borrowed from motorsport...</p>
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
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0" style={{ backgroundColor: 'var(--muted)' }}>
                    <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Photo avatar" width={32} height={32} className="object-cover w-full h-full" />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>JS</div>
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
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center">
                  <span className="font-medium uppercase tracking-wide" style={{ color: 'var(--card-foreground)', fontSize: '14px' }}>John Smith</span>
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
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center">
                  <span className="uppercase tracking-wide" style={{ color: 'var(--muted-foreground)', fontSize: '12px' }}>Feb 4, 2026 &middot; 8 min read</span>
                </div>
              </div>

              {/* 9. CTA Button */}
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
                <div className="flex gap-4 flex-1 min-w-0">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold">9</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-neutral-1000 m-0 text-base">CTA Button</h4>
                    <p className="text-sm text-neutral-700 mt-1 mb-2">
                      Full-width call-to-action at the bottom of the card. Uses the <code className="bg-neutral-300 px-1 rounded text-xs">Button</code> shadcn/ui primitive.
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
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
                  <Button variant="default" className="w-full"><span>Read More</span></Button>
                </div>
              </div>
            </div>

            {/* --- Carousel Anatomy --- */}
            <h3 className="text-xl font-bold text-neutral-900 mb-4 mt-10">Carousel</h3>
            <p className="text-sm text-neutral-700 mb-4">
              The Carousel wraps the ArticleCards in a horizontally scrollable, swipeable container powered by <code className="bg-neutral-300 px-1 rounded text-xs">embla-carousel-react</code>.
            </p>

            <div className="space-y-4" data-theme={demoTheme}>
              {/* A. Carousel */}
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

              {/* B. CarouselContent */}
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
                <div className="flex gap-4 flex-1 min-w-0">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white text-sm font-bold">B</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-neutral-1000 m-0 text-base">CarouselContent</h4>
                    <p className="text-sm text-neutral-700 mt-1 mb-2">
                      The scrollable track. A flex row with negative left margin to create consistent gutters between items.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">display: flex</span>
                      <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">margin-left: -12px / -16px (sm)</span>
                      <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">cursor: grab</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
                  <div className="w-full flex gap-2 cursor-grab">
                    <div className="flex-1 h-8 rounded bg-neutral-400 flex items-center justify-center text-[9px] text-neutral-100 font-mono">flex</div>
                    <div className="flex-1 h-8 rounded bg-neutral-400 flex items-center justify-center text-[9px] text-neutral-100 font-mono">flex</div>
                    <div className="flex-1 h-8 rounded bg-neutral-400 flex items-center justify-center text-[9px] text-neutral-100 font-mono">flex</div>
                  </div>
                </div>
              </div>

              {/* C. CarouselItem */}
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
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center">
                  <div className="w-full flex gap-1">
                    <div className="basis-1/3 flex-shrink-0"><div className="h-10 rounded border-2 border-neutral-900 bg-neutral-300 flex items-center justify-center text-[9px] font-mono text-neutral-800">33%</div></div>
                    <div className="basis-1/3 flex-shrink-0"><div className="h-10 rounded border border-dashed border-neutral-500 bg-neutral-200 flex items-center justify-center text-[9px] font-mono text-neutral-600">33%</div></div>
                    <div className="basis-1/3 flex-shrink-0"><div className="h-10 rounded border border-dashed border-neutral-500 bg-neutral-200 flex items-center justify-center text-[9px] font-mono text-neutral-600">33%</div></div>
                  </div>
                </div>
              </div>

              {/* D. Navigation Arrows */}
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
                <div className="flex gap-4 flex-1 min-w-0">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white text-sm font-bold">D</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-neutral-1000 m-0 text-base">CarouselPrevious / CarouselNext</h4>
                    <p className="text-sm text-neutral-700 mt-1 mb-2">
                      Arrow navigation buttons positioned on the left and right edges. Hidden on mobile, visible from <code className="bg-neutral-300 px-1 rounded text-xs">sm</code> up.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">display: hidden / flex (sm+)</span>
                      <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">variant: outline</span>
                      <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">size: icon</span>
                      <span className="inline-flex items-center bg-neutral-200 text-xs font-mono px-2 py-1 rounded">border-radius: full</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full lg:w-[200px] flex items-center justify-center gap-3">
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </Button>
                </div>
              </div>

              {/* E. Mobile Dots */}
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5 flex flex-col lg:flex-row gap-5">
                <div className="flex gap-4 flex-1 min-w-0">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white text-sm font-bold">E</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-neutral-1000 m-0 text-base">Mobile Dot Indicators</h4>
                    <p className="text-sm text-neutral-700 mt-1 mb-2">
                      Pagination dots shown only on mobile screens to indicate how many slides exist.
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

          {/* Key Points */}
          <section className="bg-neutral-900 rounded-lg p-8 text-neutral-100">
            <h2 className="text-2xl font-bold m-0 mb-4">Why This Matters</h2>
            <ul className="text-base text-neutral-300 m-0 pl-5 space-y-2">
              <li><strong className="text-white">Zero Component Changes:</strong> The ArticleCard code is identical for all brands</li>
              <li><strong className="text-white">Instant Theming:</strong> Change <code className="bg-neutral-700 px-1 rounded">data-theme</code> and everything updates</li>
              <li><strong className="text-white">Consistent Experience:</strong> All components using tokens stay in sync</li>
              <li><strong className="text-white">Easy Brand Updates:</strong> Change a token value, all components reflect it</li>
              <li><strong className="text-white">Designer Control:</strong> Designers own the token values, developers own the components</li>
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

      {activeTab === 'architecture' && (
        <>
          {/* Architecture - Matryoshka Analogy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              The Matryoshka Architecture
            </h2>
            <p className="text-base text-neutral-700 mb-6">
              The design token pipeline can be visualized as a Matryoshka (Russian nesting doll), 
              where each layer wraps and builds upon the previous one. This mental model helps 
              stakeholders understand how design decisions flow from abstract values to the 
              final rendered product.
            </p>

            {/* Matryoshka Image */}
            <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-6 mb-8">
              <button 
                onClick={() => setIsImageModalOpen(true)}
                className="w-full cursor-zoom-in border-0 p-0 bg-transparent"
              >
                <img 
                  src="https://pub-4345f0f77c424370b4354c6a404ac802.r2.dev/mamushka.jpg"
                  alt="Matryoshka analogy showing nested layers: CSS Variables, Tailwind CSS, shadcn/ui, HTML Structure, and Final Product"
                  className="w-full rounded-lg hover:opacity-90 transition-opacity"
                />
              </button>
              <p className="text-sm text-neutral-600 mt-4 text-center m-0">
                Each layer encapsulates the previous one, creating a clear separation of concerns
                <br />
                <span className="text-xs text-neutral-500">(Click image to enlarge)</span>
              </p>
            </div>

            {/* Image Modal */}
            {isImageModalOpen && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
                onClick={() => setIsImageModalOpen(false)}
              >
                <div className="relative max-w-[95vw] max-h-[95vh]">
                  <button
                    onClick={() => setIsImageModalOpen(false)}
                    className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-2 text-sm"
                  >
                    <span>Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <img 
                    src="https://pub-4345f0f77c424370b4354c6a404ac802.r2.dev/mamushka.jpg"
                    alt="Matryoshka analogy showing nested layers: CSS Variables, Tailwind CSS, shadcn/ui, HTML Structure, and Final Product"
                    className="max-w-full max-h-[85vh] rounded-lg object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <p className="text-center text-white/70 text-sm mt-4">
                    Press Escape or click outside to close
                  </p>
                </div>
              </div>
            )}

            {/* Rationale Section */}
            <h3 className="text-xl font-semibold text-neutral-1000 mb-4">
              Why This Analogy Works
            </h3>
            <p className="text-base text-neutral-700 mb-6">
              Just like a Matryoshka doll, where each outer layer contains and depends on the inner layers, 
              our design system architecture follows the same principle. Changes to an inner layer 
              automatically propagate outward, while each layer maintains its own responsibility.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 m-0 mb-2">CSS Variables (Innermost Layer)</h4>
                    <p className="text-sm text-neutral-700 m-0">
                      The core design decisions: colors, spacing, typography, and radii. These are the 
                      fundamental values that define each brand&apos;s visual identity. Like the smallest 
                      Matryoshka doll, they are the essential foundation that everything else is built upon.
                    </p>
                    <div className="mt-3 bg-neutral-200 rounded p-3 font-mono text-xs">
                      <code>--primary: #1B5F8A;</code><br />
                      <code>--radius: 4px;</code><br />
                      <code>--font-display: Inter, sans-serif;</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 m-0 mb-2">Tailwind CSS (Second Layer)</h4>
                    <p className="text-sm text-neutral-700 m-0">
                      Wraps CSS variables into utility classes like <code className="bg-neutral-200 px-1 rounded">bg-primary</code>, 
                      <code className="bg-neutral-200 px-1 rounded">text-foreground</code>, and <code className="bg-neutral-200 px-1 rounded">rounded-md</code>. 
                      This layer provides a consistent API for developers to access design tokens without 
                      writing raw CSS.
                    </p>
                    <div className="mt-3 bg-neutral-200 rounded p-3 font-mono text-xs">
                      <code>className=&quot;bg-primary text-primary-foreground rounded-md&quot;</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 m-0 mb-2">shadcn/ui Components (Third Layer)</h4>
                    <p className="text-sm text-neutral-700 m-0">
                      Pre-built, accessible components (Button, Card, Badge) that use Tailwind classes internally. 
                      Developers work with semantic components rather than raw HTML, ensuring consistency 
                      and accessibility across all brands.
                    </p>
                    <div className="mt-3 bg-neutral-200 rounded p-3 font-mono text-xs">
                      <code>&lt;Button variant=&quot;default&quot;&gt;Click Me&lt;/Button&gt;</code><br />
                      <code>&lt;Card&gt;&lt;CardContent&gt;...&lt;/CardContent&gt;&lt;/Card&gt;</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 m-0 mb-2">Composite Components (Fourth Layer)</h4>
                    <p className="text-sm text-neutral-700 m-0">
                      Business-specific components like ArticleCard, NewsletterPromo, and FeedBlock that 
                      compose multiple shadcn primitives. These represent the actual UI patterns used 
                      across Hearst properties.
                    </p>
                    <div className="mt-3 bg-neutral-200 rounded p-3 font-mono text-xs">
                      <code>&lt;ArticleCard title=&quot;...&quot; category=&quot;...&quot; /&gt;</code><br />
                      <code>&lt;NewsletterPromo brand=&quot;cosmopolitan&quot; /&gt;</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 m-0 mb-2">Final Product (Outermost Layer)</h4>
                    <p className="text-sm text-neutral-700 m-0">
                      The rendered website that users see. When the <code className="bg-neutral-200 px-1 rounded">data-theme</code> attribute 
                      is set, the CSS cascade flows from the innermost layer outward, applying the correct 
                      brand styling to every component automatically.
                    </p>
                    <div className="mt-3 bg-neutral-200 rounded p-3 font-mono text-xs">
                      <code>&lt;html data-theme=&quot;car-and-driver&quot;&gt;</code><br />
                      <code>&nbsp;&nbsp;&lt;HomePage /&gt; {/* All components themed */}</code><br />
                      <code>&lt;/html&gt;</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Power of Nesting */}
            <h3 className="text-xl font-semibold text-neutral-1000 mb-4">
              The Power of Nesting
            </h3>
            <div className="bg-neutral-200 border border-neutral-400 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0 mb-3">Change Propagation</h4>
                  <p className="text-sm text-neutral-700 m-0 mb-3">
                    When you change an inner layer, all outer layers automatically reflect that change:
                  </p>
                  <ul className="text-sm text-neutral-700 list-disc pl-5 space-y-1 m-0">
                    <li>Change <code className="bg-neutral-300 px-1 rounded">--primary</code> color</li>
                    <li>Tailwind&apos;s <code className="bg-neutral-300 px-1 rounded">bg-primary</code> updates</li>
                    <li>Button component reflects new color</li>
                    <li>ArticleCard&apos;s CTA button changes</li>
                    <li>Entire site updates instantly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 m-0 mb-3">Isolation of Concerns</h4>
                  <p className="text-sm text-neutral-700 m-0 mb-3">
                    Each layer has a single responsibility:
                  </p>
                  <ul className="text-sm text-neutral-700 list-disc pl-5 space-y-1 m-0">
                    <li><strong>CSS Variables:</strong> Store values</li>
                    <li><strong>Tailwind:</strong> Provide utility API</li>
                    <li><strong>shadcn:</strong> Handle accessibility</li>
                    <li><strong>Composites:</strong> Business logic</li>
                    <li><strong>Product:</strong> User experience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-neutral-900 rounded-lg p-8 text-neutral-100">
              <h3 className="text-xl font-bold m-0 mb-4">Key Benefits of the Matryoshka Architecture</h3>
              <ul className="text-base text-neutral-300 m-0 pl-5 space-y-2">
                <li><strong className="text-white">Predictable Changes:</strong> Modify an inner layer, know exactly what will be affected</li>
                <li><strong className="text-white">Easy Debugging:</strong> Issues can be traced to a specific layer</li>
                <li><strong className="text-white">Team Scalability:</strong> Different teams can own different layers</li>
                <li><strong className="text-white">Brand Flexibility:</strong> Swap the innermost CSS variables to completely re-theme</li>
                <li><strong className="text-white">Reduced Complexity:</strong> Each layer only needs to understand its immediate inner layer</li>
                <li><strong className="text-white">Consistent Output:</strong> Same component code produces brand-appropriate results</li>
              </ul>
            </div>
          </section>

          {/* Practical Application */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              Practical Application
            </h2>
            <p className="text-base text-neutral-700 mb-6">
              Here&apos;s how the Matryoshka architecture applies to a real component in our system:
            </p>

            <div className="bg-neutral-100 border border-neutral-400 rounded-lg p-6">
              <h4 className="font-semibold text-neutral-900 m-0 mb-4">ArticleCard: Layer by Layer</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-neutral-300">
                  <span className="w-6 h-6 rounded-full bg-neutral-800 text-white flex items-center justify-center text-xs font-bold">1</span>
                  <span className="text-sm"><strong>CSS Variable:</strong> <code className="bg-neutral-200 px-1 rounded">--primary: #1B5F8A</code></span>
                </div>
                <div className="flex justify-center text-neutral-400">↓</div>
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-neutral-300">
                  <span className="w-6 h-6 rounded-full bg-neutral-700 text-white flex items-center justify-center text-xs font-bold">2</span>
                  <span className="text-sm"><strong>Tailwind:</strong> <code className="bg-neutral-200 px-1 rounded">bg-primary</code> resolves to <code className="bg-neutral-200 px-1 rounded">background-color: var(--primary)</code></span>
                </div>
                <div className="flex justify-center text-neutral-400">↓</div>
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-neutral-300">
                  <span className="w-6 h-6 rounded-full bg-neutral-600 text-white flex items-center justify-center text-xs font-bold">3</span>
                  <span className="text-sm"><strong>shadcn Button:</strong> Uses <code className="bg-neutral-200 px-1 rounded">bg-primary</code> in its default variant</span>
                </div>
                <div className="flex justify-center text-neutral-400">↓</div>
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-neutral-300">
                  <span className="w-6 h-6 rounded-full bg-neutral-500 text-white flex items-center justify-center text-xs font-bold">4</span>
                  <span className="text-sm"><strong>ArticleCard:</strong> Renders <code className="bg-neutral-200 px-1 rounded">&lt;Button&gt;SHOP NEW&lt;/Button&gt;</code></span>
                </div>
                <div className="flex justify-center text-neutral-400">↓</div>
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-neutral-300">
                  <span className="w-6 h-6 rounded-full bg-neutral-400 text-white flex items-center justify-center text-xs font-bold">5</span>
                  <span className="text-sm"><strong>Final:</strong> User sees a blue &quot;SHOP NEW&quot; button on Car and Driver</span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'simple' && (
        <>
          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-1000 mb-6">
              The Problem We&apos;re Solving
            </h2>
            <div className="bg-white border border-neutral-400 rounded-xl p-8 mb-8">
              <p className="text-xl text-neutral-800 m-0 leading-relaxed">
                Hearst publishes <strong>10+ brands</strong> — Car and Driver, Esquire, Cosmopolitan, Good Housekeeping, and more. Each brand has its own colors, fonts, and personality. But they all share the same website components (buttons, cards, menus, etc.).
              </p>
              <div className="mt-6 p-5 bg-neutral-200 rounded-lg">
                <p className="text-base text-neutral-700 m-0">
                  <strong>Without a system:</strong> Every time you build a button, you build it 10 different times — once per brand. Change one thing? You have to change it in 10 places. Things break. Things get inconsistent. Nobody is happy.
                </p>
              </div>
            </div>
          </section>

          {/* The Analogy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-1000 mb-6">
              Think of It Like a Restaurant Franchise
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-neutral-400 rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center text-3xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 m-0 mb-2">The Floor Plan (Component)</h3>
                    <p className="text-lg text-neutral-700 m-0 leading-relaxed">
                      Every location shares the <strong>same layout</strong> — a kitchen, a dining area, a bar, a front entrance. The architecture is built <strong>once</strong> and reused everywhere. That&apos;s the component.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-neutral-400"></div>
              </div>

              <div className="bg-white border border-neutral-400 rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center text-3xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 m-0 mb-2">The Interior Design (Design Tokens)</h3>
                    <p className="text-lg text-neutral-700 m-0 leading-relaxed">
                      Each location gets its own <strong>style guide</strong> — the paint colors, the furniture, the lighting, the signage. Car and Driver&apos;s location feels bold and industrial. Cosmopolitan&apos;s is vibrant and energetic. Harper&apos;s Bazaar&apos;s is refined and luxurious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-neutral-400"></div>
              </div>

              <div className="bg-white border border-neutral-400 rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center text-3xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 m-0 mb-2">The Result (Branded Experience)</h3>
                    <p className="text-lg text-neutral-700 m-0 leading-relaxed">
                      Same floor plan + different interior design = <strong>completely different experience</strong>. You don&apos;t rebuild the restaurant. You just swap the style guide. That&apos;s the entire idea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Live proof */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-1000 mb-6">
              See It for Yourself
            </h2>
            <p className="text-lg text-neutral-700 mb-6">
              Here&apos;s the <strong>exact same card</strong> styled by three different brand identities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { id: 'car-and-driver', name: 'Car and Driver' },
                { id: 'cosmopolitan', name: 'Cosmopolitan' },
                { id: 'harpers-bazaar', name: "Harper's Bazaar" },
              ].map((theme) => (
                <div
                  key={theme.id}
                  data-theme={theme.id}
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: 'var(--background)' }}
                >
                  <div className="p-4 pb-2 flex items-center gap-3">
                    {brandLogos[theme.id] && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={brandLogos[theme.id]}
                        alt={theme.name}
                        className="h-4 w-auto"
                      />
                    )}
                  </div>
                  <div className="px-3 pb-4">
                    <ArticleCard {...demoArticles[theme.id][0]} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-neutral-900 text-white rounded-xl p-6">
              <p className="text-lg m-0 text-center leading-relaxed">
                Zero code was changed between these three. <strong>Only the style guide (theme) switched.</strong>
              </p>
            </div>
          </section>

          {/* The Pipeline in 4 steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-1000 mb-6">
              The Pipeline in 4 Steps
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Here&apos;s how design decisions travel from a designer&apos;s head all the way to your screen:
            </p>

            <div className="space-y-0">
              {/* Step 1 */}
              <div className="relative bg-white border border-neutral-400 rounded-t-xl p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 m-0 mb-1">Decide</h3>
                    <p className="text-sm text-neutral-500 m-0 mb-3 uppercase tracking-wider font-medium">Designer + PM</p>
                    <p className="text-base text-neutral-700 m-0 leading-relaxed">
                      &quot;Car and Driver&apos;s primary button should be <strong>blue (#1B5F8A)</strong>. Cosmopolitan&apos;s should be <strong>pink (#E91E8C)</strong>.&quot;
                    </p>
                    <p className="text-base text-neutral-700 m-0 mt-2 leading-relaxed">
                      These decisions get written down in a <strong>single file</strong> called <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">globals.css</code>. Think of it as the master recipe book.
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-px">
                <div className="w-12 h-8 bg-neutral-900 flex items-center justify-center">
                  <span className="text-white text-lg">▼</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative bg-white border border-neutral-400 p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-neutral-800 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 m-0 mb-1">Name It</h3>
                    <p className="text-sm text-neutral-500 m-0 mb-3 uppercase tracking-wider font-medium">Design System</p>
                    <p className="text-base text-neutral-700 m-0 leading-relaxed">
                      Instead of saying &quot;use #1B5F8A&quot;, we give it a <strong>name</strong>: <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">--primary</code>.
                    </p>
                    <p className="text-base text-neutral-700 m-0 mt-2 leading-relaxed">
                      Now the button just says &quot;use the primary color&quot;. It doesn&apos;t know or care <em>which</em> blue or pink — it just knows to use whatever &quot;primary&quot; means for the current brand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-px">
                <div className="w-12 h-8 bg-neutral-900 flex items-center justify-center">
                  <span className="text-white text-lg">▼</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative bg-white border border-neutral-400 p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-neutral-700 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 m-0 mb-1">Build Once</h3>
                    <p className="text-sm text-neutral-500 m-0 mb-3 uppercase tracking-wider font-medium">Developer</p>
                    <p className="text-base text-neutral-700 m-0 leading-relaxed">
                      The developer builds a Button component <strong>one time</strong>. They write <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">bg-primary</code> instead of <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">bg-blue-600</code>.
                    </p>
                    <p className="text-base text-neutral-700 m-0 mt-2 leading-relaxed">
                      That one button now works for <strong>every brand</strong>. No copying. No 10 versions. Just one.
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-px">
                <div className="w-12 h-8 bg-neutral-900 flex items-center justify-center">
                  <span className="text-white text-lg">▼</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative bg-white border border-neutral-400 rounded-b-xl p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-neutral-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 m-0 mb-1">Switch Brands Instantly</h3>
                    <p className="text-sm text-neutral-500 m-0 mb-3 uppercase tracking-wider font-medium">Automatic</p>
                    <p className="text-base text-neutral-700 m-0 leading-relaxed">
                      When someone visits CarAndDriver.com, the site loads the Car and Driver style guide. When they visit Cosmopolitan.com, it loads the Cosmo style guide.
                    </p>
                    <p className="text-base text-neutral-700 m-0 mt-2 leading-relaxed">
                      <strong>The components don&apos;t change. The colors just swap.</strong> That&apos;s the magic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why should I care */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-1000 mb-6">
              Why Should I Care?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-3">Des</div>
                <h3 className="text-lg font-bold text-neutral-900 m-0 mb-2">If you&apos;re a Designer</h3>
                <p className="text-base text-neutral-700 m-0 leading-relaxed">
                  You change a color in <strong>one place</strong>, and it updates across every page, every component, every brand that uses it. No more &quot;you missed a spot.&quot;
                </p>
              </div>
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-3">Dev</div>
                <h3 className="text-lg font-bold text-neutral-900 m-0 mb-2">If you&apos;re a Developer</h3>
                <p className="text-base text-neutral-700 m-0 leading-relaxed">
                  You build a component <strong>once</strong> and it works for all brands. No more copying code or maintaining 10 versions of the same thing.
                </p>
              </div>
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-3">PM</div>
                <h3 className="text-lg font-bold text-neutral-900 m-0 mb-2">If you&apos;re a PM</h3>
                <p className="text-base text-neutral-700 m-0 leading-relaxed">
                  New features ship to <strong>all brands at once</strong> instead of one at a time. Less time, less budget, fewer bugs.
                </p>
              </div>
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-3">All</div>
                <h3 className="text-lg font-bold text-neutral-900 m-0 mb-2">If you&apos;re Anyone Else</h3>
                <p className="text-base text-neutral-700 m-0 leading-relaxed">
                  Brands stay consistent. Pages load faster. Updates happen everywhere at once. The websites just <strong>work better</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* One sentence */}
          <section className="mb-16">
            <div className="bg-neutral-900 text-white rounded-xl p-10 text-center">
              <h2 className="text-2xl font-bold m-0 mb-4">The Whole Idea in One Sentence</h2>
              <p className="text-xl m-0 leading-relaxed max-w-[700px] mx-auto">
                We write the <strong>design rules once</strong>, give each brand its <strong>own set of values</strong>, and every component <strong>automatically looks right</strong> — no extra work.
              </p>
            </div>
          </section>

          {/* Where Storybook fits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-1000 mb-6">
              Where Does This Storybook Fit In?
            </h2>
            <div className="bg-white border border-neutral-400 rounded-xl p-8">
              <p className="text-lg text-neutral-700 m-0 leading-relaxed mb-6">
                This Storybook app is the <strong>proof that the system works</strong>. It&apos;s where everyone — designers, developers, PMs — can come to:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-neutral-200 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                  <p className="text-base text-neutral-700 m-0"><strong>See</strong> every component rendered with real brand tokens — not mockups, the real thing</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-neutral-200 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                  <p className="text-base text-neutral-700 m-0"><strong>Switch</strong> between brands instantly to verify everything looks correct</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-neutral-200 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                  <p className="text-base text-neutral-700 m-0"><strong>Catch</strong> problems before they ever reach a real website</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-neutral-200 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">4</span>
                  <p className="text-base text-neutral-700 m-0"><strong>Agree</strong> on one shared reference so nobody is guessing what something should look like</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'articles' && (
        <>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
              Article Carousels by Brand
            </h2>
            <p className="text-base text-neutral-700 mb-8">
              Each brand renders the same ArticleCard component with its own theme tokens applied automatically via <code className="bg-neutral-300 px-1.5 py-0.5 rounded text-sm">data-theme</code>. Same code, six distinct experiences.
            </p>

            <div className="space-y-10">
              {themes.map((theme) => (
                <div
                  key={theme.id}
                  data-theme={theme.id}
                  className="rounded-lg p-4 sm:py-8 sm:px-0 bg-white"
                >
                  <div className="flex items-center gap-4 mb-4 sm:px-8">
                    {brandLogos[theme.id] && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={brandLogos[theme.id]}
                        alt={theme.name}
                        className="h-5 sm:h-6 w-auto"
                      />
                    )}
                    <h3
                      className="text-sm font-semibold m-0"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {theme.name}
                    </h3>
                  </div>
                  <div className="sm:px-8">
                    <Carousel
                      opts={{
                        align: 'start',
                        loop: true,
                        dragFree: true,
                        containScroll: 'trimSnaps',
                      }}
                      className="w-full touch-pan-y"
                    >
                      <CarouselContent className="-ml-3 sm:-ml-4">
                        {demoArticles[theme.id].map((article, index) => (
                          <CarouselItem
                            key={index}
                            className="pl-3 sm:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                          >
                            <ArticleCard {...article} />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="hidden sm:flex" />
                      <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                  </div>
                  {/* Mobile dots indicator */}
                  <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
                    {demoArticles[theme.id].map((_, index) => (
                      <div
                        key={index}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ========== TOKEN NAMING TAB ========== */}
      {activeTab === 'naming' && (
        <>
          {/* Intro */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-1000 mb-4">
              How Many Names Can a Token Have?
            </h2>
            <p className="text-lg text-neutral-700 mb-6">
              Every design value — a color, a font, a spacing unit — flows through <strong>five layers</strong> in our system. At each layer it gets a different name, each serving a different purpose. Let&apos;s trace both a <strong>color</strong> and a <strong>font</strong> to see how.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-5 bg-neutral-200 rounded-lg">
                <div className="w-10 h-10 rounded-md flex-shrink-0" style={{ backgroundColor: '#1B5F8A' }} />
                <div>
                  <p className="text-sm font-bold text-neutral-900 m-0">Color Token</p>
                  <p className="text-sm text-neutral-600 m-0">#1B5F8A — Car and Driver&apos;s primary blue</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 bg-neutral-200 rounded-lg">
                <div className="w-10 h-10 rounded-md flex-shrink-0 bg-neutral-900 text-white flex items-center justify-center font-sans text-lg font-bold">Aa</div>
                <div>
                  <p className="text-sm font-bold text-neutral-900 m-0">Font Token</p>
                  <p className="text-sm text-neutral-600 m-0">Inter — Car and Driver&apos;s display font</p>
                </div>
              </div>
            </div>
          </section>

          {/* The 5 Layers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-6">
              The 5 Layers of Token Naming
            </h2>

            <div className="space-y-4">
              {/* Layer 1 — Primitive */}
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-neutral-900 m-0">Primitive Token</h3>
                      <span className="bg-neutral-200 text-neutral-700 text-xs font-medium px-2 py-0.5 rounded">What it IS</span>
                    </div>
                    <p className="text-base text-neutral-700 m-0 mb-3">
                      The raw value with a name that describes <strong>what it literally is</strong> — no meaning attached.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm">
                        <span className="text-[#569cd6]">COLOR</span><br/>
                        <span className="text-[#ce9178]">_palette.blue.42</span> <span className="text-[#d4d4d4]">→</span> <span className="text-[#b5cea8]">#1B5F8A</span>
                      </div>
                      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm">
                        <span className="text-[#569cd6]">FONT</span><br/>
                        <span className="text-[#ce9178]">_font.family.inter</span> <span className="text-[#d4d4d4]">→</span> <span className="text-[#b5cea8]">&quot;Inter&quot;</span>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-500 m-0 mt-2">
                      Color: named by hue + lightness. Font: named by the typeface itself. Both are shared across all brands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center"><div className="w-0.5 h-6 bg-neutral-400"></div></div>

              {/* Layer 2 — Alias */}
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-neutral-900 m-0">Alias Token</h3>
                      <span className="bg-neutral-200 text-neutral-700 text-xs font-medium px-2 py-0.5 rounded">What it MEANS for this brand</span>
                    </div>
                    <p className="text-base text-neutral-700 m-0 mb-3">
                      Each brand picks primitives and gives them a <strong>semantic role</strong>. This is where brands diverge — different colors, different fonts.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm">
                        <span className="text-[#569cd6]">COLOR</span><br/>
                        <span className="text-[#9d9d9d]">// Car and Driver</span><br/>
                        <span className="text-[#ce9178]">palette.primary</span> <span className="text-[#d4d4d4]">→</span> <span className="text-[#4ec9b0]">{'{_palette.blue.42}'}</span><br/>
                        <span className="text-[#9d9d9d]">// Cosmopolitan</span><br/>
                        <span className="text-[#ce9178]">palette.primary</span> <span className="text-[#d4d4d4]">→</span> <span className="text-[#4ec9b0]">{'{_palette.red.48}'}</span>
                      </div>
                      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm">
                        <span className="text-[#569cd6]">FONT</span><br/>
                        <span className="text-[#9d9d9d]">// Car and Driver</span><br/>
                        <span className="text-[#ce9178]">font.family.display</span> <span className="text-[#d4d4d4]">→</span> <span className="text-[#4ec9b0]">{'{_font.family.inter}'}</span><br/>
                        <span className="text-[#9d9d9d]">// Good Housekeeping</span><br/>
                        <span className="text-[#ce9178]">font.family.display</span> <span className="text-[#d4d4d4]">→</span> <span className="text-[#4ec9b0]">{'{_font.family.barlow-semi-condensed}'}</span>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-500 m-0 mt-2">
                      Same name (<code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">palette.primary</code>, <code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">font.family.display</code>), different value per brand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center"><div className="w-0.5 h-6 bg-neutral-400"></div></div>

              {/* Layer 3 — CSS Variable */}
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-neutral-900 m-0">CSS Variable</h3>
                      <span className="bg-neutral-200 text-neutral-700 text-xs font-medium px-2 py-0.5 rounded">How the BROWSER sees it</span>
                    </div>
                    <p className="text-base text-neutral-700 m-0 mb-3">
                      Alias tokens get compiled into CSS custom properties. Change <code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">data-theme</code> and all variables update — colors and fonts alike.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm">
                        <span className="text-[#569cd6]">COLOR</span><br/>
                        <span className="text-[#d7ba7d]">:root</span> <span className="text-[#d4d4d4]">{'{'}</span><br/>
                        <span className="text-[#d4d4d4]">{'  '}</span><span className="text-[#9cdcfe]">--primary</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#b5cea8]">#1B5F8A</span><span className="text-[#d4d4d4]">;</span><br/>
                        <span className="text-[#d4d4d4]">{'}'}</span>
                      </div>
                      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm">
                        <span className="text-[#569cd6]">FONT</span><br/>
                        <span className="text-[#d7ba7d]">:root</span> <span className="text-[#d4d4d4]">{'{'}</span><br/>
                        <span className="text-[#d4d4d4]">{'  '}</span><span className="text-[#9cdcfe]">--font-display</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#b5cea8]">Inter, sans-serif</span><span className="text-[#d4d4d4]">;</span><br/>
                        <span className="text-[#d4d4d4]">{'}'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center"><div className="w-0.5 h-6 bg-neutral-400"></div></div>

              {/* Layer 4 — Tailwind Class */}
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-neutral-900 m-0">Tailwind Class</h3>
                      <span className="bg-neutral-200 text-neutral-700 text-xs font-medium px-2 py-0.5 rounded">How DEVELOPERS write it</span>
                    </div>
                    <p className="text-base text-neutral-700 m-0 mb-3">
                      Tailwind reads CSS variables and exposes them as utility classes. Developers never touch hex values or font strings — they write readable class names.
                    </p>
                    <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm">
                      <span className="text-[#9d9d9d]">// Both color and font in one component</span><br/>
                      <span className="text-[#d4d4d4]">&lt;h2 className=&quot;</span><span className="text-[#ce9178]">text-primary font-display</span><span className="text-[#d4d4d4]">&quot;&gt;</span><br/>
                      <span className="text-[#d4d4d4]">{'  '}2026 Porsche 911 GT3 RS Review</span><br/>
                      <span className="text-[#d4d4d4]">&lt;/h2&gt;</span><br/>
                      <span className="text-[#d4d4d4]">&lt;button className=&quot;</span><span className="text-[#ce9178]">bg-primary text-primary-foreground</span><span className="text-[#d4d4d4]">&quot;&gt;</span><br/>
                      <span className="text-[#d4d4d4]">{'  '}Read Review</span><br/>
                      <span className="text-[#d4d4d4]">&lt;/button&gt;</span>
                    </div>
                    <p className="text-sm text-neutral-500 m-0 mt-2">
                      <code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">bg-primary</code> → <code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">var(--primary)</code> → <code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">#1B5F8A</code> &nbsp;|&nbsp; <code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">font-display</code> → <code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">var(--font-display)</code> → <code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">Inter</code>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center"><div className="w-0.5 h-6 bg-neutral-400"></div></div>

              {/* Layer 5 — Component Token */}
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">5</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-neutral-900 m-0">Component Token</h3>
                      <span className="bg-neutral-200 text-neutral-700 text-xs font-medium px-2 py-0.5 rounded">What it DOES</span>
                    </div>
                    <p className="text-base text-neutral-700 m-0 mb-3">
                      The most specific layer — names what a value <strong>does</strong> in a particular component. This layer is optional but powerful for large systems.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm">
                        <span className="text-[#569cd6]">COLOR</span><br/>
                        <span className="text-[#ce9178]">component.button.bg.default</span><br/>
                        <span className="text-[#d4d4d4]">{'  '}→</span> <span className="text-[#4ec9b0]">{'{palette.primary}'}</span><br/>
                        <span className="text-[#ce9178]">component.link.color</span><br/>
                        <span className="text-[#d4d4d4]">{'  '}→</span> <span className="text-[#4ec9b0]">{'{palette.primary}'}</span>
                      </div>
                      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm">
                        <span className="text-[#569cd6]">FONT</span><br/>
                        <span className="text-[#ce9178]">component.headline.font</span><br/>
                        <span className="text-[#d4d4d4]">{'  '}→</span> <span className="text-[#4ec9b0]">{'{font.family.display}'}</span><br/>
                        <span className="text-[#ce9178]">component.nav.font</span><br/>
                        <span className="text-[#d4d4d4]">{'  '}→</span> <span className="text-[#4ec9b0]">{'{font.family.display}'}</span>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-500 m-0 mt-2">
                      Multiple component tokens can point to the same alias. Change the alias, and every headline, every nav, every button updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Full Chain Diagram */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-6">
              The Complete Chain — Color vs Font
            </h2>
            <div className="bg-neutral-100 border border-neutral-400 rounded-xl p-6 overflow-x-auto">
              <pre className="m-0 font-mono text-sm leading-relaxed text-neutral-800 whitespace-pre">
{`  Layer 1              Layer 2              Layer 3             Layer 4            Layer 5
  PRIMITIVE            ALIAS                CSS VARIABLE        TAILWIND           COMPONENT TOKEN
  ─────────            ─────                ────────────        ────────           ───────────────

  COLOR TOKEN:
  _palette.blue.42 ──▶ palette.primary ──▶ --primary ──▶ bg-primary ──▶ button.bg.default
      "#1B5F8A"                                                           link.color

  FONT TOKEN:
  _font.family       ──▶ font.family    ──▶ --font-display ──▶ font-display ──▶ headline.font
   .inter                  .display                                               nav.font
   "Inter"

  ──────────────────────────────────────────────────────────────────────────────────────────
  What it IS          What it MEANS       How browser        How devs           What it DOES
  (raw value)         (role in brand)     renders it         write it           (specific usage)`}
              </pre>
            </div>
          </section>

          {/* Practical Example — 3 brands */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-4">
              Practical Example: Same Code, Three Brands
            </h2>
            <p className="text-base text-neutral-700 mb-6">
              Here&apos;s the exact same headline + button. The code is identical — both the <strong>color</strong> and <strong>font</strong> token chains resolve differently per brand.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { theme: 'car-and-driver', name: 'Car and Driver', colorPrimitive: '_palette.blue.42', hex: '#1B5F8A', fontPrimitive: '_font.family.inter', fontName: 'Inter', fontStyle: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 700 } },
                { theme: 'good-housekeeping', name: 'Good Housekeeping', colorPrimitive: '_palette.teal.31', hex: '#198294', fontPrimitive: '_font.family.barlow-semi-condensed', fontName: 'Barlow Semi Condensed', fontStyle: { fontFamily: 'var(--font-barlow-semi-condensed), "Barlow Semi Condensed", sans-serif', fontWeight: 600 } },
                { theme: 'harpers-bazaar', name: "Harper's Bazaar", colorPrimitive: '_palette.gray.7', hex: '#000000', fontPrimitive: '_font.family.newparistextbook', fontName: 'NewParisTextBook (Serif)', fontStyle: { fontFamily: '"NewParisTextBook", "Didot", Georgia, serif', fontWeight: 400 } },
              ].map((brand) => (
                <div key={brand.theme} data-theme={brand.theme} className="bg-background border border-neutral-400 rounded-xl overflow-hidden">
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide m-0 mb-2">{brand.name}</p>
                    <h3 className="text-xl text-foreground m-0 mb-3" style={brand.fontStyle}>2026 Porsche 911 GT3 RS</h3>
                    <button className="w-full px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md">
                      Read Review
                    </button>
                  </div>
                  <div className="bg-neutral-100 border-t border-neutral-300 p-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider m-0 mb-1">Color Chain</p>
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-3 h-3 rounded-sm flex-shrink-0 border border-neutral-300" style={{ backgroundColor: brand.hex }} />
                          <code className="text-[10px] text-neutral-700">{brand.hex}</code>
                        </div>
                        <p className="text-[10px] text-neutral-500 m-0 font-mono leading-relaxed">
                          L1: {brand.colorPrimitive}<br/>
                          L2: palette.primary<br/>
                          L3: --primary<br/>
                          L4: bg-primary
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider m-0 mb-1">Font Chain</p>
                        <p className="text-[10px] text-neutral-700 m-0 mb-1 font-medium">{brand.fontName}</p>
                        <p className="text-[10px] text-neutral-500 m-0 font-mono leading-relaxed">
                          L1: {brand.fontPrimitive}<br/>
                          L2: font.family.display<br/>
                          L3: --font-display<br/>
                          L4: font-display
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-neutral-200 rounded-lg">
              <p className="text-base text-neutral-700 m-0">
                <strong>The code is always the same:</strong> <code className="bg-neutral-300 px-1.5 py-0.5 rounded text-sm">className=&quot;bg-primary font-display&quot;</code>. Both the color <em>and</em> font resolve to different values per brand. Zero if-statements, zero brand-specific code.
              </p>
            </div>
          </section>

          {/* Why layers matter */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-6">
              Why Each Layer Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <h3 className="text-base font-bold text-neutral-900 m-0 mb-2">Without layers</h3>
                <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs mb-3">
                  <span className="text-[#9d9d9d]">// Hardcoded — breaks multi-brand</span><br/>
                  <span className="text-[#d4d4d4]">&lt;button style={'{'}{'{'} background: &apos;#1B5F8A&apos; {'}'}{'}'}  &gt;</span>
                </div>
                <ul className="text-sm text-neutral-600 m-0 pl-4 space-y-1">
                  <li>Change requires editing every component</li>
                  <li>No way to swap brands</li>
                  <li>Designer changes don&apos;t flow to code</li>
                  <li>10 brands = 10x the work</li>
                </ul>
              </div>
              <div className="bg-white border border-neutral-400 rounded-xl p-6">
                <h3 className="text-base font-bold text-neutral-900 m-0 mb-2">With layers</h3>
                <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs mb-3">
                  <span className="text-[#9d9d9d]">// Token-driven — works for all brands</span><br/>
                  <span className="text-[#d4d4d4]">&lt;button className=&quot;bg-primary&quot;&gt;</span>
                </div>
                <ul className="text-sm text-neutral-600 m-0 pl-4 space-y-1">
                  <li>Change a primitive → all brands update</li>
                  <li>Change an alias → one brand updates</li>
                  <li>Designers edit tokens, code stays the same</li>
                  <li>10 brands = same amount of work</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who names what */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-1000 mb-6">
              Who Owns Each Layer?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-neutral-100 rounded-lg overflow-hidden text-sm">
                <thead>
                  <tr className="bg-neutral-200">
                    <th className="text-left p-3 font-semibold text-neutral-900">Layer</th>
                    <th className="text-left p-3 font-semibold text-neutral-900">Example Name</th>
                    <th className="text-left p-3 font-semibold text-neutral-900">Owned By</th>
                    <th className="text-left p-3 font-semibold text-neutral-900">Stored In</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-300">
                    <td className="p-3 font-medium">1. Primitive</td>
                    <td className="p-3 font-mono text-xs">_palette.blue.42</td>
                    <td className="p-3">Design System Team</td>
                    <td className="p-3">Tokens Studio / Figma</td>
                  </tr>
                  <tr className="border-t border-neutral-300 bg-neutral-200/50">
                    <td className="p-3 font-medium">2. Alias</td>
                    <td className="p-3 font-mono text-xs">palette.primary</td>
                    <td className="p-3">Brand Designers</td>
                    <td className="p-3">Tokens Studio / Figma</td>
                  </tr>
                  <tr className="border-t border-neutral-300">
                    <td className="p-3 font-medium">3. CSS Variable</td>
                    <td className="p-3 font-mono text-xs">--primary</td>
                    <td className="p-3">Build Pipeline (automated)</td>
                    <td className="p-3">globals.css</td>
                  </tr>
                  <tr className="border-t border-neutral-300 bg-neutral-200/50">
                    <td className="p-3 font-medium">4. Tailwind Class</td>
                    <td className="p-3 font-mono text-xs">bg-primary</td>
                    <td className="p-3">Developers</td>
                    <td className="p-3">tailwind.config.ts</td>
                  </tr>
                  <tr className="border-t border-neutral-300">
                    <td className="p-3 font-medium">5. Component Token</td>
                    <td className="p-3 font-mono text-xs">button.bg.default</td>
                    <td className="p-3">Design System Team</td>
                    <td className="p-3">Tokens Studio / Figma</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-neutral-1000 rounded-lg p-8 text-neutral-100">
            <h2 className="text-2xl font-bold m-0 mb-3">
              One Value, Five Names — Any Token Type
            </h2>
            <p className="text-base text-neutral-400 m-0 mb-4">
              Whether it&apos;s a color, a font, a spacing value, or a border radius — every token flows through the same five layers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
              {[
                { layer: '1', q: 'What is it?', color: '_palette.blue.42', font: '_font.family.inter' },
                { layer: '2', q: 'What does it mean?', color: 'palette.primary', font: 'font.family.display' },
                { layer: '3', q: 'Browser sees?', color: '--primary', font: '--font-display' },
                { layer: '4', q: 'Devs write?', color: 'bg-primary', font: 'font-display' },
                { layer: '5', q: 'What does it do?', color: 'button.bg', font: 'headline.font' },
              ].map((item) => (
                <div key={item.layer} className="bg-neutral-800 rounded-lg p-3 text-center">
                  <div className="text-xs text-neutral-500 mb-1">Layer {item.layer}</div>
                  <div className="text-sm font-bold text-neutral-100 mb-2">{item.q}</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#1B5F8A' }} />
                      <code className="text-[10px] text-neutral-400">{item.color}</code>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-500 flex-shrink-0" />
                      <code className="text-[10px] text-neutral-400">{item.font}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-neutral-500 m-0">
              The pattern is universal. Colors, fonts, spacing, radius, shadows — they all follow the same path from raw value to final usage.
            </p>
          </section>
        </>
      )}
    </div>
  );
}
