import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WaitlistStep, WaitlistAnswer } from '../../types/waitlist';
import OptionCard from './OptionCard';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Tooltip } from '../ui/Tooltip';

interface QuestionStepProps {
  step: WaitlistStep;
  onAnswer: (answer: WaitlistAnswer) => void;
  previousAnswer?: string | string[];
  onSkip: () => void;
}

const QuestionStep: React.FC<QuestionStepProps> = ({ 
  step, 
  onAnswer, 
  previousAnswer, 
  onSkip 
}) => {
  // For single or multi select
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    previousAnswer 
      ? Array.isArray(previousAnswer) 
        ? previousAnswer 
        : [previousAnswer] 
      : []
  );
  
  // For text input
  const [textValue, setTextValue] = useState<string>(
    previousAnswer && !Array.isArray(previousAnswer) ? previousAnswer : ''
  );

  // Handle option selection
  const handleOptionClick = (option: string) => {
    if (step.type === 'single') {
      setSelectedOptions([option]);
      // Auto-submit single selection after a brief delay
      setTimeout(() => {
        onAnswer({
          stepId: step.id,
          answer: option
        });
      }, 300);
    } else if (step.type === 'multi') {
      setSelectedOptions(prev => {
        if (prev.includes(option)) {
          return prev.filter(item => item !== option);
        } else {
          return [...prev, option];
        }
      });
    }
  };

  // Handle continue button click for multi-select and text
  const handleContinue = () => {
    if (step.type === 'multi') {
      onAnswer({
        stepId: step.id,
        answer: selectedOptions
      });
    } else if (step.type === 'text') {
      onAnswer({
        stepId: step.id,
        answer: textValue
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">{step.question}</h2>
        {step.helper && (
          <Tooltip content={step.helper}>
            <p className="text-gray-400 text-sm cursor-help border-b border-dotted border-gray-600 inline-block">
              Need help with this question?
            </p>
          </Tooltip>
        )}
      </div>

      {step.type === 'text' ? (
        <div className="space-y-4">
          <Input
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full bg-gray-800 border-gray-700"
          />
          <div className="flex justify-between mt-6">
            <Button variant="gold" onClick={onSkip}>
              Skip
            </Button>
            <Button 
              onClick={handleContinue} 
              disabled={!textValue.trim()}
            >
              Continue
            </Button>
          </div>
        </div>
      ) : (
        <>
          <motion.div 
            className="grid gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {step.options?.map((option, index) => (
              <OptionCard
                key={index}
                option={option}
                selected={selectedOptions.includes(option)}
                onClick={() => handleOptionClick(option)}
                multiSelect={step.type === 'multi'}
              />
            ))}
          </motion.div>

          {step.type === 'multi' && (
            <div className="flex justify-between mt-6">
              <Button variant="gold" onClick={onSkip}>
                Skip
              </Button>
              <Button 
                onClick={handleContinue} 
                disabled={selectedOptions.length === 0}
              >
                Continue
              </Button>
            </div>
          )}
        </>
      )}

      {step.type === 'single' && (
        <div className="flex justify-start mt-6">
          <Button variant="gold" onClick={onSkip}>
            Skip
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default QuestionStep;
