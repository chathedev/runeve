import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoTicker from './components/LogoTicker'
import FeatureGrid from './components/FeatureGrid'
import ShowcaseCarousel from './components/ShowcaseCarousel'
import Docs from './components/Docs'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const handleHash = () => {
      const id = window.location.hash.replace('#', '')
      if (!id) return
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <div className="page">
      <BackgroundOrbs />
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <FeatureGrid />
        <ShowcaseCarousel />
        <Docs />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

import { motion } from 'framer-motion'

function BackgroundOrbs() {
  const common = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 0.6, scale: 1.05 },
    transition: { duration: 2.4, ease: [0.16, 1, 0.3, 1], repeat: Infinity, repeatType: 'mirror' },
  }
  return (
    <div aria-hidden className="bg-orbs">
      <motion.div className="orb orb-a" {...common} />
      <motion.div className="orb orb-b" {...common} transition={{ ...common.transition, duration: 3.4, delay: 0.3 }} />
      <motion.div className="orb orb-c" {...common} transition={{ ...common.transition, duration: 4.2, delay: 0.6 }} />
    </div>
  )
}
