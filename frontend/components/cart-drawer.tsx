"use client"

import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-accent/20 z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-accent/20">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-serif text-foreground">Carrito ({totalItems})</h2>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg">Tu carrito está vacío</p>
              <p className="text-muted-foreground/60 text-sm mt-2">Añade algunos relojes de lujo a tu colección</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.watch.id} className="flex gap-4 pb-6 border-b border-accent/10 last:border-0">
                  <div className="relative w-24 h-24 bg-card rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.watch.images.main || "/placeholder.svg"}
                      alt={item.watch.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/producto/${item.watch.id}`}
                      onClick={onClose}
                      className="font-serif text-foreground hover:text-accent transition-colors line-clamp-1"
                    >
                      {item.watch.name}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{item.watch.collection}</p>
                    <p className="text-accent font-semibold mt-2">€{item.watch.price.toLocaleString()}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-2 bg-card border border-accent/20 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.watch.id, item.quantity - 1)}
                          className="p-2 hover:bg-accent/10 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.watch.id, item.quantity + 1)}
                          className="p-2 hover:bg-accent/10 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.watch.id)}
                        className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-accent/20 p-6 space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-muted-foreground">Total</span>
              <span className="font-serif text-2xl text-accent">€{totalPrice.toLocaleString()}</span>
            </div>

            <Button
              className="w-full bg-accent hover:bg-accent/90 text-background font-semibold py-6 text-lg"
              onClick={onClose}
            >
              Proceder al Pago
            </Button>

            <button
              onClick={onClose}
              className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </>
  )
}
