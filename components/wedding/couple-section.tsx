"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { weddingConfig } from "@/config/wedding"
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap"

export function CoupleSection() {
  const { profiles, couple } = weddingConfig
  const containerRef = useRef<HTMLDivElement>(null)
  const groomImageRef = useRef<HTMLDivElement>(null)
  const brideImageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Parallax effect for Groom Image
    if (groomImageRef.current) {
      gsap.to(groomImageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: groomImageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    // Parallax effect for Bride Image
    if (brideImageRef.current) {
      gsap.to(brideImageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: brideImageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Meet the Couple
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground">
            Our Love Story
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[3/4] relative overflow-hidden">
                <div ref={groomImageRef} className="absolute inset-0 -top-[20%] h-[140%]">
                  <Image
                    src={profiles.groom.image}
                    alt={profiles.groom.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-card pointer-events-none">
                  <p className="text-sm tracking-wider uppercase opacity-80 mb-1">
                    {profiles.groom.role}
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl">
                    {profiles.groom.fullName}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {profiles.groom.description}
                </p>
                <p className="text-xs text-primary tracking-wider">
                  {profiles.groom.parents}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[3/4] relative overflow-hidden">
                <div ref={brideImageRef} className="absolute inset-0 -top-[20%] h-[140%]">
                  <Image
                    src={profiles.bride.image}
                    alt={profiles.bride.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-card pointer-events-none">
                  <p className="text-sm tracking-wider uppercase opacity-80 mb-1">
                    {profiles.bride.role}
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl">
                    {profiles.bride.fullName}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {profiles.bride.description}
                </p>
                <p className="text-xs text-primary tracking-wider">
                  {profiles.bride.parents}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary text-2xl">♥</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="text-muted-foreground leading-relaxed italic">
            {couple.story}
          </p>
          {couple.hashtag && (
            <p className="mt-6 text-primary font-medium tracking-wider">
              {couple.hashtag}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

