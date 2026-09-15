import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PaymentProcess } from "@/components/payment-process"
import { ServicesSummary } from "@/components/services-summary"
import { PainPoints } from "@/components/pain-points"
import { PortfolioSummary } from "@/components/portfolio-summary"
import { WhyUs } from "@/components/why-us"
import { SobreResumo } from "@/components/sobre-resumo"
import { CTASection } from "@/components/cta-section"
import GoogleReviews from "@/components/google-reviews"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Navbar />
      <Hero />
      <PaymentProcess />
      <ServicesSummary />
      <PainPoints />
      <GoogleReviews />
      <PortfolioSummary />
      <WhyUs />
      <SobreResumo />
      <CTASection />
      <Footer />
    </main>
  )
}
