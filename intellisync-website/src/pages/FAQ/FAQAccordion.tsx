import React, { useState } from 'react';
import { FAQItem } from './FAQcontent';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={faq.question} className={`rounded-xl shadow-xl border border-accent1/30 bg-[#181a28] transition-all duration-200 ${openIndex === idx ? 'ring-2 ring-cta/60' : ''}`}>
  <button
    className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold focus:outline-none text-left"
    onClick={() => toggle(idx)}
  >
    <span className="text-accent1">{faq.question}</span>
    <motion.span
      animate={{ rotate: openIndex === idx ? 90 : 0 }}
      transition={{ duration: 0.2 }}
      className={`ml-2 text-cta text-xl transition-colors duration-200 ${openIndex === idx ? 'text-accent1' : ''}`}
    >
      ▶
    </motion.span>
  </button>
  <AnimatePresence>
    {openIndex === idx && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden px-6 pb-4 text-accent1"
      >
        {faq.answer}
      </motion.div>
    )}
  </AnimatePresence>
</div>
      ))}
    </div>
  );
};

export default FAQAccordion;
