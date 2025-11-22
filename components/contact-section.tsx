"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileDown } from "lucide-react"
import { useScrollAnimation } from "@/lib/useScrollAnimation"

export function ContactSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const handleDownloadPDF = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Place your resume.pdf in public folder
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const contactLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/samardeeps",
      color: "from-primary to-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samardeep-singh-498830258",
      color: "from-accent to-primary",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:samardeepnew@gmail.com",
      color: "from-primary to-accent",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-red-500/10 to-orange-500/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let&apos;s collaborate on your next mobile app project
          </p>
        </div>

        <div ref={contentRef} className={`max-w-4xl mx-auto transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="glass-card p-8 md:p-12 hover:shadow-xl transition-all duration-300" style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)' }}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Connect With Me</h3>
                <div className="space-y-4">
                  {contactLinks.map((link, idx) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animate-fade-in-left flex items-center gap-4 p-4 rounded-xl glass-card hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 group"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors text-foreground">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="animate-fade-in-right flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileDown className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Download Resume</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Get a detailed overview of my experience and skills
                </p>
                <Button 
                  onClick={handleDownloadPDF}
                  className="gradient-primary text-white rounded-full px-8 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
