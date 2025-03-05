import BookingForm from "@/components/booking-form"

export default function BookingPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Book Your Appointment</h1>
          <p className="mt-4 text-lg text-muted-foreground">Select your preferred service, stylist, date, and time.</p>
        </div>
        <BookingForm />
      </div>
    </div>
  )
}

