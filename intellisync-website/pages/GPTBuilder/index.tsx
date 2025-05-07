import React from "react";
import Hero from "./Hero";
import FeaturesOverview from "./FeaturesOverview";
import HowItWorks from "./HowItWorks";
import IngestionMethods from "./IngestionMethods";
import CustomizationOptions from "./CustomizationOptions";
import DeployAnywhere from "./DeployAnywhere";
import LiveFeedback from "./LiveFeedback";
import CallToAction from "./CallToAction";

/**
 * GPT Builder Marketing + Onboarding Page
 * Assembles all section components in conversion-optimized order
 * All UI/animation/image TODOs are marked in each section file
 */
const GPTBuilderPage: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <FeaturesOverview />
      <HowItWorks />
      <IngestionMethods />
      <CustomizationOptions />
      <DeployAnywhere />
      <LiveFeedback />
      <CallToAction />
    </main>
  );
};

export default GPTBuilderPage;
