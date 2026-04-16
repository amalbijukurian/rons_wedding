"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, Globe } from "lucide-react"
import { weddingConfig } from "@/config/wedding"

export function Footer() {
  const { couple, date, social } = weddingConfig

  const socialLinks = [
    { url: social.instagram, icon: Instagram, label: "Instagram" },
    { url: social.facebook, icon: Facebook, label: "Facebook" },
    { url: social.twitter, icon: Twitter, label: "Twitter" },
    { url: social.website, icon: Globe, label: "Website" },
  ].filter((link) => link.url)

  return (
    <footer className="py-16 px-6 bg-foreground text-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl mb-4">
            {couple.groomName} & {couple.brideName}
          </h2>
          <p className="text-card/70 tracking-wider">
            {date.month} {date.day}, {date.year}
          </p>

          {couple.hashtag && (
            <p className="mt-6 text-lg tracking-wider text-primary-foreground/80">
              {couple.hashtag}
            </p>
          )}

          {socialLinks.length > 0 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              {socialLinks.map(({ url, icon: Icon, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-card/10">
            <p className="text-sm text-card/50">
              Made with ♥ for our special day
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
