"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formState)

    // Show success message
    setIsSubmitted(true)

    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 7:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 7:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 7:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 8:00 PM" },
    { day: "Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We'd love to hear from you. Reach out with any questions or to schedule an appointment.
          </p>
        </motion.div>
      </section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Have questions about our services or want to schedule an appointment? Contact us using the form or the
            information below.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Location</h3>
                <address className="not-italic text-muted-foreground">
                  123 Styling Street
                  <br />
                  Beauty City, BC 12345
                </address>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+15551234567" className="hover:text-primary">
                    (555) 123-4567
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:info@salonstyling.com" className="hover:text-primary">
                    info@salonstyling.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Business Hours</h3>
                <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span className="font-medium">{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted && (
                <Alert className="mb-6 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>Your message has been sent. We'll get back to you soon.</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Map Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Find Us</h2>
        <div className="mt-6 overflow-hidden rounded-lg border">
          <div className="aspect-video w-full">
            {/* Replace with your actual map embed code */}
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <p className="text-muted-foreground">Map Embed Goes Here</p>
              {/* Example of how to embed a Google Map:
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zNDUnMzAuMCJOIDczwrA1OSczMC4wIlc!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

