import React, { useEffect, useState } from 'react';
import { BlogPost, ViewState } from '../types';
import { ArrowLeft } from 'lucide-react';

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBack, onNavigate }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black relative">
       {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-white/10">
        <div 
          className="h-full bg-shine-yellow transition-all duration-100 ease-out" 
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-3xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-shine-yellow transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>

        <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">{post.title}</h1>
        
        <div className="flex items-center gap-4 mb-8 text-sm text-gray-500 border-b border-white/10 pb-8">
          <span>{post.date}</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <img src={post.image} alt={post.title} className="w-full h-auto" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8 font-medium border-l-4 border-shine-yellow pl-4">
            {post.excerpt}
          </p>
          
          <div className="text-gray-400 leading-relaxed space-y-6 whitespace-pre-line">
            {post.content}
          </div>
          
          <div className="mt-12 p-8 bg-shine-gray rounded-xl border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to implement this?</h3>
            <p className="mb-6">Shine Culture builds the infrastructure so you can focus on the vision.</p>
            <button 
                onClick={() => onNavigate('home', 'funnel')}
                className="px-8 py-3 bg-shine-yellow text-black font-bold rounded-lg hover:bg-shine-gold transition-colors"
            >
                Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;