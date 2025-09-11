import React from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Products({ onAdd }){
  return (
    <section id="produkter">
      <div className="container">
        <div className="section-head">
          <h2>Utvalt sortiment</h2>
          <p>Genomtänkt funktion. Material som håller. Former som andas.</p>
        </div>
        <div className="grid">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
