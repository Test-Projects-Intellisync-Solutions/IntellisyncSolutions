import React from "react";
import { motion } from "framer-motion";
import { Tabs } from "../../components/ui/Tabs";

/**
 * IngestionMethods Section for GPT Builder Page
 * Tabs for Website, PDF, Freeform
 * Each tab = animation/mockup + description
 * Bonus: Why use all 3? panel
 */
const IngestionMethods: React.FC = () => (
  <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-accent1 via-cta to-white bg-clip-text text-transparent mb-10 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Multiple Knowledge Sources
      </motion.h2>
      
      <div className="bg-black/30 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-accent2 w-full">
        <Tabs
          tabs={[
            {
              label: <span className="text-accent1 font-semibold">🌐 Website Scraper</span>,
              content: (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8 p-4"
                >
                  <div className="mb-4 md:mb-0 h-40 w-40 flex items-center justify-center bg-cta/10 rounded-xl">
                    <span className="text-5xl">🌐</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-3">Website Scraper</h3>
                    <p className="text-accent1">Parse HTML, XML, or sitemaps from any public site for instant knowledge ingestion. Perfect for creating GPTs based on your existing web content.</p>
                  </div>
                </motion.div>
              ),
            },
            {
              label: <span className="text-accent1 font-semibold">📄 PDF Upload</span>,
              content: (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8 p-4"
                >
                  <div className="mb-4 md:mb-0 h-40 w-40 flex items-center justify-center bg-accent1/10 rounded-xl">
                    <span className="text-5xl">📄</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-3">PDF Upload</h3>
                    <p className="text-accent1">Upload and ingest knowledge from PDF documents. Ideal for training your GPT on reports, manuals, or any document-based knowledge.</p>
                  </div>
                </motion.div>
              ),
            },
            {
              label: <span className="text-accent1 font-semibold">📝 Freeform Input</span>,
              content: (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8 p-4"
                >
                  <div className="mb-4 md:mb-0 h-40 w-40 flex items-center justify-center bg-accent2/10 rounded-xl">
                    <span className="text-5xl">📝</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-3">Freeform Input</h3>
                    <p className="text-accent1">Paste or type any text to add custom knowledge. Perfect for adding specific instructions or information not available elsewhere.</p>
                  </div>
                </motion.div>
              ),
            },
          ]}
        />
      </div>
      
      <motion.div
        className="mt-8 bg-accent2/20 rounded-xl px-6 py-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      >
        <span className="text-xl font-bold text-white">💡 Use all 3</span>
        <span className="text-white">Combining all sources gives your GPT the deepest, most accurate context.</span>
      </motion.div>
    </div>
  </section>
);

export default IngestionMethods;
