import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";

/**
 * Hero Section for GPT Builder Page
 * Visual: Pixar-style AI avatar with wrench & wand, holographic GPT globe
 * Background: Animated neural grid particles (Framer Motion)
 * Headline, subheadline, CTA buttons
 */
const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20">
      {/* TODO: Replace with 3D Pixar-style avatar & holographic GPT globe */}
      <div className="mb-8">
        <div className="h-48 w-48 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full flex items-center justify-center shadow-lg">
          {/* Image Placeholder */}
          <span className="text-6xl">🤖✨</span>
        </div>
      </div>
      <motion.h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-4">
        The Easiest No-Code GPT Builder. Period.
      </motion.h1>
      <motion.p className="text-lg md:text-2xl text-center font-sans mb-8 max-w-xl">
        Build and deploy your custom GPT in minutes—no code, no config headaches.
      </motion.p>
      <div className="flex gap-4">
        <Button size="lg">Start Building</Button>
        <Button size="lg" variant="outline">See a Live Demo</Button>
      </div>
      {/* TODO: Framer Motion neural grid background animation */}
      <motion.div className="absolute inset-0 -z-10" />
    </section>
  );
};

export default Hero;
