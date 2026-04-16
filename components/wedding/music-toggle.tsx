"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { weddingConfig } from "@/config/wedding"

export function MusicToggle() {
  const { music } = weddingConfig
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (music.enabled && music.src) {
      audioRef.current = new Audio(music.src)
      audioRef.current.loop = true
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [music.enabled, music.src])

  const toggleMusic = () => {
    if (!audioRef.current) return

    setHasInteracted(true)

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay failed, likely due to browser restrictions
      })
    }
    setIsPlaying(!isPlaying)
  }

  // Don't render if music is not enabled or no source provided
  if (!music.enabled || !music.src) return null

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.3 }}
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow group"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="playing"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="relative"
          >
            <Volume2 className="w-5 h-5 text-primary" />
            {/* Sound waves animation */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-primary"
            />
          </motion.div>
        ) : (
          <motion.div
            key="muted"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint tooltip for first interaction */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="absolute right-full mr-3 whitespace-nowrap bg-foreground text-card text-xs px-3 py-1.5 rounded-full"
        >
          Play music
        </motion.div>
      )}
    </motion.button>
  )
}
