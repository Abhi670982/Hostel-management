import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import AmenitiesSection from "@/components/sections/AmenitiesSection"
import FeaturedRoomsSection from "@/components/sections/FeaturedRoomsSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import CTASection from "@/components/sections/CTASection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AmenitiesSection />
        <FeaturedRoomsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
