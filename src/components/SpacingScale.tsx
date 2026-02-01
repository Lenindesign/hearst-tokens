'use client';

import { TokenValue } from '@/lib/tokens';

interface SpacingScaleProps {
  tokens: Record<string, TokenValue>;
  title: string;
  showTitle?: boolean;
}

export function SpacingScale({ tokens, title, showTitle = true }: SpacingScaleProps) {
  const entries = Object.entries(tokens).sort((a, b) => {
    const aVal = parseInt(String(a[1].value)) || 0;
    const bVal = parseInt(String(b[1].value)) || 0;
    return aVal - bVal;
  });

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      {showTitle && (
        <h3 className="text-[1.1rem] font-semibold text-[#575757] mb-4">{title}</h3>
      )}
      <div className="flex flex-col gap-3">
        {entries.map(([name, token]) => {
          const value = String(token.value);
          const numericValue = parseInt(value) || 0;
          const width = Math.min(numericValue, 400);

          return (
            <div
              key={name}
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => navigator.clipboard.writeText(value)}
            >
              <span className="w-[60px] text-[0.85rem] font-semibold text-[#121212]">
                {name.split('-').pop()}
              </span>
              <div
                className="h-6 rounded"
                style={{ 
                  width: `${width}px`,
                  background: 'linear-gradient(90deg, #3689fc 0%, #0d58c9 100%)',
                  transition: 'width 0.3s ease'
                }}
              />
              <span className="text-[0.75rem] font-mono text-[#757575] min-w-[60px]">
                {value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
