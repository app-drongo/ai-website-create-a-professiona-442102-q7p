// Services1 Component
// Generated: 2025-08-27T09:37:21.634Z
// Template: services-c001
// Context: Services
// Position: pages.1.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  Shield,
  Rocket,
  Building2,
  ArrowRight
} from "lucide-react"

export default function Services1() {
  const services = [
    {
      id: "strategic-planning",
      title: "Strategic Planning",
      description: "Comprehensive strategic roadmaps that align your organization's vision with actionable business objectives and measurable outcomes.",
      icon: Target,
      badge: "Core Service",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Roadmaps"],
      link: "/services/strategic-planning"
    },
    {
      id: "operational-excellence",
      title: "Operational Excellence",
      description: "Streamline processes, eliminate inefficiencies, and optimize performance to drive sustainable competitive advantage.",
      icon: TrendingUp,
      features: ["Process Optimization", "Performance Metrics", "Cost Reduction"],
      link: "/services/operational-excellence"
    },
    {
      id: "organizational-transformation",
      title: "Organizational Transformation",
      description: "Navigate complex change initiatives with expert guidance on restructuring, culture transformation, and digital adoption.",
      icon: Building2,
      badge: "Popular",
      features: ["Change Management", "Digital Transformation", "Culture Development"],
      link: "/services/transformation"
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      description: "Empower your executive team with advanced leadership capabilities and strategic thinking frameworks for sustained success.",
      icon: Users,
      features: ["Executive Coaching", "Leadership Assessment", "Succession Planning"],
      link: "/services/leadership"
    },
    {
      id: "business-analytics",
      title: "Business Intelligence",
      description: "Transform data into strategic insights with advanced analytics, reporting systems, and predictive modeling solutions.",
      icon: BarChart3,
      features: ["Data Analytics", "KPI Dashboards", "Predictive Modeling"],
      link: "/services/analytics"
    },
    {
      id: "innovation-strategy",
      title: "Innovation Strategy",
      description: "Foster innovation culture and develop systematic approaches to identify, evaluate, and implement breakthrough opportunities.",
      icon: Lightbulb,
      features: ["Innovation Frameworks", "R&D Strategy", "Market Disruption"],
      link: "/services/innovation"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Professional Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Strategic Solutions for
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Enterprise Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive consulting services designed to accelerate growth, optimize operations, and drive sustainable competitive advantage for mid to large-sized enterprises
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 border border-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Consultation Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Explore Service</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to transform your business strategy?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Schedule Strategic Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              Download Service Portfolio
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}