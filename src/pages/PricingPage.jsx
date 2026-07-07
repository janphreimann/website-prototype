import { Fragment, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import LogoWall from '../components/LogoWall.jsx'
import StatsTicker from '../components/StatsTicker.jsx'
import Startups from '../components/Startups.jsx'
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

function Check({ className = 'size-4 text-mint-600' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

/* ---------- plans ---------- */
const PLANS = [
  {
    name: 'Starter',
    desc: 'For individuals and small teams',
    monthly: 0,
    annual: 0,
    cta: 'Get started',
    featured: false,
    featuresIntro: 'Includes:',
    features: ['Full platform', 'Custom domain', 'Web editor', 'Authentication', 'MCP server', 'API playground'],
  },
  {
    name: 'Pro',
    desc: 'For startups and growing teams',
    monthly: 250,
    annual: 212,
    cta: 'Try for free',
    featured: true,
    featuresIntro: 'Everything in Starter, plus:',
    features: ['Agent', 'Assistant', 'Automations', 'Preview deployments', 'Admin APIs'],
  },
  {
    name: 'Enterprise',
    desc: 'For scaling and global teams',
    monthly: null,
    annual: null,
    cta: 'Contact us',
    featured: false,
    featuresIntro: 'Everything in Pro, plus:',
    features: ['SSO, SCIM & RBAC', 'Performance SLA', 'Advanced insights', 'Enterprise security & legal', 'Migration & support'],
  },
]

function BillingToggle({ billing, setBilling }) {
  return (
    <div className="inline-flex items-center rounded-full border border-line bg-white p-1">
      {['monthly', 'annual'].map((key) => (
        <button
          key={key}
          onClick={() => setBilling(key)}
          className={`rounded-full px-4 py-1.5 text-[13px] font-medium capitalize transition-colors ${
            billing === key ? 'bg-ink text-white' : 'text-gray-600 hover:text-ink'
          }`}
        >
          {key}
          {key === 'annual' && <span className={billing === key ? 'ml-1.5 text-mint-300' : 'ml-1.5 text-mint-600'}>-15%</span>}
        </button>
      ))}
    </div>
  )
}

function PlanCard({ plan, billing }) {
  const price = billing === 'annual' ? plan.annual : plan.monthly
  return (
    <article
      className={`flex flex-col rounded-xl border p-7 text-left ${
        plan.featured
          ? 'border-mint-500 bg-white shadow-[0_20px_50px_-20px_rgba(13,147,115,0.25)]'
          : 'border-line bg-[#f9f6f3]'
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-medium text-ink">{plan.name}</h3>
        {plan.featured && (
          <span className="rounded-full bg-mint-50 px-2.5 py-0.5 text-[11.5px] font-medium text-mint-600">
            Most popular
          </span>
        )}
      </div>
      <p className="mt-1 text-[13.5px] text-gray-600">{plan.desc}</p>

      <div className="mt-6 flex items-baseline gap-1.5">
        {price === null ? (
          <span className="font-display text-[34px] tracking-[-1px] text-ink">Custom</span>
        ) : (
          <>
            <span className="font-display text-[34px] tracking-[-1px] text-ink">${price}</span>
            <span className="text-[13.5px] text-gray-500">/month</span>
          </>
        )}
      </div>
      <p className="mt-1 h-4 text-[12.5px] text-gray-500">
        {price !== null && price > 0 && billing === 'annual' && 'billed annually'}
      </p>

      <a
        href="#"
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded px-4 py-2.5 text-[13.5px] font-medium transition-colors ${
          plan.featured
            ? 'bg-ink text-white hover:bg-gray-800'
            : 'border border-line bg-white hover:bg-gray-50'
        }`}
      >
        {plan.cta}
        <ArrowRight />
      </a>

      <p className="mt-7 text-[12.5px] font-medium text-gray-500">{plan.featuresIntro}</p>
      <ul className="mt-3 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-gray-700">
            <Check className="size-3.5 shrink-0 text-mint-600" />
            {f}
          </li>
        ))}
      </ul>
    </article>
  )
}

/* ---------- hero + plan cards ---------- */
function Hero() {
  const [billing, setBilling] = useState('monthly')
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

      <div className="relative mx-auto max-w-[1225px] px-4 pb-20 pt-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[13px] text-gray-600">
          <span className="size-1.5 rounded-full bg-mint-500" />
          Pricing
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl font-display text-[44px] leading-[48px] tracking-[-1px] text-ink lg:text-[54px] lg:leading-[56px] lg:tracking-[-2px]">
          Pricing on your terms
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-6 text-gray-600">
          Get started for free, your first month of credits on us.
          No credit card required.
        </p>

        <div className="mt-8">
          <BillingToggle billing={billing} setBilling={setBilling} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} billing={billing} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- comparison table ---------- */
