import { ArrowLeft, ChevronDown, Twitter, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
            <div className="mt-6 bg-[#0f3d3e] rounded-md p-6 text-white">
      <div className="flex items-start gap-4">
        <Image
          src="/man.png"
          alt="Instructor"
          width={64}
          height={64}
          className="rounded-md"
        />
        <Linkedin height={25} width={50} className="bg-blue-500 text-white mt-10 gap-2" />
        <div>
          <div></div>
            <h3 className="font-medium">Tamás Hám-Szabó</h3>
           
          
          <p className="text-xs text-gray-300 mt-1">
            Founder of SAAS First - the Best AI and Data-Driven Customer Engagement Tool
          </p>
        </div>
      </div>
      <p className="text-sm mt-4">
        With 11 years in SaaS, I&apos;ve built MillionVerifier and SAAS First. Passionate about SaaS, data, and AI.
        Let&apos;s connect if you share the same drive for success!
      </p>
    </div>

          </div>
        </div>

        {/* Share banner: moved outside columns but inside main */}
        <div className="w-full bg-[#0f3d3e] text-white  py-6 flex items-center justify-between rounded-md mt-6 px-6">
          <p className="text-sm font-semibold mt-1 font-poppins sm:text-base">Like what you see? Share with a friend.</p>
          <div className="flex gap-4">
            <Facebook size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
