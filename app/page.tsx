"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { AchievementsSection } from "@/components/achievements-section"
import { EducationSection } from "@/components/education-section"
import { LeadershipSection } from "@/components/leadership-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FlutterLaunchScreen } from "@/components/flutter-launch-screen"

export default function Home() {
  const [showLaunch, setShowLaunch] = useState(true)

  useEffect(() => {
    const hasSeenLaunch = sessionStorage.getItem("hasSeenFlutterLaunch")
    if (hasSeenLaunch) {
      setShowLaunch(false)
    }
  }, [])

  const handleLaunchComplete = () => {
    sessionStorage.setItem("hasSeenFlutterLaunch", "true")
    setShowLaunch(false)
  }

  if (showLaunch) {
    return <FlutterLaunchScreen onComplete={handleLaunchComplete} />
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <EducationSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
