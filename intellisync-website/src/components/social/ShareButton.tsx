import React from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  postUrl: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ postUrl }) => {
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click event
    const shareUrl = postUrl;
    const shareTitle = document.title;

    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        url: shareUrl,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Blog link copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy link.');
      });
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-200"
      aria-label="Share post"
    >
      <Share2 className="w-5 h-5" />
    </button>
  );
};

export default ShareButton;
