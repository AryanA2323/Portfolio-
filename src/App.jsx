import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import InternshipsPage from './pages/InternshipsPage'
import CertificatesPage from './pages/CertificatesPage'
import ContactPage from './pages/ContactPage'

export default function App(){
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-slate-200 flex flex-col">
        <ParticlesBackground />
        <Navbar />
        <main className="container mx-auto px-4 pt-28 pb-12 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
