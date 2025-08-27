// Services Component
// Generated: 2025-08-27T09:37:21.634Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Target,
  Users,
  Shield,
  Rocket,
  Building2,
  BarChart3,
  Lightbulb
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "digital-transformation",
      title: "Digital Transformation Strategy",
      description: "Modernize operations and accelerate digital adoption",
      longDescription: "Our digital transformation consulting helps enterprises navigate technological change while maintaining operational excellence. We develop comprehensive roadmaps that align technology investments with business objectives.",
      icon: Rocket,
      benefits: [
        "Technology stack assessment and optimization",
        "Change management and adoption strategies",
        "Digital workflow automation",
        "Cloud migration and infrastructure planning"
      ],
      pricing: "Starting at $15,000/engagement",
      timeline: "3-6 months typical engagement",
      featured: true,
      badge: "Most Requested"
    },
    {
      id: "strategic-planning",
      title: "Strategic Business Planning",
      description: "Data-driven strategies for sustainable growth",
      longDescription: "We partner with leadership teams to develop comprehensive strategic plans that drive measurable business outcomes. Our approach combines market analysis, competitive intelligence, and operational insights.",
      icon: Target,
      benefits: [
        "Market opportunity analysis",
        "Competitive positioning strategy",
        "Financial modeling and forecasting",
        "Performance metrics and KPI development"
      ],
      pricing: "Custom engagement pricing",
      timeline: "4-8 weeks per project"
    },
    {
      id: "operational-excellence",
      title: "Operational Excellence",
      description: "Optimize processes and maximize efficiency",
      longDescription: "Our operational excellence practice helps organizations streamline processes, reduce costs, and improve quality. We identify bottlenecks and implement sustainable improvements that deliver lasting value.",
      icon: BarChart3,
      benefits: [
        "Process mapping and optimization",
        "Lean methodology implementation",
        "Supply chain efficiency improvements",
        "Quality management systems"
      ],
      pricing: "Starting at $8,000/project",
      timeline: "6-12 weeks"
    },
    {
      id: "executive-advisory",
      title: "Executive Advisory Services",
      description: "C-suite guidance for critical business decisions",
      longDescription: "Provide senior leadership with strategic counsel on complex business challenges. Our experienced advisors offer objective insights and proven frameworks for executive decision-making.",
      icon: Users,
      benefits: [
        "Board presentation preparation",
        "M&A due diligence support",
        "Crisis management planning",
        "Leadership development coaching"
      ],
      pricing: "Retainer-based engagements",
      timeline: "Ongoing advisory relationships",
      badge: "Executive Level"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Strategic Consulting Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Strategic Growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive consulting services designed to transform your business operations and accelerate sustainable growth
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Request Proposal
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our strategic consulting experts are ready to help you navigate complex challenges and unlock new growth opportunities.
          </p>
          <Button size="lg">
            Book Strategic Assessment
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}