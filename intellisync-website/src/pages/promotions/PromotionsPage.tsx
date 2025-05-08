import React from 'react';
import PromotionsHeader from './PromotionsHeader';
import PromotionsList from './PromotionsList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PromotionsPage: React.FC = () => {
  return (
    <main className="w-full">
      <Header />
      <PromotionsHeader />
      <PromotionsList />
      <Footer />
    </main>
  );
};

export default PromotionsPage;
