"use client"

import type { Watch } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface WatchCardProps {
  watch: Watch
}

export function WatchCard({ watch }: WatchCardProps) {
  return (
    <a
      href={`/producto/${watch.id}`}
      className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary/20">
        <img
          src={watch.images.main || "/placeholder.svg"}
          alt={watch.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {watch.limited && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Edición Limitada</Badge>
        )}
        {!watch.inStock && (
          <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">Agotado</Badge>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {watch.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{watch.description}</p>
        </div>

        <div className="flex items-center justify-between">
           <p className="text-1xl text-gray-500 line-through">
                €{watch.price.toLocaleString()}
            </p>
          <p className="text-2xl font-bold text-primary">${watch.price.toLocaleString()}</p>
          {watch.limited && (
            <p className="text-sm text-muted-foreground">
              {watch.limited.remaining} de {watch.limited.total}
            </p>
          )}
        </div>

        <Button
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = `/producto/${watch.id}`
          }}
        >
          Ver Detalles
        </Button>
      </div>
    </a>
  )
}
