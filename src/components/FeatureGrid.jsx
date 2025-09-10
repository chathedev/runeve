import { motion, useAnimation } from 'framer-motion'
import Reveal from './Reveal'

const items = [
  { title: 'Global by default', body: 'Accept payments in 195+ countries with local methods built‑in.', color: 'linear-gradient(135deg, #7a5cff, #00d4ff)' },
  { title: 'Polished UI', body: 'Drop‑in components with accessible states and fluid motion.', color: 'linear-gradient(135deg, #00d4ff, #1de9b6)' },
  { title: 'Developer‑first', body: 'SDKs, webhooks, and typed APIs with great DX.', color: 'linear-gradient(135deg, #1de9b6, #7a5cff)' },
  { title: 'Secure & compliant', body: 'Tokenization, PCI‑conscious flows, and smart fraud tools.', color: 'linear-gradient(135deg, #ff5d7f, #7a5cff)' },
]

export default function FeatureGrid(){
  return (
    <section id="features" className="features">
      <div className="container">
        <Reveal>
          <h2>Everything you need to get paid</h2>
          <p className="lead muted">A modern toolkit for accepting payments, managing subscriptions, and moving money globally. Designed for speed and reliability.</p>
        </Reveal>

        <div className="grid feature-grid" style={{ marginTop: 24 }}>
          {items.map((f, i) => (
            <Tilt key={f.title}>
              <motion.article
                className="feature-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="icon" style={{ background: f.color }} />
                <h3>{f.title}</h3>
                <p className="muted">{f.body}</p>
              </motion.article>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tilt({ children }){
  const reset = { rotateX: 0, rotateY: 0, scale: 1 }
  const controls = useAnimation()
  const onMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    controls.start({ rotateX: py * -6, rotateY: px * 6, scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 18 } })
  }
  return (
    <motion.div
      style={{ transformStyle: 'preserve-3d' }}
      initial={false}
      animate={controls}
      onMouseMove={onMove}
      onMouseLeave={() => controls.start(reset)}
    >
      {children}
    </motion.div>
  )
}
