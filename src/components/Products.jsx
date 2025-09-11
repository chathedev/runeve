import React, { useEffect } from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Products({ onAdd }){
  useEffect(() => {
    const els = document.querySelectorAll('.card.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('reveal-in'); io.unobserve(e.target) } })
    }, { threshold: 0.22, rootMargin: '0px 0px -60px 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

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

