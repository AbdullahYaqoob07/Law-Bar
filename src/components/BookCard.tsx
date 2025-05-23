"use client"
import Image from "next/image";

export default function BooklawCard({
  title = "Book Name here",
  author = "Author Name",
  rating = 4.5,
  reviewCount = 200,
  description = "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
  price = 20,
  imageUrl = "/book.png",
  onBuyNow = () => alert("Buying the book..."),
} = {}) {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-[350px] flex flex-col">
      <div className="relative h-[380px] w-full bg-gray-50">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover w-[70%] h-[100%] px-2 pt-6 rounded-xl shadow-full"
          priority
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title and Author in one row */}
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-xl font-medium text-black text-wrap">{title}</h3>
          <span className="text-sm text-black/50 text-nowrap">by {author}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 text-sm text-gray-500 mb-2">
            
        <span className="text-black font-semibold">{rating.toFixed(1)}</span>
          {/* Stars */}
          <div className="flex text-orange-400 text-lg">
            {Array.from({ length: filledStars }).map((_, index) => (
              <span key={`filled-${index}`}>★</span>
            ))}
            {hasHalfStar && <span className="text-orange-200 text-lg">★</span>}
            {Array.from({ length: totalStars - filledStars - (hasHalfStar ? 1 : 0) }).map((_, index) => (
              <span key={`empty-${index}`} className="text-gray-300">★</span>
            ))}
          </div>

          {/* Rating */}
         

          {/* Review count */}
          <span className="text-gray-400">({reviewCount})</span>
        </div>

        {/* Description */}
        <p className="text-sm text-black/60 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex items-center gap-1">
            
            <span className="text-lg font-semibold text-[#0F3D3E]">
              ${price}
            </span>
          </div>
          <button
            onClick={onBuyNow}
            className="bg-[#0F3D3E] text-white px-6 py-4 rounded-full text-sm hover:bg-[#0F4C5C]/90"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}