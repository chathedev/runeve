import { motion, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const { scrollY } = useScroll()
  const blur = useTransform(scrollY, [0, 300], [0, 8])
  const blurFilter = useTransform(blur, v => `blur(${v}px)`)
  const y = useTransform(scrollY, [0, 150], [0, -8])
  const bg = useTransform(scrollY, [0, 300], ["rgba(11,18,33,0)", "rgba(11,18,33,0.6)"])

  return (
    <div className="nav-wrap">
      <motion.div style={{ backdropFilter: blurFilter, background: bg, y }}>
        <nav className="container nav">
          <a className="brand" href="#top" aria-label="FlowPay home">
            <div className="brand-badge" />
            FlowPay
          </a>
          <div className="nav-links">
            <a className="muted" href="#features">Features</a>
            <a className="muted" href="#showcase">Showcase</a>
            <a className="muted" href="#pricing">Pricing</a>
            <a className="btn ghost" href="#docs">Docs</a>
            <a className="btn primary" href="#get-started">Get started</a>
          </div>
        </nav>
      </motion.div>
    </div>
  )
}
