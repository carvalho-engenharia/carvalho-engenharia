'use client'

import { useEffect, useRef } from 'react'

interface Segment {
  x1: number
  y1: number
  x2: number
  y2: number
  len: number
  weight: number
}

interface Label {
  x: number
  y: number
  text: string
  size: number
  align: CanvasTextAlign
}

interface Plan {
  segments: Segment[]
  totalLen: number
  labels: Label[]
  stampX: number
  stampY: number
  stampRotation: number
  birth: number
  cycleDuration: number
}

const BLUE = '6,107,239'
const GREEN = '22,163,74'

function dist(x1: number, y1: number, x2: number, y2: number) {
  return Math.hypot(x2 - x1, y2 - y1)
}

function seg(segs: Segment[], x1: number, y1: number, x2: number, y2: number, weight = 1.6) {
  segs.push({ x1, y1, x2, y2, len: dist(x1, y1, x2, y2), weight })
}

function arc(
  segs: Segment[],
  hingeX: number,
  hingeY: number,
  startAngle: number,
  endAngle: number,
  radius: number,
  weight = 1
) {
  const sx = hingeX + Math.cos(startAngle) * radius
  const sy = hingeY + Math.sin(startAngle) * radius
  seg(segs, hingeX, hingeY, sx, sy, weight)

  const steps = 10
  let prevX = sx
  let prevY = sy
  for (let i = 1; i <= steps; i++) {
    const a = startAngle + (endAngle - startAngle) * (i / steps)
    const px = hingeX + Math.cos(a) * radius
    const py = hingeY + Math.sin(a) * radius
    seg(segs, prevX, prevY, px, py, weight * 0.7)
    prevX = px
    prevY = py
  }
}

