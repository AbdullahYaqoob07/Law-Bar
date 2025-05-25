"use client"

import { useState } from "react"

interface ProductDetailProps {
  image: string
  title: string
}

export default function ProductDetail({ image, title }: ProductDetailProps) {
  const [currentDot, setCurrentDot] = useState(0)
  const totalDots = 5

  return (
    <div className="relative">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-auto rounded" />

      <div className="mt-4 flex items-center justify-between">
        <div className="flex space-x-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDot(index)}
              className={`w-2 h-2 rounded-full ${currentDot === index ? "bg-[#0f3d3e]" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <button className="bg-[#0f3d3e] text-white px-6 py-2 rounded flex items-center">
            Preview
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <div className="flex">
            <button className="bg-[#0f3d3e] w-10 h-10 rounded-l flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-[#0f3d3e] w-10 h-10 rounded-r flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
