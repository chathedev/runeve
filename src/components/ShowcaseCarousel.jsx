import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'

const code = `curl https://api.flowpay.dev/v1/charges \
  -H "Authorization: Bearer sk_test_123" \
  -d amount=4200 \
  -d currency=usd \
  -d source=tok_visa`

const panels = [
  { title: 'Unified API', accent: '#7a5cff' },
  { title: 'Beautiful Checkout', accent: '#00d4ff' },
  { title: 'Subscriptions', accent: '#1de9b6' },
  { title: 'Fraud Insights', accent: '#ff5d7f' },
]

export default function ShowcaseCarousel(){
  const { scrollYProgress } = useScroll({ offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  return (
    <section id="showcase" className="showcase">
      <div className="container">
        <Reveal>
          <h2 style={{ textAlign:'center' }}>Designed for builders</h2>
          <p className="lead muted" style={{ textAlign:'center' }}>From quick experiments to production‑grade systems, mix and match components with minimal wiring.</p>
        </Reveal>

        <motion.div className="carousel" style={{ x, marginTop: 24 }}>
          {panels.map((p, i) => (
            <motion.div key={p.title} className="panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: i * 0.08 }}>
              <div className="panel-inner">
                <div className="panel-header">
                  <div className="dot" style={{ background: p.accent }} />
                  <strong>{p.title}</strong>
                </div>
                <div className="code">
                  <pre style={{ margin: 0 }}><code>{code}</code></pre>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

