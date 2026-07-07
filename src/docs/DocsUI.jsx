import { useState } from 'react'

/* ---------- inline icon set (24x24 stroke paths) ---------- */
export const DOC_ICONS = {
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z',
  map: 'M9 20l-6 2V6l6-2m0 16l6-2m-6 2V4m6 14l6 2V4l-6-2m0 16V2',
  terminal: 'M4 17l6-5-6-5M12 19h8',
  rocket: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2.2-.7-3 .8zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.9 7.4-6 11a22.4 22.4 0 0 1-4 2z',
  pen: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
  blocks: 'M14 4h6v6h-6zM4 14h6v6H4zM4 4h6v6H4zM14 14h6v6h-6z',
  sparkle: 'M12 3l1.9 5.7L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.3L12 3z',
  globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  copy: 'M8 8h12v12H8zM4 16V4h12',
  check: 'M20 6L9 17l-5-5',
  chevronRight: 'm9 18 6-6-6-6',
  chevronDown: 'm6 9 6 6 6-6',
  arrowLeft: 'M19 12H5M12 19l-7-7 7-7',
  arrowRight: 'M5 12h14M12 5l7 7-7 7',
  info: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01',
  warning: 'M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01',
  bulb: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z',
  bot: 'M12 8V4M8 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM9 13h.01M15 13h.01',
  plug: 'M12 22v-5M9 8V2M15 8V2M6 8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z',
  cloud: 'M17.5 19a4.5 4.5 0 1 0-.4-9A7 7 0 1 0 5 17.7',
  palette: 'M12 22a10 10 0 1 1 10-10c0 1.7-1.3 3-3 3h-2a2 2 0 0 0-2 2c0 .5.2 1 .5 1.3.3.4.5.8.5 1.2a2.5 2.5 0 0 1-2.5 2.5zM7.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM11.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM16.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  gauge: 'M12 15l3.5-3.5M20.3 18a9 9 0 1 0-16.6 0',
  sun: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  slash: 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM19 5L5 19',
  file: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6',
  thumbUp: 'M7 10v12M15 5.9L14 10h5.6a2 2 0 0 1 2 2.4l-1.4 6A2 2 0 0 1 18.2 20H7V10l4-8a2.4 2.4 0 0 1 4 1.9z',
  thumbDown: 'M17 14V2M9 18.1L10 14H4.4a2 2 0 0 1-2-2.4l1.4-6A2 2 0 0 1 5.8 4H17v10l-4 8a2.4 2.4 0 0 1-4-1.9z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  x: 'M18 6L6 18M6 6l12 12',
}

export function DocIcon({ name, className = 'size-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={DOC_ICONS[name] || DOC_ICONS.file} />
    </svg>
  )
}

/* ---------- HTTP method badge ---------- */
const METHOD_STYLES = {
  GET: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  POST: 'bg-blue-50 text-blue-600 border-blue-200',
  PUT: 'bg-amber-50 text-amber-600 border-amber-200',
  DELETE: 'bg-red-50 text-red-600 border-red-200',
}

export function MethodBadge({ method, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded border px-1.5 py-px font-mono text-[10px] font-semibold ${METHOD_STYLES[method] || METHOD_STYLES.GET} ${className}`}>
      {method}
    </span>
  )
}

/* ---------- tiny syntax highlighter (regex-based, good enough for a clone) ---------- */
const TOKEN_RE = /(\/\/[^\n]*|#[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b(true|false|null|const|let|var|import|export|from|function|return|async|await|new|if|else|npm|npx|yarn|pnpm|curl|mint|git|cd)\b|\b(\d+(?:\.\d+)?)\b/g

function highlight(code) {
  const out = []
  let last = 0
  let match
  let key = 0
  while ((match = TOKEN_RE.exec(code)) !== null) {
    if (match.index > last) out.push(<span key={key++}>{code.slice(last, match.index)}</span>)
    const [text] = match
    const cls = match[1] ? 'text-gray-500'         // comment
      : match[2] ? 'text-[#9ece8c]'                // string
      : match[3] ? 'text-[#c792ea]'                // keyword
      : 'text-[#f0a45d]'                           // number
    out.push(<span key={key++} className={cls}>{text}</span>)
    last = match.index + text.length
  }
  if (last < code.length) out.push(<span key={key++}>{code.slice(last)}</span>)
  return out
}

/* ---------- code block, dark like the real docs even in light mode ---------- */
export function CodeBlock({ title, children, className = '' }) {
  const [copied, setCopied] = useState(false)
  const code = typeof children === 'string' ? children.replace(/^\n/, '').trimEnd() : ''

  const copy = () => {
    navigator.clipboard?.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className={`group my-5 overflow-hidden rounded-xl border border-[#26282d] bg-[#0f1117] ${className}`}>
      <div className="flex h-9 items-center justify-between border-b border-white/[0.07] px-4">
        <span className="font-mono text-[12px] text-gray-400">{title}</span>
        <button onClick={copy} className="text-gray-500 transition-colors hover:text-gray-300" aria-label="Copy code">
          <DocIcon name={copied ? 'check' : 'copy'} className="size-3.5" />
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.65] text-gray-200">
        <code>{highlight(code)}</code>
      </pre>
    </div>
  )
}

