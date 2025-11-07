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
            <div className="relative overflow-hidden rounded-lg mb-3 group">
              <img 
                loading="lazy" 
                src={cert.thumb} 
                alt={cert.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold">Click to enlarge</span>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
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
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm" 
            onClick={()=>setSelectedCert(null)}
          >
            <motion.div
              initial={{scale:0.8, opacity:0}}
              animate={{scale:1, opacity:1}}
              exit={{scale:0.8, opacity:0}}
              className="relative max-w-4xl max-h-[90vh] bg-[#0f1724] rounded-lg p-4"
              onClick={(e)=>e.stopPropagation()}
            >
              <button 
                onClick={()=>setSelectedCert(null)}
                className="absolute top-2 right-2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-2xl z-10"
              >
                ×
              </button>
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="max-h-[80vh] rounded shadow-2xl mx-auto" 
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                <p className="text-slate-400">{selectedCert.platform} • {selectedCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
