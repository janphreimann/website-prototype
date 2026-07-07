import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { TABS, NAV, flattenTab, tabForPath, findPage, ALL_PAGES } from './docsData.js'
import { renderPage, descriptionFor } from './DocsContent.jsx'
import { DocIcon, MethodBadge } from './DocsUI.jsx'

/* ---------- tiny client-side router for everything under /docs ---------- */
function usePath() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/docs')
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.replace(/\/+$/, '') || '/docs')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const navigate = useCallback((next) => {
    if (next === window.location.pathname) return
    window.history.pushState({}, '', next)
    setPath(next)
    window.scrollTo({ top: 0 })
  }, [])
  return [path, navigate]
}

/* ---------- logo ---------- */
function Logo() {
  return (
    <a href="/" className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="size-5" fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 3 1.3 5.6 3.4 7.4.6-2.9 2.6-6.6 6.6-8.4-1.5 2.4-2.3 5.4-1.9 8.9.6.1 1.2.1 1.9.1 5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="#0d9373" />
      </svg>
      <span className="text-[17px] font-bold tracking-tight text-ink">mintlify</span>
      <span className="ml-1 rounded border border-line bg-cream px-1.5 py-px text-[11px] font-medium text-gray-500">Docs</span>
    </a>
  )
}

/* ---------- search modal (⌘K) ---------- */
function SearchModal({ open, onClose, navigate }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelected(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ALL_PAGES.slice(0, 8)
    return ALL_PAGES.filter(
      (page) => page.title.toLowerCase().includes(q) || page.group.toLowerCase().includes(q),
    ).slice(0, 12)
  }, [query])

  const go = (page) => {
    onClose()
    navigate(page.path)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, results.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)) }
    if (e.key === 'Enter' && results[selected]) go(results[selected])
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/25 px-4 pt-[12vh] backdrop-blur-[2px]" onClick={onClose}>
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <DocIcon name="search" className="size-4 text-gray-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelected(0) }}
            onKeyDown={onKeyDown}
            placeholder="Search documentation..."
            className="h-12 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-gray-400"
          />
          <kbd className="rounded border border-line bg-cream px-1.5 py-0.5 font-mono text-[11px] text-gray-400">esc</kbd>
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <div className="px-3 py-8 text-center text-[14px] text-gray-400">No results for “{query}”</div>
          )}
          {results.map((page, i) => (
            <button
              key={page.path}
              onClick={() => go(page)}
              onMouseEnter={() => setSelected(i)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                i === selected ? 'bg-mint-50' : ''
              }`}
            >
              <span className={`flex size-7 shrink-0 items-center justify-center rounded-md border ${i === selected ? 'border-mint-200 bg-white text-mint-600' : 'border-line bg-cream text-gray-500'}`}>
                <DocIcon name="file" className="size-3.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block truncate text-[14px] font-medium ${i === selected ? 'text-mint-700' : 'text-ink'}`}>{page.title}</span>
                <span className="block truncate text-[12px] text-gray-400">{page.tabLabel} · {page.group}</span>
              </span>
              {page.method && <MethodBadge method={page.method} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- header: topbar + tab bar ---------- */
function Header({ activeTab, navigate, onSearch, onMenu }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-4 px-4 lg:px-8">
        <Logo />

        {/* search trigger */}
        <button
          onClick={onSearch}
          className="ml-4 hidden h-9 flex-1 max-w-md items-center gap-2.5 rounded-lg border border-line bg-cream/60 px-3 text-[13.5px] text-gray-400 transition-colors hover:border-gray-300 hover:bg-cream md:flex"
        >
          <DocIcon name="search" className="size-3.5" />
          Search or ask...
          <kbd className="ml-auto rounded border border-line bg-white px-1.5 py-0.5 font-mono text-[11px] text-gray-400">⌘K</kbd>
        </button>

        <div className="ml-auto flex items-center gap-1.5">
          <button onClick={onSearch} className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 md:hidden" aria-label="Search">
            <DocIcon name="search" className="size-4" />
          </button>
          <a href="#" className="hidden rounded-lg px-3 py-1.5 text-[13.5px] font-medium text-gray-600 transition-colors hover:text-ink sm:block">
            Support
          </a>
          <a href="#" className="hidden rounded-lg px-3 py-1.5 text-[13.5px] font-medium text-gray-600 transition-colors hover:text-ink sm:block">
            Dashboard
          </a>
          <a
            href="/"
            className="rounded-lg bg-ink px-3.5 py-1.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get started
          </a>
        </div>
      </div>

      {/* tab bar */}
      <div className="mx-auto flex h-11 max-w-[1440px] items-center gap-1 px-4 lg:px-8">
        <button onClick={onMenu} className="mr-1 flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 lg:hidden" aria-label="Menu">
          <DocIcon name="menu" className="size-4.5" />
        </button>
        {TABS.map((tab) => {
          const active = tab.id === activeTab
          return (
            <button
              key={tab.id}
              onClick={() => navigate(flattenTab(tab.id)[0].path)}
              className={`relative flex h-full items-center gap-2 px-3 text-[13.5px] font-medium transition-colors ${
                active ? 'text-mint-600' : 'text-gray-500 hover:text-ink'
              }`}
            >
              <DocIcon name={tab.icon} className="size-4" />
              {tab.label}
              {active && <span className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-mint-500" />}
            </button>
          )
        })}
      </div>
    </header>
  )
}

/* ---------- sidebar ---------- */
function NavLink({ item, path, navigate, nested = false }) {
  const active = path === item.path
  return (
    <a
      href={item.path}
      data-active={active || undefined}
      onClick={(e) => { e.preventDefault(); navigate(item.path) }}
      className={`flex items-center gap-2 rounded-lg py-[7px] pr-2 text-[13.5px] leading-5 transition-colors ${
        nested ? 'pl-3' : 'pl-2.5'
      } ${active ? 'bg-mint-50 font-medium text-mint-600' : 'text-gray-600 hover:bg-gray-100/80 hover:text-ink'}`}
    >
      {item.method && <MethodBadge method={item.method} />}
      <span className="min-w-0 truncate">{item.title}</span>
    </a>
  )
}

function NavItemWithChildren({ item, path, navigate }) {
  const containsActive = item.path === path || item.children.some((child) => child.path === path)
  const [open, setOpen] = useState(containsActive)
  useEffect(() => {
    if (containsActive) setOpen(true)
  }, [containsActive])

  return (
    <div>
      <div className={`flex items-center rounded-lg transition-colors ${
        item.path === path ? 'bg-mint-50' : 'hover:bg-gray-100/80'
      }`}>
        <a
          href={item.path}
          data-active={item.path === path || undefined}
          onClick={(e) => { e.preventDefault(); navigate(item.path); setOpen(true) }}
          className={`min-w-0 flex-1 truncate py-[7px] pl-2.5 text-[13.5px] leading-5 ${
            item.path === path ? 'font-medium text-mint-600' : 'text-gray-600 hover:text-ink'
          }`}
        >
          {item.title}
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex size-6 shrink-0 items-center justify-center text-gray-400 hover:text-ink"
          aria-label={`Toggle ${item.title}`}
        >
          <DocIcon name="chevronRight" className={`size-3 transition-transform duration-200 ${open ? 'rotate-90' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="ml-3 mt-0.5 space-y-0.5 border-l border-line pl-1.5">
          {item.children.map((child) => (
            <NavLink key={child.path} item={child} path={path} navigate={navigate} nested />
          ))}
        </div>
      )}
    </div>
  )
}

function SidebarNav({ tabId, path, navigate }) {
  const navRef = useRef(null)

  // keep the active item visible inside the scrollable sidebar
  useEffect(() => {
    const scroller = navRef.current?.parentElement
    const active = navRef.current?.querySelector('[data-active]')
    if (!scroller || !active) return
    const box = scroller.getBoundingClientRect()
    const rect = active.getBoundingClientRect()
    if (rect.top < box.top + 8 || rect.bottom > box.bottom - 8) {
      scroller.scrollTop += rect.top - box.top - box.height / 3
    }
  }, [path, tabId])

  return (
    <nav ref={navRef} className="space-y-7 pb-16">
      {NAV[tabId].map((group) => (
        <div key={group.title}>
          <div className="mb-2 px-2.5 text-[12px] font-semibold uppercase tracking-wide text-gray-400">
            {group.title}
          </div>
          <div className="space-y-0.5">
            {group.items.map((item) =>
              item.children ? (
                <NavItemWithChildren key={item.path} item={item} path={path} navigate={navigate} />
              ) : (
                <NavLink key={item.path} item={item} path={path} navigate={navigate} />
              ),
            )}
          </div>
        </div>
      ))}
    </nav>
  )
}

/* ---------- right table of contents with scrollspy ---------- */
function Toc({ toc }) {
  const [activeId, setActiveId] = useState(toc[0]?.id)

  useEffect(() => {
    setActiveId(toc[0]?.id)
    const onScroll = () => {
      let current = toc[0]?.id
      for (const entry of toc) {
        const el = document.getElementById(entry.id)
        if (el && el.getBoundingClientRect().top < 160) current = entry.id
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [toc])

  if (!toc.length) return null
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-[12.5px] font-semibold text-ink">
        <DocIcon name="menu" className="size-3.5" />
        On this page
      </div>
      <ul className="space-y-1 border-l border-line">
        {toc.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={`-ml-px block border-l py-1 pl-3.5 text-[13px] leading-5 transition-colors ${
                activeId === entry.id
                  ? 'border-mint-500 font-medium text-mint-600'
                  : 'border-transparent text-gray-500 hover:text-ink'
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

/* ---------- feedback + prev/next ---------- */
function PageFooter({ page, tabId, navigate }) {
  const [vote, setVote] = useState(null)
  const flat = flattenTab(tabId)
  const index = flat.findIndex((entry) => entry.path === page.path)
  const prev = index > 0 ? flat[index - 1] : null
  const next = index >= 0 && index < flat.length - 1 ? flat[index + 1] : null

  return (
    <div className="mt-14">
      {/* feedback */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
        <span className="text-[13.5px] text-gray-500">Was this page helpful?</span>
        <div className="flex gap-2">
          {[['up', 'thumbUp', 'Yes'], ['down', 'thumbDown', 'No']].map(([key, icon, label]) => (
            <button
              key={key}
              onClick={() => setVote(key)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-colors ${
                vote === key
                  ? 'border-mint-400 bg-mint-50 text-mint-600'
                  : 'border-line text-gray-600 hover:bg-gray-50'
              }`}
            >
              <DocIcon name={icon} className="size-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* prev / next */}
      {(prev || next) && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {prev ? (
            <a
              href={prev.path}
              onClick={(e) => { e.preventDefault(); navigate(prev.path) }}
              className="group flex items-center gap-3 rounded-xl border border-line p-4 transition-colors hover:border-mint-400/60"
            >
              <DocIcon name="arrowLeft" className="size-4 text-gray-400 transition-colors group-hover:text-mint-600" />
              <span className="min-w-0">
                <span className="block text-[12px] text-gray-400">Previous</span>
                <span className="block truncate text-[14px] font-medium text-ink">{prev.title}</span>
              </span>
            </a>
          ) : <span />}
          {next && (
            <a
              href={next.path}
              onClick={(e) => { e.preventDefault(); navigate(next.path) }}
              className="group flex items-center justify-end gap-3 rounded-xl border border-line p-4 text-right transition-colors hover:border-mint-400/60 sm:col-start-2"
            >
              <span className="min-w-0">
                <span className="block text-[12px] text-gray-400">Next</span>
                <span className="block truncate text-[14px] font-medium text-ink">{next.title}</span>
              </span>
              <DocIcon name="arrowRight" className="size-4 text-gray-400 transition-colors group-hover:text-mint-600" />
            </a>
          )}
        </div>
      )}

      <div className="mt-10 flex items-center justify-between border-t border-line pb-10 pt-6 text-[13px] text-gray-400">
        <span>© 2026 Mintlify — built as a clone for practice</span>
        <a href="/" className="transition-colors hover:text-ink">Powered by Mintlify</a>
      </div>
    </div>
  )
}

/* ---------- 404 within docs ---------- */
function NotFound({ navigate }) {
  return (
    <div className="py-24 text-center">
      <div className="font-mono text-[13px] text-mint-600">404</div>
      <h1 className="font-display mt-2 text-[36px] text-ink">Page not found</h1>
      <p className="mt-3 text-[15px] text-gray-500">We couldn't find that page in the documentation.</p>
      <button
        onClick={() => navigate('/docs')}
        className="mt-6 rounded-lg bg-ink px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-gray-800"
      >
        Back to docs home
      </button>
    </div>
  )
}

/* ---------- main docs app ---------- */
export default function Docs() {
  const [path, navigate] = usePath()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const page = findPage(path)
  const tabId = page ? tabForPath(path) : 'docs'

  // ⌘K / Ctrl+K opens search
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setMobileNavOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.title = page ? `${page.title} - Mintlify` : 'Page not found - Mintlify'
  }, [page])

  // close the mobile drawer after navigating
  const mobileNavigate = useCallback((next) => {
    setMobileNavOpen(false)
    navigate(next)
  }, [navigate])

  const rendered = page ? renderPage(page, navigate) : null

  return (
    <div className="min-h-screen bg-white">
      <Header
        activeTab={tabId}
        navigate={navigate}
        onSearch={() => setSearchOpen(true)}
        onMenu={() => setMobileNavOpen(true)}
      />

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} navigate={navigate} />

      {/* mobile sidebar drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden" onClick={() => setMobileNavOpen(false)}>
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />
          <div
            className="absolute inset-y-0 left-0 w-80 max-w-[85vw] overflow-y-auto bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <Logo />
              <button onClick={() => setMobileNavOpen(false)} className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100" aria-label="Close menu">
                <DocIcon name="x" className="size-4" />
              </button>
            </div>
            <SidebarNav tabId={tabId} path={path} navigate={mobileNavigate} />
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1440px] gap-10 px-4 lg:px-8">
        {/* left sidebar */}
        <aside className="sticky top-[101px] hidden h-[calc(100vh-101px)] w-[270px] shrink-0 overflow-y-auto pb-8 pr-2 pt-8 lg:block">
          <SidebarNav tabId={tabId} path={path} navigate={navigate} />
        </aside>

        {/* content */}
        <main className="min-w-0 flex-1 pt-10">
          {!page || !rendered ? (
            <NotFound navigate={navigate} />
          ) : (
            <article className="mx-auto max-w-[46rem]">
              {!rendered.landing && (
                <header className="mb-2">
                  <div className="mb-2 text-[13px] font-semibold text-mint-600">{page.group}</div>
                  <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-ink">
                    {page.title}
                  </h1>
                  <p className="mt-2.5 text-[16px] leading-6 text-gray-500">{descriptionFor(page)}</p>
                </header>
              )}
              {rendered.body}
              <PageFooter page={page} tabId={tabId} navigate={navigate} />
            </article>
          )}
        </main>

        {/* right toc */}
        <aside className="sticky top-[101px] hidden h-[calc(100vh-101px)] w-[220px] shrink-0 overflow-y-auto pb-8 pt-10 xl:block">
          {rendered && <Toc toc={rendered.toc} />}
        </aside>
      </div>
    </div>
  )
}
