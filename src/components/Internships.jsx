import React from 'react'
import internships from '../data/internships.json'
import { motion } from 'framer-motion'

export default function Internships(){
  return (
    <section id="internships" className="py-20">
      <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="text-2xl font-bold">Internships</motion.h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {internships.map(i=> (
          <div key={i.id} className="glass-card p-4 rounded-md flex gap-4 items-start">
            <img loading="lazy" src={i.logo} alt={i.company} className="w-16 h-16 object-cover rounded" />
            <div>
              <div className="font-semibold">{i.role} — {i.company}</div>
              <div className="text-xs text-slate-400">{i.duration}</div>
              <p className="mt-2 text-slate-300">{i.description}</p>
              <div className="mt-3"><a href={i.certificate} target="_blank" rel="noreferrer" className="text-accent">View Certificate</a></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
