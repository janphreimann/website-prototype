export default function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-white">
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

      <div className="relative mx-auto flex max-w-[1225px] flex-wrap items-center justify-between gap-8 px-4 py-20">
        <h2 className="font-display text-[38px] tracking-[-1px] text-ink">
          The knowledge platform built for agents
        </h2>
        <div className="flex items-center gap-3">
          <a href="#" className="rounded border border-line bg-white px-4 py-2.5 text-[13.5px] font-medium transition-colors hover:bg-gray-50">
            Talk to sales
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded bg-ink px-4 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-gray-800">
            Get started
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-3"><path d="m9 18 6-6-6-6" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
