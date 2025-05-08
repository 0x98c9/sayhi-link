import React, { useState } from 'react';
import { Template } from '../types';
import EmojiPicker from './EmojiPicker';
import TemplateSelector from './TemplateSelector';
import { defaultTemplates } from '../utils/linkUtils';
import { Smile, FileText } from 'lucide-react';

interface MessageInputProps {
  message: string;
  onMessageChange: (value: string) => void;
  characterCount: number;
}

const MessageInput: React.FC<MessageInputProps> = ({
  message,
  onMessageChange,
  characterCount,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  const handleInsertEmoji = (emoji: string) => {
    onMessageChange(message + emoji);
  };

  const handleSelectTemplate = (template: Template) => {
    onMessageChange(template.content);
    setShowTemplates(false);
  };

  return (
    <div className="mb-6 relative">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Message
        </label>
        <span className={`text-xs ${characterCount > 1000 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
          {characterCount}/1000
        </span>
      </div>
      
      <div className="relative shadow-sm rounded-md">
        <textarea
          id="message"
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          placeholder="Type your message here..."
          rows={4}
          maxLength={1000}
          className="w-full rounded-md py-2 px-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 resize-y"
        />
      </div>
      
      <div className="flex mt-3 gap-2">
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