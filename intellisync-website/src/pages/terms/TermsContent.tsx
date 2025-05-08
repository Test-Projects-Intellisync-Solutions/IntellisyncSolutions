import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, AlertTriangle, HelpCircle } from "lucide-react";

const TermsContent: React.FC = () => {
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
          <FileText size={32} className="text-accent1" />
          <h1 className="text-3xl md:text-4xl font-header font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
            Terms of Service
          </h1>
        </div>

        <div className="space-y-8 font-body">
          <div className="bg-[#1a1a2e]/50 p-6 rounded-lg border border-accent1/20 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              Welcome to Intellisync Solutions. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">1. Services</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Intellisync Solutions provides AI-powered solutions and services as described on our website. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">2. Privacy and Data</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website does not use cookies, trackers, analytics scripts, fingerprinting, or any third-party monitoring. We do not collect personal information through our website.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              However, if you choose to use our services or contact us, we may collect information necessary to provide those services. Any data collected will be handled in accordance with our Privacy Policy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We implement reasonable security measures to protect any information we do collect, but no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">3. Limitations and Restrictions</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Use our services for any illegal purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to any part of our services</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of our services without express permission</li>
              <li>Use our services to transmit any malware, spyware, or other harmful code</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle size={24} className="text-accent1" />
              <h2 className="text-xl font-header font-semibold text-accent1">4. Contact Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
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

export default TermsContent;
