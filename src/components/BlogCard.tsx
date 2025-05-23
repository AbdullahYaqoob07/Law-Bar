"use client"

import Image from "next/image"
import Link from "next/link"

// Sample blog data
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
    day: 29,
    month: "Sep",
    year: 2023,
    title: "How this student became a lawyer?",
    slug: "student-became-lawyer-3",
  },
]

interface BlogPost {
  id: number
  image: string
  day: number
  month: string
  year: number
  title: string
  slug: string
}

interface BlogCardProps {
  posts?: BlogPost[]
  showGrid?: boolean
}

export default function BlogCard({ posts = blogPosts, showGrid = true }: BlogCardProps) {
  // Single card component
  const SingleCard = ({ post }: { post: BlogPost }) => (
    <div className="relative w-full max-w-sm h-96 rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
          priority={post.id <= 3}
        />
      </div>

      {/* White Card Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-6" style={{ top: "50%" }}>
        <div className="flex items-start gap-4 mb-6">
          <div className="text-[#0f3d3e] flex-shrink-0">
            <div className="text-4xl font-semibold leading-none">{post.day}</div>
            <div className="text-sm mt-1">
              {post.month} {post.year}
            </div>
          </div>

          <h3 className="text-[#0f3d3e] text-xl font-medium leading-tight flex-1">{post.title}</h3>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-[#0f3d3e] ml-20 font-medium flex items-center jusitify-center hover:underline transition-all duration-200"
        >
          READ MORE <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  )

  // If showGrid is false, return just the first card
  if (!showGrid) {
    return <SingleCard post={posts[0]} />
  }

  // Return grid of cards
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {posts.map((post) => (
          <SingleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
