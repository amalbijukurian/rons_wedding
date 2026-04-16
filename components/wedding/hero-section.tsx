"use client"

import { motion } from "framer-motion"
import { weddingConfig } from "@/config/wedding"
import { Countdown } from "./countdown"

export function HeroSection() {
  const { couple, date } = weddingConfig

  const scrollToContent = () => {
    const element = document.getElementById("invitation")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Decorative floral elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
        >
          <FloralCorner className="rotate-0" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2"
        >
          <FloralCorner className="rotate-90" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute bottom-0 left-0 w-64 h-64 -translate-x-1/2 translate-y-1/2"
        >
          <FloralCorner className="-rotate-90" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2"
        >
          <FloralCorner className="rotate-180" />
        </motion.div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-6"
        >
          {couple.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-wide text-foreground">
            <span className="block">{couple.groomName}</span>
            <span className="text-3xl sm:text-4xl md:text-5xl text-primary my-2 sm:my-4 block">&amp;</span>
            <span className="block">{couple.brideName}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <div className="inline-flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <p className="text-lg sm:text-xl tracking-[0.2em] text-muted-foreground font-light">
              {date.displayFormat}
            </p>
            <span className="h-px w-12 bg-primary/40" />
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Counting down to our big day
          </p>
          <Countdown />
        </motion.div>


      </div>
    </section>
  )
}

function FloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full text-primary ${className}`}
    >
      <path
        d="M20 180C20 180 40 140 80 120C120 100 160 80 180 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M30 180C30 180 50 150 85 135C120 120 150 100 170 50"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="80" cy="120" r="8" fill="currentColor" fillOpacity="0.3" />
      <circle cx="120" cy="80" r="6" fill="currentColor" fillOpacity="0.3" />
      <circle cx="150" cy="50" r="4" fill="currentColor" fillOpacity="0.3" />
      <path
        d="M75 125C75 125 70 115 80 110C90 105 95 115 90 120C85 125 75 125 75 125Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M115 85C115 85 110 75 120 70C130 65 135 75 130 80C125 85 115 85 115 85Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  )
}
