import React from 'react';
import { TestimonialProps } from '../types';
import { Star } from 'lucide-react';

const testimonials: TestimonialProps[] = [
  {
    name: "Sarah Jenkins",
    role: "CEO",
    company: "TechFlow",
    content: "Shine Culture totally revamped our lead gen. The AI bots handle everything now.",
    avatar: "https://picsum.photos/100?random=1"
  },
  {
    name: "Marcus Chen",
    role: "Founder",
    company: "DataSphere",
    content: "We saved 20+ hours a week on manual data entry. The 'Done-for-you' promise is real.",
    avatar: "https://picsum.photos/100?random=2"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "BrightSide",
    content: "Our engagement rates tripled within the first month. The automation is seamless.",
    avatar: "https://picsum.photos/100?random=3"
  },
  {
    name: "David Smith",
    role: "Operations Lead",
    company: "LogiCorp",
    content: "I was skeptical about AI, but the Shine Kid team made it approachable and effective.",
    avatar: "https://picsum.photos/100?random=4"
  }
];

const SocialProof: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-shine-gray/50 relative overflow-hidden">
      {/* Floating Mascot in Background */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10 animate-float pointer-events-none hidden lg:block">
        <img src="shine_culture_logo.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          Trusted by <span className="text-shine-yellow">Market Leaders</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join hundreds of fast-growing companies that have automated their success with Shine Culture.
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-shine-dark via-shine-dark/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-shine-dark via-shine-dark/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-[scroll_40s_linear_infinite] w-max gap-8 px-8">
          {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx} 
              className="w-[350px] bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-shine-yellow fill-shine-yellow" />)}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role} at {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;