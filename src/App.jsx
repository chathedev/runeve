import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Process from './components/Process.jsx'
import Coverage from './components/Coverage.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CTA from './components/CTA.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <Coverage />
        <CTA />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
