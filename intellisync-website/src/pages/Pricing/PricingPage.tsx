import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricingHero from './PricingHero';
import PlanTable from './PlanTable';
import EstimateCalculator from './EstimateCalculator';
import BankedHours from './BankedHours';
import DiscountOptions from './DiscountOptions';
import HourlyRates from './HourlyRates';
import UseCases from './UseCases';
import CTA from './CTA';
import SEO from '../../components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/structuredData';

const PricingPage: React.FC = () => {
  // Create structured data for pricing page
  const pricingServiceSchema = getServiceSchema(
    'Pricing and Plans',
    'Transparent pricing for AI solutions, web development, and technology integration services at Intellisync Solutions.',
    '/pricing'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Pricing', url: '/pricing' }
  ]);
  
  // Combine both schemas
  const structuredData = [pricingServiceSchema, breadcrumbSchema];
  
  return (
    <>
      <SEO
        title="Pricing and Plans"
        description="Explore our transparent pricing for AI solutions, web development, and technology integration services. Find the perfect plan for your business needs."
        canonicalUrl="/pricing"
        keywords="pricing, plans, AI solutions pricing, web development cost, technology integration pricing, Intellisync Solutions pricing"
        structuredData={structuredData}
      />
      <Header />
      <main className="bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] min-h-screen">
        <PricingHero />
        <PlanTable />
       
        <BankedHours />
        <DiscountOptions />
        <HourlyRates />
        <UseCases /> 
        <div className="max-w-4xl mx-auto px-4">
          <EstimateCalculator />
        </div>
        <div className="max-w-5xl mx-auto px-4">
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
