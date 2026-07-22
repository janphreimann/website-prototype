import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import CTA from '../components/CTA.jsx'
import { DocIcon } from '../docs/DocsUI.jsx'

/* ---------- table of contents ---------- */
const TOC = [
  { id: 'how-we-ran-the-benchmark', label: 'How we ran the benchmark' },
  { id: 'what-the-benchmark-found', label: 'What the benchmark found' },
  { id: 'its-the-map-that-matters', label: "It's the map that matters" },
  { id: 'what-this-means-for-your-docs', label: 'What this means for your docs' },
]

function Toc() {
  const [activeId, setActiveId] = useState(TOC[0].id)

  useEffect(() => {
    const onScroll = () => {
      let current = TOC[0].id
      for (const entry of TOC) {
        const el = document.getElementById(entry.id)
        if (el && el.getBoundingClientRect().top < 160) current = entry.id
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <div className="mb-5 font-mono text-[11.5px] font-medium uppercase tracking-wider text-gray-400">
        On this page
      </div>
      <ul className="space-y-4">
        {TOC.map((entry) => (
          <li key={entry.id} className="relative pl-4">
            {activeId === entry.id && (
              <span className="absolute left-0 top-[3px] h-[18px] w-[2px] rounded-full bg-ink" />
            )}
            <a
              href={`#${entry.id}`}
              className={`block text-[16px] leading-[22px] transition-colors ${
                activeId === entry.id ? 'font-semibold text-ink' : 'text-gray-500 hover:text-ink'
              }`}
            >
              {entry.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- contact card ---------- */
function ContactCard() {
  return (
    <div className="rounded-xl border border-line bg-cream p-5">
      <div className="flex -space-x-2">
        <span className="flex size-8 items-center justify-center rounded-full border-2 border-cream bg-mint-100 text-[11px] font-semibold text-mint-700">AS</span>
        <span className="flex size-8 items-center justify-center rounded-full border-2 border-cream bg-[#e5674a] text-[11px] font-semibold text-white">HW</span>
      </div>
      <p className="mt-3 text-[13.5px] font-medium leading-5 text-ink">Want docs your agents can actually navigate?</p>
      <p className="mt-1.5 text-[12.5px] leading-5 text-gray-500">Talk to our team about making your documentation agent-ready.</p>
      <a
        href="/contact"
        className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-ink px-3 py-2 text-[13px] font-medium text-white transition-colors hover:bg-gray-800"
      >
        Talk to sales
      </a>
      <a
        href="/"
        className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-gray-50"
      >
        Get started free
      </a>
    </div>
  )
}

/* ---------- share row ---------- */
function ShareRow() {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }
  return (
    <div className="flex items-center gap-1.5">
      <a
        href="https://www.linkedin.com/sharing/share-offsite/"
        target="_blank" rel="noreferrer"
        aria-label="Share on LinkedIn"
        className="flex size-7 items-center justify-center rounded-full bg-gray-100 text-[10px] font-semibold text-gray-600 transition-colors hover:bg-gray-200"
      >
        in
      </a>
      <a
        href="https://twitter.com/intent/tweet"
        target="_blank" rel="noreferrer"
        aria-label="Share on X"
        className="flex size-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
      >
        <DocIcon name="x" className="size-3" />
      </a>
      <a
        href="https://news.ycombinator.com/submit"
        target="_blank" rel="noreferrer"
        aria-label="Share on Hacker News"
        className="flex size-7 items-center justify-center rounded-md bg-gray-200 text-[11px] font-bold text-gray-600 transition-colors hover:bg-gray-300"
      >
        Y
      </a>
      <button
        onClick={copy}
        aria-label="Copy link"
        className="flex size-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
      >
        <DocIcon name={copied ? 'check' : 'copy'} className="size-3" />
      </button>
    </div>
  )
}

/* ---------- author card: image, name/title, share icons directly under (generic avatar, not a real photo) ---------- */
function AuthorCard() {
  return (
    <div className="w-full max-w-[150px]">
      <span className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-mint-100 to-mint-400/40">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-10 text-mint-700">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        </svg>
      </span>
      <div className="mt-3">
        <div className="text-[15px] font-semibold leading-5 text-ink">Aadit Shah</div>
        <div className="text-[13px] text-gray-500">Engineering</div>
      </div>
      <div className="mt-3">
        <ShareRow />
      </div>
    </div>
  )
}

/* ---------- chart 1: avg 404s per task ---------- */
const ERROR_RATE = [
  { label: 'HTML', value: 2.23 },
  { label: 'Markdown', value: 1.42 },
  { label: 'Markdown + llms.txt', value: 0.11 },
]

function ErrorRateChart() {
  const [hover, setHover] = useState(null)
  const max = Math.max(...ERROR_RATE.map((d) => d.value))
  return (
    <div className="my-7 rounded-xl border border-line bg-cream/40 p-6">
      <div className="text-[12.5px] font-medium text-gray-500">Average 404 errors per task</div>
      <div className="mt-6 flex items-end justify-center gap-12" style={{ height: 200 }}>
        {ERROR_RATE.map((d, i) => (
          <div
            key={d.label}
            className="flex flex-col items-center gap-3"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <span className={`font-mono text-[13px] font-semibold transition-colors ${hover === i ? 'text-mint-600' : 'text-ink'}`}>
              {d.value.toFixed(2)}
            </span>
            <div
              className={`w-16 rounded-t transition-colors ${hover === i ? 'bg-mint-600' : 'bg-mint-500'}`}
              style={{ height: `${Math.max((d.value / max) * 168, 4)}px` }}
            />
            <span className="max-w-[92px] text-center text-[12px] leading-4 text-gray-500">{d.label}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-line" />
    </div>
  )
}

/* ---------- chart 2: composition of 404s by cause ---------- */
const CAUSES = [
  { key: 'md', label: 'Requested an existing .md page', color: 'bg-mint-600' },
  { key: 'llms', label: 'Requested /llms.txt', color: 'bg-amber-500' },
  { key: 'guess', label: 'Guessed a page that never existed', color: 'bg-red-500' },
]

const COMPOSITION = [
  { label: 'HTML', md: 40, llms: 35, guess: 25 },
  { label: 'Markdown', md: 20, llms: 15, guess: 65 },
  { label: 'Markdown + llms.txt', md: 30, llms: 10, guess: 60 },
]

function CompositionChart() {
  return (
    <div className="my-7 rounded-xl border border-line bg-cream/40 p-6">
      <div className="text-[12.5px] font-medium text-gray-500">Composition of 404s by cause</div>

      <div className="mt-5 flex flex-wrap gap-4">
        {CAUSES.map((c) => (
          <div key={c.key} className="flex items-center gap-1.5 text-[12px] text-gray-600">
            <span className={`size-2.5 rounded-sm ${c.color}`} />
            {c.label}
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-4">
        {COMPOSITION.map((row) => (
          <div key={row.label}>
            <div className="mb-1.5 text-[12.5px] font-medium text-gray-600">{row.label}</div>
            <div className="flex h-6 gap-0.5 overflow-hidden rounded-md">
              <div className="bg-mint-600" style={{ width: `${row.md}%` }} />
              <div className="bg-amber-500" style={{ width: `${row.llms}%` }} />
              <div className="bg-red-500" style={{ width: `${row.guess}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[380px] border-collapse text-left text-[12.5px]">
          <thead>
            <tr className="border-b border-line text-gray-400">
              <th className="py-2 pr-3 font-medium">Format</th>
              <th className="py-2 pr-3 font-medium">.md page</th>
              <th className="py-2 pr-3 font-medium">/llms.txt</th>
              <th className="py-2 font-medium">Wrong guess</th>
            </tr>
          </thead>
          <tbody>
            {COMPOSITION.map((row) => (
              <tr key={row.label} className="border-b border-line last:border-0">
                <td className="py-2 pr-3 text-gray-700">{row.label}</td>
                <td className="py-2 pr-3 text-gray-500">{row.md}%</td>
                <td className="py-2 pr-3 text-gray-500">{row.llms}%</td>
                <td className="py-2 text-gray-500">{row.guess}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ---------- model comparison stats ---------- */
const MODEL_STATS = [
  { model: 'Opus 4.8', before: 2.11, after: 0.08 },
  { model: 'Fable 5', before: 1.13, after: 0.0 },
  { model: 'GPT-5.6', before: 6.79, after: 0.02 },
]

function ModelStats() {
  return (
    <div className="my-7 grid gap-3 sm:grid-cols-3">
      {MODEL_STATS.map((m) => (
        <div key={m.model} className="rounded-xl border border-line p-4">
          <div className="text-[13px] font-medium text-ink">{m.model}</div>
          <div className="mt-2.5 flex items-center gap-2 font-mono text-[13px]">
            <span className="text-gray-400 line-through">{m.before.toFixed(2)}</span>
            <DocIcon name="arrowRight" className="size-3 text-gray-300" />
            <span className="font-semibold text-mint-600">{m.after.toFixed(2)}</span>
          </div>
          <div className="mt-1 text-[11.5px] text-gray-400">avg. 404s per task</div>
        </div>
      ))}
    </div>
  )
}

/* ---------- callout ---------- */
function Summary({ children }) {
  return (
    <div className="my-8 rounded-xl border border-line bg-cream/60 p-5">
      <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">Summary</div>
      <p className="text-[14.5px] leading-6 text-gray-700">{children}</p>
    </div>
  )
}

/* ---------- related posts ---------- */
const RELATED = [
  { tag: 'Best practices', date: 'Jun 25, 2026', title: "How Claude Code's documentation team makes feedback actionable with Mintlify", author: 'Ethan Palm' },
  { tag: 'AI trends', date: 'Jun 8, 2026', title: 'Docs as an abstraction layer for coding agents', author: 'Han Wang' },
]

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function RelatedPosts() {
  return (
    <div className="mt-16 border-t border-line pt-10">
      <div className="text-[13px] font-semibold text-ink">More from the blog</div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {RELATED.map((p) => (
          <a key={p.title} href={`/blog/${slugify(p.title)}`} className="group rounded-xl border border-line p-5 transition-colors hover:border-mint-400/60">
            <div className="flex items-center gap-2 text-[12.5px]">
              <span className="rounded border border-line bg-white px-2 py-0.5 font-medium text-ink">{p.tag}</span>
              <span className="text-gray-400">{p.date}</span>
            </div>
            <h3 className="mt-2.5 text-[15px] font-medium leading-5 text-ink transition-colors group-hover:text-gray-600">
              {p.title}
            </h3>
            <div className="mt-3 text-[12.5px] text-gray-500">{p.author}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

/* ---------- page ---------- */
export default function BlogPostPage() {
  useEffect(() => {
    document.title = 'Docs URL Benchmark: Markdown & llms.txt > HTML - Mintlify Blog'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-14">
        {/* header */}
        <div className="mx-auto max-w-[1160px] px-4 pt-16">
          <div className="mx-auto max-w-[640px]">
            <a href="/blog" className="inline-flex items-center gap-3 text-[19px] font-medium text-ink">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                <DocIcon name="arrowLeft" className="size-4" />
              </span>
              All articles
            </a>

            <div className="mt-9 font-mono text-[13px] uppercase tracking-widest">
              <span className="text-mint-600">Engineering</span>
              <span className="mx-2.5 text-gray-300">/</span>
              <span className="text-gray-400">July 17, 2026</span>
            </div>

            <h1 className="mt-3 text-[42px] font-bold leading-[46px] tracking-[-1px] text-ink lg:text-[52px] lg:leading-[56px]">
              Docs URL Benchmark: Markdown &amp; llms.txt &gt; HTML
            </h1>

            <div className="mt-6 font-mono text-[13px] uppercase tracking-widest text-gray-400">
              4 minutes read
            </div>
          </div>

          <div className="mt-10 border-t border-line" />
        </div>

        {/* body + sidebars: left author rail, centered article, right toc rail */}
        <div className="mx-auto flex max-w-[1160px] justify-center gap-10 px-4 pb-10 pt-10">
          <aside className="hidden w-[220px] shrink-0 lg:block">
            <div className="sticky top-24">
              <AuthorCard />
            </div>
          </aside>

          <article className="min-w-0 max-w-[640px] flex-1 text-[15.5px] leading-7 text-gray-700">
            <Summary>
              Browserbase's CEO flagged that Claude Code kept failing on Mintlify documentation — including our own. The
              cause: stripping pages down to markdown for agents also stripped out the navigation, leaving agents to guess
              at URLs that didn't exist. Linking to an llms.txt file fixed most of it immediately, so we ran a 2,400-run
              benchmark across four documentation formats to see exactly how much it mattered.
            </Summary>

            <p>
              Docs used to be written for one kind of reader. Now agents read them too, and they're a much less
              forgiving audience: an agent fetches a page, guesses at a link, and if that link doesn't exist, it
              doesn't ask for directions — it just tries another guess.
            </p>
            <p className="mt-5">
              Paul, Browserbase's CEO, was the one who noticed it first. Claude Code kept failing on documentation
              tasks — not just against Browserbase's own docs, but against Mintlify's. Reproducibly. On our own site.
            </p>
            <p className="mt-5">
              The cause was almost embarrassing. We strip pages down to clean markdown so agents don't have to parse a
              full HTML document, and that same stripping quietly removes the navigation along with it. An agent lands
              on a page with no sitemap and no sidebar — nothing telling it what else exists. It's exploring blind,
              with no map, so it starts guessing at paths that were never real.
            </p>
            <p className="mt-5">
              The fix took minutes: link to <code className="rounded border border-line bg-cream px-1.5 py-0.5 font-mono text-[13px] text-ink">llms.txt</code> — a
              plain-text table of contents that already existed on every Mintlify site — from the bottom of every
              markdown page. The 404s mostly disappeared. That was suspicious enough that we didn't just ship it; we
              benchmarked it.
            </p>

            <h2 id="how-we-ran-the-benchmark" className="mt-12 scroll-mt-24 text-[22px] font-semibold leading-8 tracking-[-0.3px] text-ink">
              How we ran the benchmark
            </h2>
            <p className="mt-4">
              We tested four ways of serving the same documentation: raw HTML, plain markdown, markdown with a link to
              llms.txt, and markdown with llms.txt inlined directly into the page. A local proxy sat in front of 20
              real Mintlify documentation sites and logged every request an agent made. Each site got 5 realistic
              questions, each question ran 3 times per format, across Claude Code on Sonnet 5 and Codex on GPT-5.5 —
              2,400 runs in total.
            </p>

            <h2 id="what-the-benchmark-found" className="mt-12 scroll-mt-24 text-[22px] font-semibold leading-8 tracking-[-0.3px] text-ink">
              What the benchmark found
            </h2>
            <p className="mt-4">
              Raw HTML was the worst offender. Agents thrashed — requesting <code className="rounded border border-line bg-cream px-1.5 py-0.5 font-mono text-[13px] text-ink">.md</code> variants
              of pages that only existed as HTML, requesting an <code className="rounded border border-line bg-cream px-1.5 py-0.5 font-mono text-[13px] text-ink">/llms.txt</code> that
              wasn't linked from anywhere, guessing at paths that never existed. A single link to llms.txt cut dead-end
              requests by roughly 90%, and wasted fetches and token spend dropped right along with it.
            </p>

            <ErrorRateChart />

            <p>
              Accuracy barely moved — every format landed in the mid-to-high 90s. The map didn't make agents smarter
              about the content, it made them faster and cheaper at finding it. Same destination, far less wandering.
            </p>

            <h2 id="its-the-map-that-matters" className="mt-12 scroll-mt-24 text-[22px] font-semibold leading-8 tracking-[-0.3px] text-ink">
              It's the map that matters
            </h2>
            <p className="mt-4">
              The surprising part wasn't that markdown helped — it's that markdown alone wasn't the fix. Plain
              markdown with no llms.txt was, in some ways, the worst format to hand an agent: without a map, it
              invents <code className="rounded border border-line bg-cream px-1.5 py-0.5 font-mono text-[13px] text-ink">.md</code> paths
              of its own and ends up guessing wrong more often than it did against raw HTML.
            </p>

            <CompositionChart />

            <p>
              Linking to llms.txt and inlining it into every page both eliminated 404s almost entirely — but inlining
              meant paying for that table of contents on every single page load. Linking got the same result for a
              fraction of the tokens.
            </p>
            <p className="mt-5">
              We reran the same 20 sites against three more models — Opus 4.8, Fable 5, and GPT-5.6 — and the pattern
              held everywhere. Every model went from real, repeated 404s down to essentially zero once llms.txt was
              linked, on 19 or 20 out of 20 sites.
            </p>

            <ModelStats />

            <h2 id="what-this-means-for-your-docs" className="mt-12 scroll-mt-24 text-[22px] font-semibold leading-8 tracking-[-0.3px] text-ink">
              What this means for your docs
            </h2>
            <p className="mt-4">
              The takeaway is small and concrete: link to an llms.txt file from every page. That's it. It's not a
              rewrite, and it held up across five different models.
            </p>
            <p className="mt-5">
              We've open-sourced the benchmark, so you can point it at your own docs and see the same thing for
              yourself.
            </p>
            <p className="mt-5">
              Docs used to only have to make sense to a person reading top to bottom. Now they also have to make
              sense to something that lands on one page with no memory of how it got there. Both audiences are
              permanent.
            </p>

            <RelatedPosts />
          </article>

          <aside className="hidden w-[220px] shrink-0 lg:block">
            <div className="sticky top-24 space-y-8">
              <Toc />
              <ContactCard />
            </div>
          </aside>
        </div>

        <div className="mx-auto max-w-[1225px] border-t border-line">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
