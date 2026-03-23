import { useState } from "react"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FooterSection } from "@/components/sections/footer-section"
import { BookingModal } from "@/components/booking-modal"

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [defaultService, setDefaultService] = useState("")

  const openBooking = (service = "") => {
    setDefaultService(service)
    setIsBookingOpen(true)
  }

  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <HeroSection onBooking={openBooking} />
        <ManifestoSection />
        <FeaturesSection onBooking={openBooking} />
        <ShowcaseSection />
        <CarouselSection />
        <InsightsSection />
        <PricingSection onBooking={openBooking} />
        <FooterSection />
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          defaultService={defaultService}
        />
      </main>
    </LenisProvider>
  )
}

export default Index
