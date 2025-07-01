import matter from 'gray-matter';
import { BlogPost, BlogAuthor } from '../types/blog';

// This function uses Vite's import.meta.glob to get all markdown files
// This is a build-time operation, so the content is bundled with your app
export async function getPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default' });

  const posts: BlogPost[] = [];
  for (const path in modules) {
    const rawContent = await modules[path]();
    const { data, content } = matter(rawContent as string);
    
    // Extract slug from path: /src/content/blog/my-post.md -> my-post
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    posts.push({
      id: slug, // Use slug as a unique ID
      slug: slug,
      title: data.title,
      publishedAt: data.publishedAt,
      author: data.author as BlogAuthor,
      excerpt: data.excerpt,
      coverImageUrl: data.coverImageUrl,
      tags: data.tags || [],
      readTime: data.readTime,
      content: content,
      whyItMatters: data.whyItMatters,
      seoDescription: data.seoDescription,
    });
  }

  // Sort posts by date in descending order
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}