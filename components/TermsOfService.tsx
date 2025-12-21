import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ViewState } from '../types';

interface TermsOfServiceProps {
  onNavigate: (view: ViewState) => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-shine-dark text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-12">Last Updated: December 21, 2025</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to Shine Culture Marketing ("Company", "we", "our", or "us"). By accessing or using our website,
              services, or products, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to
              these Terms, please do not use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              These Terms apply to all visitors, users, and others who access or use our services. We reserve the right
              to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of
              the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Shine Culture Marketing provides AI automation solutions, digital marketing services, chatbot development,
              workflow automation, and consulting services ("Services"). The specific scope, deliverables, timeline, and
              pricing for Services will be outlined in separate service agreements or proposals.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without
              prior notice. We are not liable for any modification, suspension, or discontinuation of Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">By using our Services, you agree to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide accurate, current, and complete information during registration and use</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
              <li>Not use our Services for any unlawful or prohibited purposes</li>
              <li>Not interfere with or disrupt the integrity or performance of our Services</li>
              <li>Not attempt to gain unauthorized access to our systems or networks</li>
              <li>Comply with all applicable local, state, national, and international laws and regulations</li>
              <li>Not transmit any viruses, malware, or malicious code</li>
              <li>Not engage in any activity that could harm our reputation or business operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Payment terms will be specified in individual service agreements or invoices. Unless otherwise stated:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Payment is due within 30 days of invoice date unless otherwise specified</li>
              <li>All fees are non-refundable unless explicitly stated in a service agreement</li>
              <li>Late payments may incur interest charges of 1.5% per month or the maximum allowed by law</li>
              <li>We reserve the right to suspend Services for non-payment</li>
              <li>All prices are in USD unless otherwise specified</li>
              <li>Taxes, if applicable, will be added to all invoices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All content, features, and functionality of our Services, including but not limited to text, graphics,
              logos, images, software, and code, are owned by Shine Culture Marketing or our licensors and are protected
              by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Upon full payment for custom work, you will receive the agreed-upon rights to deliverables as specified
              in your service agreement. Unless otherwise stated, we retain the right to use generic methodologies,
              processes, and knowledge gained from projects in future work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any
              of our proprietary materials without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We respect the confidentiality of your business information. Any confidential information shared during
              the course of our engagement will be protected and not disclosed to third parties, except as required by
              law or as necessary to perform the Services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Similarly, you agree to keep confidential any proprietary information, methodologies, or trade secrets
              disclosed by Shine Culture Marketing during the course of service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Warranties and Disclaimers</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We strive to provide high-quality Services but make no warranties or representations about the accuracy,
              reliability, or completeness of our Services. OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties regarding uninterrupted, timely, or error-free operation</li>
              <li>Warranties regarding the results that may be obtained from use of our Services</li>
              <li>Warranties regarding the accuracy or reliability of information obtained through our Services</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We do not guarantee specific results or outcomes from our Services. Success depends on various factors,
              including but not limited to your business model, market conditions, and implementation of our recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHINE CULTURE MARKETING SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
              INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our total liability for any claims arising out of or relating to these Terms or our Services shall not
              exceed the amount paid by you to us for Services in the 12 months preceding the claim, or $500, whichever
              is greater.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above
              limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Shine Culture Marketing, its officers, directors,
              employees, agents, and affiliates from any claims, liabilities, damages, losses, costs, or expenses
              (including reasonable attorneys' fees) arising out of or related to your use of our Services, violation
              of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Either party may terminate a service agreement according to the terms specified in that agreement. We
              reserve the right to suspend or terminate your access to our Services immediately, without prior notice,
              for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Breach of these Terms</li>
              <li>Non-payment of fees</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>At our sole discretion for any business reason</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Upon termination, your right to use our Services will immediately cease. Provisions that by their nature
              should survive termination shall survive, including but not limited to ownership provisions, warranty
              disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our Services may integrate with or link to third-party services, applications, or websites. We are not
              responsible for the content, functionality, or practices of any third-party services. Your use of
              third-party services is governed by their respective terms and conditions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Any dealings between you and third parties, including payment for and delivery of goods or services,
              are solely between you and the third party. We are not liable for any loss or damage incurred as a
              result of such dealings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Dispute Resolution</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Any disputes arising out of or relating to these Terms or our Services shall first be addressed through
              good faith negotiations between the parties. If the dispute cannot be resolved through negotiation within
              30 days, either party may pursue binding arbitration.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Arbitration shall be conducted by a single arbitrator in accordance with the rules of the American
              Arbitration Association. The arbitration shall take place in the jurisdiction where Shine Culture
              Marketing is headquartered. Each party shall bear their own costs and expenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States and the
              state in which Shine Culture Marketing is headquartered, without regard to its conflict of law provisions.
              You agree to submit to the personal and exclusive jurisdiction of the courts located within that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material changes by
              posting the updated Terms on our website with a new "Last Updated" date. Your continued use of our
              Services after changes become effective constitutes acceptance of the modified Terms. We encourage you
              to review these Terms periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Severability</h2>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining
              provisions shall continue in full force and effect. The invalid provision shall be modified to the
              minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Entire Agreement</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms, together with any service agreements or additional terms provided for specific Services,
              constitute the entire agreement between you and Shine Culture Marketing regarding the use of our Services
              and supersede all prior agreements and understandings, whether written or oral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-shine-gray border border-white/10 rounded-xl p-6">
              <p className="text-white font-semibold mb-2">Shine Culture Marketing</p>
              <p className="text-gray-300">Email: <a href="mailto:info@shineculturemarketing.com" className="text-shine-yellow hover:underline">info@shineculturemarketing.com</a></p>
            </div>
          </section>

          <div className="border-t border-white/10 pt-8 mt-12">
            <p className="text-gray-500 text-sm">
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these
              Terms of Service.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
