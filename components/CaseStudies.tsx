import React from 'react';
import { ArrowUpRight, BarChart, Clock, DollarSign } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  onRead?: (study: CaseStudy) => void;
}

const cases: CaseStudy[] = [
  {
    title: "E-Commerce Revenue Multiplier",
    client: "UrbanThreads",
    metric: "+240%",
    metricLabel: "Lead Conversion",
    description: "We implemented a custom AI chatbot and automated email sequence that nurtured abandoned carts instantly.",
    fullStory: `UrbanThreads, a rising streetwear brand, was facing a common e-commerce nightmare: high traffic but low conversion. They were spending thousands on ads, but 70% of visitors were abandoning their carts.
    
    The Problem:
    The client relied on generic email flows that landed in spam folders. Customer support was slow, taking 24 hours to respond to simple sizing questions, by which time the customer had lost interest.

    The Shine Culture Solution:
    1. **Omnichannel AI Chatbot**: We deployed a custom-trained bot capable of answering specific questions about fabric, sizing, and shipping in real-time.
    2. **Instant SMS Recovery**: We set up an AI trigger that sent a personalized SMS offering a 5% discount or help within 5 minutes of cart abandonment.
    3. **Hyper-Personalized Email**: Instead of generic newsletters, we used AI to write dynamic emails referencing the exact items left behind.

    The Results:
    Within 60 days, UrbanThreads saw their cart recovery rate jump from 8% to 27%. The chatbot handled 85% of inquiries without human intervention, and overall lead conversion skyrocketed by 240%.`,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    tags: ["Chatbots", "Email Ops", "E-comm"]
  },
  {
    title: "Agency Operations Autopilot",
    client: "CreativePulse",
    metric: "30hrs",
    metricLabel: "Saved Per Week",
    description: "By automating client onboarding and reporting, the team reclaimed 75% of their admin time to focus on design.",
    fullStory: `CreativePulse is a boutique design agency known for stunning visuals. However, their internal operations were a mess. The founder was spending 20 hours a week sending invoices, chasing contracts, and manually creating performance reports.

    The Problem:
    Creativity was suffering because the team was bogged down in admin work. Client onboarding took 3 days of back-and-forth emails.

    The Shine Culture Solution:
    1. **One-Click Onboarding**: We built a unified portal where clients sign contracts and pay. This action automatically creates a project in their project management tool, creates a Slack channel, and sends a welcome packet.
    2. **Automated Reporting**: We connected their time-tracking and ad platforms to a live dashboard. Reports are now generated and emailed to clients every Monday morning automatically.
    
    The Results:
    The onboarding process went from 3 days to 10 minutes. The founder saved 30 hours per week, allowing them to take on 3 new retainer clients without hiring extra staff.`,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    tags: ["Workflows", "Admin", "Agency"]
  },
  {
    title: "Local Lead Gen Domination",
    client: "MetroFit Gym",
    metric: "$45k",
    metricLabel: "New MRR Added",
    description: "A hyper-local AI ad campaign coupled with instant SMS booking assistants filled their classes in 3 weeks.",
    fullStory: `MetroFit Gym had a beautiful facility but empty classes. They were running Facebook ads, but leads weren't converting because the front desk staff couldn't call them fast enough.

    The Problem:
    Speed to lead. By the time the gym called a lead back, the prospect had already joined a competitor or lost motivation.

    The Shine Culture Solution:
    1. **AI Voice & SMS Agents**: We implemented a system where every lead form submission triggered an immediate text from an AI agent acting as a fitness consultant.
    2. **Calendar Sync**: The AI engaged the lead, qualified them, and booked a tour directly into the sales manager's calendar.
    3. **Review Automation**: After a tour, the system automatically followed up to ask for a Google Review.

    The Results:
    MetroFit added $45k in new Monthly Recurring Revenue (MRR) in just 3 months. The classes are now waitlisted, and they are looking to open a second location.`,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    tags: ["Ads", "SMS Bot", "Local Biz"]
  }
];

const CaseStudies: React.FC<CaseStudiesProps> = ({ onRead }) => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-shine-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-shine-yellow font-semibold tracking-wider uppercase text-sm">Real Results</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display mt-2 mb-6">Case <span className="text-shine-yellow">Studies</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See how we engineer growth for businesses just like yours. Click on a story to read the full breakdown.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((study, idx) => (
            <div 
              key={idx} 
              onClick={() => onRead && onRead(study)}
              className="bg-shine-gray border border-white/10 rounded-3xl overflow-hidden hover:border-shine-yellow/30 transition-all duration-300 flex flex-col md:flex-row group cursor-pointer hover:shadow-2xl hover:shadow-shine-yellow/5"
            >
              <div className="md:w-1/2 relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[300px]"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-xs font-bold text-gray-300 rounded-full border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-display mb-2 group-hover:text-shine-yellow transition-colors">{study.title}</h3>
                <p className="text-shine-yellow font-medium mb-6">Client: {study.client}</p>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">{study.metric}</p>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">{study.metricLabel}</p>
                  </div>
                  <div className="flex items-center justify-end">
                     <button className="w-12 h-12 rounded-full bg-shine-yellow flex items-center justify-center group-hover:bg-white transition-colors">
                        <ArrowUpRight className="w-6 h-6 text-black" />
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;