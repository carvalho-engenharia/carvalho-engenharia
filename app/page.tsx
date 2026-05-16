import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PainPoints } from "@/components/pain-points"
import { WhyUs } from "@/components/why-us"
import { Sobre } from "@/components/sobre"
import { Testimonials } from "@/components/terminal"
import { CTASection } from "@/components/cta-section"
import GoogleReviews from "@/components/google-reviews"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <PainPoints />
      <WhyUs />
      <Sobre />
      <Testimonials />
      <CTASection />
      <GoogleReviews />
      <Footer />
    </main>
  )
}
