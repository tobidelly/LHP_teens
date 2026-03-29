"use client"

import { Card } from "@/components/ui/card"

export function ChairmanWelcome() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="Welcome Message from the Chairman"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>

          {/* Welcome Letter */}
          <Card className="p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Welcome to Nehemiah Innovation Hub</h2>
                <p className="text-sm text-muted-foreground">A Message from Our Chairman</p>
              </div>

              <div className="prose prose-slate dark:prose-invert">
                <p className="text-lg leading-relaxed">
                  Dear Future Innovators,
                </p>
                
                <p className="leading-relaxed">
                  It brings me great joy to welcome you to the Nehemiah Innovation Hub, 
                  where faith meets technology in the pursuit of excellence. Here at the 
                  Redemption City of God, we believe in the transformative power of 
                  technology when guided by Christian principles.
                </p>

                <p className="leading-relaxed">
                  Our vision is to raise a generation of tech leaders who will shape 
                  the future with integrity, innovation, and unwavering faith. Through 
                  our comprehensive programs, world-class mentorship, and supportive 
                  community, we're committed to equipping you with the skills and 
                  spiritual foundation needed to excel in the tech industry.
                </p>

                <p className="leading-relaxed">
                  Whether you're a beginner taking your first steps into technology 
                  or an experienced professional seeking to deepen your impact, 
                  Nehemiah Innovation Hub is your home for growth, collaboration, 
                  and purpose-driven innovation.
                </p>

                <div className="mt-8 space-y-2">
                  <p className="font-semibold">Pastor David Olaniyan</p>
                  <p className="text-sm text-muted-foreground">Chairman, Team Nehemiah</p>
                  <p className="text-sm text-muted-foreground">Redemption City of God</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}