"use client"

import Image from "next/image"

interface MockTestCardProps {
  title: string
  volume?: string
  duration: string
  attemptsTaken: number
  averageScore: number
  completionPercentage: number
  imageUrl?: string
  onStartTest?: () => void
}

export default function MockTestCard({
  title,
  volume,
  duration,
  attemptsTaken,
  averageScore,
  completionPercentage,
  imageUrl = "/placeholder.svg?height=400&width=600&query=judge gavel on dark wooden desk close up",
  onStartTest,
}: MockTestCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 p-0">
      {/* Image Section */}
      <div className="h-[230px] w-full relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
          {volume && <span> – {volume}</span>}
        </h2>

        {/* Stats */}
        <div className="space-y-3 mb-6">
          {/* Duration */}
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div className="text-gray-700 text-lg">
              <span className="font-medium">Duration:</span> {duration}
            </div>
          </div>

          {/* Attempts Taken */}
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <div className="text-gray-700 text-lg">
              <span className="font-medium">Attempts Taken:</span> {attemptsTaken}
            </div>
          </div>

          {/* Average Score */}
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            >
              <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <div className="text-gray-700 text-lg">
              <span className="font-medium">Average Score:</span> {averageScore}%
            </div>
          </div>
        </div>

        {/* Progress Bar and Button */}
        <div className="flex items-center justify-between gap-4">
          {/* Progress Section */}
          <div className="flex-1">
            <div className="h-4 bg-teal-100 rounded-full overflow-hidden">
              <div className="h-full bg-teal-900 rounded-full" style={{ width: `${completionPercentage}%` }} />
            </div>
            <p className="text-gray-600 mt-1 text-sm">{completionPercentage}% Completed</p>
          </div>

          {/* Start Test Button */}
          <button
            onClick={onStartTest}
            className="bg-teal-900 text-white px-6 py-2 rounded-full mb-2 ml-1 hover:bg-teal-800 transition-colors font-medium"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  )
}
