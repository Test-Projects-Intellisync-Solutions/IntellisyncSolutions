import { ShieldCheck, Sparkles, Layers, Zap} from "lucide-react";
import { motion } from "framer-motion";
// import "./inner-glow.css"; Not sure I like this effect

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

        {/* Hub and Spoke Animated Image Layout */}
        <div className="relative flex justify-center items-center min-h-[420px] mt-12">

            {/* Spoke 1 */}
            <motion.line
              x1="200" y1="200" x2="104" y2="104"
              stroke="#7B61FF" strokeWidth="4" strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
              filter="url(#glow)"
            />
            <motion.line
              x1="200" y1="200" x2="344" y2="104"
              stroke="#7B61FF" strokeWidth="4" strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.2 }}
              filter="url(#glow)"
            />
            <motion.line
              x1="200" y1="200" x2="164" y2="364"
              stroke="#7B61FF" strokeWidth="4" strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.4 }}
              filter="url(#glow)"
            />
            <motion.line
              x1="200" y1="200" x2="304" y2="364"
              stroke="#7B61FF" strokeWidth="4" strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.6 }}
              filter="url(#glow)"
            />
            <motion.line
              x1="200" y1="200" x2="184" y2="144"
              stroke="#7B61FF" strokeWidth="4" strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.8 }}
              filter="url(#glow)"
            />
            {/* Spoke 2 */}
            <motion.line
              x1="200" y1="200" x2="280" y2="40"
              stroke="#7B61FF" strokeWidth="4" strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.3 }}
              filter="url(#glow)"
            />
            {/* Spoke 3 */}
            <motion.line
              x1="200" y1="200" x2="100" y2="300"
              stroke="#7B61FF" strokeWidth="4" strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.6 }}
              filter="url(#glow)"
            />
            {/* Spoke 4 */}
            <motion.line
              x1="200" y1="200" x2="240" y2="300"
              stroke="#7B61FF" strokeWidth="4" strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.9 }}
              filter="url(#glow)"
            />
            {/* Spoke 5 */}
            <motion.line
              x1="200" y1="200" x2="120" y2="80"
              stroke="#7B61FF" strokeWidth="4" strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1.2 }}
              filter="url(#glow)"
            />

          {/* Central Image */}
          <img 
            src="/assets/images/Value.png" 
            alt="Value Proposition Illustration" 
            className="z-10 max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-xl object-contain"
            style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          />
          {/* Spoke Images */}
          <motion.img
            src="/assets/images/spoke1.png"
            alt="Spoke 1"
            className="w-64 h-64 object-contain rounded-xl absolute z-20 inner-glow p-2"
            style={{ left: '5%', top: '10%' }}
            initial={{ opacity: .5, scale: 1.5 }}
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity }}
            whileHover={{ scale: 1.5 }}
          />
          <motion.img
            src="/assets/images/spoke2.png"
            alt="Spoke 2"
            className="w-64 h-64 object-contain rounded-xl absolute z-20 inner-glow p-2"
            style={{ left: '70%', top: '-10%' }}
            initial={{ opacity: .5, scale: 1.5 }}
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.3 }}
            whileHover={{ scale: 1.5 }}
          />
          <motion.img
            src="/assets/images/spoke3.png"
            alt="Spoke 3"
            className="w-64 h-64 object-contain rounded-xl absolute z-20 inner-glow p-2"
            style={{ left: '25%', top: '85%' }}
            initial={{ opacity: .5, scale: 1.5 }}
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.6 }}
            whileHover={{ scale: 1.5 }}
          />
          <motion.img
            src="/assets/images/spoke4.png"
            alt="Spoke 4"
            className="w-64 h-64 object-contain rounded-xl absolute z-20 inner-glow p-2"
            style={{ left: '60%', top: '75%' }}
            initial={{ opacity: .5, scale: 1.5 }}
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.4 }}
            whileHover={{ scale: 1.5 }}
          />
          <motion.img
            src="/assets/images/spoke5.png"
            alt="Spoke 5"
            className="w-64 h-64 object-contain rounded-xl absolute z-20 inner-glow p-2"
            style={{ left: '25%', top: '-22%' }}
            initial={{ opacity: .5, scale: 1.5 }}
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.8 }}
            whileHover={{ scale: 1.5 }}
          />
        </div>

    </section>
  );
}
