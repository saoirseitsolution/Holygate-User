"use client"

export default function CommunityCTASection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-900 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Join the Saba Community</h2>
            <p className="text-base md:text-lg text-white/90 mb-8 md:mb-10">
              Be a part of a growing spiritual family. Join us in prayer, devotion, and service.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              {/* Join Saba Button - Outlined */}
              <button className="px-8 md:px-10 py-3 md:py-4 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-colors text-center">
                Join Saba
              </button>

              {/* Contact Us Button - Filled */}
              <button className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-white text-blue-700 font-medium hover:bg-gray-100 transition-colors text-center">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
