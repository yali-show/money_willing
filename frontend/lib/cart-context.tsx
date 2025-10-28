"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Watch } from "@/lib/types"

interface CartItem {
  watch: Watch
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (watch: Watch) => void
  removeFromCart: (watchId: string) => void
  updateQuantity: (watchId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("chronos-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Error loading cart:", e)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("chronos-cart", JSON.stringify(items))
  }, [items])

  const addToCart = (watch: Watch) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.watch.id === watch.id)
      if (existingItem) {
        return currentItems.map((item) =>
          item.watch.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...currentItems, { watch, quantity: 1 }]
    })
    setIsOpen(true)
  }

  const removeFromCart = (watchId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.watch.id !== watchId))
  }

  const updateQuantity = (watchId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(watchId)
      return
    }
    setItems((currentItems) => currentItems.map((item) => (item.watch.id === watchId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.watch.price * item.quantity, 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
