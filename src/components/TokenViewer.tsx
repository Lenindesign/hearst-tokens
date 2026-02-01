'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Section, PaletteGroup } from './Section';
import { ColorSwatch } from './ColorSwatch';
import { TokenTable } from './TokenTable';
import { SpacingScale } from './SpacingScale';
import { Toast } from './Toast';
import {
  fetchTokens,
  flattenTokens,
  resolveTokenReference,
  TokenValue,
  TokenData,
  AnyTokenObject,
} from '@/lib/tokens';

export function TokenViewer() {
  const [tokens, setTokens] = useState<TokenData | null>(null);
  const [activeSection, setActiveSection] = useState('primitives');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState({ message: '', visible: false });

  useEffect(() => {
    fetchTokens()
      .then(setTokens)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const copyToClipboard = useCallback((value: string) => {
    navigator.clipboard.writeText(value);
    setToast({ message: `Copied: ${value}`, visible: true });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <div 
            className="w-10 h-10 border-[3px] border-[#f0f0f0] rounded-full mx-auto mb-4"
            style={{ borderTopColor: '#0d58c9', animation: 'spin 1s linear infinite' }}
          />
          <p className="text-[#757575]">Loading design tokens...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <Section id="error" title="Error">
          <p className="text-[#cc2828]">Error loading tokens: {error}</p>
          <p className="mt-4">Please check your network connection and try again.</p>
        </Section>
      </div>
    );
  }

  if (!tokens) return null;

  const primitives = tokens.values['Primitives/White Label'] as AnyTokenObject;
  const alias = tokens.values['Alias/White Label'] as AnyTokenObject;

  // Get brand themes
  const brandKeys = Object.keys(tokens.values).filter(
    (key) => key.startsWith('Alias/') && key !== 'Alias/White Label'
  );

  // Space order for sorting
  const spaceOrder = ['none', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="max-w-[1400px] mx-auto px-8 py-8">
        {/* PRIMITIVES SECTION */}
        {activeSection === 'primitives' && (
          <>
            {/* Color Primitives */}
            <Section id="section-primitives" title="Color Primitives">
              {primitives?._palette && Object.entries(primitives._palette as Record<string, Record<string, TokenValue>>).map(([paletteName, colors]) => (
                <PaletteGroup key={paletteName} name={paletteName}>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
                    {Object.entries(colors).map(([shade, token]) => (
                      <ColorSwatch
                        key={`${paletteName}-${shade}`}
                        name={`${paletteName}-${shade}`}
                        value={String(token.value)}
                        onClick={() => copyToClipboard(String(token.value))}
                      />
                    ))}
                  </div>
                </PaletteGroup>
              ))}
            </Section>

            {/* Font Primitives */}
            {primitives?._font && (
              <Section id="font-primitives" title="Font Primitives">
                {/* Font Families */}
                {primitives._font.family && (
                  <>
                    <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-6 mb-4">Font Families</h3>
                    <table className="w-full text-[0.875rem] border-collapse mb-6">
                      <thead>
                        <tr className="bg-[#f9f9f9]">
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(primitives._font.family).map(([name, data]: [string, any]) => (
                          <tr 
                            key={name} 
                            className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer"
                            onClick={() => copyToClipboard(data.value)}
                          >
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">_font.family.{name}</td>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                            <td className="px-4 py-3">
                              <span className="text-[0.75rem] px-2 py-1 bg-[#f0f7ff] text-[#0d58c9] rounded">{data.type}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                {/* Font Sizes */}
                {primitives._font.size && (
                  <>
                    <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-6 mb-4">Font Sizes</h3>
                    <table className="w-full text-[0.875rem] border-collapse mb-6">
                      <thead>
                        <tr className="bg-[#f9f9f9]">
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Preview</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(primitives._font.size)
                          .sort((a: any, b: any) => parseFloat(a[1].value) - parseFloat(b[1].value))
                          .map(([name, data]: [string, any]) => (
                          <tr 
                            key={name} 
                            className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer"
                            onClick={() => copyToClipboard(data.value)}
                          >
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">_font.size.{name}</td>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                            <td className="px-4 py-3">
                              <span style={{ fontSize: data.value }}>Aa</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                {/* Font Weights */}
                {primitives._font.weight && (
                  <>
                    <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-6 mb-4">Font Weights</h3>
                    <table className="w-full text-[0.875rem] border-collapse mb-6">
                      <thead>
                        <tr className="bg-[#f9f9f9]">
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Preview</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(primitives._font.weight).map(([name, data]: [string, any]) => (
                          <tr 
                            key={name} 
                            className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer"
                            onClick={() => copyToClipboard(data.value)}
                          >
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">_font.weight.{name}</td>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                            <td className="px-4 py-3">
                              <span style={{ fontWeight: name }}>Sample Text</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </Section>
            )}

            {/* Size Primitives */}
            {primitives?._size && (
              <Section id="size-primitives" title="Size Primitives">
                <div className="flex flex-col gap-3">
                  {Object.entries(primitives._size as Record<string, TokenValue>)
                    .sort((a: any, b: any) => parseInt(a[1].value) - parseInt(b[1].value))
                    .map(([name, data]: [string, any]) => {
                      const width = Math.min(parseInt(data.value) || 0, 400);
                      return (
                        <div 
                          key={name}
                          className="flex items-center gap-4 cursor-pointer"
                          onClick={() => copyToClipboard(data.value)}
                        >
                          <span className="w-[60px] text-[0.85rem] font-semibold text-[#121212]">{name}</span>
                          <div 
                            className="h-6 rounded"
                            style={{ 
                              width: `${width}px`,
                              background: 'linear-gradient(90deg, #3689fc 0%, #0d58c9 100%)'
                            }}
                          />
                          <span className="text-[0.75rem] font-mono text-[#757575]">{data.value}</span>
                        </div>
                      );
                    })}
                </div>
              </Section>
            )}

            {/* Opacity Primitives */}
            {primitives?._opacity && (
              <Section id="opacity-primitives" title="Opacity Primitives">
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr className="bg-[#f9f9f9]">
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(primitives._opacity).map(([name, data]: [string, any]) => (
                      <tr 
                        key={name} 
                        className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer"
                        onClick={() => copyToClipboard(data.value)}
                      >
                        <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">_opacity.{name}</td>
                        <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                        <td className="px-4 py-3">
                          <div 
                            className="w-[60px] h-6 rounded"
                            style={{ background: '#0d58c9', opacity: data.value }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Section>
            )}

            {/* Z-Index Levels */}
            {primitives?.z && (
              <Section id="z-index" title="Z-Index Levels">
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr className="bg-[#f9f9f9]">
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(primitives.z).map(([name, data]: [string, any]) => (
                      <tr 
                        key={name} 
                        className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer"
                        onClick={() => copyToClipboard(data.value)}
                      >
                        <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">z.{name}</td>
                        <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Section>
            )}
          </>
        )}

        {/* ALIAS TOKENS SECTION */}
        {activeSection === 'alias' && (
          <Section id="section-alias" title="Alias Tokens (White Label)">
            {/* Palette */}
            {alias?.palette && Object.entries(alias.palette as Record<string, Record<string, unknown>>).map(([categoryName, category]) => {
              const flatCategory = flattenTokens({ [categoryName]: category } as Record<string, unknown>);
              const colorEntries = Object.entries(flatCategory).filter(([_, v]) => v.type === 'color');
              
              if (colorEntries.length === 0) return null;
              
              return (
                <PaletteGroup key={categoryName} name={categoryName}>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
                    {colorEntries.map(([name, token]) => {
                      const resolvedValue = resolveTokenReference(String(token.value), primitives, alias);
                      return (
                        <ColorSwatch
                          key={name}
                          name={name.replace(`${categoryName}-`, '')}
                          value={resolvedValue}
                          onClick={() => copyToClipboard(String(token.value))}
                        />
                      );
                    })}
                  </div>
                </PaletteGroup>
              );
            })}

            {/* Font Tokens */}
            {alias?.font && (
              <>
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-8 mb-4">Font Tokens</h3>
                
                {alias.font.size && (
                  <>
                    <h4 className="text-[0.9rem] text-[#757575] mt-4 mb-2">Sizes</h4>
                    <table className="w-full text-[0.875rem] border-collapse mb-4">
                      <thead>
                        <tr className="bg-[#f9f9f9]">
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(alias.font.size).map(([name, data]: [string, any]) => (
                          <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(data.value)}>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">font.size.{name}</td>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                {alias.font['letter-spacing'] && (
                  <>
                    <h4 className="text-[0.9rem] text-[#757575] mt-4 mb-2">Letter Spacing</h4>
                    <table className="w-full text-[0.875rem] border-collapse mb-4">
                      <thead>
                        <tr className="bg-[#f9f9f9]">
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(alias.font['letter-spacing']).map(([name, data]: [string, any]) => (
                          <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(data.value)}>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">font.letter-spacing.{name}</td>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                {alias.font['line-height'] && (
                  <>
                    <h4 className="text-[0.9rem] text-[#757575] mt-4 mb-2">Line Heights</h4>
                    <table className="w-full text-[0.875rem] border-collapse mb-4">
                      <thead>
                        <tr className="bg-[#f9f9f9]">
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(alias.font['line-height']).map(([name, data]: [string, any]) => (
                          <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(data.value)}>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">font.line-height.{name}</td>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                {alias.font.weight && (
                  <>
                    <h4 className="text-[0.9rem] text-[#757575] mt-4 mb-2">Weights</h4>
                    <table className="w-full text-[0.875rem] border-collapse mb-4">
                      <thead>
                        <tr className="bg-[#f9f9f9]">
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(alias.font.weight).map(([name, data]: [string, any]) => (
                          <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(data.value)}>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">font.weight.{name}</td>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </>
            )}

            {/* Space Tokens */}
            {alias?.space && (
              <>
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-8 mb-4">Space Tokens</h3>
                <div className="flex flex-col gap-3">
                  {Object.entries(alias.space as Record<string, TokenValue>).map(([name, token]) => {
                    const refMatch = String(token.value).match(/\{_size\.(\d+)\}/);
                    const displayWidth = refMatch ? Math.min(parseInt(refMatch[1]), 200) : 0;
                    return (
                      <div 
                        key={name}
                        className="flex items-center gap-4 cursor-pointer"
                        onClick={() => copyToClipboard(String(token.value))}
                      >
                        <span className="w-[60px] text-[0.85rem] font-semibold text-[#121212]">{name}</span>
                        <div 
                          className="h-6 rounded"
                          style={{ width: `${displayWidth}px`, background: 'linear-gradient(90deg, #3689fc 0%, #0d58c9 100%)' }}
                        />
                        <span className="text-[0.75rem] font-mono text-[#757575]">{String(token.value)}</span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* Border Tokens */}
            {alias?.border && (
              <>
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-8 mb-4">Border Tokens</h3>
                
                {alias.border.width && (
                  <>
                    <h4 className="text-[0.9rem] text-[#757575] mt-4 mb-2">Border Widths</h4>
                    <table className="w-full text-[0.875rem] border-collapse mb-4">
                      <thead>
                        <tr className="bg-[#f9f9f9]">
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Preview</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(alias.border.width).map(([name, data]: [string, any]) => {
                          const refMatch = String(data.value).match(/\{_size\.(\d+)\}/);
                          const px = refMatch ? refMatch[1] : '0';
                          return (
                            <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(data.value)}>
                              <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">border.width.{name}</td>
                              <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                              <td className="px-4 py-3">
                                <div className="w-[60px] h-6 rounded" style={{ border: `${px}px solid #0d58c9` }} />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                )}

                {alias.border.radius && (
                  <>
                    <h4 className="text-[0.9rem] text-[#757575] mt-4 mb-2">Border Radius</h4>
                    <table className="w-full text-[0.875rem] border-collapse mb-4">
                      <thead>
                        <tr className="bg-[#f9f9f9]">
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                          <th className="px-4 py-3 text-left font-semibold text-[#575757]">Preview</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(alias.border.radius).map(([name, data]: [string, any]) => {
                          const refMatch = String(data.value).match(/\{_size\.(\d+)\}/);
                          const px = refMatch ? Math.min(parseInt(refMatch[1]), 20) : 0;
                          return (
                            <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(data.value)}>
                              <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">border.radius.{name}</td>
                              <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                              <td className="px-4 py-3">
                                <div className="w-10 h-10" style={{ background: '#0d58c9', borderRadius: `${px}px` }} />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                )}
              </>
            )}

            {/* Layout Tokens */}
            {alias?.layout && (
              <>
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-8 mb-4">Layout Tokens</h3>
                <table className="w-full text-[0.875rem] border-collapse mb-4">
                  <thead>
                    <tr className="bg-[#f9f9f9]">
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(flattenTokens(alias.layout as Record<string, unknown>)).map(([name, token]) => (
                      <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(String(token.value))}>
                        <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">layout.{name}</td>
                        <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{String(token.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {/* Elevation */}
            {alias?.elevation && (
              <>
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-8 mb-4">Elevation (Z-Index)</h3>
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr className="bg-[#f9f9f9]">
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(alias.elevation).map(([name, data]: [string, any]) => (
                      <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(data.value)}>
                        <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">elevation.{name}</td>
                        <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </Section>
        )}

        {/* BRANDS SECTION */}
        {activeSection === 'brands' && (
          <>
            <Section id="section-brands" title="Brand Themes">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
                {brandKeys.map((brandKey) => {
                  const brand = tokens.values[brandKey] as AnyTokenObject;
                  const brandName = brandKey.replace('Alias/', '');
                  const brandColors = brand?.palette?.brand || {};

                  return (
                    <div key={brandKey} className="border border-[#e0e0e0] rounded-xl overflow-hidden">
                      <div className="p-4 text-center">
                        <div className="font-semibold text-[0.9rem] mb-2">{brandName}</div>
                      </div>
                      <div className="flex h-10">
                        {[1, 2, 3, 4, 5, 6].map((i) => {
                          const color = brandColors[i]?.value || '#f0f0f0';
                          const resolvedColor = resolveTokenReference(String(color), primitives, brand);
                          return (
                            <div
                              key={i}
                              className="flex-1 cursor-pointer"
                              style={{ backgroundColor: resolvedColor }}
                              title={`Brand ${i}: ${color}`}
                              onClick={() => copyToClipboard(String(color))}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>

            {/* Detailed brand tokens */}
            {brandKeys.map((brandKey) => {
              const brand = tokens.values[brandKey] as AnyTokenObject;
              const brandName = brandKey.replace('Alias/', '');
              const brandColors = brand?.palette?.brand || {};
              const primaryColors = brand?.palette?.primary || {};

              return (
                <Section key={brandKey} id={`brand-${brandName}`} title={`${brandName} - Brand Colors`}>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 mb-6">
                    {Object.entries(brandColors).map(([num, token]: [string, any]) => {
                      const resolvedValue = resolveTokenReference(String(token.value), primitives, brand);
                      return (
                        <ColorSwatch
                          key={`${brandName}-brand-${num}`}
                          name={`brand.${num}`}
                          value={resolvedValue}
                          onClick={() => copyToClipboard(String(token.value))}
                        />
                      );
                    })}
                  </div>
                  
                  {Object.keys(primaryColors).length > 0 && (
                    <>
                      <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-6 mb-4">Primary Palette</h3>
                      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
                        {Object.entries(primaryColors).map(([shade, token]: [string, any]) => {
                          const resolvedValue = resolveTokenReference(String(token.value), primitives, brand);
                          return (
                            <ColorSwatch
                              key={`${brandName}-primary-${shade}`}
                              name={`primary.${shade}`}
                              value={resolvedValue}
                              onClick={() => copyToClipboard(String(token.value))}
                            />
                          );
                        })}
                      </div>
                    </>
                  )}
                </Section>
              );
            })}
          </>
        )}

        {/* COMPONENTS SECTION */}
        {activeSection === 'components' && (
          <Section id="section-components" title="Component Tokens">
            {alias?.component && Object.entries(alias.component as Record<string, unknown>).map(([componentName, componentTokens]) => {
              const flat = flattenTokens({ [componentName]: componentTokens });
              
              return (
                <div key={componentName} className="mb-8">
                  <h3 className="text-[1.1rem] font-semibold text-[#575757] capitalize mt-6 mb-4">{componentName}</h3>
                  <table className="w-full text-[0.875rem] border-collapse">
                    <thead>
                      <tr className="bg-[#f9f9f9]">
                        <th className="px-4 py-3 text-left font-semibold text-[#575757]">Token</th>
                        <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                        <th className="px-4 py-3 text-left font-semibold text-[#575757]">Preview/Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(flat).map(([name, token]) => {
                        const isColor = token.type === 'color' || (typeof token.value === 'string' && (String(token.value).startsWith('#') || String(token.value).startsWith('{')));
                        const resolvedValue = resolveTokenReference(String(token.value), primitives, alias);
                        
                        return (
                          <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(String(token.value))}>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">component.{componentName}.{name}</td>
                            <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{String(token.value)}</td>
                            <td className="px-4 py-3">
                              {isColor ? (
                                <div className="w-6 h-6 rounded border border-[#e0e0e0]" style={{ backgroundColor: resolvedValue }} />
                              ) : (
                                <span className="text-[0.75rem] px-2 py-1 bg-[#f0f7ff] text-[#0d58c9] rounded">{token.type}</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </Section>
        )}

        {/* TYPOGRAPHY SECTION */}
        {activeSection === 'typography' && (
          <Section id="section-typography" title="Typography Scales">
            {alias?.typography?.size && (
              <div className="flex flex-col gap-4">
                {['9xl', '8xl', '7xl', '6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'].map((size) => {
                  const sizeData = (alias.typography.size as any)[size];
                  if (!sizeData) return null;
                  
                  return Object.entries(sizeData).map(([weight, data]: [string, any]) => {
                    if (!data?.value) return null;
                    
                    const { fontSize, lineHeight, letterSpacing, fontWeight } = data.value;
                    
                    // Resolve token references to actual CSS values
                    const resolvedFontSize = resolveTokenReference(fontSize, primitives, alias);
                    const resolvedLineHeight = resolveTokenReference(lineHeight, primitives, alias);
                    const resolvedLetterSpacing = resolveTokenReference(letterSpacing, primitives, alias);
                    const resolvedFontWeight = resolveTokenReference(fontWeight, primitives, alias);
                    
                    return (
                      <div 
                        key={`${size}-${weight}`}
                        className="p-4 bg-[#f9f9f9] rounded-lg flex items-baseline gap-4 flex-wrap cursor-pointer hover:bg-[#f0f0f0]"
                        onClick={() => copyToClipboard(`typography.size.${size}.${weight}`)}
                      >
                        <div 
                          className="flex-1 min-w-[200px]"
                          style={{ 
                            fontSize: resolvedFontSize, 
                            lineHeight: resolvedLineHeight, 
                            letterSpacing: resolvedLetterSpacing, 
                            fontWeight: resolvedFontWeight 
                          }}
                        >
                          {size} {weight}
                        </div>
                        <div className="text-[0.75rem] text-[#757575] font-mono">
                          size: {resolvedFontSize} | line: {resolvedLineHeight} | spacing: {resolvedLetterSpacing} | weight: {resolvedFontWeight}
                        </div>
                      </div>
                    );
                  });
                })}
              </div>
            )}
          </Section>
        )}

        {/* SPACING & LAYOUT SECTION */}
        {activeSection === 'spacing' && (
          <>
            <Section id="section-spacing" title="Spacing Scale">
              {alias?.space && (
                <div className="flex flex-col gap-3">
                  {spaceOrder.map((name) => {
                    const token = (alias.space as Record<string, TokenValue>)[name];
                    if (!token) return null;
                    
                    const refMatch = String(token.value).match(/\{_size\.(\d+)\}/);
                    const pxValue = refMatch ? parseInt(refMatch[1]) : 0;
                    
                    return (
                      <div 
                        key={name}
                        className="flex items-center gap-4 cursor-pointer"
                        onClick={() => copyToClipboard(`space.${name}`)}
                      >
                        <span className="w-[60px] text-[0.85rem] font-semibold text-[#121212]">{name}</span>
                        <div 
                          className="h-6 rounded"
                          style={{ 
                            width: `${Math.min(pxValue * 2, 300)}px`,
                            background: 'linear-gradient(90deg, #3689fc 0%, #0d58c9 100%)'
                          }}
                        />
                        <span className="text-[0.75rem] font-mono text-[#757575]">{String(token.value)} ({pxValue}px)</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </Section>

            {alias?.layout?.viewport && (
              <Section id="layout-breakpoints" title="Layout Breakpoints">
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr className="bg-[#f9f9f9]">
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Breakpoint</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Visual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(alias.layout.viewport).map(([name, data]: [string, any]) => {
                      const refMatch = String(data.value).match(/\{_size\.(\d+)\}/);
                      const pxValue = refMatch ? parseInt(refMatch[1]) : 0;
                      const visualWidth = Math.min(pxValue / 8, 200);
                      
                      return (
                        <tr key={name} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer" onClick={() => copyToClipboard(`layout.viewport.${name}`)}>
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">viewport.{name}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{data.value} ({pxValue}px)</td>
                          <td className="px-4 py-3">
                            <div className="h-6 rounded" style={{ width: `${visualWidth}px`, background: 'linear-gradient(90deg, #3689fc, #0d58c9)' }} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Section>
            )}
          </>
        )}

        {/* TOKEN AUDIT SECTION */}
        {activeSection === 'audit' && (
          <>
            <Section id="section-audit" title="Token Audit: Tailwind CSS vs Figma Design System">
              <p className="text-[#575757] mb-6">
                Comparing tokens defined in <code className="bg-[#f0f0f0] px-2 py-1 rounded text-[#0d58c9]">globals.css</code> with the Figma Design System tokens.
              </p>
              
              {/* Color Audit */}
              <div className="mb-8">
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mb-4">Color Tokens Audit</h3>
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr className="bg-[#f9f9f9]">
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Tailwind Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">CSS Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Figma Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Figma Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Gray palette comparison */}
                    {[
                      { tw: 'gray-7', css: '#121212', figma: '_palette.gray.7' },
                      { tw: 'gray-11', css: '#1c1c1c', figma: '_palette.gray.11' },
                      { tw: 'gray-16', css: '#292929', figma: '_palette.gray.16' },
                      { tw: 'gray-23', css: '#3b3b3b', figma: '_palette.gray.23' },
                      { tw: 'gray-34', css: '#575757', figma: '_palette.gray.34' },
                      { tw: 'gray-46', css: '#757575', figma: '_palette.gray.46' },
                      { tw: 'gray-58', css: '#949494', figma: '_palette.gray.58' },
                      { tw: 'gray-74', css: '#bdbdbd', figma: '_palette.gray.74' },
                      { tw: 'gray-84', css: '#d6d6d6', figma: '_palette.gray.84' },
                      { tw: 'gray-93', css: '#ededed', figma: '_palette.gray.93' },
                      { tw: 'gray-96', css: '#f5f5f5', figma: '_palette.gray.96' },
                      { tw: 'gray-100', css: '#ffffff', figma: '_palette.gray.100' },
                    ].map((item) => {
                      const figmaValue = primitives?._palette?.gray?.[item.tw.split('-')[1]]?.value || 'Not found';
                      const isMatch = item.css.toLowerCase() === String(figmaValue).toLowerCase();
                      return (
                        <tr key={item.tw} className="border-b border-[#f0f0f0]">
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">--color-{item.tw}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded border border-[#e0e0e0]" style={{ backgroundColor: item.css }} />
                              <span className="font-mono text-[0.8rem]">{item.css}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{item.figma}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded border border-[#e0e0e0]" style={{ backgroundColor: String(figmaValue) }} />
                              <span className="font-mono text-[0.8rem]">{String(figmaValue)}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`text-[0.75rem] px-2 py-1 rounded ${isMatch ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                              {isMatch ? '✓ Match' : '✗ Mismatch'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                    {/* Blue palette comparison */}
                    {[
                      { tw: 'blue-500', css: '#3689fc', figma: '_palette.blue.50' },
                      { tw: 'blue-600', css: '#0d58c9', figma: '_palette.blue.60' },
                    ].map((item) => {
                      const figmaValue = primitives?._palette?.blue?.[item.figma.split('.').pop() || '']?.value || 'Not found';
                      const isMatch = item.css.toLowerCase() === String(figmaValue).toLowerCase();
                      return (
                        <tr key={item.tw} className="border-b border-[#f0f0f0]">
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">--color-{item.tw}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded border border-[#e0e0e0]" style={{ backgroundColor: item.css }} />
                              <span className="font-mono text-[0.8rem]">{item.css}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">{item.figma}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded border border-[#e0e0e0]" style={{ backgroundColor: String(figmaValue) }} />
                              <span className="font-mono text-[0.8rem]">{String(figmaValue)}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`text-[0.75rem] px-2 py-1 rounded ${isMatch ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                              {isMatch ? '✓ Match' : '✗ Mismatch'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Font Size Audit */}
              <div className="mb-8">
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mb-4">Font Size Tokens Audit</h3>
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr className="bg-[#f9f9f9]">
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Tailwind Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">CSS Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Figma Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Figma Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tw: '3xs', css: '0.75rem', figma: '0_75' },
                      { tw: '2xs', css: '0.8125rem', figma: '0_8125' },
                      { tw: 'xs', css: '0.875rem', figma: '0_875' },
                      { tw: 'sm', css: '0.9375rem', figma: '0_9375' },
                      { tw: 'md', css: '1rem', figma: '1' },
                      { tw: 'lg', css: '1.125rem', figma: '1_125' },
                      { tw: 'xl', css: '1.25rem', figma: '1_25' },
                      { tw: '2xl', css: '1.5rem', figma: '1_5' },
                      { tw: '3xl', css: '1.75rem', figma: '1_75' },
                      { tw: '4xl', css: '2rem', figma: '2' },
                    ].map((item) => {
                      const figmaValue = primitives?._font?.size?.[item.figma]?.value || 'Not found';
                      const isMatch = item.css === figmaValue;
                      return (
                        <tr key={item.tw} className="border-b border-[#f0f0f0]">
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">--font-size-{item.tw}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem]">{item.css}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">_font.size.{item.figma}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem]">{String(figmaValue)}</td>
                          <td className="px-4 py-3">
                            <span className={`text-[0.75rem] px-2 py-1 rounded ${isMatch ? 'bg-green-100 text-green-700' : figmaValue === 'Not found' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                              {isMatch ? '✓ Match' : figmaValue === 'Not found' ? '? Not Found' : '✗ Mismatch'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Spacing Audit */}
              <div className="mb-8">
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mb-4">Spacing Tokens Audit</h3>
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr className="bg-[#f9f9f9]">
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Tailwind Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">CSS Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Figma Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Figma Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tw: 'none', css: '0px', figma: '0' },
                      { tw: '3xs', css: '2px', figma: '2' },
                      { tw: '2xs', css: '4px', figma: '4' },
                      { tw: 'xs', css: '8px', figma: '8' },
                      { tw: 'sm', css: '12px', figma: '12' },
                      { tw: 'md', css: '16px', figma: '16' },
                      { tw: 'lg', css: '20px', figma: '20' },
                      { tw: 'xl', css: '24px', figma: '24' },
                      { tw: '2xl', css: '32px', figma: '32' },
                      { tw: '3xl', css: '48px', figma: '48' },
                      { tw: '4xl', css: '64px', figma: '64' },
                    ].map((item) => {
                      const figmaValue = primitives?._size?.[item.figma]?.value || 'Not found';
                      const cssNumeric = parseInt(item.css);
                      const figmaNumeric = parseInt(String(figmaValue));
                      const isMatch = cssNumeric === figmaNumeric;
                      return (
                        <tr key={item.tw} className="border-b border-[#f0f0f0]">
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">--spacing-{item.tw}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem]">{item.css}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">_size.{item.figma}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem]">{String(figmaValue)}</td>
                          <td className="px-4 py-3">
                            <span className={`text-[0.75rem] px-2 py-1 rounded ${isMatch ? 'bg-green-100 text-green-700' : figmaValue === 'Not found' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                              {isMatch ? '✓ Match' : figmaValue === 'Not found' ? '? Not Found' : '✗ Mismatch'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Border Radius Audit */}
              <div className="mb-8">
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mb-4">Border Radius Tokens Audit</h3>
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr className="bg-[#f9f9f9]">
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Tailwind Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">CSS Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Figma Token</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Figma Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#575757]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tw: 'square', css: '0px', figma: 'square', aliasKey: '0' },
                      { tw: '2xs', css: '4px', figma: '2xs', aliasKey: '4' },
                      { tw: 'xs', css: '8px', figma: 'xs', aliasKey: '8' },
                      { tw: 'sm', css: '12px', figma: 'sm', aliasKey: '12' },
                      { tw: 'md', css: '16px', figma: 'md', aliasKey: '16' },
                      { tw: 'lg', css: '20px', figma: 'lg', aliasKey: '20' },
                      { tw: 'rounded', css: '1024px', figma: 'rounded', aliasKey: '1024' },
                    ].map((item) => {
                      const figmaRef = alias?.border?.radius?.[item.figma]?.value || 'Not found';
                      const refMatch = String(figmaRef).match(/\{_size\.(\d+)\}/);
                      const figmaValue = refMatch ? `${refMatch[1]}px` : String(figmaRef);
                      const cssNumeric = parseInt(item.css);
                      const figmaNumeric = refMatch ? parseInt(refMatch[1]) : parseInt(figmaValue);
                      const isMatch = cssNumeric === figmaNumeric;
                      return (
                        <tr key={item.tw} className="border-b border-[#f0f0f0]">
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#0d58c9]">--radius-{item.tw}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem]">{item.css}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem] text-[#3b3b3b]">border.radius.{item.figma}</td>
                          <td className="px-4 py-3 font-mono text-[0.8rem]">{figmaValue}</td>
                          <td className="px-4 py-3">
                            <span className={`text-[0.75rem] px-2 py-1 rounded ${isMatch ? 'bg-green-100 text-green-700' : figmaRef === 'Not found' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                              {isMatch ? '✓ Match' : figmaRef === 'Not found' ? '? Not Found' : '✗ Mismatch'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Missing from Tailwind */}
              <div className="mb-8">
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mb-4">Missing from Tailwind CSS (in Figma)</h3>
                <div className="bg-[#fff8e6] border border-[#f0d078] rounded-lg p-4">
                  <p className="text-[0.875rem] text-[#8a6d3b] mb-4">The following token categories exist in the Figma Design System but are not defined in globals.css:</p>
                  <ul className="list-disc list-inside text-[0.875rem] text-[#8a6d3b] space-y-2">
                    <li><strong>Red palette</strong> - Alert colors ({primitives?._palette?.red ? Object.keys(primitives._palette.red).length : 0} shades)</li>
                    <li><strong>Green palette</strong> - Success colors ({primitives?._palette?.green ? Object.keys(primitives._palette.green).length : 0} shades)</li>
                    <li><strong>Orange palette</strong> - Warning colors ({primitives?._palette?.orange ? Object.keys(primitives._palette.orange).length : 0} shades)</li>
                    <li><strong>Yellow palette</strong> - Caution colors ({primitives?._palette?.yellow ? Object.keys(primitives._palette.yellow).length : 0} shades)</li>
                    <li><strong>Font families</strong> - {primitives?._font?.family ? Object.keys(primitives._font.family).join(', ') : 'None found'}</li>
                    <li><strong>Font weights</strong> - {primitives?._font?.weight ? Object.keys(primitives._font.weight).join(', ') : 'None found'}</li>
                    <li><strong>Larger font sizes</strong> - 5xl through 9xl</li>
                    <li><strong>Opacity tokens</strong> - {primitives?._opacity ? Object.keys(primitives._opacity).length : 0} levels</li>
                    <li><strong>Z-index / elevation</strong> - {primitives?.z ? Object.keys(primitives.z).length : 0} levels</li>
                  </ul>
                </div>
              </div>

              {/* Recommendations */}
              <div className="mb-8">
                <h3 className="text-[1.1rem] font-semibold text-[#575757] mb-4">Recommendations</h3>
                <div className="bg-[#e8f4fd] border border-[#b8daff] rounded-lg p-4">
                  <ul className="list-disc list-inside text-[0.875rem] text-[#004085] space-y-2">
                    <li>Add missing color palettes (red, green, orange, yellow) to support alert/status states</li>
                    <li>Add font family tokens to ensure typography consistency</li>
                    <li>Add larger font sizes (5xl-9xl) for hero sections and headings</li>
                    <li>Add opacity tokens for overlay and disabled states</li>
                    <li>Add z-index tokens for consistent layering</li>
                    <li>Consider adding semantic color aliases (primary, neutral, alert) for easier theming</li>
                  </ul>
                </div>
              </div>
            </Section>
          </>
        )}
      </main>

      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onHide={() => setToast((t) => ({ ...t, visible: false }))}
      />
    </div>
  );
}
