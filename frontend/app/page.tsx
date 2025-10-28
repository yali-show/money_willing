import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CollectionsSection } from "@/components/collections-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { FeaturedProductSection } from "@/components/featured-product-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CollectionsSection />
      <PhilosophySection />
      <FeaturedProductSection />
      <Footer />
    </main>
  )
}
