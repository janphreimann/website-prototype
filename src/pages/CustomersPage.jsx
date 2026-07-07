import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import LogoWall from '../components/LogoWall.jsx'
import CTA from '../components/CTA.jsx'

function ArrowRight({ className = 'size-3' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

/* ---------- customer data ---------- */
const FILTERS = ['All', 'AI', 'Developer tools', 'Finance', 'Enterprise']

const STORIES = [
  {
    name: 'Coinbase',
    slug: 'coinbase',
    tag: 'Finance',
    stat: '20min → 60s',
    statLabel: 'Doc update time',
    desc: 'How Coinbase cut documentation update time from twenty minutes to one.',
    featured: true,
  },
  {
    name: 'HubSpot',
    slug: 'hubspot',
    tag: 'Enterprise',
    stat: '50%',
    statLabel: 'Less eng time spent on docs',
    desc: 'How HubSpot halved the engineering resources needed to run its docs.',
    featured: true,
  },
  {
    name: 'Fidelity',
    slug: 'fidelity',
    tag: 'Finance',
    stat: '99.99%',
    statLabel: 'Uptime since launch',
    desc: 'How Fidelity ships regulated financial docs with near-perfect uptime.',
    featured: true,
  },
  {
    name: 'Zapier',
    slug: 'zapier',
    tag: 'Enterprise',
    stat: '3x',
    statLabel: 'Faster documentation updates',
    desc: 'How Zapier tripled the speed of shipping documentation changes.',
    featured: true,
  },
  {
    name: 'Laravel',
    slug: 'laravel',
    tag: 'Developer tools',
    stat: '3 days',
    statLabel: 'Migration time',
    desc: 'How Laravel migrated its entire documentation site in three days.',
    featured: true,
  },
  {
    name: 'Anaconda',
    slug: 'anaconda',
    tag: 'Developer tools',
    stat: '0 hrs',
    statLabel: 'Infra maintenance',
    desc: 'How Anaconda freed its engineers from documentation infrastructure.',
    featured: true,
  },
  { name: 'Anthropic', slug: 'anthropic', tag: 'AI', desc: 'AI-native docs for the builders of Claude.' },
  { name: 'Perplexity', slug: 'perplexity', tag: 'AI', desc: 'Answer-engine docs that answer questions themselves.' },
  { name: 'Cognition', slug: 'cognition', tag: 'AI', desc: 'Documentation for Devin, built for agents from day one.' },
  { name: 'Replit', slug: 'replit', tag: 'Developer tools', desc: 'Docs with better navigation and user experience.' },
  { name: 'Browserbase', slug: 'browserbase', tag: 'AI', desc: 'Where the docs are the product.' },
  { name: 'Resend', slug: 'resend', tag: 'Developer tools', desc: 'Email API docs developers actually enjoy reading.' },
  { name: 'PayPal', slug: 'paypal', tag: 'Finance', desc: 'Payments documentation at global scale.' },
  { name: 'X', slug: 'x', tag: 'Enterprise', desc: 'Developer platform docs for the town square.' },
  { name: 'AT&T', slug: 'att', tag: 'Enterprise', desc: 'Modern docs for a hundred-year-old network.' },
  { name: 'Lovable', slug: 'lovable', tag: 'AI', desc: 'Docs that keep pace with AI-speed shipping.' },
  { name: 'Harvey', slug: 'harvey', tag: 'AI', desc: 'Legal AI documentation with enterprise-grade trust.' },
  { name: 'Ollama', slug: 'ollama', tag: 'AI', desc: 'Local model docs for a fast-moving community.' },
  { name: 'PlanetScale', slug: 'planetscale', tag: 'Developer tools', desc: 'Database docs that scale like the product.' },
  { name: 'Kalshi', slug: 'kalshi', tag: 'Finance', desc: 'Prediction market API docs, regulated and rapid.' },
  { name: 'Together AI', slug: 'together-ai', tag: 'AI', desc: 'Inference platform docs for open-source models.' },
  { name: 'Dub', slug: 'dub', tag: 'Developer tools', desc: 'Link infrastructure docs, short and sweet.' },
  { name: 'Metronome', slug: 'metronome', tag: 'Developer tools', desc: 'Usage-based billing docs that stay in sync.' },
  { name: 'Polymarket', slug: 'polymarket', tag: 'Finance', desc: 'Market docs for the world’s biggest questions.' },
  { name: 'Meter', slug: 'meter', tag: 'Enterprise', desc: 'Networking docs for the modern office.' },
  { name: 'Worldcoin', slug: 'worldcoin', tag: 'Finance', desc: 'Identity and finance docs for everyone.' },
  { name: 'Decagon', slug: 'decagon', tag: 'AI', desc: 'AI support agents, documented for humans and agents.' },
  { name: 'Mirage', slug: 'mirage', tag: 'AI', desc: 'Generative video docs rendered in real time.' },
]

/* ---------- hero + filter tabs ---------- */
function Hero({ filter, setFilter }) {
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

      <div className="relative mx-auto max-w-[1225px] px-4 pb-12 pt-24 text-center">
        <h1 className="font-display text-[44px] leading-[48px] tracking-[-1px] text-ink lg:text-[54px] lg:leading-[56px] lg:tracking-[-2px]">
          Customers
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-6 text-gray-600">
          These teams ship to millions of users every day
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-[13.5px] font-medium transition-colors ${
                filter === f
                  ? 'border-ink bg-ink text-white'
                  : 'border-line bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- story cards ---------- */
function Logo({ story }) {
  return (
    <img
      src={`https://www.mintlify.com/images/customer-stories/${story.slug}-light.svg`}
      alt={story.name}
      className="max-h-6 w-auto max-w-[55%] opacity-80"
      onError={(e) => {
        e.currentTarget.outerHTML = `<span class="text-[15px] font-semibold tracking-wide text-gray-700">${story.name}</span>`
      }}
    />
  )
}

function StoryCard({ story }) {
  return (
    <a
      href="#"
      className="group flex flex-col rounded-xl border border-line bg-cream p-7 transition-colors hover:bg-cream-dark"
    >
      <div className="flex h-10 items-center">
        <Logo story={story} />
      </div>

      {story.stat ? (
        <div className="mt-6">
          <div className="font-display text-[34px] leading-9 tracking-[-1px] text-ink">{story.stat}</div>
          <div className="mt-1 text-[13px] text-gray-500">{story.statLabel}</div>
        </div>
      ) : null}

      <p className="mt-4 text-[13.5px] leading-5 text-gray-600">{story.desc}</p>

      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-mint-600 transition-colors group-hover:text-mint-500">
          {story.stat ? 'Read story' : 'Go to site'}
          <ArrowRight />
        </span>
        <span className="rounded-full border border-line bg-white px-2.5 py-0.5 text-[11.5px] text-gray-500">
          {story.tag}
        </span>
      </div>
    </a>
  )
}

function StoryGrid({ filter }) {
  const stories = STORIES.filter((s) => filter === 'All' || s.tag === filter)
  return (
    <section className="bg-white pb-24 pt-4">
      <div className="mx-auto max-w-[1225px] px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <StoryCard key={s.name} story={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- big quotes ---------- */
const QUOTES = [
  {
    quote:
      'Having this interface that feels like Notion or Google Docs, but is backed by version control, lets everyone on the team contribute to docs.',
    name: 'Matt Palmer',
    role: 'Developer Relations, Replit',
    color: '#f26207',
    mark: <svg viewBox="0 0 24 24" className="size-6" fill="#fff"><path d="M5 3h7v6H5zM12 9h7v6h-7zM5 15h7v6H5z" /></svg>,
  },
  {
    quote: 'At Browserbase, our docs are the product.',
    name: 'Paul Klein',
    role: 'Founder & CEO, Browserbase',
    color: '#e03d3d',
    mark: <span className="text-[26px] font-bold text-white">B</span>,
  },
]

function Quotes() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <div className="grid gap-4 lg:grid-cols-2">
          {QUOTES.map((q) => (
            <figure key={q.name} className="flex flex-col rounded-xl border border-line bg-cream p-10">
              <blockquote className="text-[22px] font-medium leading-8 text-ink">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-8">
                <span
                  className="flex size-10 items-center justify-center rounded-lg"
                  style={{ background: q.color }}
                >
                  {q.mark}
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

export default function CustomersPage() {
  const [filter, setFilter] = useState('All')
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-x-clip">
        <Hero filter={filter} setFilter={setFilter} />
        <div className="mx-auto max-w-[1225px] border-x border-line">
          <StoryGrid filter={filter} />
        </div>
        <LogoWall />
        <div className="mx-auto max-w-[1225px] border-x border-line">
          <Quotes />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
