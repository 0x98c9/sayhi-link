import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Footer from '../components/sections/Footer';

const Terms: React.FC = () => {
  return (
    <MainLayout>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-gray-900 dark:text-white">
          <div className="mb-6 flex items-center">
            <Link 
              to="/" 
              className="text-green-500 hover:text-green-600 flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Terms of Use</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                By accessing or using SayHi Link ("the Service"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2. Description of Service</h2>
              <p className="text-gray-700 dark:text-gray-300">
                SayHi Link is a tool that allows users to generate WhatsApp links with pre-filled messages. The Service processes all data locally in your browser and does not store your phone numbers or messages on any server.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3. User Conduct</h2>
              <p className="text-gray-700 dark:text-gray-300">
                You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Service. This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>Sending spam, unsolicited, or unauthorized messages</li>
                <li>Harassing, threatening, or intimidating others</li>
                <li>Impersonating any person or entity</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4. Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300">
                The Service generates links for WhatsApp, which is a third-party service. Your use of WhatsApp is subject to WhatsApp's own terms of service and privacy policy. We are not affiliated with, endorsed by, or sponsored by WhatsApp Inc.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5. Disclaimer of Warranties</h2>
              <p className="text-gray-700 dark:text-gray-300">
                The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">6. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">7. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify these Terms of Use at any time. We will provide notice of significant changes by updating the date at the top of these terms. Your continued use of the Service after such modifications constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">8. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300">
                These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">9. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms of Use, please contact us through our GitHub or Instagram profiles linked in the footer of our website.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Last updated: May 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </MainLayout>
  );
};

export default Terms;