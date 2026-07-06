# Mintlify Clone (React + Vite + Tailwind)

Optischer Nachbau der Mintlify-Startseite (Light Mode) — für private/interne Zwecke.

## Starten

```bash
npm install
npm run dev
```

Dann http://localhost:5173 öffnen.

## Build

```bash
npm run build     # erzeugt dist/
npm run preview   # Build lokal ansehen
```

Alternativ: `dist/standalone.html` ist eine fertige Einzeldatei — einfach per Doppelklick im Browser öffnen (kein Server nötig).

## Struktur

- `src/components/Navbar.jsx` — Navigation mit smooth morphendem Dropdown (Höhe animiert, Inhalte blenden über)
- `src/components/HeroAnimation.jsx` — deine Canvas-Linien-Animation als React-Komponente
- `src/components/Hero.jsx` — Hero mit Badge, Headline, CTAs, Docs-Preview
- übrige Komponenten = je eine Sektion der Seite (LogoWall, StatsTicker, FeatureGrid, Enterprise, ScaleStats, Startups, Testimonials, Blog, CTA, Footer)

## Hinweise

- Schriften: Inter + Instrument Serif (Google Fonts, ersetzt Mintlifys proprietäre "arizonaFlare")
- Logos/Preview-Bilder werden von mintlify.com geladen (Hotlinks) — Internetverbindung nötig; Rechte liegen bei Mintlify bzw. den jeweiligen Firmen
- Testimonial-Texte sind sinngemäß paraphrasiert
