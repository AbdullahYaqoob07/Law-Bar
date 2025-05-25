import Image from "next/image"
import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <footer className="bg-[#0e1317] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
          {/* Left Column - Logo and Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-2xl font-medium flex items-center gap-2">
                <Image src="/logof.png" alt="Logo" width={30} height={30} />
                Law & Bar Academy
              </Link>
            </div>
            <p className="text-gray-400 mb-6">Phasellus nisi sapien, rutum placerat sapien eu, rhoncus tempus</p>
            <div className="flex gap-3">
              <Link href="https://facebook.com" target="_blank" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#0f3d3e] transition-colors">
                <Facebook size={16} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#0f3d3e] transition-colors">
                <Twitter size={14} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#0f3d3e] transition-colors">
                <Linkedin size={14} />
              </Link>
            </div>
          </div>

          {/* Middle Column - Information */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-medium mb-6">Information</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="text-white mt-1 flex-shrink-0" size={14} />
                <Link href="https://maps.google.com" target="_blank" className="text-gray-400 hover:text-[#93CBAF] transition-colors">
                  GXF4+8HQ Chippenham<br />United Kingdom
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-white flex-shrink-0" size={14} />
                <Link href="mailto:info.help@gmail.com" className="text-gray-400 hover:text-[#93CBAF] transition-colors">info.help@gmail.com</Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-white flex-shrink-0" size={14} />
                <Link href="tel:+125895658568" className="text-gray-400 hover:text-[#93CBAF] transition-colors">+125 (895) 658 568</Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Pages Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-medium mb-6">Pages Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about-us" className="hover:text-[#93CBAF] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#93CBAF] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#93CBAF] transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#93CBAF] transition-colors">Room List</Link>
              </li>
            </ul>
          </div>

          {/* Button Column */}
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-end">
            <Link href="/lecturer" className="inline-flex items-center gap-2 bg-[#0f3d3e] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors text-sm whitespace-nowrap">
              BECOME A LECTURER
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="mb-4 sm:mb-0">Copyright © 2023</div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span>Website by</span>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/faq" className="hover:text-[#93CBAF] transition-colors">FAQ</Link>
              <Link href="/terms" className="hover:text-[#93CBAF] transition-colors">Terms of Use</Link>
              <Link href="/privacy" className="hover:text-[#93CBAF] transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}