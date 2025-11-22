"use client"

import { Card } from "@/components/ui/card"
import { Users, Target } from "lucide-react"
import { useScrollAnimation } from "@/lib/useScrollAnimation"

export function LeadershipSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section id="leadership" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leadership</span>
          </h2>
        </div>

        <div ref={contentRef} className={`max-w-3xl mx-auto transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="glass-card p-8 hover:glow-accent transition-all duration-300 group" style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.15)' }}>
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-primary flex-shrink-0">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-foreground">HR & Logistics Head</h3>
                <p className="text-accent font-medium mb-4">National Service Scheme</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground/80 text-sm">
                      Led team management initiatives and coordinated logistics for multiple community service events
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground/80 text-sm">
                      Managed human resources and event planning for large-scale social initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
