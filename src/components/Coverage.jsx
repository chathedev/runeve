import React from 'react'

const areas = ['Sjöbo', 'Tomelilla', 'Ystad', 'Lund', 'Staffanstorp', 'Eslöv', 'Blentarp', 'Veberöd']

export default function Coverage() {
  return (
    <section id="omrade" className="section scroll-mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="badge">Vi täcker</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Område vi arbetar i</h2>
          <p className="mt-4 text-stone">Bas i Sjöbo – vi åtar oss uppdrag i hela sydöstra Skåne och närliggande kommuner.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {areas.map((a) => (
              <span key={a} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-coal shadow-sm border border-black/5">{a}</span>
            ))}
          </div>
        </div>
        <div className="card overflow-hidden">
          <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop" alt="Skånskt landskap" className="h-80 w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
