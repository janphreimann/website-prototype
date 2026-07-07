import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import CTA from '../components/CTA.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function ArrowRight({ className = 'size-3' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function Icon({ d, className = 'size-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={d} />
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
          Careers
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-[44px] leading-[48px] tracking-[-1px] text-ink lg:text-[54px] lg:leading-[56px] lg:tracking-[-2px]">
          Join us in our mission to empower builders
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-6 text-gray-600">
          Be part of a team redefining how knowledge is shared. Build innovative,
          AI-powered tools that help millions work smarter, together.
        </p>
        <a
          href="#open-positions"
          className="mt-8 inline-flex items-center gap-2 rounded bg-ink px-5 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800"
        >
          Explore open roles
          <ArrowRight />
        </a>
      </div>
    </section>
  )
}

/* ---------- values ---------- */
const VALUES = [
  {
    icon: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2.2-.7-3 .8zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.9 7.4-6 11a22.4 22.4 0 0 1-4 2z',
    title: 'Driven',
    desc: "We're driven by the pursuit of excellence. We always go the extra mile for our products and customers.",
  },
  {
    icon: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z',
    title: 'Fast',
    desc: "We're decisive and action oriented, and believe in moving quickly to make progress.",
  },
  {
    icon: 'M22 7l-8.5 8.5-5-5L2 17M16 7h6v6',
    title: 'Growth-minded',
    desc: 'We believe in investing in people and fostering growth as the company grows. We hire for slope over y-intercept.',
  },
  {
    icon: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z',
    title: 'Genuine',
    desc: 'We bring our real selves to work and create an environment where the best ideas win.',
  },
  {
    icon: 'M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8',
    title: 'High-agency',
    desc: 'We believe in proactively taking bold & calculated risks without waiting for permission.',
  },
  {
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    title: 'Humility',
    desc: 'We believe that everyone has much to give, but also much to learn. Egos are not allowed.',
  },
]

