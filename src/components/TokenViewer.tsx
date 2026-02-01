'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Section } from './Section';
import { ColorSwatch } from './ColorSwatch';
import { TokenTable } from './TokenTable';
import { SpacingScale } from './SpacingScale';
import { Toast } from './Toast';
import {
  fetchTokens,
  flattenTokens,
  TokenValue,
  TokenData,
  AnyTokenObject,
} from '@/lib/tokens';

export function TokenViewer() {
  const [tokens, setTokens] = useState<TokenData | null>(null);
  const [activeSection, setActiveSection] = useState('colors');
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-10 h-10 border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading design tokens...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-red-600">
          <p className="text-lg font-semibold">Error loading tokens</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!tokens) return null;

  const primitives = tokens.values['Primitives/White Label'] as AnyTokenObject;
  const alias = tokens.values['Alias/White Label'] as AnyTokenObject;

  // Get flattened tokens
  const flatPrimitives = flattenTokens(primitives || {});
  const flatAlias = flattenTokens(alias || {});

  // Filter tokens by type
  const colorTokens = Object.fromEntries(
    Object.entries(flatAlias).filter(([_, v]) => v.type === 'color')
  );
  const dimensionTokens = Object.fromEntries(
    Object.entries(flatAlias).filter(([_, v]) => v.type === 'dimension')
  );
  const fontTokens = Object.fromEntries(
    Object.entries(flatAlias).filter(([_, v]) =>
      ['fontFamilies', 'fontSizes', 'fontWeights', 'lineHeights', 'letterSpacing'].includes(v.type)
    )
  );
  const typographyTokens = Object.fromEntries(
    Object.entries(flatAlias).filter(([_, v]) => v.type === 'typography')
  );

  // Get primitive colors
  const primitiveColors = (primitives?._palette || {}) as Record<string, Record<string, TokenValue>>;

  // Get brand themes
  const brandKeys = Object.keys(tokens.values).filter(
    (key) => key.startsWith('Alias/') && key !== 'Alias/White Label'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeSection === 'colors' && (
          <>
            <Section id="colors" title="Color Tokens">
              {/* Primitive Palettes */}
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Primitive Palettes</h3>
              {Object.entries(primitiveColors).map(([paletteName, colors]): ReactNode => (
                <div key={paletteName} className="mb-8">
                  <h4 className="text-md font-medium text-gray-600 mb-3 capitalize">
                    {paletteName}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                    {Object.entries(colors).map(([shade, token]) => (
                      <ColorSwatch
                        key={`${paletteName}-${shade}`}
                        name={`${shade}`}
                        value={String(token.value)}
                        onClick={() => copyToClipboard(String(token.value))}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Semantic Colors */}
              <h3 className="text-lg font-semibold text-gray-700 mb-4 mt-12">Semantic Colors</h3>
              {alias?.palette && Object.entries(alias.palette as Record<string, Record<string, unknown>>)
                .map(([category, values]) => {
                  const flatCategory = flattenTokens({ [category]: values } as Record<string, unknown>);
                  const colorEntries = Object.entries(flatCategory).filter(
                    ([_, v]) => v.type === 'color'
                  );

                  if (colorEntries.length === 0) return null;

                  return (
                    <div key={category} className="mb-8">
                      <h4 className="text-md font-medium text-gray-600 mb-3 capitalize">
                        {category}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                        {colorEntries.map(([name, token]) => (
                          <ColorSwatch
                            key={name}
                            name={name.replace(`${category}-`, '')}
                            value={String(token.value)}
                            onClick={() => copyToClipboard(String(token.value))}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })
                .filter(Boolean)}
            </Section>
          </>
        )}

        {activeSection === 'typography' && (
          <Section id="typography" title="Typography">
            {/* Font Families */}
            <TokenTable
              title="Font Families"
              tokens={Object.fromEntries(
                Object.entries(fontTokens).filter(([_, v]) => v.type === 'fontFamilies')
              )}
            />

            {/* Font Sizes */}
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Font Sizes</h3>
            <div className="space-y-3 mb-8">
              {Object.entries(fontTokens)
                .filter(([_, v]) => v.type === 'fontSizes')
                .map(([name, token]) => (
                  <div
                    key={name}
                    className="flex items-baseline gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={() => copyToClipboard(String(token.value))}
                  >
                    <span
                      className="flex-1 text-gray-900"
                      style={{ fontSize: String(token.value) }}
                    >
                      The quick brown fox
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {name.split('-').pop()}: {String(token.value)}
                    </span>
                  </div>
                ))}
            </div>

            {/* Font Weights */}
            <TokenTable
              title="Font Weights"
              tokens={Object.fromEntries(
                Object.entries(fontTokens).filter(([_, v]) => v.type === 'fontWeights')
              )}
              renderPreview={(token) => (
                <span style={{ fontWeight: String(token.value) }}>Sample</span>
              )}
            />

            {/* Line Heights */}
            <TokenTable
              title="Line Heights"
              tokens={Object.fromEntries(
                Object.entries(fontTokens).filter(([_, v]) => v.type === 'lineHeights')
              )}
            />

            {/* Letter Spacing */}
            <TokenTable
              title="Letter Spacing"
              tokens={Object.fromEntries(
                Object.entries(fontTokens).filter(([_, v]) => v.type === 'letterSpacing')
              )}
            />
          </Section>
        )}

        {activeSection === 'spacing' && (
          <Section id="spacing" title="Spacing & Layout">
            {/* Space Scale */}
            {alias?.space && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Space Scale</h3>
                <div className="space-y-2">
                  {Object.entries(alias.space as Record<string, TokenValue>).map(([name, token]) => {
                    const refMatch = String(token.value).match(/\{_size\.(\d+)\}/);
                    const pxValue = refMatch ? parseInt(refMatch[1]) : 0;
                    return (
                      <div
                        key={name}
                        className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded cursor-pointer"
                        onClick={() => copyToClipboard(`space.${name}`)}
                      >
                        <span className="w-12 text-sm font-semibold text-gray-700">{name}</span>
                        <div
                          className="h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded"
                          style={{ width: `${Math.min(pxValue * 2, 300)}px` }}
                        />
                        <span className="text-xs font-mono text-gray-500">
                          {String(token.value)} ({pxValue}px)
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Layout Tokens */}
            {alias?.layout && (
              <TokenTable
                title="Layout Breakpoints"
                tokens={flattenTokens(alias.layout as Record<string, unknown>)}
              />
            )}

            {/* Size Primitives */}
            {primitives?._size && (
              <SpacingScale
                title="Size Primitives"
                tokens={flattenTokens(primitives._size as Record<string, unknown>)}
              />
            )}
          </Section>
        )}

        {activeSection === 'borders' && (
          <Section id="borders" title="Borders">
            {/* Border Widths */}
            {alias?.border?.width && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Border Widths</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(alias.border.width as Record<string, TokenValue>).map(
                    ([name, token]) => {
                      const refMatch = String(token.value).match(/\{_size\.(\d+)\}/);
                      const px = refMatch ? refMatch[1] : '0';
                      return (
                        <div
                          key={name}
                          className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 cursor-pointer"
                          onClick={() => copyToClipboard(`border.width.${name}`)}
                        >
                          <div
                            className="w-16 h-16 mx-auto mb-2 rounded bg-white"
                            style={{ border: `${px}px solid #0d58c9` }}
                          />
                          <div className="text-sm font-semibold text-gray-700">{name}</div>
                          <div className="text-xs text-gray-500">{px}px</div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}

            {/* Border Radius */}
            {alias?.border?.radius && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Border Radius</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {Object.entries(alias.border.radius as Record<string, TokenValue>).map(
                    ([name, token]) => {
                      const refMatch = String(token.value).match(/\{_size\.(\d+)\}/);
                      const px = refMatch ? Math.min(parseInt(refMatch[1]), 32) : 0;
                      return (
                        <div
                          key={name}
                          className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 cursor-pointer"
                          onClick={() => copyToClipboard(`border.radius.${name}`)}
                        >
                          <div
                            className="w-16 h-16 mx-auto mb-2 bg-blue-500"
                            style={{ borderRadius: `${px}px` }}
                          />
                          <div className="text-sm font-semibold text-gray-700">{name}</div>
                          <div className="text-xs text-gray-500">{String(token.value)}</div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}
          </Section>
        )}

        {activeSection === 'components' && (
          <Section id="components" title="Component Tokens">
            {alias?.component &&
              Object.entries(alias.component as Record<string, unknown>).map(
                ([componentName, componentTokens]) => {
                  const flat = flattenTokens({ [componentName]: componentTokens });
                  return (
                    <div key={componentName} className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-700 mb-4 capitalize">
                        {componentName}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                                Token
                              </th>
                              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                                Value
                              </th>
                              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                                Preview
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(flat).map(([name, token]) => {
                              const isColor =
                                token.type === 'color' ||
                                (typeof token.value === 'string' &&
                                  (token.value.startsWith('#') || token.value.startsWith('{')));
                              return (
                                <tr
                                  key={name}
                                  className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                                  onClick={() => copyToClipboard(String(token.value))}
                                >
                                  <td className="px-4 py-3 font-mono text-xs text-blue-600">
                                    {name}
                                  </td>
                                  <td className="px-4 py-3 font-mono text-xs text-gray-700">
                                    {String(token.value)}
                                  </td>
                                  <td className="px-4 py-3">
                                    {isColor && (
                                      <div
                                        className="w-6 h-6 rounded border border-gray-200"
                                        style={{
                                          backgroundColor: String(token.value).startsWith('{')
                                            ? '#f0f0f0'
                                            : String(token.value),
                                        }}
                                      />
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                }
              )}
          </Section>
        )}

        {activeSection === 'brands' && (
          <Section id="brands" title="Brand Themes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {brandKeys.map((brandKey) => {
                const brand = tokens.values[brandKey];
                const brandName = brandKey.replace('Alias/', '');
                const brandColors = (brand as any)?.palette?.brand || {};

                return (
                  <div
                    key={brandKey}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-4 bg-gray-50">
                      <h4 className="font-semibold text-gray-900">{brandName}</h4>
                    </div>
                    <div className="flex h-12">
                      {[1, 2, 3, 4, 5, 6].map((i) => {
                        const color = brandColors[i]?.value || '#f0f0f0';
                        const bgColor = color.startsWith('{') ? '#f0f0f0' : color;
                        return (
                          <div
                            key={i}
                            className="flex-1 cursor-pointer"
                            style={{ backgroundColor: bgColor }}
                            title={`Brand ${i}: ${color}`}
                            onClick={() => copyToClipboard(color)}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed brand colors */}
            {brandKeys.map((brandKey) => {
              const brand = tokens.values[brandKey];
              const brandName = brandKey.replace('Alias/', '');
              const brandColors = (brand as any)?.palette?.brand || {};

              return (
                <div key={brandKey} className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">{brandName}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                    {Object.entries(brandColors).map(([num, token]: [string, any]) => (
                      <ColorSwatch
                        key={`${brandName}-${num}`}
                        name={`brand.${num}`}
                        value={String(token.value)}
                        onClick={() => copyToClipboard(String(token.value))}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </Section>
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
