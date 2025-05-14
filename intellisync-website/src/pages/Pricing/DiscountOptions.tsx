import { discountOptions } from './pricingData';
import { motion } from 'framer-motion';
import { Percent, TrendingDown } from 'lucide-react';

const DiscountOptions = () => (
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
      <Percent className="w-8 h-8 text-accent1" />
      <h2 className="text-3xl font-bold bg-gradient-to-tr from-accent1 via-cta to-white bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(76,91,255,0.45)]">
        Long-Term Discount Options
      </h2>
    </motion.div>
    
    <motion.ul 
      className="mb-6 list-disc list-inside text-white/80"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {discountOptions.map((item, idx) => (
        <motion.li 
          key={idx} 
          className="mb-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * idx + 0.3 }}
        >
          <span className="font-semibold text-accent1">{item.term}:</span> Save <span className="font-bold text-cta">{item.discount}%</span>{item.note ? <span className="text-white/50"> ({item.note})</span> : null}
        </motion.li>
      ))}
    </motion.ul>
    
    <motion.div 
      className="flex items-center gap-2 border-t border-accent2/20 pt-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <TrendingDown className="w-5 h-5 text-cta" />
      <p className="text-md text-white/70 italic">
        All discounts stack — for example, a 3-Year + Annual Prepay = 20% total savings.
      </p>
    </motion.div>
  </motion.section>
);

export default DiscountOptions;
