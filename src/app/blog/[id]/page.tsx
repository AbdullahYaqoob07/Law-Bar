"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Facebook, Twitter, Linkedin, User, Mail, Phone } from "lucide-react"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#a9c7c0]">
      {/* Header */}
      <header className="px-4 py-4">
        <div className="bg-white rounded-full shadow-sm px-6 py-3 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-[#0f3d3e] font-bold text-2xl">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-[#0f3d3e] text-3xl">B</span>
                <span className="text-sm font-medium">Law & Bar Academy</span>
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:text-[#0f3d3e]">
                Law Courses <span className="text-xs">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:text-[#0f3d3e]">
                SQE <span className="text-xs">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:text-[#0f3d3e]">
                Law Books <span className="text-xs">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:text-[#0f3d3e]">
                Blog <span className="text-xs">▼</span>
              </button>
            </div>
            <button className="bg-[#0f3d3e] text-white px-4 py-1 rounded-md hover:bg-opacity-90 transition-all">
              LOGIN
              <span className="ml-2">→</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder-gavel.png"
            alt="Gavel on desk"
            width={1200}
            height={400}
            className="w-full h-[250px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="bg-black bg-opacity-50 text-white text-xs px-3 py-1 rounded-full inline-block mb-2">
              Artificial Intelligence
            </div>
            <h1 className="text-2xl font-bold mb-1">
              Mastering ChatGPT Blog Creation: Dos and Don&apos;ts for SaaS Marketing Managers
            </h1>
            <p className="text-sm">Oct 19 • 10 min read</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#0f3d3e] mb-6">Exploring Generative AI in National Law</h2>

            <div className="prose max-w-none">
              <p className="mb-4">
                Hello there! As a marketing manager in the SaaS industry, you might be looking for innovative ways to
                engage your audience. I bet generative AI has crossed your mind as an option for creating content. Well,
                let me share from my firsthand experience.
              </p>

              <p className="mb-4">
                Google encourages high-quality blogs regardless of whether they&apos;re written by humans or created using
                artificial intelligence like ChatGPT. Here&apos;s what matters: producing original material with expertise
                and trustworthiness based on Google E-E-A-T principles.
              </p>

              <p className="mb-4">
                This means focusing more on people-first writing rather than primarily employing AI tools to manipulate
                search rankings. There comes a time when many experienced professionals want to communicate their
                insights but get stuck due to limited writing skills – that&apos;s where Generative AI can step in.
              </p>

              <p className="mb-4">
                So, together, we&apos;re going explore how this technology could help us deliver valuable content without
                sounding robotic or defaulting into mere regurgitations of existing materials (spoiler alert - common
                pitfalls!). Hang tight - it&apos;ll be a fun learning journey!
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Author Card */}
            <div className="bg-[#0f3d3e] text-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder-author.png"
                    alt="Tamás Hám-Szabó"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Tamás Hám-Szabó</h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Founder of S.A.S Firm - the Best AI and Data-Driven Customer Engagement Tool
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  With 13 years in SaaS, I&apos&apos&apos;ve built Multichannel Marketing Automation platforms for SMBs and AI. Let&apos;s
                  connect if you share the same drive for success.
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <Link href="#" className="text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Share Card */}
            <div className="bg-[#0f3d3e] text-white p-6 rounded-lg">
              <p className="text-sm mb-3">Share with your community!</p>
              <div className="flex gap-2">
                <Link href="#" className="text-white">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* In This Article */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">In this article</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-[#0f3d3e] hover:underline">
                    Exploring Generative AI in Content Creation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#0f3d3e] hover:underline">
                    Steering Clear of Common AI Writing Pitfalls
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#0f3d3e] hover:underline">
                    Steering Clear of Common AI Writing Pitfalls
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#0f3d3e] hover:underline">
                    Steering Clear of Common AI Writing Pitfalls
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#0f3d3e] hover:underline">
                    Steering Clear of Common AI Writing Pitfalls
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Sharing Section */}
      <div className="max-w-7xl mx-auto px-4 my-8">
        <div className="bg-[#0f3d3e] text-white py-6 px-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-medium">Like what you see? Share with a friend.</h3>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
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
      <footer className="bg-[#0e1317] text-white pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white text-3xl font-bold">B</span>
                <span className="text-sm font-medium">Law & Bar Academy</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <User className="h-5 w-5" />
                  <div>
                    <div className="text-xs text-gray-500">OAT-AHING Oppenheim</div>
                    <div className="text-sm">United Kingdom</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <div>
                    <div className="text-sm">info.help@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="text-sm">+123 (0)123 456 789</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Pages Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Room List
                </Link>
              </div>
              <div className="mt-6">
                <button className="bg-[#0f3d3e] text-white px-4 py-2 rounded-md flex items-center gap-2">
                  BECOME A LECTURER <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div>Copyright © 2023</div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="#" className="hover:text-white">
                Website by
              </Link>
              <Link href="#" className="hover:text-white">
                FAQ
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
