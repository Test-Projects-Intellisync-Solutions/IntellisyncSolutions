import React from "react";
import { motion } from "framer-motion";
import { Info, AlertCircle, ExternalLink, HelpCircle } from "lucide-react";

const DisclaimerContent: React.FC = () => {
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
          <Info size={32} className="text-accent1" />
          <h1 className="text-3xl md:text-4xl font-header font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
            Disclaimer
          </h1>
        </div>

        <div className="space-y-8 font-body">
          <div className="bg-[#1a1a2e]/50 p-6 rounded-lg border border-accent1/20 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              The information provided on this website is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">Limitation of Liability</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              In no event will Intellisync Solutions be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through this website, you may be able to link to other websites which are not under the control of Intellisync Solutions. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <ExternalLink size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">External Links and Third-Party Content</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website may contain links to external websites or references to third-party content. These links and references are provided for your convenience to provide further information.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We have no responsibility for the content of the linked websites or third-party content. We do not endorse these sites or the information, products, or services they provide.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">Contact Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this disclaimer, please contact us at:
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

export default DisclaimerContent;
