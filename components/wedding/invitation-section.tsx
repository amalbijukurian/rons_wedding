"use client"

import { motion } from "framer-motion"
import { weddingConfig } from "@/config/wedding"

export function InvitationSection() {
  const { invitation, couple, date } = weddingConfig

  return (
    <section id="invitation" className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative max-w-lg w-full"
      >
        {/* Card background with decorative border */}
        <div className="relative bg-card rounded-lg shadow-xl overflow-hidden">
          {/* Decorative top border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="p-8 sm:p-12">
            {/* Decorative ornament */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <Ornament />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center font-display text-2xl sm:text-3xl text-primary mb-8"
            >
              {invitation.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center space-y-6"
            >
              <p className="text-muted-foreground text-sm tracking-wider uppercase">
                Together with their families
              </p>

              <div className="space-y-2">
                <p className="font-display text-3xl sm:text-4xl text-foreground">
                  {couple.groomName}
                </p>
                <p className="text-2xl text-primary">&amp;</p>
                <p className="font-display text-3xl sm:text-4xl text-foreground">
                  {couple.brideName}
                </p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                request the pleasure of your company<br />
                at the celebration of their marriage
              </p>

              <div className="pt-4">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  On
                </p>
                <p className="font-display text-xl sm:text-2xl text-foreground">
                  {date.month} {date.day}, {date.year}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 pt-6 border-t border-border"
            >
              <p className="text-center text-sm text-muted-foreground italic">
                {invitation.footer}
              </p>
            </motion.div>

            {/* Decorative bottom ornament */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center mt-8"
            >
              <Ornament className="rotate-180" />
            </motion.div>
          </div>

          {/* Decorative bottom border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Subtle shadow beneath card */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/5 blur-2xl rounded-full" />
      </motion.div>
    </section>
  )
}

function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      width="120"
      height="24"
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary ${className}`}
    >
      <path
        d="M0 12H45"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        d="M75 12H120"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle cx="60" cy="12" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="60" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" />
      <path
        d="M52 12C52 12 56 8 60 8C64 8 68 12 68 12C68 12 64 16 60 16C56 16 52 12 52 12Z"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  )
}
