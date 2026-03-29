"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Events & Hackathons
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our tech events and competitions to showcase your skills,
              network with fellow innovators, and make a positive impact.
            </p>
            <Button size="lg" asChild>
              <Link href="#upcoming">View Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Christian Tech Summit 2025"
              date="May 15-16, 2025"
              location="Redemption City of God"
              type="Conference"
              attendees="500+"
              description="Join industry leaders and innovators for two days of inspiring talks, workshops, and networking opportunities."
            />
            <EventCard
              title="Code for Christ Hackathon"
              date="June 1-2, 2025"
              location="Virtual Event"
              type="Hackathon"
              attendees="200+"
              description="48-hour hackathon focused on building technology solutions for Christian organizations and ministries."
            />
            <EventCard
              title="AI Ethics Workshop"
              date="June 15, 2025"
              location="Hybrid Event"
              type="Workshop"
              attendees="100+"
              description="Explore the intersection of artificial intelligence and Christian ethics in this hands-on workshop."
            />
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Tech Ministry Conference"
              date="March 10-11, 2025"
              location="Redemption City of God"
              type="Conference"
              attendees="300+"
              description="A gathering of tech professionals exploring ways to serve through technology."
              isPast
            />
            <EventCard
              title="Web3 for Good Hackathon"
              date="February 15-16, 2025"
              location="Virtual Event"
              type="Hackathon"
              attendees="150+"
              description="Building decentralized solutions for social impact and ministry."
              isPast
            />
            <EventCard
              title="Cloud Computing Workshop"
              date="January 20, 2025"
              location="Hybrid Event"
              type="Workshop"
              attendees="80+"
              description="Hands-on training in cloud technologies for ministry applications."
              isPast
            />
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Host an Event?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to organize tech events that combine innovation with
            Christian values. We provide support, resources, and our network.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function EventCard({
  title,
  date,
  location,
  type,
  attendees,
  description,
  isPast = false,
}: {
  title: string
  date: string
  location: string
  type: string
  attendees: string
  description: string
  isPast?: boolean
}) {
  return (
    <Card className={isPast ? "opacity-75" : ""}>
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <Badge variant={isPast ? "outline" : "default"} className="mb-2">
              {type}
            </Badge>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="mt-auto space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4" />
              <span>Expected Attendees: {attendees}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}