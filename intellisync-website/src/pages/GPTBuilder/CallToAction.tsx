import React from "react";
import { Button } from "../../components/ui/Button";
import { motion } from "framer-motion";

/**
 * CallToAction Section for GPT Builder Page
 * Bold tagline, confetti burst on hover, butter tart icon
 */
const CallToAction: React.FC = () => (
  <section className="py-24 flex flex-col items-center justify-center text-center relative">
    <motion.h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
      Ready to build the GPT you always wanted?
    </motion.h2>
    <div className="flex gap-6 mb-8">
      <motion.div whileHover={{ scale: 1.08, rotate: -2 }} className="relative">
        <Button size="lg" className="text-lg font-bold px-8 py-4">
          Start Building Now
        </Button>
        {/* TODO: Confetti burst on hover */}
      </motion.div>
      <motion.div whileHover={{ scale: 1.08, rotate: 2 }}>
        <Button size="lg" variant="outline" className="text-lg font-bold px-8 py-4">
          See How It Works
        </Button>
      </motion.div>
    </div>
    {/*  icon in one corner */}
    <div className="absolute bottom-4 right-8 text-4xl" title="Intellisync">🍯🥧</div>
    {/* TODO: Framer Motion sparkles on hover */}
  </section>
);

export default CallToAction;
