'use client'

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Kumbasaram (Confession) and why is it important?",
      answer: "Kumbasaram, also known as the Sacrament of Confession, is a sacred practice in the Catholic Church where a person humbly confesses their sins to a priest and receives God's forgiveness. Through this sacrament, we experience God's mercy, healing, and peace. Confession helps us grow spiritually, strengthens our relationship with God, and guides us toward a righteous life filled with grace and renewal."
    },
    {
      question: "How can I attend live Dhyanam sessions online?",
      answer: "You can attend live Dhyanam sessions online by visiting our website and checking the schedule. We stream sessions regularly through our official channels."
    },
    {
      question: "Can I book an appointment to meet the Father for spiritual guidance?",
      answer: "Yes, you can book an appointment to meet the Father for spiritual guidance. Please contact the church office or use our online booking system to schedule a convenient time."
    },
    {
      question: "How can I contact the church for prayers or urgent spiritual support?",
      answer: "For prayers or urgent spiritual support, you can reach us through our church hotline, email, or visit the church office during working hours. Emergency contacts are also available on our website."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 sm:mb-6">
                Frequently Asked
                <br />
                Questions
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                If there are question you want to ask.
                <br />
                We will answer all your question.
              </p>
            </div>
          </div>

          {/* Right Section - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-sm">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900 pr-4 flex-1">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 mt-1">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                      )}
                    </span>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-0">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}