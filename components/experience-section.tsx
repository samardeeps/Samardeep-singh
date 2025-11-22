"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/lib/useScrollAnimation"

export function ExperienceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const experiences = [
    {
      title: "Flutter Developer Intern",
      company: "Petuk Ji Pvt. Ltd.",
      period: "2023 - 2024",
      description:
        "Contributed to production-level mobile applications with focus on Firebase integration and REST API development.",
      achievements: [
        "Implemented Firebase CRUD operations for real-time data management",
        "Integrated REST APIs for seamless backend communication",
        "Developed production-ready UI components following Material Design",
        "Collaborated with cross-functional teams on feature development",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Experience{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey in mobile app development
          </p>
        </div>

        <div ref={contentRef} className={`max-w-4xl mx-auto transition-all duration-700 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className="animate-fade-in-left relative pl-8 pb-12 last:pb-0"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

              {/* Timeline node */}
              <div className="absolute left-0 top-2 w-4 h-4 -translate-x-[7.5px] rounded-full bg-primary glow-primary" />

              <Card className="glass-card p-6 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group" style={{ boxShadow: '0 0 40px rgba(249, 115, 22, 0.15)' }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Briefcase className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
