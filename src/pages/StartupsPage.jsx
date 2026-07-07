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
      {/* soft dotted texture left/right */}
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
          Startup Program
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl font-display text-[44px] leading-[48px] tracking-[-1px] text-ink lg:text-[54px] lg:leading-[56px] lg:tracking-[-2px]">
          Built for startups and scaleups
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-6 text-gray-600">
          Ambitious startups and YC companies build world-class docs with Mintlify.
          Get <b className="font-semibold text-ink">50% off Pro</b> for the year, or{' '}
          <b className="font-semibold text-ink">12 months free</b> if you're in the current YC batch.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded bg-ink px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-gray-800">
            Get started
            <ArrowRight />
          </a>
          <a href="#" className="rounded border border-line bg-white px-5 py-2.5 text-[14px] font-medium transition-colors hover:bg-gray-50">
            Apply for Startup Program
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- program benefits ---------- */
const BENEFITS = [
  {
    icon: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2.2-.7-3 .8zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.9 7.4-6 11a22.4 22.4 0 0 1-4 2z',
    title: 'Pro for your first year',
    desc: 'Eligible startups get 50% off Pro while they build and launch their docs',
  },
  {
    icon: 'M12 3l1.9 5.7L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.3L12 3z',
    title: 'YC alumni discount',
    desc: 'YC alumni get 50% off Pro for one year for their current or next company',
  },
  {
    icon: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
    title: 'Current YC batch',
    desc: 'Current YC batch companies get 12 months of Pro free through launch',
  },
  {
    icon: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z',
    title: 'Priority startup support',
    desc: 'Get fast help from our team as you set up, polish, and ship your docs',
  },
]

function Program() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Mintlify for startups and YC."
          line2="Apply to the Mintlify startup program."
        >
          <BlackButton href="#">Apply now</BlackButton>
        </SectionHeading>

        <p className="-mt-6 mb-12 max-w-2xl text-[15px] leading-6 text-gray-600">
          Designed for venture-backed businesses that are just getting started.
          Eligible startups and YC alumni get 50% off Pro for one year. Current
          YC batch companies get 12 months of Pro free, plus priority support
          and resources to help accelerate growth.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <article key={b.title} className="rounded-xl border border-line bg-[#f9f6f3] p-7">
              <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-white text-gray-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d={b.icon} />
                </svg>
              </span>
              <h3 className="mt-5 text-[16px] font-medium text-ink">{b.title}</h3>
              <p className="mt-2 text-[13.5px] leading-5 text-gray-600">{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Y Combinator quote ---------- */
function YCombinator() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <div className="grid overflow-hidden rounded-xl border border-line lg:grid-cols-[1fr_1.4fr]">
          {/* YC tile */}
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

          {/* quote */}
          <div className="flex flex-col justify-center bg-cream p-10">
            <blockquote className="max-w-lg text-[22px] font-medium leading-8 text-ink">
              &ldquo;Every YC batch we consistently see the top performing startups
              use Mintlify to build their docs.&rdquo;
            </blockquote>
            <div className="mt-5 text-[13.5px] text-gray-600">
              <span className="font-semibold text-ink">Harj Taggar</span> · Group Partner, Y Combinator
            </div>
            <div className="mt-8 flex items-center gap-6 text-[13px] font-semibold tracking-wide text-gray-400">
              <span>Resend</span>
              <span>Crew</span>
              <span>AI Dub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- founder letter ---------- */
function FounderLetter() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-[34px] tracking-[-1px] text-ink">
            From one founder to another
          </h2>
          <div className="mt-10 space-y-5 rounded-xl border border-line bg-cream p-10 text-[15px] leading-7 text-gray-700">
            <p>Supporting startups and empowering builders is in our DNA.</p>
            <p>
              Mintlify exists because we went through the messy, uncertain,
              pivot hell part of building a company.
            </p>
            <p>
              We've had stretches where nothing worked (7 pivots, to be exact).
              Where every week felt like a new idea and a new letdown.
            </p>
            <p>So if things feel hard right now, we get it. Truly.</p>
            <p>
              This program is just a small way for us to stay close to our
              roots &mdash; and support other teams still in the thick of it.
            </p>
            <p>If there's anything else we can do to help, reach out.</p>
            <p className="pt-2 font-display text-[22px] text-ink">Han &amp; Hahnbee</p>
            <p className="!mt-1 text-[13px] text-gray-500">Founders of Mintlify</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- support cards ---------- */
const SUPPORT = [
  {
    title: 'Startup sales',
    desc: 'Get a custom proposal from our sales team',
    cta: 'Contact sales',
    href: '/contact/sales',
  },
  {
    title: 'Contact the founder',
    desc: 'Yes, you can reach out to our founders directly',
    cta: 'Contact founders',
    href: '#',
  },
  {
    title: 'Quickstart guide',
    desc: 'Learn more about how to get started right away',
    cta: 'Go to documentation',
    href: '/docs',
  },
  {
    title: 'Guide to technical writing',
    desc: 'A guide to how to write great documentation',
    cta: 'Open guide',
    href: '#',
  },
]

function Support() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Need help?"
          line2="Join the leaders of tomorrow to future proof your documentation today."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORT.map((s) => (
            <a key={s.title} href={s.href} className="group flex flex-col rounded-xl border border-line bg-cream p-7 transition-colors hover:bg-cream-dark">
              <h3 className="text-[16px] font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-5 text-gray-600">{s.desc}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13.5px] font-medium text-mint-600 transition-colors group-hover:text-mint-500">
                {s.cta}
                <ArrowRight className="size-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function StartupsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <div className="mx-auto max-w-[1225px] border-x border-line">
          <Program />
          <YCombinator />
          <FounderLetter />
          <Support />
        </div>
      </main>
      <Footer />
    </div>
  )
}
