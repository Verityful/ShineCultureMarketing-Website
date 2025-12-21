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
      {/* Glow Effect behind the moon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-shine-yellow/20 rounded-full blur-[60px] -z-10 animate-pulse"></div>

      {/* Interactive Image Container with Double Animation: Float + Tilt */}
      <div className="w-full h-full animate-float">
        <div 
          className="w-full h-full relative z-10 transition-transform duration-100 ease-out"
          style={{ 
            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Using shine_kid_logo.png as the graphic mascot */}
          <img 
            src="shine_kid_logo.png" 
            alt="Shine Kid Mascot on Moon"
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(255,215,0,0.3)]"
          />

          {/* Floating Particle Elements for Magic Vibe */}
          <div className="absolute top-0 right-10 w-3 h-3 bg-white rounded-full animate-bounce delay-75 shadow-[0_0_15px_white]" style={{ transform: 'translateZ(50px)' }}></div>
          <div className="absolute bottom-12 left-4 w-4 h-4 bg-shine-yellow rounded-full animate-pulse shadow-[0_0_15px_#FFD700]" style={{ transform: 'translateZ(30px)' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Mascot;