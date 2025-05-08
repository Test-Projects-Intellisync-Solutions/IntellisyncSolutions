import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';
import { X, Trash2 } from 'lucide-react';

// // import { Send } from 'lucide-react';
  
interface ChatInputProps {
  onSend: (userPrompt: string, eventContext?: string) => void;
  loading?: boolean;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export const ChatInput: React.FC<ChatInputProps & { eventContext?: string }> = ({ onSend, loading, eventContext }) => {
  const [userPrompt, setUserPrompt] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (userPrompt.trim()) {
      onSend(userPrompt, eventContext);
      setUserPrompt('');
    }
  };

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  return (
    <div className="w-full flex flex-col gap-2 bg-white/70 dark:bg-black/60 p-4 rounded-t-xl shadow-lg">
      <div className="flex items-end gap-2">
        <Textarea
          ref={inputRef}
          value={userPrompt}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setUserPrompt(e.target.value)}
          rows={2}
          placeholder="Type your message..."
          className="flex-1 resize-none bg-background/90 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-300"
          disabled={loading}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <Button
          onClick={handleSend}
          disabled={loading || !userPrompt.trim()}
          variant="default"
          size="icon"
          className="rounded-full"
        >
          <img src="/assets/images/Chat%20Icon.png" alt="Chat Icon" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

interface ChatModelResponseProps {
  response: string;
  visible: boolean;
  loading?: boolean;
}

export const ChatModelResponse: React.FC<ChatModelResponseProps> = ({ response, visible, loading }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'w-full p-4 rounded-xl shadow-2xl border border-border',
            'bg-background/95 dark:bg-zinc-900/95 text-black dark:text-white',
            'backdrop-blur-lg',
            loading ? 'animate-pulse' : ''
          )}
          style={{ minHeight: 56 }}
        >
          <div className="whitespace-pre-line break-words text-base min-h-[1.5em]">
            {response}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * Props for StickyChat.
 * @param eventContext - (optional) Dynamic event context (e.g., current page or section) to provide extra context for the AI.
 */
interface StickyChatProps {
  /**
   * Function to call when the user sends a message.
   * @param userPrompt The user's message.
   * @param eventContext The dynamic event context.
   */
  onSend: (userPrompt: string, eventContext?: string) => Promise<string>;
  /**
   * Optional dynamic event context.
   */
  eventContext?: string;
}

export const StickyChat: React.FC<StickyChatProps> = ({ onSend, eventContext }) => {
  // Load messages from sessionStorage (if available) on mount
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('stickychat-messages');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  // Save messages to sessionStorage on every change
  useEffect(() => {
    sessionStorage.setItem('stickychat-messages', JSON.stringify(messages));
  }, [messages]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [userBlurred, setUserBlurred] = useState(false);

  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    // Auto-focus input unless user intentionally blurred
    if (!userBlurred && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, open, userBlurred]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input, timestamp: Date.now() };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const aiContent = await onSend(input, eventContext);
      setMessages((msgs) => [
        ...msgs,
        { role: 'assistant', content: aiContent, timestamp: Date.now() },
      ]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { role: 'assistant', content: 'Error getting response', timestamp: Date.now() },
      ]);
    } finally {
      setLoading(false);
      // Only refocus if user hasn't intentionally blurred
      if (!userBlurred && inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <>
      {/* Floating bubble button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-white border border-blue-100 shadow-2xl rounded-full w-14 h-14 flex items-center justify-center hover:scale-105 focus:outline-none"
            onClick={() => setOpen(true)}
            aria-label="Open chat"
          >
            <img src="/assets/images/Chat%20Icon.png" alt="Chat Icon" className="w-12 h-12" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md rounded-3xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-border flex flex-col"
            style={{ height: 480, maxHeight: '80vh' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-t-3xl">
              <div className="flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                  <img src="/assets/images/Chat%20Icon.png" alt="Chat Icon" className="w-8 h-8" />
                </span>
                <span className="font-semibold text-lg text-black dark:text-white">Intellisync</span>
              </div>
              <div className="flex items-center gap-1">
                <Button size="icon" variant="ghost" onClick={() => setMessages([])} aria-label="Clear chat history" title="Clear chat history">
                  <Trash2 className="w-5 h-5 text-accent1" />
                </Button>
                <Button size="icon" variant="ghost" onClick={() => setOpen(false)} aria-label="Close chat">
                  <X className="w-5 h-5 text-accent1" />
                </Button>
              </div>
            </div>

            {/* System prompt toggle (temporarily commented out)
            <div className="flex items-center justify-between px-4 pt-2 pb-1">
              <span className="text-xs text-gray-500">AI Persona Prompt</span>
              <Button size="icon" variant="ghost" onClick={() => setShowSystemPrompt((v) => !v)}>
                {showSystemPrompt ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>
            */}

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 custom-scrollbar">
              {messages.length === 0 && !loading && (
                <div className="text-center text-gray-400 text-sm mt-8">
                  Start a conversation with Intellisync!
                </div>
              )}
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[80%] whitespace-pre-line break-words text-base shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-blue-500 text-white rounded-br-md'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white rounded-bl-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white animate-pulse shadow-sm rounded-bl-md max-w-[80%]">
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <form
              className="p-4 border-t border-border bg-white/70 dark:bg-zinc-900/70 rounded-b-3xl flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <Textarea
                ref={inputRef}
                value={input}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
                rows={1}
                placeholder="Type your message..."
                className="flex-1 resize-none text-black dark:text-white bg-background/90 placeholder:text-gray-400 dark:placeholder:text-gray-300"
                disabled={loading}
                onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                onBlur={() => setUserBlurred(true)}
                onFocus={() => setUserBlurred(false)}
              />
              <Button
                type="submit"
                disabled={loading || !input.trim()}
                variant="default"
                size="icon"
                className="rounded-full"
              >
                <img src="/assets/images/Chat%20Icon.png" alt="Chat Icon" className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
