import React from "react";
import { motion } from "framer-motion";
import StreamingText from "./StreamingText";

/**
 * HowItWorks Section for GPT Builder Page
 * Timeline-style, scroll-triggered animation (Framer Motion)
 * Pro Tip box at the end
 */
const steps = [
  "Sign in",
  "Custom Name your GPT",
  "Ingest data with our WebScraper utility (URL, XML & Site Map)",
  "Ingest PDF's",
  "Ingest Manual Text input",
  "Add your custom logo or avatar",
  "Customize your A.I. instructions",
  "Add optional initial Starter Prompts",
  "Deploy your GPT to any web based platform (Self-hosted or Script Embed)",
  "Supported web languages: HTML, JavaScript, TypeScript, Vue, React, Angular, Svelte",
  "Track usage & improve",
];

const HowItWorks: React.FC = () => {

  return (
    <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-10 drop-shadow-lg text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Simple Steps to Your Custom GPT
        </motion.h2>
        
        <motion.div
          className="relative w-full"
        >
          <motion.ol
            className="relative border-l border-accent1/50 min-h-[380px]"
          >
            {steps.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -40, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }} // Ensure this stays as an object, not a number
                className="mb-10 ml-6"
              >
                <h3 className="font-bold text-xl text-accent1 mb-1 flex items-center gap-3">
  <span className="flex-shrink-0" aria-hidden="true">
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12.5L10 16L16 8" className="stroke-accent1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</span>
  <StreamingText text={step} />
</h3>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
        
        <motion.div
          className="mt-8 bg-accent1/20 rounded-xl px-6 py-4 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <span className="text-xl font-bold text-accent1">🧠 Pro Tip</span>
          <span className="text-white">Use all 3 ingestion methods for best accuracy and deep contextual responses.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
