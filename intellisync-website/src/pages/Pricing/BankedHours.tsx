import { bankedHours } from './pricingData';
import { motion } from 'framer-motion';
import { Clock, HelpCircle, Coins } from 'lucide-react';

const BankedHours = () => (
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
      <Clock className="w-8 h-8 text-accent1" />
      <h2 className="text-3xl font-bold bg-gradient-to-tr from-accent1 via-cta to-white bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(76,91,255,0.45)]">
        What Are Banked Hours?
      </h2>
    </motion.div>
    
    <motion.p 
      className="mb-4 text-lg text-white/90"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {bankedHours.description}
    </motion.p>
    
    <motion.ul 
      className="mb-4 list-disc list-inside text-white/80"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {bankedHours.details.map((item, idx) => (
        <li key={idx}><span className="font-semibold text-accent1">{item.plan}</span>: <span className="text-white">{item.hours} hr/month</span></li>
      ))}
    </motion.ul>
    
    <motion.div 
      className="flex items-center gap-2 mt-6 mb-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <HelpCircle className="w-6 h-6 text-cta" />
      <h3 className="font-semibold text-accent1 text-xl">How It Works:</h3>
    </motion.div>
    
    <motion.ul 
      className="mb-4 list-disc list-inside text-white/80"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {bankedHours.usage.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </motion.ul>
    
    <motion.div 
      className="flex items-center gap-2 mt-6 mb-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Coins className="w-6 h-6 text-cta" />
      <h3 className="font-semibold text-accent1 text-xl">Banked Hour Rate:</h3>
    </motion.div>
    
    <motion.ul 
      className="mb-2 list-disc list-inside text-white/80"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      {bankedHours.rates
        .filter(item => item.type === 'Included work')
        .map((item, idx) => (
          <li key={idx}><span className="font-semibold text-cta">{item.type}</span>: <span className="text-accent1 font-bold">${item.rate}/hr</span></li>
        ))}
    </motion.ul>
    <div className="text-xs text-gray-400 mt-2">
      <span className="font-semibold">Note:</span> Banked Hours are only available to After Care Plan clients.
    </div>
  </motion.section>
);

export default BankedHours;
