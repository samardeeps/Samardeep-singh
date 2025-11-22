"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Award, Medal } from "lucide-react"
import { useScrollAnimation } from "@/lib/useScrollAnimation"

export function AchievementsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const achievements = [
    {
      title: "HackVSIT",
      position: "Top 5",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      glowColor: "rgba(234, 179, 8, 0.15)",
    },
    {
      title: "Hackblocks 1.0",
      position: "Top 15",
      icon: Award,
      color: "from-primary to-accent",
      glowColor: "rgba(59, 130, 246, 0.15)",
    },
    {
      title: "InnovateX DTU",
      position: "Top 20",
      icon: Medal,
      color: "from-accent to-primary",
      glowColor: "rgba(34, 197, 194, 0.15)",
    },
  ]

  return (
    <section id="achievements" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-pink-500/5 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hackathons</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition for innovation and technical excellence
          </p>
        </div>

        <div ref={contentRef} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-700 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          {achievements.map((achievement, idx) => (
            <div key={achievement.title} className={`transition-all duration-500 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
              <Card
                className="glass-card p-8 text-center hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
                style={{ boxShadow: `0 0 40px ${achievement.glowColor}` }}
              >
                <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{achievement.title}</h3>
                <p className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                  {achievement.position}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
