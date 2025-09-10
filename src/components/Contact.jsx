import React from 'react'

export default function Contact() {
  return (
    <section id="kontakt" className="section scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <span className="badge">Hör av dig</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Kontakta oss</h2>
          <p className="mt-4 text-stone">Beskriv kort vad du vill ha hjälp med så återkommer vi snabbt med frågor eller offert.</p>
          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-3"><IconPhone /> <a href="tel:+4641212345" className="font-medium hover:text-brand-gold">0412‑123 45</a></p>
            <p className="flex items-center gap-3"><IconMail /> <a href="mailto:info@lindstedtsentreprenad.se" className="font-medium hover:text-brand-gold">info@lindstedtsentreprenad.se</a></p>
            <p className="flex items-center gap-3"><IconPin /> Sjöbo, Skåne</p>
          </div>
        </div>
        <form className="card p-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Namn" name="name" placeholder="Ditt namn" />
            <Input label="E‑post" name="email" type="email" placeholder="namn@mail.se" />
          </div>
          <Input label="Telefon" name="phone" type="tel" placeholder="070‑123 45 67" />
          <Input label="Ort" name="city" placeholder="Sjöbo" />
          <div>
            <label className="mb-1 block text-sm font-medium">Beskrivning</label>
            <textarea rows="4" placeholder="Berätta kort om ditt projekt..." className="w-full rounded-lg border border-black/10 bg-white p-3 outline-none focus:border-brand-gold/60"></textarea>
          </div>
          <button type="submit" className="btn-primary">Skicka förfrågan</button>
          <p className="text-xs text-stone">Genom att skicka godkänner du att vi kontaktar dig. Vi delar aldrig dina uppgifter vidare.</p>
        </form>
      </div>
    </section>
  )
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <input {...props} className="w-full rounded-lg border border-black/10 bg-white p-3 outline-none focus:border-brand-gold/60" />
    </div>
  )
}

function IconPhone(){
  return <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 5l4-2 3 5-3 2a14 14 0 007 7l2-3 5 3-2 4c-6 1-16-9-14-16z"/></svg>
}
function IconMail(){
  return <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg>
}
function IconPin(){
  return <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="3"/></svg>
}
