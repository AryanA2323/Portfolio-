import React from 'react'
import { motion } from 'framer-motion'

const skills = ['React','Node.js','MongoDB','Firebase','Java','Python','Tailwind','TypeScript']

export default function About(){
  return (
    <section id="about" className="py-20">
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="w-48 h-48 bg-white/3 rounded-full flex items-center justify-center text-2xl font-bold">Photo</div>
          <h3 className="mt-4 text-xl font-semibold">About Me</h3>
          <p className="mt-2 text-slate-300">I am a developer passionate about building performant and accessible web applications. I enjoy working across the stack and exploring AI tooling.</p>
        </div>
        <div className="md:col-span-2">
          <div>
            <h4 className="text-lg font-semibold">Skills</h4>
            <div className="mt-3 flex flex-wrap gap-3">
              {skills.map(s=> (
                <div key={s} className="px-3 py-1 rounded-full bg-white/3 text-sm">{s}</div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold">Education & Experience</h4>
            <div className="mt-3 space-y-4">
              <div className="glass-card p-4 rounded-md">
                <div className="text-sm font-semibold">B.Tech in Computer Science</div>
                <div className="text-xs text-slate-400">University XYZ — 2020 - 2024</div>
              </div>
              <div className="glass-card p-4 rounded-md">
                <div className="text-sm font-semibold">Web Developer Intern — ABC Technologies</div>
                <div className="text-xs text-slate-400">June 2023 - Aug 2023</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
