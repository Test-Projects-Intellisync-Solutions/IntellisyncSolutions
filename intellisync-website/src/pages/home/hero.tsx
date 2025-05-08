import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button'; // or wherever your Button component lives

// Example hero image – replace with your actual image
const HERO_IMAGE_URL = '/assets/images/homeHero.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] w-full bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] text-white py-16 overflow-hidden">
  {/* Animated glassmorphic overlays */}
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
            IntelliSync Solutions
            <span className="block text-2xl md:text-4xl font-semibold tracking-tight mt-2 text-accent1 drop-shadow-[0_2px_16px_rgba(198,167,109,0.35)] animate-fade-in">AI. Unleashed.</span>
          </motion.h1>
          
          <motion.p
            className="text-white md:text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          >
            Where visionaries build the future. IntelliSync Solutions engineers AI systems that redefine possibility—empowering teams, transforming industries, and unlocking human potential. Discover the power of intelligence, orchestrated.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            <Button
              className="bg-[#4C5BFF] hover:bg-[#6C7AFF] text-white font-semibold px-6 py-3 rounded-full shadow-lg"
              aria-label="Start Your AI Journey"
            >
              Start Your AI Journey
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
          <img
            src={HERO_IMAGE_URL}
            alt="Hero Person"
            className="max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
      
      {/* Optional Floating Shapes or Particles */}
      {/* You could add some floating circles or shapes with absolute positioning for extra flair */}
    </section>
  );
};

export default Hero;