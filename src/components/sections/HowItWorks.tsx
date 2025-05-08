import React from 'react';
import { Keyboard, Link, Share2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    name: 'Enter details',
    description: 'Input the phone number and compose your message',
    icon: Keyboard,
  },
  {
    id: 2,
    name: 'Generate link',
    description: 'Preview and customize your WhatsApp link',
    icon: Link,
  },
  {
    id: 3,
    name: 'Share instantly',
    description: 'Copy, test, or share the link with anyone',
    icon: Share2,
  },
];

interface HowItWorksProps {
  onTryNowClick: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onTryNowClick }) => {
  return (
    <section id="how-it-works" className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-500 dark:text-green-400 font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Three simple steps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Create and share your WhatsApp links in seconds with our easy-to-use tool.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8">
            {steps.map((step) => (
              <div key={step.name} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-400">
                    <step.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg leading-6 font-medium text-gray-900 dark:text-white text-center">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onTryNowClick}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              Try it now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;