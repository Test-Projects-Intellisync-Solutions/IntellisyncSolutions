import { planTiers } from './pricingData';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

const PlanTable = () => (
  <section className="py-16 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] text-white">
    <motion.div
      className="max-w-5xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.div
        className="flex items-center justify-center gap-3 mb-3"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DollarSign className="w-8 h-8 text-accent1" />
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-tr from-accent1 via-cta to-white bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(76,91,255,0.45)]">Plan Tiers</h2>
      </motion.div>
      
      <div className="overflow-x-auto">
        <motion.div
          className="bg-black/30 backdrop-blur-md rounded-3xl shadow-2xl border border-accent2/30 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <table className="min-w-full">
            <thead className="border-b border-accent2/40">
              <tr>
                <th className="px-6 py-4 text-lg font-semibold text-accent1">Plan Tier</th>
                <th className="px-6 py-4 text-lg font-semibold text-accent1">Monthly Fee</th>
                <th className="px-6 py-4 text-lg font-semibold text-accent1">Monthly Support Requests</th>
                <th className="px-6 py-4 text-lg font-semibold text-accent1">System Updates</th>
                <th className="px-6 py-4 text-lg font-semibold text-accent1">Included Hours</th>
                <th className="px-6 py-4 text-lg font-semibold text-accent1">Extras</th>
              </tr>
            </thead>
            <tbody>
              {planTiers.map((plan, index) => (
                <motion.tr
                  key={plan.name}
                  className="text-center border-b border-accent2/20 last:border-b-0 hover:bg-accent2/10 transition"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <td className="px-6 py-4 font-bold text-cta">{plan.name}</td>
                  <td className="px-6 py-4">
                    {plan.note ? <span className="text-sm text-white/50">{plan.note} </span> : null}
                    <span className="font-semibold text-white">${plan.price}{typeof plan.price === 'number' ? '/month' : ''}</span>
                  </td>
                  <td className="px-6 py-4 text-white/80">{plan.supportRequests}</td>
                  <td className="px-6 py-4 text-white/80">{plan.systemUpdates}</td>
                  <td className="px-6 py-4 text-white/80">{plan.includedHours} hr{plan.includedHours !== 1 ? 's' : ''}/month</td>
                  <td className="px-6 py-4 text-white/80">{plan.extras}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default PlanTable;
