"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import Link from "next/link"


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                CHRONOS
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link
                href="/catalogo/classic"
                className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                Colección Clásica
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/catalogo/sport"
                className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                Colección Deportiva
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                  href="/catalogo/limited"
                  className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                  Edición Limitada
                  
                  <span
                      className="
                          absolute 
                          content-['']
                          bottom-[-18px]
                          left-1/2 
                          -translate-x-1/2
                          w-[115%]
                          h-[20px]

                          /* Fondo de luces (sin cambios) */
                          [background-image:radial-gradient(circle,#ff3b3b_3px,transparent_3px),radial-gradient(circle,#ffeb3b_3px,transparent_3px),radial-gradient(circle,#4caf50_3px,transparent_3px),radial-gradient(circle,#2196f3_3px,transparent_3px)] 
                          [background-size:24px_12px] 
                          [background-position:0_0,6px_0,12px_0,18px_0] 
                          bg-repeat-x
                          mask-[wavy-line] /* Mucho más limpio y sin errores */
                          [mask-size:100%_100%]
                          [mask-repeat:no-repeat]

                          /* Animación (sin cambios) */
                          animate-[twinkle_2s_infinite_ease-in-out]
                      "
                  />

                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>


            </nav>

            {/* Cart Icon */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-transparent hover:text-primary transition-colors duration-300"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5 lg:h-6 lg:w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-transparent hover:text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-6 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-6">
                <Link
                  href="/catalogo/classic"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Colección Clásica
                </Link>
                <Link
                  href="/catalogo/sport"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Colección Deportiva
                </Link>
                <Link
                  href="/catalogo/limited"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Edición Limitada
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
