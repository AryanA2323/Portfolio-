import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineArrowUp } from 'react-icons/hi'
import { motion } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/internships', label: 'Internships' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/contact', label: 'Contact' }
]

export default function Navbar(){
  const location = useLocation()

  return (
    <motion.header
      initial={{y:-40, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.6}}
      className="fixed w-full z-40 top-0 left-0 bg-black/30 backdrop-blur-md border-b border-white/3"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-black font-bold">AA</div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">Aryan Adhav</div>
            <div className="text-xs text-slate-400">Full Stack Developer</div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          {navLinks.map((link)=> (
            <Link 
              key={link.path} 
              to={link.path}
              className={`hover:text-accent transition ${location.pathname === link.path ? 'text-accent font-semibold' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={()=>document.documentElement.classList.toggle('dark')} className="text-sm px-3 py-1 border rounded-md border-white/6 hover:border-accent/30 transition">Toggle</button>
          <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="p-2 rounded-md bg-white/5 hover:bg-white/7 transition">
            <HiOutlineArrowUp />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
