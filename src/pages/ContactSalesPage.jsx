import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import LogoWall from '../components/LogoWall.jsx'
import StatsTicker from '../components/StatsTicker.jsx'

/* ---------- animated "agent traffic" stat ---------- */
function AgentTrafficStat() {
  const [pct, setPct] = useState(12.4)

  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => Math.min(p + Math.random() * 0.03, 23.7))
    }, 1200)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[13px] text-gray-600">
      <span className="size-1.5 animate-pulse rounded-full bg-mint-500" />
      <span className="font-mono text-[12.5px] font-medium text-mint-600">{pct.toFixed(1)}%</span>
      of traffic to your docs is now AI agents, and climbing
    </span>
  )
}

/* ---------- metrics ---------- */
const METRICS = [
  { value: '+64%', label: 'agent precision' },
  { value: '+39%', label: 'discoverability' },
  { value: '2X', label: 'token efficiency' },
]

function Metrics() {
  return (
    <div className="mt-10 grid grid-cols-3 divide-x divide-line border-y border-line">
      {METRICS.map((m) => (
        <div key={m.label} className="px-5 py-5 first:pl-0">
          <div className="font-display text-[28px] leading-8 tracking-[-0.5px] text-ink">{m.value}</div>
          <div className="mt-1 text-[13px] text-gray-500">{m.label}</div>
        </div>
      ))}
    </div>
  )
}

/* ---------- feature bullets ---------- */
const FEATURES = [
  { title: 'Built for agents', desc: 'Connect Claude, Codex, Cursor and custom MCPs' },
  { title: 'Never goes stale', desc: 'Docs auto-sync to your code' },
  { title: 'Everyone can edit', desc: 'Browser or CLI, days become minutes' },
  { title: 'Enterprise ready', desc: 'SSO, RBAC, and custom domains, day one' },
]

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function Features() {
  return (
    <ul className="mt-10 space-y-4">
      {FEATURES.map((f) => (
        <li key={f.title} className="flex items-start gap-3">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint-50 text-mint-600">
            <Check />
          </span>
          <p className="text-[14.5px] leading-6 text-gray-600">
            <span className="font-medium text-ink">{f.title}</span>{' '}
            {f.desc}
          </p>
        </li>
      ))}
    </ul>
  )
}

/* ---------- form ---------- */
function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-ink">{label}</span>
      {props.rows ? (
        <textarea
          {...props}
          className="w-full resize-none rounded-lg border border-line bg-white px-3 py-2 text-[14px] text-ink placeholder:text-gray-400 focus:border-mint-500 focus:outline-none focus:ring-2 focus:ring-mint-100"
        />
      ) : (
        <input
          {...props}
          className="h-10 w-full rounded-lg border border-line bg-white px-3 text-[14px] text-ink placeholder:text-gray-400 focus:border-mint-500 focus:outline-none focus:ring-2 focus:ring-mint-100"
        />
      )}
    </label>
  )
}

function SalesForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-xl border border-line bg-white p-8 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)]">
        <span className="flex size-11 items-center justify-center rounded-full bg-mint-50 text-mint-600">
          <Check />
        </span>
        <h3 className="mt-4 font-display text-[26px] text-ink">Thanks for reaching out.</h3>
        <p className="mt-2 max-w-xs text-[14px] leading-6 text-gray-600">
          Our sales team will get back to you within one business day to book a call.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true) }}
      className="rounded-xl border border-line bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" type="text" name="firstName" placeholder="Jane" required />
        <Field label="Last name" type="text" name="lastName" placeholder="Doe" required />
      </div>
      <div className="mt-4 space-y-4">
        <Field label="Work email" type="email" name="email" placeholder="jane@company.com" required />
        <Field label="Company" type="text" name="company" placeholder="Company, Inc." required />
        <Field label="How can we help?" name="message" rows={4} placeholder="Tell us about your team, your docs, and what you're looking for..." />
      </div>
      <button
        type="submit"
        className="mt-6 flex h-10 w-full items-center justify-center gap-2 rounded bg-ink text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800"
      >
        Book a call
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" className="size-3">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      <p className="mt-5 text-[11.5px] leading-4 text-gray-400">
        If you are an EU/EEA resident, you can submit a privacy request{' '}
        <a href="#" className="underline hover:text-gray-600">here</a>.
        If you are a UK resident, you can submit a privacy request{' '}
        <a href="#" className="underline hover:text-gray-600">here</a>.
      </p>
    </form>
  )
}

/* ---------- hero: copy left, form right ---------- */
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

      <div className="relative mx-auto grid max-w-[1225px] gap-14 px-4 pb-24 pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* left copy */}
        <div>
          <AgentTrafficStat />
          <h1 className="mt-5 max-w-xl font-display text-[44px] leading-[48px] tracking-[-1px] text-ink lg:text-[54px] lg:leading-[56px] lg:tracking-[-2px]">
            The knowledge infrastructure agents build on
          </h1>
          <p className="mt-5 max-w-lg text-[17px] leading-6 text-gray-600">
            Your docs have two readers now: the developers and the agents they
            sent ahead. Mintlify makes your documentation work for both.
          </p>
          <Metrics />
          <Features />
        </div>

        {/* right form */}
        <div className="lg:pt-2">
          <SalesForm />
        </div>
      </div>
    </section>
  )
}

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <div className="mx-auto max-w-[1225px] border-x border-line">
          <LogoWall />
          <StatsTicker />
        </div>
      </main>
      <Footer />
    </div>
  )
}
