import { useCases } from './pricingData';
import { motion } from 'framer-motion';
import { CheckCircle, Target } from 'lucide-react';

const UseCases = () => (
  <motion.section 
    className="py-12 max-w-3xl mx-auto bg-black/30 backdrop-blur-md rounded-3xl shadow-2xl border border-accent2/30 mb-8 px-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <motion.div 
      className="flex items-center gap-3 mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Target className="w-8 h-8 text-accent1" />
      <h2 className="text-3xl font-bold bg-gradient-to-tr from-accent1 via-cta to-white bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(76,91,255,0.45)]">
        Common Use Cases for After Care
      </h2>
    </motion.div>
    
    <motion.ul 
      className="list-none space-y-3 text-white/80"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {useCases.map((item, idx) => (
        <motion.li 
          key={idx} 
          className="flex items-start gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * idx + 0.3 }}
        >
          <CheckCircle className="w-5 h-5 text-cta mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.section>
);

export default UseCases;