function buildPlan(ox: number, oy: number, scale: number): { segments: Segment[]; labels: Label[]; w: number; h: number } {
  const W = 260 * scale
  const H = 168 * scale
  const p = (x: number, y: number) => [ox + x, oy + y] as const

  const segments: Segment[] = []
  const labels: Label[] = []

  const splitX = W * 0.56
  const splitY = H * 0.52

  const dimOff = 20 * scale
  seg(segments, ...p(0, -dimOff), ...p(W, -dimOff), 1)
  seg(segments, ...p(0, -dimOff - 4 * scale), ...p(0, -dimOff + 4 * scale), 1)
  seg(segments, ...p(W, -dimOff - 4 * scale), ...p(W, -dimOff + 4 * scale), 1)
  seg(segments, ...p(-dimOff, 0), ...p(-dimOff, H), 1)
  seg(segments, ...p(-dimOff - 4 * scale, 0), ...p(-dimOff + 4 * scale, 0), 1)
  seg(segments, ...p(-dimOff - 4 * scale, H), ...p(-dimOff + 4 * scale, H), 1)

  labels.push({ x: ox + W / 2, y: oy - dimOff - 8 * scale, text: '6,40', size: 9 * scale, align: 'center' })
  labels.push({ x: ox - dimOff - 8 * scale, y: oy + H / 2, text: '4,20', size: 9 * scale, align: 'right' })

  seg(segments, ...p(0, 0), ...p(W, 0), 2.2)
  seg(segments, ...p(W, 0), ...p(W, H), 2.2)
  seg(segments, ...p(W, H), ...p(0, H), 2.2)
  seg(segments, ...p(0, H), ...p(0, 0), 2.2)
  seg(segments, ...p(splitX, 0), ...p(splitX, H), 2.2)
  seg(segments, ...p(splitX, splitY), ...p(W, splitY), 2.2)

  const [ehx, ehy] = p(0, H * 0.58)
  arc(segments, ehx, ehy, Math.PI, Math.PI * 1.5, H * 0.22, 1.2)

  const [dhx, dhy] = p(splitX, H * 0.16)
  arc(segments, dhx, dhy, Math.PI * 0.5, Math.PI, H * 0.18, 1.2)

  const [bhx, bhy] = p(splitX + (W - splitX) * 0.35, splitY)
  arc(segments, bhx, bhy, 0, Math.PI * 0.5, (H - splitY) * 0.55, 1.2)

  const winA1 = p(splitX + (W - splitX) * 0.55, 0)
  const winA2 = p(splitX + (W - splitX) * 0.85, 0)
  seg(segments, winA1[0], winA1[1] - 3 * scale, winA1[0], winA1[1] + 3 * scale, 1)
  seg(segments, winA2[0], winA2[1] - 3 * scale, winA2[0], winA2[1] + 3 * scale, 1)
  seg(segments, winA1[0], winA1[1], winA2[0], winA2[1], 1)

  const winB1 = p(0, H * 0.12)
  const winB2 = p(0, H * 0.3)
  seg(segments, winB1[0] - 3 * scale, winB1[1], winB1[0] + 3 * scale, winB1[1], 1)
  seg(segments, winB2[0] - 3 * scale, winB2[1], winB2[0] + 3 * scale, winB2[1], 1)
  seg(segments, winB1[0], winB1[1], winB2[0], winB2[1], 1)

  const bed = { x: splitX + (W - splitX) * 0.14, y: 6 * scale, w: (W - splitX) * 0.72, h: splitY * 0.42 }
  seg(segments, ...p(bed.x, bed.y), ...p(bed.x + bed.w, bed.y), 1)
  seg(segments, ...p(bed.x + bed.w, bed.y), ...p(bed.x + bed.w, bed.y + bed.h), 1)
  seg(segments, ...p(bed.x + bed.w, bed.y + bed.h), ...p(bed.x, bed.y + bed.h), 1)
  seg(segments, ...p(bed.x, bed.y + bed.h), ...p(bed.x, bed.y), 1)
  seg(segments, ...p(bed.x, bed.y + bed.h * 0.3), ...p(bed.x + bed.w, bed.y + bed.h * 0.3), 0.8)

  const sofaX = 12 * scale
  const sofaY = H - 34 * scale
  seg(segments, ...p(sofaX, sofaY), ...p(sofaX + 60 * scale, sofaY), 1)
  seg(segments, ...p(sofaX + 60 * scale, sofaY), ...p(sofaX + 60 * scale, sofaY + 22 * scale), 1)
  seg(segments, ...p(sofaX + 60 * scale, sofaY + 22 * scale), ...p(sofaX, sofaY + 22 * scale), 1)
  seg(segments, ...p(sofaX, sofaY + 22 * scale), ...p(sofaX, sofaY), 1)

  const wcx = splitX + (W - splitX) * 0.68
  const wcy = splitY + (H - splitY) * 0.3
  const r = (H - splitY) * 0.16
  const steps = 10
  let prevX = wcx + r
  let prevY = wcy
  for (let i = 1; i <= steps; i++) {
    const a = (Math.PI * 2 * i) / steps
    const px = wcx + Math.cos(a) * r
    const py = wcy + Math.sin(a) * r
    seg(segments, prevX, prevY, px, py, 0.9)
    prevX = px
    prevY = py
  }

  labels.push({ x: ox + W * 0.26, y: oy + H * 0.72, text: 'SALA', size: 9 * scale, align: 'center' })
  labels.push({ x: ox + splitX + (W - splitX) * 0.4, y: oy + splitY * 0.85, text: 'QUARTO', size: 9 * scale, align: 'center' })
  labels.push({ x: ox + splitX + (W - splitX) * 0.5, y: oy + splitY + (H - splitY) * 0.85, text: 'WC', size: 9 * scale, align: 'center' })

  const nx = ox + W + 26 * scale
  const ny = oy - 4 * scale
  seg(segments, nx, ny + 14 * scale, nx, ny - 10 * scale, 1)
  seg(segments, nx, ny - 10 * scale, nx - 4 * scale, ny - 2 * scale, 1)
  seg(segments, nx, ny - 10 * scale, nx + 4 * scale, ny - 2 * scale, 1)
  labels.push({ x: nx, y: ny + 22 * scale, text: 'N', size: 9 * scale, align: 'center' })

  return { segments, labels, w: W, h: H }
}

function spawnPlan(canvasW: number, canvasH: number, now: number): Plan {
  const scale = 0.85 + Math.random() * 0.35
  const built = buildPlan(0, 0, scale)
  const marginX = built.w * 0.65 + 40
  const marginY = built.h * 0.4 + 40
  const ox = marginX + Math.random() * Math.max(canvasW - marginX * 1.6, 1)
  const oy = marginY + Math.random() * Math.max(canvasH - marginY * 1.8, 1)

  const plan = buildPlan(ox, oy, scale)
  const totalLen = plan.segments.reduce((sum, s) => sum + s.len, 0)

  return {
    segments: plan.segments,
    totalLen,
    labels: plan.labels,
    stampX: ox + plan.w * 0.86,
    stampY: oy + plan.h * 1.14,
    stampRotation: (Math.random() - 0.5) * 0.4,
    birth: now,
    cycleDuration: 10500 + Math.random() * 2500,
  }
}

