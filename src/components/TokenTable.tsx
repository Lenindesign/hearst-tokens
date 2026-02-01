'use client';

import { TokenValue } from '@/lib/tokens';

interface TokenTableProps {
  tokens: Record<string, TokenValue>;
  title?: string;
  renderPreview?: (token: TokenValue, name: string, resolvedValue?: string) => React.ReactNode;
  resolveValue?: (value: string) => string;
  showType?: boolean;
}

export function TokenTable({ tokens, title, renderPreview, resolveValue, showType = true }: TokenTableProps) {
  const entries = Object.entries(tokens);

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      {title && (
        <h3 className="text-[1.1rem] font-semibold text-[#575757] mb-4">{title}</h3>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-[0.875rem] border-collapse">
          <thead>
            <tr className="bg-[#f9f9f9]">
              <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
              <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
              {showType && (
                <th className="px-4 py-3 text-left font-semibold text-[#575757]">Type</th>
              )}
              {renderPreview && (
                <th className="px-4 py-3 text-left font-semibold text-[#575757]">Preview</th>
              )}
            </tr>
          </thead>
          <tbody>
            {entries.map(([name, token]) => {
              const rawValue = typeof token.value === 'object' 
                ? JSON.stringify(token.value) 
                : String(token.value);
              const resolvedValue = resolveValue ? resolveValue(rawValue) : rawValue;
              
              return (
                <tr
                  key={name}
                  className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer transition-colors"
                  onClick={() => navigator.clipboard.writeText(rawValue)}
                >
                  <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">
                    {name}
                  </td>
                  <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">
                    {resolvedValue}
                  </td>
                  {showType && (
                    <td className="px-4 py-3">
                      <span className="text-[0.75rem] px-2 py-1 bg-[#f0f7ff] text-[#0d58c9] rounded">
                        {token.type}
                      </span>
                    </td>
                  )}
                  {renderPreview && (
                    <td className="px-4 py-3">
                      {renderPreview(token, name, resolvedValue)}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
