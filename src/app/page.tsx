"use client"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Globe, Lock, Award, Grid } from "lucide-react"
import Image from 'next/image'
import CourseCard from '@/components/CourseCard'
import BooklawCard from '@/components/BookCard'
import BlogCard from '@/components/BlogCard'
import TestimonialCarousel from '@/components/testimonials'
import Link from "next/link"
import { ArrowRight } from 'lucide-react';

const sampleCourses = [
  {
    id:1,
    title: "Contract Law Essentials",
    description: "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
    rating: 4.8,
    lawtype1:"English",
    lawtype2:"American",
    price: 158
  },
  {
    id:2,
    title: "Contract Law Essentials",
    description: "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
    rating: 4.8,
    lawtype1:"English",
    lawtype2:"American",
    price: 158
  },
  {
    id:3,
    title: "Contract Law Essentials",
    description: "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
    rating: 4.8,
    lawtype1:"English",
    lawtype2:"American",
    price: 158
  },
  { 
    id:4,
    title: "Contract Law Essentials",
    description: "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
    rating: 4.8,
    lawtype1:"English",
    lawtype2:"American",
    price: 158
  },
  
    { id:5,
      title: "Contract Law Essentials",
      description: "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
      rating: 4.8,
      lawtype1:"English",
      lawtype2:"American",
      price: 158
    },
  { 
    id:6,
    title: "Contract Law Essentials",
    description: "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
    rating: 4.8,
    lawtype1:"English",
    lawtype2:"American",
    price: 158
  }
]

