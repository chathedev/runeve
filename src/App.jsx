import React, { useEffect, useState } from 'react'

// Single‑file minimal redesign with fewer sections:
// Header, Hero, Services, Gallery, About, Contact, Footer

const IMAGES = {
  hero: '/img-1.jpg',      // Landskap/soluppgång
  excavator: '/img-2.jpg', // Grävmaskin
  cranesDay: '/img-3.jpg', // Lyckrikt byggprojekt dag
  cranesNight: '/img-4.jpg'// Byggplats i skymning
}

const FALLBACK_SVG = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'>
     <defs>
       <linearGradient id='g' x1='0' x2='1'>
         <stop offset='0' stop-color='#F59E0B'/>
         <stop offset='1' stop-color='#FB923C'/>
       </linearGradient>
     </defs>
     <rect width='1200' height='600' fill='url(#g)'/>
   </svg>`
)
const FALLBACK = `data:image/svg+xml;utf8,${FALLBACK_SVG}`

function SafeImg(props) {
  const [src, setSrc] = useState(props.src)
  return <img {...props} src={src} onError={() => setSrc(FALLBACK)} />
}

export default function App() {
  
  return (
    <div className="min-h-screen flex flex-col bg-sand text-coal">
      <Header/>
      <main>
        <Hero/>
        <Services/>
        <Gallery/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

function Header(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    { href: '#tjanster', label: 'Tjänster' },
    { href: '#om-oss', label: 'Om oss' },
    { href: '#kontakt', label: 'Kontakt' },
  ]
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur shadow-header' : 'bg-transparent'}`}>
      <div className="section py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3" aria-label="Gå till början">
            <Logo className="h-8 w-8" />
            <strong className="text-lg">Lindstedts Entreprenad</strong>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-stone hover:text-coal">{l.label}</a>
            ))}
            <a href="#kontakt" className="btn-primary">Få offert</a>
          </nav>
          <button aria-label="Meny" className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/10 p-2" onClick={() => setOpen(!open)}>
            <Burger open={open}/>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="section py-3 grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 font-medium">{l.label}</a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="btn-primary mt-2">Få offert</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero(){
  return (
    <section id="hero" className="relative overflow-hidden min-h-[100svh]">
      <div className="absolute inset-0 z-0">
        <SafeImg src={IMAGES.hero} alt="Sjöbo landskap i soluppgång" className="h-full w-full object-cover object-center" loading="eager" decoding="async" sizes="100vw"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/10"/>
      </div>
      <div className="section relative z-10 min-h-[100svh] flex flex-col justify-center items-start text-white py-24 sm:py-28 lg:py-32 gap-3 sm:gap-4">
        <span className="badge bg-white/20 text-white border-white/30">Sjöbo med omnejd</span>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Markarbeten, schakt & dränering – tryggt och professionellt
        </h1>
        <p className="mt-2 max-w-2xl text-white/90 text-lg">
          Lokal entreprenör i Skåne. Raka besked, tydliga offerter och ordning på arbetsplatsen.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a href="#kontakt" className="btn-primary">Begär kostnadsfri offert</a>
          <a href="#tjanster" className="btn-outline">Se våra tjänster</a>
        </div>
      </div>
    </section>
  )
}

