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
                    const resolvedFontWeight = fontWeight === '{font.weight.regular}' ? '400' : fontWeight === '{font.weight.semibold}' ? '600' : '700';
                    
                    return (
                      <div 
                        key={`${size}-${weight}`}
                        className="p-4 bg-[#f9f9f9] rounded-lg flex items-baseline gap-4 flex-wrap cursor-pointer hover:bg-[#f0f0f0]"
                        onClick={() => copyToClipboard(`typography.size.${size}.${weight}`)}
                      >
                        <div 
                          className="flex-1 min-w-[200px]"
                          style={{ fontSize, lineHeight, letterSpacing, fontWeight: resolvedFontWeight }}
                        >
                          {size} {weight}
                        </div>
                        <div className="text-[0.75rem] text-[#757575] font-mono">
                          size: {fontSize} | line: {lineHeight} | spacing: {letterSpacing} | weight: {fontWeight}
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
      </main>

      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onHide={() => setToast((t) => ({ ...t, visible: false }))}
      />
    </div>
  );
}
