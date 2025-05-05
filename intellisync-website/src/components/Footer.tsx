import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] text-white py-10 px-8 border-t border-accent2">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <nav className="flex gap-6 font-body text-base justify-center">
          <a href="/about" className="hover:text-accent1 transition-colors">About</a>
          <a href="/products" className="hover:text-accent1 transition-colors">Products</a>
          <a href="/pricing" className="hover:text-accent1 transition-colors">Pricing</a>
          <a href="/promo" className="hover:text-accent1 transition-colors">Promo</a>
          <a href="/gptbuilder" className="hover:text-accent1 transition-colors">GPTBuilder</a>
        </nav>
        <div className="flex gap-4 justify-center">
          <a href="#" aria-label="Facebook" className="hover:text-accent1"><Facebook size={20} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-accent1"><Twitter size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent1"><Linkedin size={20} /></a>
        </div>
        <div className="flex flex-col gap-1 items-center mt-2">
          {/* <img src="/assets/logo.png" alt="Intellisync Logo" className="h-8 w-auto mb-2" /> */}
          <span className="font-header text-lg font-bold">Intellisync Solutions</span>
          <span className="font-body text-sm">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
