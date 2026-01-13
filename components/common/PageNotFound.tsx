"use client"

import Image from "next/image"
import Link from "next/link"
import { PageNotFoundImage } from "@/constants/images"

export default function NotFound() {

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center text-center">
        

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-300 mb-4 sm:mb-6">404</h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-900 mb-4 sm:mb-6">Page not found</h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-indigo-900 mb-8 sm:mb-10 md:mb-12 max-w-xl leading-relaxed">
          Oops! The page are for does not exist.
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="px-8 sm:px-10 py-3 sm:py-3.5 border-2 border-primary text-indigo-900 font-semibold rounded-lg hover:bg-indigo-900 hover:text-white transition-all duration-300 inline-block"
        >
          BACK HOME
        </Link>
      </div>
    </section>
  )
}
