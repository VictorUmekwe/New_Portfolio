import { motion } from "framer-motion";
import { Hand, Send } from "lucide-react";
import HeroImg from "../assets/vic.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden px-4"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-700/40 via-purple-600/40 to-indigo-800/40 animate-gradient rounded-lg blur-xl"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}
      />

      <motion.div
        className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between bg-gray-900/80 rounded-lg shadow-2xl shadow-indigo-500/40 p-8 gap-8 backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Left Section */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-2">
            <Hand className="text-indigo-400 w-8 h-8 animate-waving-hand opacity-80" />
            Hey, I'm <br />
            <span className="text-indigo-400">Victor Umekwe</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-2">
            Fullstack Developer passionate about crafting purposeful and
            creative digital experiences.
          </p>
          <p className="text-sm text-gray-400 italic mb-6">
            “Building bridges between ideas and reality, one line of code at a
            time.”
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 cursor-pointer text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
            <Send className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src={HeroImg}
            alt="Portrait of Victor Umekwe"
            className="rounded-full w-48 h-48 object-cover shadow-lg ring-2 ring-indigo-400"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </motion.div>

      {/* Keyframes */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
        }
        .animate-waving-hand {
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-10deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
