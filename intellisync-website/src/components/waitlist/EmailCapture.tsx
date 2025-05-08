import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { FinalCTA, WaitlistVariant } from '../../types/waitlist';

interface EmailCaptureProps {
  finalCTA: FinalCTA;
  onSubmit: (email: string, name: string) => void;
  variant: WaitlistVariant;
  initialEmail?: string;
  initialName?: string;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({
  finalCTA,
  onSubmit,
  variant,
  initialEmail = '',
  initialName = ''
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState(initialName);
  const [isValidEmail, setIsValidEmail] = useState(false);

  // Email validation
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const [isNameValid, setIsNameValid] = useState(!!initialName);

  const handleSubmit = () => {
    if (isValidEmail && isNameValid && name.trim()) {
      onSubmit(email, name);
    }
  };
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(!!value.trim());
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-3 drop-shadow-lg">{finalCTA.headline}</h2>
        <p className="text-lg text-accent1">{finalCTA.subcopy}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-accent1 mb-1">
            Name <span className="text-cta">*</span>
          </label>
          <Input
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Your name"
            className={`w-full bg-black/50 ${
              name === '' || isNameValid ? 'border-accent2 focus:border-accent1 focus:ring-accent1' : 'border-red-500'
            } text-white`}
            required
          />
          {name === '' && (
            <p className="mt-1 text-sm text-red-500">Please enter your name</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-accent1 mb-1">
            Email address <span className="text-cta">*</span>
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="you@example.com"
            className={`w-full bg-black/50 ${
              email && !isValidEmail ? 'border-red-500' : 'border-accent2 focus:border-accent1 focus:ring-accent1'
            } text-white`}
            required
          />
          {email && !isValidEmail && (
            <p className="mt-1 text-sm text-red-500">Please enter a valid email address</p>
          )}
        </div>

        <motion.div
          className="w-full mt-6"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleSubmit}
            disabled={!isValidEmail || !isNameValid || !name.trim()}
            className="w-full bg-accent1 text-[#232946] font-bold hover:bg-accent1/90 py-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {finalCTA.button_label}
          </Button>
        </motion.div>

        <p className="text-xs text-accent1/80 text-center mt-4">
          We respect your privacy and will never share your information.
        </p>
      </div>
    </motion.div>
  );
};

export default EmailCapture;
