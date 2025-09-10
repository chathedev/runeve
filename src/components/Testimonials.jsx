import React from 'react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="omdomen" className="section scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">Kunderna tycker</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Omdömen</h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="card p-6">
            <div className="flex items-center gap-2 text-brand-gold">
              {Array.from({ length: t.rating }).map((_, j) => (
                <svg key={j} viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor"><path d="M10 2l2.39 4.84 5.34.78-3.86 3.76.91 5.31L10 14.9l-4.78 2.79.91-5.31L2.27 7.62l5.34-.78L10 2z"/></svg>
              ))}
            </div>
            <blockquote className="mt-4 text-coal/90">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-stone">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