// value: true = included, false = not included, string = text value
const COMPARISON = [
  {
    section: 'Features',
    rows: [
      { label: 'Web editor', values: [true, true, true] },
      { label: 'API playground', values: [true, true, true] },
      { label: 'Git sync', values: [true, true, true] },
      { label: 'Search', values: [true, true, true] },
      { label: 'Integrations', values: [true, true, true] },
      { label: 'MCP server', values: [true, true, true] },
      { label: 'User feedback', values: [true, true, true] },
      { label: 'Webhooks', values: [false, true, true] },
      { label: 'Developer API', values: [false, true, true] },
      { label: 'Platform analytics', values: [true, true, true] },
      { label: 'Advanced insights', values: [false, false, true] },
      { label: 'Multi-repo', values: [false, true, true] },
    ],
  },
  {
    section: 'Agents',
    rows: [
      { label: 'Credits', values: ['10,000/month', 'Custom', 'Custom + volume discounts'] },
      { label: 'Credit overages', values: ['$0.01 per credit', '$0.01 per credit', 'Custom'] },
      { label: 'Agent', values: [false, true, true] },
      { label: 'Assistant', values: [false, true, true] },
      { label: 'Writing agent', values: [false, true, true] },
      { label: 'Support integrations', values: [false, true, true] },
    ],
  },
  {
    section: 'Automations',
    rows: [
      { label: 'Automations', values: [false, true, true] },
      { label: 'Preview deployments', values: [false, true, true] },
      { label: 'Admin APIs', values: [false, true, true] },
    ],
  },
  {
    section: 'Customization',
    rows: [
      { label: 'Custom domain', values: [true, true, true] },
      { label: 'Custom components', values: [false, true, true] },
      { label: 'White labeling', values: [false, false, true] },
    ],
  },
  {
    section: 'Security',
    rows: [
      { label: 'Authentication', values: [true, true, true] },
      { label: 'OAuth & JWT', values: [false, true, true] },
      { label: 'SSO / SAML', values: [false, false, true] },
      { label: 'RBAC', values: [false, false, true] },
      { label: 'SCIM', values: [false, false, true] },
      { label: 'Audit logs', values: [false, false, true] },
    ],
  },
  {
    section: 'Services',
    rows: [
      { label: 'Migration support', values: [false, false, true] },
      { label: 'Support', values: ['Community', 'Standard', 'Dedicated'] },
      { label: 'Performance SLA', values: [false, false, true] },
    ],
  },
]

function CellValue({ value }) {
  if (value === true) return <Check className="mx-auto size-4 text-mint-600" />
  if (value === false) return <span className="text-gray-300">&mdash;</span>
  return <span className="text-[13px] text-gray-700">{value}</span>
}

function Comparison() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Compare plans."
          line2="Find the plan that fits where your team is today."
        />

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="w-[34%] py-4 pr-4 text-[13px] font-medium text-gray-400">Plans</th>
                {PLANS.map((p) => (
                  <th key={p.name} className="w-[22%] px-4 py-4 text-center">
                    <span className={`text-[14px] font-medium ${p.featured ? 'text-mint-600' : 'text-ink'}`}>
                      {p.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((group) => (
                <Fragment key={group.section}>
                  <tr>
                    <td colSpan={4} className="pb-3 pt-8 text-[13px] font-semibold uppercase tracking-wide text-gray-400">
                      {group.section}
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-t border-line/70">
                      <td className="py-3.5 pr-4 text-[13.5px] text-gray-700">{row.label}</td>
                      {row.values.map((v, i) => (
                        <td key={i} className="px-4 py-3.5 text-center">
                          <CellValue value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: 'How can we migrate our existing content?',
    a: 'You can import content from most existing documentation platforms, and Markdown or OpenAPI files drop in directly. On paid plans our team helps with the migration, and Enterprise includes a fully managed migration service.',
  },
  {
    q: 'Are LLMs used to power the assistant?',
    a: 'Yes. The assistant uses large language models grounded in your documentation, so answers stay accurate to your content and always cite their sources.',
  },
  {
    q: 'How does pricing work for AI features such as the assistant, agent, and workflows?',
    a: 'AI features run on a shared pool of credits. Every plan includes a monthly credit allowance, and additional usage is billed at $0.01 per credit. Enterprise plans can purchase credits at volume discounts.',
  },
  {
    q: 'How long is my free trial?',
    a: 'Your first month is free, including a full month of credits — no credit card required to start.',
  },
  {
    q: 'Can I set a hard limit on AI credits?',
    a: 'Yes. You can cap credit usage from your dashboard so you are never billed for overages beyond the limit you set.',
  },
  {
    q: 'What auth methods are supported?',
    a: 'Starter supports password-based authentication. Pro adds OAuth and JWT, and Enterprise adds SSO via SAML along with SCIM provisioning and role-based access control.',
  },
  {
    q: 'Can I use the AI features on the Starter plan?',
    a: 'Starter includes the MCP server and a monthly credit allowance. The agent, assistant, and automations require the Pro plan or above.',
  },
  {
    q: 'Are you SOC 2 certified and what other security measures are in place?',
    a: 'Yes, Mintlify is SOC 2 Type II certified. Data is encrypted in transit and at rest, and Enterprise plans add audit logs, RBAC, and custom security reviews.',
  },
]

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-[15px] font-medium text-ink">{item.q}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className={`size-4 shrink-0 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-5 text-[14px] leading-6 text-gray-600">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

function Faq() {
  const [open, setOpen] = useState(null)
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Frequently asked questions."
          line2="Everything you need to know about plans, credits, and security."
        />
        <div className="mx-auto max-w-3xl border-t border-line">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <div className="mx-auto max-w-[1225px] border-x border-line">
          <Comparison />
          <Faq />
          <LogoWall />
          <StatsTicker />
          <Startups />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
