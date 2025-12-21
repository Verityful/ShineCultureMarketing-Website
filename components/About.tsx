import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-shine-gray/20 -z-10 skew-x-12"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-shine-yellow font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-6">
              More Than Just <br /> Automation.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Shine Culture Marketing was born from a simple belief: Creatives and Founders should focus on their vision, not their operations.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We bridge the gap between human creativity and machine efficiency. Our "Done-for-you" approach means you get the benefits of a full-scale technical team without the management overhead.
            </p>
            
            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-shine-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Precision Engineering</h4>
                  <p className="text-gray-500 text-sm">Every bot and workflow is custom-coded for your specific needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-shine-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Human-Centric Design</h4>
                  <p className="text-gray-500 text-sm">We build AI that feels natural and enhances your customer experience.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
             <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                {/* Realistic Team Photo */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Shine Culture Team Collaborating"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                {/* Text overlay removed as requested */}
             </div>
             {/* Decorative box with mascot */}
             <div className="absolute -bottom-8 -left-8 bg-shine-yellow p-6 rounded-2xl hidden md:block shadow-[0_10px_30px_rgba(255,215,0,0.2)]">
                 <p className="text-black font-bold text-3xl font-display">100%</p>
                 <p className="text-black font-medium text-sm">Done-For-You</p>
             </div>
             {/* Floating Mascot Badge */}
             <div className="absolute -top-6 -right-6 w-24 h-24 animate-float hidden md:block">
               <img
                 src="shine_culture_logo.png"
                 alt="Shine Culture Marketing"
                 className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(255,215,0,0.5)]"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;