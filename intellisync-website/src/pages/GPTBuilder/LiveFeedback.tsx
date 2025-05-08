import React from "react";
import { motion } from "framer-motion";

/**
 * LiveFeedback Section for GPT Builder Page
 * Live stats (mocked), pulsing indicator, updates every 30s
 */
const stats = {
  activeUsers: 128,
  gptsCreated: 42,
  lastSession: {
    preview: "How can I connect my CRM?",
    timestamp: "2025-05-07 11:45",
    avatar: "🦸‍♂️"
  }
};

const LiveFeedback: React.FC = () => (
  <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-10 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Real-Time Analytics & Feedback
      </motion.h2>
      
      <motion.div
        className="bg-black/30 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-accent2 flex flex-col items-center text-center relative w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-cta">{stats.activeUsers}</div>
            <div className="text-accent1 text-sm">Active Users</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-white">{stats.gptsCreated}</div>
            <div className="text-accent1 text-sm">GPTs Created</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="text-4xl font-bold text-accent1">Last Session</div>
            <div className="text-accent1 text-sm">{stats.lastSession.preview}</div>
          </motion.div>
        </div>
        
        <motion.div
          className="w-full h-48 bg-black/40 rounded-xl mb-6 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-accent1 font-medium">Live Usage Analytics Dashboard</span>
          </div>
          {/* Animated graph lines */}
          <div className="absolute bottom-0 left-0 right-0 h-24">
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cta/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-cta/40"></div>
            <div className="absolute bottom-8 left-0 right-0 h-px bg-accent1/20"></div>
            <div className="absolute bottom-16 left-0 right-0 h-px bg-accent1/20"></div>
          </div>
        </motion.div>
        
        <p className="text-accent1">Track usage, conversations, and user satisfaction in real-time with our comprehensive analytics dashboard.</p>
        
        <div className="flex flex-col items-center justify-center mt-6 mb-2 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{stats.lastSession.avatar}</span>
            <span className="text-accent1 text-base font-medium">{stats.lastSession.preview}</span>
          </div>
          <span className="text-accent1 text-sm">{stats.lastSession.timestamp}</span>
        </div>
        {/* Pulsing live indicator */}
        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full shadow-lg" />
        <div className="text-accent1 text-sm font-semibold mt-4">Live data. Updated every 30 seconds.</div>
      </motion.div>
    </div>
  </section>
);

export default LiveFeedback;
