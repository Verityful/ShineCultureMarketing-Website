import React, { useEffect, useState } from 'react';

const Mascot: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse for interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position (-1 to 1) relative to window center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intensify the tilt slightly for more "graphic" feel
  const tiltX = mousePosition.y * 15; 
  const tiltY = mousePosition.x * -15; 

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96">
      {/* Enhanced Glow Effect behind the mascot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-shine-yellow/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-shine-gold/20 rounded-full blur-[40px] -z-10 animate-[pulse_3s_ease-in-out_infinite]"></div>

      {/* Interactive Image Container with Triple Animation: Float + Tilt + Rotate */}
      <div className="w-full h-full animate-float">
        <div
          className="w-full h-full relative z-10 transition-transform duration-100 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Using shine_kid_logo.png as the animated mascot with enhanced effects */}
          <img
            src="shine_kid_logo.png"
            alt="Shine Kid - Your AI Guide"
            className="w-full h-full object-contain drop-shadow-[0_25px_60px_rgba(255,215,0,0.4)] hover:drop-shadow-[0_30px_70px_rgba(255,215,0,0.6)] transition-all duration-300"
          />

          {/* Enhanced Floating Particle Elements for Magic Vibe */}
          <div className="absolute top-0 right-10 w-3 h-3 bg-white rounded-full animate-bounce delay-75 shadow-[0_0_20px_white]" style={{ transform: 'translateZ(50px)' }}></div>
          <div className="absolute bottom-12 left-4 w-4 h-4 bg-shine-yellow rounded-full animate-pulse shadow-[0_0_20px_#FFD700]" style={{ transform: 'translateZ(30px)' }}></div>
          <div className="absolute top-20 left-8 w-2 h-2 bg-shine-gold rounded-full animate-[bounce_2s_ease-in-out_infinite] shadow-[0_0_15px_#FDB931]" style={{ transform: 'translateZ(40px)' }}></div>
          <div className="absolute bottom-32 right-6 w-3 h-3 bg-white/80 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] shadow-[0_0_15px_white]"></div>
        </div>
      </div>
    </div>
  );
};

export default Mascot;