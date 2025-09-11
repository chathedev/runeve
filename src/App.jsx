import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  if (!p) return <div className="container" style={{padding:'80px 0'}}>Produkten hittades inte.</div>
  return (
    <section className="container" style={{padding:'40px 0 80px'}}>
      <div className="product-page">
        <div className="product-media"><img src={p.image} alt={p.name} /></div>
        <div className="product-info">
          <div style={{fontSize:28, fontWeight:700}}>{p.name}</div>
          <div className="meta">{p.category}</div>
          <div style={{fontSize:20, margin:'6px 0 12px'}}>{p.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</div>
          <p className="meta">Noggrant utvald kvalitet med mjuka kanter och balanserad konstruktion för vardagens ridning och tävling.</p>
          <div style={{display:'flex', gap:10, alignItems:'center'}}>
            <div className="qty">
              <button onClick={() => setQty(q => Math.max(1, q-1))}>-</button>
              <div>{qty}</div>
              <button onClick={() => setQty(q => q+1)}>+</button>
            </div>
            <button className="primary" onClick={() => { for(let i=0;i<qty;i++) onAdd(p); navigate('/kassa') }}>Lägg i varukorg</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Checkout({ items, onInc, onDec }){
  const total = items.reduce((s, it) => s + it.price * it.qty, 0)
  const onSubmit = (e) => { e.preventDefault(); alert('Tack! Detta är en demo – betalning kopplas senare.'); }
  return (
    <section className="container" style={{padding:'40px 0 80px'}}>
      <div className="section-head"><h2>Kassan</h2><p>Slutför din beställning.</p></div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 0.8fr', gap:24}}>
        <div style={{background:'var(--bg)', border:'1px solid var(--border)', borderRadius:12, padding:16}}>
          <div style={{fontWeight:600, marginBottom:12}}>Varor</div>
          <div style={{display:'grid', gap:12}}>
            {items.map(it => (
              <div className="row" key={it.id}>
                <img src={it.image} alt={it.name} />
                <div className="grow">
                  <div style={{fontWeight:600}}>{it.name}</div>
                  <div className="meta">{it.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</div>
                </div>
                <div className="qty">
                  <button onClick={() => onDec(it.id)}>-</button>
                  <div>{it.qty}</div>
                  <button onClick={() => onInc(it.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit} style={{display:'grid', gap:12}}>
          <input required placeholder="E‑post" className="newsletter" style={{padding:0}} onChange={()=>{}} />
          <div style={{display:'grid', gap:12, gridTemplateColumns:'1fr 1fr'}}>
            <input required placeholder="Förnamn" className="newsletter" style={{padding:0}} onChange={()=>{}} />
            <input required placeholder="Efternamn" className="newsletter" style={{padding:0}} onChange={()=>{}} />
          </div>
          <input required placeholder="Adress" className="newsletter" style={{padding:0}} onChange={()=>{}} />
          <div style={{display:'grid', gap:12, gridTemplateColumns:'2fr 1fr'}}>
            <input required placeholder="Stad" className="newsletter" style={{padding:0}} onChange={()=>{}} />
            <input required placeholder="Postnummer" className="newsletter" style={{padding:0}} onChange={()=>{}} />
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8}}>
            <strong>Att betala</strong>
            <strong>{total.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</strong>
          </div>
          <button className="checkout" type="submit" disabled={items.length===0}>Betala</button>
        </form>
      </div>
    </section>
  )
}

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
      <Header onOpenCart={() => setCartOpen(true)} cartCount={count} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAdd={onAdd} />} />
          <Route path="/produkt/:id" element={<ProductPage onAdd={onAdd} />} />
          <Route path="/kassa" element={<Checkout items={cart} onInc={inc} onDec={dec} />} />
        </Routes>
      </main>
      <Footer year={year} />
      <CartDrawer open={cartOpen} items={cart} onInc={inc} onDec={dec} onClose={() => setCartOpen(false)} />
    </BrowserRouter>
  )
}
