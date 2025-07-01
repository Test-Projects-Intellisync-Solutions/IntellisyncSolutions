import React, { useState, useEffect } from 'react';
import EmojiPicker from './EmojiPicker';
import { Heart } from 'lucide-react';
import { getReactions, addReaction, Reaction } from '../../services/socialApi';

interface ReactionButtonProps {
  postId: string;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({ postId }) => {
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [userReaction, setUserReaction] = useState<string | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const leaveTimeout = React.useRef<number | null>(null);

  useEffect(() => {
    const fetchReactions = async () => {
      setIsLoading(true);
      try {
        const data = await getReactions(postId);
        setReactions(data.reactions);
        setUserReaction(data.userReaction);
      } catch (error) {
        console.error("Failed to fetch reactions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReactions();
  }, [postId]);

  const handleMouseEnter = () => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    if (!isLoading) {
      setShowPicker(true);
    }
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = window.setTimeout(() => {
      setShowPicker(false);
    }, 300);
  };

  const handleEmojiSelect = async (emoji: string) => {
    setShowPicker(false);
    setIsLoading(true);
    try {
      const data = await addReaction(postId, emoji);
      setReactions(data.reactions);
      setUserReaction(data.userReaction);
    } catch (error) {
      console.error("Failed to add reaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const totalReactions = reactions.reduce((sum, reaction) => sum + reaction.count, 0);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-200 disabled:opacity-50"
        aria-label="React to post"
        disabled={isLoading}
      >
        {userReaction ? (
          <span className="text-2xl">{userReaction}</span>
        ) : (
          <Heart className="w-6 h-6" />
        )}
        <span className="ml-1.5 text-sm font-medium">{totalReactions}</span>
      </button>
      {showPicker && 
        <div className="absolute bottom-full mb-2">
          <EmojiPicker onSelect={handleEmojiSelect} />
        </div>
      }
    </div>
  );
};

export default ReactionButton;
