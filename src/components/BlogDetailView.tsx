import React from 'react';
import { BlogPost } from '../types';
import { OptimizedImage } from './OptimizedImage';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Bookmark, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface BlogDetailViewProps {
  post: BlogPost;
  onBack: () => void;
  onNavigateToContact: () => void;
  onSelectPost: (slug: string) => void;
  recentPosts: BlogPost[];
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({
  post,
  onBack,
  onNavigateToContact,
  onSelectPost,
  recentPosts
}) => {
  return (
    <article className="py-14 sm:py-20 bg-[#FAF8F5]">
      {/* Top Back Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8C827A] hover:text-[#1C1B1A] transition-colors focus-ring"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#8C827A]">
            <span className="px-2.5 py-1 bg-[#1C1B1A] text-white font-semibold">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#B39266]" />
              {post.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#B39266]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#1C1B1A] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-[#8C827A] italic font-light leading-relaxed">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-[#1C1B1A]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#1C1B1A]/15 shrink-0">
                <OptimizedImage
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                  maxWidth={200}
                />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] block">
                  {post.author.name}
                </span>
                <span className="text-[11px] text-[#8C827A]">
                  {post.author.role}, ZEDesign Interiors
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="aspect-16/9 max-h-[340px] overflow-hidden bg-[#1C1B1A]/10 border border-[#1C1B1A]/10">
          <OptimizedImage
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
            priority={true}
            maxWidth={1200}
          />
        </div>
      </div>

      {/* Editorial Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white p-8 sm:p-12 border border-[#1C1B1A]/10 shadow-xs space-y-8">
          {/* Key Takeaways Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="p-6 bg-[#FAF8F5] border-l-3 border-[#B39266] space-y-3">
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1B1A] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B39266]" />
                <span>Key Operator Takeaways</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1C1B1A]/85">
                {post.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#606D5E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Render structured article sections */}
          <div className="space-y-10">
            {post.contentSections.map((sec, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="font-serif text-2xl text-[#1C1B1A] font-semibold">
                  {sec.heading}
                </h2>
                {sec.subheading && (
                  <h3 className="text-xs uppercase tracking-wider text-[#B39266] font-semibold">
                    {sec.subheading}
                  </h3>
                )}
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#1C1B1A]/85 leading-relaxed font-light">
                    {p}
                  </p>
                ))}
                {sec.callout && (
                  <div className="p-4 bg-[#FAF8F5] border-l-2 border-[#B39266] italic text-xs sm:text-sm text-[#1C1B1A]/80">
                    “{sec.callout}”
                  </div>
                )}
                {sec.list && sec.list.length > 0 && (
                  <ul className="space-y-2 pl-4 border-l border-[#1C1B1A]/10">
                    {sec.list.map((li, lIdx) => (
                      <li key={lIdx} className="text-xs sm:text-sm text-[#1C1B1A]/80">
                        • {li}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Author Bio Footer */}
          <div className="p-6 bg-[#FAF8F5] border border-[#1C1B1A]/10 mt-10 space-y-2">
            <h3 className="font-serif text-lg text-[#1C1B1A]">About {post.author.name}</h3>
            <p className="text-xs text-[#8C827A] leading-relaxed">
              {post.author.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA & Related Articles */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="p-8 bg-[#24211E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-[#B39266]">
          <div>
            <h3 className="font-serif text-2xl text-white">Have questions about your project budget?</h3>
            <p className="text-xs text-[#DCD7D0] mt-1">
              Book a 20-minute feasibility call with Zoe Nicola Greenwood.
            </p>
          </div>
          <button
            onClick={onNavigateToContact}
            className="shrink-0 px-6 py-3 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-wider transition-colors"
          >
            Consult Zoe
          </button>
        </div>

        {recentPosts.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#1C1B1A]">More Practical Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recentPosts.slice(0, 2).map((rp) => (
                <button
                  key={rp.id}
                  onClick={() => onSelectPost(rp.slug)}
                  className="p-5 bg-white border border-[#1C1B1A]/10 hover:border-[#B39266] transition-colors text-left group"
                >
                  <span className="text-[10px] uppercase font-mono text-[#8C827A] block mb-1">
                    {rp.category} • {rp.readTime}
                  </span>
                  <h4 className="font-serif text-base text-[#1C1B1A] group-hover:underline">
                    {rp.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
