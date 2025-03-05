"use client"

import { motion } from "framer-motion"
import { Award, Clock, MapPin, Users } from "lucide-react"

const features = [
  {
    name: "Expert Stylists",
    description: "Our team of professional stylists are trained in the latest techniques and trends.",
    icon: Award,
  },
  {
    name: "Convenient Location",
    description: "Easily accessible location with ample parking for your convenience.",
    icon: MapPin,
  },
  {
    name: "Flexible Hours",
    description: "Open 7 days a week with early and late appointments available.",
    icon: Clock,
  },
  {
    name: "Personalized Service",
    description: "We take the time to understand your needs and preferences for the perfect look.",
    icon: Users,
  },
]

export default function FeatureSection() {
  return (
    <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're committed to providing the best salon experience possible.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium">{feature.name}</h3>
              <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

