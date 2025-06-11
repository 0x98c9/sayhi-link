import React, { useRef, useState } from 'react'; // Added useState
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import { useLinkHistory } from '../hooks/useLinkHistory'; // Added
import { LinkHistoryItem } from '../types'; // Added
import MainLayout from '../layouts/MainLayout';
import PhoneInput from '../components/PhoneInput';
import MessageInput from '../components/MessageInput';
import OutputDisplay from '../components/OutputDisplay';
import LinkHistory from '../components/LinkHistory'; // Added
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import UseCases from '../components/sections/UseCases';
import HowItWorks from '../components/sections/HowItWorks';
import Footer from '../components/sections/Footer';

const HomePage: React.FC = () => {
  const toolRef = useRef<HTMLDivElement>(null);
  const toolRef = useRef<HTMLDivElement>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null); // For copy feedback

  const {
    countryCode,
    phoneNumber,
    message,
    link,
    isValidPhone,
    messageCharacterCount,
    messageWordCount, // Added
    handleCountryCodeChange,
    handlePhoneNumberChange,
    handleMessageChange,
  } = useWhatsAppLink();

  const {
    history,
    addHistoryItem,
    removeHistoryItem,
    clearHistory,
  } = useLinkHistory();

  const scrollToTool = () => {
    toolRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRepopulate = (item: LinkHistoryItem) => {
    handleCountryCodeChange(item.countryCode);
    handlePhoneNumberChange(item.phoneNumber);
    handleMessageChange(item.message);
    setToastMessage("Form repopulated from history!");
    setTimeout(() => setToastMessage(null), 3000);
    // Scroll to tool to see the repopulated form
    toolRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSaveToHistory = (
    data: Omit<LinkHistoryItem, 'id' | 'createdAt' | 'shortenedLink'> & {shortenedLink?: string}
  ) => {
    addHistoryItem(data);
    setToastMessage("Link saved to history!");
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopyHistoryLink = async (linkToCopy: string, type: 'original' | 'shortened') => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setToastMessage(`${type === 'original' ? 'Original' : 'Shortened'} link copied to clipboard!`);
    } catch (err) {
      setToastMessage(`Failed to copy ${type} link.`);
    }
    setTimeout(() => setToastMessage(null), 3000);
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
                  wordCount={messageWordCount} // Added
                />
              </form>
            </div>

            <OutputDisplay 
              link={link} 
              message={message} 
              isValidLink={isValidPhone && link !== ''}
              countryCode={countryCode} // Pass countryCode
              phoneNumber={phoneNumber} // Pass phoneNumber
              onSaveToHistory={handleSaveToHistory} // Pass handler
            />

            <LinkHistory
              history={history}
              onRepopulate={handleRepopulate}
              onDelete={removeHistoryItem}
              onClearAll={clearHistory}
              onCopyLink={handleCopyHistoryLink}
            />
          </div>
        </div>

        {toastMessage && (
          <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-md shadow-lg transition-opacity duration-300">
            {toastMessage}
          </div>
        )}

        <Features />
        <UseCases />
        <HowItWorks onTryNowClick={scrollToTool} />
        <Footer />
      </div>
    </MainLayout>
  );
};

export default HomePage;