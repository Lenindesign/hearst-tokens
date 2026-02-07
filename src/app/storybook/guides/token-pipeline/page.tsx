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
      imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=450&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=450&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&h=450&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
      author: 'James Crawford',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      date: 'Feb 4, 2026',
      readTime: '6 min read',
    },
    {
      title: 'Inside the Mind of Hollywood\'s Most Reclusive Director',
      excerpt: 'After a decade of silence, the filmmaker finally opens up about art and legacy.',
      category: 'Interview',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop',
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
      title: 'The Skincare Ingredient Dermatologists Are Obsessed With',
      excerpt: 'Move over retinol. This powerhouse ingredient is changing everything.',
      category: 'Beauty',
      imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=450&fit=crop',
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
      title: 'The Designers Redefining Haute Couture',
      excerpt: 'A new wave of visionaries is bringing fresh perspectives to fashion\'s most exclusive realm.',
      category: 'Fashion',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop',
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
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'demo' | 'architecture'>('overview');
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
  --radius: 4px;
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
              className="rounded-lg p-4 sm:p-8 mb-6"
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
                <CarouselPrevious className="hidden sm:flex left-2" />
                <CarouselNext className="hidden sm:flex right-2" />
              </Carousel>
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
                      <code>--font-display: &quot;Barlow Condensed&quot;;</code>
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
    </div>
  );
}
