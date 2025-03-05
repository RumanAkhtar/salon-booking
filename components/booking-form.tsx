"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const services = [
  { id: "haircut", name: "Haircut", price: "$30" },
  { id: "coloring", name: "Coloring", price: "$75" },
  { id: "styling", name: "Styling", price: "$45" },
  { id: "treatment", name: "Treatment", price: "$55" },
]

const stylists = [
  { id: "alex", name: "Alex Johnson" },
  { id: "jamie", name: "Jamie Smith" },
  { id: "taylor", name: "Taylor Brown" },
  { id: "jordan", name: "Jordan Davis" },
]

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

export default function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: "",
    stylist: "",
    date: null as Date | null,
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  })

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit the form data to the backend
      console.log("Form submitted:", formData)
      setStep(4) // Success step
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Book Your Appointment</CardTitle>
        <CardDescription>
          {step === 1 && "Select your service and stylist"}
          {step === 2 && "Choose your preferred date and time"}
          {step === 3 && "Enter your contact information"}
          {step === 4 && "Booking confirmed!"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="service">Select Service</Label>
                <RadioGroup
                  id="service"
                  value={formData.service}
                  onValueChange={(value) => handleChange("service", value)}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  {services.map((service) => (
                    <div key={service.id}>
                      <RadioGroupItem value={service.id} id={service.id} className="peer sr-only" />
                      <Label
                        htmlFor={service.id}
                        className="flex cursor-pointer flex-col justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="flex justify-between">
                          <span>{service.name}</span>
                          <span className="font-semibold">{service.price}</span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label htmlFor="stylist">Select Stylist</Label>
                <Select value={formData.stylist} onValueChange={(value) => handleChange("stylist", value)}>
                  <SelectTrigger id="stylist">
                    <SelectValue placeholder="Select a stylist" />
                  </SelectTrigger>
                  <SelectContent>
                    {stylists.map((stylist) => (
                      <SelectItem key={stylist.id} value={stylist.id}>
                        {stylist.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <Label>Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(date) => {
                        setDate(date)
                        handleChange("date", date)
                      }}
                      initialFocus
                      disabled={(date) => {
                        // Disable past dates and Sundays
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        return date < today || date.getDay() === 0
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-4">
                <Label>Select Time</Label>
                <RadioGroup
                  value={formData.time}
                  onValueChange={(value) => handleChange("time", value)}
                  className="grid grid-cols-3 gap-2"
                >
                  {timeSlots.map((time) => (
                    <div key={time}>
                      <RadioGroupItem value={time} id={`time-${time}`} className="peer sr-only" />
                      <Label
                        htmlFor={`time-${time}`}
                        className="flex cursor-pointer items-center justify-center rounded-md border border-muted bg-popover p-2 text-center text-sm hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/10"
                      >
                        {time}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requests or notes for your stylist"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold">Booking Confirmed!</h3>
              <p className="mt-2 text-muted-foreground">
                Your appointment has been scheduled successfully. We've sent a confirmation email to {formData.email}.
              </p>
              <div className="mt-6 grid w-full max-w-sm gap-2">
                <div className="rounded-lg border p-3">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm font-medium">Service:</div>
                    <div className="text-sm text-right">{services.find((s) => s.id === formData.service)?.name}</div>
                    <div className="text-sm font-medium">Stylist:</div>
                    <div className="text-sm text-right">{stylists.find((s) => s.id === formData.stylist)?.name}</div>
                    <div className="text-sm font-medium">Date:</div>
                    <div className="text-sm text-right">{formData.date ? format(formData.date, "PPP") : ""}</div>
                    <div className="text-sm font-medium">Time:</div>
                    <div className="text-sm text-right">{formData.time}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </CardContent>
      {step < 4 && (
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          <Button type="submit" onClick={handleSubmit}>
            {step < 3 ? "Continue" : "Confirm Booking"}
          </Button>
        </CardFooter>
      )}
      {step === 4 && (
        <CardFooter>
          <Button className="w-full" onClick={() => (window.location.href = "/")}>
            Return to Home
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

