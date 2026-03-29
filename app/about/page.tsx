"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, History, CheckCircle2, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Nehemiah Innovation Hub
            </h1>
            <p className="text-xl text-muted-foreground">
              Building a community of Christian tech professionals who create
              technology that glorifies God and serves humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-semibold">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold">
                Empowering Christians in Technology
              </h2>
              <p className="text-lg text-muted-foreground">
                We are dedicated to raising up a generation of tech professionals who
                combine technical excellence with strong Christian values. Our mission
                is to provide world-class education, mentorship, and opportunities
                for Christians to make a positive impact through technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Technical Excellence</h3>
                    <p className="text-muted-foreground">
                      Providing cutting-edge training in software development, AI,
                      and cloud computing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Spiritual Growth</h3>
                    <p className="text-muted-foreground">
                      Integrating biblical principles with professional development
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Community Impact</h3>
                    <p className="text-muted-foreground">
                      Creating technology solutions that serve the church and society
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <ValueCard
                icon={Award}
                title="Excellence"
                description="Pursuing the highest standards in everything we do"
              />
              <ValueCard
                icon={Heart}
                title="Service"
                description="Using our skills to serve God and others"
              />
              <ValueCard
                icon={Users}
                title="Community"
                description="Building strong relationships and support networks"
              />
              <ValueCard
                icon={Target}
                title="Innovation"
                description="Creating solutions that make a difference"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">Our Leadership</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings together expertise in technology,
              ministry, and education to guide our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Pastor David Olaniyan"
              role="Chairman"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300"
              description="Visionary leader with 20+ years of experience in ministry and technology"
            />
            <TeamMemberCard
              name="Dr. Sarah Johnson"
              role="Director of Education"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
              description="EdTech expert passionate about transformative education"
            />
            <TeamMemberCard
              name="Michael Chen"
              role="Technical Director"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
              description="Former Silicon Valley engineer dedicated to mentoring"
            />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <History className="h-5 w-5 text-primary" />
              <span className="font-semibold">Our Journey</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to a thriving tech community
            </p>
          </div>
          <div className="space-y-12">
            <TimelineItem
              year="2020"
              title="Foundation"
              description="Nehemiah Innovation Hub was established with a vision to empower Christians in technology"
            />
            <TimelineItem
              year="2021"
              title="First Cohort"
              description="Launched our first software engineering program with 20 students"
            />
            <TimelineItem
              year="2022"
              title="Expansion"
              description="Added AI/ML and Cloud Computing programs, grew to 100+ students"
            />
            <TimelineItem
              year="2023"
              title="Global Impact"
              description="Expanded to virtual programs, reaching students worldwide"
            />
            <TimelineItem
              year="2024"
              title="Industry Recognition"
              description="Recognized as a leading Christian tech education provider"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-primary/10 rounded-full mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function TeamMemberCard({
  name,
  role,
  image,
  description,
}: {
  name: string;
  role: string;
  image: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-primary mb-2">{role}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-bold text-primary">{year}</span>
        </div>
        <div className="w-0.5 h-full bg-border mt-2" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}