"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Send, Check } from "lucide-react"
import { weddingConfig } from "@/config/wedding"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function RSVPSection() {
  const { rsvp, couple } = weddingConfig
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!rsvp.enabled) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to your backend
    console.log("RSVP submitted:", formState)
    setSubmitted(true)
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Will You Join Us?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground">
            RSVP
          </h2>
          <p className="mt-4 text-muted-foreground">
            Please respond by {rsvp.deadline}
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl p-8 text-center shadow-lg"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">
              Thank You!
            </h3>
            <p className="text-muted-foreground">
              We&apos;ve received your RSVP. We can&apos;t wait to celebrate with you!
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Enter your email"
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Will you be attending?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formState.attending === "yes"}
                      onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-sm text-foreground">Joyfully Accept</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formState.attending === "no"}
                      onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-sm text-foreground">Regretfully Decline</span>
                  </label>
                </div>
              </div>

              {formState.attending === "yes" && (
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    value={formState.guests}
                    onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message for the Couple (Optional)
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={`Share your wishes for ${couple.groomName} & ${couple.brideName}...`}
                  rows={3}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Send className="w-4 h-4 mr-2" />
              Send RSVP
            </Button>
          </motion.form>
        )}

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center space-y-3"
        >
          <p className="text-sm text-muted-foreground">
            Questions? Reach out to us:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            {rsvp.contactEmail && (
              <a
                href={`mailto:${rsvp.contactEmail}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                {rsvp.contactEmail}
              </a>
            )}
            {rsvp.contactPhone && (
              <a
                href={`tel:${rsvp.contactPhone}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="w-4 h-4" />
                {rsvp.contactPhone}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
