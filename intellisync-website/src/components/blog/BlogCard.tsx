import { motion } from 'framer-motion';
import { BlogPost } from '../../types/blog';
import { format } from 'date-fns';
import { ReactionButton, CommentSection, ShareButton } from '../social';

interface BlogCardProps {
  post: BlogPost;
  onView: (post: BlogPost) => void;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onView, index }) => {
  const delay = index * 0.1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      onClick={() => onView(post)}
      aria-label={`Read more: ${post.title}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.coverImageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent1 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs font-medium text-accent1 bg-accent1/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">

          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
              <img 
                src={post.author.avatarUrl} 
                alt={post.author.name}
                className="w-8 h-8 object-cover"
              />
            </span>
            <span>{post.author.name}</span>
          </div>
          <div className="text-right">
            <div>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</div>
            <div className="text-xs">{post.readTime} min read</div>
          </div>
        </div>
        <div className="flex items-center justify-around pt-4 mt-4 border-t border-gray-100">
          <ReactionButton postId={post.id} />
          <CommentSection postId={post.id} />
          <ShareButton postUrl={`${window.location.origin}/blog/${post.slug}`} />
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
