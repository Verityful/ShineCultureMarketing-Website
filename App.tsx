import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import LeadFunnel from './components/LeadFunnel';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Legal from './components/Legal';
import TermsOfService from './components/TermsOfService';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetail from './components/CaseStudyDetail';
import RoiCalculator from './components/RoiCalculator';
import { ViewState, BlogPost, CaseStudy } from './types';

// Schema Markup for Local Business / Agency
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "Shine Culture Marketing",
  "image": "/shine_culture_logo.png",
  "logo": "/shine_culture_logo.png",
  "description": "Done-for-you AI infrastructure and business operations management. We automate workflows, deploy chatbots, and manage your entire AI stack.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Digital",
    "addressCountry": "Global"
  },
  "email": "info@shineculturemarketing.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "url": "https://shineculturemarketing.com",
  "priceRange": "$$$",
  "sameAs": [
    "https://www.facebook.com/people/Shine-Culture-Marketing/61579895460899/",
    "https://instagram.com/ShineCultureMarketing"
  ]
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    // Inject schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const navigateTo = (view: ViewState, sectionId?: string) => {
    setCurrentView(view);
    // Reset selected items if navigating away
    if (view !== 'article') setSelectedPost(null);
    if (view !== 'case-study-detail') setSelectedCaseStudy(null);

    if (view === 'home' && sectionId) {
      // Small delay to ensure DOM render before scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadCaseStudy = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
    setCurrentView('case-study-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-shine-dark text-white selection:bg-shine-yellow selection:text-black overflow-x-hidden">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <RoiCalculator />
            <SocialProof />
            <Services />
            <About />
            <LeadFunnel />
          </>
        )}
        
        {currentView === 'blog' && <Blog onRead={handleReadPost} />}

        {currentView === 'article' && selectedPost && (
          <BlogDetail 
            post={selectedPost} 
            onBack={() => navigateTo('blog')} 
            onNavigate={navigateTo}
          />
        )}
        
        {currentView === 'case-studies' && <CaseStudies onRead={handleReadCaseStudy} />}

        {currentView === 'case-study-detail' && selectedCaseStudy && (
          <CaseStudyDetail
            study={selectedCaseStudy}
            onBack={() => navigateTo('case-studies')}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'privacy' && <Legal />}

        {currentView === 'terms' && <TermsOfService onNavigate={navigateTo} />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;