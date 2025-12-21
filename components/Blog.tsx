import React from 'react';
import { BlogPost } from '../types';

interface BlogProps {
  onRead: (post: BlogPost) => void;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why 2025 is the Year of Autonomous Agencies",
    excerpt: "The landscape of digital marketing is shifting from human-led to AI-driven. Here is what you need to know to stay ahead.",
    content: `The traditional agency model is broken. For decades, clients have paid high retainers for slow turnaround times, human error, and "account management" that adds little value to the bottom line. In 2025, we are witnessing the rise of the Autonomous Agency.

    At Shine Culture, we've replaced the bloated middle management layer with intelligent AI agents. These aren't just chatbots; they are autonomous workers capable of analyzing data, executing campaigns, and optimizing ad spend in real-time, 24/7.
    
    Why does this matter for your business? Speed and Precision. An AI doesn't need to sleep, doesn't take weekends off, and doesn't make calculation errors. When we implemented our autonomous stack for a mid-sized SaaS client, we saw a 300% increase in operational efficiency within the first quarter.
    
    The future isn't about choosing between human creativity and AI efficiency. It's about empowering the former with the latter. By offloading the grunt work to machines, our human strategists are free to do what they do best: innovate.`,
    date: "Dec 12, 2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "5 Tasks You Should Automate Immediately",
    excerpt: "Stop wasting time on data entry and email follow-ups. These 5 workflows will save you 20+ hours a week.",
    content: `If you are a founder or a marketing manager, your time is worth hundreds of dollars an hour. Yet, many of you are spending it on $15/hour tasks. Here are the top 5 bottlenecks we automate for every new Shine Culture client:

    1. Lead Qualification: Stop calling leads who aren't interested. We deploy AI voice and text agents that qualify prospects instantly and only book meetings with those ready to buy.
    
    2. Social Media Scheduling: Posting manually is a relic of the past. Our content engines generate, schedule, and post content across all platforms based on peak engagement times.
    
    3. Data Entry & Reporting: No more copy-pasting from Facebook Ads Manager to Excel. We build live dashboards that pull data from all sources into one view.
    
    4. Email Follow-ups: The money is in the follow-up. Our AI sequences nurture leads for months without you lifting a finger, using personalized context to increase open rates.
    
    5. Customer Onboarding: Make a great first impression. Automatically send contracts, welcome packets, and access credentials the moment a payment is made.
    
    By automating these five areas, our average client saves 20+ hours per week. What could you do with an extra half-week every week?`,
    date: "Dec 08, 2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Truth About AI Chatbots for Local Business",
    excerpt: "Are chatbots impersonal? Not if you build them right. Learn how we increased conversion by 40% for a local gym.",
    content: `There is a misconception that AI chatbots are clunky, impersonal, and frustrating. And to be fair, the old "rule-based" bots of 2020 were. But modern LLM-based agents are different. They understand context, slang, and nuance.

    We recently deployed 'Shine Bot' for a local gym chain, MetroFit. Their problem was simple: they were missing calls during peak hours and losing potential members to competitors who picked up the phone.
    
    Shine Bot was trained on MetroFit's pricing, class schedules, and brand voice (energetic and encouraging). It was integrated into their SMS and Website.
    
    The results were immediate. The bot engaged visitors within 5 seconds, answered questions about amenities, and booked tours directly into the sales team's calendar. 
    
    The outcome? A 40% increase in booked tours and a 15% increase in membership sign-ups in month one. The bot didn't replace the sales team; it filled their calendar with qualified leads, making them more effective than ever.`,
    date: "Dec 01, 2025",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
  }
];

const Blog: React.FC<BlogProps> = ({ onRead }) => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Latest <span className="text-shine-yellow">Insights</span></h1>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Deep dives into AI infrastructure, business automation, and the future of work.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              onClick={() => onRead(post)}
              className="bg-shine-gray border border-white/10 rounded-2xl overflow-hidden hover:border-shine-yellow/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 shadow-lg hover:shadow-shine-yellow/10"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <span className="text-shine-yellow text-sm font-medium mb-3 block">{post.date}</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-shine-yellow transition-colors">{post.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <button className="text-white font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <span className="text-shine-yellow">&rarr;</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;