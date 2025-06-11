import React, { useState, useRef, useEffect } from 'react'; // Added useRef, useEffect
import { Template } from '../types';
import EmojiPicker from './EmojiPicker';
import TemplateSelector from './TemplateSelector';
import { defaultTemplates } from '../utils/linkUtils';
import { Smile, FileText } from 'lucide-react';

interface MessageInputProps {
  message: string;
  onMessageChange: (value: string) => void;
  characterCount: number;
  wordCount: number; // Added
}

const MessageInput: React.FC<MessageInputProps> = ({
  message,
  onMessageChange,
  characterCount,
  wordCount, // Added
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null); // Added
  const [lastInsertedPlaceholderLength, setLastInsertedPlaceholderLength] = useState(0); // Added
  const [cursorPosition, setCursorPosition] = useState<number | null>(null); // Added

  const placeholders = [
    { label: 'Date', value: '[Date]' },
    { label: 'Time', value: '[Time]' },
    { label: 'Your Name', value: '[Your Name]' },
    { label: 'Company', value: '[Company Name]' }
  ];

  const handleInsertEmoji = (emoji: string) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const newText = text.substring(0, start) + emoji + text.substring(end);
      onMessageChange(newText);
      setCursorPosition(start + emoji.length);
    } else {
      onMessageChange(message + emoji); // Fallback
    }
  };

  const handleSelectTemplate = (template: Template) => {
    onMessageChange(template.content);
    setShowTemplates(false);
    setCursorPosition(template.content.length);
  };

  const handleInsertPlaceholder = (placeholderValue: string) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const newText = text.substring(0, start) + placeholderValue + text.substring(end);
      onMessageChange(newText);
      setLastInsertedPlaceholderLength(placeholderValue.length); // Store length
      setCursorPosition(start + placeholderValue.length); // Store desired cursor position
    } else {
       // Fallback if ref is not available (should not happen)
      onMessageChange(message + ' ' + placeholderValue);
    }
  };

  useEffect(() => {
    if (cursorPosition !== null && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(cursorPosition, cursorPosition);
      setCursorPosition(null); // Reset after setting
    }
  }, [cursorPosition, message]); // Rerun if message changes (e.g. from template)


  return (
    <div className="mb-6 relative">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Message
        </label>
        <span className={`text-xs ${characterCount > 1000 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
          {wordCount} words / {characterCount}/1000
        </span>
      </div>
      
      <div className="relative shadow-sm rounded-md">
        <textarea
          id="message"
          ref={textareaRef} // Added ref
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          placeholder="Type your message here..."
          rows={4}
          maxLength={1000}
          className="w-full rounded-md py-2 px-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 resize-y"
        />
      </div>
      
      <div className="flex flex-wrap mt-3 gap-2"> {/* Added flex-wrap */}
        <button
          type="button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="inline-flex items-center text-sm py-1.5 px-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
        >
          <Smile className="w-4 h-4 mr-2" />
          Emoji
        </button>
        
        <button
          type="button"
          onClick={() => setShowTemplates(!showTemplates)}
          className="inline-flex items-center text-sm py-1.5 px-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
        >
          <FileText className="w-4 h-4 mr-2" />
          Templates
        </button>
      </div>

      <div className="mt-2">
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">Insert placeholder:</p>
        <div className="flex flex-wrap gap-1">
          {placeholders.map(p => (
            <button
              key={p.value}
              type="button"
              onClick={() => handleInsertPlaceholder(p.value)}
              className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
      
      {showEmojiPicker && (
        <div className="absolute z-10 mt-1 w-full md:w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
          <EmojiPicker onEmojiSelect={handleInsertEmoji} onClose={() => setShowEmojiPicker(false)} />
        </div>
      )}
      
      {showTemplates && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
          <TemplateSelector 
            templates={defaultTemplates} 
            onSelectTemplate={handleSelectTemplate} 
            onClose={() => setShowTemplates(false)} 
          />
        </div>
      )}
    </div>
  );
};

export default MessageInput;