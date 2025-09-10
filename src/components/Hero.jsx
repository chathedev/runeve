import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="hero container" id="top">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="chip">New • Developer Preview</span>
        <h1>
          Payments that feel <span className="gradient-text">effortless</span>
        </h1>
        <p>
          Build delightful checkout and money movement flows with a robust API, elegant UI components,
          and first‑class developer experience. Powerful motion, minimal code.
        </p>
        <div className="hero-actions">
          <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#get-started" className="btn primary">Start building</motion.a>
          <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#docs" className="btn">Read docs</motion.a>
        </div>
      </motion.div>
    </section>
  )
}

