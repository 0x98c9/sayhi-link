import React, { useState } from 'react';
import { copyToClipboard } from '../utils/linkUtils';
import QRCodeGenerator from './QRCodeGenerator';

interface OutputDisplayProps {
  link: string;
  message: string;
  isValidLink: boolean;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ link, message, isValidLink }) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleCopy = async () => {
    if (!isValidLink) return;
    
    const success = await copyToClipboard(link);
    
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleQRCode = () => {
    setShowQR(!showQR);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6 transition-all duration-300">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Generated Link
      </h2>
      
      {isValidLink ? (
        <>
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={link}
                readOnly
                className="flex-1 p-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-gray-800 dark:text-gray-200 text-sm"
              />
              
              <button
                onClick={handleCopy}
                className={`p-2 rounded-md transition-colors ${
                  copied 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300'
                }`}
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied
                  </span>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none py-2 px-4 bg-green-500 hover:bg-green-600 text-white text-center rounded-md transition-colors font-medium"
              >
                Open in WhatsApp
              </a>
              
              <button
                onClick={toggleQRCode}
                className="flex-1 md:flex-none py-2 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-center rounded-md transition-colors font-medium"
              >
                {showQR ? 'Hide QR Code' : 'Show QR Code'}
              </button>
            </div>

            {showQR && (
              <div className="mt-4 flex justify-center">
                <QRCodeGenerator value={link} size={150} />
              </div>
            )}
          </div>
          
          {message && (
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Message Preview</h3>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                <div className="max-w-[85%] bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <p className="text-gray-800 dark:text-gray-200 text-sm whitespace-pre-wrap">{message}</p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Enter a valid phone number to generate your WhatsApp link
          </p>
        </div>
      )}
    </div>
  );
};

export default OutputDisplay;