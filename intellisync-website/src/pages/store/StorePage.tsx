import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { 
  Search, 
  Package, 
  Star, 
  Palette, 
  Image as ImageIcon, 
  Share2, 
  BarChart3, 
  Wallet, 
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import SEO from '../../components/SEO';

// App data
// Type for app data
type AppType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  rating: number;
  icon: string;
  featured: boolean;
  appUrl: string;
  longDescription?: string;
  features?: string[];
  screenshot?: string;
  screenshots?: Array<{
    id: number;
    imageUrl: string;
    altText?: string;
    description?: string;
  }>;
};

const APPS: AppType[] = [
  {
    id: 1,
    name: 'CanvasAI',
    slug: 'canvas-ai',
    description: 'An AI art generation app that uses user context through conversation to recommend images. Over 30 artist personas available. Access directly from any web browser.',
    longDescription: 'CanvasAI revolutionizes digital art creation by combining AI with intuitive conversation-based controls. Create stunning artwork by simply describing your vision, and let our AI handle the rest. With over 30 unique artist personas, you can explore different artistic styles and techniques with ease. Perfect for both professional artists and beginners looking to bring their creative visions to life.',
    category: 'Creative',
    rating: 4.9,
    icon: 'palette',
    featured: true,
    appUrl: 'https://canvasai.example.com',
    features: [
      '30+ artist personas to choose from',
      'Conversation-based art generation',
      'High-resolution exports',
      'Style transfer capabilities',
      'Real-time collaboration tools'
    ],
    screenshot: '/screenshots/canvas-ai.jpg'
  },
  {
    id: 2,
    name: 'RE-Draw',
    slug: 're-draw',
    description: 'An image art app that allows users to draw images on a digital canvas and uses AI to "Re-Draw" the users image in any of 80+ different art styles. Works instantly in your browser with no installation needed.',
    longDescription: 'Transform your sketches and drawings into professional artwork with RE-Draw\'s powerful AI. Choose from over 80 unique art styles to instantly transform your creations. Whether you\'re a professional artist or just doodling for fun, RE-Draw helps you explore new artistic possibilities with just a few clicks.',
    category: 'Creative',
    rating: 4.8,
    icon: 'image',
    featured: false,
    appUrl: 'https://redraw.example.com',
    features: [
      '80+ art styles',
      'Real-time style preview',
      'No installation required',
      'High-resolution exports',
      'Layer support'
    ]
  },
  {
    id: 3,
    name: 'SocialGen',
    slug: 'socialgen',
    description: 'A social media content generator supporting all platforms. Generate specific content for your businesses brand voice with customized prompt tuning and AI image generation. Access 24/7 from any device.',
    longDescription: 'SocialGen is your all-in-one social media content creation platform. Generate engaging posts, captions, and hashtags tailored to your brand voice. Our AI analyzes your audience and suggests content that drives engagement. With built-in image generation and scheduling tools, managing your social media presence has never been easier.',
    category: 'Marketing',
    rating: 4.7,
    icon: 'share2',
    featured: false,
    appUrl: 'https://socialgen.example.com',
    features: [
      'Multi-platform support',
      'Brand voice customization',
      'AI image generation',
      'Content calendar',
      'Performance analytics'
    ]
  },
  {
    id: 4,
    name: 'BusinessOne',
    slug: 'business-one',
    description: 'AI-driven Business Financial engine for Canadian SMEs. From ratio analysis to recommendation strategies, understand your business financials in a more natural, human way. Access your financial insights from anywhere, anytime.',
    longDescription: 'BusinessOne empowers Canadian SMEs with AI-powered financial insights. Our platform transforms complex financial data into easy-to-understand recommendations. Track cash flow, analyze financial ratios, and make data-driven decisions with confidence. Designed specifically for Canadian businesses, we help you navigate tax regulations and financial planning with ease.',
    category: 'Business',
    rating: 4.9,
    icon: 'barchart',
    featured: true,
    appUrl: 'https://businessone.example.com',
    features: [
      'Canadian tax compliance',
      'Financial ratio analysis',
      'Cash flow forecasting',
      'Custom reporting',
      'Bank integration'
    ]
  },
  {
    id: 5,
    name: 'PersonalOne',
    slug: 'personal-one',
    description: 'A Canadian-first financial platform supporting household finances with our AI personal finance engine. Budgeting, cashflow, saving goals, and investing made simple with AI insights.',
    longDescription: 'Take control of your personal finances with PersonalOne\'s intuitive platform. Our AI analyzes your spending patterns, helps you set and achieve financial goals, and provides personalized recommendations to improve your financial health. Designed specifically for Canadians, we help you navigate the complexities of personal finance with confidence.',
    category: 'Finance',
    rating: 4.8,
    icon: 'wallet',
    featured: false,
    appUrl: 'https://personalone.example.com',
    features: [
      'Expense tracking',
      'Budget planning',
      'Investment tracking',
      'Bill reminders',
      'Credit score monitoring'
    ]
  },
  {
    id: 6,
    name: 'EducationOne',
    slug: 'education-one',
    description: 'A suite of education tutors for student learners from grades 4 & up. Interactive AI tutors that adapt to individual learning needs with progress monitoring for students, parents, and teachers. No installation required - learn from any device with internet access.',
    longDescription: 'EducationOne revolutionizes learning with AI-powered tutors that adapt to each student\'s unique learning style. Our comprehensive platform covers core subjects from grade 4 through university level. Track progress in real-time, receive personalized study recommendations, and access a vast library of educational resources - all in one place.',
    category: 'Education',
    rating: 4.9,
    icon: 'book',
    featured: false,
    appUrl: 'https://educationone.example.com',
    features: [
      'Adaptive learning paths',
      'Progress tracking',
      'Interactive exercises',
      'Parent/teacher portal',
      'Multi-subject support'
    ]
  },
  {
    id: 7,
    name: 'LawyerOne',
    slug: 'lawyer-one',
    description: 'AI-powered legal research and document analysis tool for legal professionals. Quickly analyze case law, generate legal documents, and get case insights. Access comprehensive legal resources from any web browser.',
    longDescription: 'LawyerOne is the ultimate legal research assistant for modern legal professionals. Our AI-powered platform helps you analyze case law, draft legal documents, and stay updated with the latest legal precedents. Save hours of research time and focus on what matters most - building strong cases for your clients.',
    category: 'Legal',
    rating: 4.8,
    icon: 'scale',
    featured: true,
    appUrl: 'https://lawyerone.example.com',
    features: [
      'Case law analysis',
      'Document automation',
      'Legal research',
      'Precedent tracking',
      'Collaboration tools'
    ]
  }
];

