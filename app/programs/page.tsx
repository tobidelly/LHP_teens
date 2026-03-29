"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code2, Brain, Cloud, Database, Lightbulb, Trophy, Users } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Future with Our Programs
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive training programs that combine technical excellence with
              Christian values to prepare you for leadership in technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Programs */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Technical Programs</Badge>
            <h2 className="text-3xl font-bold mb-4">Core Technology Tracks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master cutting-edge technologies and build a strong foundation in software development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProgramCard
              icon={Code2}
              title="Software Engineering"
              description="Full-stack development with modern technologies including React, Node.js, and cloud platforms."
              duration="24 weeks"
              href="/programs/software-engineering"
              features={["Web Development", "Mobile Apps", "Cloud Integration", "DevOps"]}
            />
            <ProgramCard
              icon={Brain}
              title="AI & Machine Learning"
              description="Deep learning, neural networks, and practical AI applications with Python and TensorFlow."
              duration="16 weeks"
              href="/programs/ai-ml"
              features={["Deep Learning", "Computer Vision", "NLP", "AI Ethics"]}
            />
            <ProgramCard
              icon={Cloud}
              title="Cloud & DevOps"
              description="Master AWS, Azure, Docker, and modern deployment practices."
              duration="12 weeks"
              href="/programs/cloud-devops"
              features={["Cloud Platforms", "CI/CD", "Containers", "Security"]}
            />
            <ProgramCard
              icon={Database}
              title="Data Science"
              description="Data analysis, visualization, and predictive modeling using industry tools."
              duration="16 weeks"
              href="/programs/data-science"
              features={["Data Analysis", "Visualization", "Machine Learning", "Statistics"]}
            />
          </div>
        </div>
      </section>

      {/* Innovation & Leadership Programs */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Professional Development</Badge>
            <h2 className="text-3xl font-bold mb-4">Innovation & Leadership Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Develop the skills needed to lead technology initiatives and drive innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProgramCard
              icon={Lightbulb}
              title="Tech Innovation"
              description="Learn to identify opportunities, develop solutions, and bring innovative ideas to market."
              duration="8 weeks"
              href="/programs/innovation"
              features={["Design Thinking", "Product Development", "Market Analysis", "Prototyping"]}
            />
            <ProgramCard
              icon={Trophy}
              title="Tech Leadership"
              description="Develop the skills needed to lead technical teams and manage technology projects."
              duration="10 weeks"
              href="/programs/leadership"
              features={["Team Management", "Project Leadership", "Communication", "Strategy"]}
            />
            <ProgramCard
              icon={Users}
              title="Tech Entrepreneurship"
              description="Build and scale technology ventures while maintaining Christian principles."
              duration="12 weeks"
              href="/programs/entrepreneurship"
              features={["Business Model", "Startup Growth", "Funding", "Market Entry"]}
            />
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Programs?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our programs offer unique advantages that prepare you for success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="Industry-Aligned Curriculum"
              description="Programs designed in collaboration with industry leaders to meet current market demands."
            />
            <BenefitCard
              title="Christian Values Integration"
              description="Learn to apply biblical principles in technology and business decisions."
            />
            <BenefitCard
              title="Hands-on Experience"
              description="Work on real projects and build a portfolio that showcases your skills."
            />
            <BenefitCard
              title="Expert Mentorship"
              description="Learn from experienced professionals who share your values and vision."
            />
            <BenefitCard
              title="Career Support"
              description="Get help with job placement, interview preparation, and career planning."
            />
            <BenefitCard
              title="Global Community"
              description="Join a network of Christian tech professionals around the world."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards a transformative career in technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProgramCard({
  icon: Icon,
  title,
  description,
  duration,
  href,
  features,
}: {
  icon: React.ElementType
  title: string
  description: string
  duration: string
  href: string
  features: string[]
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
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="space-y-2 mb-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <Badge variant="outline">{duration}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function BenefitCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-1 bg-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}