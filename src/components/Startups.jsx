import { useRef } from 'react'
import SectionHeading, { BlackButton, ArrowButton } from './SectionHeading.jsx'

const CARDS = [
  {
    name: 'Lovable',
    bg: 'linear-gradient(150deg,#f43b47 0%,#e93d82 40%,#a855f7 100%)',
    tile: <span className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-4xl text-transparent">♥</span>,
    desc: <><b className="font-semibold text-ink">Lovable</b> builds its AI-native coding platform and developer experience on top of Mintlify.</>,
  },
  {
    name: 'Kalshi',
    bg: 'linear-gradient(150deg,#34e39a 0%,#4ef0ab 50%,#7ff7c4 100%)',
    tile: <span className="text-xl font-bold tracking-tight text-ink">Kalshi</span>,
    desc: <><b className="font-semibold text-ink">Kalshi</b> powers its developer documentation with Mintlify.</>,
  },
  {
    name: 'Decagon',
    bg: 'linear-gradient(150deg,#171038 0%,#2b1e63 55%,#43318f 100%)',
    tile: (
      <svg viewBox="0 0 24 24" className="size-9" fill="none" stroke="#0a0a0a" strokeWidth="1.6">
        <path d="M7 4h10l3 4-8 12L4 8l3-4zM4 8h16M9 8l3 12M15 8l-3 12" />
      </svg>
    ),
    desc: <><b className="font-semibold text-ink">Decagon</b> ships sleek, AI-native documentation built on Mintlify.</>,
  },
  {
    name: 'Replit',
    bg: 'linear-gradient(150deg,#f7a37b 0%,#fbb896 55%,#ffd3b8 100%)',
    tile: (
      <svg viewBox="0 0 24 24" className="size-8" fill="#f26207">
        <path d="M5 3h7v6H5zM12 9h7v6h-7zM5 15h7v6H5z" />
      </svg>
    ),
    desc: <>Learn how <b className="font-semibold text-ink">Replit</b> uses Mintlify to turn documentation into a fast, collaborative, and accessible experience.</>,
  },
  {
    name: 'Perplexity',
    bg: 'linear-gradient(150deg,#0f2f38 0%,#17444f 55%,#2b6a75 100%)',
    tile: (
      <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="#20808d" strokeWidth="1.8">
        <path d="M12 2v20M12 7l6-5v6l-6 4 6 4v6l-6-5M12 7L6 2v6l6 4-6 4v6l6-5" />
      </svg>
    ),
    desc: <><b className="font-semibold text-ink">Perplexity</b> keeps its developer documentation fast and accurate with Mintlify.</>,
  },
]

export default function Startups() {
  const trackRef = useRef(null)
  const scrollBy = (dir) => trackRef.current?.scrollBy({ left: dir * 640, behavior: 'smooth' })

  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Enabling the next generation of startups."
          line2="Powering a quarter of the last YC batch to 40% of the Forbes AI 50."
        >
          <ArrowButton dir="left" onClick={() => scrollBy(-1)} />
          <ArrowButton dir="right" onClick={() => scrollBy(1)} />
          <BlackButton>For startups</BlackButton>
        </SectionHeading>
      </div>

      <div ref={trackRef} className="no-scrollbar flex snap-x gap-4 overflow-x-auto px-4">
        {CARDS.map((c) => (
          <div key={c.name} className="w-[298px] shrink-0 snap-start">
            <div
              className="relative flex h-[340px] items-center justify-center overflow-hidden rounded-xl"
              style={{ background: c.bg }}
            >
              {/* subtle line texture */}
              <svg viewBox="0 0 300 340" className="absolute inset-0 h-full w-full opacity-25" fill="none">
                {Array.from({ length: 10 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M-20 ${320 - i * 10} C 80 ${240 - i * 16}, 180 ${140 + i * 8}, 320 ${20 + i * 12}`}
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="1"
                  />
                ))}
              </svg>
              <div className="flex size-[88px] items-center justify-center rounded-2xl bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.35)]">
                {c.tile}
              </div>
            </div>
            <p className="mt-4 text-[13.5px] leading-5 text-gray-600">{c.desc}</p>
            <a href="#" className="mt-2.5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-mint-600 transition-colors hover:text-mint-500">
              Read {c.name}'s story
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-3"><path d="m9 18 6-6-6-6" /></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
