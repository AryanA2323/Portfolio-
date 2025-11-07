import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectCard({project}){
  const [openDocs, setOpenDocs] = useState(false)
  const [play, setPlay] = useState(false)

  return (
    <motion.div layout className="glass-card p-4 rounded-lg">
      <div className="md:flex gap-4">
        <div className="md:w-48 w-full">
          <img loading="lazy" src={project.thumbnail} alt={project.title} className="w-full h-36 object-cover rounded" />
        </div>
        <div className="flex-1 mt-3 md:mt-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="text-sm text-slate-400 mt-1">{project.stack.join(' • ')}</div>
            </div>
            <div className="flex gap-2">
              <a href={project.live} target="_blank" rel="noreferrer" className="px-3 py-1 bg-accent text-black rounded text-sm">View Live</a>
              <a href={project.github} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded text-sm">GitHub</a>
            </div>
          </div>

          <p className="mt-3 text-slate-300">{project.description}</p>

          <div className="mt-4">
            {!play ? (
              <div className="relative">
                <img loading="lazy" src={project.videoThumbnail} alt="video-thumb" className="w-full h-48 object-cover rounded" />
                <button onClick={()=>setPlay(true)} className="absolute inset-0 m-auto w-20 h-10 bg-accent text-black rounded">Play Demo</button>
              </div>
            ) : (
              <div className="w-full h-64">
                <iframe className="w-full h-full rounded" src={project.demo} title="demo" frameBorder="0" allowFullScreen loading="lazy"></iframe>
              </div>
            )}
          </div>

          <div className="mt-3">
            <button onClick={()=>setOpenDocs(!openDocs)} className="text-sm text-accent">{openDocs? 'Hide Docs' : 'Show Docs'}</button>
            <AnimatePresence>
              {openDocs && (
                <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} className="mt-2 p-3 bg-black/40 rounded">
                  <div className="prose prose-invert text-sm">
                    <div dangerouslySetInnerHTML={{__html: project.docsMd}} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
