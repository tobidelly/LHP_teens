import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, BookOpen, Calendar, Target, Compass } from "lucide-react"
import { TrainingSection } from "@/components/training-section"
import { ChairmanWelcome } from "@/components/chairman-welcome"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Christian Innovators in Tech
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a global community of tech professionals combining faith and innovation
            to create meaningful impact through technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/programs">Explore Programs</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/mentorship">Become a Mentor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Chairman's Welcome */}
      <ChairmanWelcome />

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-semibold">Our Vision</span>
              </div>
              <h2 className="text-3xl font-bold">
                Shaping the Future of Technology with Christian Values
              </h2>
              <p className="text-lg text-muted-foreground">
                We envision a world where Christian tech professionals lead innovation
                with integrity, purpose, and excellence, creating technology that
                uplifts humanity and glorifies God.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span>Foster a global community of Christian tech innovators</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span>Drive technological advancement with biblical principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span>Create positive social impact through innovation</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Compass className="h-5 w-5 text-primary" />
                <span className="font-semibold">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold">
                Equipping the Next Generation of Tech Leaders
              </h2>
              <p className="text-lg text-muted-foreground">
                Our mission is to provide world-class technical education, mentorship,
                and resources that empower Christians to excel in technology while
                maintaining their faith-based values.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-background/50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Technical Excellence</h3>
                    <p className="text-sm text-muted-foreground">
                      Providing cutting-edge training in software development, AI, and cloud computing
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Spiritual Growth</h3>
                    <p className="text-sm text-muted-foreground">
                      Integrating biblical principles with professional development
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Community Building</h3>
                    <p className="text-sm text-muted-foreground">
                      Creating a supportive network of Christian tech professionals
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Industry Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Developing leaders who transform the tech industry
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <TrainingSection />

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Code2}
              title="Technical Training"
              description="Comprehensive courses in software engineering, AI/ML, and cloud computing."
            />
            <FeatureCard
              icon={Users}
              title="Mentorship"
              description="Connect with experienced Christian tech professionals for guidance."
            />
            <FeatureCard
              icon={BookOpen}
              title="Resources"
              description="Access a vast library of learning materials and coding challenges."
            />
            <FeatureCard
              icon={Calendar}
              title="Events"
              description="Participate in hackathons, workshops, and networking events."
            />
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah Johnson"
              role="Software Engineer"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
              quote="The mentorship program helped me transition into tech and land my dream job."
            />
            <TestimonialCard
              name="David Chen"
              role="AI Researcher"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
              quote="Through NIH, I learned how to integrate my faith with cutting-edge AI development."
            />
            <TestimonialCard
              name="Maria Garcia"
              role="Tech Founder"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
              quote="The hub provided the perfect environment to launch my Christian tech startup."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of Christian innovators and start making an impact
            through technology.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/get-started">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({
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
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({
  name,
  role,
  image,
  quote,
}: {
  name: string;
  role: string;
  image: string;
  quote: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full mb-4 object-cover"
          />
          <p className="text-muted-foreground mb-4">"{quote}"</p>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}