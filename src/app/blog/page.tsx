"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import { useState } from "react";
import FilterSidebar from "@/components/FilterSIdebar";
import Footer from "@/components/Footer";
import FilterButton from "@/components/FilterButton";

const blogPosts = [
  {
    id: 1,
    image: "/blog-img1.png",
    day: 21,
    month: "Jul",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-1",
  },
  {
    id: 2,
    image: "/blog-img2.png",
    day: 25,
    month: "Aug",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-2",
  },
  {
    id: 3,
    image: "/blog-img3.png",
    day: 25,
    month: "Aug",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-3",
  },
  {
    id: 4,
    image: "/blog-img1.png",
    day: 21,
    month: "Jul",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-4",
  },
  {
    id: 5,
    image: "/blog-img2.png",
    day: 25,
    month: "Aug",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-5",
  },
  {
    id: 6,
    image: "/blog-img3.png",
    day: 25,
    month: "Aug",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-6",
  },
  {
    id: 7,
    image: "/blog-img1.png",
    day: 21,
    month: "Jul",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-7",
  },
  {
    id: 8,
    image: "/blog-img2.png",
    day: 25,
    month: "Aug",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-8",
  },
  {
    id: 9,
    image: "/blog-img3.png",
    day: 25,
    month: "Aug",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-9",
  },
];

export default function BlogPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPractice, setSelectedPractice] = useState("");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    if (searchQuery) {
      return post.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-[url('/gavel-table-img.jpg')] bg-cover bg-center w-full h-[400px]">
        <div className="bg-black/50 w-full  pt-0">
          <Header />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-5xl font-bold text-white mb-4">Latest news, articles, and posts</h1>
            <p className="text-white text-lg">Check out the latest posts, news and articles from our side and keep updated.</p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className="w-64 flex-shrink-0">
            <FilterSidebar onClick={() => setFilterOpen(!filterOpen)} />
          </div>

          {/* Main Content */}
          <div className="flex-1 gap-2">
            <h1 className="text-lg font-poppins text-[#0f3d3e] font-semibold mb-2 ">Explore Latest articles</h1>
            <h1 className="text-3xl font-poppins text-[#0f3d3e] font-semibold mb-2 ">Articles</h1>
            {/* Search Bar */}
            <div className="relative mb-8">
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

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3">
              {filteredPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded">
                        <div className="text-center">
                          <div className="text-xl font-bold">{post.day}</div>
                          <div className="text-sm">{post.month}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#0F3D3E] mb-2">{post.title}</h3>
                      <div className="flex items-center text-[#0F3D3E]">
                        <span className="text-sm">READ MORE →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-12">
            <Link href="/blog/id">
            <button className="bg-[#0F3d3e] text-white px-6 py-2 rounded-xl hover:bg-[#0F4C5C]/90 flex items-center gap-2">
              EXPLORE MORE ARTICLES
              <span className="text-lg">→</span>
            </button>QAV
            </Link>
          </div>
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
  );
}
