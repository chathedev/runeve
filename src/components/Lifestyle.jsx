import React from 'react'
import { lifestyleImages } from '../data/products'

export default function Lifestyle(){
  return (
    <section id="livsstil">
      <div className="container">
        <div className="section-head">
          <h2>Livsstil & rörelse</h2>
          <p>Stilla skandinaviska nyanser möter vardagens rytm.</p>
        </div>
        <div className="masonry">
          {lifestyleImages.map((src, i) => (
            <img key={i} src={src} alt="HOVELLA livsstil" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}
