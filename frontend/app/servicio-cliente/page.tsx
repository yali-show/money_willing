import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ServicioClientePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-center">
              Servicio al Cliente
            </h1>
            <p className="text-muted-foreground text-lg text-center text-balance leading-relaxed">
              Estamos aquí para ayudarle con cualquier consulta sobre nuestros relojes y servicios
            </p>
          </div>

          <Separator className="mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Envíenos un Mensaje</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Juan Pérez" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="juan@ejemplo.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Consulta sobre producto" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Escriba su mensaje aquí..." rows={6} />
                </div>

                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Información de Contacto</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nuestro equipo de expertos está disponible para asistirle con cualquier pregunta sobre nuestras
                  colecciones, servicios de mantenimiento o para agendar una cita en boutique.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@chronos.com</p>
                    <p className="text-sm text-muted-foreground">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Boutique Principal</h3>
                    <p className="text-muted-foreground">123 Luxury Avenue</p>
                    <p className="text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horario de Boutique</h3>
                    <p className="text-muted-foreground">Lunes a Sábado: 10:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Domingo: 12:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button size="lg" variant="outline" className="w-full bg-transparent">
                  Agendar Cita en Boutique
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">¿Cuánto tiempo tarda el envío?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Los envíos nacionales tardan de 2-3 días hábiles. Los envíos internacionales pueden tardar de 5-10
                  días hábiles dependiendo del destino.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">¿Puedo devolver un reloj?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el reloj esté en
                  condiciones originales y sin usar.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">¿Los relojes vienen con certificado de autenticidad?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutamente. Todos nuestros relojes incluyen certificado de autenticidad, garantía internacional y
                  documentación completa.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">¿Ofrecen servicio de mantenimiento?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, contamos con un centro de servicio técnico especializado. Recomendamos una revisión completa cada
                  3-5 años para mantener su reloj en condiciones óptimas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
