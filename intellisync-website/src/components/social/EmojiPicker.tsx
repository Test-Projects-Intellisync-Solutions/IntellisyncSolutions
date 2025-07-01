import React from 'react';

const emojis = ['❤️', '👍', '😂', '😮', '😢', '😡'];

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onSelect }) => {
  return (
    <div className="absolute bottom-full mb-2 flex gap-2 bg-white p-2 rounded-full shadow-lg border border-gray-200 z-10">
      {emojis.map(emoji => (
        <button
          key={emoji}
          onClick={(e) => { e.stopPropagation(); onSelect(emoji); }}
          className="text-2xl hover:scale-125 transition-transform"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiPicker;
