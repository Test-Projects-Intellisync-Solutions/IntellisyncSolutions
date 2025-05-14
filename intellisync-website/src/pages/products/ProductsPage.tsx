import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomCTA from "../home/CustomCTA";
import AIDrivenSolutions from "./AIDrivenSolutions";
import TechnologyCapabilities from "./TechnologyCapabilities";
import CaseStudies from "./CaseStudies";
import Products from "./Products";
import SEO from '../../components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/structuredData';


const ProductsPage: React.FC = () => {
  // Create structured data
  const productsServiceSchema = getServiceSchema(
    'AI Products and Services',
    'Explore Intellisync Solutions\'s AI products and services including custom AI solutions, MCP servers, GPT Builder, and more.',
    '/products'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' }
  ]);
  
  // Combine schemas
  const structuredData = [productsServiceSchema, breadcrumbSchema];
  
  return (
    <>
      <SEO
        title="Products and Services"
        description="Explore our AI products and services including custom AI solutions, MCP servers, GPT Builder, and technology integrations for businesses of all sizes."
        canonicalUrl="/products"
        keywords="AI products, AI services, custom AI solutions, MCP servers, GPT Builder, AI integration, technology services"
        structuredData={structuredData}
      />
      <Header />
      {/* AI-Driven Solutions Section */}
      <AIDrivenSolutions />
      
      {/* Technology Capabilities Section */}
      <TechnologyCapabilities />
      
      {/* Case Studies Section */}
      <CaseStudies />

      {/* Products & Services Listing */}
      <Products />
      {/* Shared CTA */}
      <CustomCTA />
      <Footer />
    </>
  );
};

export default ProductsPage;
