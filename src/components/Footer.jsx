import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div>
            <div className="logo" style={{marginBottom:8}}>HOV<span>ELLA</span></div>
            <p>Stilrena och hållbara hästprodukter. Skapade i Norden.</p>
          </div>
          <div>
            <div style={{fontWeight:600, marginBottom:8}}>Butik</div>
            <div><a href="#produkter">Produkter</a></div>
            <div><a href="#livsstil">Livsstil</a></div>
            <div><a href="#om-oss">Om oss</a></div>
          </div>
          <div>
            <div style={{fontWeight:600, marginBottom:8}}>Kontakt</div>
            <div>support@hovella.se</div>
            <div>Vardagar 09–16</div>
          </div>
        </div>
        <div style={{marginTop:16, display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
          <small>© {new Date().getFullYear()} HOVELLA</small>
          <small><a href="#top">Till toppen ↑</a></small>
        </div>
      </div>
    </footer>
  )
}

