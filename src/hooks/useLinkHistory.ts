import { useState, useEffect } from 'react';
import { LinkHistoryItem } from '../types';

const MAX_HISTORY_ITEMS = 15;
const LOCAL_STORAGE_KEY = 'sayhi-link-history';

export const useLinkHistory = () => {
  const [history, setHistory] = useState<LinkHistoryItem[]>([]);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error("Error loading history from localStorage:", error);
      setHistory([]); // Initialize with empty array on error
    }
  }, []);

  const saveHistoryToLocalStorage = (updatedHistory: LinkHistoryItem[]) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
      console.error("Error saving history to localStorage:", error);
    }
  };

  const addHistoryItem = (itemData: Omit<LinkHistoryItem, 'id' | 'createdAt'>) => {
    setHistory(prevHistory => {
      // Prevent adding an exact duplicate of the most recent item
      if (prevHistory.length > 0) {
        const mostRecentItem = prevHistory[0];
        if (
          mostRecentItem.countryCode === itemData.countryCode &&
          mostRecentItem.phoneNumber === itemData.phoneNumber &&
          mostRecentItem.message === itemData.message &&
          mostRecentItem.originalLink === itemData.originalLink &&
          mostRecentItem.shortenedLink === itemData.shortenedLink
        ) {
          return prevHistory;
        }
      }

      const newItem: LinkHistoryItem = {
        ...itemData,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      };
      const updatedHistory = [newItem, ...prevHistory].slice(0, MAX_HISTORY_ITEMS);
      saveHistoryToLocalStorage(updatedHistory);
      return updatedHistory;
    });
  };

  const removeHistoryItem = (id: string) => {
    setHistory(prevHistory => {
      const updatedHistory = prevHistory.filter(item => item.id !== id);
      saveHistoryToLocalStorage(updatedHistory);
      return updatedHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    saveHistoryToLocalStorage([]);
  };

  return {
    history,
    addHistoryItem,
    removeHistoryItem,
    clearHistory,
  };
};
