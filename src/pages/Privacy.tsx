import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Footer from '../components/sections/Footer';

const Privacy: React.FC = () => {
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
          
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300">
                At SayHi Link, we take your privacy seriously. This Privacy Policy explains how we handle your information when you use our WhatsApp Link Generator service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2. Information We Don't Collect</h2>
              <p className="text-gray-700 dark:text-gray-300">
                SayHi Link is designed with privacy in mind. We do not collect, store, or transmit:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>Phone numbers you enter</li>
                <li>Messages you compose</li>
                <li>Generated WhatsApp links</li>
                <li>Personal identification information</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                All processing happens locally in your browser. Your data never leaves your device when using our core link generation functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3. How Our Service Works</h2>
              <p className="text-gray-700 dark:text-gray-300">
                SayHi Link operates entirely client-side, meaning:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>When you enter a phone number and message, this information is processed only within your browser</li>
                <li>The WhatsApp link is generated locally using JavaScript</li>
                <li>No data is sent to our servers during the link generation process</li>
                <li>We don't use cookies to track your link generation activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4. Analytics and Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our website may use basic analytics to understand general usage patterns and improve our service. This may include:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>Anonymous usage statistics (page views, time on site)</li>
                <li>Browser and device information</li>
                <li>Referral sources</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                We do not use analytics to track individual users or their link generation activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5. Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300">
                SayHi Link generates links for WhatsApp, which is a third-party service. When you click on a generated link, you will be redirected to WhatsApp, which has its own privacy policy and data collection practices. We recommend reviewing WhatsApp's privacy policy for information on how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">6. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Since we don't collect or store your personal data, there is minimal risk of data breaches affecting your privacy when using our core service. However, we implement standard security measures to protect our website infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">7. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">9. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact us through our GitHub or Instagram profiles linked in the footer of our website.
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

export default Privacy;