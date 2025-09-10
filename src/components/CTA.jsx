import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section id="get-started" className="cta">
      <div className="container glass" style={{ padding: 24 }}>
        <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.5 }}>
          Ready to build something delightful?
        </motion.h3>
        <p className="muted">Install the SDK and ship your first payment in minutes.</p>
        <div style={{ display:'flex', gap: 12, justifyContent:'center', marginTop: 10 }}>
          <code className="code">npm i flowpay</code>
          <a className="btn primary" href="#docs">Get the docs</a>
        </div>
      </div>
    </section>
  )
}

