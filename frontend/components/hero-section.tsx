"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToCollections = () => {
    const collectionsSection = document.getElementById("collections")
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-watch-close-up-dark-background.jpg"
          alt="Luxury Watch"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 text-balance leading-tight">
          La Precisión Eterna
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          Donde el arte de la relojería se encuentra con la excelencia atemporal
        </p>
        <Button
          size="lg"
          onClick={scrollToCollections}
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group px-8 py-6 text-base lg:text-lg"
        >
          Descubrir la Colección
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
