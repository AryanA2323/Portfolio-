import { motion } from 'framer-motion';
import { GraduationCap, Code2, Database, Brain, Cloud } from 'lucide-react';
import { education, profile, skillGroups } from '../data/portfolioData';

export default function About() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const icons = [Code2, Database, Brain, Cloud];

  return (
    <section id="about" className="story-section py-24 md:py-32 relative overflow-hidden">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-surface max-w-7xl mx-auto px-6 py-10 md:px-12 md:py-12 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left Column: Intro & Education */}
          <div className="space-y-12">
            <div>
              <motion.h2 variants={itemVariants} className="text-sm font-mono text-indigo-400 mb-4 tracking-widest uppercase">
                Hello! I'm {profile.name}.
              </motion.h2>
              <motion.h3 variants={itemVariants} className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                A Creative <br />
                <span className="text-zinc-500">Full-Stack Engineer</span>
              </motion.h3>
              <motion.p variants={itemVariants} className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                {profile.about}
              </motion.p>
              <motion.p variants={itemVariants} className="text-zinc-400 text-lg leading-relaxed max-w-xl mt-4">
                I build with a product mindset: clean architecture, practical AI integration, and responsive interfaces that are simple to use under real-world constraints.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="pt-8 border-t border-white/5">
              <h4 className="flex items-center gap-3 text-white text-xl font-semibold mb-6">
                <GraduationCap className="text-indigo-400" />
                Education
              </h4>
              <div className="space-y-6">
                {education.map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute -inset-4 bg-zinc-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                      <h5 className="text-white font-medium text-lg">{item.degree}</h5>
                      <span className="text-sm font-mono text-indigo-400/80">{item.duration}</span>
                    </div>
                    <p className="relative text-zinc-400 mt-2">{item.institute}</p>
                    <p className="relative text-zinc-500 text-sm mt-1">{item.score}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills / What I Use */}
          <div>
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-sm font-mono text-indigo-400 mb-4 tracking-widest uppercase">
                What I Use
              </h2>
              <h3 className="heading-display text-3xl font-bold text-white">
                Technical Arsenal
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillGroups.map((group, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <motion.div
                    key={group.title}
                    variants={itemVariants}
                    className="relative group p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Icon className="text-indigo-400 mb-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" size={32} />
                    <h4 className="text-xl font-semibold text-white mb-4 relative z-10">{group.title}</h4>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-full bg-zinc-800/50 text-xs text-zinc-300 border border-white/5 group-hover:border-white/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
