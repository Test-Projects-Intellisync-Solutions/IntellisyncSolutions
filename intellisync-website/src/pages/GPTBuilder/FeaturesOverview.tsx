import React from "react";
import { motion } from "framer-motion";
import { Lock, Rocket, Brain, Palette, MessageCircle, Wrench, BarChart, FileText } from "lucide-react";

/**
 * FeaturesOverview Section for GPT Builder Page
 * 3-column responsive card layout, Lucide icons, feature title, description
 */
const features = [
  { icon: Lock, title: "Google/Email Sign-in", desc: "Secure, fast sign-in with Google or email account." },
  { icon: Rocket, title: "Auto-Guided Setup Flow", desc: "Step-by-step builder—no guesswork, no overwhelm." },
  { icon: Brain, title: "Multi-source Knowledge Ingestion", desc: "Combine website, PDF, and text for deep context." },
  { icon: Palette, title: "Avatar Customization", desc: "Pick your look. Make your GPT feel like yours." },
  { icon: MessageCircle, title: "Initial Prompt Design", desc: "Set the tone and behavior from the first message." },
  { icon: Wrench, title: "Self-hosted + Script Embed Deployment", desc: "Host on our link or embed in your site in seconds." },
  { icon: BarChart, title: "Real-Time Usage Insights", desc: "See who's using your GPT and how, live." },
  { icon: FileText, title: "Chat Session Logs", desc: "Review conversations and improve over time." },
];

const FeaturesOverview: React.FC = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full py-24 px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] overflow-hidden">
      {/* Subtle full-page background image */}
      <img
        src="/assets/images/homeFeatures.png"
        alt="Features Flow Background"
        className="fixed inset-0 w-full h-full object-cover opacity-30 blur-2xl pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      {/* SVG Wave Top Divider */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none select-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path fill="#1a1a2e" fillOpacity="0.75" d="M0,80 C360,160 1080,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-30">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Everything You Need to Build Your GPT
        </motion.h2>
        {/* Infinite auto-scrolling carousel */}
        <div
          className="relative w-full overflow-x-hidden overflow-y-hidden pb-8"
        >
          <style>{`
            @keyframes carousel {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-carousel {
              animation: carousel 30s linear infinite;
            }
          `}</style>
          <div
            ref={carouselRef}
            className="flex gap-8 animate-carousel group flex-nowrap hover:[animation-play-state:paused]"
            style={{ minWidth: '2000px' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.animationPlayState = 'running'; }}
          >
            {Array(2).fill(features).flat().map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title + '-' + index}
                className="min-w-[260px] max-w-xs flex-shrink-0 flex flex-col items-center bg-black/40 rounded-3xl p-7 shadow-2xl backdrop-blur-xl border-2 border-accent1/60 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + (index % features.length) * 0.1, ease: 'easeOut' }}
              >
                <span className="mb-5">
                  <Icon className="w-10 h-10 text-[#C6A76D] drop-shadow-lg" />
                </span>
                <h3 className="font-bold text-lg md:text-xl text-white mb-2">{title}</h3>
                <p className="text-accent1 text-center text-base md:text-lg">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* SVG Wave Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none select-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path fill="#1a1a2e" fillOpacity="0.75" d="M0,40 C360,120 1080,0 1440,40 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};


export default FeaturesOverview;
