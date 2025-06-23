import React from 'react';
import { useParams } from 'react-router-dom';
import AppDetail from '../components/apps/AppDetail';
import { APPS } from './store/StorePage';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';

const AppPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const app = APPS.find(a => a.slug === slug);
  
  if (!app) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">App Not Found</h1>
          <p className="text-accent1 mb-6">The app you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/store')} 
            className="px-6 py-2 bg-accent1 hover:bg-accent1/90 text-white rounded-lg transition-colors"
          >
            Back to Store
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <SEO 
        title={`${app.name} | Intellisync Apps`} 
        description={app.description}
        canonicalUrl={`/apps/${app.slug}`}
      />
      <AppDetail app={app} />
    </>
  );
};

export default AppPage;
