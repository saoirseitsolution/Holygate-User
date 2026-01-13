"use client"

import Image from "next/image"
import { HeroSectionImage } from "@/constants/images"

export default function HeroSection() {

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroSectionImage}
        alt="Spiritual home church interior"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Badge/Tag */}
        <div className="mb-6 sm:mb-8 lg:mb-10 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white text-xs sm:text-sm font-medium">Find Your Spiritual Home</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-medium text-white mb-6 sm:mb-8 leading-tight sm:leading-tight md:leading-tight text-balance max-w-4xl">
          A place to listen, pray, and walk in faith.
        </h1>

        {/* Description Text */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Search and discover churches around you with ease. We're here to help to help you stay connected to faith,
          comfort, and community
        </p>
      </div>
    </section>
  )
}
