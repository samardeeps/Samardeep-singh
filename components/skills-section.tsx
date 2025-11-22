"use client"

import { Card } from "@/components/ui/card"
import { Code, Smartphone, Database, Palette, Layers, GitBranch } from "lucide-react"
import { useScrollAnimation } from "@/lib/useScrollAnimation"

export function SkillsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation()

  const skills = [
    { name: "Flutter", icon: Smartphone, color: "from-blue-500 to-cyan-500" },
    { name: "Dart", icon: Code, color: "from-cyan-500 to-blue-600" },
    { name: "Firebase", icon: Database, color: "from-yellow-500 to-orange-500" },
    { name: "REST API", icon: Layers, color: "from-green-500 to-emerald-500" },
    { name: "Provider", icon: Layers, color: "from-purple-500 to-pink-500" },
    { name: "C++", icon: Code, color: "from-indigo-500 to-purple-500" },
    { name: "GetX", icon: Layers, color: "from-pink-500 to-rose-500" },
    { name: "Git", icon: GitBranch, color: "from-orange-500 to-red-500" },
    { name: "GitHub Actions", icon: GitBranch, color: "from-gray-600 to-gray-800" },
    { name: "Figma", icon: Palette, color: "from-red-500 to-pink-500" },
    { name: "Bloc", icon: Layers, color: "from-amber-500 to-yellow-500" },
    { name: "Gen AI", icon: Code, color: "from-violet-500 to-purple-500" },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mastery across the full mobile development stack
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div ref={skillsRef} className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-700 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}>
            {skills.map((skill, idx) => (
              <div key={skill.name} className={`transition-all duration-500 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${idx * 50}ms` }}>
                <Card className="glass-card p-6 h-full hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group cursor-pointer">
                  <div className="flex flex-col items-center text-center gap-4">
                    {/* Icon with gradient background */}
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}
                    >
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Skill name */}
                    <h3 className="font-bold text-foreground text-lg tracking-tight group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
