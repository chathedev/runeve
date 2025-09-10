export default function Footer(){
  return (
    <footer>
      <div className="container row">
        <div className="brand" style={{ color: 'var(--muted)' }}>
          <div className="brand-badge" /> FlowPay
        </div>
        <div style={{ display:'flex', gap: 18, flexWrap:'wrap' }}>
          <a className="muted" href="#privacy">Privacy</a>
          <a className="muted" href="#terms">Terms</a>
          <a className="muted" href="#status">Status</a>
          <a className="muted" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

