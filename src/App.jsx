import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCarousel from './components/FeaturedCarousel'
import Products from './components/Products'
import Lifestyle from './components/Lifestyle'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import { products } from './data/products'
import Modal from './components/Modal'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './components/NotFound'

function usePersistedCart(){
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('hovella_cart')||'[]') } catch { return [] }
  })
  useEffect(() => { localStorage.setItem('hovella_cart', JSON.stringify(cart)) }, [cart])
  return [cart, setCart]
}

function ProductPage({ onAdd }){
  const { id } = useParams()
  const p = products.find(x => x.id === id)
  const [qty, setQty] = useState(1)
  if (!p) return <div className="container" style={{padding:'80px 0'}}>Produkten hittades inte.</div>
  return (
    <section className="container" style={{padding:'40px 0 80px'}}>
      <div className="product-page">
        <div className="product-media"><img src={p.image} alt={p.name} /></div>
        <div className="product-info">
          <div style={{fontSize:28, fontWeight:700}}>{p.name}</div>
          <div className="meta">{p.category}</div>
          <div style={{fontSize:20, margin:'6px 0 12px'}}>{p.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</div>
          <p className="meta" style={{lineHeight:1.6}}>{p.description}</p>
          <ul className="meta" style={{margin:'0 0 6px 16px'}}>
            <li>Material: Fullnarvsläder / premium textil</li>
            <li>Design: Tidlös, ergonomisk passform</li>
            <li>Garanti: 2 år</li>
          </ul>
          <div style={{display:'flex', gap:10, alignItems:'center'}}>
            <div className="qty">
              <button onClick={() => setQty(q => Math.max(1, q-1))}>-</button>
              <div>{qty}</div>
              <button onClick={() => setQty(q => q+1)}>+</button>
            </div>
            <button className="primary" onClick={() => { for(let i=0;i<qty;i++) onAdd(p) }}>Lägg i varukorg</button>
          </div>
          <div className="badge" style={{display:'inline-block', marginTop:8}}>Fri frakt över 999 kr</div>
        </div>
      </div>
    </section>
  )
}

// Checkout removed; using Under Development modal instead

function Home({ onAdd }){
  return (
    <>
      <Hero />
      <FeaturedCarousel />
      <Products onAdd={onAdd} />
      <Lifestyle />
      <Testimonials />
      <About />
    </>
  )
}

export default function App(){
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = usePersistedCart()
  const [udOpen, setUdOpen] = useState(false)

  const onAdd = useCallback((product) => {
    setCart(prev => {
      const i = prev.findIndex(p => p.id === product.id)
      if (i >= 0) {
        const copy = prev.slice()
        copy[i] = { ...copy[i], qty: copy[i].qty + 1 }
        return copy
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }, [])

  const inc = useCallback((id) => {
    setCart(prev => prev.map(p => p.id===id ? { ...p, qty: p.qty + 1 } : p))
  }, [])
  const dec = useCallback((id) => {
    setCart(prev => prev.flatMap(p => p.id===id ? (p.qty>1 ? [{...p, qty:p.qty-1}] : []) : [p]))
  }, [])

  useEffect(() => {
    const imgs = document.querySelectorAll('img')
    imgs.forEach(img => {
      const onErr = () => { img.src = '/images/placeholder.svg' }
      img.addEventListener('error', onErr)
    })
  }, [])

  const year = useMemo(() => new Date().getFullYear(), [])

  const count = cart.reduce((s, i) => s + i.qty, 0)
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header onOpenCart={() => setCartOpen(true)} cartCount={count} onCheckout={() => setUdOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAdd={onAdd} />} />
          <Route path="/produkt/:id" element={<ProductPage onAdd={onAdd} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer year={year} />
      <CartDrawer open={cartOpen} items={cart} onInc={inc} onDec={dec} onClose={() => setCartOpen(false)} onCheckout={() => setUdOpen(true)} />
      <Modal open={udOpen} title="Kassan är under utveckling" onClose={() => setUdOpen(false)}>
        <p>Snart kan du slutföra ditt köp här. Under tiden kan du fortsätta handla och spara varor i varukorgen.</p>
      </Modal>
    </BrowserRouter>
  )
}
