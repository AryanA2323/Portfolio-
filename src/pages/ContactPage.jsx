import React, {useRef, useState} from 'react'
import { motion } from 'framer-motion'
import { send } from '@emailjs/browser'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactPage(){
  const form = useRef()
  const [status, setStatus] = useState(null)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setStatus('sending')
    
    // Placeholder EmailJS usage - replace with your keys
    send('service_id','template_id',{
      from_name: form.current.user_name.value,
      from_email: form.current.user_email.value,
      message: form.current.message.value
    }, 'user_dummy')
    .then(()=> {
      setStatus('sent')
      form.current.reset()
    })
    .catch(()=> setStatus('error'))
  }

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

      <div className="grid md:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-6">
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

        {/* Contact Form */}
        <div className="md:col-span-3">
          <div className="glass-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  name="user_name" 
                  required 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-lg bg-black/20 border border-white/6 focus:border-accent focus:outline-none transition" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  name="user_email" 
                  type="email"
                  required 
                  placeholder="your.email@example.com" 
                  className="w-full p-3 rounded-lg bg-black/20 border border-white/6 focus:border-accent focus:outline-none transition" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  name="message" 
                  required 
                  placeholder="Your message..." 
                  rows={6} 
                  className="w-full p-3 rounded-lg bg-black/20 border border-white/6 focus:border-accent focus:outline-none transition resize-none" 
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'sent' && (
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 bg-rose-500/20 border border-rose-500/30 rounded-lg text-rose-400 text-sm">
                  ✗ Failed to send message. Please check EmailJS configuration or try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
