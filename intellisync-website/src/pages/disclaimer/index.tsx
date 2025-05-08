import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DisclaimerContent from "./DisclaimerContent";

/**
 * Disclaimer Page
 * Provides legal disclaimers and limitations of liability
 */
const DisclaimerPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
      <Header />
      <DisclaimerContent />
      <Footer />
    </main>
  );
};

export default DisclaimerPage;