function Services(){
  const data = [
    { title: 'Markarbeten', desc: 'Grundläggning, planering av tomt, uppfarter och vägar.' },
    { title: 'Schakt & dränering', desc: 'Schaktning för grunder/ledningar och dränering runt hus.' },
    { title: 'Sten & plattor', desc: 'Uteplatser, gångar och stödmurar – hållbart och snyggt.' },
    { title: 'Byggservice', desc: 'Altaner, staket, carport och mindre byggprojekt.' },
  ]
  return (
    <section id="tjanster" className="section scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">Vad vi gör</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tjänster</h2>
        <p className="mt-3 text-stone">Helhetslösningar inom mark och byggservice i Sjöbo.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((s) => (
          <div key={s.title} className="card p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-stone">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Gallery(){
  const items = [
    { title: 'Grävmaskin i arbete', src: IMAGES.excavator, alt: 'Grävmaskin på grusplan' },
    { title: 'Bygge med kranar', src: IMAGES.cranesDay, alt: 'Kranar och stomme mot himmel' },
    { title: 'Stad i skymning', src: IMAGES.cranesNight, alt: 'Byggplats i skymning med kranar' },
  ]
  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">Ett urval</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Galleri</h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <figure key={p.title} className="card overflow-hidden">
            <SafeImg src={p.src} alt={p.alt} className="w-full object-cover h-56 sm:h-64" loading="lazy" decoding="async" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"/>
            <figcaption className="p-4 text-sm font-medium">{p.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="om-oss" className="section scroll-mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="badge">Vår filosofi</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trygg entreprenad i Sjöbo</h2>
          <p className="mt-4 text-stone">Vi är ett lokalt företag med lång erfarenhet av markarbeten och byggservice. Rakt, tydligt och med kvalitet som håller.</p>
          <ul className="mt-6 grid gap-3 text-sm">
            {['Egen maskinpark och certifierade förare','Tydliga offerter och realistiska tidplaner','Ordning, säkerhet och ansvar i varje steg'].map(x => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                </span>
                <span className="text-coal/90">{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card overflow-hidden">
          <SafeImg src={IMAGES.excavator} alt="Entreprenadmaskin" className="h-80 w-full object-cover"/>
        </div>
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="kontakt" className="section scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <span className="badge">Hör av dig</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Kontakta oss</h2>
          <p className="mt-4 text-stone">Beskriv kort vad du vill ha hjälp med så återkommer vi snabbt med frågor eller offert.</p>
          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-3"><IconPhone /> <a href="tel:+4641212345" className="font-medium hover:text-brand-gold" aria-label="Ring oss">0412‑123 45</a></p>
            <p className="flex items-center gap-3"><IconMail /> <a href="mailto:info@lindstedtsentreprenad.se" className="font-medium hover:text-brand-gold" aria-label="Maila oss">info@lindstedtsentreprenad.se</a></p>
            <p className="flex items-center gap-3"><IconPin /> Sjöbo, Skåne</p>
          </div>
        </div>
        <form className="card p-6 grid gap-4" aria-label="Kontaktformulär" onSubmit={(e)=>{e.preventDefault(); alert('Tack! Vi återkommer snarast.')}}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Namn" name="name" placeholder="Ditt namn" required />
            <Input label="E‑post" name="email" type="email" placeholder="namn@mail.se" required />
          </div>
          <Input label="Telefon" name="phone" type="tel" placeholder="070‑123 45 67" />
          <Input label="Ort" name="city" placeholder="Sjöbo" />
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="msg">Beskrivning</label>
            <textarea id="msg" rows="4" placeholder="Berätta kort om ditt projekt..." className="w-full rounded-lg border border-black/10 bg-white p-3 outline-none focus:border-brand-gold/60"></textarea>
          </div>
          <button type="submit" className="btn-primary">Skicka förfrågan</button>
          <p className="text-xs text-stone">Vi behandlar dina uppgifter enligt GDPR och delar dem inte vidare.</p>
        </form>
      </div>
    </section>
  )
}

function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="mt-auto bg-coal text-white">
      <div className="section py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-7 w-7"/>
              <div className="text-lg font-bold">Lindstedts Entreprenad</div>
            </div>
            <p className="mt-3 text-white/70 text-sm">Markarbeten, schakt, dränering och byggservice i Sjöbo.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/70">Kontakt</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-brand-gold" href="tel:+4641212345">0412‑123 45</a></li>
              <li><a className="hover:text-brand-gold" href="mailto:info@lindstedtsentreprenad.se">info@lindstedtsentreprenad.se</a></li>
              <li>Sjöbo, Skåne</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/70">Navigering</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {['tjanster','om-oss','kontakt'].map(id => (
                <li key={id}><a className="hover:text-brand-gold" href={`#${id}`}>{id === 'tjanster' ? 'Tjänster' : id === 'om-oss' ? 'Om oss' : 'Kontakt'}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/70">Öppettider</h3>
            <p className="mt-3 text-sm">Mån–Fre 07.00–17.00</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60 flex flex-wrap items-center justify-between gap-4">
          <p>© {year} Lindstedts Entreprenad. Alla rättigheter förbehållna.</p>
          <p>Byggd av <a className="underline hover:text-brand-gold" href="https://wby.se" target="_blank" rel="noopener noreferrer">Websites by you</a>.</p>
        </div>
      </div>
    </footer>
  )
}

function Input({ label, ...props }){
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

function Logo({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="12" fill="#111827"/>
      <path d="M16 44l8-20h16l8 20" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 30h16" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  )
}

function Burger({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity={open ? 0.3 : 1}/>
      {open && <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>}
    </svg>
  )
}
