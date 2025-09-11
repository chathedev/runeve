import React, { useEffect, useRef } from 'react'

export default function Hero(){
  const titleRef = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (titleRef.current) titleRef.current.style.transform = `translateY(${Math.min(y*0.15, 40)}px)`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero-inner container">
        <h1 ref={titleRef}>Stilrena hästprodukter för ett lugnt tempo</h1>
        <p>Designade i Norden. Hållbara material. Diskret, modern estetik som låter ekipaget tala.</p>
        <div style={{display:'flex', gap:12, justifyContent:'center'}}>
          <a className="cta-btn" href="#produkter">Handla nu</a>
          <a className="cta-btn" style={{background:'#141821', color:'#e6e8ec', border:'1px solid rgba(255,255,255,0.12)'}} href="#om-oss">Läs om HOVELLA</a>
        </div>
      </div>
      <div className="scroll-indicator">
        Scrolla
        <div className="mouse"><div className="wheel"/></div>
      </div>
    </section>
  )
}

