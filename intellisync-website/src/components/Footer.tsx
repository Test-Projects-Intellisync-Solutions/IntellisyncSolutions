import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] text-white py-10 px-8 border-t border-accent2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 items-center md:items-start w-full">
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row gap-2 md:gap-6 font-body text-base items-center md:items-start">
          <a href="/about" className="hover:text-accent1 transition-colors">About</a>
          <a href="/products" className="hover:text-accent1 transition-colors">Products</a>
          <a href="/pricing" className="hover:text-accent1 transition-colors">Pricing</a>
          <a href="/promo" className="hover:text-accent1 transition-colors">Promo</a>
          <a href="/gptbuilder" className="hover:text-accent1 transition-colors">GPTBuilder</a>
        </nav>
        {/* Contact Info */}
        <div className="flex flex-col gap-1 items-center md:items-start text-sm font-body">
          <span className="font-header text-lg font-bold mb-1">Intellisync Solutions</span>
          <span>Chris June</span>
          <a href="mailto:chirs.june@intellisync.ca" className="hover:text-accent1 transition-colors">chris.june@intellisync.ca</a>
          <span>Chatham-Kent Ont,</span>
        </div>
        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-end">
          <a href="#" aria-label="Facebook" className="hover:text-accent1"><Facebook size={20} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-accent1"><Twitter size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent1"><Linkedin size={20} /></a>
        </div>
      </div>
      {/* Legals */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-accent2 gap-2 border-t border-accent2 pt-4">
        <div className="flex gap-4 text-accent1">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
        </div>
        <div className="text-center md:text-right">
          &copy; {new Date().getFullYear()} Intellisync Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
