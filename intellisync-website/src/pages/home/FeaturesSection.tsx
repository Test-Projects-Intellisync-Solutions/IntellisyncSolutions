
import { Brain, Settings, Server, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <img 
          src="/assets/images/homeFeatures.png" 
          alt="AI Features Illustration" 
          className="mx-auto mb-10 max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-xl"
        />
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Powerful AI Solutions, Tailored for You
        </motion.h2>
        <p className="text-lg md:text-xl text-accent1 mb-10 max-w-2xl">
          Intellisync Solutions delivers next-gen AI systems for individuals and enterprises—custom-trained, deeply integrated, and ready to perform real-world tasks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* AI Model Training */}
          <div className="flex items-start gap-4">
            <span className="bg-cta/10 rounded-full p-3">
              <Brain className="w-8 h-8 text-accent1" />
            </span>
            <div className="text-left">
              <h3 className="font-bold text-xl text-white">AI Model Training</h3>
              <p className="text-accent1">We build and train custom AI models tailored to your unique needs—empowering you with intelligent solutions that adapt and evolve.</p>
            </div>
          </div>
          {/* Advanced Tool & Function Calls */}
          <div className="flex items-start gap-4">
            <span className="bg-accent1/10 rounded-full p-3">
              <Settings className="w-8 h-8 text-accent1" />
            </span>
            <div className="text-left">
              <h3 className="font-bold text-xl text-white">Advanced Tool & Function Calls</h3>
              <p className="text-accent1">Our AI leverages sophisticated tool and function calls to create dynamic, responsive systems that can solve complex challenges in real time.</p>
            </div>
          </div>
          {/* Custom MCP Servers */}
          <div className="flex items-start gap-4">
            <span className="bg-accent2/10 rounded-full p-3">
              <Server className="w-8 h-8 text-accent1" />
            </span>
            <div className="text-left">
              <h3 className="font-bold text-xl text-white">Custom MCP Servers</h3>
              <p className="text-accent1">We develop custom MCP servers that enable our AI to interact with the digital world—performing tasks and assignments seamlessly and securely.</p>
            </div>
          </div>
          {/* Personal & Business Use */}
          <div className="flex items-start gap-4">
            <span className="bg-primary/10 rounded-full p-3">
              <Users className="w-8 h-8 text-accent1" />
            </span>
            <div className="text-left">
              <h3 className="font-bold text-xl text-white">Personal & Business Use</h3>
              <p className="text-accent1">Our solutions are designed for everyone—from individuals looking to boost productivity to enterprises seeking a competitive edge.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
