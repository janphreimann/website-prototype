const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Startups', href: '/startups' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Switch', href: '/switch' },
      'OSS program', 'Learn',
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Customers', href: '/customers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Pricing', href: '/pricing' },
      'Guides', 'Feature requests', 'Library', 'Wiki',
      { label: 'Agent score', href: '/score' },
    ],
  },
  {
    title: 'Documentation',
    links: [
      { label: 'Getting started', href: '/docs' },
      { label: 'API reference', href: '/docs/api/introduction' },
      { label: 'Components', href: '/docs/components' },
      { label: 'Changelog', href: '/docs/guides' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '/careers' },
      'Events', 'Wall of love',
    ],
  },
  {
    title: 'Legal',
    links: ['Privacy policy', 'Responsible disclosure', 'Terms of service', 'Security', 'DSR/DSAR'],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* dotted texture left/right */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-56 opacity-60 max-xl:hidden"
        style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-56 opacity-60 max-xl:hidden"
        style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />

      <div className="relative mx-auto max-w-[1225px] px-4 pb-10 pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(5,1fr)]">
          {/* brand + status */}
          <div className="flex flex-col justify-between">
            <a href="#" className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="size-5" fill="none">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 3 1.3 5.6 3.4 7.4.6-2.9 2.6-6.6 6.6-8.4-1.5 2.4-2.3 5.4-1.9 8.9.6.1 1.2.1 1.9.1 5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="#0d9373" />
              </svg>
              <span className="text-[17px] font-bold tracking-tight">mintlify</span>
            </a>
            <a
              href="#"
              className="mt-16 inline-flex w-fit items-center gap-2 rounded border border-line bg-white px-3 py-1.5 text-[13px] text-gray-600 transition-colors hover:bg-gray-50"
            >
              <span className="size-1.5 rounded-full bg-mint-500" />
              All systems normal
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-5 text-[13.5px] text-gray-400">{col.title}</div>
              <ul className="space-y-3.5">
                {col.links.map((l) => {
                  const label = typeof l === 'string' ? l : l.label
                  const href = typeof l === 'string' ? '#' : l.href
                  return (
                    <li key={label}>
                      <a href={href} className="text-[14px] text-gray-800 transition-colors hover:text-gray-500">
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom row */}
        <div className="mt-16 flex items-center justify-between border-t border-line pt-6">
          {/* theme switch */}
          <div className="flex items-center gap-1">
            <button className="flex size-7 items-center justify-center rounded-full bg-gray-100 text-ink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            </button>
            <button className="flex size-7 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" /></svg>
            </button>
            <button className="flex size-7 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
            </button>
          </div>

          {/* socials */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="transition-colors hover:text-ink">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" /></svg>
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" /></svg>
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
