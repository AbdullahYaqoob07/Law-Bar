"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import type { Test, UserAnswer } from "@/lib/types"
import { getTestById } from "@/lib/test-data"

export default function ReviewPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [test, setTest] = useState<Test | null>(null)
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const testId = searchParams.get("testId")
    if (!testId) {
      router.push("/mock-tests")
      return
    }

    // Get test data
    const testData = getTestById(testId)
    if (!testData) {
      router.push("/mock-tests")
      return
    }

    setTest(testData)

    // Get user answers from session storage
    const storedResults = sessionStorage.getItem("testResults")
    if (storedResults) {
      const results = JSON.parse(storedResults)
      if (results.testId === testId) {
        // In a real app, you would fetch the user's answers from a database
        // For now, we'll create mock answers
        const mockAnswers = testData.questions.map((q, index) => ({
          questionId: q.id,
          selectedOption: index % 4, // Just for demonstration
          isCorrect: index % 4 === q.correctAnswer,
          timeSpent: 0,
        }))
        setUserAnswers(mockAnswers)
      }
    }

    setLoading(false)
  }, [searchParams, router])

  if (loading || !test) {
    return <div className="min-h-screen flex items-center justify-center">Loading review...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {test.title} {test.volume ? `– ${test.volume}` : ""} - Review
          </h1>
          <p className="text-gray-600 mb-6">Review your answers and see explanations for each question.</p>

          {/* Summary */}
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <div className="flex flex-wrap gap-4 justify-between">
              <div>
                <span className="text-gray-600">Total Questions:</span>{" "}
                <span className="font-bold">{test.questions.length}</span>
              </div>
              <div>
                <span className="text-gray-600">Correct Answers:</span>{" "}
                <span className="font-bold text-green-600">{userAnswers.filter((a) => a.isCorrect).length}</span>
              </div>
              <div>
                <span className="text-gray-600">Incorrect Answers:</span>{" "}
                <span className="font-bold text-red-600">{userAnswers.filter((a) => !a.isCorrect).length}</span>
              </div>
              <div>
                <span className="text-gray-600">Score:</span>{" "}
                <span className="font-bold">
                  {Math.round((userAnswers.filter((a) => a.isCorrect).length / test.questions.length) * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* Questions Review */}
          <div className="space-y-8">
            {test.questions.map((question, index) => {
              const userAnswer = userAnswers.find((a) => a.questionId === question.id)
              const isCorrect = userAnswer?.isCorrect

              return (
                <div key={question.id} className="border-b border-gray-200 pb-8 last:border-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isCorrect ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}
                    >
                      {isCorrect ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Question {question.id}:</h3>

                      {/* Scenario */}
                      {question.scenario && <p className="text-gray-700 mb-4">{question.scenario}</p>}

                      {/* Question */}
                      <p className="text-gray-800 mb-4">{question.question}</p>

                      {/* Options */}
                      <div className="space-y-2 mb-4">
                        {question.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className={`p-3 rounded-md ${
                              optIndex === question.correctAnswer
                                ? "bg-green-50 border border-green-200"
                                : optIndex === userAnswer?.selectedOption && !isCorrect
                                  ? "bg-red-50 border border-red-200"
                                  : "bg-gray-50 border border-gray-200"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {optIndex === question.correctAnswer && (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className="text-green-600"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                              {optIndex === userAnswer?.selectedOption && !isCorrect && (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className="text-red-600"
                                >
                                  <line x1="18" y1="6" x2="6" y2="18" />
                                  <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                              )}
                              <span
                                className={`${
                                  optIndex === question.correctAnswer
                                    ? "text-green-800"
                                    : optIndex === userAnswer?.selectedOption && !isCorrect
                                      ? "text-red-800"
                                      : "text-gray-700"
                                }`}
                              >
                                {option}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Explanation */}
                      {question.explanation && (
                        <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
                          <h4 className="font-bold text-blue-800 mb-1">Explanation:</h4>
                          <p className="text-blue-800">{question.explanation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link
            href="/mock-tests"
            className="px-6 py-3 bg-teal-900 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors"
          >
            Back to Tests
          </Link>
        </div>
      </div>
    </div>
  )
}
