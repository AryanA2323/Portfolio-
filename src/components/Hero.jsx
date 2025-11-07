import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.7}}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Aryan Adhav
            <span className="block text-accent text-2xl mt-2">Full Stack Developer | AI Enthusiast</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-xl">I build sleek, modern web apps with a focus on performance and delightful UX. Currently exploring AI-powered features and video summarization tools.</p>
          <div className="mt-6 flex gap-4">
            <button onClick={()=>document.getElementById('projects').scrollIntoView({behavior:'smooth'})} className="px-6 py-3 rounded-md bg-accent text-black font-semibold shadow-lg hover:scale-[1.01] transition">
              View My Projects
            </button>
            <a className="px-6 py-3 rounded-md border border-white/6 text-sm" href="#about">Learn More</a>
          </div>
        </motion.div>
        <motion.div initial={{x:30, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.7}} className="relative">
          <div className="w-full h-64 md:h-80 glass-card rounded-xl flex items-center justify-center animated-gradient">
            <div className="text-center">
              <div className="text-slate-400">[Animated background placeholder]</div>
              <div className="mt-4 text-sm text-slate-300">Replace with particles or a video later</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
