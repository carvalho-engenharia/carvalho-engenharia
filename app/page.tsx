import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PaymentProcess } from "@/components/payment-process"
import { Services } from "@/components/services"
import { PainPoints } from "@/components/pain-points"
import { RequiredDocuments } from "@/components/required-documents"
import { WhyUs } from "@/components/why-us"
import { Gallery } from "@/components/gallery"
import { Sobre } from "@/components/sobre"
import { CTASection } from "@/components/cta-section"
import GoogleReviews from "@/components/google-reviews"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Navbar />
      <Hero />
      <PaymentProcess />
      <Services />
      <PainPoints />
      <RequiredDocuments />
      <WhyUs />
      <Gallery />
      <Sobre />
      <CTASection />
      <GoogleReviews />
      <Footer />
    </main>
  )
}
