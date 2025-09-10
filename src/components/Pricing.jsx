import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

const plans = [
  { name: 'Starter', price: 0, items: ['Basic components', 'Test mode', 'Email support'], badge: null },
  { name: 'Growth', price: 19, items: ['All components', '1M API calls', 'Priority support'], badge: 'Popular' },
  { name: 'Scale', price: 99, items: ['Unlimited API', 'SLA & SSO', 'Dedicated success'], badge: 'Best value' },
]

export default function Pricing(){
  const [yearly, setYearly] = useState(true)
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <Reveal>
          <h2>Simple, transparent pricing</h2>
          <p className="lead muted">Pay as you grow. Switch plans anytime.</p>
        </Reveal>

        <div style={{ display:'flex', justifyContent:'center', marginTop: 8 }}>
          <div className="chip" role="switch" aria-checked={yearly} onClick={() => setYearly(v => !v)} style={{ cursor:'pointer' }}>
            {yearly ? 'Yearly (2 months free)' : 'Monthly'}
          </div>
        </div>

        <div className="container grid plans" style={{ marginTop: 24 }}>
          {plans.map((p, i) => (
            <motion.article key={p.name} className="plan" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: i * 0.06 }}>
              {p.badge && <span className="badge">{p.badge}</span>}
              <h3 style={{ marginTop: 6 }}>{p.name}</h3>
              <AnimatePresence mode="popLayout">
                <motion.div key={String(yearly)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="price">
                  ${yearly ? (p.price * 10) : p.price}<span style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 600 }}>/ {yearly ? 'yr' : 'mo'}</span>
                </motion.div>
              </AnimatePresence>
              <ul>
                {p.items.map(li => <li key={li}>{li}</li>)}
              </ul>
              <div style={{ display:'flex', gap:10, marginTop: 12 }}>
                <a className="btn primary" href="#get-started">Choose plan</a>
                <a className="btn" href="#contact">Contact sales</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

