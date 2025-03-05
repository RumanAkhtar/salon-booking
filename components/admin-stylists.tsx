"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Edit, Trash2, Plus, Calendar, User } from "lucide-react"
import Image from "next/image"

const stylists = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Senior Stylist",
    email: "alex.j@salon.com",
    phone: "(555) 123-4567",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Jamie Smith",
    role: "Color Specialist",
    email: "jamie.s@salon.com",
    phone: "(555) 234-5678",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Taylor Brown",
    role: "Cutting Expert",
    email: "taylor.b@salon.com",
    phone: "(555) 345-6789",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    name: "Jordan Davis",
    role: "Styling Specialist",
    email: "jordan.d@salon.com",
    phone: "(555) 456-7890",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function AdminStylists() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredStylists, setFilteredStylists] = useState(stylists)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    if (term.trim() === "") {
      setFilteredStylists(stylists)
    } else {
      const filtered = stylists.filter(
        (stylist) =>
          stylist.name.toLowerCase().includes(term.toLowerCase()) ||
          stylist.role.toLowerCase().includes(term.toLowerCase()) ||
          stylist.email.toLowerCase().includes(term.toLowerCase()),
      )
      setFilteredStylists(filtered)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative flex w-full max-w-sm items-center">
          <Input
            type="search"
            placeholder="Search stylists..."
            className="pr-10"
            value={searchTerm}
            onChange={handleSearch}
          />
          <User className="absolute right-3 h-4 w-4 text-muted-foreground" />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Stylist
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredStylists.map((stylist) => (
          <Card key={stylist.id} className="overflow-hidden">
            <div className="aspect-[4/3] bg-muted">
              <Image
                src={stylist.image || "/placeholder.svg"}
                alt={stylist.name}
                width={300}
                height={225}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-1">
                <h3 className="font-semibold">{stylist.name}</h3>
                <p className="text-sm text-primary">{stylist.role}</p>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>{stylist.email}</p>
                <p>{stylist.phone}</p>
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Button>
                <div className="space-x-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

