import React from 'react'

export default function About(){
  return (
    <section id="om-oss">
      <div className="container">
        <div className="section-head">
          <h2>Om HOVELLA</h2>
          <p>Stilren funktion för häst och ryttare.</p>
        </div>
        <div className="about">
          <div>
            <p>
              HOVELLA föddes ur längtan efter lugnare uttryck i stallet. Vi kombinerar robusta naturmaterial och moderna fibrer i produkter som håller länge, åldras vackert och känns mjuka från första stund.
            </p>
            <p>
              Varje detalj är genomtänkt med fokus på passform, balans och taktil känsla. Vi designar i Norden och producerar i små serier för att minimera spill och säkerställa kvalitet.
            </p>
            <div className="newsletter" id="kontakt">
              <input aria-label="E-post" placeholder="Din e‑post" />
              <button>Prenumerera på nyheter</button>
            </div>
          </div>
          <img src="/images/about-detail.jpg" alt="Detalj av sadel" />
        </div>
      </div>
    </section>
  )
}
