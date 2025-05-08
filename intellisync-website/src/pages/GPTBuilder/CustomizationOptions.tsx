import React from "react";
import { motion } from "framer-motion";

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
        className="mt-12 w-full bg-black/30 rounded-2xl p-6 shadow-xl backdrop-blur-md border border-accent2 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="h-32 w-32 bg-gradient-to-br from-cta/80 to-accent1/80 rounded-full flex items-center justify-center animate-pulse-slow">
          <span className="text-4xl">🤖</span>
        </div>
        <div className="ml-6 text-left">
          <h3 className="font-bold text-xl text-white mb-2">Live Preview</h3>
          <p className="text-accent1">See how your prompt changes model behavior in real-time.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CustomizationOptions;
