import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function Contact() {
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

  return (
    <section id="contact" className="story-section py-24 md:py-32 relative overflow-hidden border-t border-white/5">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-surface max-w-7xl mx-auto px-6 py-10 md:px-12 md:py-12 relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-indigo-400 mb-4 tracking-widest uppercase">
            Contact
          </h2>
          <h3 className="heading-display text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Let's <span className="text-zinc-500">Connect</span>
          </h3>
          <p className="text-zinc-400 text-lg">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info (Left) */}
          <div className="space-y-12">
            {[
              { icon: Mail, title: "Email", desc: "Drop me a line anytime.", action: <a href={`mailto:${profile.email}`} className="text-white hover:text-indigo-400 transition-colors font-medium text-lg">{profile.email}</a> },
              { icon: MapPin, title: "Location", desc: `Based in ${profile.location}.`, action: <span className="text-zinc-400">Available for remote work worldwide.</span> },
            ].map((info, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all duration-300">
                  <info.icon size={28} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                  <p className="text-zinc-500 mb-2">{info.desc}</p>
                  {info.action}
                </div>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="flex items-start gap-6 group">
              <div className="w-16 h-16 rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all duration-300">
                <Github size={28} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Profiles</h4>
                <p className="text-zinc-500 mb-4">Explore my open-source work and network.</p>
                <div className="flex flex-wrap items-center gap-6">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors font-medium">
                    <Github size={18} />
                    GitHub
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors font-medium">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action Card (Right) */}
          <motion.div variants={itemVariants} className="relative h-full flex flex-col justify-center">
            <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Looking for a <span className="text-indigo-400">Developer?</span></h3>
                <p className="text-zinc-400 leading-relaxed text-lg mb-10">
                  I am open to internships, freelance work, and full-time opportunities where I can contribute across frontend, backend, and AI-powered feature development. Let's build something meaningful together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                  >
                    Send an Email
                  </a>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-zinc-800 text-white font-semibold rounded-full hover:bg-zinc-700 transition-colors border border-white/5"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
