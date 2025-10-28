import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Términos y Condiciones
          </h1>
          <p className="text-muted-foreground text-lg mb-12">Última actualización: Enero 2025</p>

          <Separator className="mb-12" />

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar el sitio web de CHRONOS, usted acepta estar sujeto a estos términos y condiciones
                de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">2. Productos y Servicios</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CHRONOS se reserva el derecho de modificar o discontinuar cualquier producto o servicio sin previo
                aviso. Los precios de nuestros productos están sujetos a cambios sin notificación previa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Todas las imágenes de productos son representativas. Los colores reales pueden variar ligeramente debido
                a las configuraciones de pantalla individuales.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">3. Proceso de Compra</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nos reservamos el derecho de rechazar cualquier pedido realizado a través de nuestro sitio web. Podemos
                limitar o cancelar las cantidades compradas por persona, hogar o pedido.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para las ediciones limitadas, la disponibilidad está sujeta a confirmación. Se le notificará si su
                pedido no puede ser procesado.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">4. Autenticidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos los relojes vendidos por CHRONOS son 100% auténticos y vienen con certificado de autenticidad.
                Cada pieza es inspeccionada meticulosamente por nuestros expertos antes del envío.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">5. Propiedad Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo el contenido incluido en este sitio, como texto, gráficos, logotipos, imágenes y software, es
                propiedad de CHRONOS y está protegido por las leyes internacionales de derechos de autor.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">6. Limitación de Responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                CHRONOS no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del
                uso o la imposibilidad de usar nuestros productos o servicios.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">7. Modificaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios
                entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">8. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos en:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-4 space-y-2">
                <li>Email: legal@chronos.com</li>
                <li>Teléfono: +1 (555) 123-4567</li>
                <li>Dirección: 123 Luxury Avenue, New York, NY 10001</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
