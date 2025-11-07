import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import projects from '../data/projects.json'

export default function ProjectsPage(){
  return (
    <motion.div 
      initial={{opacity:0, y:20}} 
      animate={{opacity:1, y:0}} 
      className="max-w-7xl mx-auto"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Projects</h1>
        <p className="text-slate-400 max-w-3xl">
          A collection of projects showcasing my work in web development, AI/ML, and full-stack applications. 
          Click on any project to view detailed documentation and demo videos.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, idx)=> (
          <motion.div
            key={project.id}
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay: idx * 0.1}}
            className="glass-card rounded-lg overflow-hidden hover:scale-[1.01] transition-transform"
          >
            {/* Project Thumbnail */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.featured && (
                <span className="absolute top-4 right-4 bg-accent text-black px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </span>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags?.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-accent/20 text-accent rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

              {/* Description */}
              <p className="text-slate-300 mb-4 line-clamp-3">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.slice(0, 4).map(tech => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    +{project.stack.length - 4} more
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 items-center">
                <Link
                  to={`/projects/${project.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-black rounded-lg hover:scale-[1.02] transition font-semibold text-sm"
                >
                  View Details <FaArrowRight size={12} />
                </Link>
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                    title="View Code"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="glass-card p-12 rounded-lg text-center">
          <p className="text-slate-400">No projects yet. Add your projects to src/data/projects.json</p>
        </div>
      )}
    </motion.div>
  )
}
