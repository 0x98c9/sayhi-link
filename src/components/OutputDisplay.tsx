import React, { useState, useEffect } from 'react';
import { copyToClipboard, shortenUrl } from '../utils/linkUtils';
import QRCodeGenerator from './QRCodeGenerator';

import { LinkHistoryItem } from '../types'; // Added

interface OutputDisplayProps {
  link: string;
  message: string; // Already here, but needed for onSaveToHistory
  isValidLink: boolean;
  countryCode: string; // Added
  phoneNumber: string; // Added
  onSaveToHistory: (data: Omit<LinkHistoryItem, 'id' | 'createdAt' | 'shortenedLink'> & {shortenedLink?: string}) => void; // Added
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({
  link,
  message,
  isValidLink,
  countryCode, // Added
  phoneNumber, // Added
  onSaveToHistory // Added
}) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [shortenedLink, setShortenedLink] = useState<string | null>(null);
  const [isShortening, setIsShortening] = useState(false);
  const [shorteningError, setShorteningError] = useState<string | null>(null);

  // QR Code options state
  const [qrSize, setQrSize] = useState<number>(256);
  const [qrFgColor, setQrFgColor] = useState<string>('#000000');
  const [qrBgColor, setQrBgColor] = useState<string>('#ffffff');

  useEffect(() => {
    setShortenedLink(null);
    setShorteningError(null);
    // Reset QR options when the main link changes
    setQrSize(256);
    setQrFgColor('#000000');
    setQrBgColor('#ffffff');
  }, [link]);

  const handleCopy = async () => {
    if (!isValidLink) return;
    
    const textToCopy = shortenedLink || link;
    const success = await copyToClipboard(textToCopy);
    
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
                    {shortenedLink ? 'Copied Short Link' : 'Copied'}
                  </span>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>

            {shortenedLink && (
              <div className="mt-2 mb-2">
                <label htmlFor="shortenedLink" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Shortened Link:</label>
                <input
                  id="shortenedLink"
                  type="text"
                  value={shortenedLink}
                  readOnly
                  className="mt-1 flex-1 p-2 w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
            )}

            {shorteningError && (
              <p className="text-sm text-red-500 dark:text-red-400 mt-2 mb-2">{shorteningError}</p>
            )}

            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={handleShortenLink}
                disabled={!link || !isValidLink || isShortening}
                className="flex-1 md:flex-none py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white text-center rounded-md transition-colors font-medium disabled:opacity-50"
              >
                {isShortening ? 'Shortening...' : 'Shorten Link'}
              </button>
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
              <button
                onClick={handleSave}
                disabled={!isValidLink || !link}
                className="flex-1 md:flex-none py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white text-center rounded-md transition-colors font-medium disabled:opacity-50"
              >
                Save to History
              </button>
            </div>

            {showQR && (
              <div className="mt-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="qrSize" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      QR Size
                    </label>
                    <select
                      id="qrSize"
                      value={qrSize}
                      onChange={(e) => setQrSize(Number(e.target.value))}
                      className="w-full p-2 text-xs border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value={128}>Small (128px)</option>
                      <option value={256}>Medium (256px)</option>
                      <option value={512}>Large (512px)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="qrFgColor" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      QR Color
                    </label>
                    <input
                      type="color"
                      id="qrFgColor"
                      value={qrFgColor}
                      onChange={(e) => setQrFgColor(e.target.value)}
                      className="w-full h-10 p-1 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer bg-white dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="qrBgColor" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      QR Background
                    </label>
                    <input
                      type="color"
                      id="qrBgColor"
                      value={qrBgColor}
                      onChange={(e) => setQrBgColor(e.target.value)}
                      className="w-full h-10 p-1 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer bg-white dark:bg-gray-700"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <QRCodeGenerator
                    value={link}
                    size={qrSize}
                    fgColor={qrFgColor}
                    bgColor={qrBgColor}
                  />
                </div>
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

  async function handleShortenLink() {
    if (!isValidLink || !link) return;
    setIsShortening(true);
    setShorteningError(null);
    // setShortenedLink(null); // Keep existing shortened link if one was already generated
    try {
      const shortUrl = await shortenUrl(link);
      setShortenedLink(shortUrl);
    } catch (error) {
      if (error instanceof Error) {
        setShorteningError(error.message);
      } else {
        setShorteningError("An unknown error occurred while shortening the link.");
      }
    } finally {
      setIsShortening(false);
    }
  }

  const handleSave = () => {
    if (!isValidLink || !link) return;
    onSaveToHistory({
      countryCode,
      phoneNumber,
      message,
      originalLink: link,
      shortenedLink: shortenedLink ?? undefined,
    });
  };
};

export default OutputDisplay;