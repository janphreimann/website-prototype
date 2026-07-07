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

/* ---------- hero: headline left, contact form right ---------- */
function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-gray-700">{label}</span>
      <input
        {...props}
        className="w-full rounded border border-line bg-white px-3 py-2 text-[14px] text-ink placeholder:text-gray-400 focus:border-mint-500 focus:outline-none"
      />
    </label>
  )
}

function Hero() {
  return (
    <section className="relative overflow-x-clip bg-white pt-14">
      {/* soft dotted texture, right side */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[420px] opacity-50 max-lg:hidden"
        style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />
      <div className="relative mx-auto grid max-w-[1225px] grid-cols-1 items-center gap-14 px-4 pb-24 pt-20 lg:grid-cols-[1.15fr_1fr]">
        {/* copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[13px] text-gray-600">
            <span className="size-1.5 rounded-full bg-mint-500" />
            Enterprise
          </span>
          <h1 className="mt-5 max-w-xl font-display text-[44px] leading-[48px] tracking-[-1px] text-ink lg:text-[54px] lg:leading-[56px] lg:tracking-[-2px]">
            Intelligence to level up enterprise knowledge
          </h1>
          <p className="mt-5 max-w-md text-[17px] leading-6 text-gray-600">
            A faster, smarter, and more secure platform to make your company
            knowledge ready for the era of AI.
          </p>
        </div>

        {/* form card */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-xl border border-line bg-cream p-7 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]"
        >
          <div className="grid grid-cols-2 gap-4">
            <Field label="First name" type="text" placeholder="Jane" />
            <Field label="Last name" type="text" placeholder="Doe" />
          </div>
          <div className="mt-4 space-y-4">
            <Field label="Work email" type="email" placeholder="jane@company.com" />
            <Field label="Company" type="text" placeholder="Acme Inc." />
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-medium text-gray-700">How can we help?</span>
              <textarea
                rows="3"
                placeholder="Tell us about your team and use case..."
                className="w-full resize-none rounded border border-line bg-white px-3 py-2 text-[14px] text-ink placeholder:text-gray-400 focus:border-mint-500 focus:outline-none"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-ink px-4 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800"
          >
            Book a call
            <ArrowRight />
          </button>
          <p className="mt-3 text-center text-[12px] leading-4 text-gray-400">
            EU/EEA residents: <a href="#" className="underline hover:text-gray-600">submit a privacy request</a>
            {' · '}
            UK residents: <a href="#" className="underline hover:text-gray-600">submit a privacy request</a>
          </p>
        </form>
      </div>
    </section>
  )
}

/* ---------- trusted-by logo strip ---------- */
const LOGOS = [
  { name: 'Anthropic', src: 'https://www.mintlify.com/images/customer-stories/anthropic-light.svg' },
  { name: 'Coinbase', src: 'https://www.mintlify.com/images/customer-stories/coinbase-light.svg' },
  { name: 'HubSpot', src: 'https://www.mintlify.com/images/customer-stories/hubspot-light.svg' },
  { name: 'Zapier', src: 'https://www.mintlify.com/images/customer-stories/zapier-light.svg' },
  { name: 'AT&T', src: 'https://www.mintlify.com/images/customer-stories/att-light.svg' },
]

function TrustedBy() {
  return (
    <section className="border-y border-line bg-white py-14">
      <div className="mx-auto max-w-[1225px] px-4">
        <p className="text-center text-[13.5px] text-gray-400">Trusted by the best teams</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex h-[90px] items-center justify-center rounded-lg border border-line bg-cream"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-6 w-auto max-w-[65%] opacity-80"
                onError={(e) => {
                  e.currentTarget.outerHTML = `<span class="text-[14px] font-semibold tracking-wide text-gray-700">${logo.name}</span>`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- feature / benefit cards ---------- */
function ChatMock() {
  return (
    <div className="pointer-events-none select-none rounded-lg border border-line bg-white p-4 shadow-[0_15px_35px_-20px_rgba(0,0,0,0.2)]">
      <div className="flex flex-wrap gap-1.5">
        {['QUICK START GUIDE', 'MCP SERVER', 'API REFERENCE', 'INSIGHTS'].map((chip) => (
          <span key={chip} className="rounded-full border border-line bg-cream px-2.5 py-1 font-mono text-[10px] text-gray-500">
            {chip}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5 text-mint-600">
          <path d="M12 3l1.9 5.7L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.3L12 3z" />
        </svg>
        <span className="text-[13px] text-gray-400">Ask AI anything...</span>
        <span className="ml-auto rounded border border-line bg-cream px-1.5 py-0.5 font-mono text-[10px] text-gray-400">⌘K</span>
      </div>
    </div>
  )
}

function DiffMock() {
  return (
    <div className="pointer-events-none select-none rounded-lg border border-line bg-white p-4 font-mono text-[11.5px] leading-5 shadow-[0_15px_35px_-20px_rgba(0,0,0,0.2)]">
      <div className="mb-2 flex items-center gap-2 text-[11px] text-gray-400">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3">
          <path d="M6 3v12M6 15a3 3 0 1 0 3 3M18 9a3 3 0 1 0-3-3M18 9v3a3 3 0 0 1-3 3H9" />
        </svg>
        docs/api-reference.mdx
        <span className="ml-auto rounded-full bg-mint-50 px-2 py-0.5 text-[10px] font-medium text-mint-600">Docs updated</span>
      </div>
      <div className="rounded bg-red-50 px-2 text-red-500">- POST /v1/completions</div>
      <div className="rounded bg-mint-50 px-2 text-mint-600">+ POST /v1/messages</div>
      <div className="rounded bg-mint-50 px-2 text-mint-600">+ Supports streaming responses</div>
    </div>
  )
}

function UptimeMock() {
  return (
    <div className="pointer-events-none select-none rounded-lg border border-line bg-white p-4 shadow-[0_15px_35px_-20px_rgba(0,0,0,0.2)]">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-wide text-gray-400">Uptime</div>
          <div className="text-[26px] font-semibold text-ink">99.99%</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] uppercase tracking-wide text-gray-400">Usage traffic</div>
          <div className="mt-1 flex items-end gap-1">
            {[8, 13, 10, 16, 12, 19, 15, 22, 18, 26].map((h, i) => (
              <span key={i} className="w-1.5 rounded-sm bg-mint-400" style={{ height: `${h}px` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function McpMock() {
  return (
    <div className="pointer-events-none select-none rounded-lg border border-line bg-white p-4 shadow-[0_15px_35px_-20px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-between gap-2">
        {['Docs', 'MCP server', 'Agents'].map((node, i) => (
          <span key={node} className="flex items-center gap-2">
            <span className={`rounded-lg border border-line px-3 py-2 text-[12px] font-medium ${i === 1 ? 'bg-ink text-white' : 'bg-cream text-gray-700'}`}>
              {node}
            </span>
            {i < 2 && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3 text-gray-300">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            )}
          </span>
        ))}
      </div>
      <div className="mt-3 font-mono text-[10.5px] text-gray-400">npx mint-mcp add yourcompany</div>
    </div>
  )
}

const CARDS = [
  {
    eyebrow: 'Assistant',
    title: 'AI-powered chat for your users',
    desc: 'Reduce support volume with intelligent search and a conversational assistant that understands your documentation.',
    mock: <ChatMock />,
  },
  {
    eyebrow: 'Automations',
    title: 'Automate documentation updates',
    desc: "Eliminate stale content with continuous updates to your docs based on code changes. No matter how fast your team ships, documentation won't fall behind.",
    mock: <DiffMock />,
  },
  {
    eyebrow: 'Future-proof',
    title: 'Built for humans and AI',
    desc: 'Give your users seamless AI-powered workflows by letting Mintlify connect directly to your product through an MCP server.',
    mock: <McpMock />,
  },
  {
    eyebrow: 'Scale',
    title: 'Performance you can count on',
    desc: "Designed for scale, whether you're managing thousands of pages, global teams, or daily updates. Enjoy fast load times and smooth editing with 99.99% uptime.",
    mock: <UptimeMock />,
  },
]

function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Bring intelligence to enterprise knowledge."
          line2="Modernize without the rebuild with enterprise-grade professional service & security."
        >
          <BlackButton href="#">Get Enterprise</BlackButton>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CARDS.map((card) => (
            <article key={card.title} className="flex flex-col rounded-xl border border-line bg-[#f9f6f3] p-8">
              <div className="text-[12px] font-medium uppercase tracking-wide text-gray-400">{card.eyebrow}</div>
              <h3 className="mt-2 text-[19px] font-medium text-ink">{card.title}</h3>
              <p className="mt-2 max-w-md text-[13.5px] leading-5 text-gray-600">{card.desc}</p>
              <div className="mt-8">{card.mock}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Anthropic customer story ---------- */
function CustomerStory() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Customer story."
          line2="How the leading AI lab scales its developer knowledge."
        >
          <BlackButton href="#">Read story</BlackButton>
        </SectionHeading>

        <div className="flex h-[415px] overflow-hidden rounded-xl bg-[#e5674a]">
          {/* text half */}
          <div className="flex w-full flex-col p-9 text-white lg:w-1/2">
            <div className="text-[15px] font-bold tracking-widest">ANTHROP\C</div>
            <h3 className="mt-9 max-w-xs text-[28px] font-medium leading-9 text-white/85">
              See how <b className="font-semibold text-white">Anthropic</b> accelerates AI development with Mintlify
            </h3>
            <div className="mt-8 flex gap-12">
              <div>
                <div className="text-[36px] font-semibold leading-10">2M+</div>
                <div className="mt-1 max-w-[130px] text-[13.5px] leading-5 text-white/75">Monthly active developers</div>
              </div>
              <div>
                <div className="text-[36px] font-semibold leading-10">3+</div>
                <div className="mt-1 max-w-[160px] text-[13.5px] leading-5 text-white/75">Products serviced: Claude API, MCP, and Claude Code</div>
              </div>
            </div>
            <a
              href="#"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Read story
              <ArrowRight />
            </a>
          </div>
          {/* visual half */}
          <div
            className="relative hidden w-1/2 lg:block"
            style={{ background: 'linear-gradient(135deg,#7a3323 0%,#a5492f 45%,#d97756 100%)' }}
          >
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- closing CTA + quickstart links ---------- */
function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-white py-24">
      {/* diagonal green lines, right side */}
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

      <div className="relative mx-auto max-w-[1225px] px-4">
        <h2 className="max-w-xl font-display text-[38px] leading-[42px] tracking-[-1px] text-ink">
          Build at enterprise scale. Ship at startup speed
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-6 text-gray-600">
          Meet the next generation of documentation. AI-native, beautiful
          out-of-the-box, and built for collaboration.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded bg-ink px-4 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800">
            Get Custom Quote
            <ArrowRight />
          </a>
          <a href="#" className="rounded border border-line bg-white px-4 py-2.5 text-[13.5px] font-medium transition-colors hover:bg-gray-50">
            Try for free
          </a>
        </div>

        {/* quickstart links */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a href="/docs" className="group rounded-xl border border-line bg-cream p-7 transition-colors hover:bg-cream-dark">
            <div className="text-[12px] font-medium uppercase tracking-wide text-gray-400">Start building</div>
            <h3 className="mt-2 text-[17px] font-medium text-ink">Deploy your documentation in minutes</h3>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-mint-600 transition-colors group-hover:text-mint-500">
              Quickstart
              <ArrowRight className="size-3" />
            </span>
          </a>
          <a href="#" className="group rounded-xl border border-line bg-cream p-7 transition-colors hover:bg-cream-dark">
            <div className="text-[12px] font-medium uppercase tracking-wide text-gray-400">Guide to technical writing</div>
            <h3 className="mt-2 text-[17px] font-medium text-ink">A guide to how to write great documentation</h3>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-mint-600 transition-colors group-hover:text-mint-500">
              Open guide
              <ArrowRight className="size-3" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <div className="mx-auto max-w-[1225px] border-x border-line">
          <TrustedBy />
          <Features />
          <CustomerStory />
          <ClosingCTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
