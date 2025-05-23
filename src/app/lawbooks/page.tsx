"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Facebook, Twitter, Linkedin, User, Mail, Phone, Info } from "lucide-react"

export default function LawBookPage() {
  // Sample book data
  const books = [
    {
      id: 1,
      title: "58th Annual Heckerling Institute on Estate Planning with Index",
      publisher: "Usairam Saeed",
      description:
        "Each year the most prominent authorities in the field come together at the Heckerling University of Miami Institute on Estate Planning to discuss and analyze the most important developments in the areas of estate planning and estate, gift, and income taxation.",
      isbn: "9781663384003",
      price: 158,
      image: "/book-cover.png",
      formats: ["Print Book", "Audio Book"],
      hasDetails: true,
    },
    {
      id: 2,
      title: "58th Annual Heckerling Institute on Estate Planning with Index",
      publisher: "Usairam Saeed",
      description:
        "Each year the most prominent authorities in the field come together at the Heckerling University of Miami Institute on Estate Planning to discuss and analyze the most important developments in the areas of estate planning and estate, gift, and income taxation.",
      isbn: "9781663384003",
      price: 158,
      image: "/book-cover.png",
      formats: ["Print Book", "Audio Book"],
      hasDetails: false,
    },
    {
      id: 3,
      title: "58th Annual Heckerling Institute on Estate Planning with Index",
      publisher: "Usairam Saeed",
      description:
        "Each year the most prominent authorities in the field come together at the Heckerling University of Miami Institute on Estate Planning to discuss and analyze the most important developments in the areas of estate planning and estate, gift, and income taxation.",
      isbn: "9781663384003",
      price: 158,
      image: "/book-cover.png",
      formats: ["Print Book", "Audio Book"],
      hasDetails: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-4 py-4">
        <div className="bg-white rounded-full shadow-sm px-6 py-3 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-[#0f3d3e] font-bold text-2xl">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-[#0f3d3e] text-3xl">B</span>
                <span className="text-sm font-medium">Law & Bar Academy</span>
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:text-[#0f3d3e]">
                Law Courses <span className="text-xs">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:text-[#0f3d3e]">
                SQE <span className="text-xs">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:text-[#0f3d3e]">
                Law Books <span className="text-xs">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:text-[#0f3d3e]">
                Blog <span className="text-xs">▼</span>
              </button>
            </div>
            <button className="bg-[#0f3d3e] text-white px-4 py-1 rounded-md hover:bg-opacity-90 transition-all">
              LOGIN
              <span className="ml-2">→</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#0f3d3e] text-center mb-12">Book Store</h1>

          <div className="space-y-6">
            {books.map((book) => (
              <div key={book.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Book Cover */}
                  <div className="w-full md:w-1/4">
                    <div className="bg-[#a9c7c0] p-4 rounded-md">
                      <div className="relative aspect-[3/4] w-full">
                        <Image
                          src={book.image || "/placeholder.svg"}
                          alt={book.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="w-full md:w-3/4">
                    <h2 className="text-xl font-bold text-[#0f3d3e] mb-2">{book.title}</h2>
                    <p className="mb-2">
                      Publisher: <span className="text-[#93cbaf]">{book.publisher}</span>
                    </p>
                    <p className="text-gray-700 mb-4">{book.description}</p>
                    <p className="mb-4">
                      ISBN: <span className="font-medium">{book.isbn}</span>
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#a9c7c0] text-[#0f3d3e] px-3 py-1 rounded-md text-sm">Format:</span>
                      {book.formats.map((format, index) => (
                        <button
                          key={index}
                          className="border border-gray-200 px-3 py-1 rounded-md text-sm hover:border-[#0f3d3e]"
                        >
                          {format}
                        </button>
                      ))}
                    </div>

                    {book.id === 1 && (
                      <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                        <Info className="h-4 w-4" />
                        <span>Print book available exclusively for orders of 10+ copies.</span>
                      </div>
                    )}

                    <div className="flex flex-wrap justify-between items-center mt-4">
                      <div>
                        <p className="text-xs text-gray-500">From</p>
                        <p className="text-2xl font-bold text-[#0f3d3e]">${book.price}</p>
                      </div>
                      <div className="flex gap-3">
                        {book.hasDetails && (
                          <Link
                            href={`/books/${book.id}`}
                            className="border border-[#0f3d3e] text-[#0f3d3e] px-4 py-2 rounded-md hover:bg-gray-50"
                          >
                            View Details
                          </Link>
                        )}
                        <button className="bg-[#0f3d3e] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-[#0f3d3e] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90">
              EXPLORE MORE BOOKS <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e1317] text-white pt-12 pb-4 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white text-3xl font-bold">B</span>
                <span className="text-sm font-medium">Law & Bar Academy</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <User className="h-5 w-5" />
                  <div>
                    <div className="text-xs text-gray-500">OAT-AHING Oppenheim</div>
                    <div className="text-sm">United Kingdom</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <div>
                    <div className="text-sm">info.help@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="text-sm">+123 (0)123 456 789</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Pages Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Room List
                </Link>
              </div>
              <div className="mt-6">
                <button className="bg-[#0f3d3e] text-white px-4 py-2 rounded-md flex items-center gap-2">
                  BECOME A LECTURER <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div>Copyright © 2023</div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="#" className="hover:text-white">
                Website by
              </Link>
              <Link href="#" className="hover:text-white">
                FAQ
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
