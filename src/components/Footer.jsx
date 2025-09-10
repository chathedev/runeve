import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-auto bg-coal text-white">
      <div className="section py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-7 w-7" />
              <div className="text-lg font-bold">Lindstedts Entreprenad</div>
            </div>
            <p className="mt-3 text-white/70 text-sm">Markarbeten, schakt, dränering och byggservice i Sjöbo med omnejd.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/70">Kontakt</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-brand-gold" href="tel:+4641212345">0412‑123 45</a></li>
              <li><a className="hover:text-brand-gold" href="mailto:info@lindstedtsentreprenad.se">info@lindstedtsentreprenad.se</a></li>
              <li>Sjöbo, Skåne</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/70">Navigering</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {['tjanster','projekt','om-oss','process','omrade','omdomen','faq','kontakt'].map((id) => (
                <li key={id}><a className="hover:text-brand-gold" href={`#${id}`}>{toLabel(id)}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/70">Öppettider</h3>
            <p className="mt-3 text-sm">Mån–Fre 07.00–17.00</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60 flex flex-wrap items-center justify-between gap-4">
          <p>© {year} Lindstedts Entreprenad. Alla rättigheter förbehållna.</p>
          <p>Byggd med React & Tailwind.</p>
        </div>
      </div>
    </footer>
  )
}

function toLabel(id){
  return id.replace('-', ' ').replace(/\b\w/g, (m) => m.toUpperCase())
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

