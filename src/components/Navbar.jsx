import { useState, useRef, useEffect, useCallback } from 'react'

/* ---------- tiny inline icon set (24x24 stroke paths) ---------- */
const ICON_PATHS = {
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z',
  pen: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  workflow: 'M4 4h6v6H4zM14 14h6v6h-6zM10 7h4M17 10v4',
  bot: 'M12 8V4M8 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM9 13h.01M15 13h.01',
  sparkle: 'M12 3l1.9 5.7L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.3L12 3z',
  plug: 'M12 22v-5M9 8V2M15 8V2M6 8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
  building: 'M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01',
  rocket: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2.2-.7-3 .8zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.9 7.4-6 11a22.4 22.4 0 0 1-4 2z',
  fileText: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8',
  db: 'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  braces: 'M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1',
  help: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01',
  layout: 'M3 3h18v18H3zM3 9h18M9 21V9',
  cpu: 'M9 9h6v6H9zM4 4h16v16H4zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3',
  wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  bank: 'M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3',
  bitcoin: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9 8h4a2 2 0 1 1 0 4H9h5a2 2 0 1 1 0 4H9M10 6v2M10 16v2',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  newspaper: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0V9M18 14h-8M15 18h-5M10 6h8v4h-8z',
  gradCap: 'M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 3 9 3 12 0v-5',
  user: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  quote: 'M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-1.9-2H5c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.03V21zM15 21c3 0 7-1 7-8V5c0-1.25-.75-2-1.9-2H19c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z',
  bookOpen: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  gauge: 'M12 15l3.5-3.5M20.3 18a9 9 0 1 0-16.6 0',
  toggle: 'M16 6H8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12zM16 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
}

function Icon({ name, className = 'size-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={ICON_PATHS[name]} />
    </svg>
  )
}

