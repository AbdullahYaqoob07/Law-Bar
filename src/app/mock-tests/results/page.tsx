"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function TestResultsPage() {
  const router = useRouter()

  // Mock results data
  const results = {
    score: 78,
    correctAnswers: 31,
    totalQuestions: 40,
    timeTaken: "1:14:53",
    passingScore: 70,
  }

  const passed = results.score >= results.passingScore

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          {/* Result Icon */}
          <div className="mb-6">
            {passed ? (
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            ) : (
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            )}
          </div>

          {/* Result Message */}
          <h1 className="text-3xl font-bold mb-2">{passed ? "Congratulations!" : "Keep Practicing!"}</h1>
          <p className="text-gray-600 mb-8">
            {passed ? "You passed the test!" : "You didn't pass this time, but don't give up!"}
          </p>

          {/* Score Display */}
          <div className="mb-8">
            <div className="text-6xl font-bold text-teal-900 mb-2">{results.score}%</div>
            <p className="text-gray-600">
              {results.correctAnswers} out of {results.totalQuestions} questions correct
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900">{results.correctAnswers}</div>
              <div className="text-sm text-gray-600">Correct</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900">{results.totalQuestions - results.correctAnswers}</div>
              <div className="text-sm text-gray-600">Incorrect</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900">{results.timeTaken}</div>
              <div className="text-sm text-gray-600">Time Taken</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push("/mock-tests/review")}
              className="px-6 py-3 bg-white border-2 border-teal-900 text-teal-900 rounded-lg font-medium hover:bg-teal-50 transition-colors"
            >
              Review Answers
            </button>
            <Link
              href="/mock-tests"
              className="px-6 py-3 bg-teal-900 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors"
            >
              Back to Tests
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
