// Define types for the test system
export interface TestQuestion {
    id: number
    question: string
    scenario?: string
    options: string[]
    correctAnswer: number
    explanation?: string
  }
  
  export interface Test {
    id: string
    title: string
    volume?: string
    description?: string
    duration: number // in seconds
    questions: TestQuestion[]
    category: string
    difficulty: "Easy" | "Medium" | "Hard"
    passingScore: number
  }
  
  export interface UserAnswer {
    questionId: number
    selectedOption: number
    isCorrect: boolean
    timeSpent?: number
  }
  
  export interface TestAttempt {
    testId: string
    startedAt: Date
    completedAt?: Date
    answers: UserAnswer[]
    score?: number
    timeSpent?: number
    isCompleted: boolean
  }
  