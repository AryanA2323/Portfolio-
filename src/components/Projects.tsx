import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useRef } from 'react';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" ref={containerRef} className="story-section py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="section-surface px-6 py-10 md:px-10 md:py-12">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-sm font-mono text-indigo-400 mb-4 tracking-widest uppercase">
              Portfolio
            </h2>
            <h3 className="heading-display text-4xl md:text-6xl font-bold text-white tracking-tight">
              Featured <span className="text-zinc-500">Projects</span>
            </h3>
          </div>
          <p className="text-zinc-400 text-lg max-w-md">
            A collection of projects showcasing my skills in full-stack development, UI/UX design, and AI integration.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-3/5 relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 aspect-[4/3] sm:aspect-video">
                  <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                  <motion.img
                    style={{ y }}
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[120%] object-cover -mt-[10%] opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  {/* Floating badge */}
                  {project.featured && (
                    <div className="absolute top-6 left-6 z-20 bg-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-900 rounded-full border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium text-zinc-500 bg-zinc-900/50 rounded-full border border-white/5">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6">
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-indigo-50 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors font-medium"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
