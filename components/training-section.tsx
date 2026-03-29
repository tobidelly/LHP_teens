"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code2, Brain, Cloud, Github, Database, Clock, Users, Trophy } from "lucide-react"
import Link from "next/link"

export function TrainingSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">World-Class Tech Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training programs designed to equip you with industry-relevant skills
            while integrating Christian principles.
          </p>
        </div>

        <Tabs defaultValue="courses" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="courses">Course Catalog</TabsTrigger>
            <TabsTrigger value="structure">Learning Format</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CourseCard
                icon={Code2}
                title="Software Engineering"
                description="Full-stack development with modern technologies including React, Node.js, and cloud platforms."
                duration="24 weeks"
                level="Beginner to Advanced"
                href="/programs/software-engineering"
              />
              <CourseCard
                icon={Brain}
                title="AI & Machine Learning"
                description="Deep learning, neural networks, and practical AI applications with Python and TensorFlow."
                duration="16 weeks"
                level="Intermediate"
                href="/programs/ai-ml"
              />
              <CourseCard
                icon={Cloud}
                title="Cloud & DevOps"
                description="Master AWS, Azure, Docker, and modern deployment practices."
                duration="12 weeks"
                level="Intermediate"
                href="/programs/cloud-devops"
              />
              <CourseCard
                icon={Database}
                title="Data Science"
                description="Data analysis, visualization, and predictive modeling using industry tools."
                duration="16 weeks"
                level="Beginner to Intermediate"
                href="/programs/data-science"
              />
            </div>
          </TabsContent>

          <TabsContent value="structure" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Flexible Learning Options</h3>
                      <p className="text-muted-foreground mb-3">
                        Choose between self-paced learning and live cohort-based classes to fit your schedule.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Self-paced</Badge>
                        <Badge variant="secondary">Live Classes</Badge>
                        <Badge variant="secondary">Hybrid</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Mentorship & Support</h3>
                      <p className="text-muted-foreground mb-3">
                        Regular 1-on-1 sessions with industry mentors and group coaching calls.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">1-on-1 Mentoring</Badge>
                        <Badge variant="secondary">Group Sessions</Badge>
                        <Badge variant="secondary">Career Guidance</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Certification & Projects</h3>
                      <p className="text-muted-foreground mb-3">
                        Industry-recognized certifications and hands-on projects for your portfolio.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Professional Certificate</Badge>
                        <Badge variant="secondary">Portfolio Projects</Badge>
                        <Badge variant="secondary">Industry Partners</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function CourseCard({
  icon: Icon,
  title,
  description,
  duration,
  level,
  href,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  level: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <Card className="h-full transition-colors hover:border-primary">
        <CardContent className="pt-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
            <div className="flex gap-2">
              <Badge variant="outline">{duration}</Badge>
              <Badge variant="outline">{level}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}