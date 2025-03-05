"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Eye, Mail, Phone } from "lucide-react"

const customers = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 123-4567",
    appointments: 8,
    lastVisit: "2023-05-15",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.c@example.com",
    phone: "(555) 234-5678",
    appointments: 3,
    lastVisit: "2023-05-10",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    phone: "(555) 345-6789",
    appointments: 12,
    lastVisit: "2023-05-05",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.k@example.com",
    phone: "(555) 456-7890",
    appointments: 1,
    lastVisit: "2023-04-28",
  },
  {
    id: "5",
    name: "Jessica Lee",
    email: "jessica.l@example.com",
    phone: "(555) 567-8901",
    appointments: 5,
    lastVisit: "2023-04-20",
  },
  {
    id: "6",
    name: "Robert Taylor",
    email: "robert.t@example.com",
    phone: "(555) 678-9012",
    appointments: 7,
    lastVisit: "2023-04-15",
  },
  {
    id: "7",
    name: "Amanda Wilson",
    email: "amanda.w@example.com",
    phone: "(555) 789-0123",
    appointments: 2,
    lastVisit: "2023-04-10",
  },
  {
    id: "8",
    name: "James Brown",
    email: "james.b@example.com",
    phone: "(555) 890-1234",
    appointments: 4,
    lastVisit: "2023-04-05",
  },
]

export default function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCustomers, setFilteredCustomers] = useState(customers)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    if (term.trim() === "") {
      setFilteredCustomers(customers)
    } else {
      const filtered = customers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(term.toLowerCase()) ||
          customer.email.toLowerCase().includes(term.toLowerCase()) ||
          customer.phone.includes(term),
      )
      setFilteredCustomers(filtered)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search customers..."
            className="pl-8"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Button variant="outline">Export</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Appointments</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-sm">
                      <Mail className="mr-1 h-3 w-3" />
                      {customer.email}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="mr-1 h-3 w-3" />
                      {customer.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{customer.appointments}</TableCell>
                <TableCell>{formatDate(customer.lastVisit)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View Details</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