const sampleBooks = [
  {
    title: "Constitutional Fundamentals",
    author: "Legal Expert",
    description: "Master the foundational principles of constitutional law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
    rating: 4.5,
    reviewCount: 200,
    price: 25
  },
  {
    title: "Criminal Essentials",
    author: "Law Professor",
    description: "Comprehensive guide to criminal law principles and practice. Perfect for law students and practicing attorneys.",
    rating: 4.7,
    reviewCount: 150,
    price: 30
  },
  {
    title: "Contract Mastery",
    author: "Senior Attorney",
    description: "Deep dive into contract law with real-world examples and case studies. Essential reading for contract specialists.",
    rating: 4.6,
    reviewCount: 180,
    price: 28
  },
  {
    title: "Tort Principles",
    author: "Academic Scholar",
    description: "Understanding tort law through practical examples and detailed explanations of key concepts and precedents.",
    rating: 4.4,
    reviewCount: 120,
    price: 22
  },
  {
    title: "Property Guide",
    author: "Real Estate Expert",
    description: "Comprehensive coverage of property law fundamentals, from ownership rights to real estate transactions.",
    rating: 4.8,
    reviewCount: 220,
    price: 35
  },
  {
    title: "Evidence Handbook",
    author: "Trial Attorney",
    description: "Master the rules of evidence with this practical handbook designed for courtroom success.",
    rating: 4.3,
    reviewCount: 95,
    price: 27
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E6eeec]">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-medium text-[#0F3d3e] leading-tight">
              Learn Law. Master Practice.
              <br />
              Build Your Legal Future.
            </h1>

            <p className="mt-6 text-lg text-black font-poppins font-medium max-w-xl">
              Access expert-led law courses and a curated library of essential books and
              Bar Exam materials — designed for aspiring lawyers and professionals
              across all jurisdictions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-[#93CBAF] font-medium font-poppins text-[#0F3D3E] px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors "
              >
                Explore Courses and Certifications
              </Link>

              <Link
                href="#"
                className="bg-[#93CBAF] text-[#0F3D3E] px-8 py-3 font-poopins font-medium rounded-full hover:bg-opacity-90 transition-colors "
              >
                Law Books
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[500px] h-[600px] rounded-3xl overflow-hidden">
              <Image 
                src="/landing-img-1.png"
                alt="Law & Bar Academy Landing Image"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 500px) 100vw, 500px"
              />
            </div>
            <button className=" bg-white px-8 py-3 text-[#0F3D3E] font-medium hover:shadow-lg transition-shadow relative bottom-20 mr-25 mt-10">
              <div className="relative">
                Subscribe to our Newsletter
                <div className="h-px bg-[#0F3D3E] absolute left-[-10%] right-[-10%] bottom-0"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Courses Section */}
      <div className="bg-white py-16">
        <div className="mx-16">
          <div className="mb-8">
          <div className="flex items-center gap-12 mb-10">
            
            <Image
            src="/ISO-img.png"
            alt="ISO image"
            
            width={160}
            height={160}/>
             <Image
            src="/UKRLP-img.png"
            alt="UKRLP image"
           
            width={160}
            height={160}/>
             <Image
            src="/horses-img.png"
            alt="Horses image"
            
            width={120}
            height={120}/>
             <Image
            src="/ISO-img.png"
            alt="ISO image"
            
            width={160}
            height={160}/>
             <Image
            src="/UKRLP-img.png"
            alt="UKRLP image"
           
            width={160}
            height={160}/>
             <Image
            src="/horses-img.png"
            alt="Horses image"
            
            width={120}
            height={120}/>
            </div>

            
            <h2 className="text-[#0F3D3E] text-sm font-medium font-poppins mb-2">EXPLORE OUR COURSES</h2>
            <h3 className="text-3xl font-poppins text-[#0F3D3E] font-medium">Master the Law, Your Way</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCourses.map((course, id) => (
              <CourseCard key={id} {...course} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/lawcourses">
            <button className="bg-[#0F3d3e] text-white px-6 py-2 rounded-xl hover:bg-[#0F4C5C]/90 flex items-center gap-2">
              EXPLORE MORE COURSES
              <span className="text-lg">→</span>
            </button>
            </Link>
          </div>
          {/* Video Placeholder Section */}
          <div className="-mx-16 mt-16 relative h-[370px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
            {/* Placeholder background image */}
            <div className="absolute inset-0 opacity-90 bg-[url('/gavel-img.png')] bg-cover bg-center"></div>
            {/* Content overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-start px-24">
              <div className="flex-1 flex items-start justify-between pt-16">
                {/* Text and button */}
                <div className="max-w-xl ml-12 mt-6">
                  <h2 className="text-4xl text-white font-serif leading-tight mb-6">
                    Crack the SQE & Bar Exams
                    <br />
                    with Confidence
                  </h2>
                  <button className="bg-[#0F3D3E] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#0F4C5C]/90">
                    LEARN MORE
                    <span className="text-lg">→</span>
                  </button>
                </div>
                {/* Play button */}
                <div className="flex items-start justify-center pt-4 mr-14 mt-15">
                  <button className="w-24 h-24 rounded-full backdrop-blur-full border-1 border-gray flex items-center justify-center transition-transform hover:scale-110 group p-4">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-gray border-b-[12px] border-b-transparent ml-2 group-hover:border-l-[#93CBAF]"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Law Books Section */}
          <div className="mt-16">
            <div className="mb-8">
              <h2 className="text-[#0F3D3E] text-md font-semibold font-poppins mb-2">LAW BOOKS</h2>
              <h3 className="text-3xl font-medium font-poppins text-[#0F3D3E]">Forget Theory—These Are the Real-World Law Manuals Practicing Lawyers Rely On!</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {sampleBooks.map((book, index) => (
    <BooklawCard 
      key={index} 
      title={book.title}
      author={book.author}
      description={book.description}
      rating={book.rating}
      reviewCount={book.reviewCount}
      price={book.price}
    />
  ))}
</div>  
            <div className="flex justify-center mt-12">
              <button className="bg-[#0F3d3e] text-white px-6 py-2 rounded-xl hover:bg-[#0F4C5C]/90 flex items-center gap-2">
                EXPLORE MORE BOOKS
                <span className="text-lg">→</span>
              </button>
            </div>
            <div className='mt-10'>
              <TestimonialCarousel/>
            </div>
            <h1 className='mt-20  text-[#0f3d3e] text-3xl font-poppins font-medium flex items-center justify-center'>
            Read Our Blog and Articles
            </h1>
            <div className='mt-10 flex items-center justify-center'>
              <BlogCard/>
            </div>
            <h1 className=' text-[#0f3d3e] text-xl font-poppins font-semibold flex items-center justify-center'>OUT BLOG</h1>

            {/* Features Section */}
            <div className="-mx-16 bg-[#D9D9D94D] px-16 py-12 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto"> 
                {/* Left Side - Features */} 
                <div className="space-y-10"> 
                  <h1 className="text-4xl md:text-5xl font-bold text-[#0f3d3e]">Why Law & Bar Academy?</h1> 

                  <div className="space-y-8"> 
                    {/* Feature 1 */} 
                    <div className="flex items-center gap-6"> 
                      <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm"> 
                        <Grid className="w-7 h-7 text-[#0f3d3e]" /> 
                      </div> 
                      <div className="flex-1"> 
                        <h3 className="text-xl font-medium text-[#6b7280]">Expert-Led, Practice-Focused Learning</h3> 
                      </div> 
                    </div> 

                    {/* Feature 2 */} 
                    <div className="flex items-center gap-6"> 
                      <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm"> 
                        <Globe className="w-7 h-7 text-[#0f3d3e]" /> 
                      </div> 
                      <div className="flex-1"> 
                        <h3 className="text-xl font-medium text-[#6b7280]">Hands-On, Real-World Case Modules</h3> 
                      </div> 
                    </div> 

                    {/* Feature 3 */} 
                    <div className="flex items-center gap-6"> 
                      <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm"> 
                        <Lock className="w-7 h-7 text-[#0f3d3e]" /> 
                      </div> 
                      <div className="flex-1"> 
                        <h3 className="text-xl font-medium text-[#6b7280]">Flexible, Lifetime Access</h3> 
                      </div> 
                    </div> 

                    {/* Feature 4 */} 
                    <div className="flex items-center gap-6"> 
                      <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm"> 
                        <Award className="w-7 h-7 text-[#0f3d3e]" /> 
                      </div> 
                      <div className="flex-1"> 
                        <h3 className="text-xl font-medium text-[#6b7280]"> 
                          UK-Accredited Certification & Global Recognition 
                        </h3> 
                      </div> 
                    </div> 
                  </div> 
                </div> 

                {/* Right Side - Image */} 
                <div className="rounded-2xl overflow-hidden bg-[#d2e6e4] p-8"> 
                  <div className="relative rounded-xl overflow-hidden"> 
                    <Image 
                      src="/study-img.png"
                      alt="Student studying with laptop" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover" 
                      priority 
                    /> 
                  </div> 
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-white py-12">
              <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <h2 className="text-4xl font-poppins font-semibold text-[#0f3d3e]">Subscribe to Our Newsletter</h2>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white text-black px-4 py-4 w-80 border border-[#0f3d3e] focus:outline-none"
                  />
                  <button 
                    className="bg-[#0f3d3e] text-white px-4 py-2 hover:bg-opacity-90 flex items-center justify-center"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="-mx-16 bg-[#0f3d3e] px-16 py-16">
              <div className="max-w-7xl mx-auto px-4 relative">
                {/* Logo elements */}
                
               

                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-10">
                    {/* Left side - Heading */}
                    <div className="md:col-span-4">
                      <h2 className="text-6xl font-light">Contact Us</h2>
                    </div>

                    {/* Right side - Form */}
                    <div className="md:col-span-8 space-y-8">
                      {/* First row - First Name and Last Name */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                          <label htmlFor="firstName" className="block mb-2 text-sm">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full bg-transparent border-b border-white/70 pb-2 outline-none focus:border-white"
                          />
                        </div>

                        {/* Last Name */}
                        <div className="relative">
                          <label htmlFor="lastName" className="block mb-2 text-sm">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full bg-transparent border-b border-white/70 pb-2 outline-none focus:border-white"
                          />
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <label htmlFor="email" className="block mb-2 text-sm">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full bg-transparent border-b border-white/70 pb-2 outline-none focus:border-white"
                          />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                          <label htmlFor="phone" className="block mb-2 text-sm">
                            Phone No.
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full bg-transparent border-b border-white/70 pb-2 outline-none focus:border-white"
                          />
                        </div>

                        {/* Job Title */}
                        <div className="relative">
                          <label htmlFor="jobTitle" className="block mb-2 text-sm">
                            Job Title
                          </label>
                          <input
                            type="text"
                            id="jobTitle"
                            className="w-full bg-transparent border-b border-white/70 pb-2 outline-none focus:border-white"
                          />
                        </div>

                        {/* Company */}
                        <div className="relative">
                          <label htmlFor="company" className="block mb-2 text-sm">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            className="w-full bg-transparent border-b border-white/70 pb-2 outline-none focus:border-white"
                          />
                        </div>

                        {/* How did you hear about us */}
                        <div className="relative md:col-span-2">
                          <label htmlFor="source" className="block mb-2 text-sm">
                            How did you hear about us?
                          </label>
                          <input
                            type="text"
                            id="source"
                            className="w-full bg-transparent border-b border-white/70 pb-2 outline-none focus:border-white"
                          />
                        </div>

                        {/* Message */}
                        <div className="relative col-span-2">
                          <label htmlFor="message" className="block mb-2 text-sm">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            className="w-full bg-transparent border border-white/30 rounded p-2 outline-none focus:border-white resize-none"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          
        </div>
        <div>
          <Footer/>
        </div>
      </div>
      
    
   </main>
  )
}
    
   
 