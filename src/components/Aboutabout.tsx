// Aboutabout Component
// Generated: 2025-08-27T09:37:21.634Z
// Template: about-c001
// Context: About
// Position: pages.2.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function Aboutabout() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We're committed to delivering measurable outcomes that drive sustainable growth and competitive advantage for our clients."
    },
    {
      icon: Lightbulb,
      title: "Strategic Innovation",
      description: "We combine proven methodologies with cutting-edge insights to create innovative solutions that transform businesses."
    },
    {
      icon: Heart,
      title: "Client Partnership",
      description: "Your success is our mission. We build lasting partnerships based on trust, transparency, and shared commitment to excellence."
    },
    {
      icon: Globe,
      title: "Industry Leadership",
      description: "From Fortune 500 companies to emerging enterprises, we're helping organizations worldwide achieve strategic excellence."
    }
  ]

  const stats = [
    { value: "2015", label: "Established", icon: Award },
    { value: "500+", label: "Clients Served", icon: Users },
    { value: "98%", label: "Client Retention", icon: TrendingUp },
    { value: "15+", label: "Industries", icon: Globe }
  ]

  const team = [
    {
      name: "Marcus Thompson",
      role: "Managing Partner & CEO",
      image: "MT",
      bio: "Former McKinsey Principal. 20+ years driving strategic transformations for Fortune 500 companies."
    },
    {
      name: "Dr. Sarah Chen",
      role: "Senior Partner, Strategy",
      image: "SC",
      bio: "Ex-BCG Partner and Harvard Business School professor. Expert in digital transformation and innovation."
    },
    {
      name: "James Rodriguez",
      role: "Partner, Operations Excellence",
      image: "JR",
      bio: "Former Deloitte Director. Specializes in operational efficiency and process optimization."
    },
    {
      name: "Lisa Park",
      role: "Partner, Change Management",
      image: "LP",
      bio: "Former Accenture Managing Director. Expert in organizational transformation and leadership development."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pioneering Strategic
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Business Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a team of seasoned strategists, industry experts, and transformation specialists 
            dedicated to unlocking the full potential of businesses across all sectors.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Foundation</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by a team of former Big Four consultants, Apex Strategic Solutions 
                emerged from a shared vision: to provide world-class strategic consulting with a 
                personalized, results-focused approach.
              </p>
              <p>
                We recognized that many businesses struggled to bridge the gap between strategic 
                planning and execution. Our founders combined their decades of experience to create 
                a consulting firm that delivers both strategic insight and implementation excellence.
              </p>
              <p>
                Today, we're proud to have guided over 500 organizations through successful 
                transformations, helping them achieve sustainable growth and market leadership.
              </p>
            </div>
            <Button className="group">
              Explore Our Methodology
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Excellence in strategy requires both visionary thinking and flawless execution."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Marcus Thompson, Managing Partner</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The fundamental principles that guide our consulting approach and client relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
            <p className="text-muted-foreground">
              Meet the strategic minds behind Apex Strategic Solutions, bringing decades of consulting 
              excellence and industry expertise to every engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet Our Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Apex Strategic Solutions transformed our entire business model. Their strategic insights 
                and hands-on approach delivered results that exceeded our most optimistic projections."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RJ
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Johnson</div>
                  <div className="text-sm text-muted-foreground">CEO, Global Manufacturing Corp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}