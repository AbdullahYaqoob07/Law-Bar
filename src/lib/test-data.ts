import type { Test } from "./types"

export const mockTests: Test[] = [
  {
    id: "sqe1-vol1",
    title: "SQE1 Practice Test",
    volume: "Vol. 1",
    description: "Practice test for the SQE1 examination covering criminal law, contract law, and tort.",
    duration: 5400, // 90 minutes
    category: "SQE",
    difficulty: "Medium",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "Which of the following is NOT an element of the tort of negligence?",
        options: ["Duty of care", "Breach of duty", "Causation", "Intent to cause harm"],
        correctAnswer: 3,
        explanation:
          "Intent to cause harm is not an element of negligence. Negligence requires a duty of care, breach of that duty, causation, and damages. Intent is relevant to intentional torts, not negligence.",
      },
      {
        id: 2,
        question: "Under the Consumer Rights Act 2015, goods must be of satisfactory quality, fit for purpose, and:",
        options: ["Delivered within 30 days", "As described", "Manufactured in the UK", "Competitively priced"],
        correctAnswer: 1,
        explanation:
          "Under the Consumer Rights Act 2015, goods must be of satisfactory quality, fit for purpose, and as described. Delivery time, country of manufacture, and pricing are not part of the core quality requirements.",
      },
      // More questions...
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
        explanation:
          "James is liable as an accessory to the robbery because he participated in planning the crime. Under the doctrine of joint enterprise, he may also be liable for the stabbing if it was a foreseeable consequence of the robbery, even though he didn't know about the knife.",
      },
      // More questions to reach 40 total
    ],
  },
  {
    id: "sqe1-vol2",
    title: "SQE1 Practice Test",
    volume: "Vol. 2",
    description: "Second practice test for the SQE1 examination covering property law, constitutional law, and EU law.",
    duration: 5400, // 90 minutes
    category: "SQE",
    difficulty: "Medium",
    passingScore: 70,
    questions: [
      // Questions for this test...
    ],
  },
  // More tests...
]

export function getTestById(id: string): Test | undefined {
  return mockTests.find((test) => test.id === id)
}

export function getAllTests(): Test[] {
  return mockTests
}
