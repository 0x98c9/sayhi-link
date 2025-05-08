import React, { ReactNode, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/sections/Navbar';
import logoImage from '../assets/images/sayhi-link-logo.png';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-md' 
          : 'bg-white dark:bg-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="SayHi Link Logo" 
              className="w-6 h-6"
            />

            <Link to="/" className="ml-2 text-xl font-bold text-gray-900 dark:text-white">SayHi Link</Link>

          </div>
          <Navbar />
        </div>
      </header>
      
      {/* Add padding to prevent content from being hidden under the fixed header */}
      <div className="pt-14"></div>
      
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;