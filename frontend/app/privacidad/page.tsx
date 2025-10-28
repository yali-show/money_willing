import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground text-lg mb-12">Última actualización: Enero 2025</p>

          <Separator className="mb-12" />

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">1. Información que Recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En CHRONOS, nos comprometemos a proteger su privacidad. Recopilamos información que usted nos
                proporciona directamente cuando:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Crea una cuenta en nuestro sitio web</li>
                <li>Realiza una compra o solicita información</li>
                <li>Se suscribe a nuestro boletín</li>
                <li>Participa en encuestas o promociones</li>
                <li>Se comunica con nuestro servicio al cliente</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">2. Uso de la Información</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Procesar y completar sus transacciones</li>
                <li>Enviar confirmaciones de pedidos y actualizaciones de envío</li>
                <li>Responder a sus consultas y proporcionar servicio al cliente</li>
                <li>Personalizar su experiencia de compra</li>
                <li>Enviar comunicaciones de marketing (con su consentimiento)</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Prevenir fraudes y garantizar la seguridad</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">3. Protección de Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
                personal contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos encriptación SSL
                para todas las transacciones y almacenamos datos sensibles en servidores seguros.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">4. Compartir Información</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento,
                excepto en los siguientes casos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Procesadores de pagos para completar transacciones</li>
                <li>Servicios de envío para entregar sus pedidos</li>
                <li>Cuando sea requerido por ley o para proteger nuestros derechos</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">5. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, analizar el
                tráfico y personalizar el contenido. Puede configurar su navegador para rechazar cookies, aunque esto
                puede afectar algunas funcionalidades del sitio.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">6. Sus Derechos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Usted tiene derecho a:</p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Acceder a su información personal</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
                <li>Presentar una queja ante la autoridad de protección de datos</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">7. Retención de Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos
                descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">8. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, contáctenos en:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-4 space-y-2">
                <li>Email: privacy@chronos.com</li>
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