function Values() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Join our team of builders."
          line2="Every company has its own unique DNA. These are the values that define us as a company."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-xl border border-line bg-[#f9f6f3] p-6">
              <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-white text-mint-600 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <Icon d={v.icon} />
              </span>
              <h3 className="mt-4 text-[15.5px] font-medium text-ink">{v.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-5 text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- about cards (mock visuals in the style of the landing page) ---------- */
function JourneyMock() {
  // rising path over a dotted grid
  return (
    <div className="relative h-full bg-[#0b2618]">
      <div
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
      />
      <svg viewBox="0 0 300 180" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M20 150 C 90 150, 100 100, 150 90 S 240 60, 285 25" stroke="#1fe394" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="285" cy="25" r="5" fill="#1fe394" />
        <circle cx="20" cy="150" r="4" fill="#1d4a30" stroke="#1fe394" strokeWidth="1.5" />
      </svg>
      <span className="absolute left-5 bottom-5 rounded bg-[#123722] px-2 py-1 font-mono text-[10px] text-[#7be8ad]">2021 → today</span>
    </div>
  )
}

function ProcessMock() {
  // kanban-ish columns
  return (
    <div className="flex h-full items-center justify-center gap-3 bg-[#101210] px-6">
      {[3, 2, 4].map((n, i) => (
        <div key={i} className="w-20 space-y-2 rounded-lg bg-white/5 p-2.5">
          <span className={`block h-2 w-10 rounded-full ${i === 1 ? 'bg-mint-400' : 'bg-gray-500/70'}`} />
          {Array.from({ length: n }).map((_, j) => (
            <span key={j} className="block h-6 rounded bg-white/10" />
          ))}
        </div>
      ))}
    </div>
  )
}

function PeopleMock() {
  // avatar cluster
  const AVATARS = ['#e5674a', '#2151f5', '#f5b02c', '#0d9e65', '#a855f7', '#0a0a0a']
  return (
    <div className="relative flex h-full items-center justify-center bg-[#f5f4ee]">
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
      />
      <div className="relative flex -space-x-3">
        {AVATARS.map((c) => (
          <span key={c} className="flex size-11 items-center justify-center rounded-full border-2 border-white text-[13px] font-medium text-white" style={{ background: c }}>
            ✳
          </span>
        ))}
      </div>
      <span className="absolute bottom-5 rounded-full border border-line bg-white px-2.5 py-1 text-[10.5px] font-medium text-gray-600">
        San Francisco, CA
      </span>
    </div>
  )
}

const ABOUT_CARDS = [
  { title: 'Our journey', desc: 'See how we grew from a bold idea to a thriving global platform', mock: <JourneyMock /> },
  { title: 'Our process', desc: 'Get a peek into how we build, iterate, and execute', mock: <ProcessMock /> },
  { title: 'Our people', desc: 'Meet the passionate, creative team driving our success forward', mock: <PeopleMock /> },
]

function About() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Get to know us."
          line2="Our work impacts over ten thousand companies and tens of millions of developers."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {ABOUT_CARDS.map((c) => (
            <a key={c.title} href="#" className="group">
              <div className="h-[220px] overflow-hidden rounded-xl border border-line">{c.mock}</div>
              <h3 className="mt-4 flex items-center gap-1.5 text-[15.5px] font-medium text-ink transition-colors group-hover:text-gray-600">
                {c.title}
                <ArrowRight className="size-3 text-gray-400" />
              </h3>
              <p className="mt-1 text-[13.5px] leading-5 text-gray-600">{c.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- investors ---------- */
const INVESTORS = ['Andreessen Horowitz', 'Bain Capital Ventures', 'Y Combinator', 'Quiet Capital', 'Pioneer Fund']

function Investors() {
  return (
    <section className="border-t border-line bg-white py-16">
      <div className="mx-auto max-w-[1225px] px-4 text-center">
        <p className="text-[13px] text-gray-400">Our investors</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {INVESTORS.map((name) => (
            <span key={name} className="font-display text-[21px] tracking-tight text-gray-400">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- benefits ---------- */
const BENEFITS = [
  {
    icon: 'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    title: 'Competitive salary and equity',
    desc: 'We reward top talent with competitive pay and meaningful equity.',
  },
  {
    icon: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
    title: '20 days paid time off',
    desc: 'Recharge with 20 days of paid vacation each year, plus the flexibility to take the time you need.',
  },
  {
    icon: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z',
    title: 'Health, dental, and vision',
    desc: 'We cover 100% of your health, dental, and vision insurance, with options for your dependents.',
  },
  {
    icon: 'M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3',
    title: '401k or RRSP',
    desc: 'Plan for your future with our 401k (US) or RRSP (Canada) matching program.',
  },
  {
    icon: 'M3 11h18l-2 9H5l-2-9zM8 11V7a4 4 0 0 1 8 0v4',
    title: 'Free lunch and dinners',
    desc: 'Stay fueled with delicious lunches and dinners, freshly prepared and available every workday.',
  },
  {
    icon: 'M5 17h14l2-6-4 1-5-7-5 7-4-1 2 6zM5 21h14',
    title: 'Free Ubers',
    desc: 'Enjoy stress-free commutes with complimentary Uber rides to and from the office.',
  },
  {
    icon: 'M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.3 2.6a1 1 0 0 1-.9 1.4H3.6a1 1 0 0 1-.9-1.4L4 16',
    title: 'Work setup stipend',
    desc: 'Get the tools you need to do your best work with a generous one-time work setup stipend.',
  },
  {
    icon: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
    title: 'Monthly wellness stipend',
    desc: '$420 monthly stipend for fitness, wellness, or self-care.',
  },
  {
    icon: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z',
    title: 'Annual team offsite',
    desc: 'Join us for an unforgettable team offsite each year—explore new places and build connections.',
  },
  {
    icon: 'M12 3l1.9 5.7L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.3L12 3z',
    title: 'Unlimited free mints',
    desc: 'Enjoy unlimited free mints, always stocked to keep you fresh and focused.',
  },
]

function Benefits() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="We take care of you."
          line2="We got everything covered so that all you need to do is focus on doing your best work."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-xl border border-line bg-white p-5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-mint-50 text-mint-600">
                <Icon d={b.icon} className="size-4" />
              </span>
              <h3 className="mt-3.5 text-[14px] font-medium leading-5 text-ink">{b.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-[18px] text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- open positions ---------- */
const POSITIONS = [
  {
    department: 'Engineering',
    roles: [
      { title: 'Software Engineer, Product', location: 'San Francisco', type: 'Full-time' },
      { title: 'Software Engineer, AI', location: 'San Francisco', type: 'Full-time' },
      { title: 'Infrastructure Engineer', location: 'San Francisco', type: 'Full-time' },
    ],
  },
  {
    department: 'Design',
    roles: [
      { title: 'Product Designer', location: 'San Francisco', type: 'Full-time' },
    ],
  },
  {
    department: 'Go-to-Market',
    roles: [
      { title: 'Account Executive', location: 'San Francisco', type: 'Full-time' },
      { title: 'Developer Relations Engineer', location: 'San Francisco', type: 'Full-time' },
      { title: 'Growth Marketer', location: 'San Francisco', type: 'Full-time' },
    ],
  },
]

function OpenPositions() {
  return (
    <section id="open-positions" className="scroll-mt-14 border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Open positions."
          line2="If building software for the next generation of companies excites you, we'd love to talk to you."
        />
        <div className="mx-auto max-w-3xl">
          {POSITIONS.map((group) => (
            <div key={group.department} className="mb-10 last:mb-0">
              <div className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-gray-400">
                {group.department}
              </div>
              <div className="border-t border-line">
                {group.roles.map((r) => (
                  <a
                    key={r.title}
                    href="#"
                    className="group flex items-center justify-between gap-4 border-b border-line py-4.5 transition-colors hover:bg-gray-50/70"
                  >
                    <span className="text-[15px] font-medium text-ink">{r.title}</span>
                    <span className="ml-auto text-[13px] text-gray-500">{r.type}</span>
                    <span className="flex items-center gap-1.5 text-[13px] text-gray-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      {r.location}
                    </span>
                    <ArrowRight className="size-3 text-gray-300 transition-colors group-hover:text-ink" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <div className="mx-auto max-w-[1225px] border-x border-line">
          <Values />
          <About />
          <Investors />
          <Benefits />
          <OpenPositions />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
