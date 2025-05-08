import React from 'react';
import { motion } from 'framer-motion';
import { WaitlistVariant } from '../../types/waitlist';

interface VariantSelectorProps {
  onSelect: (variant: WaitlistVariant) => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ onSelect }) => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-3">Welcome to Intellisync Solutions</h1>
        <p className="text-gray-300">Tell us how you'd like to use our AI solutions</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="border border-gray-700 rounded-xl p-6 cursor-pointer hover:border-accent1 hover:shadow-lg transition-all bg-gray-800/50"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('business')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h2 className="text-xl font-bold text-white mb-2">Business</h2>
            <p className="text-gray-300 text-sm">
              Enhance your organization with AI workflow automation, custom integrations, and enterprise solutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="border border-gray-700 rounded-xl p-6 cursor-pointer hover:border-accent1 hover:shadow-lg transition-all bg-gray-800/50"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('personal')}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🙋</div>
            <h2 className="text-xl font-bold text-white mb-2">Personal</h2>
            <p className="text-gray-300 text-sm">
              Simplify your daily life with personal AI assistants, life-admin automation, and wellness coaching.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VariantSelector;
