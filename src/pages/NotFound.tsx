import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Footer from '../components/sections/Footer';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Auto redirect after countdown
    if (countdown <= 0) {
      navigate('/');
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-6xl md:text-9xl font-extrabold text-green-500 dark:text-green-400">404</h1>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Oops! The page you're looking for doesn't exist.
          </p>
          
          <div className="mt-8 flex flex-col items-center">
            <p className="text-gray-600 dark:text-gray-300">
              Redirecting to homepage in <span className="font-bold text-green-500">{countdown}</span> seconds...
            </p>
            
            <Link 
              to="/" 
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
          
          <div className="mt-12 max-w-lg mx-auto">
            <p className="text-gray-500 dark:text-gray-400">
              If you think this is a mistake, please contact us or try again later.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default NotFound;