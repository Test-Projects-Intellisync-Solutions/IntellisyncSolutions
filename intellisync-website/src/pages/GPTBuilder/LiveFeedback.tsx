import React from "react";
import { Card } from "../../components/ui/Card";
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
  <section className="py-16 max-w-3xl mx-auto">
    <Card className="p-8 flex flex-col items-center text-center relative">
      <div className="flex gap-8 mb-6">
        <div>
          <div className="text-3xl font-bold">{stats.activeUsers}</div>
          <div className="text-muted-foreground text-xs">Active Users</div>
        </div>
        <div>
          <div className="text-3xl font-bold">{stats.gptsCreated}</div>
          <div className="text-muted-foreground text-xs">GPTs Created</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-sm font-semibold mb-1">Last Session</div>
        <div className="flex items-center gap-2 justify-center">
          <span className="text-2xl">{stats.lastSession.avatar}</span>
          <span className="text-muted-foreground">{stats.lastSession.preview}</span>
          <span className="text-xs ml-2">{stats.lastSession.timestamp}</span>
        </div>
      </div>
      {/* Pulsing live indicator */}
      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full shadow-lg" />
      <div className="text-xs text-muted-foreground mt-4">Live data. Updated every 30 seconds.</div>
    </Card>
  </section>
);

export default LiveFeedback;
