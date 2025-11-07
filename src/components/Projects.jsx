import React from 'react'
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <section id="projects" className="py-20">
      <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="text-2xl font-bold">Projects</motion.h2>
      <motion.p className="text-slate-400 mt-2 max-w-2xl" initial={{opacity:0}} whileInView={{opacity:1}}>A selection of projects showcasing web, data, and AI work. Click to view demo or documentation.</motion.p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map(p=> <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
