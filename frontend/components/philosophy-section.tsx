"use client"

import { useEffect, useRef, useState } from "react"

export function PhilosophySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="filosofia" ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/5] overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img src="/watchmaker-luxury-watch.png" alt="Artesanía Relojera" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
              El Arte de la Relojería
            </h2>
            <div className="space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p>
                Cada reloj CHRONOS es el resultado de siglos de tradición relojera combinada con la innovación más
                avanzada. Nuestros maestros relojeros dedican cientos de horas a perfeccionar cada detalle.
              </p>
              <p>
                Desde el diseño inicial hasta el ensamblaje final, cada componente es meticulosamente elaborado para
                garantizar una precisión excepcional y una belleza atemporal.
              </p>
              <p className="text-primary font-medium text-xl lg:text-2xl pt-4">
                "La perfección no es un accidente, es el resultado de la dedicación absoluta"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
