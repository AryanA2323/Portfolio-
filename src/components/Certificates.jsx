import React, {useState} from 'react'
import certificates from '../data/certificates.json'
import { motion } from 'framer-motion'

export default function Certificates(){
  const [open, setOpen] = useState(null)
  return (
    <section id="certificates" className="py-20">
      <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="text-2xl font-bold">Certificates</motion.h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certificates.map(c=> (
          <div key={c.id} className="glass-card p-3 rounded-md cursor-pointer" onClick={()=>setOpen(c.id)}>
            <img loading="lazy" src={c.thumb} alt={c.title} className="w-full h-36 object-cover rounded" />
            <div className="mt-2">
              <div className="font-semibold">{c.title}</div>
              <div className="text-xs text-slate-400">{c.platform} • {c.date}</div>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={()=>setOpen(null)}>
          <motion.img initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} src={certificates.find(c=>c.id===open).image} className="max-h-[80vh] rounded shadow-lg" />
        </div>
      )}
    </section>
  )
}
