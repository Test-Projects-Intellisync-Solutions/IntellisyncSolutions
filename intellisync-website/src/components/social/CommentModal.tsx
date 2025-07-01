// src/components/social/CommentModal.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

import { Comment } from '../../services/socialApi';

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  comments: Comment[];
  onCommentSubmit: (commentText: string) => Promise<void>;
  isLoading: boolean;
}

const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose, comments, onCommentSubmit, isLoading }) => {
  const [newComment, setNewComment] = useState('');
  const charLimit = 150;

  if (!isOpen) return null;

    const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onCommentSubmit(newComment);
      setNewComment('');
    } catch (error) {
      console.error("Error submitting comment from modal:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>
        <h3 className="text-xl font-bold mb-4">Comments</h3>
                <div className="space-y-4 mb-4 max-h-60 overflow-y-auto min-h-[80px]">
                    {isLoading ? (
            <p className="text-gray-500">Loading comments...</p>
          ) : comments.length > 0 ? (
            comments.map(comment => (
              <div key={comment.id} className="bg-gray-100 p-3 rounded-lg">
                <p className="font-semibold text-sm text-gray-800">{comment.author}</p>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))
          ) : (
                        <p className="text-gray-500">Be the first to comment.</p>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            maxLength={charLimit}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition text-gray-900"
            placeholder="Add a comment..."
            rows={3}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {charLimit - newComment.length} characters remaining
          </div>
                    <button type="submit" className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:bg-blue-300 disabled:cursor-not-allowed" disabled={!newComment.trim() || isSubmitting}>
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;