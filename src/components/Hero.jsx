import React from 'react'

export default function Hero(){
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Stilrena hästprodukter för ett lugnt tempo</h1>
          <p>Skapade i Norden med fokus på form, passform och lång livslängd. Ren, modern estetik som låter ekipaget tala.</p>
          <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
            <a className="primary" href="#produkter">Handla nu</a>
            <a className="pill" href="#om-oss">Läs om HOVELLA</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="/images/hero.jpg" alt="HOVELLA hero" />
        </div>
      </div>
    </section>
  )
}
