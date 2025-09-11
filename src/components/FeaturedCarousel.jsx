import React from 'react'
import { products } from '../data/products'

export default function FeaturedCarousel(){
  const items = [...products.filter(p => p.featured), ...products.filter(p => p.featured)]
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <h2>Favoriter just nu</h2>
          <p>Mjuka färger, rena linjer och lugna detaljer.</p>
        </div>
        <div className="carousel">
          <div className="track">
            {items.map((p, i) => (
              <div className="item" key={p.id + i}>
                <img src={p.image} alt={p.name} loading="lazy" />
                <div style={{padding:12, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <div style={{fontWeight:600}}>{p.name}</div>
                  <div style={{color:'#98a2b3'}}>{p.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

