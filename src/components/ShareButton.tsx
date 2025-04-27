import React from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check this out!',
          text: 'I wanted to share this with you:',
          url: url,
        });
        console.log('Successfully shared');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback if Web Share API is not supported
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="relative">
        <button
          onClick={handleShare}
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Share event"
        >
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default ShareButton;
