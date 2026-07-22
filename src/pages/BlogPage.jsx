import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import CTA from '../components/CTA.jsx'

/* ---------- mock post visuals (CSS-only, in the style of the landing page) ---------- */
function ClaudeMock() {
  return (
    <div className="relative flex h-full items-center justify-center bg-[#e5674a]">
      <span className="flex size-16 items-center justify-center rounded-2xl bg-white text-3xl">✳</span>
      <span className="absolute bottom-4 left-4 rounded bg-black/20 px-2 py-0.5 font-mono text-[10px] text-white">claude code</span>
    </div>
  )
}

function FunnelMock() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 bg-[#f5f4ee]">
      {[44, 32, 20].map((w, i) => (
        <span key={w} className={`h-7 rounded ${i === 2 ? 'bg-mint-500' : 'bg-gray-300'}`} style={{ width: `${w * 4}px` }} />
      ))}
      <span className="mt-2 font-mono text-[10px] text-gray-500">docs → signups</span>
    </div>
  )
}

function MarkdownMock() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 bg-[#0d0f0d] px-8 font-mono text-[12px]">
      <span className="text-[#7be8ad]"># Markdown is the easy part</span>
      <span className="h-2 w-40 rounded-full bg-white/15" />
      <span className="h-2 w-52 rounded-full bg-white/15" />
      <span className="h-2 w-32 rounded-full bg-white/15" />
      <span className="text-gray-500">```structure &gt; syntax```</span>
    </div>
  )
}

function TokenMock() {
  return (
    <div className="flex h-full items-end justify-center gap-4 bg-[#0b2618] px-10 pb-10">
      {[
        { h: 60, c: '#1fe394', label: 'agent' },
        { h: 90, c: '#7be8ad', label: 'search' },
        { h: 45, c: '#1d4a30', label: 'chat' },
        { h: 75, c: '#123722', label: 'docs' },
      ].map((b) => (
        <div key={b.label} className="flex flex-col items-center gap-2">
          <span className="w-9 rounded-t" style={{ height: `${b.h}px`, background: b.c }} />
          <span className="font-mono text-[9px] text-[#7be8ad]">{b.label}</span>
        </div>
      ))}
    </div>
  )
}

function EditorUxMock() {
  return (
    <div className="relative flex h-full items-center justify-center bg-white">
      <div
        className="absolute inset-0 opacity-50"
        style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
      />
      <div className="relative w-56 space-y-2 rounded-lg border border-line bg-white p-3.5 shadow-lg">
        <div className="flex items-center gap-1.5">
          {['B', 'I', '⌘', '¶'].map((c) => (
            <span key={c} className="flex size-6 items-center justify-center rounded border border-line text-[10px] text-gray-500">{c}</span>
          ))}
          <span className="ml-auto h-5 w-10 rounded bg-mint-400" />
        </div>
        <span className="block h-2 w-40 rounded-full bg-gray-200" />
        <span className="block h-2 w-32 rounded-full bg-gray-200" />
      </div>
      <span className="absolute right-5 top-5 rounded-full bg-mint-50 px-2 py-0.5 text-[10px] font-medium text-mint-600">+22</span>
    </div>
  )
}

function HelpCenterMock() {
  return (
    <div className="flex h-full items-center justify-center gap-2.5 bg-[#101210] px-8">
      {[0, 1, 2].map((i) => (
        <div key={i} className="w-24 space-y-2 rounded-lg bg-white/5 p-3">
          <span className={`flex size-6 items-center justify-center rounded ${i === 1 ? 'bg-mint-400 text-ink' : 'bg-white/10 text-white/60'} text-[11px]`}>?</span>
          <span className="block h-2 w-14 rounded-full bg-white/20" />
          <span className="block h-2 w-10 rounded-full bg-white/10" />
        </div>
      ))}
    </div>
  )
}

function CollabMock() {
  return (
    <div className="relative flex h-full items-center justify-center bg-[#0d0f0d]">
      <div className="relative flex w-60 items-center gap-2 rounded-lg bg-white p-2.5 shadow-lg">
        <span className="flex size-6 items-center justify-center rounded bg-mint-50 text-[10px] text-mint-600">✎</span>
        <span className="h-2 w-16 rounded-full bg-gray-200" />
        <span className="flex -space-x-1">
          {['#ef4444', '#f59e0b', '#3b82f6', '#a855f7'].map((c) => (
            <span key={c} className="size-4 rounded-full border border-white" style={{ background: c }} />
          ))}
        </span>
        <span className="ml-auto h-5 w-11 rounded bg-mint-400" />
      </div>
      <span className="absolute left-8 top-8 rounded bg-amber-200 px-1.5 py-0.5 font-mono text-[10px] text-amber-800">AGENT 130</span>
      <span className="absolute bottom-8 right-8 rounded bg-sky-200 px-1.5 py-0.5 font-mono text-[10px] text-sky-800">AGENT 007</span>
    </div>
  )
}

