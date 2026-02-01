'use client';

import { TokenValue } from '@/lib/tokens';

interface SpacingScaleProps {
  tokens: Record<string, TokenValue>;
  title: string;
}

export function SpacingScale({ tokens, title }: SpacingScaleProps) {
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
      <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
      <div className="space-y-2">
        {entries.map(([name, token]) => {
          const value = String(token.value);
          const numericValue = parseInt(value) || 0;
          const width = Math.min(numericValue, 400);

          return (
            <div
              key={name}
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
              onClick={() => navigator.clipboard.writeText(value)}
            >
              <span className="w-16 text-sm font-semibold text-gray-700">
                {name.split('-').pop()}
              </span>
              <div
                className="h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded"
                style={{ width: `${width}px` }}
              />
              <span className="text-xs font-mono text-gray-500 min-w-[60px]">
                {value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
