import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projekt" className="section scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">Några uppdrag</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Projekt & galleri</h2>
        <p className="mt-3 text-stone">Ett urval av genomförda jobb inom mark, schakt och byggservice.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <figure key={p.title} className="group card overflow-hidden">
            <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <figcaption className="p-4 text-sm font-medium">{p.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
