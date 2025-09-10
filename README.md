Lindstedts Entreprenad – One‑page i React

En modern, responsiv one‑page byggd med React och Tailwind CSS. Innehåller sektioner: header, hero, tjänster, projekt/galleri, om oss, process, område, omdömen, FAQ, kontakt och footer. Smidig navigering och smooth scroll.

## Kör lokalt

1) Installera beroenden

`npm install`

2) Starta dev‑server

`npm run dev`

3) Bygg för produktion

`npm run build && npm run preview`

## Struktur

- `index.html` – HTML, fontladdning och root
- `src/App.jsx` – Ny minimalistisk single‑file design (alla sektioner i en fil)
- `src/components/*` – Fristående sektioner/komponenter
- `src/data/*` – Exempeldata för projekt/omdömen/FAQ
- `src/index.css` – Tailwind‑lager och komponentklasser
- `tailwind.config.js` – Färgtema och scanning paths

## Färg & stil

- Bas: mörk `coal` (#111827), ljus `sand` (#F3F4F6)
- Accent: `brand.gold` (#F59E0B), `brand.orange` (#FB923C)
- Typsnitt: Inter (Google Fonts)

## Anpassning

- Byt bilder/texter i respektive komponent i `src/components/*` och data i `src/data/*`.
- Logotypen i header/footer är en enkel SVG i koden – byt gärna mot riktig logotyp.
- Lägg till spårning, formulärintegration eller ikonbibliotek efter behov.

## Noteringar

- Smooth scroll är aktiverat via `html { scroll-behavior: smooth; }`.
- Sektioner har `scroll-mt-24` för att inte döljas av den sticky headern.
- Kontaktrutan är statisk. Koppla gärna till e‑posttjänst eller backend.

### Bilder

Lägg dina bilder i `public/` med exakt dessa filnamn (från din bilaga):

- `public/img-1.jpg` – Hero (landskap/soluppgång)
- `public/img-2.jpg` – Grävmaskin
- `public/img-3.jpg` – Bygge med kranar (dag)
- `public/img-4.jpg` – Byggplats i skymning

Om en bild saknas visas en snygg gradient‑fallback (ingen trasig bildlänk).
