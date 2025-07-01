// src/services/socialApi.ts

// --- Types ---
export interface Comment {
  id: string;
  postId: string;
  author: string;
  text: string;
  createdAt: string;
}

export interface Reaction {
  emoji: string;
  count: number;
}

export type ReactionsResponse = {
  reactions: Reaction[];
  userReaction: string | null;
};

// --- In-memory database ---
const commentsDb: Record<string, Comment[]> = {};
const reactionsDb: Record<string, { reactions: Record<string, number>; userReactions: Record<string, string> }> = {};

// --- Mock API Delay ---
const apiDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- API Functions ---

// Comments
export const getComments = async (postId: string): Promise<Comment[]> => {
  await apiDelay(500);
  return commentsDb[postId] || [];
};

export const addComment = async (postId: string, text: string): Promise<Comment> => {
  await apiDelay(500);
  if (!commentsDb[postId]) {
    commentsDb[postId] = [];
  }
  const newComment: Comment = {
    id: `comment-${Date.now()}`,
    postId,
    author: 'Anonymous', // Placeholder
    text,
    createdAt: new Date().toISOString(),
  };
  commentsDb[postId].push(newComment);
  return newComment;
};

// Reactions
export const getReactions = async (postId: string): Promise<ReactionsResponse> => {
  await apiDelay(500);
  const postReactions = reactionsDb[postId]?.reactions || {};
  const userReaction = reactionsDb[postId]?.userReactions?.['currentUser'] || null; // 'currentUser' is a placeholder

  const reactions: Reaction[] = Object.entries(postReactions).map(([emoji, count]) => ({
    emoji,
    count,
  }));

  return { reactions, userReaction };
};

export const addReaction = async (postId: string, emoji: string): Promise<ReactionsResponse> => {
  await apiDelay(500);

  if (!reactionsDb[postId]) {
    reactionsDb[postId] = { reactions: {}, userReactions: {} };
  }

  const postReactions = reactionsDb[postId];
  const currentUser = 'currentUser'; // Placeholder for user ID
  const previousReaction = postReactions.userReactions[currentUser];

  // If the user is reacting with the same emoji, it's a toggle off (unlike)
  if (previousReaction === emoji) {
    postReactions.reactions[emoji] -= 1;
    if (postReactions.reactions[emoji] === 0) {
      delete postReactions.reactions[emoji];
    }
    delete postReactions.userReactions[currentUser];
  } else {
    // If the user had a previous reaction, decrement it
    if (previousReaction) {
      postReactions.reactions[previousReaction] -= 1;
      if (postReactions.reactions[previousReaction] === 0) {
        delete postReactions.reactions[previousReaction];
      }
    }
    // Increment the new reaction
    postReactions.reactions[emoji] = (postReactions.reactions[emoji] || 0) + 1;
    postReactions.userReactions[currentUser] = emoji;
  }

  return getReactions(postId);
};
