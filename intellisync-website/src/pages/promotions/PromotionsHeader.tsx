import React from 'react';
import { motion } from 'framer-motion';

const PromotionsHeader: React.FC = () => (
  <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Current Promotions
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-accent1 max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        Discover our latest deals and exclusive offers!
      </motion.p>
    </div>
  </section>
);

export default PromotionsHeader;
