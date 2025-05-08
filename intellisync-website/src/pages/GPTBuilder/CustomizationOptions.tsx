import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * CustomizationOptions Section for GPT Builder Page
 * Two sections: Instructions box + Initial Prompt Messages
 * Animated preview (mocked)
 */
const CustomizationOptions: React.FC = () => (
  <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-10 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Customize Your GPT Experience
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 w-full">
        {/* Custom Instructions Box */}
        <motion.div
          className="bg-black/30 rounded-2xl p-6 shadow-xl backdrop-blur-md border border-accent2 flex flex-col"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cta/10 rounded-full p-2">
              <span className="text-2xl">⚙️</span>
            </span>
            <h3 className="font-bold text-xl text-white">Custom Instructions</h3>
          </div>
          <div className="border border-accent1/20 rounded-lg p-4 bg-black/20 flex-1">
            <p className="text-accent1">
              Use this section to craft clear and structured instructions for your custom GPT. Writing in Markdown format, you can define tone, behavior, response style, and even special knowledge your GPT should prioritize. 
              For example, guide your GPT to act as a helpful assistant, a technical advisor, or a creative partner. 
              The more detailed and specific your instructions, the more consistent and aligned your GPT will be with your goals.
            </p>
          </div>
        </motion.div>
        
        {/* Initial Prompt Messages */}
        <motion.div
          className="bg-black/30 rounded-2xl p-6 shadow-xl backdrop-blur-md border border-accent2 flex flex-col"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-accent1/10 rounded-full p-2">
              <span className="text-2xl">💬</span>
            </span>
            <h3 className="font-bold text-xl text-white">Initial Prompt Messages</h3>
          </div>
          <ul className="space-y-2 flex-1">
            {[
              "How do I get started with building my own GPT?",
              "What are the best ways to use AI productivity tools on this platform?",
              "I'm stuck on something — can you help me troubleshoot?",
              "Can I use this platform to brainstorm ideas for a project I'm working on?"
            ].map((msg, i) => (
              <motion.li
                key={i}
                className="border border-accent1/20 rounded-lg p-3 bg-black/20 text-accent1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (i + 1) }}
              >
                {msg}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* TODO: Replace with new Live Preview 3D image using updated Intellisync image style */}
      {/* Animated preview (mocked) */}
      
      <motion.div
        className="mt-12 w-full relative overflow-visible bg-gradient-to-br from-[#090d1f]/80 via-[#1a1a2e]/90 to-[#232946]/95 rounded-3xl p-8 shadow-2xl backdrop-blur-lg border border-accent2 flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        {/* Animated Glow Behind Preview */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-br from-cta/40 via-accent1/30 to-transparent rounded-full blur-3xl opacity-60 animate-pulse pointer-events-none z-0" />
        <div className="flex items-center gap-6 z-10">
          <div className="h-32 w-32 bg-gradient-to-br from-cta/80 to-accent1/80 rounded-full flex items-center justify-center animate-pulse-slow shadow-xl border-4 border-accent2/50">
            <span className="text-5xl">🤖</span>
          </div>
          <div className="text-left">
            <h3 className="font-extrabold text-2xl md:text-3xl bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-2 drop-shadow-lg">Live Preview</h3>
            <p className="text-lg text-accent1 mb-4 max-w-xs">See how your prompt changes model behavior in real-time.</p>
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex flex-col items-center md:items-end z-10 w-full md:w-auto mt-6 md:mt-0">
          <Link to="/waitlist" tabIndex={0} className="w-full md:w-auto">
            <motion.button
              className="bg-accent1 text-[#232946] font-bold hover:bg-accent1/90 px-8 py-4 text-lg md:text-xl rounded-full shadow-lg transition-colors duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Join the Waitlist"
            >
              Join Waitlist
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CustomizationOptions;