/* ---------- tabbed code group ---------- */
export function CodeGroup({ tabs }) {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)
  const code = tabs[active].code.replace(/^\n/, '').trimEnd()

  const copy = () => {
    navigator.clipboard?.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-[#26282d] bg-[#0f1117]">
      <div className="flex h-10 items-center justify-between border-b border-white/[0.07] pr-4">
        <div className="flex h-full">
          {tabs.map((tab, i) => (
            <button
              key={tab.title}
              onClick={() => setActive(i)}
              className={`relative px-4 font-mono text-[12px] transition-colors ${
                i === active ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab.title}
              {i === active && <span className="absolute inset-x-3 bottom-0 h-px bg-mint-400" />}
            </button>
          ))}
        </div>
        <button onClick={copy} className="text-gray-500 transition-colors hover:text-gray-300" aria-label="Copy code">
          <DocIcon name={copied ? 'check' : 'copy'} className="size-3.5" />
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.65] text-gray-200">
        <code>{highlight(code)}</code>
      </pre>
    </div>
  )
}

/* ---------- callouts ---------- */
const CALLOUT_STYLES = {
  info: { icon: 'info', box: 'border-sky-100 bg-sky-50/70', iconColor: 'text-sky-500' },
  tip: { icon: 'bulb', box: 'border-mint-100 bg-mint-50/70', iconColor: 'text-mint-600' },
  warning: { icon: 'warning', box: 'border-amber-100 bg-amber-50/70', iconColor: 'text-amber-500' },
  note: { icon: 'pen', box: 'border-gray-200 bg-gray-50', iconColor: 'text-gray-500' },
}

export function Callout({ type = 'info', children }) {
  const style = CALLOUT_STYLES[type] || CALLOUT_STYLES.info
  return (
    <div className={`my-5 flex gap-3 rounded-xl border p-4 text-[14px] leading-6 text-gray-700 ${style.box}`}>
      <DocIcon name={style.icon} className={`mt-1 size-4 shrink-0 ${style.iconColor}`} />
      <div>{children}</div>
    </div>
  )
}

/* ---------- cards ---------- */
export function DocCard({ icon, title, children, onClick, href }) {
  return (
    <a
      href={href || '#'}
      onClick={onClick}
      className="group flex flex-col gap-2.5 rounded-2xl border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-mint-400/60 hover:shadow-[0_12px_32px_-16px_rgba(13,147,115,0.35)]"
    >
      <span className="flex size-8 items-center justify-center rounded-lg border border-line bg-cream text-mint-600 transition-colors group-hover:border-mint-200 group-hover:bg-mint-50">
        <DocIcon name={icon} className="size-4" />
      </span>
      <span className="text-[15px] font-semibold text-ink">{title}</span>
      <span className="text-[13.5px] leading-5 text-gray-500">{children}</span>
    </a>
  )
}

export function CardGrid({ children, cols = 2 }) {
  return <div className={`my-6 grid gap-4 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>{children}</div>
}

/* ---------- steps ---------- */
export function Steps({ items }) {
  return (
    <div className="my-6">
      {items.map((step, i) => (
        <div key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
          {i < items.length - 1 && <span className="absolute left-[13px] top-8 bottom-0 w-px bg-line" />}
          <span className="z-10 flex size-7 shrink-0 items-center justify-center rounded-lg border border-line bg-cream font-mono text-[12px] font-semibold text-gray-700">
            {i + 1}
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <div className="text-[15px] font-semibold text-ink">{step.title}</div>
            <div className="mt-1.5 text-[14.5px] leading-6 text-gray-600">{step.body}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------- API parameter field ---------- */
export function ParamField({ name, type, required, children }) {
  return (
    <div className="border-b border-line py-4 last:border-0">
      <div className="flex flex-wrap items-center gap-2">
        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px] font-semibold text-ink">{name}</code>
        <span className="font-mono text-[12px] text-gray-400">{type}</span>
        {required && <span className="font-mono text-[11px] font-medium text-red-500">required</span>}
      </div>
      <p className="mt-1.5 text-[14px] leading-6 text-gray-600">{children}</p>
    </div>
  )
}

/* ---------- inline code ---------- */
export function Code({ children }) {
  return <code className="rounded border border-line bg-cream px-1.5 py-0.5 font-mono text-[13px] text-ink">{children}</code>
}
