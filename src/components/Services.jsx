import React from 'react'

const services = [
  {
    title: 'Markarbeten',
    desc: 'Grundläggning, planering av tomt, vägar och uppfarter. Allt från grovjobb till finplanering.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 14h18l-2 6H5l-2-6Z"/>
        <path d="M6 14l4-10h4l4 10"/>
      </svg>
    ),
  },
  {
    title: 'Schakt & dränering',
    desc: 'Schaktning för husgrunder, pooler och ledningar. Dränering runt hus för torra källare.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12c4 0 4-4 8-4s4 4 8 4 4-4 8-4"/>
      </svg>
    ),
  },
  {
    title: 'Sten & plattläggning',
    desc: 'Uteplatser, gångar och murar. Hållbart och snyggt med rätt underarbete.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 11h18M3 17h18M8 5h8M6 11v12M12 11v12M18 11v12"/>
      </svg>
    ),
  },
  {
    title: 'Byggservice',
    desc: 'Altaner, staket, carport och mindre byggprojekt. Vi hjälper till från idé till färdigt resultat.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20h16M4 10l8-6 8 6M6 20V10h12v10"/>
      </svg>
    ),
  },
  {
    title: 'Grävarbeten',
    desc: 'Maskinförare med fingertoppskänsla. Trånga lägen eller stora ytor – vi löser det.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 15h6l3-6 7 1-2 5H4z"/>
        <circle cx="7" cy="18" r="2"/>
        <circle cx="18" cy="18" r="2"/>
      </svg>
    ),
  },
  {
    title: 'Snöröjning & underhåll',
    desc: 'Säsongsuppdrag för fastighetsägare och föreningar. Avtal som ger trygghet.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M4 6l16 12M4 18L20 6"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="tjanster" className="section scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">Vad vi kan</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tjänster</h2>
        <p className="mt-3 text-stone">
          Helhetslösningar inom mark och byggservice. Rätt utförande från början sparar både tid och pengar.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
              {s.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-stone">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
