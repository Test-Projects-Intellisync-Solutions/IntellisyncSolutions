
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.04 },
  tap: { scale: 0.98 }
};

export default function CustomCTA() {
  return (
    <section
      className="w-full py-24 px-4 md:px-0 bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] flex items-center justify-center relative"
      aria-label="Call to Action"
    >
      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left: Text & Buttons */}
        <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-2 drop-shadow-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Unleash Your Future with AI
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl text-accent1 mb-4 max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            Build custom AI systems for personal and business use. From training cutting-edge models to integrating them into the digital world, we make AI work for you. Let’s create something legendary together.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
            <motion.a
              href="/waitlist"
              tabIndex={0}
              className="bg-transparent"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              style={{ display: "inline-block" }}
            >
              <Button className="bg-accent1 text-[#232946] font-bold hover:bg-accent1/90 px-10 py-6 text-2xl rounded-full shadow-lg">
                Join Early Access
              </Button>
            </motion.a>
            <motion.a
              href="/about"
              tabIndex={0}
              className="bg-transparent"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              style={{ display: "inline-block" }}
            >
              <Button className="bg-accent1 text-[#232946] font-bold hover:bg-accent1/90 px-10 py-6 text-2xl rounded-full shadow-lg">
                Learn More
              </Button>
            </motion.a>
          </div>
        </div>
        {/* Right: Image */}
        <motion.div
          className="flex justify-center md:justify-end items-center relative"
          initial={{ opacity: 0, scale: 0.95, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div>
            <img
              src="/assets/images/CTA.png"
              alt="AI Transformation Illustration"
              className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-3xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );

}
