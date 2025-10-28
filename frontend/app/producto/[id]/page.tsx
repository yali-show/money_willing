import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ProductClient from "@/components/product-client"
import { getWatchById } from "@/lib/watches-data"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const watch = getWatchById(resolvedParams.id)

  if (!watch) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Producto no encontrado</h1>
            <Button asChild>
              <a href="/catalogo/all">Volver al catálogo</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <a href={`/catalogo/${watch.collection}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a la colección
            </a>
          </Button>

          <ProductClient watch={watch} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
