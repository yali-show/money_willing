import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { Check } from "lucide-react"

export default function GarantiaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Garantía Internacional
          </h1>
          <p className="text-muted-foreground text-lg mb-12">Protección completa para su inversión</p>

          <Separator className="mb-12" />

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">Nuestra Garantía</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos los relojes CHRONOS están respaldados por nuestra garantía internacional de 5 años, que cubre
                defectos de fabricación y funcionamiento. Esta garantía es válida en cualquiera de nuestras boutiques
                autorizadas alrededor del mundo.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">Cobertura de la Garantía</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">La garantía cubre:</p>
              <ul className="space-y-3">
                {[
                  "Defectos en el movimiento del reloj",
                  "Problemas con la caja y el cristal",
                  "Fallos en la resistencia al agua (según especificaciones)",
                  "Defectos en materiales y mano de obra",
                  "Funcionamiento incorrecto de complicaciones",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">Exclusiones</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">La garantía NO cubre:</p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Desgaste normal de la correa, hebilla o cristal</li>
                <li>Daños causados por accidentes, mal uso o negligencia</li>
                <li>Daños por agua si el reloj no fue utilizado según las especificaciones</li>
                <li>Reparaciones realizadas por centros no autorizados</li>
                <li>Modificaciones no autorizadas</li>
                <li>Pérdida o robo del reloj</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">Servicio de Mantenimiento</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para mantener su reloj en condiciones óptimas, recomendamos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Revisión completa cada 3-5 años</li>
                <li>Verificación de resistencia al agua anualmente</li>
                <li>Limpieza profesional según sea necesario</li>
                <li>Almacenamiento adecuado cuando no esté en uso</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">Proceso de Reclamación</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para hacer uso de su garantía, siga estos pasos:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-3">
                <li>Contacte a nuestro servicio al cliente o visite una boutique autorizada</li>
                <li>Presente su certificado de garantía y prueba de compra</li>
                <li>Nuestros expertos evaluarán el reloj</li>
                <li>Si está cubierto, realizaremos la reparación sin costo</li>
                <li>Recibirá su reloj restaurado con un informe de servicio completo</li>
              </ol>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">Extensión de Garantía</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecemos programas de extensión de garantía para brindar protección adicional más allá del período
                estándar de 5 años. Consulte con su boutique CHRONOS para más detalles sobre nuestros planes de
                protección extendida.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">Contacto de Servicio</h2>
              <p className="text-muted-foreground leading-relaxed">Para consultas sobre garantía o servicio técnico:</p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-4 space-y-2">
                <li>Email: service@chronos.com</li>
                <li>Teléfono: +1 (555) 123-4567</li>
                <li>Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
