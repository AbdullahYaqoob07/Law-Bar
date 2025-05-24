"use client"
import router from "next/navigation"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MockTestCard from "@/components/MockTestCard"

// Sample mock test data
const mockTests = [
  {
    id: "criminal-law-test-1",
    title: "Criminal Law Mock Test",
    volume: "Level 1",
    duration: "45 mins",
    attemptsTaken: 3,
    averageScore: 78,
    completionPercentage: 85,
    imageUrl: "/gavel-img.png"
  },
  {
    id: "property-law-test-1",
    title: "Property Law Assessment",
    volume: "Advanced",
    duration: "60 mins",
    attemptsTaken: 2,
    averageScore: 82,
    completionPercentage: 92,
    imageUrl: "/gavel-img.png"
  },
  {
    id: "family-law-test-1",
    title: "Family Law Practice Test",
    volume: "Intermediate",
    duration: "50 mins",
    attemptsTaken: 4,
    averageScore: 75,
    completionPercentage: 68,
    imageUrl: "/gavel-img.png"
  },
  {
    id: "corporate-law-test-1",
    title: "Corporate Law Challenge",
    volume: "Expert Level",
    duration: "75 mins",
    attemptsTaken: 1,
    averageScore: 88,
    completionPercentage: 45,
    imageUrl: "/gavel-img.png"
  },
  {
    id: "immigration-law-test-1",
    title: "Immigration Law Quiz",
    volume: "Fundamentals",
    duration: "55 mins",
    attemptsTaken: 5,
    averageScore: 73,
    completionPercentage: 100,
    imageUrl: "/gavel-img.png"
  },
  {
    id: "intellectual-property-test-1",
    title: "IP Rights Mock Exam",
    volume: "Comprehensive",
    duration: "70 mins",
    attemptsTaken: 2,
    averageScore: 91,
    completionPercentage: 78,
    imageUrl: "/gavel-img.png"
  },
  {
    id: "contract-law-test-1",
    title: "Contract Law Fundamentals",
    volume: "Basics",
    duration: "40 mins",
    attemptsTaken: 6,
    averageScore: 69,
    completionPercentage: 95,
    imageUrl: "/gavel-img.png"
  },
  {
    id: "environmental-law-test-1",
    title: "Environmental Law Assessment",
    volume: "Regulations",
    duration: "65 mins",
    attemptsTaken: 3,
    averageScore: 84,
    completionPercentage: 73,
    imageUrl: "/gavel-img.png"
  },
  {
    id: "tax-law-test-1",
    title: "Tax Law Practice Exam",
    volume: "Professional",
    duration: "80 mins",
    attemptsTaken: 1,
    averageScore: 79,
    completionPercentage: 30,
    imageUrl: "/gavel-img.png"
  }
]

export default function MockTestPage() {
  const handleStartTest = (testId: string) => {
    router.push(`/mock-tests/${testId}`)
  }

  return (
    <div className="min-h-screen bg-white mx-auto max-w-7xl px-6 py-2">
      <Header />
      <main className="w-[90%] mx-auto max-w-7xl px-6 py-8">
        <div className="mt-10 mb-10 flex item-center justify-center">
          <h1 className="text-3xl font-bold text-[#0f3d3e] mb-4">Mock Exams</h1>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3 mb-12">
          {mockTests.map((test) => (
            <MockTestCard
              key={test.id}
              title={test.title}
              volume={test.volume}
              duration={test.duration}
              attemptsTaken={test.attemptsTaken}
              averageScore={test.averageScore}
              completionPercentage={test.completionPercentage}
              imageUrl={test.imageUrl}
              onStartTest={() => handleStartTest(test.id)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}