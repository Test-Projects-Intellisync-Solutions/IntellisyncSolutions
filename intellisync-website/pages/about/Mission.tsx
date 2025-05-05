import { motion } from "framer-motion";

const missionImages = [
  "/assets/images/MissionOne.png",
  "/assets/images/MissionTwo.png",
  "/assets/images/MissionThree.png",
];

export default function Mission() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] py-20 px-4 md:px-0 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Images cluster - creative non-overlapping layout */}
        <div className="relative flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-center">
          <motion.div
            className="col-span-1 transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src={missionImages[0]}
              alt="Mission One"
              className="w-full max-w-[180px] h-auto object-cover rounded-3xl  shadow-2xl rotate-3"
            />
          </motion.div>
          
          <motion.div
            className="col-span-1 mt-8 md:mt-0 transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <img
              src={missionImages[1]}
              alt="Mission Two"
              className="w-full max-w-[180px] h-auto object-cover rounded-2xl shadow-xl -rotate-3"
            />
          </motion.div>
          
          <motion.div
            className="col-span-1 mt-4 md:mt-12 transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            <img
              src={missionImages[2]}
              alt="Mission Three"
              className="w-full max-w-[180px] h-auto object-cover shadow-lg rotate-2"
            />
          </motion.div>
        </div>
        {/* Content card */}
        <motion.div
          className="flex-1 bg-black/30 rounded-3xl p-10 shadow-2xl backdrop-blur-md border border-accent2 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Our Mission
          </h1>
          <p className="text-lg md:text-2xl text-accent1 max-w-2xl mb-4">
            Intellisync Solutions builds advanced AI systems for personal and business use. We are committed to innovation, custom AI model training, advanced tool and function call integration, and building custom MCP servers that empower AI to interact with the real digital world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
