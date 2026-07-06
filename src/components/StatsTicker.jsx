const STATS = [
  { label: 'Pages read', value: '10,760,955' },
  { label: 'Search requests', value: '262,807' },
  { label: 'API requests', value: '21,190' },
  { label: 'Feedback provided', value: '2,802' },
  { label: 'Content updates', value: '21,548' },
]

function StatRow() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {STATS.map((s) => (
        <div key={s.label} className="flex items-center gap-2.5 whitespace-nowrap">
          <span className="text-[13px] text-gray-500">{s.label}</span>
          <span className="rounded bg-mint-50 px-2 py-0.5 font-mono text-[13px] font-medium text-mint-600">
            {s.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function StatsTicker() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1225px] items-center px-4">
        <div className="relative z-10 shrink-0 bg-white py-6 pr-8 text-[14px] font-medium text-ink">
          Agents at work today
          {/* fade edge */}
          <span className="pointer-events-none absolute left-full top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        </div>
        <div className="flex flex-1 overflow-hidden py-6">
          <div className="animate-marquee flex">
            <StatRow />
            <StatRow />
          </div>
        </div>
      </div>
    </section>
  )
}
