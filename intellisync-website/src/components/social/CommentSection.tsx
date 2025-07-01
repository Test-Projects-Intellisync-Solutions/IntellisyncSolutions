// src/components/social/CommentSection.tsx
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import CommentModal from './CommentModal';
import { getComments, addComment, Comment } from '../../services/socialApi';

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  // We can fetch the initial count separately for performance if needed
  // For now, we'll just update it when comments are fetched.

  const openModalAndFetchComments = async () => {
    setModalOpen(true);
    setIsLoading(true);
    try {
      const fetchedComments = await getComments(postId);
      setComments(fetchedComments);
      setCommentCount(fetchedComments.length);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCommentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openModalAndFetchComments();
  };

  const handleCommentSubmit = async (commentText: string) => {
    try {
      const newComment = await addComment(postId, commentText);
      setComments(prevComments => [...prevComments, newComment]);
      setCommentCount(prevCount => prevCount + 1);
    } catch (error) {
      console.error("Failed to add comment:", error);
      // Optionally, show an error to the user in the modal
    }
  };

  return (
    <>
      <button 
        onClick={handleCommentClick}
        className="flex items-center text-gray-500 hover:text-green-500 transition-colors duration-200"
        aria-label="View comments"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="ml-1.5 text-sm font-medium">{commentCount}</span>
      </button>
      {isModalOpen && (
        <CommentModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          comments={comments}
          onCommentSubmit={handleCommentSubmit}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default CommentSection;