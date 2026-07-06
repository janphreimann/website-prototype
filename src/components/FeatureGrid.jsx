import { useEffect, useRef } from 'react'
import SectionHeading, { BlackButton } from './SectionHeading.jsx'

/* decorative curved green lines, weaving like the hero animation */
const N_CURVES = 12
const CURVE_PERIOD = 14 // seconds, same cadence as the hero canvas
const CURVE_PHASE_STEP = (2 * Math.PI) / N_CURVES

// two shapes per line; each line oscillates between them with a phase offset
const curveShape = (i, g) => {
  const lerp = (a, b) => a + (b - a) * g
  const y0 = lerp(20 + i * 8, 42 + i * 6)
  const c1x = lerp(200, 165)
  const c1y = lerp(60 + i * 14, 115 + i * 9)
  const c2x = lerp(350, 385)
  const c2y = lerp(220 - i * 6, 168 - i * 11)
  const y1 = lerp(150 + i * 4, 126 + i * 7)
  return `M0 ${y0} C ${c1x} ${c1y}, ${c2x} ${c2y}, 600 ${y1}`
}

function Curves({ className, flip = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const svg = ref.current
    if (!svg || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const paths = svg.querySelectorAll('path')
    let rafId = 0
    const t0 = performance.now()

    const frame = (now) => {
      const t = (now - t0) / 1000
      for (let i = 0; i < paths.length; i++) {
        const g = 0.5 + 0.5 * Math.sin((2 * Math.PI * t) / CURVE_PERIOD + CURVE_PHASE_STEP * i)
        paths[i].setAttribute('d', curveShape(i, g))
      }
      rafId = requestAnimationFrame(frame)
    }
    rafId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <svg ref={ref} viewBox="0 0 600 300" fill="none" className={`${className} ${flip ? '-scale-x-100' : ''}`}>
      {Array.from({ length: N_CURVES }).map((_, i) => (
        <path
          key={i}
          d={curveShape(i, 0.5)}
          stroke={`rgba(${31 + i * 12},${227 - i * 2},${148 - i * 8},${0.55 - i * 0.03})`}
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

function Skeleton({ w = 'w-24', h = 'h-2.5', className = '' }) {
  return <div className={`rounded-full bg-gray-200/80 ${w} ${h} ${className}`} />
}

function Card({ label, className = '', children }) {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-xl border border-line bg-cream ${className}`}>
      <div className="relative flex-1">{children}</div>
      <div className="p-6 pt-0 text-[15px] font-medium text-ink">{label}</div>
    </div>
  )
}

export default function FeatureGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1225px] px-4">
        <div className="relative">
          <SectionHeading
            line1="One platform for your entire knowledge stack."
            line2="Agents that keep work moving 24/7."
          >
            <BlackButton>Get started</BlackButton>
          </SectionHeading>
        </div>

        {/* row 1 */}
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <Card label="Agent-native platform" className="min-h-[360px]">
            <Curves className="absolute left-0 top-6 h-56 w-2/3" />
            <Curves className="absolute bottom-2 right-0 h-44 w-2/3" flip />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex w-96 max-w-[85%] items-center gap-3 rounded-full border border-line bg-white px-5 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1fe394" strokeWidth="2" className="size-4"><path d="M12 3l1.9 5.7L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.3L12 3z" /></svg>
                <span className="flex-1 text-[15px] text-gray-500">Ask AI anything...</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 text-gray-700"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </Card>

          <Card label="Self-updating knowledge" className="min-h-[360px]">
            <Curves className="absolute -left-10 top-0 h-full w-[140%]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`flex w-full items-center gap-3 rounded-full border border-line bg-white px-4 py-3 shadow-sm ${i === 1 ? 'translate-x-4' : ''}`}>
                  <span className="size-5 shrink-0 rounded-full border-2 border-gray-300" />
                  <Skeleton w="w-2/3" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* row 2 */}
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Card label="Control who has access" className="min-h-[300px]">
            <div className="absolute inset-0 flex flex-col justify-center gap-2.5 px-8">
              {[
                { role: 'Editor', active: false },
                { role: 'Admin', active: true },
                { role: 'Collaborator', active: false },
              ].map((r, i) => (
                <div
                  key={r.role}
                  className={`flex items-center gap-3 rounded-lg border bg-white px-3 py-2.5 ${
                    r.active ? 'border-mint-500 shadow-[0_0_0_1px_#17c07c]' : 'border-line'
                  } ${i === 1 ? '-translate-x-2' : 'translate-x-2'}`}
                >
                  <span className={`flex size-7 items-center justify-center rounded-full ${r.active ? 'bg-mint-100 text-mint-600' : 'bg-gray-100 text-gray-400'}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /></svg>
                  </span>
                  <div className="flex-1 space-y-1.5">
                    <Skeleton w="w-24" h="h-2" />
                    <Skeleton w="w-16" h="h-2" />
                  </div>
                  <span className={`rounded px-2 py-0.5 text-[11px] font-medium ${r.active ? 'bg-mint-50 text-mint-600' : 'bg-gray-100 text-gray-500'}`}>
                    ⊘ {r.role}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card label="Connect with your systems" className="min-h-[300px]">
            <Curves className="absolute left-0 top-1/3 h-40 w-full" />
            <div className="absolute inset-0 flex items-center justify-center gap-3">
              {['✳', '◫', '⬡'].map((g, i) => (
                <span key={i} className="flex size-14 items-center justify-center rounded-xl border border-line bg-white text-xl shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)]">
                  {g}
                </span>
              ))}
            </div>
          </Card>

          <Card label="Collaborate with your team & agents" className="min-h-[300px]">
            <div className="absolute inset-x-8 bottom-6 top-8 rounded-lg border border-line bg-white p-4 shadow-sm">
              <div className="mb-3 flex gap-2 border-b border-line pb-2">
                {['Guide.md', 'LLMS.txt', 'MCP'].map((t, i) => (
                  <span key={t} className={`text-[10px] ${i === 0 ? 'font-semibold text-mint-600' : 'text-gray-400'}`}>{t}</span>
                ))}
              </div>
              <div className="space-y-2">
                <div className="h-2 w-16 rounded-full bg-mint-400" />
                <Skeleton w="w-3/4" h="h-2" />
                <Skeleton w="w-2/3" h="h-2" />
                <div className="h-2 w-14 rounded-full bg-mint-400" />
                <Skeleton w="w-3/4" h="h-2" />
              </div>
              <span className="absolute right-3 top-10 rounded bg-purple-100 px-1.5 py-0.5 text-[10px] font-medium text-purple-600">Agent 130</span>
              <span className="absolute -left-2 bottom-10 rounded bg-sky-100 px-1.5 py-0.5 text-[10px] font-medium text-sky-600">Agent 152</span>
              <span className="absolute bottom-4 right-4 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-600">User 007</span>
            </div>
          </Card>
        </div>

        {/* row 3 */}
        <div className="mt-4">
          <Card label="Build on top of your existing setup" className="min-h-[360px]">
            <Curves className="absolute left-0 top-8 h-64 w-1/3" />
            <Curves className="absolute right-0 top-16 h-56 w-1/3" flip />
            <div className="absolute inset-x-0 top-9 mx-auto w-[58%] rounded-t-lg border border-line bg-white p-5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.12)]">
              <div className="flex gap-5">
                <div className="w-1/3 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded bg-mint-100 text-[10px] text-mint-600">≡</span>
                    <Skeleton w="w-20" h="h-2" />
                  </div>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`flex items-center gap-2 ${i === 2 ? 'rounded bg-mint-50 px-1.5 py-1' : ''}`}>
                      <span className="size-2.5 rounded-sm bg-gray-200" />
                      <div className={`h-2 rounded-full ${i === 2 ? 'w-20 bg-mint-400' : 'w-16 bg-gray-200/80'}`} />
                    </div>
                  ))}
                </div>
                <div className="flex-1 space-y-3">
                  <Skeleton w="w-32" h="h-2.5" className="mx-auto" />
                  <div className="grid grid-cols-2 gap-3">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-16 rounded-md bg-gray-100" />
                    ))}
                  </div>
                  <Skeleton w="w-3/4" h="h-2" />
                  <Skeleton w="w-1/2" h="h-2" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
