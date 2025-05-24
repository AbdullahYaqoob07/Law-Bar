"use client"
import Image from "next/image";

export default function BooklawCard({
  title = "Book Name here",
  author = "Author Name",
  publisher = "Publisher Name",
  description = "Master the foundational principles of contract law with our expertly designed course.",
  price = 158,
  reviewCount= 120,
  rating = 4.5,
  imageUrl = "/book.png",
  isbn = "9781663384003",
  formats = ["Print Book", "Audio Book"],
  onBuyNow = () => alert("Buying the book..."),
} = {}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex p-6 gap-6 max-w-3xl">
      {/* Book Image */}
      <div className="relative w-48 h-64 flex-shrink-0 bg-[#E8EFEE] rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain p-2"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-[#0F3D3E]">{title}</h3>

        {/* Publisher */}
        <div className="space-y-1">
          <p className="text-sm text-gray-600">Publisher: {publisher}</p>
          <p className="text-sm text-gray-600">ISBN: {isbn}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Format Options */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Format:</p>
          <div className="flex gap-2">
            {formats.map((format, index) => (
              <span 
                key={format}
                className={`px-4 py-1.5 rounded-full text-sm ${index === 0 
                  ? 'bg-[#E8EFEE] text-[#0F3D3E]' 
                  : 'bg-white border border-gray-200 text-gray-600'}`}
              >
                {format}
              </span>
            ))}
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">From</span>
            <span className="text-xl font-semibold text-[#0F3D3E]">
              ${price}
            </span>
          </div>
          <button
            onClick={onBuyNow}
            className="bg-[#0F3D3E] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#0F3D3E]/90 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}