import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowTooltip(true);
      
      // Hide tooltip after 2 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };
  
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="relative">
        <button
          onClick={handleCopyLink}
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Share event"
        >
          <Share2 size={20} />
        </button>
        
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap animate-fade-in">
            Link copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareButton;