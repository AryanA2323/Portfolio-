import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="story-section py-12 border-t border-white/5 relative z-10">
      <div className="section-surface max-w-7xl mx-auto px-6 py-8 md:px-12 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            AA<span className="text-indigo-500">.</span>
          </a>
          <p className="text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-zinc-300 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
