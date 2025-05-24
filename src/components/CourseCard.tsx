import Image from 'next/image';
import Link from 'next/link';

type CourseCardProps = {
  id: number | string
  title: string
  description: string
  lawtype1: string | number
  lawtype2: string | number
  price: number
  viewUrl?:string
}

export default function CourseCard({ id, title, description, lawtype1, lawtype2, price,viewUrl}: CourseCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-[350px] flex flex-col">
      <div className="relative h-[180px] w-full bg-gray-50">
        <Image
          src="/gavel-img.png"
          alt={title}
          fill
          className="object-cover w-[90%] px-2 pt-2"
          priority
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-[#0F4C5C]">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 mb-3 flex-grow">{description}</p> 

        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#0F3D3E]/60 text-sm px-3 py-1 border border-gray-200 rounded-full font-verylight">{lawtype1}</span>
          <span className="text-[#0F3D3E]/60 border border-gray-200 text-sm px-3 py-1 rounded-full font-verylight">{lawtype2}</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1">
            <span className="text-[12px] font-poppins text-[#0F3D3E]">From</span>
            <span className="text-lg font-semibold text-[#0F3D3E] font-poppins">${price}</span>
          </div>
          <div className="flex gap-2">
          {viewUrl && (
  <Link href={viewUrl}>
    <button className="bg-[#0F4C5C] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0F4C5C]/90 transition">
      View Details
    </button>
  </Link>
)}


            <button className="bg-[#0F4C5C] text-white px-6 py-2 rounded-full text-sm hover:bg-[#0F4C5C]/90">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
