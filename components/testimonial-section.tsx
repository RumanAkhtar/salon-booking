"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    content:
      "I've been coming to this salon for over a year now and I'm always impressed with the results. The stylists are professional, friendly, and really listen to what you want.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "First-time Customer",
    content:
      "As someone who's always nervous about trying new salons, I was pleasantly surprised. My stylist took the time to understand exactly what I wanted and delivered perfectly.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Monthly Client",
    content:
      "The atmosphere is so welcoming and the service is consistently excellent. I wouldn't trust my hair with anyone else!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-muted-foreground" />
                    ))}
                  </div>
                  <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
                  <div className="mt-6 flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

