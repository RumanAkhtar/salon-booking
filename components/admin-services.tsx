"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2, Plus } from "lucide-react"

const initialServices = [
  { id: "1", name: "Women's Haircut", price: "$45", duration: "45 min" },
  { id: "2", name: "Men's Haircut", price: "$30", duration: "30 min" },
  { id: "3", name: "Children's Haircut", price: "$25", duration: "30 min" },
  { id: "4", name: "Full Color", price: "$85", duration: "120 min" },
  { id: "5", name: "Highlights", price: "$95", duration: "150 min" },
  { id: "6", name: "Balayage", price: "$120", duration: "180 min" },
  { id: "7", name: "Blowout", price: "$45", duration: "45 min" },
  { id: "8", name: "Special Occasion", price: "$75", duration: "60 min" },
]

export default function AdminServices() {
  const [services, setServices] = useState(initialServices)
  const [isEditing, setIsEditing] = useState(false)
  const [currentService, setCurrentService] = useState({
    id: "",
    name: "",
    price: "",
    duration: "",
  })

  const handleEdit = (service: typeof currentService) => {
    setCurrentService(service)
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    setServices(services.filter((service) => service.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      setServices(services.map((service) => (service.id === currentService.id ? currentService : service)))
    } else {
      const newId = (Math.max(...services.map((s) => Number.parseInt(s.id))) + 1).toString()
      setServices([...services, { ...currentService, id: newId }])
    }

    resetForm()
  }

  const resetForm = () => {
    setCurrentService({
      id: "",
      name: "",
      price: "",
      duration: "",
    })
    setIsEditing(false)
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Services</CardTitle>
          <CardDescription>Manage your salon services</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>{service.price}</TableCell>
                  <TableCell>{service.duration}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Service" : "Add Service"}</CardTitle>
          <CardDescription>{isEditing ? "Update service details" : "Create a new service"}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} id="service-form">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Service Name</Label>
                <Input
                  id="name"
                  placeholder="Enter service name"
                  value={currentService.name}
                  onChange={(e) => setCurrentService({ ...currentService, name: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  placeholder="Enter price (e.g. $45)"
                  value={currentService.price}
                  onChange={(e) => setCurrentService({ ...currentService, price: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  placeholder="Enter duration (e.g. 45 min)"
                  value={currentService.duration}
                  onChange={(e) => setCurrentService({ ...currentService, duration: e.target.value })}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
              <Button type="submit" form="service-form">
                Update Service
              </Button>
            </>
          ) : (
            <Button type="submit" form="service-form" className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Add Service
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

