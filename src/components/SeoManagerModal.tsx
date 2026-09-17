import React, { useState } from 'react';
import { X, Search, Sliders, Check, Copy, Globe, Share2, Code2, Tag, AlertCircle } from 'lucide-react';
import { SeoMetadata } from '../types';

interface SeoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  seoStore: Record<string, SeoMetadata>;
  activeRouteKey: string;
  onUpdateSeo: (routeKey: string, updated: SeoMetadata) => void;
}

export const SeoManagerModal: React.FC<SeoManagerModalProps> = ({
  isOpen,
  onClose,
  seoStore,
  activeRouteKey,
  onUpdateSeo
}) => {
  const [selectedRoute, setSelectedRoute] = useState<string>(activeRouteKey || 'home');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'serp' | 'og' | 'schema'>('editor');

  if (!isOpen) return null;

  const currentMeta: SeoMetadata = seoStore[selectedRoute] || seoStore['home'];

  const handleChange = (field: keyof SeoMetadata, value: any) => {
    onUpdateSeo(selectedRoute, {
      ...currentMeta,
      [field]: value
    });
  };

  const handleCopySchema = () => {
    const schemaContent = JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': currentMeta.schemaType,
        name: 'ZEDesign Interiors',
        url: currentMeta.canonical,
        description: currentMeta.metaDescription,
        headline: currentMeta.h1
      },
      null,
      2
    );
    navigator.clipboard.writeText(schemaContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const routeKeys = Object.keys(seoStore);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1C1B1A]/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="seo-modal-title"
    >
      <div className="bg-[#FAF8F5] w-full max-w-4xl border border-[#1C1B1A]/20 shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#1C1B1A]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#B39266]/10 text-[#B39266]">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 id="seo-modal-title" className="font-serif text-xl sm:text-2xl text-[#1C1B1A]">
                SEO & Technical Metadata Architecture
              </h2>
              <p className="text-xs text-[#8C827A]">
                Manage page titles, meta descriptions, canonicals, OG tags & Schema.org JSON-LD
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8C827A] hover:text-[#1C1B1A] focus-ring"
            aria-label="Close SEO inspector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Route Selector Ribbon */}
        <div className="bg-[#FAF8F5] px-4 py-2.5 border-b border-[#1C1B1A]/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C827A] shrink-0">
            Target Page:
          </span>
          {routeKeys.map((key) => (
            <button
              key={key}
              onClick={() => setSelectedRoute(key)}
              className={`px-3 py-1 text-xs font-mono rounded-xs shrink-0 transition-colors ${
                selectedRoute === key
                  ? 'bg-[#1C1B1A] text-[#FAF8F5]'
                  : 'bg-white border border-[#1C1B1A]/10 text-[#1C1B1A]/80 hover:border-[#1C1B1A]/40'
              }`}
            >
              {seoStore[key].route}
            </button>
          ))}
        </div>

        {/* Tab View Switcher */}
        <div className="px-6 pt-3 border-b border-[#1C1B1A]/10 bg-white flex items-center gap-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('editor')}
            className={`pb-2.5 flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'editor'
                ? 'border-[#B39266] text-[#1C1B1A] font-semibold'
                : 'border-transparent text-[#8C827A] hover:text-[#1C1B1A]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Metadata Fields</span>
          </button>

          <button
            onClick={() => setActiveTab('serp')}
            className={`pb-2.5 flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'serp'
                ? 'border-[#B39266] text-[#1C1B1A] font-semibold'
                : 'border-transparent text-[#8C827A] hover:text-[#1C1B1A]'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Google SERP Preview</span>
          </button>

          <button
            onClick={() => setActiveTab('og')}
            className={`pb-2.5 flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'og'
                ? 'border-[#B39266] text-[#1C1B1A] font-semibold'
                : 'border-transparent text-[#8C827A] hover:text-[#1C1B1A]'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Social Share Card</span>
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`pb-2.5 flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'schema'
                ? 'border-[#B39266] text-[#1C1B1A] font-semibold'
                : 'border-transparent text-[#8C827A] hover:text-[#1C1B1A]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Schema.org JSON-LD</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'editor' && (
            <div className="space-y-4 max-w-3xl">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1C1B1A]">
                    Page Title (&lt;title&gt;)
                  </label>
                  <span
                    className={`text-[11px] font-mono ${
                      currentMeta.title.length > 60 ? 'text-amber-600 font-bold' : 'text-[#8C827A]'
                    }`}
                  >
                    {currentMeta.title.length} / 60 chars
                  </span>
                </div>
                <input
                  type="text"
                  value={currentMeta.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#1C1B1A]/15 text-xs font-sans focus:border-[#B39266] focus-ring"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1C1B1A]">
                    Meta Description
                  </label>
                  <span
                    className={`text-[11px] font-mono ${
                      currentMeta.metaDescription.length > 160
                        ? 'text-amber-600 font-bold'
                        : 'text-[#8C827A]'
                    }`}
                  >
                    {currentMeta.metaDescription.length} / 160 chars
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={currentMeta.metaDescription}
                  onChange={(e) => handleChange('metaDescription', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#1C1B1A]/15 text-xs font-sans focus:border-[#B39266] focus-ring"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] mb-1">
                    Canonical URL
                  </label>
                  <input
                    type="text"
                    value={currentMeta.canonical}
                    onChange={(e) => handleChange('canonical', e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#1C1B1A]/15 text-xs font-mono focus:border-[#B39266] focus-ring"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] mb-1">
                    Robots Directives
                  </label>
                  <input
                    type="text"
                    value={currentMeta.robots}
                    onChange={(e) => handleChange('robots', e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#1C1B1A]/15 text-xs font-mono focus:border-[#B39266] focus-ring"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] mb-1">
                  Target Intent Keywords (Internal Audit)
                </label>
                <div className="flex flex-wrap gap-1.5 p-2 bg-white border border-[#1C1B1A]/15">
                  {currentMeta.primaryKeywords?.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-[#FAF8F5] border border-[#1C1B1A]/10 text-[11px] text-[#1C1B1A] flex items-center gap-1"
                    >
                      <Tag className="w-2.5 h-2.5 text-[#B39266]" />
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'serp' && (
            <div className="p-6 bg-white border border-[#1C1B1A]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#8C827A]">
                <Globe className="w-3.5 h-3.5 text-[#606D5E]" />
                <span className="font-mono">{currentMeta.canonical}</span>
              </div>
              <h3 className="text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                {currentMeta.title}
              </h3>
              <p className="text-xs text-[#4d5156] leading-relaxed">
                {currentMeta.metaDescription}
              </p>
            </div>
          )}

          {activeTab === 'og' && (
            <div className="max-w-md bg-white border border-[#1C1B1A]/10 overflow-hidden shadow-xs">
              <img
                src={currentMeta.ogImage}
                alt="OG Preview"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-mono">
                  zedesign.co.uk
                </span>
                <h4 className="font-serif font-semibold text-sm text-[#1C1B1A] leading-snug">
                  {currentMeta.ogTitle || currentMeta.title}
                </h4>
                <p className="text-xs text-[#8C827A] line-clamp-2">
                  {currentMeta.ogDescription || currentMeta.metaDescription}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#8C827A]">
                  Schema Types: <strong className="text-[#1C1B1A] font-mono">{currentMeta.schemaType}</strong>
                </span>
                <button
                  onClick={handleCopySchema}
                  className="px-3 py-1 bg-[#1C1B1A] text-white text-xs flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy JSON-LD'}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#1C1B1A] text-[#DCD7D0] text-xs font-mono overflow-x-auto rounded-xs">
                {JSON.stringify(
                  {
                    '@context': 'https://schema.org',
                    '@type': currentMeta.schemaType.split(',').map((s) => s.trim()),
                    name: 'ZEDesign Interiors',
                    url: currentMeta.canonical,
                    description: currentMeta.metaDescription,
                    headline: currentMeta.h1,
                    founder: {
                      '@type': 'Person',
                      name: 'Zoe Nicola Greenwood'
                    }
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#FAF8F5] border-t border-[#1C1B1A]/10 flex items-center justify-between text-xs text-[#8C827A]">
          <span>Changes are saved in live runtime state.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1C1B1A] text-white text-xs uppercase tracking-wider font-semibold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
