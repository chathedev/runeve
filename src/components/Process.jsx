import React from 'react'

const steps = [
  { n: 1, title: 'Kontakt', desc: 'Du hör av dig – vi stämmer av behov och bokar platsbesök.' },
  { n: 2, title: 'Offert', desc: 'Tydlig offert med fasta priser där det går och realistisk tidsplan.' },
  { n: 3, title: 'Utförande', desc: 'Erfarna yrkespersoner och rätt maskiner. Ordning och säkerhet på plats.' },
  { n: 4, title: 'Överlämning', desc: 'Genomgång, dokumentation och uppföljning. Vi lämnar snyggt och klart.' },
]

export default function Process() {
  return (
    <section id="process" className="section scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">Så jobbar vi</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Vår process</h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="card p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold/20 font-bold text-brand-gold">{s.n}</span>
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-stone">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
