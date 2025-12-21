import React, { useState } from 'react';
import { FormStep, FormData } from '../types';
import { ArrowRight, CheckCircle, Loader2, ArrowLeft } from 'lucide-react';

const LeadFunnel: React.FC = () => {
  const [step, setStep] = useState<FormStep>(FormStep.BUSINESS_TYPE);
  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    followerCount: '',
    bottleneck: '',
    fullName: '',
    businessName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const nextStep = () => {
    if (step === FormStep.BUSINESS_TYPE && !formData.businessType) {
      setError("Please select a business type.");
      return;
    }
    
    // Validate Details Step
    if (step === FormStep.DETAILS) {
       if (formData.businessType === 'Content Creator' && !formData.followerCount) {
         setError("Please enter your approximate follower count.");
         return;
       }
       if (!formData.businessName) {
         setError("Please enter your business/brand name.");
         return;
       }
    }

    if (step === FormStep.BOTTLENECK && !formData.bottleneck) {
      setError("Please describe your bottleneck.");
      return;
    }

    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setError("Please fill in all contact details.");
      return;
    }

    setIsSubmitting(true);

    // Send data to webhook
    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

      if (webhookUrl) {
        console.log('Sending to webhook:', webhookUrl);
        console.log('Payload:', formData);

        const payload = {
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'lead_funnel_form'
        };

        // Send to n8n webhook with no-cors mode to bypass CORS restrictions
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        console.log('Webhook request sent successfully to n8n');
        console.log('Payload sent:', payload);

        // Note: With no-cors mode, we can't verify the response, but the data is sent
        // Check your n8n workflow executions to verify receipt
      } else {
        console.error('VITE_WEBHOOK_URL not configured!');
        throw new Error('Webhook URL not configured');
      }

      setStep(FormStep.SUCCESS);
    } catch (err) {
      console.error('Webhook error:', err);
      setError("Something went wrong. Please try again or contact support.");
      return; // Don't proceed to success if there's an error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="funnel" className="py-24 bg-gradient-to-b from-shine-dark to-black relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-shine-yellow/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-shine-gray border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Progress Bar */}
          {step !== FormStep.SUCCESS && (
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
              <div 
                className="h-full bg-shine-yellow transition-all duration-500" 
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          )}

          <div className="max-w-xl mx-auto text-center">
            
            {/* Step 1: Business Type */}
            {step === FormStep.BUSINESS_TYPE && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold font-display mb-6">What type of business are you running?</h3>
                <p className="text-gray-400 mb-8">We tailor our AI solutions to your specific industry needs.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['E-commerce', 'SaaS', 'Agency', 'Local Business', 'Content Creator', 'Other'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setFormData({ ...formData, businessType: type });
                        setError(null);
                      }}
                      className={`p-4 rounded-xl border transition-all duration-200 text-left font-medium ${
                        formData.businessType === type 
                          ? 'bg-shine-yellow text-black border-shine-yellow shadow-[0_0_15px_rgba(255,215,0,0.3)]' 
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
                <button
                  onClick={nextStep}
                  className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Business Details */}
            {step === FormStep.DETAILS && (
              <div className="animate-fadeIn">
                 <h3 className="text-3xl font-bold font-display mb-6">Tell us a bit more.</h3>
                 <p className="text-gray-400 mb-8">Help us understand your scale.</p>

                 <div className="space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Business / Brand Name</label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className="w-full bg-black/30 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-shine-yellow focus:ring-1 focus:ring-shine-yellow"
                          placeholder="My Awesome Brand"
                        />
                    </div>

                    {formData.businessType === 'Content Creator' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Current Follower Count (Approx.)</label>
                            <input
                              type="text"
                              name="followerCount"
                              value={formData.followerCount}
                              onChange={handleInputChange}
                              className="w-full bg-black/30 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-shine-yellow focus:ring-1 focus:ring-shine-yellow"
                              placeholder="e.g. 10k, 500k, 1M"
                            />
                        </div>
                    )}
                 </div>

                 {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
                 
                 <div className="flex gap-4 justify-center mt-8">
                  <button
                    onClick={() => setStep(prev => prev - 1)}
                    className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                  >
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Bottleneck */}
            {step === FormStep.BOTTLENECK && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold font-display mb-6">What is your biggest bottleneck?</h3>
                <p className="text-gray-400 mb-8">Tell us what's slowing you down so we can speed you up.</p>
                <textarea
                  name="bottleneck"
                  value={formData.bottleneck}
                  onChange={handleInputChange}
                  placeholder="e.g., Spending too much time on lead qualification, customer support is overwhelmed..."
                  className="w-full bg-black/30 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-shine-yellow focus:ring-1 focus:ring-shine-yellow min-h-[150px]"
                ></textarea>
                 {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
                <div className="flex gap-4 justify-center mt-8">
                  <button
                    onClick={() => setStep(prev => prev - 1)}
                    className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                  >
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Contact Info */}
            {step === FormStep.CONTACT && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold font-display mb-6">Last step! Where should we send the audit?</h3>
                <p className="text-gray-400 mb-8">Enter your details to receive your personalized AI bottleneck analysis.</p>
                
                <div className="space-y-4 text-left">
                   <div>
                       <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full bg-black/30 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-shine-yellow focus:ring-1 focus:ring-shine-yellow"
                        />
                   </div>
                   <div>
                       <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          className="w-full bg-black/30 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-shine-yellow focus:ring-1 focus:ring-shine-yellow"
                        />
                   </div>
                   <div>
                       <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-black/30 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-shine-yellow focus:ring-1 focus:ring-shine-yellow"
                        />
                   </div>
                </div>

                {error && <p className="text-red-400 my-4 text-sm">{error}</p>}

                <div className="flex gap-4 justify-center mt-8">
                   <button
                    onClick={() => setStep(prev => prev - 1)}
                    className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-shine-yellow text-black font-bold rounded-lg hover:bg-shine-gold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Get My Free Audit'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Success */}
            {step === FormStep.SUCCESS && (
              <div className="animate-fadeIn py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold font-display mb-4">You're all set!</h3>
                <p className="text-gray-400 mb-8">
                  We've received your details. Our AI agents are analyzing your bottleneck right now. Check your inbox in 5 minutes!
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="text-shine-yellow hover:underline underline-offset-4"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFunnel;