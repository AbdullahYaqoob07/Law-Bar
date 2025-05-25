"use client"
import Image from "next/image";
import Link from "next/link";
export default function BooklawCard({
  title = "Book Name here",
  author = "Author Name",
  description = "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
  price = 20,
  reviewCount = 200,
  rating = 4.5,
  imageUrl = "/book.png",
  isbn = "9781663384003",
  formats = ["Print Book", "Audio Book"],
  onBuyNow = () => alert("Buying the book..."),
} = {}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border p-2 border-gray-100 overflow-hidden max-w-sm h-[100%] flex flex-col">
      {/* Book Image */}
      <div className="relative w-full h-64 bg-gradient-to-br from-black via-gray-800 to-amber-900 rounded-t-xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title and Author */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold font-poppins text-[#0f3d3e] flex-1">{title}</h3>
          <p className="text-sm text-gray-500 font-poppins ml-2">by {author}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold text-gray-900">{rating}</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-orange-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">({reviewCount})</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600  font-poppins mb-4 flex-1">
          {description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-[#0f3d3e]">${price}</span>
          <Link href={`/lawbooks/${isbn}/purchase`}>
            <button className="bg-[#0f3d3e] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#0f3d3e]/90 transition-colors">
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}