"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Leo",
    title: "Lead Designer",
    rating: 4,
    heading: "It was a very good experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },
  {
    id: 2,
    name: "Maya",
    title: "UX Researcher",
    rating: 5,
    heading: "Amazing product, I loved it!",
    content:
      "Truly exceeded expectations. The entire workflow was smooth, and the outcome was fantastic. Looking forward to using it more.",
  },
  {
    id: 3,
    name: "Sam",
    title: "Product Manager",
    rating: 4,
    heading: "Great support team",
    content: "Had a few issues initially, but the support team was super helpful and resolved everything in no time.",
  },
]

interface TestimonialProps {
  id: number
  name: string
  title: string
  rating: number
  heading: string
  content: string
}

interface TestimonialCarouselProps {
  items?: TestimonialProps[]
}

export default function TestimonialCarousel({ items = testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
  const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1

  if (!isClient) return null

  return (
    <div className="-mx-16 bg-[#0f3d3e] px-16 py-16">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex items-center justify-center gap-4 md:gap-8 px-4">
          {/* Previous */}
          <div className="hidden md:block w-1/4 opacity-75 hover:opacity-100 transition-opacity">
            <TestimonialCard testimonial={items[prevIndex]} size="small" />
          </div>

          {/* Active */}
          <div className="w-full md:w-2/4 max-w-2xl">
            <TestimonialCard testimonial={items[activeIndex]} size="large" />
          </div>

          {/* Next */}
          <div className="hidden md:block w-1/4 opacity-75 hover:opacity-100 transition-opacity">
            <TestimonialCard testimonial={items[nextIndex]} size="small" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center mt-8 gap-2">
          <button
            onClick={goToPrevious}
            className="p-2 text-white hover:text-[#ffa033] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full mx-1 ${index === activeIndex ? "bg-white" : "bg-[#c4c4c4]"}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : "false"}
            />
          ))}

          <button
            onClick={goToNext}
            className="p-2 text-white hover:text-[#ffa033] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({
  testimonial,
  size,
}: {
  testimonial: TestimonialProps
  size: "small" | "large"
}) {
  const starColor = "#ffa033"
  const dimColor = "#c5c5c5"
  const isSmall = size === "small"

  return (
    <div
      className={`rounded-xl p-6 shadow-lg transition-all duration-300 h-[120%] ${
        isSmall ? "bg-[#e6e6e6] text-black scale-95 opacity-90" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`rounded-full overflow-hidden ${isSmall ? "w-10 h-10" : "w-12 h-12"}`}>
          <Image
            src="/person.png"
            alt={`${testimonial.name}'s profile`}
            width={isSmall ? 40 : 48}
            height={isSmall ? 40 : 48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className={`font-medium ${isSmall ? "text-base" : "text-lg"}`}>{testimonial.name}</h3>
          <p className={`${isSmall ? "text-xs" : "text-sm"} text-[#525252]`}>{testimonial.title}</p>
        </div>
        <div className="flex ml-auto">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width={isSmall ? "14" : "16"}
              height={isSmall ? "14" : "16"}
              viewBox="0 0 24 24"
              fill={i < testimonial.rating ? starColor : dimColor}
              stroke={i < testimonial.rating ? starColor : dimColor}
              className={isSmall ? "w-3.5 h-3.5" : "w-4 h-4"}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
      <h2 className={`${isSmall ? "text-lg" : "text-xl"} font-semibold mb-3 text-center`}>{testimonial.heading}</h2>
      <p className={`text-center ${isSmall ? "text-xs" : "text-sm"} text-[#525252] ${isSmall ? "line-clamp-6" : ""}`}>
        {testimonial.content}
      </p>
    </div>
  )
}
