import React from 'react';
import { AppType } from '../../pages/store/StorePage';
import { Button } from '../ui/Button';
import { ArrowLeft, ExternalLink, Star, Scale, Book, BarChart2, Wallet, Share2, Palette, ImageIcon, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppDetailProps {
  app: AppType;
}

const AppDetail: React.FC<AppDetailProps> = ({ app }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center mb-8 text-accent1 hover:bg-accent1/10 px-4 py-2 rounded-md transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Store
        </button>
        
        <div className="bg-black/30 rounded-2xl p-8 backdrop-blur-md border border-accent2/30">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-accent1/10 p-4 rounded-xl flex items-center justify-center">
                {getLargeIcon(app.icon, app)}
              </div>
              <div className="space-y-4">
                <a 
                  href={app.appUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-accent1 hover:bg-accent1/90 text-white">
                    Open App <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-accent1">Category</span>
                      <span>{app.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-accent1">Rating</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {app.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{app.name}</h1>
                  <div className="flex items-center text-yellow-400 mb-4">
                    <Star className="w-5 h-5 fill-current mr-1" />
                    <span className="text-white mr-2">{app.rating}</span>
                    <span className="text-accent1 text-sm">(Web App)</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-accent1/20 text-accent1 text-sm font-medium rounded-full self-start">
                  {app.category}
                </span>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-6">{app.longDescription || app.description}</p>
                
                {app.features && app.features.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {app.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="h-5 w-5 text-accent1 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Screenshots Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-accent2/30">App Screenshots</h2>
                  <div className="space-y-12">
                    {app.screenshots ? (
                      app.screenshots.map((screenshot) => (
                        <div key={screenshot.id} className="bg-black/30 rounded-xl p-6">
                          <div className="relative group">
                            <img 
                              src={screenshot.imageUrl} 
                              alt={screenshot.altText || `Screenshot ${screenshot.id}`} 
                              className="rounded-lg w-full h-auto border border-accent2/20"
                            />
                            <a 
                              href={screenshot.imageUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="absolute top-4 right-4 bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              aria-label="View full size"
                            >
                              <Maximize2 className="h-5 w-5 text-white" />
                            </a>
                          </div>
                          {screenshot.description && (
                            <p className="mt-4 text-accent1 text-sm">
                              {screenshot.description}
                            </p>
                          )}
                        </div>
                      ))
                    ) : (
                      // Default template for apps without screenshots
                      Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="bg-black/30 rounded-xl p-6">
                          <div className="aspect-video bg-accent1/10 rounded-lg border-2 border-dashed border-accent2/30 flex items-center justify-center">
                            <div className="text-center p-6">
                              <ImageIcon className="h-12 w-12 text-accent1/50 mx-auto mb-2" />
                              <p className="text-accent1/50 text-sm">
                                {index === 0 && 'App Homepage'}
                                {index === 1 && 'Key Feature'}
                                {index === 2 && 'Dashboard View'}
                                {index === 3 && 'Settings Panel'}
                                {index >= 4 && `Feature ${index - 2}`}
                              </p>
                            </div>
                          </div>
                          <p className="mt-4 text-accent1 text-sm">
                            {index === 0 && 'This is where the app homepage screenshot will be displayed with a brief description of the main interface.'}
                            {index === 1 && 'Highlight of a key feature with a visual demonstration.'}
                            {index === 2 && 'Overview of the main dashboard showing key metrics and navigation.'}
                            {index === 3 && 'Customization and settings panel for user preferences.'}
                            {index === 4 && 'Additional feature demonstration or use case example.'}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get large icon component
const getLargeIcon = (iconName: string, app: AppType) => {
  switch (iconName) {
    case 'palette':
      return <Palette className="h-16 w-16 text-accent1" />;
    case 'image':
      return <ImageIcon className="h-16 w-16 text-accent1" />;
    case 'share-2':
      return <Share2 className="h-16 w-16 text-accent1" />;
    case 'bar-chart-2':
      return <BarChart2 className="h-16 w-16 text-accent1" />;
    case 'wallet':
      return <Wallet className="h-16 w-16 text-accent1" />;
    case 'book':
      return <Book className="h-16 w-16 text-accent1" />;
    case 'scale':
      return <Scale className="h-16 w-16 text-accent1" />;
    default:
      return <div className="h-16 w-16 rounded-full bg-accent1/20 flex items-center justify-center">
        <span className="text-2xl">{app.name.charAt(0)}</span>
      </div>;
  }
};

export default AppDetail;
