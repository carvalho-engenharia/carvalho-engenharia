'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulse: number
  pulseSpeed: number
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    const mouse = { x: -9999, y: -9999 }

    const PARTICLE_COUNT = 90
    const MAX_DISTANCE = 150
    const MOUSE_RADIUS = 120

    const resize = () => {
      canvas.width = canvas.parentElement?.offsetWidth ?? window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight ?? window.innerHeight
    }

    const createParticle = (x?: number, y?: number): Particle => ({
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    })

    const init = () => {
      resize()
      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle())
    }

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      for (let i = 0; i < 14; i++) {
        const angle = (i / 14) * Math.PI * 2
        const speed = Math.random() * 2.5 + 1
        const p = createParticle(cx, cy)
        p.vx = Math.cos(angle) * speed
        p.vy = Math.sin(angle) * speed
        p.radius = Math.random() * 2.5 + 1.5
        particles.push(p)
      }
      if (particles.length > PARTICLE_COUNT + 60) {
        particles.splice(0, particles.length - PARTICLE_COUNT)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.pulse += p.pulseSpeed
        const opacity = 0.5 + Math.sin(p.pulse) * 0.2

        const dxm = p.x - mouse.x
        const dym = p.y - mouse.y
        const dm = Math.sqrt(dxm * dxm + dym * dym)
        if (dm < MOUSE_RADIUS && dm > 0) {
          const force = (MOUSE_RADIUS - dm) / MOUSE_RADIUS
          p.x += (dxm / dm) * force * 1.8
          p.y += (dym / dm) * force * 1.8
        }

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) { p.x = 0; p.vx *= -1 }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1 }
        if (p.y < 0) { p.y = 0; p.vy *= -1 }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1 }

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5)
        grd.addColorStop(0, `rgba(0,170,255,${opacity})`)
        grd.addColorStop(1, `rgba(0,170,255,0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${opacity * 0.85})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.45
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,170,255,${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    init()
    draw()

    canvas.addEventListener('click', handleClick)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999 })
    window.addEventListener('resize', init)

    return () => {
      cancelAnimationFrame(animationId)
      canvas.removeEventListener('click', handleClick)
      canvas.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-crosshair"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}