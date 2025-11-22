"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Smartphone, Mail, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
      {/* Enhanced animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/8" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]" />
      
      {/* Animated blob decorations */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl animate-blob-motion opacity-40" />
      <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-3xl animate-blob-motion opacity-30" style={{ animationDelay: "-2s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content - Text */}
          <div className="animate-fade-in-left text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-scale-in mx-auto lg:mx-0 hover:shadow-lg hover:animate-glow-pulse transition-all duration-300 group">
              <Sparkles className="w-4 h-4 text-primary group-hover:animate-spin" />
              <span className="text-sm font-medium text-foreground">Flutter Developer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              <span className="text-foreground block mb-2">Crafting</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer inline-block">
                Digital Experiences
              </span>
              <br />
              <span className="text-foreground">That Inspire</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              I craft pixel-perfect, high-performance mobile applications for Android &amp; iOS using Flutter. Let&apos;s turn
              your ideas into app store featured products that users love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="gradient-primary text-white rounded-full px-8 glow-primary h-12 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group animate-fade-in-up">
                <a href="#projects" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                  View My Work
                </a>
              </Button>
                <Button
                size="lg"
                variant="outline"
                className="group rounded-full px-8 bg-card/50 border border-border text-foreground hover:bg-card hover:shadow-lg transition-all duration-300 h-12 text-base font-semibold animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
                >
                <a href="#contact" className="flex items-center gap-2 text-foreground group-hover:text-foreground">
                  <Mail className="w-4 h-4" /> Contact Me
                </a>
                </Button>
            </div>

            {/* Enhanced Stats with staggered animations */}
            <div className="grid grid-cols-3 gap-4 border-t border-border/50 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="group transition-all duration-300 hover:translate-y-[-4px]">
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text group-hover:animate-shimmer">4+</div>
                <div className="text-xs md:text-sm text-muted-foreground group-hover:text-primary transition-colors">Projects</div>
              </div>
              <div className="group transition-all duration-300 hover:translate-y-[-4px]" style={{ transitionDelay: "50ms" }}>
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text group-hover:animate-shimmer">3+</div>
                <div className="text-xs md:text-sm text-muted-foreground group-hover:text-accent transition-colors">Hackathons</div>
              </div>
              <div className="group transition-all duration-300 hover:translate-y-[-4px]" style={{ transitionDelay: "100ms" }}>
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text group-hover:animate-shimmer">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground group-hover:text-primary transition-colors">Commitment</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder with Enhanced Effects */}
          <div className="animate-fade-in-right order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Animated outer glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/30 rounded-full blur-3xl animate-blob-motion" />

              {/* Image Container with enhanced effects */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden glass-card border-2 border-border/50 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:translate-y-[-6px] hover:scale-105 group">
                <video 
                  src="https://res.cloudinary.com/dj2u6y8iv/video/upload/v1763760007/From_KlickPin_CF_Pin_by_Bjorn_Heyerick_on_2025_waves_in_2025___Framed_photo_collage_Motion_design_Motion_graphics_design_jrycxu.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover" 
                />
                </div>

              {/* Enhanced Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl animate-float-down hidden sm:flex items-center gap-3 hover:shadow-lg hover:scale-110 transition-all duration-300 group">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Open to Work</span>
              </div>

              {/* Decorative accent elements */}
              <div className="absolute top-10 -right-10 w-20 h-20 border-2 border-primary/20 rounded-full opacity-50 animate-pulse" />
              <div className="absolute -bottom-10 -right-5 w-16 h-16 border-2 border-accent/20 rounded-full opacity-50 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float-up">
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
