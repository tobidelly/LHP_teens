"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, CheckCircle2, Clock, Users, Trophy } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ApplicationForm } from "@/components/application-form"

export default function AiMlPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ApplicationForm 
        open={showApplicationForm} 
        onOpenChange={setShowApplicationForm}
        defaultCourse="ai-ml"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Brain className="h-5 w-5 text-primary" />
                <span className="font-semibold">AI & Machine Learning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Master Artificial Intelligence
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn to build intelligent systems and machine learning models
                while maintaining ethical principles and Christian values.
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
                        <p className="text-sm text-muted-foreground">16 weeks, flexible schedule</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Class Size</p>
                        <p className="text-sm text-muted-foreground">Limited to 15 students per cohort</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Trophy className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Certification</p>
                        <p className="text-sm text-muted-foreground">Professional AI/ML certification included</p>
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
                Our AI & Machine Learning program combines cutting-edge technical
                training with ethical considerations and Christian principles to
                develop responsible AI practitioners.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Comprehensive AI Foundation</h3>
                    <p className="text-muted-foreground">
                      Learn the mathematics, statistics, and programming fundamentals of AI
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Practical Applications</h3>
                    <p className="text-muted-foreground">
                      Build real-world AI systems and machine learning models
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Ethical AI Development</h3>
                    <p className="text-muted-foreground">
                      Understand the ethical implications and responsible development of AI
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
                    <h3 className="font-semibold mb-2">Machine Learning</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Supervised Learning</li>
                      <li>Unsupervised Learning</li>
                      <li>Neural Networks</li>
                      <li>Deep Learning</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">AI Applications</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Computer Vision</li>
                      <li>Natural Language Processing</li>
                      <li>Reinforcement Learning</li>
                      <li>Generative AI</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Tools & Frameworks</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Python & NumPy</li>
                      <li>TensorFlow & PyTorch</li>
                      <li>Scikit-learn</li>
                      <li>Cloud AI Services</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Ethics & Deployment</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>AI Ethics & Bias</li>
                      <li>Model Deployment</li>
                      <li>MLOps</li>
                      <li>Responsible AI</li>
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
                    Complete our online application with your background in programming
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
                    Complete a Python programming challenge and math assessment
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
                    Discuss your goals and ethical approach to AI development
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