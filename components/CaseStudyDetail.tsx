import React, { useEffect, useState } from 'react';
import { CaseStudy, ViewState } from '../types';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface CaseStudyDetailProps {
  study: CaseStudy;
  onBack: () => void;
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ study, onBack, onNavigate }) => {
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

      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-shine-yellow transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </button>

        <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-shine-yellow/10 text-shine-yellow text-sm font-bold rounded-full border border-shine-yellow/20">
                    {tag}
                </span>
                ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 leading-tight text-white">
                {study.title}
            </h1>
            <p className="text-xl text-gray-400">Client: <span className="text-white font-semibold">{study.client}</span></p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="col-span-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 bg-shine-gray rounded-3xl border border-white/10 p-8 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-shine-yellow rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Key Result</p>
                <p className="text-5xl font-bold text-white mb-2">{study.metric}</p>
                <p className="text-gray-300 font-medium">{study.metricLabel}</p>
            </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6 whitespace-pre-line text-lg">
            {study.fullStory}
          </div>
          
          <div className="mt-16 border-t border-white/10 pt-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Want results like {study.client}?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                We can implement this exact infrastructure for your business in less than 14 days.
            </p>
            <button 
                onClick={() => onNavigate('home', 'funnel')}
                className="px-10 py-4 bg-shine-yellow text-black font-bold text-lg rounded-xl hover:bg-shine-gold transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
                Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;