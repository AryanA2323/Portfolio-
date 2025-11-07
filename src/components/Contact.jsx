import React, {useRef, useState} from 'react'
import { send } from '@emailjs/browser'

export default function Contact(){
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
    .then(()=> setStatus('sent'))
    .catch(()=> setStatus('error'))
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <form ref={form} onSubmit={handleSubmit} className="glass-card p-6 rounded">
          <input name="user_name" required placeholder="Name" className="w-full p-3 rounded bg-transparent border border-white/6 mb-3" />
          <input name="user_email" required placeholder="Email" className="w-full p-3 rounded bg-transparent border border-white/6 mb-3" />
          <textarea name="message" required placeholder="Message" rows={6} className="w-full p-3 rounded bg-transparent border border-white/6 mb-3" />
          <button type="submit" className="px-4 py-2 bg-accent text-black rounded">Send Message</button>
          {status === 'sending' && <div className="text-sm mt-2 text-slate-400">Sending...</div>}
          {status === 'sent' && <div className="text-sm mt-2 text-green-400">Sent — thank you!</div>}
          {status === 'error' && <div className="text-sm mt-2 text-rose-400">Error sending. Check keys.</div>}
        </form>
        <div className="p-6">
          <h4 className="font-semibold">Connect</h4>
          <div className="mt-3 text-slate-300">Find me on:</div>
          <div className="mt-3 flex gap-3">
            <a href="#" className="text-slate-300">LinkedIn</a>
            <a href="#" className="text-slate-300">GitHub</a>
            <a href="#" className="text-slate-300">LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  )
}
