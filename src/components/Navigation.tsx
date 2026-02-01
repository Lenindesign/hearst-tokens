'use client';

const NAV_ITEMS = [
  { id: 'primitives', label: 'Primitives' },
  { id: 'alias', label: 'Alias Tokens' },
  { id: 'brands', label: 'Brands' },
  { id: 'components', label: 'Components' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing & Layout' },
] as const;

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <>
      {/* Header */}
      <header 
        className="text-white py-8 text-center sticky top-0 z-[100]"
        style={{ background: 'linear-gradient(135deg, #121212 0%, #3b3b3b 100%)', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
      >
        <h1 className="text-3xl font-bold mb-1">Hearst Design System</h1>
        <p className="text-sm opacity-80">Design Tokens Reference</p>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-[100px] z-[99] py-4">
        <div className="flex flex-wrap gap-2 justify-center px-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeSection === item.id
                  ? 'bg-[#121212] text-white border-[#121212]'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-[#121212] hover:text-white hover:border-[#121212]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
