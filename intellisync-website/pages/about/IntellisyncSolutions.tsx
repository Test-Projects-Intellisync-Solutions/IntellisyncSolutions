import { motion } from "framer-motion";
import { Star, Zap, CheckCircle, Server } from "lucide-react";

const SOLUTIONS = [
  {
    icon: Star,
    title: "Innovation & Customization",
    desc: "Custom AI solutions tailored for individuals and enterprises—no generic models, only what you need.",
    img: "/assets/images/InnovationCustomization.png",
  },
  {
    icon: Zap,
    title: "End-to-End Expertise",
    desc: "From AI model training to real-world deployment via MCP servers, we cover the full spectrum.",
    img: "/assets/images/EndtoEnd.png",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    desc: "50 successful AI deployments. Trusted by industry leaders and innovators worldwide.",
    img: "/assets/images/TrackRecord.png",
  },
  {
    icon: Server,
    title: "Seamless Integration",
    desc: "Our AI solutions integrate effortlessly with your existing systems, automating tasks and boosting efficiency.",
    img: "/assets/images/Seamless.png",
  },
];

export default function IntellisyncSolutions() {
  return (
    <section className="w-full bg-gradient-to-br from-[#232946] via-[#1a1a2e] to-[#090d1f] py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-accent1 via-cta to-white bg-clip-text text-transparent mb-10 drop-shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Why Intellisync Solutions?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {SOLUTIONS.map((solution, idx) => (
            <motion.div
              key={solution.title}
              className="flex flex-col items-center bg-black/30 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-accent2 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 + idx * 0.1, ease: 'easeOut' }}
            >
              <solution.icon className="w-10 h-10 mb-3 text-accent1" />
              <span className="font-header text-lg font-bold text-white mb-1">{solution.title}</span>
              <span className="text-accent1 font-body text-base mb-4">{solution.desc}</span>
              <motion.img
                src={solution.img}
                alt={solution.title}
                className="w-full h-48 object-contain rounded-xl shadow-md mt-4"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
