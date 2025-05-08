import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";

/**
 * DeployAnywhere Section for GPT Builder Page
 * Two deployment cards: Self-hosted & Script Embed
 * Bonus tagline
 */
const DeployAnywhere: React.FC = () => (
  <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-10 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Deploy Your GPT Anywhere
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 w-full">
        <motion.div
          className="bg-black/30 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-accent2 flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="h-40 w-40 bg-cta/10 rounded-xl flex items-center justify-center mb-6">
            <span className="text-5xl">🌐</span>
          </div>
          <h3 className="font-bold text-xl text-white mb-3">Self-hosted Web Interface</h3>
          <p className="text-accent1 mb-6">Launch your GPT on a standalone link—fully hosted by us. Perfect for sharing with clients or embedding in emails.</p>
          <Button
            className="bg-accent1 text-[#232946] font-bold hover:bg-accent1/90 px-10 py-6 text-2xl rounded-full shadow-lg"
          >
            Open Demo
          </Button>
        </motion.div>
        
        <motion.div
          className="bg-black/30 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-accent2 flex flex-col items-center text-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="h-40 w-40 bg-accent1/10 rounded-xl flex items-center justify-center mb-6">
            <span className="text-5xl">💻</span>
          </div>
          <h3 className="font-bold text-xl text-white mb-3">Script Embed</h3>
          <p className="text-accent1 mb-6">Embed your GPT directly on your website with a simple script tag. Seamless integration with your existing web presence.</p>
          <Button
            className="bg-accent1 text-[#232946] font-bold hover:bg-accent1/90 px-10 py-6 text-2xl rounded-full shadow-lg"
          >
            View Code
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-8 bg-accent1/20 rounded-xl px-6 py-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      >
        <span className="text-xl font-bold text-accent1">Analytics Included</span>
        <span className="text-white">Both options include detailed analytics and user session tracking.</span>
      </motion.div>
    </div>
  </section>
);

export default DeployAnywhere;
