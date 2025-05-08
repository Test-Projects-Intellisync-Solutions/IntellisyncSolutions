import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from './hero';
import FeaturesSection from './FeaturesSection';
import ValuePropositionSection from './ValuePropositionSection';
import CustomCTA from './CustomCTA';




const Home: React.FC = () => {
  return (  
    <>
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
