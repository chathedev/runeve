import React from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

export default function FeaturedCarousel(){
  const items = products.filter(p => p.featured).slice(0, 2)
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <h2>Utvald kollektion</h2>
          <p>Två favoriter – större bild, tydligare fokus.</p>
        </div>
        <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          {items.map((p) => (
            <Link to={`/produkt/${p.id}`} key={p.id} className="card" style={{display:'block'}}>
              <div className="thumb" style={{aspectRatio:'4/3'}}>
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="card-body" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div style={{fontWeight:700}}>{p.name}</div>
                <div className="meta">{p.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
