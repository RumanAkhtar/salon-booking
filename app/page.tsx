import HeroSection from "@/components/hero-section"
import ServicesList from "@/components/services-list"
import TestimonialSection from "@/components/testimonial-section"
import FeatureSection from "@/components/feature-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <ServicesList />
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
    </div>
  )
}

