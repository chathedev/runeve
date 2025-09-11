import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="container" style={{padding:'80px 0'}}>
      <div className="section-head"><h2>Sidan kunde inte hittas</h2></div>
      <p className="meta">Länken verkar vara felaktig eller sidan har flyttats.</p>
      <div style={{marginTop:12, display:'flex', gap:10}}>
        <Link to="/" className="primary">Till startsidan</Link>
        <a href="/#produkter" className="pill">Utforska produkter</a>
      </div>
    </section>
  )
}

