import React from 'react';
import { ServiceCardProps } from '../types';
import { Bot, BarChart3, Mail, Workflow, BrainCircuit, Globe } from 'lucide-react';

const services: ServiceCardProps[] = [
  {
    title: "AI Workflows",
    description: "Custom-built automation chains that handle repetitive tasks without human intervention.",
    icon: <Workflow className="w-8 h-8" />
  },
  {
    title: "Smart Chatbots",
    description: "24/7 customer support agents that learn from your business data and convert leads.",
    icon: <Bot className="w-8 h-8" />
  },
  {
    title: "Data Analytics",
    description: "Deep insights into your funnel performance with predictive AI modeling.",
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    title: "Content Engines",
    description: "Automated content generation and scheduling for all your social platforms.",
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: "Email Outreach",
    description: "Cold outreach campaigns that personalize themselves for every prospect.",
    icon: <Mail className="w-8 h-8" />
  },
  {
    title: "Strategy Consulting",
    description: "We don't just build tools; we design the architecture for your scaling phase.",
    icon: <BrainCircuit className="w-8 h-8" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-shine-yellow font-semibold tracking-wider uppercase text-sm">Management & Control</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-6">
            Comprehensive <br />AI Infrastructure
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From initial setup to daily management, we provide the full stack of automation services your business needs to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-shine-gray border border-white/5 hover:border-shine-yellow/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,215,0,0.1)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-shine-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;