import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from './hero';
import FeaturesSection from './FeaturesSection';
import ValuePropositionSection from './ValuePropositionSection';
import CustomCTA from './CustomCTA';
import SEO from '../../components/SEO';
import { getOrganizationSchema } from '../../utils/structuredData';


const Home: React.FC = () => {
  // Organization schema for structured data
  const organizationSchema = getOrganizationSchema();
  
  return (  
    <>
      <SEO
        title="Home"
        description="Intellisync Solutions provides custom AI solutions, web development, and technology integration services for businesses of all sizes."
        canonicalUrl="/"
        keywords="AI solutions, web development, technology integration, custom AI, business solutions"
        structuredData={organizationSchema}
      />
      <Header />
      <Hero />
      <FeaturesSection />
      <ValuePropositionSection />
      <CustomCTA />
      <Footer />
    </>
  );
};

export default Home;
