import React from 'react';

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
  onClose: () => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onEmojiSelect, onClose }) => {
  // Common emojis grouped by category
  const emojiGroups = [
    {
      category: 'Smileys',
      emojis: ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '🥰', '😗', '😙']
    },
    {
      category: 'Gestures',
      emojis: ['👍', '👎', '👌', '✌️', '🤞', '🤟', '🤙', '🤝', '👏', '🙌', '🤲', '🙏', '🤝', '💪', '👋', '🙋']
    },
    {
      category: 'Objects',
      emojis: ['❤️', '💕', '💯', '✨', '🔥', '🎉', '🎊', '👑', '💰', '📱', '💻', '⌚', '📷', '🎮', '🚗', '✈️']
    },
  ];

  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Emoji Picker</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
        >
          ✕
        </button>
      </div>
      
      <div className="max-h-48 overflow-y-auto">
        {emojiGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-3">
            <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{group.category}</h4>
            <div className="grid grid-cols-8 gap-1">
              {group.emojis.map((emoji, emojiIndex) => (
                <button
                  key={emojiIndex}
                  onClick={() => onEmojiSelect(emoji)}
                  className="h-8 w-8 flex items-center justify-center text-lg hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiPicker;