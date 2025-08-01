"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

type ReservationFormData = {
  name: string;
  numberOfGuests: number;
  reservationDate: string;
  reservationTime: string;
};

export default function ReserveTable() {
  const [name, setName] = useState("");
  const [numberOfGuests, setGuests] = useState<number>(1);
  const [reservationDate, setDate] = useState<string>("");
  const [reservationTime, setTime] = useState<string>("");

  const { mutate, isPending } = useMutation({
    mutationKey: ["reserve-form"],
    mutationFn: (data: ReservationFormData) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          numberOfGuests: Number(data.numberOfGuests), // Ensure number type
        }),
      }).then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Failed to create reservation");
        }
        return res.json();
      }),
    onSuccess: (data) => {
      toast.success("Reservation created successfully", {
        description: data.message,
      });
      // Reset form after successful submission
      setName("");
      setGuests(1);
      setDate("");
      setTime("");
    },
    onError: (error) => {
      toast.error("Failed to create reservation", {
        description: error.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !reservationDate || !reservationTime) {
      toast.error("Please fill in all required fields");
      return;
    }

    const data: ReservationFormData = {
      name,
      numberOfGuests,
      reservationDate,
      reservationTime,
    };
    mutate(data);
  };

  // Generate date options for the next 7 days
  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateString = date.toISOString().split("T")[0];
      const displayDate = date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      dates.push(
        <SelectItem key={dateString} value={dateString}>
          {displayDate}
        </SelectItem>
      );
    }
    return dates;
  };

  // Time options in 1 hour increments from 5 PM to 10 PM
  const timeOptions = [
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];

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
          Don&apos;t miss the chance to savor the finest flavors of authentic
          dim sum in a warm and inviting atmosphere. Whether it&apos;s a special
          occasion, a family gathering, or a cozy dinner for two, our
          handcrafted dishes and impeccable service make every moment memorable.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="sr-only">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-0 py-2 text-lg placeholder:text-gray-500"
              />
            </div>

            {/* Guests */}
            <div>
              <Label htmlFor="numberOfGuests" className="sr-only">
                Number of Guests
              </Label>
              <Select
                value={numberOfGuests.toString()}
                onValueChange={(value) => setGuests(Number(value))}
              >
                <SelectTrigger
                  id="numberOfGuests"
                  className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-0 py-2 text-lg placeholder:text-gray-500"
                >
                  <SelectValue placeholder="1 Person" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Person" : "People"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div>
              <Label htmlFor="reservationDate" className="sr-only">
                Date
              </Label>
              <Select value={reservationDate} onValueChange={setDate} required>
                <SelectTrigger
                  id="reservationDate"
                  className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-0 py-2 text-lg placeholder:text-gray-500"
                >
                  <SelectValue placeholder="Select a date" />
                </SelectTrigger>
                <SelectContent>{generateDateOptions()}</SelectContent>
              </Select>
            </div>

            {/* Time */}
            <div>
              <Label htmlFor="reservationTime" className="sr-only">
                Time
              </Label>
              <Select value={reservationTime} onValueChange={setTime} required>
                <SelectTrigger
                  id="reservationTime"
                  className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-0 py-2 text-lg placeholder:text-gray-500"
                >
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeOptions.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            disabled={isPending}
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg rounded-md"
          >
            {isPending ? "Booking..." : "Book Now"}
          </Button>
        </form>
      </div>
    </div>
  );
}
