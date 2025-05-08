import React, { useRef } from 'react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import MainLayout from '../layouts/MainLayout';
import PhoneInput from '../components/PhoneInput';
import MessageInput from '../components/MessageInput';
import OutputDisplay from '../components/OutputDisplay';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import UseCases from '../components/sections/UseCases';
import HowItWorks from '../components/sections/HowItWorks';
import Footer from '../components/sections/Footer';

const HomePage: React.FC = () => {
  const toolRef = useRef<HTMLDivElement>(null);
  const {
    countryCode,
    phoneNumber,
    message,
    link,
    isValidPhone,
    messageCharacterCount,
    handleCountryCodeChange,
    handlePhoneNumberChange,
    handleMessageChange,
  } = useWhatsAppLink();

  const scrollToTool = () => {
    toolRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen">
        <Hero onGetStartedClick={scrollToTool} />
        
        <div ref={toolRef} className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-all duration-300">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Create WhatsApp Link</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generate a link that opens WhatsApp with your message ready to send
                </p>
              </div>

              <form>
                <PhoneInput
                  phoneNumber={phoneNumber}
                  countryCode={countryCode}
                  onPhoneNumberChange={handlePhoneNumberChange}
                  onCountryCodeChange={handleCountryCodeChange}
                />
                
                <MessageInput
                  message={message}
                  onMessageChange={handleMessageChange}
                  characterCount={messageCharacterCount}
                />
              </form>
            </div>

            <OutputDisplay 
              link={link} 
              message={message} 
              isValidLink={isValidPhone && link !== ''}
            />
          </div>
        </div>

        <Features />
        <UseCases />
        <HowItWorks onTryNowClick={scrollToTool} />
        <Footer />
      </div>
    </MainLayout>
  );
};

export default HomePage;