"use client"

import { useState, useEffect } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import type { SortOption } from "@/lib/types"

interface CatalogFiltersProps {
  onSearchChange: (search: string) => void
  onSortChange: (sort: SortOption) => void
  onPriceRangeChange: (min: number | undefined, max: number | undefined) => void
  onStockChange: (inStock: boolean | undefined) => void
  searchValue: string
  sortValue: SortOption
}

export function CatalogFilters({
  onSearchChange,
  onSortChange,
  onPriceRangeChange,
  onStockChange,
  searchValue,
  sortValue,
}: CatalogFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")
  const [stockOnly, setStockOnly] = useState(false)

  useEffect(() => {
    const min = minPrice ? Number.parseFloat(minPrice) : undefined
    const max = maxPrice ? Number.parseFloat(maxPrice) : undefined
    onPriceRangeChange(min, max)
  }, [minPrice, maxPrice, onPriceRangeChange])

  const handleStockChange = (checked: boolean) => {
    setStockOnly(checked)
    onStockChange(checked ? true : undefined)
  }

  const clearFilters = () => {
    setMinPrice("")
    setMaxPrice("")
    setStockOnly(false)
    onSearchChange("")
    onPriceRangeChange(undefined, undefined)
    onStockChange(undefined)
  }

  return (
    <div className="space-y-6">
      {/* Search and Sort Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por nombre o descripción..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <Select value={sortValue} onValueChange={(value) => onSortChange(value as SortOption)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Más recientes</SelectItem>
              <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
              <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className={showFilters ? "bg-primary text-primary-foreground" : ""}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="border border-border rounded-lg p-6 space-y-6 bg-secondary/20 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Filtros Avanzados</h3>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Limpiar filtros
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Range */}
            <div className="space-y-3">
              <Label>Rango de Precio (€)</Label>
              <div className="flex gap-2 items-center">
                <Input
                  type="number"
                  placeholder="Mínimo"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full"
                />
                <span className="text-muted-foreground">-</span>
                <Input
                  type="number"
                  placeholder="Máximo"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Stock Filter */}
            <div className="space-y-3">
              <Label>Disponibilidad</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="stock" checked={stockOnly} onCheckedChange={handleStockChange} />
                <label
                  htmlFor="stock"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Solo mostrar en stock
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
