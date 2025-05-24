"use client"

import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
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
      hasDetails: true,
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
      hasDetails: true,
    },
  ]

  return (
    <main className="min-h-screen bg-[white] flex flex-col">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
     

      {/* Main Content */}
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#0f3d3e] text-center mt-6 mb-12">Book Store</h1>

          <div className="space-y-6  ml-20 mr-20">
            {books.map((book) => (
              <div key={book.id} className="border border-[#0f3d3e] rounded-xl p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Book Cover */}
                  <div className="w-full md:w-[600px]">
                    <div className="bg-[#a9c7c0] pt-10 pb-20 h-[400px] rounded-md">
                      <div className="relative aspect-[5.5/4] w-full">
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

                    {book.id && (
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
                      <div className="flex gap-3 mt-6">
                        {book.hasDetails && (
                          <Link
                            href={`/books/${book.id}`}
                            className="bg-[#0f3d3e] text-white rounded-xl px-4 py-2  hover:bg-opacity-90">
                          
                            View Details
                          </Link>
                        )}
                        <button className="bg-[#0f3d3e] text-white px-4 py-2 rounded-xl hover:bg-opacity-90">
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
            <button className="bg-[#0f3d3e] text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-opacity-90">
              EXPLORE MORE BOOKS <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
      </div>
      </main>
  
  )
}
