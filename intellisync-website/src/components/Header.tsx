import React from 'react';
import { Button } from './ui/Button';
import { Info, Package, DollarSign, Percent, Bot, Mail, Home as HomeIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] shadow-md flex items-center justify-between px-8 py-4 text-white">
      <div className="flex items-center gap-4">
        {/* Logo Placeholder */}
        <img src="/assets/logo.png" alt="Intellisync Logo" className="h-10 w-auto" />
        <span className="text-2xl font-header font-bold text-surface">Intellisync Solutions</span>
      </div>
      <div className="flex flex-1 justify-center">
        <nav className="flex flex-col md:flex-row gap-2 md:gap-6 font-body text-base items-center md:items-start">
  <a href="/" className="flex items-center gap-2 hover:text-accent1 transition-colors">
    <HomeIcon className="w-5 h-5 text-accent1" /> Home
  </a>
          <a href="/about" className="flex items-center gap-2 hover:text-accent1 transition-colors">
            <Info className="w-5 h-5 text-accent1" /> About
          </a>
          <a href="/products" className="flex items-center gap-2 hover:text-accent1 transition-colors">
            <Package className="w-5 h-5 text-accent1" /> Products
          </a>
          <a href="/pricing" className="flex items-center gap-2 hover:text-accent1 transition-colors">
            <DollarSign className="w-5 h-5 text-accent1" /> Pricing
          </a>
          <a href="/promotions" className="flex items-center gap-2 hover:text-accent1 transition-colors">
            <Percent className="w-5 h-5 text-accent1" /> Promo
          </a>
          <a href="/gptbuilder" className="flex items-center gap-2 hover:text-accent1 transition-colors">
            <Bot className="w-5 h-5 text-accent1" /> GPTBuilder
          </a>
        </nav>
      </div>
      <a href="/contact" className="ml-8">
  <Button variant="default" size="lg" className="flex items-center gap-2">
    <Mail className="w-5 h-5 text-accent2" /> Contact
  </Button>
</a>
    </header>
  );
};

export default Header;
