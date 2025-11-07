import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaFileAlt } from 'react-icons/fa'

export default function AboutPage(){
  return (
    <motion.div 
      initial={{opacity:0, y:20}} 
      animate={{opacity:1, y:0}} 
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="md:col-span-1">
          <div className="glass-card p-6 rounded-lg sticky top-24">
            <div className="w-48 h-48 mx-auto bg-white/5 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              Photo
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">Aryan Adhav</h2>
            <p className="text-center text-accent mb-4">Full Stack Developer</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Location:</span>
                <span>Kharadi, Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Email:</span>
                <span>aryanadhav00@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:col-span-2 space-y-8">
          {/* Bio */}
          <section className="glass-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">My Story</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Hello! I'm Aryan, a passionate Full Stack Developer with a keen interest in building 
                innovative web applications that solve real-world problems. My journey in tech began 
                during my undergraduate studies, where I discovered my love for coding and creating 
                digital experiences.
              </p>
              <p>
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have experience 
                working with modern tools and frameworks. I'm particularly interested in AI/ML integration, 
                performance optimization, and creating intuitive user interfaces.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or working on personal projects that push the boundaries of what's possible on the web.
              </p>
            </div>
          </section>

          {/* Interests & Hobbies */}
          <section className="glass-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Interests & Hobbies</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold text-accent mb-2">💻 Tech Interests</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• AI & Machine Learning</li>
                  <li>• Web3 & Blockchain</li>
                  <li>• Cloud Computing</li>
                  <li>• UI/UX Design</li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold text-accent mb-2">🎯 Hobbies</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Reading Tech Blogs</li>
                  <li>• Problem Solving</li>
                  <li>• Photography</li>
                  <li>• Gaming</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Career Goals */}
          <section className="glass-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Career Goals</h2>
            <div className="space-y-3 text-slate-300">
              <div className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <p>Become a proficient full-stack engineer working on impactful products</p>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <p>Contribute to open-source projects and give back to the developer community</p>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <p>Master AI/ML integration in web applications</p>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <p>Build products that make a positive impact on people's lives</p>
              </div>
            </div>
          </section>

          {/* Resume Download */}
          <section className="glass-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaFileAlt className="text-accent" />
              Resume
            </h2>
            <p className="text-slate-300 mb-4">
              Download my complete resume to learn more about my experience, skills, and qualifications.
            </p>
            <a 
              href="/Aryan_Adhav_Resume.pdf" 
              download="Aryan_Adhav_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:scale-[1.02] transition"
            >
              <FaDownload />
              Download Resume
            </a>
          </section>
        </div>
      </div>
    </motion.div>
  )
}
