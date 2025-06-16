import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { faqSections, FAQSection } from './FAQcontent';
import FAQTabs from './FAQTabs';
import FAQAccordion from './FAQAccordion';
import SEO from '../../components/SEO';
import { getFAQSchema, getBreadcrumbSchema } from '../../utils/structuredData';

const gradientBg = 'bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]';

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Create FAQ structured data from all FAQ sections
  const allFaqs = faqSections.flatMap((section: FAQSection) => 
    section.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  );
  
  // Get current section
  const section = faqSections[activeTab];
  
  // Create FAQ schema
  const faqSchema = getFAQSchema(allFaqs);
  
  // Create breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' }
  ]);
  
  // Combine both schemas for structured data
  const structuredData = [faqSchema, breadcrumbSchema];

  return (
    <>
    <SEO
      title="Frequently Asked Questions"
      description="Find answers to common questions about AI, machine learning, and Intellisync Solutions' services and products."
      canonicalUrl="/faq"
      keywords="FAQ, AI questions, machine learning FAQ, Intellisync Solutions help, AI terminology"
      structuredData={structuredData}
    />
    
    <Header />
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
    {section.section}
  </motion.h1>
  <div className="max-w-3xl mx-auto z-10 relative">
    <FAQTabs 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      sections={faqSections.map((s: FAQSection) => s.section)}
    />
    <div className="mt-8">
      <FAQAccordion faqs={section.faqs} />
    </div>
  </div>
</section>
    <Footer />
    </> 
      );
};

export default FAQ;