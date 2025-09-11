import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCarousel from './components/FeaturedCarousel'
import Products from './components/Products'
import Lifestyle from './components/Lifestyle'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

export default function App(){
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

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
    const imgs = document.querySelectorAll('img[loading="lazy"]')
    imgs.forEach(img => {
      img.addEventListener('error', () => {
        img.style.display = 'none'
      })
    })
    return () => imgs.forEach(img => img.removeEventListener('error', () => {}))
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('reveal-in'); io.unobserve(e.target) } })
    }, { threshold: 0.18, rootMargin: '0px 0px -60px 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <>
      <Header onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <FeaturedCarousel />
        <Products onAdd={onAdd} />
        <Lifestyle />
        <Testimonials />
        <About />
      </main>
      <Footer year={year} />
      <CartDrawer open={cartOpen} items={cart} onInc={inc} onDec={dec} onClose={() => setCartOpen(false)} />
    </>
  )
}

