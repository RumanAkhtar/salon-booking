"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Heart, Sparkles } from "lucide-react"

const stylists = [
  {
    name: "Alex Johnson",
    role: "Senior Stylist & Founder",
    bio: "With over 15 years of experience, Alex founded our salon with a vision to create a space where everyone feels welcome and leaves looking their best.",
    image: "https://images.unsplash.com/photo-1618049049816-43a00d5b0c3d?q=80&w=3080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jamie Smith",
    role: "Color Specialist",
    bio: "Jamie has a natural eye for color and specializes in balayage and creative coloring techniques. Their work has been featured in several fashion magazines.",
    image: "https://images.unsplash.com/photo-1587776535733-b4c80a99ef82?q=80&w=2209&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taylor Brown",
    role: "Cutting Expert",
    bio: "Known for precision cuts and attention to detail, Taylor can transform any hair type into a masterpiece. They're constantly learning new techniques to bring to our clients.",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxoYWlyY3V0fGVufDB8fDB8fHww",

  },
  {
    name: "Jordan Davis",
    role: "Styling Specialist",
    bio: "Jordan excels in special occasion styling and updos. Their work has been featured in weddings and events throughout the city.",
    image: "https://images.unsplash.com/photo-1584029307290-2acd5258bde4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
]

const values = [
  {
    title: "Quality Service",
    description: "We use only premium products and continuously train our stylists in the latest techniques.",
    icon: Award,
  },
  {
    title: "Welcoming Environment",
    description: "Our salon is designed to be a relaxing space where everyone feels comfortable and valued.",
    icon: Heart,
  },
  {
    title: "Attention to Detail",
    description: "We take the time to understand your needs and preferences to deliver the perfect look.",
    icon: Sparkles,
  },
  {
    title: "Respect for Your Time",
    description: "We value punctuality and efficiency without compromising on quality.",
    icon: Clock,
  },
]

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Our Salon</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're passionate about helping you look and feel your best through exceptional hair care.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Story</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Founded in 2010, our salon began with a simple mission: to provide exceptional hair care in a welcoming
                environment. What started as a small studio with just two chairs has grown into a full-service salon
                with a team of talented stylists.
              </p>
              <p>
                Over the years, we've built a reputation for quality, creativity, and personalized service. We believe
                that a great haircut is more than just a service—it's an experience that should leave you feeling
                confident and refreshed.
              </p>
              <p>
                Today, we continue to grow and evolve, but our core values remain the same. We're committed to using the
                best products, staying current with industry trends, and treating every client with the attention they
                deserve.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1677444546740-7092c86ac54d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Salon interior"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-16 bg-muted/50 py-12 -mx-4 px-4 sm:-mx-6 sm:px-6 md:rounded-lg">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Values</h2>
          <p className="mt-4 text-muted-foreground">These core principles guide everything we do at our salon.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium">{value.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Meet Our Team</h2>
          <p className="mt-4 text-muted-foreground">
            Our talented stylists are passionate about their craft and dedicated to your satisfaction.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stylists.map((stylist, index) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={stylist.image || "/placeholder.svg"}
                    alt={stylist.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{stylist.name}</h3>
                  <p className="text-sm text-primary">{stylist.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stylist.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="mb-16 bg-muted/50 py-12 -mx-4 px-4 sm:-mx-6 sm:px-6 md:rounded-lg">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Awards & Recognition</h2>
          <p className="mt-4 text-muted-foreground">We're proud to be recognized for our commitment to excellence.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[1, 2, 3, 4].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background shadow-md">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium">Best Salon {2020 + index}</h3>
              <p className="mt-1 text-sm text-muted-foreground">City Style Awards</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

