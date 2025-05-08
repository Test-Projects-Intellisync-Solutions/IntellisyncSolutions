import React from 'react';
import { motion } from 'framer-motion';
import PromotionCard from './PromotionCard';

// Example data; replace with API or props as needed
const promotions = [
  { 
    id: 1, 
    title: 'Spring Sale', 
    description: 'Save 20% on all our premium AI solutions and services for a limited time!', 
    image: '', // Using empty string as placeholder - will show card without image
    ctaText: 'Learn More'
  },
  { 
    id: 2, 
    title: 'Enterprise Package', 
    description: 'Sign up for our enterprise solution and get a free consultation with our AI experts.', 
    image: '', // Using empty string as placeholder - will show card without image
    ctaText: 'Get Started'
  },
  { 
    id: 3, 
    title: 'Referral Program', 
    description: 'Refer a business partner and both receive 15% off your next subscription renewal.', 
    image: '', // Using empty string as placeholder - will show card without image
    ctaText: 'Join Program'
  }
];

const PromotionsList: React.FC = () => {
  // Stagger animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-[#1a1a2e] via-[#232946] to-[#090d1f]">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <PromotionCard 
              key={promo.id} 
              title={promo.title} 
              description={promo.description} 
              image={promo.image}
              ctaText={promo.ctaText}
              index={index} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PromotionsList;
