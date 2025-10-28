import type { Watch, CollectionType, SortOption } from "./types"

export const watches: Watch[] = [
  // Classic Collection
  {
    id: "classic-heritage-gold",
    name: "Heritage Gold",
    collection: "classic",
    price: 45000,
    description:
      "Una obra maestra de la relojería clásica. El Heritage Gold combina elegancia atemporal con precisión suiza excepcional.",
    features: [
      "Movimiento automático suizo",
      "Caja de oro amarillo de 18k",
      "Esfera guilloché hecha a mano",
      "Correa de cocodrilo auténtico",
      "Reserva de marcha de 72 horas",
    ],
    specifications: {
      movement: "Automático Calibre HG-001",
      caseMaterial: "Oro amarillo 18k",
      caseDiameter: "40mm",
      waterResistance: "30m",
      crystal: "Zafiro con tratamiento antirreflejos",
      strap: "Cocodrilo auténtico con hebilla de oro",
    },
    images: {
      main: "/luxury-watch-close-up-dark-background.jpg",
      gallery: [
        "/luxury-watch-close-up-dark-background.jpg",
        "/luxury-watch-close-up-dark-background.jpg",
        "/luxury-watch-close-up-dark-background.jpg",
      ],
    },
    inStock: true,
  },
  {
    id: "classic-elegance-platinum",
    name: "Elegance Platinum",
    collection: "classic",
    price: 68000,
    description: "Refinamiento absoluto en platino. Un reloj que define la sofisticación moderna.",
    features: [
      "Caja de platino 950",
      "Movimiento de manufactura",
      "Complicación de fase lunar",
      "Esfera esmaltada grand feu",
      "Edición numerada",
    ],
    specifications: {
      movement: "Automático Calibre EP-002",
      caseMaterial: "Platino 950",
      caseDiameter: "42mm",
      waterResistance: "50m",
      crystal: "Zafiro doble cara",
      strap: "Piel de becerro con hebilla de platino",
    },
    images: {
      main: "/luxury-watch-close-up-dark-background.jpg",
      gallery: ["/luxury-watch-close-up-dark-background.jpg", "/luxury-watch-close-up-dark-background.jpg"],
    },
    inStock: true,
  },
  {
    id: "classic-royal-rose",
    name: "Royal Rose",
    collection: "classic",
    price: 52000,
    description: "Elegancia en oro rosa con detalles exquisitos y acabados impecables.",
    features: [
      "Oro rosa de 18k",
      "Indicador de reserva de marcha",
      "Segundero pequeño",
      "Acabado perlado en la esfera",
      "Certificado de cronómetro",
    ],
    specifications: {
      movement: "Automático Calibre RR-003",
      caseMaterial: "Oro rosa 18k",
      caseDiameter: "39mm",
      waterResistance: "30m",
      crystal: "Zafiro abombado",
      strap: "Cocodrilo marrón con hebilla de oro rosa",
    },
    images: {
      main: "/luxury-watch-close-up-dark-background.jpg",
      gallery: ["/luxury-watch-close-up-dark-background.jpg", "/luxury-watch-close-up-dark-background.jpg"],
    },
    inStock: true,
  },

  // Sport Collection
  {
    id: "sport-diver-pro",
    name: "Diver Pro",
    collection: "sport",
    price: 38000,
    description: "Diseñado para las profundidades. Resistencia extrema con estilo deportivo refinado.",
    features: [
      "Resistencia al agua 300m",
      "Válvula de helio",
      "Bisel unidireccional de cerámica",
      "Luminiscencia Super-LumiNova",
      "Brazalete de acero con extensión de buceo",
    ],
    specifications: {
      movement: "Automático Calibre DP-100",
      caseMaterial: "Acero inoxidable 904L",
      caseDiameter: "44mm",
      waterResistance: "300m",
      crystal: "Zafiro con lupa de fecha",
      strap: "Brazalete de acero con cierre de seguridad",
    },
    images: {
      main: "/luxury-watch-close-up-dark-background.jpg",
      gallery: ["/luxury-watch-close-up-dark-background.jpg", "/luxury-watch-close-up-dark-background.jpg"],
    },
    inStock: true,
  },
  {
    id: "sport-chronograph-racing",
    name: "Chronograph Racing",
    collection: "sport",
    price: 42000,
    description: "Inspirado en el automovilismo de competición. Precisión cronométrica al límite.",
    features: [
      "Cronógrafo flyback",
      "Taquímetro en el bisel",
      "Caja de titanio ultraligera",
      "Movimiento de alta frecuencia",
      "Correa de caucho perforado",
    ],
    specifications: {
      movement: "Automático Cronógrafo Calibre CR-200",
      caseMaterial: "Titanio grado 5",
      caseDiameter: "43mm",
      waterResistance: "100m",
      crystal: "Zafiro plano",
      strap: "Caucho con patrón racing",
    },
    images: {
      main: "/luxury-watch-close-up-dark-background.jpg",
      gallery: ["/luxury-watch-close-up-dark-background.jpg", "/luxury-watch-close-up-dark-background.jpg"],
    },
    inStock: true,
  },
  {
    id: "sport-aviator-gmt",
    name: "Aviator GMT",
    collection: "sport",
    price: 35000,
    description: "Para los viajeros del mundo. Función GMT con diseño inspirado en la aviación.",
    features: [
      "Función GMT de doble zona horaria",
      "Bisel bidireccional 24 horas",
      "Corona de rosca",
      "Esfera con índices luminiscentes",
      "Brazalete de acero pulido y satinado",
    ],
    specifications: {
      movement: "Automático GMT Calibre AG-150",
      caseMaterial: "Acero inoxidable 316L",
      caseDiameter: "42mm",
      waterResistance: "200m",
      crystal: "Zafiro antirreflejos",
      strap: "Brazalete de acero oyster",
    },
    images: {
      main: "/luxury-watch-close-up-dark-background.jpg",
      gallery: ["/luxury-watch-close-up-dark-background.jpg", "/luxury-watch-close-up-dark-background.jpg"],
    },
    inStock: true,
  },

  // Limited Edition Collection
  {
    id: "limited-tourbillon-sapphire",
    name: "Tourbillon Sapphire",
    collection: "limited",
    price: 185000,
    description: "Una pieza de alta relojería con tourbillon visible. Solo 25 unidades en el mundo.",
    features: [
      "Tourbillon volante a las 6",
      "Caja de zafiro transparente",
      "Movimiento esqueletizado",
      "Puente de titanio",
      "Certificado de autenticidad individual",
    ],
    specifications: {
      movement: "Manual Tourbillon Calibre TS-001",
      caseMaterial: "Zafiro y titanio",
      caseDiameter: "45mm",
      waterResistance: "30m",
      crystal: "Zafiro en caja completa",
      strap: "Cocodrilo negro con hebilla de titanio",
    },
    images: {
      main: "/luxury-watch-close-up-dark-background.jpg",
      gallery: ["/luxury-watch-close-up-dark-background.jpg", "/luxury-watch-close-up-dark-background.jpg"],
    },
    inStock: true,
    limited: {
      total: 25,
      remaining: 7,
    },
  },
  {
    id: "limited-perpetual-calendar",
    name: "Perpetual Calendar",
    collection: "limited",
    price: 125000,
    description: "Calendario perpetuo con indicación de año bisiesto. Edición limitada a 50 piezas.",
    features: [
      "Calendario perpetuo completo",
      "Indicación de fase lunar",
      "Año bisiesto",
      "Caja de oro blanco",
      "Esfera esmaltada azul",
    ],
    specifications: {
      movement: "Automático Perpetuo Calibre PC-500",
      caseMaterial: "Oro blanco 18k",
      caseDiameter: "41mm",
      waterResistance: "30m",
      crystal: "Zafiro con fondo transparente",
      strap: "Cocodrilo azul con hebilla de oro blanco",
    },
    images: {
      main: "/luxury-watch-close-up-dark-background.jpg",
      gallery: ["/luxury-watch-close-up-dark-background.jpg", "/luxury-watch-close-up-dark-background.jpg"],
    },
    inStock: true,
    limited: {
      total: 50,
      remaining: 12,
    },
  },
  {
    id: "limited-minute-repeater",
    name: "Minute Repeater",
    collection: "limited",
    price: 220000,
    description: "La complicación más prestigiosa: repetición de minutos con sonería catedral. Solo 15 unidades.",
    features: [
      "Repetición de minutos",
      "Sonería catedral",
      "Caja de platino",
      "Movimiento completamente decorado a mano",
      "Esfera grand feu",
    ],
    specifications: {
      movement: "Manual Repetición Calibre MR-888",
      caseMaterial: "Platino 950",
      caseDiameter: "43mm",
      waterResistance: "30m",
      crystal: "Zafiro con fondo de exhibición",
      strap: "Cocodrilo negro con hebilla de platino",
    },
    images: {
      main: "/luxury-watch-close-up-dark-background.jpg",
      gallery: ["/luxury-watch-close-up-dark-background.jpg", "/luxury-watch-close-up-dark-background.jpg"],
    },
    inStock: true,
    limited: {
      total: 15,
      remaining: 3,
    },
  },
]

export function getWatchesByCollection(collection: CollectionType): Watch[] {
  if (collection === "all") return watches
  return watches.filter((watch) => watch.collection === collection)
}

export function getWatchById(id: string): Watch | undefined {
  return watches.find((watch) => watch.id === id)
}

export function sortWatches(watches: Watch[], sortBy: SortOption): Watch[] {
  const sorted = [...watches]

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price)
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    case "newest":
      return sorted.reverse()
    default:
      return sorted
  }
}

export function filterWatches(
  watches: Watch[],
  filters: {
    search?: string
    minPrice?: number
    maxPrice?: number
    inStock?: boolean
  },
): Watch[] {
  let filtered = [...watches]

  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filtered = filtered.filter(
      (watch) =>
        watch.name.toLowerCase().includes(searchLower) || watch.description.toLowerCase().includes(searchLower),
    )
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((watch) => watch.price >= filters.minPrice!)
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((watch) => watch.price <= filters.maxPrice!)
  }

  if (filters.inStock !== undefined) {
    filtered = filtered.filter((watch) => watch.inStock === filters.inStock)
  }

  return filtered
}
