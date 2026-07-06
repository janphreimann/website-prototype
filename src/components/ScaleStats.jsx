import { useEffect, useRef } from 'react'
import SectionHeading, { BlackButton } from './SectionHeading.jsx'

/* wide band of interweaving green wave lines, animated on canvas
   (original settings: 24 lines, mint→lime gradient, edge fade 0.25,
   one colored particle streak travelling along the band) */
function WaveBand() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let rafId = 0
    let disposed = false

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })

    const N_LINES = 24
    const SEGS = 80
    const SPACING = 4.9
    const TWO_PI = 2 * Math.PI

    const MINT = [31, 227, 148]
    const LIME = [186, 255, 36]
    const PARTICLE_COLORS = [
      [216, 124, 255], [255, 167, 35], [68, 174, 255], [255, 163, 211],
    ]

    let W = 0, H = 0, DPR = 1
    let grad = null

    function applySize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas.clientWidth
      H = canvas.clientHeight
      canvas.width = Math.max(1, Math.round(W * DPR))
      canvas.height = Math.max(1, Math.round(H * DPR))
      // mint→lime along x, faded out over the outer 25% on each side
      grad = ctx.createLinearGradient(0, 0, W, 0)
      grad.addColorStop(0, `rgba(${MINT},0)`)
      grad.addColorStop(0.25, `rgba(${MINT},1)`)
      grad.addColorStop(0.75, `rgba(${LIME},1)`)
      grad.addColorStop(1, `rgba(${LIME},0)`)
    }
    window.addEventListener('resize', applySize)
    applySize()

    function lineY(fx, i, t) {
      const env = Math.pow(Math.sin(Math.PI * fx), 0.66)
      const wave =
        0.72 * Math.sin(TWO_PI * 0.75 * fx + i * 0.41 + t * 0.8) +
        0.28 * Math.sin(TWO_PI * 1.5 * fx - t * 0.55 + i * 0.14 + 2.1)
      const spread = (i - (N_LINES - 1) / 2) * SPACING *
        (0.4 + 0.6 * Math.cos(TWO_PI * 0.5 * fx + t * 0.25 + i * 0.03))
      return H * 0.52 + spread + env * H * 0.34 * wave
    }

    function traceLine(i, t, u0 = 0, u1 = 1) {
      ctx.beginPath()
      const k0 = Math.round(u0 * SEGS), k1 = Math.round(u1 * SEGS)
      for (let k = k0; k <= k1; k++) {
        const fx = k / SEGS
        const y = lineY(fx, i, t)
        if (k === k0) ctx.moveTo(fx * W, y)
        else ctx.lineTo(fx * W, y)
      }
    }

    let streak = null
    let nextStreakAt = 0.6

    function spawnStreak() {
      const c = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
      streak = {
        line: Math.floor(Math.random() * N_LINES),
        u: 0,
        speed: 0.16 + Math.random() * 0.08,
        c,
      }
    }

    const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches
    const t0 = performance.now()
    let lastNow = t0

    function frame(now) {
      if (disposed) return
      const t = (now - t0) / 1000
      const dt = Math.min(0.05, Math.max(0.001, (now - lastNow) / 1000))
      lastNow = now

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      ctx.clearRect(0, 0, W, H)
      ctx.lineCap = 'round'
      ctx.strokeStyle = grad
      ctx.lineWidth = 1

      for (let i = 0; i < N_LINES; i++) {
        ctx.globalAlpha = 0.75 - (i / (N_LINES - 1)) * 0.35
        traceLine(i, REDUCED ? 0 : t)
        ctx.stroke()
      }
      ctx.globalAlpha = 1

      if (!REDUCED) {
        if (!streak && t >= nextStreakAt) spawnStreak()
        if (streak) {
          streak.u += streak.speed * dt
          const du = 88 / W
          if (streak.u - du >= 1) {
            streak = null
            nextStreakAt = t + 1 + Math.random() * 2.5
          } else {
            const uh = Math.min(1, streak.u)
            const ut = Math.max(0, streak.u - du)
            const [r, g, b] = streak.c
            const sg = ctx.createLinearGradient(ut * W, 0, uh * W, 0)
            sg.addColorStop(0, `rgba(${r},${g},${b},0)`)
            sg.addColorStop(1, `rgba(${r},${g},${b},1)`)
            ctx.strokeStyle = sg
            ctx.lineWidth = 3
            // same edge fade as the band so the streak doesn't pop at the rim
            ctx.globalAlpha = Math.min(1, Math.min(uh, 1 - ut) / 0.25)
            traceLine(streak.line, t, ut, uh)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
        rafId = requestAnimationFrame(frame)
      }
    }
    rafId = requestAnimationFrame(frame)

    return () => {
      disposed = true
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', applySize)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none h-56 w-full" />
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
