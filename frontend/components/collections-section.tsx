"use client"

import { useEffect, useRef, useState } from "react"

const collections = [
  {
    name: "Clásica",
    slug: "classic",
    image: "/elegant-dress-watch-gold.jpg",
    description: "Elegancia atemporal",
  },
  {
    name: "Deportiva",
    slug: "sport",
    image: "/luxury-dive-watch-underwater.jpg",
    description: "Precisión bajo presión",
  },
  {
    name: "Edición Limitada",
    slug: "limited-edition",
    image: "/pilot-chronograph-watch.jpg",
    description: "Exclusividad absoluta",
  },
]

export function CollectionsSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".collection-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="collections" ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Colecciones Destacadas
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Cada colección cuenta una historia única de artesanía y precisión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <a
              key={collection.name}
              href={`/catalogo/${collection.slug}`}
              className={`collection-item group cursor-pointer transition-all duration-700 ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {collection.name}
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg">{collection.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
