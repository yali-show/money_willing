"use client"

import { Instagram, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer id="contacto" className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">CHRONOS</h3>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
              Excelencia en alta relojería desde 1895
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base lg:text-lg">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#colecciones"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm lg:text-base"
                >
                  Colecciones
                </a>
              </li>
              <li>
                <a
                  href="/#filosofia"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm lg:text-base"
                >
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a
                  href="/servicio-cliente"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm lg:text-base"
                >
                  Servicio al Cliente
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base lg:text-lg">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/terminos"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm lg:text-base"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="/privacidad"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm lg:text-base"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/garantia"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm lg:text-base"
                >
                  Garantía
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base lg:text-lg">Boletín Exclusivo</h4>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Recibe noticias sobre nuevas colecciones
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Tu email" className="bg-background border-border text-sm" />
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Enviar
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">© 2025 CHRONOS. Todos los derechos reservados.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
