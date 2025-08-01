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
    <header className="bg-[#0C0C0C] sticky top-0 z-50 text-white text-sm container px-9">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2">
        {/* Left Section - Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Your Address Here</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>+1234567890</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>example@example.com</span>
          </div>
        </div>

        {/* Right Section - Social Icons */}
        <nav className="flex items-center gap-3">
          <a href="#" aria-label="Facebook">
            <Facebook className="h-4 w-4 hover:text-blue-400" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="h-4 w-4 hover:text-pink-400" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4 hover:text-blue-500" />
          </a>
          <a href="#" aria-label="Twitter">
            <X className="h-4 w-4 hover:text-gray-300" />
          </a>
        </nav>
      </div>
    </header>
  );
}
