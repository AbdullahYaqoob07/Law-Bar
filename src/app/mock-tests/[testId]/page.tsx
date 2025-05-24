"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

interface Question {
  id: number
  question: string
  scenario?: string
  options: string[]
  correctAnswer: number
}

const mockQuestions: Question[] = [
  {
    id: 33,
    question: "Which of the following best describes James's potential criminal liability?",
    scenario:
      "James and Omar planned to rob a small convenience store. James was to wait outside while Omar went inside to demand money. However, once inside, Omar pulled out a knife (which James did not know he had) and stabbed the store clerk, causing serious injuries. James panicked and ran away when he heard the screaming. The police arrested both soon after.",
    options: [
      "James is not liable because he didn't enter the store or use violence.",
      "James is liable as an accessory to the robbery and could also be liable for the stabbing.",
      "James is only liable for conspiracy but not for any actions committed.",
      "James is only guilty of failing to report the incident.",
    ],
    correctAnswer: 1,
  },
  // Add more questions as needed
]

export default function TestPage({ params }: { params: { testId: string } }) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(0)
  const [answers, setAnswers] = useState<{ [key: number]: number }>({})
  const [timeLeft, setTimeLeft] = useState(967) // 16:07 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`
  }

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setAnswers({ ...answers, [currentQuestion]: selectedAnswer })
      if (currentQuestion < mockQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(answers[currentQuestion + 1] || null)
      } else {
        router.push("/mock-tests/results")
      }
    }
  }

  const question = mockQuestions[currentQuestion]
  const completionPercentage = 70

  return (
    <div className="min-h-screen bg-[#E1EBE9]">
      {/* Navbar */}
    

        <Header />
   

      <main className="w-[90%] mx-auto max-w-7xl px-6 py-8">
        {/* Progress and Stats */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-[#0F3D3E] mt-4">SQE1 Practice Test - Vol. 1</h1>

          <div className="flex items-center justify-between gap-8 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-4 bg-teal-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0F3D3E] rounded-full transition-all duration-300"
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">{completionPercentage}% Completed</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div className="text-center">
                <div className="text-xl font-bold text-[#0F3D3E]">{formatTime(timeLeft)}</div>
                <div className="text-xs text-gray-500">Time Left</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-xl font-bold text-[#0F3D3E]">33/40</div>
              <div className="text-xs text-gray-500">Questions</div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-4xl mx-auto px-4 pb-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl text-black font-bold mb-6">Question 33:</h2>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                James and Omar planned to rob a small convenience store. James was to wait outside while Omar went
                inside to demand money. However, once inside, Omar pulled out a knife (which James did not know he had)
                and stabbed the store clerk, causing serious injuries. James panicked and ran away when he heard the
                screaming. The police arrested both soon after.
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6">
              Which of the following best describes James's potential criminal liability?
            </p>

            <div className="space-y-2">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`relative border border-gray-200 rounded-sm overflow-hidden ${
                    selectedAnswer === index ? "border-gray-300" : ""
                  }`}
                >
                  {selectedAnswer === index && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal-900"></div>}
                  <label className="flex items-center justify-between p-4 cursor-pointer">
                    <span className="text-gray-700">{option}</span>
                    <div className="relative">
                      <input
                        type="radio"
                        name="answer"
                        value={index}
                        checked={selectedAnswer === index}
                        onChange={() => handleAnswerSelect(index)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-full border ${
                          selectedAnswer === index ? "border-teal-900" : "border-gray-300"
                        } flex items-center justify-center`}
                      >
                        {selectedAnswer === index && <div className="w-4 h-4 rounded-full bg-teal-900"></div>}
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2 rounded-md bg-teal-900 text-white hover:bg-teal-800 transition-colors flex items-center gap-2"
              >
                Next Question
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </main>
      <Footer/>
    </div>
    
  )
}
