import React, { useState } from 'react';
import { faqSections, FAQSection } from './FAQcontent';
import FAQTabs from './FAQTabs';
import FAQAccordion from './FAQAccordion';
import { motion } from 'framer-motion';

const gradientBg = 'bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]';
const accent = 'text-accent1'; // gold/yellow accent from your Tailwind config

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const section = faqSections[activeTab];

  return (
    <section className={`relative min-h-screen py-16 px-4 ${gradientBg} text-white overflow-hidden`}>
  {/* Glassmorphic overlays for depth */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-[-8%] left-[-5%] w-[36vw] h-[36vw] bg-gradient-to-tr from-cta/40 to-accent1/30 rounded-full blur-3xl opacity-70 animate-pulse-slow" />
    <div className="absolute bottom-[-8%] right-[-5%] w-[28vw] h-[28vw] bg-gradient-to-tr from-accent2/50 to-primary/40 rounded-full blur-2xl opacity-60 animate-pulse-slower" />
  </div>
  <motion.h1
    className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(76,91,255,0.45)] animate-gradient-x z-10"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Frequently Asked Questions
  </motion.h1>
  <div className="max-w-3xl mx-auto z-10 relative">
    <FAQTabs
      sections={faqSections.map(s => s.section)}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
    <div className="mt-8">
      <FAQAccordion faqs={section.faqs} />
    </div>
  </div>
</section>
  );
};

export default FAQ;