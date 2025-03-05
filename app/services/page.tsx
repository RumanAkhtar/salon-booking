import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Clock, Scissors, Paintbrush, Sparkles, Zap } from "lucide-react"

const services = [
  {
    title: "Women's Haircut",
    description: "Precision cut tailored to your face shape and hair type.",
    icon: Scissors,
    price: "$45",
    duration: "45 min",
  },
  {
    title: "Men's Haircut",
    description: "Classic or modern styles with attention to detail.",
    icon: Scissors,
    price: "$30",
    duration: "30 min",
  },
  {
    title: "Children's Haircut",
    description: "Gentle and patient service for our youngest clients.",
    icon: Scissors,
    price: "$25",
    duration: "30 min",
  },
  {
    title: "Full Color",
    description: "Complete color transformation with premium products.",
    icon: Paintbrush,
    price: "$85",
    duration: "120 min",
  },
  {
    title: "Highlights",
    description: "Dimensional color to enhance your natural look.",
    icon: Paintbrush,
    price: "$95",
    duration: "150 min",
  },
  {
    title: "Balayage",
    description: "Hand-painted highlights for a natural, sun-kissed look.",
    icon: Paintbrush,
    price: "$120",
    duration: "180 min",
  },
  {
    title: "Blowout",
    description: "Professional blow dry styling for any occasion.",
    icon: Sparkles,
    price: "$45",
    duration: "45 min",
  },
  {
    title: "Special Occasion",
    description: "Elegant updos and styling for weddings and events.",
    icon: Sparkles,
    price: "$75",
    duration: "60 min",
  },
  {
    title: "Deep Conditioning",
    description: "Intensive treatment to restore moisture and shine.",
    icon: Zap,
    price: "$35",
    duration: "30 min",
  },
  {
    title: "Keratin Treatment",
    description: "Smoothing treatment to reduce frizz and add shine.",
    icon: Zap,
    price: "$150",
    duration: "120 min",
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We offer a wide range of professional hair services to meet your needs. All services include a consultation,
          shampoo, and style.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="h-full transition-all hover:shadow-md">
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
        ))}
      </div>
    </div>
  )
}

