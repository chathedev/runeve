import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1920&auto=format&fit=crop"
          alt="Entreprenadmaskin i arbete"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/0" />
      </div>

      <div className="section pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36">
        <span className="badge">Sjöbo med omnejd</span>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Markarbeten, schakt & dränering med kvalitet och trygghet
        </h1>
        <p className="mt-5 max-w-2xl text-white/90 text-lg">
          Vi hjälper privatpersoner, företag och bostadsrättsföreningar i Sjöbo med allt inom mark och byggservice. Seriöst bemötande, tydliga offerter och proffsigt utförande.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#kontakt" className="btn-primary">Begär kostnadsfri offert</a>
          <a href="#tjanster" className="btn-outline">Se våra tjänster</a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 text-white/90">
          {[
            ['15+ år', 'Erfarenhet'],
            ['4.9/5', 'Kundnöjdhet'],
            ['100%', 'Ansvarsförsäkring'],
            ['ROT', 'Avdrag vid byggservice'],
          ].map(([a,b]) => (
            <div key={a} className="card bg-white/10 border-white/10">
              <div className="p-4">
                <div className="text-2xl font-bold">{a}</div>
                <div className="text-sm opacity-80">{b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

