"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Gift, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our mission to empower Christian tech professionals and create
              positive impact through technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#opportunities">View Opportunities</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section id="opportunities" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Become a Mentor</h3>
                    <p className="text-muted-foreground mb-4">
                      Share your expertise and guide the next generation of Christian
                      tech professionals. Mentors commit to regular sessions with
                      students and participate in code reviews.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>One-on-one mentoring sessions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Technical guidance and code reviews</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Career advice and spiritual support</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-auto" asChild>
                    <Link href="/mentorship">Apply as Mentor</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Support Our Mission</h3>
                    <p className="text-muted-foreground mb-4">
                      Help us provide quality tech education to more students through
                      donations and sponsorships. Your support enables scholarships
                      and program improvements.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Student scholarships</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Equipment and resources</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Program development</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-auto" asChild>
                    <Link href="/donate">Make a Donation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Corporate Partnership</h3>
                    <p className="text-muted-foreground mb-4">
                      Partner with us as a company to support our mission and connect
                      with talented Christian tech professionals.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Hiring partnerships</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Sponsored programs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Event sponsorship</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-auto" asChild>
                    <Link href="/partner">Become a Partner</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
                    <p className="text-muted-foreground mb-4">
                      Share your time and talents to support our programs and events.
                      We need volunteers in various capacities.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Event organization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Content creation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span>Community support</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-auto" asChild>
                    <Link href="/volunteer">Volunteer With Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-muted-foreground">Active Mentors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-muted-foreground">Partner Companies</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}