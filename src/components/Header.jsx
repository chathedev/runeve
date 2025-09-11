import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ onOpenCart, cartCount = 0, onCheckout }){
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">HOV<span>ELLA</span></Link>
        <nav className="nav">
          <a href="/#produkter">Produkter</a>
          <a href="/#livsstil">Livsstil</a>
          <a href="/#om-oss">Om oss</a>
          <button className="pill" onClick={onOpenCart} aria-label="Öppna varukorg">Varukorg ({cartCount})</button>
          <button className="primary" onClick={onCheckout}>Till kassan</button>
        </nav>
      </div>
    </header>
  )
}
