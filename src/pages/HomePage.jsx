import React from 'react'
import { motion } from 'framer-motion'

const skills = ['React','Node.js','MongoDB','Firebase','Java','Python','Tailwind','TypeScript','Express','PostgreSQL']

export default function HomePage(){
  return (
    <motion.div 
      initial={{opacity:0, y:20}} 
      animate={{opacity:1, y:0}} 
      className="max-w-4xl mx-auto"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.div 
          initial={{scale:0.9}} 
          animate={{scale:1}} 
          className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-accent to-accent2 rounded-full flex items-center justify-center text-4xl font-bold text-black"
        >
          AA
        </motion.div>
        <h1 className="text-5xl font-bold mb-3">Aryan Adhav</h1>
        <p className="text-2xl text-accent mb-2">Full Stack Developer | AI Enthusiast</p>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Passionate about building modern web applications with clean code and exceptional user experiences.
        </p>
      </div>

      {/* Contact Info */}
      <div className="glass-card p-6 rounded-lg mb-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Email:</span>
            <span>aryanadhav00@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">GitHub:</span>
            <a href="https://github.com/AryanA2323" target="_blank" rel="noreferrer" className="text-accent hover:underline">@AryanA2323</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Location:</span>
            <span>Kharadi, Pune</span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React','JavaScript','TypeScript','Tailwind','Material-UI','HTML/CSS'].map(s=> (
                <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div className="glass-card p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js','Express','Python','FastAPI','Firebase','MongoDB'].map(s=> (
                <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div className="glass-card p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">AI/ML & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Google Gemini','scikit-learn','Tesseract OCR','Gradio','pandas'].map(s=> (
                <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div className="glass-card p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Database & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              {['Firebase','Firestore','MongoDB Atlas','PostgreSQL','Git','Vite'].map(s=> (
                <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Education</h2>
        <div className="space-y-4">
          <div className="glass-card p-6 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
                <p className="text-accent">XYZ University</p>
              </div>
              <span className="text-slate-400 text-sm">2020 - 2024</span>
            </div>
            <p className="text-slate-300 mt-2">CGPA: 8.5/10</p>
            <p className="text-slate-400 text-sm mt-2">
              Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development, Machine Learning
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Secondary (XII)</h3>
                <p className="text-accent">ABC High School</p>
              </div>
              <span className="text-slate-400 text-sm">2019 - 2020</span>
            </div>
            <p className="text-slate-300 mt-2">Percentage: 92%</p>
            <p className="text-slate-400 text-sm mt-2">Stream: Science (PCM + Computer Science)</p>
          </div>
        </div>
      </section>

      {/* Summary/Objective */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Professional Summary</h2>
        <div className="glass-card p-6 rounded-lg">
          <p className="text-slate-300 leading-relaxed">
            Full Stack Developer with expertise in MERN stack and AI/ML integration. Experienced in building production-ready web applications 
            with modern technologies including React, Node.js, Firebase, and Python. Proficient in creating scalable admin dashboards, 
            AI-powered platforms, and educational tools. Strong background in cloud services (Firebase, MongoDB Atlas), machine learning 
            (scikit-learn, Google Gemini AI), and responsive UI/UX design with Material-UI and Tailwind CSS.
          </p>
        </div>
      </section>
    </motion.div>
  )
}
