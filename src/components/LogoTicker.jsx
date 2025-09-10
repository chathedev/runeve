import { motion } from 'framer-motion'

const logos = Array.from({ length: 10 }).map((_, i) => ({ id: i }))

export default function LogoTicker(){
  return (
    <section className="container ticker" aria-label="Trusted by">
      <motion.div
        className="ticker-row"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        {[...logos, ...logos].map((l, i) => (
          <div key={i} className="logo-pill">
            <span className="logo" />
            <span>Partner {((i%10)+1).toString().padStart(2,'0')}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

