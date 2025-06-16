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
        <motion.div 
          key={faq.question} 
          className={`rounded-xl shadow-xl border border-accent1/30 bg-[#181a28] overflow-hidden ${openIndex === idx ? 'ring-2 ring-cta/60' : ''}`}
          layout
        >
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold focus:outline-none text-left"
            onClick={() => toggle(idx)}
          >
            <motion.span className="text-accent1">{faq.question}</motion.span>
            <motion.span
              animate={{ rotate: openIndex === idx ? 90 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="ml-2 text-cta text-xl"
            >
              ▶
            </motion.span>
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <motion.div 
                  className="px-6 pb-4 pt-0 text-gray-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                >
                  {faq.answer}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;
