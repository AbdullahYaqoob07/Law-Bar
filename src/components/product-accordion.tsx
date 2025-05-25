"use client"

import Image from "next/image"
import { useState } from "react"

interface ProductFeature {
  text: string
}

interface ProductDetails {
  id: string
  title: string
  image: string
  fullTitle: string
  description: string
  publicationDate: string
  numberOfBooks: string
  features: ProductFeature[]
  price: string
}

interface ProductAccordionProps {
  products: ProductDetails[]
}

export default function ProductAccordion({ products }: ProductAccordionProps) {
  const [expandedProduct, setExpandedProduct] = useState<string | null>("flk2")

  const toggleProduct = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {products.map((product) => (
        <div key={product.id} className="border-b border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center py-6">
            <h3 className="text-2xl font-medium text-gray-800">{product.title}</h3>
            <button
              onClick={() => toggleProduct(product.id)}
              className="w-10 h-10 bg-[#7bbcb0] rounded-full flex items-center justify-center text-white"
              aria-expanded={expandedProduct === product.id}
              aria-controls={`product-${product.id}-content`}
            >
              {expandedProduct === product.id ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              )}
            </button>
          </div>

          {/* Expanded Content */}
          {expandedProduct === product.id && (
            <div id={`product-${product.id}-content`} className="pb-8 flex flex-col md:flex-row md:gap-8 items-stretch">
              {/* Left - Image */}
              <div className="md:w-1/3 flex flex-col max-h-[500px]">
                <div className="bg-gray-50 rounded-lg shadow-xl border border-gray-200 overflow-hidden  h-full max-h-[450px]">
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={400}
                      className="object-fit rounded-lg"
                    />
                  </div>
                </div>

                {/* Carousel buttons */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-2">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === 0 ? "bg-[#0f3d3e]" : "bg-gray-300"}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button className="bg-[#0f3d3e] text-white px-6 py-2 rounded-full flex items-center">
                      Preview
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>

                    <div className="flex">
                      <button className="bg-[#0f3d3e] w-10 h-10 rounded-l-full flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="bg-[#0f3d3e] w-10 h-10 rounded-r-full flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Info and Buy Button */}
              <div className="md:w-2/3 flex flex-col justify-between mt-8 md:mt-0">
                <div>
                  <h2 className="text-3xl font-bold text-[#0f3d3e] mb-4">{product.fullTitle}</h2>
                  <p className="text-lg text-gray-700 mb-4 line-clamp-6">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    <p className="text-gray-700">
                      <span className="font-medium">Publication Date:</span> {product.publicationDate}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Number of Books:</span> {product.numberOfBooks}
                    </p>
                  </div>

                  <h3 className="text-xl text-black font-bold mb-4">Features you'll get:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buy Now at bottom */}
                <div className="mt-6">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-[#0f3d3e]">{product.price}</span>
                  </div>
                  <button className="bg-[#0f3d3e] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center">
                    Buy Now
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
