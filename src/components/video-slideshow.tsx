"use client"

import { useState } from "react"

interface Video {
  id: number
  title: string
  image: string
  videoId: string
}

interface VideoSlideshowProps {
  videos: Video[]
}

export default function VideoSlideshow({ videos }: VideoSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = videos.length

  // Function to navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  // Function to navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Function to go to a specific slide
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="relative">
          {/* Video Carousel */}
          <div className="flex justify-center items-center h-[300px] relative">
            {videos.map((video, index) => {
              // Calculate position based on current slide
              let position = index - currentSlide
              if (position < 0) position += videos.length
              if (position >= videos.length) position -= videos.length

              // Determine styles based on position
              const zIndex = 10 - Math.abs(position)
              const opacity = position === 0 ? 1 : 0.3
              const scale = position === 0 ? 1.25 : 0.7

              // Position the slides so they're fully visible
              let translateX = "0%"
              if (position === 1 || position === -2) {
                translateX = "100%"
              } else if (position === -1 || position === 2) {
                translateX = "-100%"
              }

              return (
                <div
                  key={video.id}
                  className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                  style={{
                    zIndex,
                    opacity,
                    transform: `translateX(${translateX}) scale(${scale})`,
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div
                    className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
                      position === 0 ? "p-1" : "p-0"
                    }`}
                  >
                    <div className="relative aspect-video w-[400px] max-w-full rounded-lg overflow-hidden">
                      <img
                        src={video.image || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
        </div>

        {/* CTA Button and Navigation */}
        <div className="mt-8 flex flex-col items-center">
          {/* CTA Button */}
          <button className="bg-[#0f3d3e] text-white px-8 py-4 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center mb-6">
            Buy The SQE1 Bundle
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-4">
            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              className="text-[#0f3d3e] hover:text-[#0f3d3e] transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index ? "w-2 h-2 bg-gray-800" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="text-[#0f3d3e] hover:text-[#0f3d3e]/50 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
