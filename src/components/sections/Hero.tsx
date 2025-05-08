import React from 'react';
import { MessageSquare, ArrowDown } from 'lucide-react';

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold text-green-500 dark:text-green-400 tracking-wide uppercase">
                SayHi Link
              </span>
              <span className="mt-1 block text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                Create Click-to-Chat Links Instantly
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Connect faster with customers using personalized WhatsApp links. Generate custom chat links in seconds, no sign-up required.
            </p>
            <div className="mt-8 sm:max-w-lg sm:text-center lg:text-left">
              <button
                onClick={onGetStartedClick}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Get Started
                <ArrowDown className="ml-2 -mr-1 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center">
                    <MessageSquare className="h-6 w-6 text-green-500" />
                    <span className="ml-3 text-lg font-medium text-gray-900 dark:text-white">WhatsApp Preview</span>
                  </div>
                  <div className="mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="animate-pulse flex space-x-4">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;