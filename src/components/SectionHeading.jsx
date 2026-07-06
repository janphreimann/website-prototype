/** Shared section heading: green tick, two-tone title, action area right */
export default function SectionHeading({ line1, line2, children }) {
  return (
    <div className="relative mb-12 flex items-end justify-between gap-8">
      <span className="absolute -left-10 top-1.5 h-7 w-[3px] bg-mint-400 max-xl:hidden" />
      <h2 className="max-w-2xl text-[28px] font-medium leading-9 tracking-tight">
        <span className="text-ink">{line1}</span>{' '}
        <span className="text-gray-400">{line2}</span>
      </h2>
      {children && <div className="flex shrink-0 items-center gap-2">{children}</div>}
    </div>
  )
}

export function BlackButton({ children }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 rounded bg-ink px-4 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800"
    >
      {children}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-3"><path d="m9 18 6-6-6-6" /></svg>
    </a>
  )
}

export function ArrowButton({ dir = 'right', onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex size-9 items-center justify-center rounded border border-line bg-white text-gray-400 transition-colors hover:bg-gray-50 hover:text-ink"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`size-3.5 ${dir === 'left' ? 'rotate-180' : ''}`}>
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  )
}
