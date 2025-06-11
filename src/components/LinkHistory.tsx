import React from 'react';
import { LinkHistoryItem } from '../types';

interface LinkHistoryProps {
  history: LinkHistoryItem[];
  onRepopulate: (item: LinkHistoryItem) => void;
  onDelete: (id: string) => void;
  onClearAll: () => void;
  onCopyLink: (link: string, type: 'original' | 'shortened')
 => void;
}

const LinkHistory: React.FC<LinkHistoryProps> = ({
  history,
  onRepopulate,
  onDelete,
  onClearAll,
  onCopyLink,
}) => {
  if (history.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">No history yet. Saved links will appear here.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Link History
        </h2>
        <button
          onClick={onClearAll}
          className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
        >
          Clear All History
        </button>
      </div>
      <ul className="space-y-4">
        {history.map((item) => (
          <li key={item.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  +{item.countryCode} {item.phoneNumber}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 truncate max-w-xs sm:max-w-sm md:max-w-md">
                  Message: {item.message || '(No message)'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Created: {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => onDelete(item.id)}
                className="mt-2 sm:mt-0 sm:ml-2 p-1.5 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 rounded-md hover:bg-red-100 dark:hover:bg-red-600 transition-colors"
                aria-label="Delete item"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="mt-3 space-y-2 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-2">
              <button
                onClick={() => onRepopulate(item)}
                className="w-full sm:w-auto flex-1 sm:flex-none py-1.5 px-3 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
              >
                Use Details
              </button>
              <button
                onClick={() => onCopyLink(item.originalLink, 'original')}
                className="w-full sm:w-auto flex-1 sm:flex-none py-1.5 px-3 text-xs bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 rounded-md transition-colors"
              >
                Copy Original Link
              </button>
              {item.shortenedLink && (
                <button
                  onClick={() => onCopyLink(item.shortenedLink!, 'shortened')}
                  className="w-full sm:w-auto flex-1 sm:flex-none py-1.5 px-3 text-xs bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors"
                >
                  Copy Short Link
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkHistory;
