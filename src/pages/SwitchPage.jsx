import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SectionHeading, { BlackButton } from '../components/SectionHeading.jsx'

function ArrowRight({ className = 'size-3' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

/* ---------- hero ---------- */
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
          Switch to Mintlify
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl font-display text-[44px] leading-[48px] tracking-[-1px] text-ink lg:text-[54px] lg:leading-[56px] lg:tracking-[-2px]">
          Switch instruction manual
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-6 text-gray-600">
          Why and how teams switch to Mintlify. Documentation experiences for
          over <b className="font-semibold text-ink">100 million builders</b> worldwide &mdash;
          turning endless searching into instant answers.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded bg-ink px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-gray-800">
            Get started for free
            <ArrowRight />
          </a>
          <a href="#" className="rounded border border-line bg-white px-5 py-2.5 text-[14px] font-medium transition-colors hover:bg-gray-50">
            Get a demo
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- three core problems ---------- */
const PROBLEMS = [
  {
    icon: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
    title: 'Burden, not benefit',
    desc: 'Traditional platforms make every update an engineering project, with AI bolted on as an afterthought.',
  },
  {
    icon: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
    title: 'Misses user needs',
    desc: 'Keyword search returns irrelevant results for the specific, technical questions developers actually ask.',
  },
  {
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8',
    title: 'Scales support tickets',
    desc: 'Every question the docs fail to answer becomes a ticket that interrupts users and drains your team.',
  },
]

function Problems() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="The problem with traditional docs."
          line2="Blocked developers mean unrealized product potential."
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <article key={p.title} className="rounded-xl border border-line bg-[#f9f6f3] p-7">
              <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-white text-gray-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d={p.icon} />
                </svg>
              </span>
              <h3 className="mt-5 text-[16px] font-medium text-ink">{p.title}</h3>
              <p className="mt-2 text-[13.5px] leading-5 text-gray-600">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- reason 1: purpose-built for developers ---------- */
function PurposeBuilt() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Purpose-built for developers."
          line2="Not a general-purpose CMS with docs stapled on."
        />
        <div className="grid overflow-hidden rounded-xl border border-line lg:grid-cols-[1fr_1.4fr]">
          <div
            className="relative flex min-h-[280px] items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#c94a1a 0%,#f26522 55%,#ff8e4d 100%)' }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />
            <div className="relative flex size-[88px] items-center justify-center rounded-2xl bg-white text-[40px] font-bold text-[#f26522] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.35)]">
              Y
            </div>
          </div>
          <div className="flex flex-col justify-center bg-cream p-10">
            <blockquote className="max-w-lg text-[22px] font-medium leading-8 text-ink">
              &ldquo;Every YC batch we consistently see the top performing startups
              use Mintlify to build their docs.&rdquo;
            </blockquote>
            <div className="mt-5 text-[13.5px] text-gray-600">
              <span className="font-semibold text-ink">Harj Taggar</span> · Group Partner, Y Combinator
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- reason 2: optimized for user success ---------- */
const METRICS = [
  { stat: '50%', label: 'Reduction in support tickets' },
  { stat: '2x', label: 'Faster time to first API call' },
  { stat: '60%', label: 'Of questions answered without human help' },
]

function UserSuccess() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Optimized for user success."
          line2="Conversational, context-aware docs that answer instead of listing links."
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.label} className="rounded-xl border border-line bg-cream p-8 text-center">
              <div className="font-display text-[52px] leading-none tracking-[-2px] text-ink">{m.stat}</div>
              <div className="mt-3 text-[13.5px] text-gray-600">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- reason 3 + social proof ---------- */
const LOGOS = ['Anthropic', 'Coinbase', 'Replit', 'HubSpot', 'X', 'Perplexity', 'IBM', 'PayPal']

function Scales() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Scales with your product."
          line2="10,000+ companies. 100 million developers, unblocked."
        />
        <p className="-mt-6 mb-12 max-w-2xl text-[15px] leading-6 text-gray-600">
          Documentation complexity grows with every product launch, API version,
          and integration. Mintlify keeps the experience fast and coherent as
          your surface area multiplies &mdash; without adding headcount.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {LOGOS.map((name) => (
            <div key={name} className="flex h-[110px] items-center justify-center rounded-lg border border-line bg-cream">
              <span className="text-[15px] font-semibold tracking-wide text-gray-700">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- product tiers ---------- */
const TIERS = [
  {
    title: 'Startup',
    desc: 'Build a world-class docs experience from day one, without hiring a docs team.',
    cta: 'Explore the startup program',
    href: '/startups',
  },
  {
    title: 'Enterprise',
    desc: 'Modernize without the rebuild. Migrate legacy docs with white-glove support and enterprise controls.',
    cta: 'Explore enterprise',
    href: '/enterprise',
  },
]

function Tiers() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Wherever you are."
          line2="Two paths to switch, one destination."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {TIERS.map((t) => (
            <a key={t.title} href={t.href} className="group flex flex-col rounded-xl border border-line bg-cream p-9 transition-colors hover:bg-cream-dark">
              <h3 className="font-display text-[26px] tracking-[-0.5px] text-ink">{t.title}</h3>
              <p className="mt-3 max-w-md text-[14.5px] leading-6 text-gray-600">{t.desc}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[13.5px] font-medium text-mint-600 transition-colors group-hover:text-mint-500">
                {t.cta}
                <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- getting started steps ---------- */
const STEPS = [
  { title: 'Request a preview', desc: 'See your current docs rebuilt on Mintlify before committing to anything.' },
  { title: 'Build on the free tier', desc: 'Kick the tires with your own content, at your own pace.' },
  { title: 'Experience AI in action', desc: 'Watch the assistant answer real user questions from your docs.' },
  { title: 'Run a pilot', desc: 'Most teams validate with a scoped pilot in two to four weeks.' },
  { title: 'Migrate and scale', desc: 'Move everything over with migration tooling or our white-glove service.' },
]

function GettingStarted() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="How the switch works."
          line2="Five steps from legacy docs to agent-ready knowledge."
        >
          <BlackButton href="/docs">Read the quickstart</BlackButton>
        </SectionHeading>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-line bg-[#f9f6f3] p-6">
              <span className="flex size-8 items-center justify-center rounded-full border border-line bg-white text-[13px] font-semibold text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                {i + 1}
              </span>
              <h3 className="mt-4 text-[15px] font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
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
        <div>
          <h2 className="max-w-lg font-display text-[38px] leading-[44px] tracking-[-1px] text-ink">
            Make documentation your winning advantage
          </h2>
          <p className="mt-3 text-[14px] text-gray-600">
            See <a href="/pricing" className="font-medium text-ink underline underline-offset-2 hover:text-gray-600">pricing details</a> or
            jump into the <a href="/docs" className="font-medium text-ink underline underline-offset-2 hover:text-gray-600">quickstart</a>.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="rounded border border-line bg-white px-4 py-2.5 text-[13.5px] font-medium transition-colors hover:bg-gray-50">
            Get a demo
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded bg-ink px-4 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800">
            Get started for free
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function SwitchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <div className="mx-auto max-w-[1225px] border-x border-line">
          <Problems />
          <PurposeBuilt />
          <UserSuccess />
          <Scales />
          <Tiers />
          <GettingStarted />
        </div>
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  )
}