function Chevron({ open }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className={`size-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

/* ---------- menu data ---------- */
const MENUS = {
  products: {
    columns: [
      {
        title: 'Features',
        items: [
          { icon: 'book', label: 'Platform', desc: 'Agent-native platform', href: '/docs/what-is-mintlify' },
          { icon: 'pen', label: 'Editor', desc: 'Visual WYSIWYG editor', href: '/docs/editor' },
          { icon: 'shield', label: 'Authentication', desc: 'Secure public doc access', href: '/docs/deploy/authentication-setup' },
        ],
      },
      {
        title: 'Automations',
        items: [
          { icon: 'workflow', label: 'Automations', desc: 'Automate actions across systems', href: '/docs/automations' },
          { icon: 'bot', label: 'Agent', desc: 'Autonomous agents for every task', href: '/docs/agent' },
          { icon: 'sparkle', label: 'Assistant', desc: 'Instant answers powered by AI', href: '/docs/assistant' },
        ],
      },
      {
        title: 'Integrations',
        items: [
          { icon: 'plug', label: 'Connections', desc: 'Connect tools and data sources', href: '/docs/integrations/analytics/overview' },
          { icon: 'server', label: 'MCP server', desc: 'Fully managed MCP servers', href: '/docs/ai/model-context-protocol' },
        ],
      },
    ],
    card: {
      color: 'bg-[#e5674a]',
      logo: '✳',
      text: <><b className="font-semibold">Anthropic</b> builds its AI-native coding platform and developer&hellip;</>,
    },
  },
  solutions: {
    columns: [
      {
        title: 'By stage',
        items: [
          { icon: 'building', label: 'Enterprise', href: '/enterprise' },
          { icon: 'rocket', label: 'Startups', href: '/startups' },
        ],
      },
      {
        title: 'By use case',
        items: [
          { icon: 'fileText', label: 'Developer documentation', href: '/docs/guides/developer-documentation' },
          { icon: 'db', label: 'Knowledge base', href: '/docs/guides/knowledge-base' },
          { icon: 'braces', label: 'API reference', href: '/docs/api-playground/overview' },
          { icon: 'help', label: 'Help centers', href: '/docs/guides/help-center' },
          { icon: 'layout', label: 'CMS' },
        ],
      },
      {
        title: 'By industry',
        items: [
          { icon: 'sparkle', label: 'AI companies' },
          { icon: 'wrench', label: 'Developer tools' },
          { icon: 'bank', label: 'Fintech' },
          { icon: 'bitcoin', label: 'Crypto' },
          { icon: 'users', label: 'Consumer' },
          { icon: 'heart', label: 'Nonprofit' },
        ],
      },
    ],
    card: {
      color: 'bg-[#2151f5]',
      logo: 'C',
      text: <>See how <b className="font-semibold">Coinbase</b> accelerates AI development with Mintlify</>,
    },
  },
  resources: {
    columns: [
      {
        title: 'Documentation',
        items: [
          { icon: 'bookOpen', label: 'Getting started', href: '/docs' },
          { icon: 'cpu', label: 'Components', href: '/docs/components' },
          { icon: 'braces', label: 'API Reference', href: '/docs/api/introduction' },
          { icon: 'clock', label: 'Changelog', href: '/docs/guides' },
        ],
      },
      {
        title: 'Company',
        items: [
          { icon: 'newspaper', label: 'Blog', href: '/blog' },
          { icon: 'gradCap', label: 'University' },
          { icon: 'user', label: 'Careers', href: '/careers' },
          { icon: 'calendar', label: 'Events' },
        ],
      },
      {
        title: 'Customers',
        items: [
          { icon: 'quote', label: 'Customer stories', href: '/customers' },
          { icon: 'heart', label: 'Wall of love' },
        ],
      },
      {
        title: 'Getting started',
        items: [
          { icon: 'book', label: 'Wiki' },
          { icon: 'gauge', label: 'Agent score', href: '/score' },
          { icon: 'toggle', label: 'Switch', href: '/switch' },
        ],
      },
    ],
    card: null,
  },
}

/* ---------- dropdown item ---------- */
function MenuItem({ item }) {
  return (
    <a href={item.href || '#'} className="group flex items-start gap-2.5 rounded-lg p-1.5 -mx-1.5 transition-colors duration-200 hover:bg-gray-50">
      <span className="mt-px flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-white text-gray-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <Icon name={item.icon} />
      </span>
      <span>
        <span className="block text-[13.5px] font-medium leading-6 text-ink">{item.label}</span>
        {item.desc && (
          <span className="block text-[12.5px] leading-4 text-gray-500">{item.desc}</span>
        )}
      </span>
    </a>
  )
}

function PanelContent({ menu }) {
  return (
    <div className="flex">
      <div className={`grid flex-1 gap-8 p-7 ${menu.columns.length === 4 ? 'grid-cols-4' : 'grid-cols-3'}`}>
        {menu.columns.map((col) => (
          <div key={col.title}>
            <div className="mb-4 text-[13px] text-gray-400">{col.title}</div>
            <div className="space-y-2.5">
              {col.items.map((item) => (
                <MenuItem key={item.label} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {menu.card && (
        <div className="w-60 shrink-0 border-l border-line bg-cream p-5">
          <div className="mb-4 text-[13px] text-gray-400">Customer feature</div>
          <div className={`flex h-32 items-center justify-center rounded-lg ${menu.card.color}`}>
            <span className="flex size-14 items-center justify-center rounded-xl bg-white text-2xl">
              {menu.card.logo}
            </span>
          </div>
          <p className="mt-4 text-[13px] leading-5 text-gray-700">{menu.card.text}</p>
          <a href="/customers" className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-ink hover:text-gray-600">
            Read story
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3"><path d="m9 18 6-6-6-6" /></svg>
          </a>
        </div>
      )}
    </div>
  )
}

/* ---------- navbar ---------- */
export default function Navbar() {
  const [active, setActive] = useState(null)      // which menu is open
  const [visible, setVisible] = useState(false)   // panel fade state
  const [height, setHeight] = useState(0)
  const refs = { products: useRef(null), solutions: useRef(null), resources: useRef(null) }
  const closeTimer = useRef(null)

  const open = useCallback((key) => {
    clearTimeout(closeTimer.current)
    setActive(key)
    setVisible(true)
    // measure synchronously so the panel opens at the right size
    // (contents are always mounted, only opacity-toggled)
    if (refs[key].current) setHeight(refs[key].current.offsetHeight)
  }, [])

  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setVisible(false), 120)
  }, [])

  // measure active content height for the smooth morph
  useEffect(() => {
    if (active && refs[active].current) {
      setHeight(refs[active].current.offsetHeight)
    }
  }, [active])

  // unmount content after fade-out
  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setActive(null), 250)
      return () => clearTimeout(t)
    }
  }, [visible])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white">
      <div onMouseLeave={scheduleClose}>
        <nav className="relative mx-auto flex h-14 max-w-[1225px] items-center px-4">
          {/* logo */}
          <a href="#" className="flex items-center gap-1.5" onMouseEnter={scheduleClose}>
            <svg viewBox="0 0 24 24" className="size-5" fill="none">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 3 1.3 5.6 3.4 7.4.6-2.9 2.6-6.6 6.6-8.4-1.5 2.4-2.3 5.4-1.9 8.9.6.1 1.2.1 1.9.1 5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="#0d9373" />
            </svg>
            <span className="text-[17px] font-bold tracking-tight">mintlify</span>
          </a>

          {/* center menu */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
            {['products', 'solutions', 'resources'].map((key) => (
              <button
                key={key}
                onMouseEnter={() => open(key)}
                className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-[13.5px] font-medium capitalize transition-colors duration-200 ${
                  active === key && visible ? 'bg-gray-100 text-ink' : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {key}
                <Chevron open={active === key && visible} />
              </button>
            ))}
            <a
              href="/pricing"
              onMouseEnter={scheduleClose}
              className="rounded-lg px-3 py-1.5 text-[13.5px] font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100"
            >
              Pricing
            </a>
          </div>

          {/* right actions */}
          <div className="ml-auto flex items-center gap-2" onMouseEnter={scheduleClose}>
            <a href="#" className="rounded border border-line bg-white px-3.5 py-1.5 text-[13.5px] font-medium transition-colors hover:bg-gray-50">
              Sign in
            </a>
            <a href="/contact/sales" className="rounded bg-ink px-3.5 py-1.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800">
              Contact sales
            </a>
          </div>

          {/* ---- dropdown panel ---- */}
          <div
            className={`absolute left-4 right-4 top-full pt-1 transition-all duration-300 ease-out ${
              visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1.5 opacity-0'
            }`}
          >
            <div
              className="relative mx-auto max-w-[900px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-[height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ height: visible ? height : height * 0.97 }}
            >
              {Object.entries(MENUS).map(([key, menu]) => (
                <div
                  key={key}
                  ref={refs[key]}
                  className={`absolute inset-x-0 top-0 transition-opacity duration-200 ${
                    active === key ? 'opacity-100 delay-75' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <PanelContent menu={menu} />
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
