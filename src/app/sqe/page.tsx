"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import VideoSlideshow from "@/components/video-slideshow"
import TestimonialCarousel from "@/components/testimonials"
import ProductAccordion from "@/components/product-accordion"



// Video data
const videos = [
  {
    id: 1,
    title: "SQE Audiobooks - Constitutional Law",
    image: "/thumbnail.png",
    videoId: "dQw4w9WgXcQ", // Example ID - replace with actual YouTube video ID
  },
  {
    id: 2,
    title: "SQE Audiobooks - Business Law",
    image: "/thumbnail.png",
    videoId: "KYniUCGPGLs", // Example ID - replace with actual YouTube video ID
  },
  {
    id: 3,
    title: "SQE Audiobooks - Criminal Law",
    image: "/thumbnail.png",
    videoId: "jNQXAC9IVRw", // Example ID - replace with actual YouTube video ID
  },
]
 const products = [
    {
      id: "mocks",
      title: "Buy SQE Mocks Book Separately",
      image: "/book-doc.png",
      fullTitle: "SQE1 (Mocks)",
      description: "Solicitors Qualifying Examination (SQE) route - in England & Wales",
      publicationDate: "October 2023 (Last Updated)",
      numberOfBooks: "1 Book",
      features: [
        { text: "10 Mocks (FLK 1 & 2)" },
        { text: "90 Multiple-Choice Questions (MCQs) Per Round" },
        { text: "Answer Explanations for every question" },
        { text: "1,000 pages" },
      ],
      price: "£150",
    },
    {
      id: "flk1",
      title: "Buy SQE FLK1 Separately",
      image: "/book-doc.png",
      fullTitle: "SQE1 (FLK1)",
      description: "Solicitors Qualifying Examination (SQE) route - in England & Wales",
      publicationDate: "October 2023 (Last Updated)",
      numberOfBooks: "8 Text & Audiobook",
      features: [
        { text: "Business Law" },
        { text: "Dispute Resolution" },
        { text: "Contract Law" },
        { text: "Tort Law" },
        { text: "Legal System of England & Wales" },
        { text: "Constitutional & EU Law" },
      ],
      price: "£200",
    },
    {
      id: "flk2",
      title: "Buy SQE FLK2 Separately",
      image: "/book-doc.png",
      fullTitle: "SQE1 (FLK2)",
      description: "Solicitors Qualifying Examination (SQE) route - in England & Wales",
      publicationDate: "October 2023 (Last Updated)",
      numberOfBooks: "7 Text & Audiobook",
      features: [
        { text: "Property Law & Practice" },
        { text: "Wills and Administration of Estates" },
        { text: "Criminal Law" },
        { text: "Land Law" },
        { text: "Equity & Trusts" },
      ],
      price: "£200",
    },
    {
      id: "audios",
      title: "Buy SQE1 Audios separately",
      image: "/book-doc.png",
      fullTitle: "SQE1 Audiobooks",
      description: "Solicitors Qualifying Examination (SQE) route - in England & Wales",
      publicationDate: "October 2023 (Last Updated)",
      numberOfBooks: "15 Audio Files",
      features: [
        { text: "All FLK1 & FLK2 subjects" },
        { text: "MP3 Format" },
        { text: "Professional narration" },
        { text: "Listen on any device" },
      ],
      price: "£120",
    },
  ]

