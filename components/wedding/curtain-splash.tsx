"use client"

import { useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { weddingConfig } from "@/config/wedding"

interface CurtainSplashProps {
  onOpen: () => void
}

export function CurtainSplash({ onOpen }: CurtainSplashProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { couple, date } = weddingConfig

  // Hydration safety
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleOpen = useCallback(() => {
    setIsOpening(true)
    // Wait for curtain animation to complete before triggering onOpen
    setTimeout(() => {
      onOpen()
    }, 1200)
  }, [onOpen])

  if (!isMounted) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background with subtle pattern */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#f8f5f0] via-[#f5f0e8] to-[#ede8df]"
        animate={{ opacity: isOpening ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ opacity: isOpening ? 0 : 0.1 }}
      >
        <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 Q300,80 600,40 T1200,60 V0 H0 Z" fill="currentColor" className="text-primary" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-32 rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 Q300,80 600,40 T1200,60 V0 H0 Z" fill="currentColor" className="text-primary" />
        </svg>
      </motion.div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isOpening ? 0 : 1, 
          y: isOpening ? -20 : 0,
          scale: isOpening ? 0.95 : 1
        }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex flex-col items-center px-8 text-center"
      >
        {/* Ornamental top */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <svg width="80" height="40" viewBox="0 0 80 40" className="text-primary/60">
            <path
              d="M40 0 C20 0 10 15 10 20 C10 30 20 35 40 35 C60 35 70 30 70 20 C70 15 60 0 40 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="40" cy="20" r="3" fill="currentColor" />
            <path d="M20 20 Q30 10 40 20 Q50 30 60 20" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Wedding invitation text */}
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display">
          Wedding Invitation
        </p>

        {/* Couple names */}
        <div className="mb-6 px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-foreground leading-tight flex flex-col items-center">
            <span>{couple.groomName}</span>
            <span className="text-xl sm:text-3xl font-display text-primary my-3">&amp;</span>
            <span>{couple.brideName}</span>
          </h1>
        </div>

        {/* Date */}
        <p className="text-lg sm:text-xl font-display text-muted-foreground mb-10 tracking-wide">
          {date.month} {date.day}, {date.year}
        </p>

        {/* Open Invitation Button */}
        {!isOpening && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            onClick={handleOpen}
            className="group relative px-10 py-4 overflow-hidden"
          >
            <span className="absolute inset-0 border-2 border-primary/40 rounded-sm" />
            <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground font-display">
              <span>Open Invitation</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </span>
          </motion.button>
        )}

        {/* Ornamental bottom */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10"
        >
          <svg width="120" height="20" viewBox="0 0 120 20" className="text-primary/40">
            <path d="M0 10 Q30 0 60 10 Q90 20 120 10" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="60" cy="10" r="2" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Left Curtain */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full origin-left z-10"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: isOpening ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative w-full h-full bg-gradient-to-r from-[#d4c4b0] via-[#c9b89e] to-[#bfae94] shadow-2xl">
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"
                style={{ left: `${(i + 1) * 12}%` }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/10" />
          <svg
            className="absolute top-0 right-0 h-full w-8 text-black/10"
            preserveAspectRatio="none"
            viewBox="0 0 20 100"
          >
            <path d="M20 0 Q0 25 10 50 Q20 75 0 100 L20 100 L20 0 Z" fill="currentColor" />
          </svg>
        </div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full origin-right z-10"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: isOpening ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative w-full h-full bg-gradient-to-l from-[#d4c4b0] via-[#c9b89e] to-[#bfae94] shadow-2xl">
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"
                style={{ right: `${(i + 1) * 12}%` }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-white/10 via-transparent to-black/10" />
          <svg
            className="absolute top-0 left-0 h-full w-8 text-black/10"
            preserveAspectRatio="none"
            viewBox="0 0 20 100"
          >
            <path d="M0 0 Q20 25 10 50 Q0 75 20 100 L0 100 L0 0 Z" fill="currentColor" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  )
}
