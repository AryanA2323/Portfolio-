import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineArrowUp } from 'react-icons/hi'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{y:-40, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.6}}
      className="fixed w-full z-40 top-0 left-0 bg-black/30 backdrop-blur-md border-b border-white/3"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo - toggles menu on mobile, navigates on desktop */}
          <Link to="/" className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-black font-bold">AA</div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold">Aryan Adhav</div>
              <div className="text-xs text-slate-400">Full Stack Developer</div>
            </div>
          </Link>
          
          {/* Mobile Logo - toggles menu instead of navigating */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-black font-bold">AA</div>
          </button>
        </div>

        {/* Desktop Navigation */}
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
          <button onClick={()=>document.documentElement.classList.toggle('dark')} className="text-sm px-3 py-1 border rounded-md border-white/6 hover:border-accent/30 transition hidden sm:block">Toggle</button>
          <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="p-2 rounded-md bg-white/5 hover:bg-white/7 transition hidden sm:block">
            <HiOutlineArrowUp />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-white/5 hover:bg-white/7 transition"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/50 backdrop-blur-lg border-b border-white/3"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link)=> (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg hover:bg-white/5 transition ${
                    location.pathname === link.path 
                      ? 'text-accent font-semibold bg-white/10' 
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
