import React from 'react';
import { AnimatedTabsHover } from './AnimatedTabsHover';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] shadow-md flex items-center justify-between px-8 py-4 text-white">
      <div className="flex items-center gap-4">
        {/* Logo Placeholder */}
        <img src="/assets/logo.png" alt="Intellisync Logo" className="h-10 w-auto" />
        <span className="text-2xl font-header font-bold text-surface">Intellisync Solutions</span>
      </div>
      <div className="flex flex-1 justify-center">
        <AnimatedTabsHover />
      </div>
      <a href="/contact" className="ml-8 transition-transform hover:scale-105 duration-300">
        <img src="/assets/images/ContactButton.png" alt="Contact Us" className="h-16 w-20" />
      </a>
    </header>
  );
};

export default Header;
