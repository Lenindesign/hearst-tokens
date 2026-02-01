import { Metadata } from 'next';
import { LeftSidebarColumn } from '@/components/LeftSidebarColumn';
import { BigCard } from '@/components/BigCard';
import { RightSidebarColumn } from '@/components/RightSidebarColumn';
import { SecondLeftSection } from '@/components/SecondLeftSection';

export const metadata: Metadata = {
  title: 'Component Library',
  description: 'Hearst Design System Components',
};

export default function ComponentsPage() {
  return (
    <div style={{ 
      padding: 32, 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: 48,
    }}>
      <h1 style={{ 
        fontSize: 32, 
        fontWeight: 700, 
        color: '#121212',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
      }}>
        Component Library
      </h1>
      
      {/* Second Left Section (2nd Left) */}
      <section>
        <h2 style={{ 
          fontSize: 20, 
          fontWeight: 600, 
          color: '#575757',
          marginBottom: 16,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          SecondLeftSection (2nd Left)
        </h2>
        <p style={{ 
          fontSize: 14, 
          color: '#757575',
          marginBottom: 24,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          Based on Pencil node: jnZaB - Newsletter promo, section title, and trending cards with badges
        </p>
        
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: 24, 
          borderRadius: 8,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          maxWidth: 700,
        }}>
          <SecondLeftSection 
            newsletterEyebrow="Good Housekeeping Newsletter"
            newsletterTitle="Sign up for daily tips"
            sectionTitle="Trending Now"
            trendingCards={[
              { id: 1, title: "I Tried a Workout Designed for Menopausal Women", timestamp: '2 hours ago', author: 'By Fitness Editor', badgeNumber: 1 },
              { id: 2, title: "The Best Kitchen Gadgets of 2024", timestamp: '3 hours ago', author: 'By Home Editor', badgeNumber: 2 },
              { id: 3, title: "Celebrity Chef Shares Secret Recipe", timestamp: '5 hours ago', author: 'By Food Editor', badgeNumber: 3 },
            ]}
          />
        </div>
      </section>
      
      {/* Right Sidebar Column (Col3) */}
      <section>
        <h2 style={{ 
          fontSize: 20, 
          fontWeight: 600, 
          color: '#575757',
          marginBottom: 16,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          RightSidebarColumn (Col3)
        </h2>
        <p style={{ 
          fontSize: 14, 
          color: '#757575',
          marginBottom: 24,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          Based on Pencil node: ZEf63 - Supporting feature cards with description, author, and image with play button
        </p>
        
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: 24, 
          borderRadius: 8,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          maxWidth: 352,
        }}>
          <RightSidebarColumn 
            cards={[
              { 
                id: 1, 
                description: "The cell company rolls out Gen Z influencers and fan experiences.", 
                author: 'By Marketing Team' 
              },
              { 
                id: 2, 
                description: "New electric vehicles are changing the automotive landscape forever.", 
                author: 'By Auto Desk' 
              },
              { 
                id: 3, 
                description: "Celebrity chefs share their favorite kitchen gadgets for home cooks.", 
                author: 'By Food Editor' 
              },
            ]}
          />
        </div>
      </section>
      
      {/* Big Card (Col2) */}
      <section>
        <h2 style={{ 
          fontSize: 20, 
          fontWeight: 600, 
          color: '#575757',
          marginBottom: 16,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          BigCard (Col2)
        </h2>
        <p style={{ 
          fontSize: 14, 
          color: '#757575',
          marginBottom: 24,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          Based on Pencil node: ElCNS - A featured card with large image, eyebrow, big title, and author
        </p>
        
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: 24, 
          borderRadius: 8,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          maxWidth: 500,
        }}>
          <BigCard 
            eyebrow="FEATURED"
            title="Big Card Title Goes Here. Will be Two Lines"
            author="By Author Name"
          />
        </div>
      </section>
      
      {/* Big Card with real content */}
      <section>
        <h2 style={{ 
          fontSize: 20, 
          fontWeight: 600, 
          color: '#575757',
          marginBottom: 16,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          BigCard - With Real Content
        </h2>
        
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: 24, 
          borderRadius: 8,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          maxWidth: 500,
        }}>
          <BigCard 
            eyebrow="AUTOMOTIVE NEWS"
            title="The 2024 Electric Vehicle Revolution Is Here"
            author="By John Smith"
          />
        </div>
      </section>
      
      {/* Left Sidebar Column */}
      <section>
        <h2 style={{ 
          fontSize: 20, 
          fontWeight: 600, 
          color: '#575757',
          marginBottom: 16,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          LeftSidebarColumn (Col1)
        </h2>
        <p style={{ 
          fontSize: 14, 
          color: '#757575',
          marginBottom: 24,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          Based on Pencil node: 802fn - A vertical column with section title and horizontal story cards
        </p>
        
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: 24, 
          borderRadius: 8,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <LeftSidebarColumn 
            title="Trending Now"
            stories={[
              { id: 1, title: "Why Did Valerie Bertinelli Leave 'Kids Baking Championship'?", timestamp: '2 hours ago' },
              { id: 2, title: "The Best New Cars Coming in 2024", timestamp: '3 hours ago' },
              { id: 3, title: "10 Kitchen Gadgets That Are Worth the Investment", timestamp: '5 hours ago' },
              { id: 4, title: "Celebrity Chef Reveals Secret Recipe", timestamp: '6 hours ago' },
              { id: 5, title: "Home Renovation Tips from the Experts", timestamp: '8 hours ago' },
              { id: 6, title: "The Most Anticipated Movies of the Year", timestamp: '10 hours ago' },
            ]}
          />
        </div>
      </section>
      
      {/* Default State */}
      <section>
        <h2 style={{ 
          fontSize: 20, 
          fontWeight: 600, 
          color: '#575757',
          marginBottom: 16,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif',
        }}>
          LeftSidebarColumn - Default State
        </h2>
        
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: 24, 
          borderRadius: 8,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <LeftSidebarColumn />
        </div>
      </section>
    </div>
  );
}
