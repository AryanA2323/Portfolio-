import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import projects from '../data/projects.json'

export default function ProjectDetailPage(){
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === projectId)
  
  const [markdownContent, setMarkdownContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (project?.markdownPath) {
      // Load markdown content from the data folder
      fetch(project.markdownPath)
        .then(res => res.text())
        .then(text => {
          setMarkdownContent(text)
          setLoading(false)
        })
        .catch(err => {
          console.error('Failed to load markdown:', err)
          setMarkdownContent('Failed to load project details.')
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [project])

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-accent hover:underline">← Back to Projects</Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      className="max-w-7xl mx-auto"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate('/projects')}
        className="flex items-center gap-2 text-slate-400 hover:text-accent transition mb-6"
      >
        <FaArrowLeft /> Back to Projects
      </button>

      {/* Project Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags?.map(tag => (
            <span key={tag} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-slate-300 mb-4">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(tech => (
            <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition"
            >
              <FaGithub /> View Code
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-lg hover:scale-[1.02] transition font-semibold"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Project Video */}
      {project.videoPath && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
          <div className="glass-card p-4 rounded-lg">
            <video
              controls
              className="w-full rounded-lg"
              poster={project.thumbnail}
            >
              <source src={project.videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Markdown Content */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Project Documentation</h2>
        {loading ? (
          <div className="glass-card p-12 rounded-lg text-center">
            <div className="animate-pulse">Loading documentation...</div>
          </div>
        ) : (
          <div className="glass-card p-8 rounded-lg">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              className="prose prose-invert prose-slate max-w-none markdown-content"
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-accent" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                h4: ({node, ...props}) => <h4 className="text-lg font-semibold mt-3 mb-2 text-accent/80" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-slate-300" {...props} />,
                a: ({node, ...props}) => <a className="text-accent hover:underline" target="_blank" rel="noreferrer" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="text-slate-300" {...props} />,
                code: ({node, inline, ...props}) => 
                  inline ? 
                    <code className="bg-white/10 px-2 py-1 rounded text-sm text-accent" {...props} /> :
                    <code className="block bg-black/40 p-4 rounded overflow-x-auto text-sm" {...props} />,
                pre: ({node, ...props}) => <pre className="bg-black/40 p-4 rounded overflow-x-auto mb-4" {...props} />,
                table: ({node, ...props}) => <table className="w-full border-collapse mb-4" {...props} />,
                th: ({node, ...props}) => <th className="border border-white/20 p-2 bg-white/5 text-left" {...props} />,
                td: ({node, ...props}) => <td className="border border-white/20 p-2" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-accent pl-4 italic my-4 text-slate-400" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                em: ({node, ...props}) => <em className="italic text-slate-300" {...props} />,
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  )
}
