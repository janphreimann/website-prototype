import { useRef, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function ArrowRight({ className = 'size-3' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

/* ---------- hero with URL input ---------- */
function Hero() {
  return (
    <section className="relative overflow-x-clip bg-white pt-14">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-56 opacity-50 max-xl:hidden"
        style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-56 opacity-50 max-xl:hidden"
        style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />

      <div className="relative mx-auto max-w-[1225px] px-4 pb-24 pt-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[13px] text-gray-600">
          <span className="size-1.5 rounded-full bg-mint-500" />
          Agent Score
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl font-display text-[44px] leading-[48px] tracking-[-1px] text-ink lg:text-[54px] lg:leading-[56px] lg:tracking-[-2px]">
          Your docs look great.
          <br />
          Can agents read them?
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-6 text-gray-600">
          Agent Score evaluates your documentation the way an agent experiences
          it &mdash; can it be found, parsed, and used? Built on the{' '}
          <b className="font-semibold text-ink">AFDocs standard</b>.
        </p>

        {/* score input */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-lg border border-line bg-white p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
        >
          <input
            type="text"
            placeholder="docs.yourcompany.com"
            className="min-w-0 flex-1 bg-transparent px-3 py-1.5 text-[14px] text-ink placeholder-gray-400 outline-none"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center gap-2 rounded bg-ink px-4 py-2 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get your score
            <ArrowRight />
          </button>
        </form>
      </div>
    </section>
  )
}

/* ---------- leaderboard ---------- */
const CATEGORIES = ['All', 'AI', 'Infrastructure', 'Devtools', 'Productivity']

const LEADERBOARD = [
  { name: 'Browserbase', score: 100, category: 'AI' },
  { name: 'Mintlify', score: 100, category: 'Devtools' },
  { name: 'Neon', score: 100, category: 'Infrastructure' },
  { name: 'Resend', score: 100, category: 'Devtools' },
  { name: 'Anthropic', score: 99, category: 'AI' },
  { name: 'Vercel', score: 99, category: 'Infrastructure' },
  { name: 'Linear', score: 99, category: 'Productivity' },
  { name: 'Supabase', score: 99, category: 'Infrastructure' },
  { name: 'Cursor', score: 98, category: 'AI' },
  { name: 'Stripe', score: 98, category: 'Devtools' },
  { name: 'Perplexity', score: 98, category: 'AI' },
  { name: 'PlanetScale', score: 97, category: 'Infrastructure' },
  { name: 'Notion', score: 97, category: 'Productivity' },
  { name: 'Replit', score: 96, category: 'Devtools' },
  { name: 'Together AI', score: 96, category: 'AI' },
  { name: 'Zapier', score: 95, category: 'Productivity' },
]

function ScoreBadge({ score }) {
  return (
    <span
      className={`flex size-11 shrink-0 items-center justify-center rounded-lg text-[15px] font-semibold ${
        score >= 100 ? 'bg-mint-100 text-mint-600' : 'bg-cream-dark text-ink'
      }`}
    >
      {score}
    </span>
  )
}

function Leaderboard() {
  const [category, setCategory] = useState('All')
  const [expanded, setExpanded] = useState(false)

  const entries = LEADERBOARD.filter((e) => category === 'All' || e.category === category)
  const shown = expanded ? entries : entries.slice(0, 8)

  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Agent score leaderboard."
          line2="A live ranking of the documentation sites we track."
        >
          <div className="flex items-center gap-1.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                  category === c
                    ? 'border-ink bg-ink text-white'
                    : 'border-line bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </SectionHeading>

        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((e, i) => (
            <li
              key={e.name}
              className="flex items-center gap-4 rounded-xl border border-line bg-cream p-4 transition-colors hover:bg-cream-dark"
            >
              <span className="w-6 text-right text-[13px] font-medium text-gray-400">{i + 1}</span>
              <ScoreBadge score={e.score} />
              <span className="min-w-0">
                <span className="block truncate text-[14.5px] font-medium text-ink">{e.name}</span>
                <span className="block text-[12px] text-gray-500">{e.category}</span>
              </span>
            </li>
          ))}
        </ol>

        {entries.length > 8 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="rounded border border-line bg-white px-4 py-2 text-[13.5px] font-medium transition-colors hover:bg-gray-50"
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ---------- stats ---------- */
const STATS = [
  { stat: '1,313', label: 'Agent-ready checks' },
  { stat: '7,349,547', label: 'Agent requests tracked last month' },
  { stat: '54,365,799', label: 'Total agent requests tracked' },
]

function Stats() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Docs now serve two audiences."
          line2="Humans skim. Agents parse. Your score measures both."
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-line bg-cream p-8 text-center">
              <div className="font-display text-[44px] leading-none tracking-[-2px] text-ink">{s.stat}</div>
              <div className="mt-3 text-[13.5px] text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- agent requests band: bars lift toward the cursor ---------- */
const BAR_COUNT = 90

// deterministic skyline heights in [0.15, 1]
const BAR_HEIGHTS = Array.from({ length: BAR_COUNT }, (_, i) => {
  const wave = 0.5 + 0.35 * Math.sin(i * 0.35) + 0.2 * Math.sin(i * 1.7 + 2)
  const jitter = ((i * 2654435761) % 97) / 97 // hash-based, stable across renders
  return Math.min(1, Math.max(0.15, 0.35 * wave + 0.55 * jitter))
})

function RequestsBand() {
  const ref = useRef(null)
  const [cursor, setCursor] = useState(null) // x position within the band, null = idle

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    setCursor((e.clientX - rect.left) / rect.width)
  }

  return (
    <section className="relative overflow-hidden border-t border-line bg-white">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={() => setCursor(null)}
        className="relative flex h-[440px] w-full cursor-pointer items-end gap-[3px] px-1 max-md:h-[300px]"
      >
        {BAR_HEIGHTS.map((h, i) => {
          // proximity falloff: bars near the cursor rise and turn mint
          const d = cursor === null ? 1 : Math.abs(i / (BAR_COUNT - 1) - cursor)
          const boost = Math.max(0, 1 - d * 9) // ~1/9th of the band reacts
          const lift = boost * 90
          const active = boost > 0.35
          return (
            <div
              key={i}
              className="min-w-0 flex-1 rounded-t-[2px] transition-[transform,background-color] duration-300 ease-out"
              style={{
                height: `${12 + h * 55}%`,
                transform: `translateY(-${lift}px)`,
                background: active ? 'var(--color-mint-500)' : '#e5e3dc',
              }}
            />
          )
        })}
      </div>

      {/* overlay: label + big counter, like the original band */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-start">
        <p className="flex items-center gap-2 px-6 py-3 font-mono text-[12px] uppercase tracking-[-0.1px]">
          <span className="inline-block size-2 shrink-0 bg-mint-500" />
          <span className="text-gray-400">Last month</span>
          <span className="text-gray-700">Agent requests tracked across docs</span>
        </p>
        <div className="w-full overflow-hidden bg-cream/90 px-4 py-6 backdrop-blur-[2px] md:w-[66%]">
          <p className="whitespace-nowrap font-mono text-[clamp(40px,9vw,110px)] font-medium leading-none tracking-[-3px] text-ink">
            54,365,799<span className="animate-blink text-mint-500">_</span>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------- testimonials ---------- */
const QUOTES = [
  {
    name: 'Sarah Deaton',
    role: 'Member of Technical Staff, Anthropic',
    initial: 'S',
    color: '#e5674a',
    quote:
      'Agent readiness is not a nice-to-have anymore. If an agent cannot parse your docs, a growing share of your users never sees them.',
  },
  {
    name: 'Rhyannon Rodriguez',
    role: 'Senior Technical Writer',
    initial: 'R',
    color: '#2151f5',
    quote:
      'The score gave us an objective baseline. We stopped debating opinions about structure and started fixing what agents actually stumble on.',
  },
  {
    name: 'Manny Silva',
    role: 'Head of Documentation',
    initial: 'M',
    color: '#0d9e65',
    quote:
      'Measuring first changed our roadmap. Half of our assumptions about what needed fixing were wrong, and the checks showed us where to look.',
  },
]

function Voices() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="The ones who measured first."
          line2="Teams already optimizing for agents."
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <figure key={q.name} className="flex flex-col rounded-xl border border-line bg-cream p-8">
              <blockquote className="text-[15px] leading-6 text-gray-700">&ldquo;{q.quote}&rdquo;</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-7">
                <span
                  className="flex size-9 items-center justify-center rounded-full text-[14px] font-semibold text-white"
                  style={{ background: q.color }}
                >
                  {q.initial}
                </span>
                <span>
                  <span className="block text-[13.5px] font-semibold text-ink">{q.name}</span>
                  <span className="block text-[12.5px] text-gray-500">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- closing CTA ---------- */
function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-white">
      <svg
        viewBox="0 0 500 220"
        fill="none"
        className="pointer-events-none absolute right-0 top-0 h-full w-[500px] max-lg:hidden"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 14 }).map((_, i) => {
          const f = i / 13
          const r = Math.round(31 + 155 * f)
          const g = Math.round(227 + 28 * f)
          const b = Math.round(148 - 112 * f)
          return (
            <path
              key={i}
              d={`M${80 + i * 26} 220 L ${260 + i * 26} 0`}
              stroke={`rgba(${r},${g},${b},${0.6 - f * 0.25})`}
              strokeWidth="1"
            />
          )
        })}
      </svg>

      <div className="relative mx-auto flex max-w-[1225px] flex-wrap items-center justify-between gap-8 px-4 py-20">
        <h2 className="max-w-lg font-display text-[38px] leading-[44px] tracking-[-1px] text-ink">
          Build docs developers (and agents) love
        </h2>
        <div className="flex items-center gap-3">
          <a href="#" className="rounded border border-line bg-white px-4 py-2.5 text-[13.5px] font-medium transition-colors hover:bg-gray-50">
            Book a demo
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded bg-ink px-4 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800">
            Get your score
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function ScorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <div className="mx-auto max-w-[1225px] border-x border-line">
          <Leaderboard />
          <Stats />
          <RequestsBand />
          <Voices />
        </div>
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  )
}
