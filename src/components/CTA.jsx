import React from 'react'

export default function CTA() {
  return (
    <div className="section">
      <div className="card relative overflow-hidden px-6 py-10 sm:px-10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-gold/10 to-brand-orange/10" />
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">Redo att sätta igång?</h3>
            <p className="mt-2 text-stone">Berätta om ditt projekt så tar vi fram en gratis offert.</p>
          </div>
          <div className="flex gap-3 sm:justify-end">
            <a href="#kontakt" className="btn-primary">Få offert</a>
            <a href="#tjanster" className="btn-outline">Våra tjänster</a>
          </div>
        </div>
      </div>
    </div>
  )
}

