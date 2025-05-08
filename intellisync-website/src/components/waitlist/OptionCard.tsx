import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface OptionCardProps {
  option: string;
  selected: boolean;
  onClick: () => void;
  multiSelect?: boolean;
}

const OptionCard: React.FC<OptionCardProps> = ({ option, selected, onClick, multiSelect = false }) => {
  return (
    <motion.div
      className={cn(
        "border rounded-lg p-4 cursor-pointer transition-all",
        "hover:border-accent1 hover:shadow-md",
        selected 
          ? "border-accent1 bg-accent1/10 shadow-md" 
          : "border-gray-700 bg-gray-800/50"
      )}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-white">{option}</span>
        {selected && (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent1 text-black">
            {multiSelect ? "✓" : "•"}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default OptionCard;