// Export the app type and data
export type { AppType };
export { APPS };

// Get all categories
const CATEGORIES = ['All', ...new Set(APPS.map(app => app.category))];

// Get small icon component by name
const getSmallIcon = (iconName: string) => {
  switch (iconName) {
    case 'palette':
      return <Palette className="w-8 h-8 text-accent1" />;
    case 'image':
      return <ImageIcon className="w-8 h-8 text-accent1" />;
    case 'share2':
      return <Share2 className="w-8 h-8 text-accent1" />;
    case 'barchart':
      return <BarChart3 className="w-8 h-8 text-accent1" />;
    case 'wallet':
      return <Wallet className="w-8 h-8 text-accent1" />;
    case 'book':
      return <BookOpen className="w-8 h-8 text-accent1" />;
    default:
      return <Package className="w-8 h-8 text-accent1" />;
  }
};

const StorePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  // Get all featured apps
  const featuredApps = APPS.filter((app: { featured: boolean }) => app.featured);
  
  // Calculate total slides needed (each slide shows up to 3 apps)
  const totalSlides = Math.ceil(featuredApps.length / 3);
  
  // Get non-featured apps for the main grid
  const nonFeaturedApps = APPS.filter((app: { featured: boolean }) => !app.featured);
  
  // Get featured apps for the current slide (up to 3 per slide)
  const getCurrentSlideApps = () => {
    return featuredApps.slice(currentSlide * 3, (currentSlide * 3) + 3);
  };
  
  // Get apps for current slide (used in the carousel)
  const currentSlideApps = getCurrentSlideApps();
  
  // Handle navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
      <SEO
        title="Intellisync Store | Discover AI Applications"
        description="Browse and download powerful AI applications to enhance your workflow and productivity."
        canonicalUrl="/store"
      />
      <Header />
      
      <main className="w-full py-20 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-6 drop-shadow-lg"
            >
              Intellisync Store
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-accent1 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              Discover and install powerful applications to enhance your workflow
            </motion.p>
          </motion.div>
          
          {/* Search and filter section */}
          <motion.div 
            className="mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent1 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search applications..."
                className="w-full pl-12 pr-4 py-6 text-lg bg-black/30 border-accent2/30 focus:border-accent1 focus:ring-accent1/50 text-white placeholder-accent1/50"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-accent1 to-cta hover:from-accent1/90 hover:to-cta/90 border-0">
                Search
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-accent1/10 text-accent1 hover:bg-accent1/20 border border-accent1/20"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Featured Apps Carousel */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white bg-gradient-to-tr from-accent1 via-cta to-white bg-clip-text text-transparent drop-shadow-lg">
                Featured Apps
              </h2>
              {totalSlides > 1 && (
                <div className="flex gap-2">
                  <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-accent1/10 hover:bg-accent1/20 text-accent1 transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-accent1/10 hover:bg-accent1/20 text-accent1 transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
            
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial={false}
                  animate={{
                    x: `-${currentSlide * 100}%`,
                    transition: { type: 'spring', stiffness: 300, damping: 30 }
                  }}
                >
                  {currentSlideApps.map((app, index) => (
                    <motion.div
                      key={app.id}
                      className="bg-black/30 rounded-2xl p-4 sm:p-6 shadow-lg backdrop-blur-md border border-accent2/30 hover:border-accent1/50 transition-all duration-300 h-full transform hover:-translate-y-1 hover:shadow-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-accent1/10 rounded-lg p-3 flex-shrink-0">
                          {getSmallIcon(app.icon)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{app.name}</h3>
                          <div className="flex items-center gap-1 text-yellow-400 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-white">{app.rating}</span>
                            <span className="text-accent1">(Web App)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-accent1 mb-4 text-sm">{app.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-accent1/20 text-accent1 text-xs font-medium rounded-full">
                          {app.category}
                        </span>
                        <a 
                          href={app.appUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="opacity-70 hover:opacity-100 transition-opacity duration-200 border-accent2/50 bg-black/20 hover:bg-accent1/10 hover:border-accent1 text-white/90 hover:text-white"
                          >
                            Open App
                          </Button>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Slide indicators */}
              {totalSlides > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-accent1 w-6' : 'bg-accent1/30'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
          
          {/* App Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent drop-shadow-lg">
              All Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonFeaturedApps.map((app) => (
                <motion.div
                  key={app.id}
                  className="bg-black/30 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-accent2/30 hover:border-accent1/50 transition-colors"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent1/10 rounded-lg p-3 flex-shrink-0">
                      {getSmallIcon(app.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{app.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-400 text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white">{app.rating}</span>
                        <span className="text-accent1">(Web App)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-accent1 mb-4 text-sm">{app.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-accent1/20 text-accent1 text-xs font-medium rounded-full">
                      {app.category}
                    </span>
                    <Link to={`/apps/${app.slug}`} className="block">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full opacity-70 hover:opacity-100 transition-opacity duration-200 border-accent2/50 bg-black/20 hover:bg-accent1/10 hover:border-accent1 text-white/90 hover:text-white"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
              
              {/* Coming Soon Card - Only show if we have less than 3 apps */}
              {APPS.length < 3 && (
                <motion.div
                  className="bg-black/10 border-2 border-dashed border-accent2/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Package className="w-12 h-12 text-accent1 mb-4 opacity-50" />
                  <h3 className="text-xl font-bold text-white mb-2">More Apps Coming Soon</h3>
                  <p className="text-accent1 max-w-xs">
                    We're constantly adding new applications to enhance your experience
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StorePage;