function drawStampMark(ctx: CanvasRenderingContext2D, x: number, y: number, scale: number, opacity: number, rotation: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.scale(scale, scale)
  ctx.strokeStyle = `rgba(${GREEN},${opacity})`
  ctx.lineWidth = 2.2
  ctx.beginPath()
  ctx.arc(0, 0, 20, 0, Math.PI * 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(-9, 0)
  ctx.lineTo(-2, 7)
  ctx.lineTo(10, -8)
  ctx.stroke()
  ctx.font = '7px system-ui, sans-serif'
  ctx.fillStyle = `rgba(${GREEN},${opacity})`
  ctx.textAlign = 'center'
  ctx.fillText('APROVADO', 0, 14)
  ctx.restore()
}

function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const step = 42
  ctx.strokeStyle = `rgba(${BLUE},0.05)`
  ctx.lineWidth = 1
  ctx.beginPath()
  for (let x = 0; x <= w; x += step) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, h)
  }
  for (let y = 0; y <= h; y += step) {
    ctx.moveTo(0, y)
    ctx.lineTo(w, y)
  }
  ctx.stroke()
}

export function BlueprintBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let plans: Plan[] = []
    const MAX_CONCURRENT = 2

    const resize = () => {
      canvas.width = canvas.parentElement?.offsetWidth ?? window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight ?? window.innerHeight
    }

    const init = () => {
      resize()
      plans = []
      const now = performance.now()
      for (let i = 0; i < MAX_CONCURRENT; i++) {
        const plan = spawnPlan(canvas.width, canvas.height, now)
        plan.birth = now - Math.random() * plan.cycleDuration
        plans.push(plan)
      }
    }

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid(ctx, canvas.width, canvas.height)

      for (let i = 0; i < plans.length; i++) {
        const plan = plans[i]
        const age = now - plan.birth
        const t = age / plan.cycleDuration

        if (t >= 1) {
          plans[i] = spawnPlan(canvas.width, canvas.height, now)
          continue
        }

        const drawPhaseEnd = 0.5
        const stampStart = 0.52
        const stampPeakEnd = 0.62
        const labelFadeEnd = 0.68
        const fadeStart = 0.85

        let lineOpacity = 1
        let drawFraction = 1
        if (t < drawPhaseEnd) {
          drawFraction = t / drawPhaseEnd
          lineOpacity = 0.3 + 0.7 * drawFraction
        } else if (t >= fadeStart) {
          const fadeT = (t - fadeStart) / (1 - fadeStart)
          lineOpacity = 1 - fadeT
        }

        const drawnLen = plan.totalLen * drawFraction
        let acc = 0
        for (const s of plan.segments) {
          if (acc >= drawnLen) break
          ctx.strokeStyle = `rgba(${BLUE},${(0.4 * lineOpacity * (s.weight / 2.2 + 0.3)).toFixed(3)})`
          ctx.lineWidth = s.weight
          ctx.lineCap = 'round'
          ctx.beginPath()
          if (acc + s.len <= drawnLen) {
            ctx.moveTo(s.x1, s.y1)
            ctx.lineTo(s.x2, s.y2)
          } else {
            const segT = (drawnLen - acc) / s.len
            const ex = s.x1 + (s.x2 - s.x1) * segT
            const ey = s.y1 + (s.y2 - s.y1) * segT
            ctx.moveTo(s.x1, s.y1)
            ctx.lineTo(ex, ey)
          }
          ctx.stroke()
          acc += s.len
        }

        if (t >= drawPhaseEnd) {
          const labelT = Math.min((t - drawPhaseEnd) / (labelFadeEnd - drawPhaseEnd), 1)
          let labelOpacity = labelT
          if (t >= fadeStart) labelOpacity = Math.max(0, 1 - (t - fadeStart) / (1 - fadeStart))
          ctx.fillStyle = `rgba(${BLUE},${(0.5 * labelOpacity).toFixed(3)})`
          for (const label of plan.labels) {
            ctx.font = `${label.size}px system-ui, sans-serif`
            ctx.textAlign = label.align
            ctx.fillText(label.text, label.x, label.y)
          }
        }

        if (t >= stampStart) {
          const stampT = Math.min((t - stampStart) / (stampPeakEnd - stampStart), 1)
          const scale = stampT < 1 ? 0.6 + 0.5 * Math.sin(stampT * Math.PI * 0.9) : 1
          let stampOpacity = t < fadeStart ? 0.75 : Math.max(0, 0.75 * (1 - (t - fadeStart) / (1 - fadeStart)))
          drawStampMark(ctx, plan.stampX, plan.stampY, Math.max(scale, 0.05), stampOpacity, plan.stampRotation)
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    init()
    animationId = requestAnimationFrame(draw)

    window.addEventListener('resize', init)
    return () => {
      window.removeEventListener('resize', init)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
