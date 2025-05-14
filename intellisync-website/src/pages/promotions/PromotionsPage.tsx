import React from 'react';
import PromotionsHeader from './PromotionsHeader';
import PromotionsList from './PromotionsList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/structuredData';

const PromotionsPage: React.FC = () => {
  // Create structured data
  const promotionsSchema = getServiceSchema(
    'Special Promotions and Offers',
    'Discover limited-time offers, discounts, and special promotions on Intellisync Solutions AI products and services.',
    '/promotions'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Promotions', url: '/promotions' }
  ]);
  
  // Combine schemas
  const structuredData = [promotionsSchema, breadcrumbSchema];
  
  return (
    <main className="w-full">
      <SEO
        title="Special Promotions and Offers"
        description="Discover limited-time offers, discounts, and special promotions on our AI products and services. Take advantage of exclusive deals on custom AI solutions, GPT Builder, and more."
        canonicalUrl="/promotions"
        keywords="AI promotions, special offers, discounts, limited time deals, AI services promotions, GPT Builder offers"
        structuredData={structuredData}
      />
      <Header />
      <PromotionsHeader />
      <PromotionsList />
      <Footer />
    </main>
  );
};

export default PromotionsPage;
