'use client';

import { TokenValue } from '@/lib/tokens';

interface TokenTableProps {
  tokens: Record<string, TokenValue>;
  title: string;
  renderPreview?: (token: TokenValue, name: string) => React.ReactNode;
}

export function TokenTable({ tokens, title, renderPreview }: TokenTableProps) {
  const entries = Object.entries(tokens);

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-600">Token</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600">Value</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600">Type</th>
              {renderPreview && (
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Preview</th>
              )}
            </tr>
          </thead>
          <tbody>
            {entries.map(([name, token]) => (
              <tr
                key={name}
                className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => navigator.clipboard.writeText(String(token.value))}
              >
                <td className="px-4 py-3 font-mono text-xs text-blue-600">
                  {name}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-gray-700">
                  {typeof token.value === 'object' 
                    ? JSON.stringify(token.value) 
                    : String(token.value)}
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
                    {token.type}
                  </span>
                </td>
                {renderPreview && (
                  <td className="px-4 py-3">
                    {renderPreview(token, name)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
