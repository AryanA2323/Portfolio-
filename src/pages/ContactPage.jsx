import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactPage(){
  return (
    <motion.div 
      initial={{opacity:0, y:20}} 
      animate={{opacity:1, y:0}} 
      className="max-w-6xl mx-auto"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Get In Touch</h1>
        <p className="text-slate-400 max-w-3xl">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Contact Info */}
        <div className="glass-card p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-accent mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-slate-400">Email</div>
                <a href="mailto:aryanadhav00@gmail.com" className="hover:text-accent transition">
                  aryanadhav00@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-slate-400">Location</div>
                <span>Kharadi, Pune</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="glass-card p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
          <div className="space-y-3">
            <a 
              href="https://www.linkedin.com/in/aryan-adhav-5633651b5" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition"
            >
              <FaLinkedin className="text-2xl text-accent" />
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-xs text-slate-400">Connect with me</div>
              </div>
            </a>
            <a 
              href="https://github.com/AryanA2323" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition"
            >
              <FaGithub className="text-2xl text-accent" />
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="text-xs text-slate-400">@AryanA2323</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
