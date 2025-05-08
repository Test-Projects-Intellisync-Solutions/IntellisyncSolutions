import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TermsContent from "./TermsContent";

/**
 * Terms of Service Page
 * Outlines the terms and conditions for using Intellisync Solutions services
 */
const TermsPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
      <Header />
      <TermsContent />
      <Footer />
    </main>
  );
};

export default TermsPage;
