"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16">
      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-primary">Professional Styling</span>
              <span className="block">For Everyone</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Experience the ultimate in hair care and styling with our team of expert stylists. Book your appointment
              today and transform your look.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/booking">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative mx-auto max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Salon interior"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

