import { ShieldCheck, Sparkles, Layers, Zap} from "lucide-react";
import { motion } from "framer-motion";

export default function ValuePropositionSection() {
  return (
    <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
       
        {/* Main Content */}
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-accent1 via-cta to-white bg-clip-text text-transparent mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Your Ultimate AI Partner
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-8 mt-2">
          {/* Innovation & Customization */}
          <div className="flex items-start gap-4">
            <Sparkles className="w-8 h-8 text-cta" />
            <div className="text-left">
              <h3 className="font-bold text-xl text-white">Innovation & Customization</h3>
              <p className="text-accent1">We deliver custom AI systems, meticulously tailored to your needs—no one-size-fits-all solutions here.</p>
            </div>
          </div>

          {/* End-to-End Solutions */}
          <div className="flex items-start gap-4">
            <Layers className="w-8 h-8 text-cta" />
            <div className="text-left">
              <h3 className="font-bold text-xl text-white">End-to-End Solutions</h3>
              <p className="text-accent1">From training cutting-edge AI models to integrating them with your digital world, we handle every step—seamlessly.</p>
            </div>
          </div>
          
          {/* Seamless Integration */}
          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 text-cta" />
            <div className="text-left">
              <h3 className="font-bold text-xl text-white">Seamless Integration</h3>
              <p className="text-accent1">Our AI systems work effortlessly with your existing digital infrastructure, automating tasks and boosting efficiency in real time.</p>
            </div>
          </div>

          {/* Trust & Reliability */}
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-cta" />
            <div className="text-left">
              <h3 className="font-bold text-xl text-white">Trust & Reliability</h3>
              <p className="text-accent1">Our commitment to quality, security, and ongoing support makes us the partner you can rely on for all your AI needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Bottom Image */}
        <div className="w-full flex justify-center mt-12">
          <img 
            src="/assets/images/Value.png" 
            alt="Value Proposition Illustration" 
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-xl object-contain"
          />
        </div>
     
    </section>
  );
}
