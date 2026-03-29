"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, CheckCircle2, Clock, Users, Trophy } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ApplicationForm } from "@/components/application-form"

export default function CloudDevOpsPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ApplicationForm 
        open={showApplicationForm} 
        onOpenChange={setShowApplicationForm}
        defaultCourse="cloud-devops"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Cloud className="h-5 w-5 text-primary" />
                <span className="font-semibold">Cloud & DevOps</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Master Cloud Computing & DevOps
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn to build, deploy, and manage scalable applications in the cloud
                while maintaining Christian principles of excellence and stewardship.
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
                        <p className="text-sm text-muted-foreground">12 weeks, flexible schedule</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Class Size</p>
                        <p className="text-sm text-muted-foreground">Maximum 15 students per cohort</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Trophy className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Certification</p>
                        <p className="text-sm text-muted-foreground">AWS, Azure, and DevOps certifications included</p>
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
                Our Cloud & DevOps program equips you with the skills to design,
                implement, and manage cloud infrastructure while fostering a mindset
                of excellence and continuous improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Cloud Platforms</h3>
                    <p className="text-muted-foreground">
                      Master AWS, Azure, and modern cloud computing practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">DevOps Practices</h3>
                    <p className="text-muted-foreground">
                      Learn automation, CI/CD, and infrastructure as code
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Security & Compliance</h3>
                    <p className="text-muted-foreground">
                      Implement secure cloud architectures and best practices
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
                    <h3 className="font-semibold mb-2">Cloud Platforms</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>AWS Services</li>
                      <li>Azure Platform</li>
                      <li>Cloud Architecture</li>
                      <li>Serverless Computing</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">DevOps Practices</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>CI/CD Pipelines</li>
                      <li>Infrastructure as Code</li>
                      <li>Container Orchestration</li>
                      <li>Monitoring & Logging</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Docker & Kubernetes</li>
                      <li>Terraform & Ansible</li>
                      <li>Jenkins & GitLab</li>
                      <li>Prometheus & Grafana</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Security & Best Practices</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Cloud Security</li>
                      <li>Compliance Standards</li>
                      <li>Disaster Recovery</li>
                      <li>Cost Optimization</li>
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
                    Share your background and experience with cloud technologies
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
                    Complete a hands-on cloud infrastructure challenge
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
                    Discuss your DevOps experience and career goals
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