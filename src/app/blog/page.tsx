"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowRight,
 
} from "lucide-react";
import Header from "@/components/Header";
import { useState } from "react";
import FilterSidebar from "@/components/FilterSIdebar";
import Footer from "@/components/Footer";

// Blog data
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

const trendingPosts = blogPosts.slice(0, 3);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const postsPerPage = 6;
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/gavel-table-img.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 px-4 py-4">
          <Header />
        </div>
        <div className="relative z-10">
          <div className="py-20 px-6 text-center md:text-left md:px-16 max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-medium text-white font-poppins mb-4">
              Latest news, articles, and posts
            </h1>
            <p className="text-white text-lg font-medium font-poppins">
              Check out the latest posts, news and articles from our side and keep updated.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar/>
        </div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="uppercase text-xs font-medium text-gray-500 mb-2">
            EXPLORE LATEST ARTICLES
          </div>
          <h2 className="text-2xl font-bold text-[#0f3d3e] mb-4">Articles</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#0f3d3e]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0f3d3e] text-white p-1 rounded-md">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
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
                  <h3 className="font-bold text-gray-800">{post.title}</h3>
                </div>
                <div className="flex justify-end">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#0f3d3e] text-sm flex items-center gap-1 font-medium"
                  >
                    READ MORE <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Trending Blogs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="uppercase text-xs font-medium text-gray-500 mb-2">OUR BLOG</div>
            <h2 className="text-3xl font-bold text-[#0f3d3e]">Trending Blogs & Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trendingPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg?height=200&width=300&query=modern apartment interior"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
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
                    <h3 className="font-bold text-gray-800">{post.title}</h3>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#0f3d3e] text-sm flex items-center gap-1 font-medium"
                    >
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
            <Footer/>
    </div>
    </div>
  )
}
