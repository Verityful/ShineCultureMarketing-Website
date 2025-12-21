import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold font-display mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg text-gray-400">
          <p className="mb-6">Last updated: December 2025</p>
          
          <h2 className="text-white text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Shine Culture Marketing. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">2. Data We Collect</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
          </ul>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@shineculturemarketing.com" className="text-shine-yellow hover:underline">info@shineculturemarketing.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;