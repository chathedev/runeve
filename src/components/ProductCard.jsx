import React from 'react'

export default function ProductCard({ product, onAdd }){
  return (
    <div className="card reveal">
      <div className="thumb">
        <img loading="lazy" src={product.image} alt={product.name} />
      </div>
      <div className="card-body">
        <div className="title">{product.name}</div>
        <div className="meta">{product.category}</div>
        <div className="price-row">
          <div>{product.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</div>
          <button className="add-btn" onClick={() => onAdd(product)}>Lägg i varukorg</button>
        </div>
      </div>
    </div>
  )
}

