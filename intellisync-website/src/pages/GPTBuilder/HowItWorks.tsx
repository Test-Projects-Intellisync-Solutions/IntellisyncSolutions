import React from "react";
import { motion } from "framer-motion";
import { Alert } from "../../components/ui/Alert";

/**
 * HowItWorks Section for GPT Builder Page
 * Timeline-style, scroll-triggered animation (Framer Motion)
 * Pro Tip box at the end
 */
const steps = [
  "Sign in",
  "Name your GPT",
  "Ingest data from any/all 3 sources",
  "Add a custom avatar",
  "Customize instructions",
  "Add optional initial messages",
  "Share & deploy anywhere",
  "Track usage & improve",
];

const HowItWorks: React.FC = () => (
  <section className="py-16 max-w-3xl mx-auto">
    <ol className="relative border-l border-gray-300 dark:border-gray-700">
      {steps.map((step, i) => (
        <motion.li
          key={step}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="mb-10 ml-6"
        >
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-white dark:ring-gray-900">
            <span className="text-white font-bold">{i + 1}</span>
          </span>
          <h3 className="font-semibold text-lg">{step}</h3>
        </motion.li>
      ))}
    </ol>
    <Alert className="mt-8" variant="default">
      <b>🧠 Pro Tip:</b> Use all 3 ingestion methods for best accuracy and deep contextual responses.
    </Alert>
  </section>
);

export default HowItWorks;
