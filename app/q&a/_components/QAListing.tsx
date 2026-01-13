"use client"

import { MessageCircle, ExternalLink } from "lucide-react"
import { useState } from "react"

const qaData = [
  {
    id: 1,
    question: "How can I strengthen my faith during difficult times?",
    answer: "Through prayer, scripture reading, and fellowship with other believers...",
  },
  {
    id: 2,
    question: "What is the importance of baptism?",
    answer: "Baptism is an outward expression of inner faith and obedience to Christ...",
  },
  {
    id: 3,
    question: "How do I know God's will for my life?",
    answer: "Seek God through prayer, study His Word, and seek wise counsel...",
  },
  {
    id: 3,
    question: "How do I know God's will for my life?",
    answer: "Seek God through prayer, study His Word, and seek wise counsel...",
  },
  
]

export default function QAListing() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Questions & Answers</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Find answers to common questions about faith, worship, and Christian living
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="mb-12 md:mb-16">
          <a
            href="https://wa.me/?text=Hi%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">Chat on WhatsApp for More Questions</span>
          </a>
        </div>

        {/* Q&A Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {qaData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200 hover:border-gray-300 transition-all duration-200"
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">{item.question}</h3>

              {/* Answer Preview */}
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{item.answer}</p>

              {/* Read Full Answer Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base transition-colors"
              >
                <span>Read Full Answer</span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
