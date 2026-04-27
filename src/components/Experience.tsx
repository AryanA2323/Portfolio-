import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { internships } from '../data/portfolioData';

export default function Experience() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="story-section py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="section-surface max-w-5xl mx-auto px-6 py-10 md:px-12 md:py-12 relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-sm font-mono text-indigo-400 mb-4 tracking-widest uppercase">
            Work Experience
          </h2>
          <h3 className="heading-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Professional <span className="text-zinc-500">Journey</span>
          </h3>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6">
          {internships.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="mb-16 pl-8 md:pl-12 relative group"
            >
              <div className="absolute w-12 h-12 bg-zinc-950/80 rounded-full -left-6 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-indigo-400 group-hover:border-indigo-500/50 transition-all duration-500 z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <Briefcase size={20} />
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-zinc-400">{exp.company}</h4>
                  </div>
                  <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-6 relative z-10">{exp.description}</p>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/5 bg-zinc-900 px-3 py-1 text-xs text-zinc-300 group-hover:border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 text-sm text-zinc-400 relative z-10">
                  {exp.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-indigo-400/50 mt-1 flex-shrink-0">&bull;</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
