import { motion } from "framer-motion";
import { Brain, Settings, Server, Users } from "lucide-react";

const B2C_FEATURES = [
  {
    icon: Brain,
    title: "Personal AI Companions",
    desc: "Empathetic, memory-aware assistants that adapt to your life—helping with wellness, journaling, and daily decision-making.",
  },
  {
    icon: Settings,
    title: "Goal-Oriented AI Workflows",
    desc: "Whether you're planning a personal project, managing your schedule, or developing new habits—our AI helps break down tasks and drive consistent progress with adaptive nudges and structured guidance.",
  },
  {
    icon: Users,
    title: "Private Knowledge Management",
    desc: "Securely store, search, and interact with personal data like health info, travel history, or kids’ school notes—with natural AI recall.",
  },
  {
    icon: Server,
    title: "Contextual Micro-Coaching",
    desc: "Get timely nudges, reflections, and encouragement for your goals—be it fitness, mindfulness, or learning something new.",
  },
];

const B2B_FEATURES = [
  {
    icon: Server,
    title: "Custom Enterprise AI Systems",
    desc: "Design and deploy private AI agents tailored to your workflow—built with context-awareness, memory, and real-time execution.",
  },
  {
    icon: Settings,
    title: "MCP Server Infrastructure",
    desc: "Leverage our modular Model Context Protocol (MCP) servers to enable multi-agent collaboration, memory retention, and secure data handling.",
  },
  {
    icon: Users,
    title: "AI-Powered Decision Support",
    desc: "Turn raw data into smart recommendations with agents trained to surface insights, flag anomalies, and guide complex decisions.",
  },
  {
    icon: Brain,
    title: "Seamless AI + Human Collaboration",
    desc: "Empower your teams with AI co-pilots that support creativity, precision, and productivity—without sacrificing trust or control.",
  },
];

export default function AIDrivenSolutions() {
  return (
    <section className="w-full bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] py-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Our AI-Driven Solutions
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-accent1 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          We build custom AI systems for individuals and enterprises—empowering you with model training, advanced tool and function calls, and seamless MCP server integration for real-world impact.
        </motion.p>
        
        {/* Image showcase - left side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-8">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img 
                src="/assets/images/BtoC.png" 
                alt="AI-Driven Solutions" 
                className="object-cover rounded-2xl w-full h-full"
              />
            </div>
          </motion.div>
          
          <motion.div
            className="bg-black/30 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-accent2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-7 h-7 text-accent1" /> B2C Solutions
            </h2>
            <ul className="space-y-4">
              {B2C_FEATURES.map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <f.icon className="w-8 h-8 text-cta" />
                  <div className="text-left">
                    <span className="font-bold text-lg text-white">{f.title}</span>
                    <p className="text-accent1 text-base">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-10">
          <motion.div
            className="bg-black/30 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-accent2 order-2 md:order-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Server className="w-7 h-7 text-accent1" /> B2B Solutions
            </h2>
            <ul className="space-y-4">
              {B2B_FEATURES.map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <f.icon className="w-8 h-8 text-cta" />
                  <div className="text-left">
                    <span className="font-bold text-lg text-white">{f.title}</span>
                    <p className="text-accent1 text-base">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Image showcase - right side */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg order-1 md:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img 
                src="/assets/images/BtoB.png" 
                alt="Enterprise AI Solutions" 
                className="object-cover rounded-2xl w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
