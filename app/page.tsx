import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PainPoints } from "@/components/pain-points"
import { TechStack } from "@/components/tech-stack"
import MarqueeLogos from "@/components/marquee-logos"
import { WhyUs } from "@/components/why-us"
import { PricingPlans } from "@/components/pricing-plans"
import { Sobre } from "@/components/sobre"
import { Terminal } from "@/components/terminal"
import { CTASection } from "@/components/cta-section"
import GoogleReviews from "@/components/google-reviews"
import ClientLogos from "@/components/client-logos"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <PainPoints />
      <TechStack />
      <MarqueeLogos />
      <WhyUs />
      <PricingPlans />
      <Sobre />
      <Terminal />
      <CTASection />
      <ClientLogos />
      <GoogleReviews />
      <Footer />
    </main>
  )
}
