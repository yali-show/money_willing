"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CatalogFilters } from "@/components/catalog-filters"
import { WatchCard } from "@/components/watch-card"
import { getWatchesByCollection, sortWatches, filterWatches } from "@/lib/watches-data"
import type { CollectionType, SortOption } from "@/lib/types"

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

interface CatalogClientProps {
  collection: CollectionType
}

export function CatalogClient({ collection }: CatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("newest")
  const [minPrice, setMinPrice] = useState<number | undefined>()
  const [maxPrice, setMaxPrice] = useState<number | undefined>()
  const [inStockOnly, setInStockOnly] = useState<boolean | undefined>()

  const filteredAndSortedWatches = useMemo(() => {
    let watches = getWatchesByCollection(collection)

    watches = filterWatches(watches, {
      search: searchQuery,
      minPrice,
      maxPrice,
      inStock: inStockOnly,
    })

    watches = sortWatches(watches, sortBy)

    return watches
  }, [collection, searchQuery, sortBy, minPrice, maxPrice, inStockOnly])

  const handlePriceRangeChange = (min: number | undefined, max: number | undefined) => {
    setMinPrice(min)
    setMaxPrice(max)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              {collectionTitles[collection]}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              {collectionDescriptions[collection]}
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <CatalogFilters
              onSearchChange={setSearchQuery}
              onSortChange={setSortBy}
              onPriceRangeChange={handlePriceRangeChange}
              onStockChange={setInStockOnly}
              searchValue={searchQuery}
              sortValue={sortBy}
            />
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredAndSortedWatches.length} {filteredAndSortedWatches.length === 1 ? "reloj" : "relojes"}{" "}
              {filteredAndSortedWatches.length === 0 ? "encontrados" : "disponibles"}
            </p>
          </div>

          {/* Watch Grid */}
          {filteredAndSortedWatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedWatches.map((watch) => (
                <WatchCard key={watch.id} watch={watch} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No se encontraron relojes con estos criterios</p>
              <p className="text-muted-foreground">Intenta ajustar los filtros de búsqueda</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
