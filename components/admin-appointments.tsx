"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { format } from "date-fns"
import { Edit, Trash2 } from "lucide-react"

const appointments = [
  {
    id: "1",
    customer: "Sarah Johnson",
    service: "Women's Haircut",
    stylist: "Alex Johnson",
    date: new Date(2023, 5, 15, 10, 0),
    status: "Confirmed",
  },
  {
    id: "2",
    customer: "Michael Chen",
    service: "Men's Haircut",
    stylist: "Jamie Smith",
    date: new Date(2023, 5, 15, 11, 30),
    status: "Confirmed",
  },
  {
    id: "3",
    customer: "Emily Rodriguez",
    service: "Full Color",
    stylist: "Taylor Brown",
    date: new Date(2023, 5, 15, 13, 0),
    status: "Pending",
  },
  {
    id: "4",
    customer: "David Kim",
    service: "Beard Trim",
    stylist: "Jordan Davis",
    date: new Date(2023, 5, 15, 14, 30),
    status: "Cancelled",
  },
  {
    id: "5",
    customer: "Jessica Lee",
    service: "Balayage",
    stylist: "Alex Johnson",
    date: new Date(2023, 5, 16, 10, 0),
    status: "Confirmed",
  },
]

export default function AdminAppointments() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [filteredAppointments, setFilteredAppointments] = useState(appointments)

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate) {
      const filtered = appointments.filter(
        (appointment) =>
          appointment.date.getDate() === selectedDate.getDate() &&
          appointment.date.getMonth() === selectedDate.getMonth() &&
          appointment.date.getFullYear() === selectedDate.getFullYear(),
      )
      setFilteredAppointments(filtered)
    } else {
      setFilteredAppointments(appointments)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>Select a date to view appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar mode="single" selected={date} onSelect={handleDateChange} className="rounded-md border" />
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Appointments</CardTitle>
          <CardDescription>
            {date ? `Showing appointments for ${format(date, "PPP")}` : "All appointments"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Stylist</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.customer}</TableCell>
                    <TableCell>{appointment.service}</TableCell>
                    <TableCell>{appointment.stylist}</TableCell>
                    <TableCell>{format(appointment.date, "h:mm a")}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : appointment.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No appointments found for this date.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

