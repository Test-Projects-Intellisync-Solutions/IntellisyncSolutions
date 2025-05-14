import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import FeaturesOverview from "./FeaturesOverview";
import HowItWorks from "./HowItWorks";
import IngestionMethods from "./IngestionMethods";
import CustomizationOptions from "./CustomizationOptions";
import DeployAnywhere from "./DeployAnywhere";
import LiveFeedback from "./LiveFeedback";
import CustomCTA from "../home/CustomCTA";
import SEO from '../../components/SEO';
import { getProductSchema, getBreadcrumbSchema } from '../../utils/structuredData';

/**
 * GPT Builder Marketing + Onboarding Page
 * Assembles all section components in conversion-optimized order
 * All UI/animation/image TODOs are marked in each section file
 */
const GPTBuilderPage: React.FC = () => {
  // Create structured data
  const productSchema = getProductSchema(
    'GPT Builder',
    'Build custom AI chatbots and knowledge bases with Intellisync GPT Builder. No coding required.',
    '/assets/gptbuilder-hero.png',
    'Starting at $99/month'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'GPT Builder', url: '/gptbuilder' }
  ]);
  
  // Combine schemas
  const structuredData = [productSchema, breadcrumbSchema];
  
  return (
    <main className="w-full">
      <SEO
        title="GPT Builder"
        description="Create custom AI chatbots and knowledge bases with Intellisync GPT Builder. No coding required. Upload your documents, customize your AI, and deploy anywhere."
        canonicalUrl="/gptbuilder"
        keywords="GPT Builder, AI chatbot builder, custom AI, knowledge base, no-code AI, document ingestion, AI deployment"
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <FeaturesOverview />
      <HowItWorks />
      <IngestionMethods />
      <CustomizationOptions />
      <DeployAnywhere />
      <LiveFeedback />
      <CustomCTA />
      <Footer />
    </main>
  );
};

export default GPTBuilderPage;
