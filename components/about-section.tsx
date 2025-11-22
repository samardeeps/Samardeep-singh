"use client"

import { Card } from "@/components/ui/card"
import { Code2, Flame, Trophy, Zap } from "lucide-react"
import { useScrollAnimation } from "@/lib/useScrollAnimation"

export function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate mobile developer with a track record of building production-ready apps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Card */}
          <div ref={profileRef} className={`transition-all duration-700 ${profileVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="glass-card p-8 glow-primary hover:glow-primary transition-all duration-500 group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img src="https://res.cloudinary.com/dj2u6y8iv/image/upload/v1763753769/608163fe-d730-472b-9ab4-0d269d0c343d.png" alt="Samardeep Singh" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Samardeep Singh</h3>
              <p className="text-primary font-medium mb-4">Flutter Developer</p>
              <p className="text-card-foreground/90 leading-relaxed">
                Building mobile applications that users love. Experienced in creating scalable, performant apps with
                clean architecture and modern design patterns.
              </p>
            </Card>
          </div>

          {/* Stats & Highlights */}
          <div ref={statsRef} className={`space-y-6 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="glass-card p-6 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Technical Expertise</h4>
                  <p className="text-card-foreground/80 text-sm leading-relaxed">
                    Proficient in Dart, C++, Flutter framework with hands-on experience in Firebase, REST APIs, and
                    modern state management solutions like Provider and GetX.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Professional Experience</h4>
                  <p className="text-card-foreground/80 text-sm leading-relaxed">
                    Flutter Developer Intern at Petuk Ji Pvt. Ltd., contributing to production-level applications with
                    Firebase CRUD operations and REST API integrations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Competitive Achievements</h4>
                  <p className="text-card-foreground/80 text-sm leading-relaxed">
                    Top performer in multiple hackathons including HackVSIT (Top 5), Hackblocks 1.0 (Top 15), and
                    InnovateX DTU (Top 20).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
