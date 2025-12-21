import React, { useState } from 'react';
import { DollarSign, Clock, Zap } from 'lucide-react';

const RoiCalculator: React.FC = () => {
  const [hours, setHours] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);
  
  const weeklySavings = hours * hourlyRate;
  const annualSavings = weeklySavings * 52;
  const growthMultiplier = annualSavings * 3.5; // Estimated ROI multiplier

  return (
    <div className="py-20 bg-gradient-to-r from-shine-gray to-black border-y border-white/5 relative overflow-hidden">
      {/* Background Pulse */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-shine-yellow/5 rounded-full blur-[100px] animate-pulse"></div>

      <div className="container mx-auto px-6">
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Input Section */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-shine-yellow fill-shine-yellow" />
                <span className="font-bold text-shine-yellow uppercase tracking-widest text-sm">ROI Calculator</span>
              </div>
              <h2 className="text-3xl font-bold font-display mb-4">See What You're Losing.</h2>
              <p className="text-gray-400 mb-8">
                Every hour spent on manual tasks is potential revenue lost. Calculate how much Shine Culture can save you.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Hours spent on admin/weekly</label>
                    <span className="text-shine-yellow font-bold">{hours} hrs</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="100" 
                    value={hours} 
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-shine-yellow"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Avg. Hourly Value</label>
                    <span className="text-shine-yellow font-bold">${hourlyRate}/hr</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" max="500" step="10"
                    value={hourlyRate} 
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-shine-yellow"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <DollarSign className="w-32 h-32 text-white" />
               </div>
               
               <div className="grid gap-8 relative z-10">
                 <div>
                   <p className="text-gray-400 text-sm mb-1">Potential Annual Savings</p>
                   <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                     ${annualSavings.toLocaleString()}
                   </p>
                 </div>
                 
                 <div>
                   <p className="text-gray-400 text-sm mb-1">Projected Revenue Growth</p>
                   <div className="flex items-baseline gap-2">
                      <p className="text-4xl md:text-5xl font-bold text-shine-yellow tracking-tight">
                        ${growthMultiplier.toLocaleString()}
                      </p>
                      <span className="text-green-500 font-bold text-sm">↑ 3.5x</span>
                   </div>
                   <p className="text-xs text-gray-500 mt-2">*Based on average client reinvestment into growth activities.</p>
                 </div>

                 <button 
                   onClick={() => document.getElementById('funnel')?.scrollIntoView({behavior: 'smooth'})}
                   className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors mt-2"
                 >
                   Reclaim This Revenue Now
                 </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RoiCalculator;