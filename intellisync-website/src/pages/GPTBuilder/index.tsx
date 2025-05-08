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

/**
 * GPT Builder Marketing + Onboarding Page
 * Assembles all section components in conversion-optimized order
 * All UI/animation/image TODOs are marked in each section file
 */
const GPTBuilderPage: React.FC = () => {
  return (
    <main className="w-full">
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
