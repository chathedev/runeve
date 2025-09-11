import React from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

export default function FeaturedCarousel(){
  const [first, second] = products.filter(p => p.featured)
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <h2>Utvald kollektion</h2>
          <p>Större bilder för en tydligare känsla av material och form.</p>
        </div>
        <div className="featured-grid">
          <Link to={`/produkt/${first.id}`} className="featured-large">
            <div className="thumb">
              <img src={first.image} alt={first.name} loading="lazy" />
            </div>
            <div className="featured-caption">
              <strong>{first.name}</strong>
              <span className="price">{first.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</span>
            </div>
          </Link>
          <Link to={`/produkt/${second.id}`} className="featured-small">
            <div className="thumb">
              <img src={second.image} alt={second.name} loading="lazy" />
            </div>
            <div className="featured-caption">
              <strong>{second.name}</strong>
              <span className="price">{second.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
