import SectionHeading, { BlackButton } from './SectionHeading.jsx'

/* wide band of interweaving green wave lines */
function WaveBand() {
  const n = 16
  return (
    <svg viewBox="0 0 1200 260" fill="none" className="h-56 w-full" preserveAspectRatio="none">
      {Array.from({ length: n }).map((_, i) => {
        const f = i / (n - 1)
        const r = Math.round(31 + (186 - 31) * f)
        const g = Math.round(227 + (255 - 227) * f)
        const b = Math.round(148 + (36 - 148) * f)
        return (
          <path
            key={i}
            d={`M0 ${70 + i * 4} C 250 ${180 - i * 7}, 420 ${30 + i * 9}, 640 ${120 + i * 3} S 1000 ${210 - i * 8}, 1200 ${60 + i * 6}`}
            stroke={`rgba(${r},${g},${b},${0.75 - f * 0.35})`}
            strokeWidth="1"
          />
        )
      })}
    </svg>
  )
}

const STATS = [
  { icon: 'M4 20V10M10 20V4M16 20v-6M22 20H2', value: '300M+', label: 'visitors in the past year' },
  { icon: 'M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', value: '2B+', label: 'agents in the past year' },
  { icon: 'M12 6v6l4 2M20.3 18a9 9 0 1 0-16.6 0', value: '99.99%', label: 'uptime across all services' },
]

export default function ScaleStats() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <SectionHeading
          line1="Built to scale with the agent web."
          line2="Built for scale with enterprise-grade reliability and performance."
        >
          <BlackButton>For enterprises</BlackButton>
        </SectionHeading>

        <WaveBand />

        <div className="mt-10 grid grid-cols-1 border-t border-line pt-10 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <div key={s.value} className={`px-2 sm:px-8 ${i > 0 ? 'sm:border-l sm:border-line' : 'sm:pl-0'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5 text-gray-400">
                <path d={s.icon} />
              </svg>
              <div className="mt-4 text-[34px] font-medium tracking-tight text-ink">{s.value}</div>
              <div className="mt-1 text-[14px] text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
