import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="border-t border-white/4 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="text-center md:text-left">
            <div className="font-semibold">Aryan Adhav</div>
            <div className="text-sm text-slate-400">Full Stack Developer | AI Enthusiast</div>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com/in/aryan-adhav-5633651b5" target="_blank" rel="noreferrer" className="hover:text-accent transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/AryanA2323" target="_blank" rel="noreferrer" className="hover:text-accent transition">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-slate-400 pt-4 border-t border-white/4">
          © 2025 Aryan Adhav | Built with React + Tailwind CSS + Framer Motion
        </div>
      </div>
    </footer>
  )
}
