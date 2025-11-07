import React from 'react'
import { motion } from 'framer-motion'
import internships from '../data/internships.json'

export default function InternshipsPage(){
  return (
    <motion.div 
      initial={{opacity:0, y:20}} 
      animate={{opacity:1, y:0}} 
      className="max-w-6xl mx-auto"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Internships & Experience</h1>
        <p className="text-slate-400 max-w-3xl">
          Professional experience and internships that have shaped my development career.
        </p>
      </div>

      <div className="space-y-6">
        {internships.map((intern, idx)=> (
          <motion.div 
            key={intern.id} 
            initial={{opacity:0, x:-20}} 
            animate={{opacity:1, x:0}} 
            transition={{delay: idx * 0.1}}
            className="glass-card p-6 rounded-lg"
          >
            <div className="flex gap-6 items-start">
              <img 
                loading="lazy" 
                src={intern.logo} 
                alt={intern.company} 
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0" 
              />
              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                  <div>
                    <h2 className="text-2xl font-bold">{intern.role}</h2>
                    <p className="text-accent text-lg">{intern.company}</p>
                  </div>
                  <span className="text-sm text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                    {intern.duration}
                  </span>
                </div>
                
                <p className="text-slate-300 mb-4">{intern.description}</p>
                
                {intern.responsibilities && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                      {intern.responsibilities?.map((resp, i)=> (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {intern.technologies && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {intern.technologies.map(tech=> (
                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <a 
                    href={intern.certificate} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-accent hover:underline"
                  >
                    <span>View Certificate</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {internships.length === 0 && (
          <div className="glass-card p-12 rounded-lg text-center">
            <p className="text-slate-400">No internships yet. Add your experience to src/data/internships.json</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
