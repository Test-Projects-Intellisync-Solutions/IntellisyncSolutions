export interface BlogAuthor {
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readTime: number; // in minutes
  whyItMatters: string;
  seoDescription: string;
  featured?: boolean;
}

export interface BlogPagination {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalItems: number;
}
