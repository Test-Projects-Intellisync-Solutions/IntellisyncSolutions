import { motion } from "framer-motion";
import { Rocket, Code, Wrench, Clock } from "lucide-react";
// Use public URL for GPTBuilderHero image

// Example data - replace or extend as needed
const CURRENT_PROJECTS = [
  {
    icon: Rocket,
    name: "Intellisync GPT Builder",
    desc: "A powerful AI assistant for business use cases, available on web and mobile.",
    image: "/assets/images/GPTBuilderHero.png",
  },
  {
    icon: Code,
    name: "Custom Integrations",
    desc: "Seamless integration of AI with your existing digital infrastructure and tools.",
    image: "/assets/images/integrations.png",
  },
];

const INPROGRESS_PROJECTS = [
  {
    icon: Wrench,
    name: "AI Document Analyzer",
    desc: "Automated document analysis and summarization platform, launching soon.",
    image: "/assets/images/doc-analyzer.png",
  },
  {
    icon: Clock,
    name: "Financial Insights Engine",
    desc: "Next-gen financial data analysis and reporting, currently in development.",
    image: "/assets/images/finance-engine.png",
  },
];

export default function Products() {
  return (
    <section className="w-full bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] py-20 px-4 md:px-0 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-12 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Our Products & Services
        </motion.h1>
        {/* Current Projects */}
        <div className="mb-20">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-tr from-accent1 via-cta to-white bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Current Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CURRENT_PROJECTS.map((proj) => (
              <motion.div
                key={proj.name}
                className="flex flex-col md:flex-row items-center bg-black/30 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-accent2 gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center bg-accent1/10 rounded-xl overflow-hidden mb-4 md:mb-0">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.name} className="object-contain w-full h-full" />
                  ) : (
                    <proj.icon className="w-16 h-16 text-cta" />
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                  <p className="text-accent1 text-base">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* In Progress Projects */}
        <div>
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            In Progress
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {INPROGRESS_PROJECTS.map((proj) => (
              <motion.div
                key={proj.name}
                className="flex flex-col md:flex-row items-center bg-black/20 rounded-2xl p-8 shadow-md backdrop-blur-md border border-accent2 gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center bg-accent1/10 rounded-xl overflow-hidden mb-4 md:mb-0">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.name} className="object-contain w-full h-full" />
                  ) : (
                    <proj.icon className="w-16 h-16 text-cta" />
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                  <p className="text-accent1 text-base">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
