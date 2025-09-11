import React from 'react'

export default function Hero(){
  return (
    <section id="top" className="hero" style={{backgroundImage: "url('/images/hero.jpg')", backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Stil för stall och sadel</h1>
          <p>Hållbara material. Tidlös estetik. HOVELLA för dig som vill ha funktion med lugn formspråk.</p>
          <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
            <a className="primary" href="#produkter">Handla nu</a>
            <a className="pill" href="#om-oss">Läs om HOVELLA</a>
          </div>
          <div className="hero-badges">
            <span className="badge">Fri frakt över 999 kr</span>
            <span className="badge">30 dagars öppet köp</span>
            <span className="badge">Designat i Norden</span>
          </div>
        </div>
      </div>
    </section>
  )
}
