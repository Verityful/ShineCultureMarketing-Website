import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
               <div className="w-12 h-12 bg-white rounded-full p-1 flex items-center justify-center">
                  {/* White circular background for logo visibility */}
                  <img
                    src="Shine Culture Logo PNG.png"
                    alt="Shine Culture Logo"
                    className="w-full h-full object-contain"
                  />
               </div>
              <span className="text-xl font-bold font-display">
                SHINE<span className="text-shine-yellow">CULTURE</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              We help ambitious businesses scale operations through intelligent AI automation and infrastructure management.
            </p>
            <p className="text-gray-500 text-sm">
              Contact: <a href="mailto:info@shineculturemarketing.com" className="text-shine-yellow hover:underline">info@shineculturemarketing.com</a>
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500">
              <li onClick={() => onNavigate('home', 'services')} className="hover:text-shine-yellow cursor-pointer transition-colors">AI Workflows</li>
              <li onClick={() => onNavigate('home', 'services')} className="hover:text-shine-yellow cursor-pointer transition-colors">Chatbots</li>
              <li onClick={() => onNavigate('home', 'services')} className="hover:text-shine-yellow cursor-pointer transition-colors">Data Analytics</li>
              <li onClick={() => onNavigate('home', 'services')} className="hover:text-shine-yellow cursor-pointer transition-colors">Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li onClick={() => onNavigate('home', 'about')} className="hover:text-shine-yellow cursor-pointer transition-colors">About Us</li>
              <li onClick={() => onNavigate('case-studies')} className="hover:text-shine-yellow cursor-pointer transition-colors">Case Studies</li>
              <li onClick={() => onNavigate('blog')} className="hover:text-shine-yellow cursor-pointer transition-colors">Blog</li>
              <li onClick={() => onNavigate('privacy')} className="hover:text-shine-yellow cursor-pointer transition-colors">Privacy Policy</li>
              <li onClick={() => onNavigate('terms')} className="hover:text-shine-yellow cursor-pointer transition-colors">Terms of Service</li>
              <li onClick={() => onNavigate('home', 'funnel')} className="hover:text-shine-yellow cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Shine Culture Marketing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/people/Shine-Culture-Marketing/61579895460899/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Visit our Facebook page">
                <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/ShineCultureMarketing" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Visit our Instagram page">
                <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;