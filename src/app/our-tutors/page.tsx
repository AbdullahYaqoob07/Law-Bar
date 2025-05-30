"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function LawAcademy() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const lecturers = [
        { name: "Jacob Jones", title: "UI-UX Design Expert", image: "/girl.png" },
        { name: "Jacob Jones", title: "UI-UX Design Expert", image: "/girl.png" },
        { name: "Jacob Jones", title: "UI-UX Design Expert", image: "/girl.png" },
        { name: "Jacob Jones", title: "UI-UX Design Expert", image: "/girl.png" },
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % lecturers.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + lecturers.length) % lecturers.length)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Floating Header */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Header />
            </div>

            {/* Hero Section - starts from top */}
            <section className="relative text-white py-20 px-4 overflow-hidden min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/tutor-1.jpg"
                        alt="Lady Justice statue"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Optional overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative max-w-6xl mx-auto pt-20 w-full">
                    <div className="max-w-2xl text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-left">Meet Our Lecturers</h1>
                        <p className="text-xl mb-8 text-gray-300 text-left">Experienced. Diverse. Globally Recognized.</p>
                        <p className="text-gray-300 leading-relaxed max-w-lg text-left">
                            Our law lecturers are leading professionals and academics from around the world—each bringing a wealth of
                            legal knowledge, practical insight, and teaching excellence. From international law to emerging fields
                            like legal tech and AI, our instructors are shaping the future of legal education.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lecturers Carousel */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {lecturers.map((lecturer, index) => (
                                <div key={index} className="bg-white rounded-lg py-6 px-2 text-center shadow-sm">
                                    <div className="mx-auto mb-4 overflow-hidden bg-gray-200">
                                        <Image
                                            src={lecturer.image || "/placeholder.svg"}
                                            alt={lecturer.name}
                                            width={96}
                                            height={96}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-1">{lecturer.name}</h3>
                                    <p className="text-gray-600 text-sm">{lecturer.title}</p>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex items-center justify-center mt-8 space-x-4">
                            <button onClick={prevSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex space-x-2">
                                {lecturers.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-[#0f3d3e]" : "bg-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-[#0f3d3e] text-white hover:bg-teal-700 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <div className="bg-[#f0f7f5] py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative">
            {/* Decorative Dots */}
            <div className="absolute top-0 left-20 w-2 h-2 rounded-full bg-[#0f3d3e]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-[#0f3d3e]"></div>
            <div className="absolute right-6/14 mr-14 bottom-1/4 w-10 h-10 rounded-full bg-[#0f3d3e] "></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column - Image */}
              <div className="relative ">
                <div className="rounded-xl overflow-hidden border-2 p-2 border-white shadow-lg">
                  <Image
                    src="/write.png"
                    width={200}
                    height={200}
                    alt="Student writing during Bar Exam"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="ml-2">
                <h2 className="text-4xl font-bold text-[#0f3d3e] mb-6">Join World's largest law learning platform today</h2>
                <p className="text-lg text-[#0f3d3e] mb-8">
                Start teaching by registering for free
                </p>
                <Link href="/lecturer">
                <button className="bg-[#0f3d3e] text-white px-8 py-2.5 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                  Apply as Lecturer
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
            <Footer />
        </div>
    )
}