import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data/portfolioData';

export default function Certificates() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="certificates" className="story-section py-24 md:py-28 relative overflow-hidden">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-surface max-w-7xl mx-auto px-6 py-10 md:px-12 md:py-12 relative z-10"
      >
        <motion.div variants={cardVariants} className="mb-16">
          <h2 className="text-sm font-mono text-indigo-400 mb-4 tracking-widest uppercase">
            Achievements
          </h2>
          <h3 className="heading-display text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h3>
          <p className="text-zinc-400 max-w-2xl">
            Verified milestones from competitive hackathons and specialized training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              className="group relative rounded-3xl bg-zinc-900/40 border border-white/5 p-8 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300 border border-white/5">
                    <Award size={14} className="text-indigo-400" />
                    {item.platform}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono mt-1">{item.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400 mb-8 flex-grow">{item.description}</p>

                <a
                  href={item.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors group/link mt-auto w-fit"
                >
                  <span className="relative">
                    View Certificate
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <ExternalLink size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
