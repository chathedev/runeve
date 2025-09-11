import React from 'react'

export default function Header({ onOpenCart }){
  return (
    <header className="header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <a href="#top" className="logo">HOV<span>ELLA</span></a>
        <nav className="nav">
          <a href="#produkter">Produkter</a>
          <a href="#livsstil">Livsstil</a>
          <a href="#om-oss">Om oss</a>
          <a href="#kontakt">Kontakt</a>
          <button className="cta-btn" onClick={onOpenCart} aria-label="Öppna varukorg">Varukorg</button>
        </nav>
      </div>
    </header>
  )
}

