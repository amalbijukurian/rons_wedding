"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

interface Particle {
  x: number
  y: number
  size: number
  baseX: number
  baseY: number
  density: number
  color: string
  rotation: number
  rotationSpeed: number
}

export function HeartParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0, radius: 200 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    const particleCount = 25 // Fewer, more deliberate particles
    const colors = [
      "hsla(330, 100%, 70%, 0.3)", // Pink
      "hsla(350, 100%, 88%, 0.3)", // Light Pink
      "hsla(0, 100%, 75%, 0.3)",   // Soft Red
      "hsla(340, 60%, 80%, 0.3)"    // Mauve
    ]

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 3 + 2 // Increased size range
        particles.push({
          x,
          y,
          size,
          baseX: x,
          baseY: y,
          density: Math.random() * 20 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
        })
      }
    }

    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      // Slightly larger drawing multiplier
      const w = size * 10
      const h = size * 10
      ctx.moveTo(0, h / 4)
      ctx.bezierCurveTo(0, 0, -w / 2, 0, -w / 2, h / 4)
      ctx.bezierCurveTo(-w / 2, h / 2, 0, h * 0.75, 0, h)
      ctx.bezierCurveTo(0, h * 0.75, w / 2, h / 2, w / 2, h / 4)
      ctx.bezierCurveTo(w / 2, 0, 0, 0, 0, h / 4)
      ctx.fill()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse interaction
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < mouse.current.radius) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (mouse.current.radius - distance) / mouse.current.radius
          const directionX = forceDirectionX * force * p.density
          const directionY = forceDirectionY * force * p.density
          
          p.x -= directionX
          p.y -= directionY
        } else {
          // Return to base position
          if (p.x !== p.baseX) {
            p.x += (p.baseX - p.x) * 0.05
          }
          if (p.y !== p.baseY) {
            p.y += (p.baseY - p.y) * 0.05
          }
        }

        // Floating movement and world-space updates
        p.baseY -= 0.3
        p.y -= 0.3
        if (p.baseY < -50) {
          p.baseY = canvas.height + 50
          p.y = canvas.height + 50
          p.x = p.baseX = Math.random() * canvas.width
        }

        p.rotation += p.rotationSpeed

        ctx.fillStyle = p.color
        drawHeart(ctx, p.x, p.y, p.size, p.rotation)
      }
      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[50]"
      style={{ mixBlendMode: "multiply" }}
    />
  )
}
