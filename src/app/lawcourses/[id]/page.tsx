import { ArrowLeft,ArrowRight, ChevronDown, Twitter, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProfileCard from '@/components/ProfileCard'

export default function CourseDetails() {
  return (
    <div className="min-h-screen bg-white mx-auto max-w-7xl px-6 py-2">
      <Header />
      <main className="w-[90%] mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:w-2/3">
            {/* Back Button */}
            <Link href="/lawcourses" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-6">
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>

            {/* Course Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contract Law Essentials</h1>

            {/* Course Description */}
            <p className="text-gray-600 mb-6">
              Master the foundational principles of contract law with our expertly designed course. This course breaks
              down complex legal concepts into clear, practical lessons.
            </p>

            {/* Course Image */}
            <div className="mb-8 ml-20">
              <Image
                src="/gavel.png"
                alt="Contract Law"
                width={150}
                height={150}
                className="w-full max-w-md h-auto object-cover"
              />
            </div>

            {/* Tabs */}
            <div className="border-b mb-6">
              <div className="flex">
                <button className="px-6 py-3 text-sm font-medium border-b-2 border-[#0f3d3e] text-[#0f3d3e]">
                  Videos Lesson
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Download Resources
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Transcript & Quizzes
                </button>
              </div>
            </div>

            {/* Course Content Accordion */}
            <div className="mb-6">
              {/* Module 1 */}
              <div className="border border-gray-200">
                <button className="w-full flex items-center justify-between p-4 text-left bg-gray-100">
                  <div className="flex items-center">
                    <span className="font-medium">1. Introduction</span>
                  </div>
                  <ChevronDown size={20} className="text-gray-500" />
                </button>
                <div className="px-4 py-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                      <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Course One</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module 2 */}
              <div className="border border-gray-200 border-t-0">
                <button className="w-full flex items-center justify-between p-4 text-left bg-gray-100">
                  <div className="flex items-center">
                    <span className="font-medium">2. Module 2</span>
                  </div>
                  <ChevronDown size={20} className="text-gray-500" />
                </button>
                {/* Content is collapsed by default */}
              </div>
            </div>
          </div>

          {/* Right Column - Course Details */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="border rounded-md overflow-hidden">
              <Image
                src="/gavel-img.png"
                alt="Contract Law"
                width={400}
                height={200}
                className="w-full h-auto object-contain p-2"
              />
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-2xl font-bold text-gray-900">$158</p>
                  <p className="text-sm text-gray-500">1 day left at this price!</p>
                </div>

                {/* Center the button horizontally */}
                <div className="flex justify-center">
                  <button className="mt-2 w-[60%] bg-[#0f3d3e] text-white px-3 py-2 rounded-xl font-medium hover:bg-opacity-90 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* Instructor */}
          <div className='mt-6 w-[120%]'>
      <ProfileCard />
      </div>

          </div>
        </div>

        {/* Share banner: moved outside columns but inside main */}
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
      </main>
      <Footer />
    </div>
  )
}
