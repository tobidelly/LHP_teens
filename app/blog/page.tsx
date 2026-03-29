"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Success Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover inspiring stories, technical insights, and the latest updates
              from our community of Christian tech professionals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#featured">Read Stories</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/share-story">Share Your Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section id="featured" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard
              title="From Ministry to Tech: My Journey"
              excerpt="How I transitioned from full-time ministry to software engineering while maintaining my Christian values."
              author="Sarah Johnson"
              date="March 15, 2025"
              category="Success Story"
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=400"
            />
            <BlogCard
              title="Building AI Systems with Christian Ethics"
              excerpt="Exploring the intersection of artificial intelligence and Christian principles in modern tech development."
              author="David Chen"
              date="March 10, 2025"
              category="Technical"
              image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800&h=400"
            />
            <BlogCard
              title="Tech for Kingdom Impact"
              excerpt="How our graduates are using technology to serve their local churches and communities."
              author="Maria Garcia"
              date="March 5, 2025"
              category="Impact"
              image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=400"
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SuccessStoryCard
              name="Michael Thompson"
              role="Software Engineer at Google"
              quote="The mentorship and spiritual guidance I received at Nehemiah Hub were instrumental in my journey to becoming a software engineer at Google."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
            />
            <SuccessStoryCard
              name="Rachel Lee"
              role="Tech Startup Founder"
              quote="Through the programs at Nehemiah Hub, I gained both the technical skills and Christian business principles needed to launch my own tech company."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Technical Tutorials"
              count={25}
              href="/blog/category/tutorials"
            />
            <CategoryCard
              title="Success Stories"
              count={42}
              href="/blog/category/success-stories"
            />
            <CategoryCard
              title="Industry Insights"
              count={18}
              href="/blog/category/insights"
            />
            <CategoryCard
              title="Faith & Tech"
              count={31}
              href="/blog/category/faith-tech"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function BlogCard({
  title,
  excerpt,
  author,
  date,
  category,
  image,
}: {
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <CardContent className="p-6">
        <Badge className="mb-2">{category}</Badge>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SuccessStoryCard({
  name,
  role,
  quote,
  image,
}: {
  name: string
  role: string
  quote: string
  image: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{role}</p>
            <p className="italic">"{quote}"</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CategoryCard({
  title,
  count,
  href,
}: {
  title: string
  count: number
  href: string
}) {
  return (
    <Card className="group hover:border-primary transition-colors">
      <CardContent className="p-6">
        <Link href={href} className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{count} articles</p>
          </div>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  )
}