import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export default function Hero() {
  const words = profile.name.split("");

  return (
    <section className="story-section relative min-h-screen w-full overflow-hidden pt-24" id="hero">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="section-surface story-hero mx-auto flex max-w-5xl flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            className="heading-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight flex flex-wrap justify-center overflow-hidden"
          >
            <span className="mr-4">Hi, I'm</span>
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + idx * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={word === " " ? "w-4" : "text-gradient inline-block"}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">View My Work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              href={profile.resumeUrl}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/20 hover:bg-white/5 transition-colors"
            >
              Resume
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
