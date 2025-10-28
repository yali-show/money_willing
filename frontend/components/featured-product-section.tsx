"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function FeaturedProductSection() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height))
        setScrollY(scrollProgress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 100}px)`,
        }}
      >
        <img
          src="/luxury-chronograph-watch-macro-detail.jpg"
          alt="Featured Watch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-primary text-sm lg:text-base uppercase tracking-widest mb-4">Edición Limitada</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance leading-tight">
            Chronos Perpetual
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Un calendario perpetuo que trasciende el tiempo. Solo 100 piezas en todo el mundo.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-base lg:text-lg bg-transparent"
            asChild
          >
            <a href="/catalogo/limited">Explorar Detalles</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
