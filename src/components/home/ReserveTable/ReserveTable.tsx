"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ReserveTable() {
  const [name, setName] = useState("")
  const [guests, setGuests] = useState("1")
  const [date, setDate] = useState("21-12-2024")
  const [time, setTime] = useState("21:00")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      name,
      guests,
      date,
      time,
    })
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen p-4 md:p-8 lg:p-12 bg-white">
      {/* Left side: Image */}
      <div className="relative w-full max-w-md lg:w-3/4 aspect-[2/3] lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden mb-8 lg:mb-0 lg:mr-12">
        <Image
          src="/assets/reserve.png"
          alt="reserve"
          fill
          className="object-cover rounded-xl z-10"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Right side: Form */}
      <div className="w-full max-w-xl lg:w-1/2">
        <h2 className="text-4xl md:text-2xl font-serif font-bold mb-6 leading-tight text-gray-900">
          RESERVE YOUR TABLE FOR AN AUTHENTIC SUM DIM SUM EXPERIENCE
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          Don&apos;t miss the chance to savor the finest flavors of authentic dim sum in a warm and inviting atmosphere.
          Whether it&apos;s a special occasion, a family gathering, or a cozy dinner for two, our handcrafted dishes and
          impeccable service make every moment memorable.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="sr-only">Your Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-0 py-2 text-lg placeholder:text-gray-500"
              />
            </div>

            {/* Guests */}
            <div>
              <Label htmlFor="guests" className="sr-only">Number of Guests</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger
                  id="guests"
                  className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-0 py-2 text-lg placeholder:text-gray-500"
                >
                  <SelectValue placeholder="1 Person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Person</SelectItem>
                  <SelectItem value="2">2 People</SelectItem>
                  <SelectItem value="3">3 People</SelectItem>
                  <SelectItem value="4">4 People</SelectItem>
                  <SelectItem value="5">5 People</SelectItem>
                  <SelectItem value="6">6 People</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div>
              <Label htmlFor="date" className="sr-only">Date</Label>
              <Select value={date} onValueChange={setDate}>
                <SelectTrigger
                  id="date"
                  className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-0 py-2 text-lg placeholder:text-gray-500"
                >
                  <SelectValue placeholder="21-12-2024" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="21-12-2024">21-12-2024</SelectItem>
                  <SelectItem value="22-12-2024">22-12-2024</SelectItem>
                  <SelectItem value="23-12-2024">23-12-2024</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Time */}
            <div>
              <Label htmlFor="time" className="sr-only">Time</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger
                  id="time"
                  className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-0 py-2 text-lg placeholder:text-gray-500"
                >
                  <SelectValue placeholder="9:00 PM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18:00">6:00 PM</SelectItem>
                  <SelectItem value="19:00">7:00 PM</SelectItem>
                  <SelectItem value="20:00">8:00 PM</SelectItem>
                  <SelectItem value="21:00">9:00 PM</SelectItem>
                  <SelectItem value="22:00">10:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg rounded-md">
            Book Now
          </Button>
        </form>
      </div>
    </div>
  )
}
