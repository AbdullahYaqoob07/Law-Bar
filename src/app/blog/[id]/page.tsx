"use client"

import Image from "next/image"
import Link from "next/link"
import ProfileCard from "@/components/ProfileCard"
import { ArrowRight, Facebook, Twitter, Linkedin, User, Mail, Phone } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="bg-[#A9C7C0] w-full">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-12 bg-[#A9C7C0] p-6 rounded-lg">
              {/* Blog Post Preview - Left side */}
              <div className="md:w-2/3 bg-black  overflow-hidden relative shadow-lg">
                {/* Image covers the entire area with object-cover */}
                <Image
                  src="/blogs.png"
                  alt="Judge gavel on desk"
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                    <span className="text-white text-sm font-medium">Artificial Intelligence</span>
                  </div>

                  <h1 className="text-white text-2xl md:text-3xl font-bold mb-3">
                    Mastering ChatGPT Blog Creation: Dos and Don&apos;ts for SaaS Marketing Managers
                  </h1>

                  <div className="flex items-center text-white/70 text-sm">
                    <span>Oct 19</span>
                    <span className="mx-2">•</span>
                    <span>10 min read</span>
                  </div>
                </div>
              </div>

              {/* Profile and Social - Right side */}
              <div className="md:w-1/3 flex flex-col gap-6">
                {/* Profile Card */}
                <ProfileCard/>

                {/* Social Share Card */}
                <div className="bg-teal-900 rounded-xl px-6 py-3 text-white">
                  <h3 className="text-xl font-medium mb-3 mt-2">Share with your community!</h3>
                  <div className="flex gap-4 mb-2">
                    {/* Facebook */}
                    <a href="#" className="bg-white p-3 rounded-lg inline-block" aria-label="Share on Facebook">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0f3d3e" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
                      </svg>
                    </a>

                    {/* Twitter/X */}
                    <a href="#" className="bg-white p-3 rounded-lg inline-block" aria-label="Share on Twitter">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0f3d3e" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="#" className="bg-white p-3 rounded-lg inline-block" aria-label="Share on LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0f3d3e" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>

      {/* Social Sharing Section */}
      <div className="bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Article Content Section with Table of Contents */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main Article Content - Left Side (3 columns) */}
            <div className="md:col-span-3">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Exploring Generative AI in National Law</h1>

              <div className="text-gray-700 space-y-6">
                <p className="text-lg">
                  Hello there! As a marketing manager in the SaaS industry, you might be looking for innovative ways to
                  engage your audience. I bet generative AI has crossed your mind as an option for creating content.
                  Well, let me share from my firsthand experience.
                </p>

                <p className="text-lg">
                  Google encourages high-quality blogs regardless of whether they're written by humans or created using
                  artificial intelligence like ChatGPT. Here's what matters: producing original material with expertise
                  and trustworthiness based on Google E-E-A-T principles.
                </p>

                <p className="text-lg">
                  This means focusing more on people-first writing rather than primarily employing AI tools to
                  manipulate search rankings. There comes a time when many experienced professionals want to communicate
                  their insights but get stuck due to limited writing skills – that's where Generative AI can step in.
                </p>

                <p className="text-lg">
                  So, together, we're going explore how this technology could help us deliver valuable content without
                  sounding robotic or defaulting into mere regurgitations of existing materials (spoiler alert – common
                  pitfalls!). Hang tight - it'll be a fun learning journey!
                </p>
              </div>
            </div>

            {/* Table of Contents - Right Side (1 column) */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">In this article</h2>

              <div className="border-l-4 border-teal-700 pl-4 mb-6">
                <h3 className="text-lg font-bold text-teal-800 mb-2">Exploring Generative AI in Content Creation</h3>
              </div>

              <div className="space-y-4">
                <a href="#section1" className="block text-base font-medium text-gray-800 hover:text-teal-700">
                  Steering Clear of Common AI Writing Pitfalls
                </a>
                <a href="#section2" className="block text-base font-medium text-gray-800 hover:text-teal-700">
                  Steering Clear of Common AI Writing Pitfalls
                </a>
                <a href="#section3" className="block text-base font-medium text-gray-800 hover:text-teal-700">
                  Steering Clear of Common AI Writing Pitfalls
                </a>
                <a href="#section4" className="block text-base font-medium text-gray-800 hover:text-teal-700">
                  Steering Clear of Common AI Writing Pitfalls
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Share Section */}
          <div className="bg-teal-900 rounded-xl p-6 text-white mt-12 flex justify-between items-center">
            <p className="text-xl font-medium">Like what you see? Share with a friend.</p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="text-white hover:text-gray-200" aria-label="Share on Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a href="#" className="text-white hover:text-gray-200" aria-label="Share on Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="text-white hover:text-gray-200" aria-label="Share on LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      {/* Trending Blogs Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="uppercase text-xs font-medium text-gray-700 mb-2">OUR BLOG</div>
            <h2 className="text-3xl font-bold text-[#0f3d3e]">Trending Blogs & Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { day: 21, month: "Jul", year: 2023, image: "/blog-img1.png" },
              { day: 25, month: "Aug", year: 2023, image: "/blog-img2.png" },
              { day: 29, month: "Sep", year: 2023, image: "/blog-img3.png" },
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt="Blog thumbnail"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#0f3d3e]">{post.day}</div>
                      <div className="text-xs text-gray-500">
                        {post.month} {post.year}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-800">How this student became a lawyer?</h3>
                  </div>
                  <div className="flex justify-end">
                    <Link href="#" className="text-[#0f3d3e] text-sm flex items-center gap-1 font-medium">
                      READ MORE <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
    <Footer/>
    </div>
    
    </main>
  )
}
