"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, CheckCircle2, Clock, Users, Trophy } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ApplicationForm } from "@/components/application-form"

export default function SoftwareEngineeringPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ApplicationForm 
        open={showApplicationForm} 
        onOpenChange={setShowApplicationForm}
        defaultCourse="software-engineering"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="font-semibold">Software Engineering</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Master Full-Stack Development
              </h1>
              <p className="text-xl text-muted-foreground">
                Become a professional software engineer through our comprehensive
                program that combines modern technologies with Christian values.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => setShowApplicationForm(true)}>Apply Now</Button>
                <Button size="lg" variant="outline">
                  Download Curriculum
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Card className="bg-background/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">24 weeks, full-time or part-time options</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Class Size</p>
                        <p className="text-sm text-muted-foreground">Maximum 20 students per cohort</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Trophy className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Certification</p>
                        <p className="text-sm text-muted-foreground">Industry-recognized certification upon completion</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Program Overview</h2>
              <p className="text-lg text-muted-foreground">
                Our software engineering program is designed to transform beginners
                into professional developers through hands-on projects, mentorship,
                and a strong foundation in both technical skills and Christian values.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Full-Stack Development</h3>
                    <p className="text-muted-foreground">
                      Master both front-end and back-end development using modern frameworks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Industry Projects</h3>
                    <p className="text-muted-foreground">
                      Build real-world applications with guidance from experienced mentors
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Career Support</h3>
                    <p className="text-muted-foreground">
                      Resume building, interview preparation, and job placement assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Front-end Development</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>HTML5, CSS3, JavaScript</li>
                      <li>React.js & Next.js</li>
                      <li>Responsive Design</li>
                      <li>State Management</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Back-end Development</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Node.js & Express</li>
                      <li>Database Design</li>
                      <li>API Development</li>
                      <li>Authentication & Security</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">DevOps & Deployment</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Git Version Control</li>
                      <li>CI/CD Pipelines</li>
                      <li>Cloud Deployment</li>
                      <li>Monitoring & Logging</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Professional Skills</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Agile Methodology</li>
                      <li>Team Collaboration</li>
                      <li>Code Review</li>
                      <li>Technical Writing</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Submit Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out our online application form and share your background
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Technical Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete a basic coding challenge to assess your current level
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Interview</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet with our team to discuss your goals and expectations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Button size="lg" onClick={() => setShowApplicationForm(true)}>
              Start Your Application
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}