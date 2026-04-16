"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CurtainSplash } from "./curtain-splash"
import { HeroSection } from "./hero-section"
import { InvitationSection } from "./invitation-section"
import { CoupleSection } from "./couple-section"
import { EventsSection } from "./events-section"
import { LocationSection } from "./location-section"
import { GallerySection } from "./gallery-section"
import { RSVPSection } from "./rsvp-section"
import { Footer } from "./footer"
import { MusicToggle } from "./music-toggle"
import { HeartParticles } from "./heart-particles"

export function WeddingWrapper() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false)

  // Scroll to top on page load and when invitation opens
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleOpen = () => {
    window.scrollTo(0, 0)
    setIsInvitationOpened(true)
  }

  return (
    <>
      <HeartParticles />
      {/* Splash Screen with Curtain */}
      <AnimatePresence mode="wait">
        {!isInvitationOpened && (
          <CurtainSplash key="splash" onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {/* Main Wedding Content */}
      <motion.main
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInvitationOpened ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <HeroSection />
        <InvitationSection />
        <CoupleSection />
        <EventsSection />
        <LocationSection />
        <GallerySection />
        <RSVPSection />
        <Footer />
        <MusicToggle />
      </motion.main>
    </>
  )
}
