"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scissors, Paintbrush, Sparkles, Clock } from "lucide-react"

const services = [
  {
    title: "Haircuts",
    description: "Professional haircuts tailored to your style and face shape.",
    icon: Scissors,
    price: "From $30",
    duration: "45 min",
  },
  {
    title: "Coloring",
    description: "Full color, highlights, balayage, and more by expert colorists.",
    icon: Paintbrush,
    price: "From $75",
    duration: "120 min",
  },
  {
    title: "Styling",
    description: "Blowouts, updos, and special occasion styling for any event.",
    icon: Sparkles,
    price: "From $45",
    duration: "60 min",
  },
  {
    title: "Treatments",
    description: "Nourishing treatments to repair and revitalize your hair.",
    icon: Clock,
    price: "From $55",
    duration: "45 min",
  },
]

export default function ServicesList() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a wide range of professional hair services to meet your needs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">{service.price}</div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {service.duration}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/booking" className="w-full">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

