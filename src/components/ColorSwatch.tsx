'use client';

import { getContrastColor } from '@/lib/tokens';

interface ColorSwatchProps {
  name: string;
  value: string;
  onClick?: () => void;
  small?: boolean;
}

export function ColorSwatch({ name, value, onClick, small = false }: ColorSwatchProps) {
  const isReference = value.startsWith('{');
  const bgColor = isReference ? '#f0f0f0' : value;
  const textColor = isReference ? '#757575' : getContrastColor(value);

  return (
    <div
      className="group rounded-xl overflow-hidden cursor-pointer bg-white transition-all duration-200 hover:-translate-y-1"
      style={{ 
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
      }}
      onClick={onClick}
    >
      <div
        className={`relative flex items-center justify-center ${small ? 'h-[60px]' : 'h-20'}`}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {isReference && (
          <span className="text-[0.7rem] p-2 block">Reference</span>
        )}
      </div>
      <div className="p-3 bg-white">
        <div className="text-[0.75rem] font-semibold text-[#3b3b3b] mb-1 break-words">
          {name}
        </div>
        <div className="text-[0.7rem] text-[#757575] font-mono break-all">
          {value}
        </div>
      </div>
    </div>
  );
}
