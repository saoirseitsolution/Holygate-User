"use client"

import { HeroSectionImage } from "@/constants/images"
import Image from "next/image"

export default function SabaHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat mt-16">

        {/* Background Image */}
      <Image
        src={HeroSectionImage}
        alt="Spiritual home church interior"
        fill
        className="object-cover"
      />

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">

        {/* Main content - centered vertically */}
        <div className="flex items-end justify-start mb-8 md:mb-16 pt-22">
          <div className="max-w-2xl">
            {/* Main heading */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8 text-balance">
              Discover place of faith, prayer, and divine guidance
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-yellow-100 leading-relaxed max-w-2xl text-balance">
              We are a community shaped by prayer, Scripture, and daily life. Across seasons and generations, we gather
              to celebrate the liturgy, support one another, and walk together
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
