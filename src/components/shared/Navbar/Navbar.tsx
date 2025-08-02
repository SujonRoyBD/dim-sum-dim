"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Menu & Locations", href: "#" },
    { name: "Reservation", href: "#reservetion" },
    { name: "Merchandise", href: "#" },
    { name: "Career", href: "#" },
    { name: "Contact", href: "#contact-us" },
  ]

  return (
    <header className=" bg-[#0C0C0C]  sticky top-11 z-20 text-white py-4 px-6 md:px-8 lg:px-12">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex flex-col items-center gap-1">
          <Image
            src="/assets/logo.png"
            alt="Sum Dim Sum Logo"
            width={148}
            height={50}
            className="h-10 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-medium hover:text-gray-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Button className="hidden md:inline-flex bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl px-6 py-2">
          Book a Table
        </Button>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white p-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl px-6 py-2 mt-4">
                  Book a Table
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
