import { hourlyRates } from './pricingData';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

const HourlyRates = () => (
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
        Standard Hourly Rates
      </h2>
    </motion.div>
    
    <motion.div 
      className="overflow-hidden rounded-xl mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <table className="min-w-full">
        <thead className="border-b border-accent2/40">
          <tr>
            <th className="px-6 py-3 text-lg font-semibold text-accent1">Client Type</th>
            <th className="px-6 py-3 text-lg font-semibold text-accent1">Hourly Rate</th>
          </tr>
        </thead>
        <tbody>
          {hourlyRates.map((item, idx) => (
            <motion.tr 
              key={idx} 
              className="text-center border-b border-accent2/20 last:border-b-0 hover:bg-accent2/10 transition"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * idx + 0.3 }}
            >
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5 text-cta" />
                  <span className="font-bold text-cta">{item.clientType}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="font-semibold text-white">${item.rate}/hour</span> <span className="text-xs text-white/50">({item.note})</span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </motion.section>
);

export default HourlyRates;
