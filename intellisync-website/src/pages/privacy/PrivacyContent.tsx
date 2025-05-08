import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyContent: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-16 px-6 text-white"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Shield size={32} className="text-accent1" />
          <h1 className="text-3xl md:text-4xl font-header font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
        </div>

        <div className="space-y-8 font-body">
          <div className="bg-[#1a1a2e]/50 p-6 rounded-lg border border-accent1/20 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Lock size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">Our Privacy Commitment</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              This site is built differently. We've deliberately chosen not to implement cookies, trackers, analytics scripts, fingerprinting, or any third-party monitoring tools. Your browsing experience is yours alone—we don't watch, measure, or record it.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What this means for you: No data collection means nothing to sell, share, or leak. Your visit leaves no digital footprint here. This isn't about compliance with privacy laws—it's about respecting human dignity in digital spaces.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Eye size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">Zero Data Collection</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Unlike most websites, we do not:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Use cookies or local storage</li>
              <li>Implement any analytics or tracking scripts</li>
              <li>Collect IP addresses or location data</li>
              <li>Use browser fingerprinting techniques</li>
              <li>Deploy third-party tracking pixels</li>
              <li>Store any personal information about your visit</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              We believe the internet works better when people aren't being surveilled. That's why we've built this site with privacy as a foundation, not an afterthought.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">Contact Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about our privacy practices, you can contact us at:
            </p>
            <p className="text-gray-300 leading-relaxed">
              Email: <a href="mailto:chris.june@intellisync.ca" className="text-accent1 hover:underline">chris.june@intellisync.ca</a>
            </p>
          </div>

          <div className="pt-8 border-t border-accent2/30">
            <p className="text-gray-400 text-sm">
              Last updated: May 8, 2025
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default PrivacyContent;
