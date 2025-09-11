import React from 'react'

export default function Hero(){
  return (
    <section id="top" className="hero" style={{backgroundImage: "url('/images/hero.jpg')", backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="container hero-inner">
        <div className="hero-card">
          <div className="eyebrow">HOVELLA — STILRENA HÄSTPRODUKTER</div>
          <div className="hero-copy">
            <h1>Form, passform och lugn estetik</h1>
            <p>Välgjorda produkter för häst och ryttare – designade i Norden med fokus på kvalitet och tidlöshet.</p>
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
      </div>
    </section>
  )
}
