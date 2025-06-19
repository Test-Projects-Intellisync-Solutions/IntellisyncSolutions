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
    <section className="relative min-h-[70vh] w-full bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] text-white py-16 overflow-hidden">
      {/* Animated glassmorphic overlays, matching Home page */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-8%] left-[-5%] w-[36vw] h-[36vw] bg-gradient-to-tr from-cta/40 to-accent1/30 rounded-full blur-3xl opacity-70 animate-pulse-slow" />
        <div className="absolute bottom-[-8%] right-[-5%] w-[28vw] h-[28vw] bg-gradient-to-tr from-accent2/50 to-primary/40 rounded-full blur-2xl opacity-60 animate-pulse-slower" />
      </div>
      {/* Container */}
      <div className="w-full px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center md:text-left bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(76,91,255,0.45)] animate-gradient-x"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            The Easiest No-Code GPT Builder. Period.
            <span className="block text-2xl md:text-4xl font-semibold tracking-tight mt-2 text-accent1 drop-shadow-[0_2px_16px_rgba(198,167,109,0.35)] animate-fade-in">
              Build, Customize, Deploy Instantly
            </span>
          </motion.h1>
          <motion.p
            className="text-white md:text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          >
            Build and deploy your custom GPT in minutes—no code, no config headaches. Intuitive onboarding, beautiful UI, and instant deployment.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            <Button
              className="bg-accent1 text-[#232946] font-bold hover:bg-accent1/90 px-6 py-3 rounded-full shadow-lg"
              size="lg"
              aria-label="Start Building"
              onClick={() => window.open('https://gpt.intellisync.io', '_blank', 'noopener,noreferrer')}
            >
              Start Building
            </Button>
          </motion.div>
        </div>
        {/* Right Visual */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
        <div className="h-96 w-96 md:h-[28rem] md:w-[28rem] flex items-center justify-center">
  <img
    src="/assets/images/GPTBuilderHero.png"
    alt="GPT Builder Hero"
    className="h-full w-full object-contain"
  />
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
