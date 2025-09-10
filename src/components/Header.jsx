import React, { useEffect, useState } from 'react'

const links = [
  { href: '#tjanster', label: 'Tjänster' },
  { href: '#projekt', label: 'Projekt' },
  { href: '#om-oss', label: 'Om oss' },
  { href: '#process', label: 'Process' },
  { href: '#omrade', label: 'Område' },
  { href: '#omdomen', label: 'Omdömen' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur shadow-header' : 'bg-transparent'}`}>
      <div className="section py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <div className="leading-tight">
              <div className="text-sm tracking-wide text-stone">Lindstedts</div>
              <div className="-mt-1 text-lg font-bold">Entreprenad</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-stone hover:text-coal">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" className="btn-primary">Få offert</a>
          </nav>

          <button aria-label="Meny" className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/10 p-2" onClick={() => setOpen(!open)}>
            <Burger open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="section py-3 grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-coal/80 font-medium">{l.label}</a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="btn-primary mt-2">Få offert</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Logo({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="12" fill="#111827"/>
      <path d="M16 44l8-20h16l8 20" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 30h16" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  )
}

function Burger({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity={open ? 0.3 : 1}/>
      {open && <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>}
    </svg>
  )
}

