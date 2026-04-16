"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { weddingConfig } from "@/config/wedding"
import { Button } from "@/components/ui/button"

export function EventsSection() {
  const { events, date } = weddingConfig

  const addToCalendar = (event: (typeof events)[0]) => {
    const startDate = new Date(`${event.date} ${event.time.split(" - ")[0]}`)
    const endDate = new Date(`${event.date} ${event.time.split(" - ")[1]}`)
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.address)}`
    
    window.open(googleCalendarUrl, "_blank")
  }

  const formatGoogleDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, "").slice(0, 15) + "Z"
  }

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Save the Date
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground">
            Wedding Events
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-px" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-6 md:mt-8 ring-4 ring-background" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <EventIcon eventId={event.id} />
                      <h3 className="font-display text-xl sm:text-2xl text-foreground">
                        {event.title}
                      </h3>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">{event.venue}</p>
                          <p className="text-xs">{event.address}</p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground">
                      {event.description}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => addToCalendar(event)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EventIcon({ eventId }: { eventId: string }) {
  const iconClass = "w-5 h-5 text-primary"
  
  switch (eventId) {
    case "engagement":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    case "wedding":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="7" r="4" />
          <circle cx="15" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
        </svg>
      )
    case "reception":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 21V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v13" />
          <path d="M4 21h16" />
          <path d="M10 12h4" />
          <path d="M12 3v3" />
        </svg>
      )
    default:
      return <Calendar className={iconClass} />
  }
}
