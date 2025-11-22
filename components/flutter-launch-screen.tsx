"use client"

import { useState, useEffect } from "react"
import { Terminal, Check } from "lucide-react"

interface FlutterLaunchScreenProps {
  onComplete: () => void
}

export function FlutterLaunchScreen({ onComplete }: FlutterLaunchScreenProps) {
  const [stage, setStage] = useState<"button" | "launching" | "building" | "complete">("button")

  useEffect(() => {
    if (stage === "launching") {
      const timer = setTimeout(() => setStage("building"), 2000)
      return () => clearTimeout(timer)
    }
    if (stage === "building") {
      const timer = setTimeout(() => setStage("complete"), 2000)
      return () => clearTimeout(timer)
    }
    if (stage === "complete") {
      const timer = setTimeout(() => onComplete(), 1000)
      return () => clearTimeout(timer)
    }
  }, [stage, onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {stage === "button" && (
        <div className="animate-scale-in">
          <button
            onClick={() => setStage("launching")}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-mono text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
          >
            <Terminal className="w-5 h-5 inline-block mr-2" />
            flutter run
          </button>
        </div>
      )}

      {stage === "launching" && (
        <div className="animate-fade-in-up text-center font-mono">
          <div className="flex items-center gap-2 text-xl text-foreground">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin-360" />
            <span>Launching lib\main.dart</span>
          </div>
          <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto max-w-xs animate-slide-progress" />
        </div>
      )}

      {stage === "building" && (
        <div className="animate-fade-in-up text-center font-mono">
          <div className="flex items-center gap-2 text-xl text-foreground">
            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin-360" />
            <span>Building...</span>
          </div>
          <div className="h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-4 mx-auto max-w-xs animate-slide-progress" />
        </div>
      )}

      {stage === "complete" && (
        <div className="animate-scale-in flex items-center gap-3 text-2xl font-mono text-green-500">
          <Check className="w-8 h-8" />
          <span>Build successfully</span>
        </div>
      )}
    </div>
  )
}
