import type { CollectionType } from "@/lib/types"
import { CatalogClient } from "@/components/catalog-client"

const collectionTitles: Record<CollectionType, string> = {
  classic: "Colección Clásica",
  sport: "Colección Deportiva",
  limited: "Edición Limitada",
  all: "Todas las Colecciones",
}

const collectionDescriptions: Record<CollectionType, string> = {
  classic: "Elegancia atemporal y sofisticación en cada detalle",
  sport: "Precisión y resistencia para los más exigentes",
  limited: "Exclusividad absoluta en piezas únicas",
  all: "Descubre toda nuestra colección de alta relojería",
}

export default async function CatalogPage({ params }: { params: Promise<{ collection: string }> }) {
  const resolvedParams = await params
  const collection = resolvedParams.collection as CollectionType

  return <CatalogClient collection={collection} />
}
