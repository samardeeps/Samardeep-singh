"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Smartphone, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/lib/useScrollAnimation"

export function ProjectsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const projects = [
    {
      title: "Servease",
      description: "Centralized service-booking platform with real-time location tracking and Firestore integration.",
      videoUrl: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1763750451/Screenrecorder-2025-11-12-17-20-31-741_lcykle.mp4",
      features: ["Firestore Database", "Geolocator Integration", "Real-time Updates", "Booking System"],
      tech: ["Flutter", "Firebase", "Firestore", "Geolocator"],
      github: "#",
      demo: "#",
      color: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/30",
    },
    {
      title: "Foodora",
      description:
        "A modern food delivery app built with BLoC architecture for scalable state management and seamless user experience.",
      videoUrl: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1763751574/foodora_voegyu.mp4",
      features: ["BLoC Architecture", "Restaurant Discovery", "Order Management", "Real-time Tracking"],
      tech: ["Flutter", "Dart", "BLoC", "Firebase"],
      github: "#",
      demo: "#",
      color: "from-green-500 to-emerald-500",
      glowColor: "shadow-green-500/30",
    },
    {
      title: "Mood Tracker",
      description:
        "A mental wellness app with Firebase integration featuring mood logging, analytics, and proper error handling using Provider.",
      videoUrl: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1763751546/Screenrecorder-2025-11-12-18-39-09-115_lcdkn9.mp4",
      features: ["Mood Analytics", "Firebase Auth", "Error Handling", "Data Visualization"],
      tech: ["Flutter", "Firebase", "Provider", "Charts"],
      github: "#",
      demo: "#",
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/30",
    },
    {
      title: "FlutFlix",
      description:
        "A comprehensive movie discovery app powered by TMDB API with dynamic content updates and smooth navigation.",
      videoUrl: "",
      features: ["REST API Integration", "State Management", "Dynamic UI Updates", "Search & Filter"],
      tech: ["Flutter", "Dart", "TMDB API", "Provider"],
      github: "#",
      demo: "#",
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/30",
    },
  ]

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleProject = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Tap to explore my development journey</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {projects.map((project, idx) => (
            <ProjectItem
              key={project.title}
              project={project}
              idx={idx}
              isExpanded={expandedIndex === idx}
              onToggle={() => toggleProject(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectItem({
  project,
  idx,
  isExpanded,
  onToggle,
}: {
  project: {
    title: string
    description: string
    videoUrl: string
    features: string[]
    tech: string[]
    github: string
    demo: string
    color: string
    glowColor: string
  }
  idx: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isExpanded && videoRef.current) {
      videoRef.current.play().catch(() => {})
    } else if (videoRef.current) {
      videoRef.current.pause()
    }
  }, [isExpanded])

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
      <Card
        className={cn(
          "glass-card overflow-hidden transition-all duration-500 cursor-pointer border-l-4 hover:shadow-2xl",
          isExpanded 
            ? `border-l-current shadow-lg ${project.glowColor}` 
            : "border-l-transparent hover:border-l-primary/50 hover:translate-y-[-2px]",
        )}
        onClick={onToggle}
        style={{
          borderLeftColor: isExpanded ? "currentColor" : "transparent",
          boxShadow: isExpanded 
            ? `0 20px 25px -5px rgba(0,0,0,0.15), inset 0 0 40px ${project.glowColor}` 
            : undefined
        }}
      >
        {/* Header / Compressed View */}
        <div className="p-4 md:p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300",
                `bg-gradient-to-br ${project.color}`,
                isExpanded ? "scale-110" : "",
              )}
            >
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1 md:hidden">
                {project.tech.slice(0, 2).join(" • ")}
              </p>
              <div className="hidden md:flex gap-2 mt-1">
                {project.tech.map((t: string) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:inline-block">
              {isExpanded ? "Close Details" : "View Details"}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </div>

        {/* Expanded Content */}
        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-500 ease-in-out",
            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="p-6 pt-0 md:p-8 md:pt-0 border-t border-border/50 mt-2">
              <div className="grid lg:grid-cols-2 gap-8 pt-6">
                {/* Project Info */}
                <div className="flex flex-col order-2 lg:order-1">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground text-sm uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature: string) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Button
                      className="gradient-primary text-white rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex-1 sm:flex-none font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border border-border text-foreground hover:bg-card hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 bg-transparent flex-1 sm:flex-none font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* iOS Device Mockup - Smaller in expanded view for better mobile fit */}
                <div
                  className="flex items-center justify-center order-1 lg:order-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] bg-gray-900 rounded-[2.5rem] shadow-2xl border-4 border-gray-800 overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10" />

                    {/* Screen Content */}
                    <div className="w-full h-full bg-black">
                      {project.videoUrl ? (
                        <video
                          ref={videoRef}
                          src={project.videoUrl}
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-4 text-center">
                          <Smartphone className="w-12 h-12 text-primary/50 mb-3" />
                          <p className="text-xs text-muted-foreground">Video Preview</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