function ScoreMock() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#101210]">
      {[
        { n: 99, c: '#4ade80' },
        { n: 82, c: '#facc15' },
        { n: 65, c: '#fb923c' },
      ].map((r) => (
        <div key={r.n} className="flex w-52 items-center gap-3">
          <span className="w-8 font-mono text-lg" style={{ color: r.c }}>{r.n}</span>
          <span className="h-px w-4 bg-gray-600" />
          <span className="h-3 flex-1 rounded-sm bg-gray-500/60" />
        </div>
      ))}
    </div>
  )
}

function FoundersMock() {
  return (
    <div className="relative h-full bg-[#f5f4ee]">
      <svg viewBox="0 0 300 180" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M20 150 L 90 130 L 150 140 L 210 80 L 285 35" stroke="#0d9e65" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="285" cy="35" r="5" fill="#0d9e65" />
        <path d="M20 160 L 285 160" stroke="#d1d0ca" strokeWidth="1" />
      </svg>
      <span className="absolute left-5 top-5 rounded border border-line bg-white px-2 py-0.5 font-mono text-[10px] text-gray-600">time to first doc</span>
    </div>
  )
}

function FeaturedMock() {
  return (
    <div className="relative h-full min-h-[280px] bg-[#0b2618]">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
      />
      <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 space-y-2 rounded-xl bg-[#08160e] p-4 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded bg-[#123722] text-[11px] text-[#7be8ad]">▲</span>
          <span className="font-mono text-[11px] text-[#7be8ad]">agent.read(docs)</span>
        </div>
        <span className="block h-2 w-40 rounded-full bg-[#1d4a30]" />
        <span className="block h-2 w-48 rounded-full bg-[#1d4a30]" />
        <div className="flex gap-2 pt-1 font-mono text-[10px]">
          <span className="rounded bg-[#123722] px-1.5 py-0.5 text-mint-400">+64% precise</span>
          <span className="rounded bg-[#123722] px-1.5 py-0.5 text-mint-400">½ tokens</span>
          <span className="rounded bg-[#123722] px-1.5 py-0.5 text-mint-400">1.5x faster</span>
        </div>
      </div>
    </div>
  )
}

/* ---------- data ---------- */
const CATEGORIES = ['All articles', 'AI trends', 'Announcements', 'For founders', 'Engineering', 'Design', 'Best practices']

const FEATURED = {
  tag: 'AI trends',
  date: 'Jun 8, 2026',
  readTime: '5 min read',
  title: 'Docs as an abstraction layer for coding agents',
  excerpt:
    'A large engineering org ran controlled experiments to measure how structured Mintlify docs affect agent performance on massive codebases. The results: 64% more precise, 39% more discoverable, half the tokens, 1.5x faster.',
  author: { initials: 'HW', name: 'Han Wang', role: 'Co-Founder' },
}

const POSTS = [
  {
    tag: 'Best practices',
    date: 'Jun 25, 2026',
    title: "How Claude Code's documentation team makes feedback actionable with Mintlify",
    mock: <ClaudeMock />,
  },
  {
    tag: 'Best practices',
    date: 'Jun 4, 2026',
    title: 'Your documentation is a demand channel',
    mock: <FunnelMock />,
  },
  {
    tag: 'AI trends',
    date: 'Jun 3, 2026',
    title: 'Markdown is the easy part',
    mock: <MarkdownMock />,
  },
  {
    tag: 'AI trends',
    date: 'May 25, 2026',
    title: 'Tokenmaxxing: one AI budget, four jobs',
    mock: <TokenMock />,
  },
  {
    tag: 'Design',
    date: 'May 4, 2026',
    title: '22 UX improvements to the web editor',
    mock: <EditorUxMock />,
  },
  {
    tag: 'Announcements',
    date: 'May 1, 2026',
    title: 'Introducing the Mintlify Help Center Starter Kit',
    mock: <HelpCenterMock />,
  },
  {
    tag: 'Announcements',
    date: 'Apr 29, 2026',
    title: 'Introducing the collaborative editor built for teams and agents',
    mock: <CollabMock />,
  },
  {
    tag: 'Engineering',
    date: 'Apr 27, 2026',
    title: 'Can agents read your docs?',
    mock: <ScoreMock />,
  },
  {
    tag: 'For founders',
    date: 'Apr 14, 2026',
    title: 'What founders get wrong about developer docs',
    mock: <FoundersMock />,
  },
]

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

/* ---------- sections ---------- */
function FeaturedPost() {
  return (
    <a href={`/blog/${slugify(FEATURED.title)}`} className="group grid overflow-hidden rounded-xl border border-line md:grid-cols-2">
      <FeaturedMock />
      <div className="flex flex-col justify-center p-8 lg:p-12">
        <div className="flex items-center gap-2 text-[13px]">
          <span className="rounded border border-line bg-white px-2 py-0.5 font-medium text-ink">{FEATURED.tag}</span>
          <span className="text-gray-400">{FEATURED.date}</span>
          <span className="text-gray-300">·</span>
          <span className="text-gray-400">{FEATURED.readTime}</span>
        </div>
        <h2 className="mt-4 font-display text-[30px] leading-9 tracking-[-0.5px] text-ink transition-colors group-hover:text-gray-700 lg:text-[36px] lg:leading-[42px]">
          {FEATURED.title}
        </h2>
        <p className="mt-4 text-[14.5px] leading-6 text-gray-600">{FEATURED.excerpt}</p>
        <div className="mt-6 flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-full bg-mint-50 text-[12px] font-semibold text-mint-600">
            {FEATURED.author.initials}
          </span>
          <span>
            <span className="block text-[13.5px] font-medium text-ink">{FEATURED.author.name}</span>
            <span className="block text-[12.5px] text-gray-500">{FEATURED.author.role}</span>
          </span>
        </div>
      </div>
    </a>
  )
}

function CategoryTabs({ active, setActive }) {
  return (
    <div className="no-scrollbar -mx-4 mt-14 flex gap-2 overflow-x-auto border-b border-line px-4 pb-px">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`whitespace-nowrap border-b-2 px-3 pb-3 pt-1 text-[13.5px] font-medium transition-colors ${
            active === cat
              ? 'border-ink text-ink'
              : 'border-transparent text-gray-500 hover:text-ink'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

function PostGrid({ active }) {
  const posts = active === 'All articles' ? POSTS : POSTS.filter((p) => p.tag === active)
  return (
    <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <a key={p.title} href={`/blog/${slugify(p.title)}`} className="group">
          <div className="h-[220px] overflow-hidden rounded-xl border border-line">{p.mock}</div>
          <div className="mt-4 flex items-center gap-2 text-[13px]">
            <span className="rounded border border-line bg-white px-2 py-0.5 font-medium text-ink">{p.tag}</span>
            <span className="text-gray-400">{p.date}</span>
          </div>
          <h3 className="mt-2.5 text-[16px] font-medium leading-6 text-ink transition-colors group-hover:text-gray-600">
            {p.title}
          </h3>
        </a>
      ))}
      {posts.length === 0 && (
        <p className="col-span-full py-16 text-center text-[14px] text-gray-500">No articles in this category yet.</p>
      )}
    </div>
  )
}

export default function BlogPage() {
  const [active, setActive] = useState('All articles')
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-x-clip pt-14">
        <div className="relative">
          {/* dotted texture left/right */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-56 opacity-50 max-xl:hidden"
            style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-56 opacity-50 max-xl:hidden"
            style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />

          <div className="relative mx-auto max-w-[1225px] border-x border-line bg-white px-4 pb-24 pt-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[13px] text-gray-600">
              <span className="size-1.5 rounded-full bg-mint-500" />
              Blog
            </span>
            <h1 className="mt-5 font-display text-[44px] leading-[48px] tracking-[-1px] text-ink lg:text-[54px] lg:leading-[56px] lg:tracking-[-2px]">
              Latest updates
            </h1>

            <div className="mt-12">
              <FeaturedPost />
            </div>

            <CategoryTabs active={active} setActive={setActive} />
            <PostGrid active={active} />
          </div>
        </div>

        <div className="mx-auto max-w-[1225px] border-x border-t border-line">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
