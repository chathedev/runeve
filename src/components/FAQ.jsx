import React, { useState } from 'react'
import { faq } from '../data/faq'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">Vanliga frågor</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">FAQ</h2>
      </div>
      <div className="mx-auto mt-8 max-w-3xl divide-y divide-black/5 rounded-xl border border-black/5 bg-white">
        {faq.map((item, i) => (
          <div key={i}>
            <button className="flex w-full items-center justify-between gap-6 p-4 text-left"
              onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="font-medium">{item.q}</span>
              <span className="text-brand-gold">{open === i ? '-' : '+'}</span>
            </button>
            {open === i && (
              <div className="px-4 pb-4 text-stone">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
