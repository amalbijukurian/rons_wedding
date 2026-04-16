"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { weddingConfig } from "@/config/wedding"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const { day, monthNumber, year } = weddingConfig.date
      const weddingDate = new Date(year, monthNumber - 1, day, 11, 0, 0) // Wedding at 11 AM
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-card/50 rounded-lg" />
            <div className="h-4 mt-2" />
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-card rounded-lg shadow-sm border border-border/50 flex items-center justify-center overflow-hidden">
              <motion.span
                key={unit.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-display text-2xl sm:text-3xl text-foreground"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
            </div>
            {/* Decorative shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg pointer-events-none" />
          </div>
          <span className="mt-2 text-xs sm:text-sm tracking-wider uppercase text-muted-foreground">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
