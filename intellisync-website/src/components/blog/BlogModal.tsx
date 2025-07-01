import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Clock, User, Share2, Bookmark } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { format } from 'date-fns';
import { useEffect, useState, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
      setIsMounted(true);
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = 'auto';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [post]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl my-8 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col max-h-[calc(100vh-4rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-64 bg-gray-100">
              {post?.coverImageUrl && (
                <img
                  src={post.coverImageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-4 right-4">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-2">{post?.title}</h2>
                <div className="flex items-center text-sm text-white/80">
                  <div className="flex items-center mr-4">
                    <User size={16} className="mr-1" />
                    {post?.author.name}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {post?.readTime} min read • {post && format(new Date(post.publishedAt), 'MMM d, yyyy')}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="prose prose-lg max-w-none text-gray-900 dark:text-gray-100 break-words">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ node, ...props }) => (
                      <p className="mb-6 leading-relaxed" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 className="text-2xl font-bold mt-10 mb-4 text-white" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-xl font-bold mt-8 mb-3 text-white" {...props} />
                    ),
                    code: ({
                      node,
                      inline,
                      className,
                      children,
                      ...props
                    }: {
                      node?: any;
                      inline?: boolean;
                      className?: string;
                      children?: ReactNode;
                      [key: string]: any;
                    }) => {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    img: ({
                      node,
                      ...props
                    }: {
                      node?: any;
                      alt?: string;
                      [key: string]: any;
                    }) => (
                      <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                        <img {...props} className="w-full h-auto" alt={props.alt || ''} />
                      </div>
                    ),
                    blockquote: ({
                      node,
                      children,
                      ...props
                    }: {
                      node?: any;
                      children?: ReactNode;
                      [key: string]: any;
                    }) => (
                      <blockquote
                        className="border-l-4 border-blue-500 bg-gray-50 text-gray-700 italic my-6 p-4 pl-6"
                        {...props}
                      />
                    ),
                  }}
                >
                  {post?.content || ''}
                </ReactMarkdown>
              </div>

              {/* Author Bio */}
              {post?.author && (
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{post.author.name}</h4>
                      <p className="text-gray-600 text-sm">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Why It Matters Section */}
              {post?.whyItMatters && (
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-lg text-blue-800 mb-2">Why This Matters</h3>
                  <p className="text-blue-700">{post.whyItMatters}</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                    <Bookmark size={20} />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                    <Share2 size={20} />
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={onPrevious}
                    disabled={!hasPrevious}
                    className={`p-2 rounded-full ${
                      hasPrevious ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-300'
                    } transition-colors`}
                    aria-label="Previous post"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={onNext}
                    disabled={!hasNext}
                    className={`p-2 rounded-full ${
                      hasNext ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-300'
                    } transition-colors`}
                    aria-label="Next post"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BlogModal;
