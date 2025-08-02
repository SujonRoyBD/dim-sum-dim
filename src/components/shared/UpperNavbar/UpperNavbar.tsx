"use client";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";

export default function UpperNavbar() {
  return (
    <header className="bg-[#0C0C0C] sticky top-0 z-50 text-white text-sm">
      <div className="container mx-auto  flex flex-col gap-2 md:px-12 sm:px-6 md:flex-row md:justify-between md:items-center py-3">
        <div className="hidden md:block">
          <div className=" flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span className="text-xs sm:text-sm">Your Address Here</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span className="text-xs sm:text-sm">+1234567890</span>
          </div>
          <div className="flex items-center gap-1 ">
            <Mail className="h-4 w-4" />
            <span className="text-xs sm:text-sm">example@example.com</span>
          </div>
        </div>
        </div>
        <nav className="flex justify-center md:justify-end items-center gap-3">
          <a href="#" aria-label="Facebook">
            <Facebook className="h-4 w-4 hover:text-blue-400 transition-colors" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="h-4 w-4 hover:text-pink-400 transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4 hover:text-blue-500 transition-colors" />
          </a>
          <a href="#" aria-label="Twitter">
            <X className="h-4 w-4 hover:text-gray-300 transition-colors" />
          </a>
        </nav>
      </div>
    </header>
  );
}
