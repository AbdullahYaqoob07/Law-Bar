"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CourseCard from "@/components/CourseCard"
import { Search } from "lucide-react"

// Sample course data
const courses = [
   
        {
          id: "criminal-law-101",
          title: "Criminal Law Basics",
          description: "An introduction to criminal law and courtroom procedures.",
          lawtype1: "Criminal",
          lawtype2: "Courtroom",
          price: 99,
          viewUrl: "/lawcourses/criminal-law-101"
        },
        {
          id: "property-law-201",
          title: "Advanced Property Law",
          description: "Deep dive into real estate and property law.",
          lawtype1: "Property",
          lawtype2: "Real Estate",
          price: 149,
          viewUrl: "/lawcourses/property-law-201"
        },
        {
          id: "family-law-301",
          title: "Family Law Essentials",
          description: "Covers divorce, custody, and child support law.",
          lawtype1: "Family",
          lawtype2: "Custody",
          price: 129,
          viewUrl: "/lawcourses/family-law-301"
        },
        {
          id: "corporate-law-401",
          title: "Corporate Law Fundamentals",
          description: "Understand the legal structure of corporations and compliance.",
          lawtype1: "Corporate",
          lawtype2: "Compliance",
          price: 179,
          viewUrl: "/lawcourses/corporate-law-401"
        },
        {
          id: "immigration-law-501",
          title: "Immigration Law Insights",
          description: "Legal frameworks for immigration, visas, and citizenship.",
          lawtype1: "Immigration",
          lawtype2: "International",
          price: 139,
          viewUrl: "/lawcourses/immigration-law-501"
        },
        {
          id: "intellectual-property-601",
          title: "Intellectual Property Rights",
          description: "Protect your creative works and inventions legally.",
          lawtype1: "IP",
          lawtype2: "Technology",
          price: 159,
          viewUrl: "/lawcourses/intellectual-property-601"
        },
      
      
    {
      id: 6,
      title: "Family Law Overview",
      description: "A comprehensive overview of family law and related legal issues.",
      image: "/gavel-img.png",
      languages: ["English", "American"],
      price: 160,
      viewDetailsUrl: "/courses/family-law-overview",
    },
    {
      id: 7,
      title: "Environmental Law",
      description: "Study the laws protecting the environment and natural resources.",
      image: "/gavel-img.png",
      languages: ["English", "American"],
      price: 170,
      viewDetailsUrl: "/courses/environmental-law",
    },
    {
      id: 8,
      title: "Tax Law Essentials",
      description: "Understand the core concepts of tax law and compliance.",
      image: "/gavel-img.png",
      languages: ["English", "American"],
      price: 190,
      viewDetailsUrl: "/courses/tax-law-essentials",
    },
    {
      id: 9,
      title: "International Trade Law",
      description: "Learn the fundamentals of laws governing international trade.",
      image: "/gavel-img.png",
      languages: ["English", "International"],
      price: 210,
      viewDetailsUrl: "/courses/international-trade-law",
    },
]

// In the JSX where courses are mapped
{courses.map((course, index) => (
  <CourseCard
    key={course.id}
    id={course.id}
    title={course.title}
    description={course.description}
    lawtype1={course.lawtype1}
    lawtype2={course.lawtype2}
    price={course.price}
  />
))}

export default function LawCoursePage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")

  const toggleFilter = () => {
    setFilterOpen(!filterOpen)
  }

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-white mx-auto max-w-7xl px-6 py-2">
      <Header />
      <main className="w-[90%] mx-auto max-w-7xl px-6 py-8">
        <div className="flex mt-10 mb-10 justify-between items-center gap-8">
          <button
            onClick={toggleFilter}
            className="flex items-center gap-2 bg-[#0f3d3e] text-white px-4 py-2 rounded-xl"
          >
            Filter
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M3 5.25H15M5.25 9H12.75M7.5 12.75H10.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="relative flex-1 max-w-[63%]">
            <input
              type="text"
              placeholder="Search anything here..."
              className="w-full py-3 px-8 border border-black/40 bg-gray-100 rounded-xl text-black/40 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full px-5 flex items-center justify-center bg-[#0f3d3e] rounded-r-lg">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {filterOpen && (
            <div className="w-64 space-y-6">
              <div className="space-y-2">
                <div className="h-px bg-black/30 mt-2"></div>
                <h3 className="font-semibold text-lg text-black">Course Category</h3>
                <div className="relative">
                  <select
                    className="w-full p-2 border rounded-lg appearance-none text-black/30 bg-white pr-8"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="contract">Contract Law</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="corporate">Corporate Law</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-px bg-black/30"></div>
                <h3 className="font-semibold text-lg text-black">Language</h3>
                <div className="relative">
                  <select
                    className="w-full p-2 border rounded-lg appearance-none text-black/30 bg-white pr-8"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                  >
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="american">American</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-px bg-black/30"></div>
                <h3 className="font-semibold text-lg text-black">Countries</h3>
                <div className="relative">
                  <select
                    className="w-full p-2 border border-black/30 rounded-xl appearance-none text-black/30 bg-white pr-8"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="">Select Countries</option>
                    <option value="uk">United Kingdom</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex-1 gap-2">
            <div
              className={`grid ${
                filterOpen ? "ml-10 grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              } gap-x-2 gap-y-3`}
            >
              {filteredCourses.map((course) => (
               <CourseCard
               key={course.id}
               id={course.id}
               title={course.title}
               description={course.description}
               lawtype1={course.languages?.[0] || course.lawtype1 || ""}
               lawtype2={course.languages?.[1] || course.lawtype2 || ""}
               price={course.price}
               viewUrl={course.viewDetailsUrl || `/lawcourses/${course.id}`} // fallback to dynamic route
             />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
