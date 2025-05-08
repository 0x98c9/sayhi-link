import React from 'react';
import { Link2, MessageSquare, Globe, Clipboard, Smartphone, QrCode } from 'lucide-react';

const features = [
  {
    name: 'Instant Link Creation',
    description: 'Generate WhatsApp chat links in seconds with our intuitive interface.',
    icon: Link2,
  },
  {
    name: 'Message Customization',
    description: 'Pre-fill your messages with custom text, emojis, and templates.',
    icon: MessageSquare,
  },
  {
    name: 'Global Number Format',
    description: 'Support for international phone numbers with country code selection.',
    icon: Globe,
  },
  {
    name: 'Copy-to-Clipboard',
    description: 'One-click copying of your generated WhatsApp links.',
    icon: Clipboard,
  },
  {
    name: 'WhatsApp Preview',
    description: 'See how your message will appear before sending.',
    icon: Smartphone,
  },
  {
    name: 'QR Code Export',
    description: 'Generate and download QR codes for easy sharing.',
    icon: QrCode,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-500 dark:text-green-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to connect
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Powerful features to help you create and share WhatsApp links efficiently.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;