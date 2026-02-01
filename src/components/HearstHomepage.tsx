'use client';

import { useState } from 'react';
import Image from 'next/image';

// Navigation Component
function NavBar() {
  return (
    <header className="w-full">
      {/* Utilities Bar */}
      <div className="bg-[#121212] h-8 px-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button className="text-white text-xs px-3 py-1.5 hover:bg-white/10 rounded">
            Sign in
          </button>
          <button className="text-white text-xs px-3 py-1.5 hover:bg-white/10 rounded flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button className="text-white text-xs px-3 py-1.5 hover:bg-white/10 rounded">
            Subscribe
          </button>
        </div>
      </div>
      
      {/* Main Nav Bar */}
      <nav className="bg-[#ededed] border-b border-[#757575]">
        {/* Action Nav Bar */}
        <div className="px-2 py-4 flex items-center justify-between">
          <button className="p-2 hover:bg-black/5 rounded">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-bold tracking-[0.2em]">HEARST</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-black/5 rounded">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Menu Item Bar */}
        <div className="h-12 px-2 flex items-center justify-between border-t border-[#d6d6d6]">
          <div className="flex items-center gap-6 overflow-x-auto">
            {['Link Text', 'Link Text', 'Link Text', 'Link Text'].map((item, i) => (
              <a key={i} href="#" className="text-sm text-[#121212] whitespace-nowrap hover:underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

// Story Card Component
interface StoryCardProps {
  title: string;
  eyebrow?: string;
  author?: string;
  imageHeight?: number;
  horizontal?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

function StoryCard({ title, eyebrow, author, imageHeight = 160, horizontal = false, size = 'md' }: StoryCardProps) {
  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl font-bold',
  };

  if (horizontal) {
    return (
      <article className="flex gap-3 bg-white">
        <div className="w-20 h-20 bg-[#d9d9d9] flex-shrink-0 rounded" />
        <div className="flex-1 flex flex-col gap-1">
          {eyebrow && (
            <span className="text-[10px] text-[#757575] tracking-wider uppercase">{eyebrow}</span>
          )}
          <h3 className={`${titleSizes[size]} text-[#121212] leading-tight`}>{title}</h3>
          {author && (
            <span className="text-xs text-[#bdbdbd]">{author}</span>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-2 bg-white">
      <div 
        className="w-full bg-[#d9d9d9] rounded"
        style={{ height: imageHeight }}
      />
      <div className="flex flex-col gap-1 px-4">
        {eyebrow && (
          <span className="text-[10px] text-[#757575] tracking-wider uppercase">{eyebrow}</span>
        )}
        <h3 className={`${titleSizes[size]} text-[#121212] leading-tight`}>{title}</h3>
        {author && (
          <span className="text-xs text-[#bdbdbd]">{author}</span>
        )}
      </div>
    </article>
  );
}

// Big Card Component
function BigCard({ title, eyebrow, author }: { title: string; eyebrow?: string; author?: string }) {
  return (
    <article className="flex flex-col gap-2 bg-white w-full">
      <div className="w-full h-[270px] bg-[#d9d9d9] rounded" />
      <div className="flex flex-col gap-1 px-4">
        {eyebrow && (
          <span className="text-[13px] text-[#121212] tracking-wider">{eyebrow}</span>
        )}
        <h2 className="text-[28px] font-bold text-[#121212] leading-tight tracking-tight">
          {title}
        </h2>
        {author && (
          <span className="text-xs text-[#bdbdbd]">{author}</span>
        )}
      </div>
    </article>
  );
}

// Carousel Component
function Carousel() {
  return (
    <section className="w-full pl-4">
      <div className="flex gap-2 overflow-x-auto pb-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-shrink-0 w-[280px]">
            <StoryCard
              title={`Carousel Story ${i} Headline Goes Here`}
              eyebrow="Category"
              size="sm"
              imageHeight={140}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1 py-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-[#121212]' : 'bg-[#d6d6d6]'}`}
          />
        ))}
      </div>
    </section>
  );
}

// Ad Component
function AdUnit({ size = '300x250' }: { size?: '300x250' | '300x600' }) {
  const [width, height] = size.split('x').map(Number);
  
  return (
    <div className="flex flex-col items-center gap-3 py-3 px-2 bg-white">
      <div className="flex items-center gap-1 w-full">
        <div className="flex-1 h-px bg-[#dcdcdc]" />
        <span className="text-xs text-[#2d2d2d] px-2">Advertisement - Continue Reading Below</span>
        <div className="flex-1 h-px bg-[#dcdcdc]" />
      </div>
      <div 
        className="bg-[#f1f1f1] flex items-center justify-center"
        style={{ width, height }}
      >
        <span className="text-sm text-[#828282]">AD<br/>{size}</span>
      </div>
      <div className="w-full h-px bg-[#dcdcdc]" />
    </div>
  );
}

// Supporting Story Card
function SupportingStoryCard() {
  return (
    <div className="border-t border-black pt-4 flex flex-col gap-2">
      <StoryCard
        title="Supporting Story Headline Here"
        eyebrow="Category"
        horizontal
        size="sm"
      />
      <StoryCard
        title="Another Supporting Story"
        eyebrow="Category"
        imageHeight={160}
        size="sm"
      />
    </div>
  );
}

// Newsletter Promo
function NewsletterPromo() {
  return (
    <section className="bg-[#d6d6d6] p-8">
      <div className="flex flex-col gap-3">
        <span className="text-[13px] text-[#121212] tracking-wider">{'{eyebrow}'}</span>
        <h3 className="text-lg font-bold text-[#121212]">Newsletter Headline</h3>
        <p className="text-sm text-[#575757]">Subscribe to get the latest stories delivered to your inbox.</p>
        <div className="flex gap-2 mt-2">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 text-sm border border-[#bdbdbd] rounded"
          />
          <button className="px-4 py-2 bg-[#121212] text-white text-sm font-semibold rounded">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

// Trending Section
function TrendingSection() {
  return (
    <section className="px-6 py-6">
      <h2 className="text-lg font-bold text-[#121212] mb-4">{'{title}'}</h2>
      <div className="flex flex-col gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex gap-3">
            <div className="w-20 h-20 bg-[#d9d9d9] flex-shrink-0 rounded flex items-center justify-center">
              <span className="text-2xl font-bold text-white bg-[#121212] w-8 h-8 rounded-full flex items-center justify-center">
                {i}
              </span>
            </div>
            <div className="flex-1">
              <StoryCard
                title={`Trending Story ${i} Headline`}
                eyebrow="Category"
                horizontal
                size="sm"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Feed Block Component
interface FeedBlockProps {
  title: string;
  layout: 'big-story' | '4-across' | 'text-only' | '3-column' | 'stacked';
}

function FeedBlock({ title, layout }: FeedBlockProps) {
  return (
    <section className="w-full max-w-[960px] mx-auto">
      <h2 className="text-[32px] font-bold text-[#121212] tracking-tight px-4 mb-6">
        {title}
      </h2>
      
      {layout === 'big-story' && (
        <div className="flex flex-col lg:flex-row gap-6 px-4">
          <div className="flex-1">
            <StoryCard
              title="Big Story Feature Headline That Captures Attention"
              eyebrow="Featured"
              author="By Author Name"
              imageHeight={400}
              size="lg"
            />
          </div>
          <div className="w-full lg:w-[323px] flex flex-col gap-4">
            {[1, 2, 3, 4].map((i) => (
              <StoryCard
                key={i}
                title={`Supporting Story ${i}`}
                eyebrow="Category"
                horizontal
                size="sm"
              />
            ))}
          </div>
        </div>
      )}
      
      {layout === '4-across' && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {[1, 2, 3, 4].map((i) => (
            <StoryCard
              key={i}
              title={`Story ${i} Headline`}
              eyebrow="Category"
              imageHeight={180}
              size="sm"
            />
          ))}
        </div>
      )}
      
      {layout === 'text-only' && (
        <div className="flex flex-col lg:flex-row gap-8 px-4">
          <div className="flex-1">
            <div className="flex flex-col gap-1">
              <span className="text-[13px] text-[#757575] tracking-wider uppercase">Featured</span>
              <h3 className="text-2xl font-bold text-[#121212]">Big Story Headline</h3>
              <p className="text-sm text-[#575757] mt-2">
                A brief description that provides context for the story and entices readers to click through.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-t border-[#ededed] pt-4">
                <span className="text-[10px] text-[#757575] tracking-wider uppercase">Category</span>
                <h4 className="text-sm font-semibold text-[#121212]">Supporting Story {i}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {layout === '3-column' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
          {[1, 2, 3].map((col) => (
            <div key={col} className="flex flex-col gap-6">
              {[1, 2, 3].map((i) => (
                <StoryCard
                  key={i}
                  title={`Column ${col} Story ${i}`}
                  eyebrow="Category"
                  imageHeight={140}
                  size="sm"
                />
              ))}
            </div>
          ))}
        </div>
      )}
      
      {layout === 'stacked' && (
        <div className="flex flex-col gap-6 px-4">
          <StoryCard
            title="Big Story Feature Headline"
            eyebrow="Featured"
            imageHeight={300}
            size="lg"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <StoryCard
                key={i}
                title={`Story ${i}`}
                eyebrow="Category"
                horizontal
                size="sm"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="w-full max-w-[960px] mx-auto py-8 px-4">
      {/* Logo and Social */}
      <div className="flex flex-col items-center gap-4 py-8 border-b border-[#ededed]">
        <h2 className="text-2xl font-bold tracking-[0.2em]">HEARST</h2>
        <div className="flex gap-4">
          {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
            <a key={social} href="#" className="w-8 h-8 bg-[#121212] rounded-full flex items-center justify-center">
              <span className="sr-only">{social}</span>
              <div className="w-4 h-4 bg-white rounded-sm" />
            </a>
          ))}
        </div>
      </div>
      
      {/* Mega Menu */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-b border-[#ededed]">
        {['About', 'Contact', 'Careers', 'Advertise'].map((section) => (
          <div key={section}>
            <h3 className="font-bold text-sm text-[#121212] mb-4">{section}</h3>
            <ul className="flex flex-col gap-2">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-[#575757] hover:text-[#121212]">
                    Link {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Legal */}
      <div className="py-8 text-center">
        <p className="text-xs text-[#757575]">
          © 2024 Hearst Magazine Media, Inc. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          {['Privacy Policy', 'Terms of Use', 'CA Notice'].map((link) => (
            <a key={link} href="#" className="text-xs text-[#757575] hover:text-[#121212]">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Main Homepage Component
export function HearstHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main className="flex flex-col gap-12 pb-12">
        {/* Hero Section */}
        <section className="w-full max-w-[960px] mx-auto px-4 pt-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Top Section */}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[220px] flex flex-col gap-4">
                  <StoryCard
                    title="Story Card Headline One"
                    eyebrow="Category"
                    imageHeight={140}
                    size="sm"
                  />
                  <StoryCard
                    title="Story Card Headline Two"
                    eyebrow="Category"
                    imageHeight={140}
                    size="sm"
                  />
                </div>
                <div className="flex-1">
                  <BigCard
                    title="Big Card Title Goes Here. Will be Two Lines"
                    eyebrow="{eyebrow}"
                    author="By Author Name"
                  />
                </div>
              </div>
              
              {/* Newsletter */}
              <NewsletterPromo />
              
              {/* Trending */}
              <TrendingSection />
            </div>
            
            {/* Right Column */}
            <div className="w-full lg:w-[304px] flex flex-col gap-6">
              <SupportingStoryCard />
              <SupportingStoryCard />
              <SupportingStoryCard />
              <AdUnit size="300x250" />
            </div>
          </div>
        </section>
        
        {/* Carousel */}
        <Carousel />
        
        {/* Ad */}
        <AdUnit size="300x250" />
        
        {/* Feed Blocks */}
        <FeedBlock title="H2 Headline" layout="big-story" />
        <FeedBlock title="H2 Headline" layout="4-across" />
        <FeedBlock title="H2 Headline" layout="text-only" />
        <FeedBlock title="H2 Headline" layout="3-column" />
        <FeedBlock title="H2 Headline" layout="stacked" />
        <FeedBlock title="H2 Headline" layout="big-story" />
        <FeedBlock title="H2 Headline" layout="4-across" />
      </main>
      
      <Footer />
    </div>
  );
}
