"use client"

import Image from "next/image"
import { Info } from "lucide-react"

interface BookDetailProps {
  book: {
    id: string
    title: string
    publisher: string
    description: string
    isbn: string
    price: number
    image: string
    formats: string[]
  }
}

export default function BookDetail({ book }: BookDetailProps) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Book Cover */}
        <div className="w-full md:w-1/2 bg-[#a9c7c0] p-8 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[3/4]">
            <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-contain" priority />
          </div>
        </div>

        {/* Book Info */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-[#0f3d3e] mb-4">{book.title}</h1>

          <div className="mb-6">
            <p className="text-gray-600 mb-1">Publisher:</p>
            <p className="text-[#93cbaf] font-medium">{book.publisher}</p>
          </div>

          <p className="text-gray-700 mb-6">{book.description}</p>

          <div className="mb-6">
            <p className="text-gray-600 mb-1">ISBN:</p>
            <p className="font-medium">{book.isbn}</p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <div className="bg-[#a9c7c0] text-[#0f3d3e] px-4 py-2 rounded-md font-medium">Format:</div>
              {book.formats.map((format, index) => (
                <button
                  key={index}
                  className="bg-white border border-gray-200 hover:border-[#0f3d3e] text-gray-800 px-4 py-2 rounded-md transition-colors"
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <Info className="h-5 w-5 text-[#93cbaf]" />
          </div>

          <div className="flex items-center justify-between mt-8">
            <div>
              <p className="text-sm text-gray-500">From</p>
              <p className="text-4xl font-bold text-[#0f3d3e]">${book.price}</p>
            </div>
            <button className="bg-[#0f3d3e] hover:bg-[#0f3d3e]/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
