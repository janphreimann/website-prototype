import { useEffect, useRef } from 'react'

/**
 * Woven-lines canvas animation (user-supplied), wrapped as a React component.
 * Fills its parent container (parent must be position:relative).
 */
export default function HeroAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let rafId = 0
    let disposed = false

    // ---------- Reference geometry (measured, in a 1327 x 992 frame) ----------
    const REF_W = 1327, REF_H = 992

    const CFG_A = [
      [29,809,1592,85,98,-37,-18,-1],[40,829,1588,78,102,-24,-18,-1],
      [51,850,1586,73,108,-14,-17,-1],[62,871,1584,69,116,-6,-16,0],
      [72,890,1583,68,125,0,-15,0],[81,907,1583,67,137,5,-15,0],
      [89,921,1583,68,150,8,-16,1],[95,932,1584,70,164,11,-17,1],
      [99,940,1586,73,177,14,-19,1],[102,946,1588,76,189,17,-21,1],
      [104,950,1590,80,196,23,-23,1],[106,953,1592,85,198,30,-24,1],
      [107,956,1595,90,193,38,-25,0],[109,960,1598,96,180,48,-24,0],
      [112,965,1601,102,159,59,-22,-1],[116,973,1605,109,130,69,-19,-1],
      [122,983,1609,117,93,80,-15,-2],[129,996,1614,126,51,88,-9,-2],
      [137,1012,1619,135,6,94,-3,-2],[146,1029,1624,145,-41,98,4,-2],
      [155,1047,1629,155,-86,98,11,-2],[165,1065,1635,166,-127,94,17,-2],
      [174,1082,1641,176,-162,87,23,-2]
    ]

    const CFG_B = [
      [41,831,1604,108,179,-39,-22,-1],[43,835,1608,115,181,-33,-21,-1],
      [45,840,1611,121,177,-29,-19,-1],[48,845,1613,125,169,-25,-17,-1],
      [51,850,1614,127,160,-23,-16,-1],[54,857,1613,125,149,-21,-15,-1],
      [58,864,1611,120,140,-17,-15,0],[63,873,1606,112,132,-13,-16,0],
      [69,884,1601,101,126,-7,-17,1],[76,896,1594,89,122,2,-18,1],
      [83,911,1588,77,119,14,-20,1],[92,928,1581,65,116,27,-21,1],
      [102,946,1576,55,113,43,-21,1],[113,966,1573,49,108,59,-21,1],
      [124,988,1572,47,101,75,-19,1],[136,1010,1574,50,90,90,-16,1],
      [147,1031,1578,59,75,103,-12,1],[158,1052,1585,72,56,112,-8,1],
      [168,1070,1595,91,33,116,-3,1],[176,1086,1607,114,6,116,3,1],
      [183,1098,1621,139,-22,112,9,1],[187,1106,1635,166,-52,102,15,0],
      [189,1110,1649,193,-81,88,21,-1]
    ]

    const N_LINES = CFG_A.length
    const SEGS = 72
    const PERIOD = 14
    const PHASE_STEP = 2 * Math.PI / N_LINES
    const TWO_PI = 2 * Math.PI

    const MINT = [31, 227, 148]
    const LIME = [186, 255, 36]
    const ORANGE = [255, 167, 35], BLUE = [68, 174, 255],
          PINK = [255, 163, 211], PURPLE = [216, 124, 255]

    const lerp = (a, b, t) => a + (b - a) * t
    const clamp01 = x => x < 0 ? 0 : x > 1 ? 1 : x

    const LINE_STOPS = []
    for (let i = 0; i < N_LINES; i++) {
      const fu = i / (N_LINES - 1)
      const r = Math.round(lerp(MINT[0], LIME[0], fu))
      const g = Math.round(lerp(MINT[1], LIME[1], fu))
      const b = Math.round(lerp(MINT[2], LIME[2], fu))
      LINE_STOPS.push([`rgba(${r},${g},${b},0)`, `rgba(${r},${g},${b},1)`])
    }

    const SIN_T = []
    for (let h = 0; h < 4; h++) {
      const row = new Float32Array(SEGS + 1)
      for (let k = 0; k <= SEGS; k++) row[k] = Math.sin((h + 1) * Math.PI * k / SEGS)
      SIN_T.push(row)
    }

    function slotParams(s, t, out) {
      const g = 0.5 + 0.5 * Math.sin(TWO_PI * t / PERIOD + PHASE_STEP * s)
      const i0 = Math.max(0, Math.min(N_LINES - 2, Math.floor(s)))
      const f = s - i0
      const rowA0 = CFG_A[i0], rowA1 = CFG_A[i0 + 1]
      const rowB0 = CFG_B[i0], rowB1 = CFG_B[i0 + 1]
      for (let k = 0; k < 8; k++) {
        const a = rowA0[k] + (rowA1[k] - rowA0[k]) * f
        const b = rowB0[k] + (rowB1[k] - rowB0[k]) * f
        out[k] = a + (b - a) * g
      }
      return out
    }

    const pe1 = new Float64Array(8), pe2 = new Float64Array(8)
    function edgeParams(slot, t, out) {
      const over = slot - (N_LINES - 1)
      slotParams(N_LINES - 2, t, pe1)
      slotParams(N_LINES - 1, t, pe2)
      for (let k = 0; k < 8; k++) out[k] = pe2[k] + (pe2[k] - pe1[k]) * over
      return out
    }

    function buildCurve(p, pts) {
      const ax = p[0], ay = p[1], dx = p[2] - ax, dy = p[3] - ay
      const len = Math.hypot(dx, dy)
      const nx = -dy / len, ny = dx / len
      const w1 = p[4], w2 = p[5], w3 = p[6], w4 = p[7]
      const s1 = SIN_T[0], s2 = SIN_T[1], s3 = SIN_T[2], s4 = SIN_T[3]
      for (let k = 0; k <= SEGS; k++) {
        const u = k / SEGS
        const v = w1 * s1[k] + w2 * s2[k] + w3 * s3[k] + w4 * s4[k]
        pts[2 * k] = ax + dx * u + nx * v
        pts[2 * k + 1] = ay + dy * u + ny * v
      }
      return len
    }

    function curvePoint(p, u, out) {
      const ax = p[0], ay = p[1], dx = p[2] - ax, dy = p[3] - ay
      const len = Math.hypot(dx, dy)
      const nx = -dy / len, ny = dx / len
      const pu = Math.PI * u
      const v = p[4] * Math.sin(pu) + p[5] * Math.sin(2 * pu) +
                p[6] * Math.sin(3 * pu) + p[7] * Math.sin(4 * pu)
      out[0] = ax + dx * u + nx * v
      out[1] = ay + dy * u + ny * v
    }

    function tracePath(ctx, pts, n) {
      ctx.beginPath()
      ctx.moveTo(pts[0], pts[1])
      for (let k = 1; k < n; k++) {
        const mx = (pts[2 * k] + pts[2 * (k + 1)]) / 2
        const my = (pts[2 * k + 1] + pts[2 * (k + 1) + 1]) / 2
        ctx.quadraticCurveTo(pts[2 * k], pts[2 * k + 1], mx, my)
      }
      ctx.lineTo(pts[2 * n], pts[2 * n + 1])
    }

    const STREAK_COLORS = [ORANGE, BLUE, PINK, PURPLE, MINT, LIME]
    const streaks = []
    let nextStreakAt = 0

    function spawnStreak(t) {
      const c = STREAK_COLORS[Math.floor(Math.random() * STREAK_COLORS.length)]
      streaks.push({
        slot: Math.random() * (N_LINES - 1),
        u: Math.random() * 0.55,
        speed: 240 + Math.random() * 90,
        len: 88,
        c0: `rgba(${c[0]},${c[1]},${c[2]},0)`,
        c1: `rgba(${c[0]},${c[1]},${c[2]},1)`,
        born: t,
        life: 2.2 + Math.random() * 4.0
      })
    }

    let tint = null
    let nextTintAt = 3 + Math.random() * 5

    function spawnTint(t) {
      const c = Math.random() < 0.5 ? PINK : PURPLE
      tint = {
        slot: N_LINES - 1 + 0.8 + Math.random() * 1.4,
        c0: `rgba(${c[0]},${c[1]},${c[2]},0)`,
        c1: `rgba(${c[0]},${c[1]},${c[2]},1)`,
        born: t,
        life: 6 + Math.random() * 3
      }
    }

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })
    let W = 0, H = 0, DPR = 1
    let quality = 1

    function applySize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2) * quality
      W = canvas.clientWidth
      H = canvas.clientHeight
      canvas.width = Math.max(1, Math.round(W * DPR))
      canvas.height = Math.max(1, Math.round(H * DPR))
    }
    window.addEventListener('resize', applySize)
    applySize()

    let emaFrame = 16, lastAdjust = 0
    function adaptQuality(frameMs, t) {
      emaFrame = emaFrame * 0.94 + frameMs * 0.06
      if (t - lastAdjust < 1.5) return
      if (emaFrame > 21 && quality > 0.5) { quality -= 0.25; lastAdjust = t; applySize() }
      else if (emaFrame < 11 && quality < 1) { quality += 0.25; lastAdjust = t; applySize() }
    }

    const pts = new Float32Array(2 * (SEGS + 1))
    const par = new Float64Array(8)
    const cometPts = new Float32Array(2 * 17)
    const COMET_SUB = 16
    const tmp = [0, 0]
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
      ctx.scale(W / REF_W, H / REF_H)
      ctx.globalAlpha = 1
      ctx.lineCap = 'round'

      for (let i = 0; i < N_LINES; i++) {
        slotParams(i, REDUCED ? 0 : t, par)
        buildCurve(par, pts)
        const grad = ctx.createLinearGradient(par[0], par[1], par[2], par[3])
        const st = LINE_STOPS[i]
        grad.addColorStop(0, st[0])
        grad.addColorStop(0.25, st[1])
        grad.addColorStop(0.75, st[1])
        grad.addColorStop(1, st[0])
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        tracePath(ctx, pts, SEGS)
        ctx.stroke()
      }

      if (!REDUCED) {
        if (!tint && t >= nextTintAt) spawnTint(t)
        if (tint) {
          const age = t - tint.born
          if (age > tint.life) { tint = null; nextTintAt = t + 4 + Math.random() * 7 }
          else {
            const fade = Math.min(1, age / 1.2, (tint.life - age) / 1.2)
            edgeParams(tint.slot, t, par)
            buildCurve(par, pts)
            const grad = ctx.createLinearGradient(par[0], par[1], par[2], par[3])
            grad.addColorStop(0, tint.c0)
            grad.addColorStop(1, tint.c1)
            ctx.strokeStyle = grad
            ctx.lineWidth = 1
            ctx.globalAlpha = fade
            tracePath(ctx, pts, SEGS)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }

        if (t >= nextStreakAt && streaks.length < 5) {
          spawnStreak(t)
          nextStreakAt = t + 0.8 + Math.random() * 1.6
        }
        for (let s = streaks.length - 1; s >= 0; s--) {
          const st = streaks[s]
          const age = t - st.born
          slotParams(st.slot, t, par)
          const chord = Math.hypot(par[2] - par[0], par[3] - par[1])
          const L = chord * 1.06
          st.u += (st.speed / L) * dt
          const du = st.len / L
          if (age > st.life || st.u >= 1) { streaks.splice(s, 1); continue }
          const u1 = Math.min(1, st.u + du)
          for (let k = 0; k <= COMET_SUB; k++) {
            curvePoint(par, st.u + (u1 - st.u) * k / COMET_SUB, tmp)
            cometPts[2 * k] = tmp[0]
            cometPts[2 * k + 1] = tmp[1]
          }
          const fade = Math.min(1, age / 0.45, (st.life - age) / 0.6,
                                (1 - st.u) * L / 140)
          const grad = ctx.createLinearGradient(cometPts[0], cometPts[1],
                                                cometPts[2 * COMET_SUB], cometPts[2 * COMET_SUB + 1])
          grad.addColorStop(0, st.c0)
          grad.addColorStop(1, st.c1)
          ctx.strokeStyle = grad
          ctx.lineWidth = 3
          ctx.globalAlpha = clamp01(fade)
          tracePath(ctx, cometPts, COMET_SUB)
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      }

      if (!REDUCED) {
        adaptQuality(performance.now() - now, t)
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

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
