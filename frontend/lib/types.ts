export interface Watch {
  id: string
  name: string
  collection: "classic" | "sport" | "limited"
  price: number
  description: string
  features: string[]
  specifications: {
    movement: string
    caseMaterial: string
    caseDiameter: string
    waterResistance: string
    crystal: string
    strap: string
  }
  images: {
    main: string
    gallery: string[]
  }
  inStock: boolean
  limited?: {
    total: number
    remaining: number
  }
}

export type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc" | "newest"
export type CollectionType = "classic" | "sport" | "limited" | "all"
