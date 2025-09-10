import React from 'react'

export default function About() {
  return (
    <section id="om-oss" className="section scroll-mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="badge">Vår filosofi</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trygg entreprenad i Sjöbo</h2>
          <p className="mt-4 text-stone">
            Lindstedts Entreprenad är ett lokalt företag med lång erfarenhet av markarbeten och byggservice. Vi tror på raka besked, ren arbetsplats och kvalitet som håller.
          </p>
          <ul className="mt-6 grid gap-3 text-sm">
            {[
              'Egen maskinpark och certifierade förare',
              'Noggrann planering och tydlig kommunikation',
              'Ordning, säkerhet och ansvar i varje steg',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                </span>
                <span className="text-coal/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="card overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1508898578281-774ac4893bd0?q=80&w=1600&auto=format&fit=crop"
              alt="Team i arbete"
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rotate-12 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-gold sm:flex">
            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor"><path d="M3 20h18v2H3zM3 4h18l-3 8H6z"/></svg>
          </div>
        </div>
      </div>
    </section>
  )
}
