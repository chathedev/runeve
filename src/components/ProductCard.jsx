import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, onAdd }){
  return (
    <div className="card">
      <Link to={`/produkt/${product.id}`} className="thumb">
        <img loading="lazy" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/produkt/${product.id}`} className="title">{product.name}</Link>
        <div className="meta">{product.category}</div>
        <div className="price-row">
          <div>{product.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</div>
          <button className="add-btn" onClick={() => onAdd(product)}>Lägg i varukorg</button>
        </div>
      </div>
    </div>
  )
}
