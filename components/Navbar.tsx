import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';
import { sendWebhookEvent } from '../utils/webhook';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: ViewState, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(view, sectionId);
  };

  const handleGetStartedClick = (source: 'desktop' | 'mobile') => {
    sendWebhookEvent('cta_clicked', `navbar_get_started_${source}`, {
      buttonText: 'Get Started'
    });
    handleNavClick('home', 'funnel');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-shine-dark/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => handleNavClick('home')}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-105 bg-white rounded-full p-1 flex items-center justify-center">
            {/* White circular background for logo visibility */}
            <img
              src="Shine Culture Logo PNG.png"
              alt="Shine Culture Marketing"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Text matches brand logo text, kept for consistency and SEO */}
          <span className="hidden md:block text-lg font-bold font-display tracking-tight leading-none">
            SHINE<br/><span className="text-shine-yellow">CULTURE</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick('home', 'services')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
            Services
          </button>
          <button onClick={() => handleNavClick('case-studies')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
            Case Studies
          </button>
          <button onClick={() => handleNavClick('home', 'about')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
            About
          </button>
           <button onClick={() => handleNavClick('blog')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
            Blog
          </button>
          <button
            onClick={() => handleGetStartedClick('desktop')}
            className="px-6 py-2.5 bg-shine-yellow text-black font-bold rounded-full hover:bg-shine-gold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] text-sm"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-shine-gray border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          <button onClick={() => handleNavClick('home', 'services')} className="text-left text-lg text-gray-300 py-2">Services</button>
          <button onClick={() => handleNavClick('case-studies')} className="text-left text-lg text-gray-300 py-2">Case Studies</button>
          <button onClick={() => handleNavClick('home', 'about')} className="text-left text-lg text-gray-300 py-2">About</button>
          <button onClick={() => handleNavClick('blog')} className="text-left text-lg text-gray-300 py-2">Blog</button>
          <button
            onClick={() => handleGetStartedClick('mobile')}
            className="w-full text-center px-6 py-3 bg-shine-yellow text-black font-bold rounded-lg mt-2"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;