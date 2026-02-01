'use client';

import { getContrastColor } from '@/lib/tokens';

interface ColorSwatchProps {
  name: string;
  value: string;
  onClick?: () => void;
}

export function ColorSwatch({ name, value, onClick }: ColorSwatchProps) {
  const isReference = value.startsWith('{');
  const bgColor = isReference ? '#f0f0f0' : value;
  const textColor = isReference ? '#757575' : getContrastColor(value);

  return (
    <div
      className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-white"
      onClick={onClick}
    >
      <div
        className="h-20 relative flex items-center justify-center"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {isReference && (
          <span className="text-xs font-medium">Reference</span>
        )}
      </div>
      <div className="p-3">
        <div className="text-xs font-semibold text-gray-700 mb-1 break-words">
          {name}
        </div>
        <div className="text-[10px] text-gray-500 font-mono break-all">
          {value}
        </div>
      </div>
    </div>
  );
}
