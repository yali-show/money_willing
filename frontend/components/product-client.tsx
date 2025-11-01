"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { watches, type Watch } from "@/lib/watches-data"
import { Check, ShoppingCart } from "lucide-react"
import { WatchCard } from "@/components/watch-card"
import { useCart } from "@/contexts/cart-context"

export default function ProductClient({ watch }: { watch: Watch }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(watch)
    setTimeout(() => setIsAdding(false), 1000)
  }

  const relatedWatches = watches.filter((w) => w.collection === watch.collection && w.id !== watch.id).slice(0, 3)

  return (
    <>
      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/20">
            <img
              src={watch.images.gallery[selectedImage] || "/placeholder.svg"}
              alt={watch.name}
              className="w-full h-full object-cover"
            />
            {watch.limited && (
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Edición Limitada</Badge>
            )}
          </div>*3

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {watch.images.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                  selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${watch.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-2">
              {watch.collection === "classic"
                ? "Colección Clásica"
                : watch.collection === "sport"
                  ? "Colección Deportiva"
                  : "Edición Limitada"}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{watch.name}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{watch.description}</p>
          </div>

          <div className="flex items-baseline gap-4">
            {/*Precio tachado original*/}
            <p className="text-2xl text-gray-500 line-through">
                €{watch.price.toLocaleString()}
            </p>
            {/*Precio nuevo*/}
            <p className="text-4xl font-bold text-primary">€{watch.price.toLocaleString()}</p>
            {watch.limited && (
              <Badge variant="outline" className="text-sm">
                {watch.limited.remaining} de {watch.limited.total} disponibles
              </Badge>
            )}
          </div>

          <Separator />

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            {watch.inStock ? (
              <>
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <p className="text-sm font-medium">En stock</p>
              </>
            ) : (
              <>
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <p className="text-sm font-medium">Agotado</p>
              </>
            )}
          </div>

          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
            disabled={!watch.inStock || isAdding}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {isAdding ? "Añadido al Carrito" : watch.inStock ? "Añadir al Carrito" : "Agotado"}
          </Button>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Características Destacadas</h3>
            <ul className="space-y-2">
              {watch.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <div className="mb-24">
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            <TabsTrigger value="description">Descripción</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Movimiento</p>
                  <p className="font-medium">{watch.specifications.movement}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Material de la Caja</p>
                  <p className="font-medium">{watch.specifications.caseMaterial}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Diámetro de la Caja</p>
                  <p className="font-medium">{watch.specifications.caseDiameter}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Resistencia al Agua</p>
                  <p className="font-medium">{watch.specifications.waterResistance}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Cristal</p>
                  <p className="font-medium">{watch.specifications.crystal}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Correa</p>
                  <p className="font-medium">{watch.specifications.strap}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="description" className="mt-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">{watch.description}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Este excepcional reloj representa la culminación de décadas de experiencia en alta relojería. Cada
                componente ha sido meticulosamente diseñado y ensamblado a mano por nuestros maestros relojeros,
                garantizando no solo precisión excepcional, sino también una belleza atemporal que trasciende las modas
                pasajeras.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedWatches.length > 0 && (
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">También te puede interesar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedWatches.map((relatedWatch) => (
              <WatchCard key={relatedWatch.id} watch={relatedWatch} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
