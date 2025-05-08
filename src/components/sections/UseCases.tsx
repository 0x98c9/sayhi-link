import React from 'react';
import { Store, Calendar, Briefcase, Users, Headphones } from 'lucide-react';

const useCases = [
  {
    icon: Store,
    title: 'Small Businesses',
    description: 'Enable customers to reach you instantly through WhatsApp for inquiries and support.',
  },
  {
    icon: Calendar,
    title: 'Event Planners',
    description: 'Share event details and coordinate with attendees efficiently via WhatsApp.',
  },
  {
    icon: Briefcase,
    title: 'Freelancers & Consultants',
    description: 'Streamline client communications and booking inquiries through WhatsApp.',
  },
  {
    icon: Users,
    title: 'Influencers & Creators',
    description: 'Connect with your audience directly and share exclusive content links.',
  },
  {
    icon: Headphones,
    title: 'Support Teams',
    description: 'Provide instant customer support through WhatsApp with pre-filled messages.',
  },
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-500 dark:text-green-400 font-semibold tracking-wide uppercase">
            Use Cases
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Who can benefit?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Discover how different professionals use SayHi Link to improve their communication.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-green-500 dark:text-green-400 mb-4">
                  <useCase.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;