import React, { useEffect, useState } from 'react'
import { testimonials } from '../data/products'

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i+1) % testimonials.length), 4500)
    return () => clearInterval(id)
  }, [])
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <h2>Röster från stallet</h2>
          <p>Våra kunder om känslan av HOVELLA.</p>
        </div>
        <div className="testis">
          {testimonials.map((t, i) => (
            <div className="t" key={i} style={{opacity: index===i?1:0.7}}>
              <div className="stars">★★★★★</div>
              <p style={{margin:'8px 0 6px'}}>{t.text}</p>
              <div style={{color:'#98a2b3', fontSize:14}}>{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