export default function LawAcademyLanding() {
  // State for video slider
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  // Function to navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  // Function to navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Function to go to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Background Image for Hero */}
    

<div className="relative">
  {/* Background Image */}
  <Image
    src="/exam.jpg"
    alt="SQE Exam preparation background"
    fill
    className="object-cover z-0"
    priority
  />
  
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70  z-10">
    <div className="mt-10">
      <Header/>
    </div>
  </div>

  {/* Content */}
  <div className="relative z-20">
    {/* Hero Section */}
    <div className="px-8 py-20 max-w-4xl">
      <h1 className="text-white text-6xl font-poppins ml-20 mt-40 font-light leading-tight mb-2">
        Ace the SQE Exam with the <br /> confidence
      </h1>
      <p className="text-white text-xl mb-12 ml-20 font-poppins max-w-2xl font-light">
        Prepare for the SQE Exam with Expert-Curated <br />
        Textbooks, Audio Lectures, and Realistic Mock Tests —<br />
        Everything You Need in One Complete Study Package.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex space-x-6 ml-20 mb-20">
        <button className="bg-[#7BBCB0] text-white px-8 py-3 rounded-2xl font-medium flex items-center hover:bg-teal-600 transition-colors">
          Buy the SQE1 Bundle
          <ArrowRight className="ml-4" />
        </button>
        <button className="bg-[#7BBCB0] text-white px-8 py-1 rounded-2xl font-medium flex items-center hover:bg-teal-600 transition-colors">
          Start Free Mock Test
          <ArrowRight className="ml-4" />
        </button>
      </div>
    </div>
  </div>
</div>
      {/* What's Included Section */}
      <div className="bg-gray-100 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            What's Included in the Text & Audiobooks Bundle?
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">Prepare smarter, not harder.</p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Text Book Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
             <Image src="/book-icon.png" alt="FLK1 & 2 Text Book" width={200} height={200} className="w-16 h-16 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">16 TEXT-BOOK [FLK 1 & 2]</h3>
              <p className="text-gray-600 leading-relaxed">
                Each book thoroughly covers all the assessment specification according to SRA. It explains things very
                clearly and focuses on the most important exam principals with no "fluff".
              </p>
            </div>

            {/* Audio Files Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <Image src="/headphone.png" alt="FLK1 & 2 Text Book" width={200} height={200} className="w-16 h-16 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">AUDIO FILES</h3>
              <p className="text-gray-600 leading-relaxed">
                Our books include audio resources accompanying each chapter, allowing you to listen and review content
                on the go. This feature enhances learning convenience and accessibility, especially for busy students.
              </p>
            </div>
          </div>

          {/* Mocks Book Card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
             <Image src="/paper-icon.png" alt="FLK1 & 2 Text Book" width={200} height={200} className="w-16 h-16 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4 ">MOCKS BOOK [1000 Page]</h3>
              <p className="text-gray-600 leading-relaxed ">
                We offer a 1,000-page Mocks Book containing 10 full-length mock exams, each with 90 multiple-choice
                questions (MCQs). These exams thoroughly cover Functioning Legal Knowledge (FLK) 1 and 2, enabling you
                to assess your knowledge and identify areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Video */}
      <div className="bg-teal-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left Column */}
            <div className="space-y-6 p-8">
              {/* One-Time Payment Card */}
              <div className="bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">One-Time Payment Perfection</h3>
                <p className="text-xs text-gray-600">
                  Pay Once, Benefit Forever! No recurring charges, no hidden fees - just pay once and unlock a wealth of
                  legal knowledge.
                </p>
              </div>

              {/* Test Your Knowledge Card */}
              <div className="bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7v-7zm4-3h2v10h-2V7zm4 6h2v4h-2v-4z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Test Your Knowledge</h3>
                <p className="text-xs text-gray-600">
                  SQE1 (Solicitors Qualifying Examination) candidates with the core legal principles and rules that will
                  be tested in the Solicitors Qualifying Examination (SQE1) Functioning Legal Knowledge (FLK)
                  assessments. All content is written in accordance with the assessment specification according to SRA.
                </p>
              </div>

              {/* Practice Makes Perfect Card */}
              <div className="bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Practice makes Perfect</h3>
                <p className="text-xs text-gray-600">
                  Practicing Multiple-choice questions to clarify the application of the law following each part in each
                  book.
                </p>
              </div>
            </div>

            {/* Center Column - Video */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full h-[90%]">
                {/* Video Thumbnail */}
                <Image
                    width={200}
                    height={200}
                   src="/book-cover.png"
                  alt="FLK1 & 2 Mocks Book"
                  className="w-full h-full object-cover"
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  {/* Play Button */}
                  <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all">
                    <svg className="w-10 h-10 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Video Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white px-4 py-2 flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <div className="h-1 bg-gray-600 flex-grow mx-2 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 w-1/3 rounded-full"></div>
                  </div>
                  <span className="text-xs ml-3">1:45 / 5:30</span>
                  <svg className="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                
                  <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs">HD</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 p-8">
              {/* Learn with Audio Card */}
              <div className="bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Learn with Audio</h3>
                <p className="text-xs text-gray-600">
                  Accompanying Audio files following each chapter will further enhance your understanding.
                </p>
              </div>

              {/* Examination Centric Section Card */}
              <div className="bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Examination Centric Section</h3>
                <p className="text-xs text-gray-600">
                  At the end of each book, there is an Examination points section that focuses on the most important
                  points typically tested in exams.
                </p>
              </div>

              {/* Get a Digital Copy Card */}
              <div className="bg-white rounded-lg p-6">
                <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Get a Digital Copy</h3>
                <p className="text-xs text-gray-600">
                  Digital Copy - (New Field) only available only upon request at info@lawandbar.co.uk. Please send an
                  email with your request and include your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons Section */}
      <div className="bg-white py-8">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#0f3d3e] text-white px-10 py-2.5 rounded-md font-medium hover:bg-[#0f3d3e]/50 transition-colors border border-teal-600">
            View Sample Chapter
          </button>
          <button className="bg-[#0f3d3e] text-white px-10 py-2.5 rounded-md font-medium hover:bg-[#0f3d3e]/50 transition-colors border border-teal-600">
            Listen to Sample Audio
          </button>
        </div>
      </div>

      <div className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Left Column - Title, Subtitle, Features, Price */}
      <div>
        {/* Title and Subtitle */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-[#0f3d3e] mb-2">
            Bundle of 16 Text & Audio-books (SQE) + <br />
            Mock Exams Book
          </h2>
          <p className="text-lg text-gray-600">
            Solicitors Qualifying Examination (SQE) route - in England & Wales
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#e0e8e4] rounded-md p-4">
            <p className="text-[#0f3d3e] font-medium">One-Time Payment Perfection</p>
          </div>
          <div className="bg-[#e0e8e4] rounded-md p-4">
            <p className="text-[#0f3d3e] font-medium">16 Textbooks (FLK 1 & 2)</p>
          </div>
          <div className="bg-[#e0e8e4] rounded-md p-4">
            <p className="text-[#0f3d3e] font-medium">Audio recourse following each chapter</p>
          </div>
          <div className="bg-[#e0e8e4] rounded-md p-4">
            <p className="text-[#0f3d3e] font-medium">
              1,000-page Mocks Book (10 Mocks; 90 MCQs per round)
            </p>
          </div>
        </div>

        {/* Buy Button and Price */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/lawbooks/">
            <button className="bg-[#0f3d3e] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Buy Now →
            </button>
          </Link>
          <div className="flex items-end">
            <span className="text-gray-400 line-through text-xl mr-3">£500</span>
            <span className="text-[#0f3d3e] text-4xl font-bold">£400</span>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="flex justify-center ml-4">
        <Image src="/double-books.png" width={800} height={800} alt="books" />
      </div>
    </div>
  </div>
</div>



      {/* Sample Videos Banner */}
     

      {/* Video Slider Section */}
      {/* Video Slideshow Component */}
       
      {/* SQE 1 Curriculum Section */}
      <div className="bg-white  py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left Column - FLK Table */}
            <div>
              <Image 
              src ="/Table-img.png"
              alt="SQE 1 Curriculum Table"
              width={800}
              height={800}
              />
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                SQE 1 Text & Audiobooks Bundle – Complete Study Materials for SQE 1 Preparation
              </h2>

              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Prepare to pass the SQE 1 exam with confidence using our all-in-one SQE 1 Text & Audiobooks Bundle.
                  This comprehensive study resource combines detailed SQE 1 textbooks with expertly narrated SQE 1
                  audiobooks — designed specifically for law students and legal professionals preparing for the
                  Solicitors Qualifying Examination (SQE).
                </p>

                <p>
                  SQE 1 Text & Audiobooks Bundle supports active learning through a proven approach: Read, Listen, and
                  Practice MCQs. This method enhances comprehension, retention, and application — essential skills for
                  passing the SQE 1 exam.
                </p>

                <p>
                  SQE 1 Text & Audiobooks Bundle supports active learning through a proven approach: Read, Listen, and
                  Practice MCQs. This method enhances comprehension, retention, and application — essential skills for
                  passing the SQE 1 exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       
       <div className="bg-[#0f3d3e] py-12 mb-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-white text-2xl italic font-light">
            Watch sample videos and explore the interactive book features before you enroll.
          </p>
        </div>
      </div>
       <VideoSlideshow videos={videos} />
<div className="mt-10 mb-10">
        <TestimonialCarousel/>
      </div>
       <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#0f3d3e] mb-8 text-center">Purchase Options</h2>
          <ProductAccordion products={products} />
        </div>
      </div>
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
                <h2 className="text-4xl font-bold text-[#0f3d3e] mb-6">What is the SQE 'Bar Exam'?</h2>
                <p className="text-lg text-[#0f3d3e] mb-8">
                  The Bar Exam is a critical step for aspiring lawyers, designed to assess your legal knowledge,
                  analytical thinking, and application skills. Whether you're taking the SQE or another qualification
                  exam, our platform is tailored to help you succeed.
                </p>
                <button className="bg-[#0f3d3e] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    <Footer/>
    </div>
  )
}
