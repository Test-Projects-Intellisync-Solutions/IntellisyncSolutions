import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PrivacyContent from "./PrivacyContent";

/**
 * Privacy Policy Page
 * Presents our privacy-first approach and legal information
 */
const PrivacyPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
      <Header />
      <PrivacyContent />
      <Footer />
    </main>
  );
};

export default PrivacyPage;
