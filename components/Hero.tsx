import React from 'react';
import Mascot from './Mascot';
import { ArrowRight, Zap } from 'lucide-react';
import { sendWebhookEvent } from '../utils/webhook';

const Hero: React.FC = () => {
  const scrollToFunnel = () => {
    sendWebhookEvent('cta_clicked', 'hero_start_automating', {
      buttonText: 'Start Automating'
    });
    document.getElementById('funnel')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    sendWebhookEvent('cta_clicked', 'hero_how_it_works', {
      buttonText: 'How It Works'
    });
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-shine-yellow/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10 mt-8 md:mt-0">
          
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
            Deploy Smarter, <br />
            <span className="shine-text">Scale Faster.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            We handle the heavy lifting of AI infrastructure and business operations so you can focus on growth. No coding required—just results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToFunnel}
              className="group px-8 py-4 bg-shine-yellow text-black font-bold text-lg rounded-xl hover:bg-shine-gold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transform hover:-translate-y-1"
            >
              Start Automating
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-white/5 text-white font-semibold text-lg rounded-xl hover:bg-white/10 border border-white/10 transition-all duration-300"
            >
              How It Works
            </button>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/40?random=${i}`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-shine-dark"
                />
              ))}
            </div>
            <p>Trusted by 200+ innovative founders</p>
          </div>
        </div>

        {/* Visual/Mascot */}
        <div className="flex justify-center lg:justify-end relative">
            <Mascot />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;