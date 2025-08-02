import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin, X } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-8 px-4 md:px-6 lg:px-8">
      <div className="border-t border-b border-red-300 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-cinzel font-bold text-gray-800 uppercase tracking-wider">CONTACT</h3>
            <div className="flex items-center space-x-2 gap-[4px] text-gray-600">
              <Phone className="w-[24px] h-[24px] text-black" />
              <span>+1234567890</span>
            </div>
            <div className="flex items-center gap-[4px] space-x-2 text-gray-600">
              <MapPin className="w-[24px] h-[24px] text-black" />
              <span>Your Address Here</span>
            </div>
            <div className="flex items-center space-x-2 gap-[4px] text-gray-600">
              <Mail className="w-[24px] h-[24px] text-black" />
              <span>example@example.com</span>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/assets/footer-Logo.png"
              alt="Sum Dim Sum Logo"
              width={296}
              height={100}
              className="h-auto w-auto"
            />
            
            <div className="flex space-x-4 pt-[40px]">
              <Link href="#" className="text-gray-600 hover:text-red-500" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-500" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-500" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-500" aria-label="X (Twitter)">
                <X className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <nav className="flex flex-col items-center md:items-end space-y-2 text-gray-600">
            <Link href="#" className="hover:text-red-500">
              Home
            </Link>
            <Link href="#" className="hover:text-red-500">
              About Us
            </Link>
            <Link href="#" className="hover:text-red-500">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-red-500">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
      <p className="text-center pt-[20px]">Copyright 2024
SumDimSum</p>
    </footer>
  )
}
