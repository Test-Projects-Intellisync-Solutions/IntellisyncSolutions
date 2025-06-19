import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import Confetti from './Confetti';
import { Link } from 'react-router-dom';

interface SuccessScreenProps {
  email: string;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ email }) => {
  // Prepare social share messages
  const shareMessage = encodeURIComponent(
    "I just joined the Intellisync AI early-access waitlist—can't wait to see what my custom AI can do!"
  );
  
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}&summary=${shareMessage}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${shareMessage}&url=${encodeURIComponent(window.location.origin)}`;

  // Open share links in new window
  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=550,height=435');
  };

  return (
    <motion.div
      className="w-full text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Confetti count={75} />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-4 drop-shadow-lg">🎉 You're Almost There!</h2>
        <p className="text-lg text-accent1 mb-4">
          We've sent a confirmation email to <span className="font-semibold">{email}</span>.
        </p>
        <p className="text-accent1 mb-4">
          Please check your inbox (and spam folder) to complete your submission.
        </p>
        
        <div className="mb-6 p-4 bg-black/30 rounded-2xl border border-accent2 shadow-lg backdrop-blur-sm">
          <p className="text-sm text-white mb-2">
            Please check your email client, review the details, and hit send to secure your spot on our waitlist.
          </p>
          <p className="text-sm text-gray-300">
            If you don't see the email, please check your drafts or email us directly at{' '}
            <a href="mailto:chris.june@intellisync.ca" className="text-accent1 hover:underline">
              chris.june@intellisync.ca
            </a>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full border-accent1 text-accent1 hover:bg-accent1/10">
                Back to Home
              </Button>
            </motion.div>
          </Link>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="outline" 
              className="w-full border-accent1 text-accent1 hover:bg-accent1/10"
              onClick={() => handleShare(linkedInShareUrl)}
            >
              Share on LinkedIn
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="outline" 
              className="w-full border-accent1 text-accent1 hover:bg-accent1/10"
              onClick={() => handleShare(twitterShareUrl)}
            >
              Share on X
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SuccessScreen;
