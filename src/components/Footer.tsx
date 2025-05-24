import Image from "next/image"
import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Footer() {

    return (
        <footer className="bg-[#0e1317] text-white w-screen  relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12">
            {/* Left Column - Logo and Description */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-medium flex items-center gap-2">
                  <Image src="/logof.png" alt="Logo" width={30} height={30} />
                  Law & Bar Academy
                </div>
              </div>
              <p className="text-gray-400 mb-6">Phasellus nisi sapien, rutum placerat sapien eu, rhoncus tempus</p>
              <div className="flex gap-3">
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
            </div>
  
            {/* Middle Column - Information */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-medium mb-6">Information</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="text-white mt-1 flex-shrink-0" size={14} />
                  <span className="text-gray-400">
                    GXF4+8HQ Chippenham
                    <br />
                    United Kingdom
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="text-white flex-shrink-0" size={14} />
                  <span className="text-gray-400">info.help@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="text-white flex-shrink-0" size={14} />
                  <span className="text-gray-400">+125 (895) 658 568</span>
                </li>
              </ul>
            </div>
  
            {/* Right Column - Pages Links */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-medium mb-6">Pages Links</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#93CBAF] transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#93CBAF] transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#93CBAF] transition-colors">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#93CBAF] transition-colors">Room List</a>
                </li>
              </ul>
            </div>
  
            {/* Button Column */}
            <div className="md:col-span-2 flex items-center justify-end mr-10">
              <a href="#" className="inline-flex items-center gap-2 bg-[#0f3d3e] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors text-sm whitespace-nowrap">
                BECOME A LECTURER
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pt-8 border-t border-gray-800 text-sm text-gray-400">
            <div className="mb-4 md:mb-0">Copyright © 2023</div>
            <div className="flex items-center gap-2">
              <span>Website by</span>
              <div className="flex items-center gap-6 ml-4">
                <a href="#" className="hover:text-[#93CBAF] transition-colors">FAQ</a>
                <a href="#" className="hover:text-[#93CBAF] transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-[#93CBAF] transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }