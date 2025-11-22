"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"
import { useScrollAnimation } from "@/lib/useScrollAnimation"

export function EducationSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary/10 to-blue-500/5 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        <div ref={contentRef} className={`max-w-3xl mx-auto transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="glass-card p-8 hover:glow-primary transition-all duration-300 group" style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)' }}>
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-primary font-medium mb-4">VIPS, Pitampura</p>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">CGPA: 7.5</span>
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
