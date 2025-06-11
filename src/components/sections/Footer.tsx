import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, MessageSquarePlus } from 'lucide-react'; // Added MessageSquarePlus

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start max-w-xs mx-auto md:mx-0">
            <h3 className="font-bold text-green-600 dark:text-green-600 uppercase tracking-wider">SayHi Link</h3>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                Private, instant WhatsApp Link Generator — 100% in your browser.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Social</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://x.com/0x98c9"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/0x98c9/sayhi-link"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/0x98c9/sayhi-link/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white inline-flex items-center"
                >
                  <MessageSquarePlus size={20} className="mr-2" /> {/* Adjusted icon size and margin */}
                  Suggest a Feature
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-base text-gray-400">
            Made with ❤️ for fast WhatsApp sharing
          </p>
          <p className="mt-4 sm:mt-0 text-base text-gray-400">
            Built with privacy in mind. All processing happens locally in your browser.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;