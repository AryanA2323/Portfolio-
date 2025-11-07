import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import certificates from '../data/certificates.json'

export default function CertificatesPage(){
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <motion.div 
      initial={{opacity:0, y:20}} 
      animate={{opacity:1, y:0}} 
      className="max-w-6xl mx-auto"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Certificates & Achievements</h1>
        <p className="text-slate-400 max-w-3xl">
          Professional certifications and courses completed to enhance my technical skills.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx)=> (
          <motion.div 
            key={cert.id}
            initial={{opacity:0, scale:0.9}}
            animate={{opacity:1, scale:1}}
            transition={{delay: idx * 0.05}}
            className="glass-card p-4 rounded-lg cursor-pointer hover:scale-[1.02] transition-transform" 
            onClick={()=>setSelectedCert(cert)}
          >
            <div className="relative overflow-hidden rounded-lg mb-3 group bg-white/5 flex items-center justify-center h-48">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🏆</div>
                <p className="text-xs text-slate-400">Click to view certificate</p>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
            <p className="text-sm text-slate-400 mb-3 line-clamp-2">{cert.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-accent">{cert.platform}</span>
              <span className="text-slate-400">{cert.date}</span>
            </div>
          </motion.div>
        ))}

        {certificates.length === 0 && (
          <div className="col-span-full glass-card p-12 rounded-lg text-center">
            <p className="text-slate-400">No certificates yet. Add your certifications to src/data/certificates.json</p>
          </div>
        )}
      </div>

      {/* Modal for enlarged certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm" 
            onClick={()=>setSelectedCert(null)}
          >
            <motion.div
              initial={{scale:0.8, opacity:0}}
              animate={{scale:1, opacity:1}}
              exit={{scale:0.8, opacity:0}}
              className="relative w-[95vw] h-[95vh] flex flex-col"
              onClick={(e)=>e.stopPropagation()}
            >
              <button 
                onClick={()=>setSelectedCert(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-2xl z-10"
              >
                ×
              </button>
              <embed 
                src={selectedCert.image} 
                type="application/pdf"
                className="w-full h-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
