import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface BlogViewProps {
  posts: BlogPost[];
  onSelectPost: (slug: string) => void;
  onNavigateToContact: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  posts,
  onSelectPost,
  onNavigateToContact
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cost Guides', 'Commercial Kitchens', 'Hospitality Design', 'Sustainability'];

  const filteredPosts = posts.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1B1A]/5 text-[#8C827A] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#B39266]" />
            Practical Operator Journal
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B1A] tracking-tight mb-5">
            Hospitality & Commercial Design Insights
          </h1>

          <p className="text-base sm:text-xl text-[#1C1B1A]/80 leading-relaxed font-light">
            Actionable advice for venue owners, restaurateurs, and investors. From realistic UK fit-out costings and DW/172 kitchen ventilation to lighting schemes that increase spend per head.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-12 border-b border-[#1C1B1A]/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1C1B1A] text-[#FAF8F5] font-semibold'
                  : 'bg-white text-[#1C1B1A]/70 hover:text-[#1C1B1A] border border-[#1C1B1A]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post.slug)}
              className="bg-white border border-[#1C1B1A]/10 shadow-xs overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-[#B39266] transition-all"
            >
              <div>
                <div className="relative aspect-16/10 max-h-[220px] overflow-hidden bg-[#1C1B1A]/5">
                  <OptimizedImage
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    maxWidth={800}
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1B1A]/90 text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 pointer-events-none">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-[#8C827A] font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#B39266]" />
                      {post.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B39266]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C1B1A] group-hover:text-[#B39266] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1C1B1A]/75 line-clamp-3 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#1C1B1A]/10 mt-4 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#1C1B1A] group-hover:text-[#B39266] flex items-center gap-1">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] uppercase font-mono text-[#8C827A]">
                  By {post.author.name}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Free Toolkit Lead Magnet Banner */}
        <div className="p-8 sm:p-12 bg-[#24211E] text-white flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#B39266]">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold block">
              Free Operator Download
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Hospitality Start-Up & Refurbishment Toolkit
            </h3>
            <p className="text-xs sm:text-sm text-[#DCD7D0]">
              Get our comprehensive space matrix, commercial kitchen equipment guide, and 12-week pre-opening critical path.
            </p>
          </div>

          <button
            onClick={onNavigateToContact}
            className="shrink-0 px-8 py-3.5 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
          >
            Get Free Toolkit
          </button>
        </div>
      </div>
    </div>
  );
};
