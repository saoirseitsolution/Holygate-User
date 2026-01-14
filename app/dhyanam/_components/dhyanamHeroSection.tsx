"use client"

import { DhyanamHero } from "@/constants/images"
import { Search } from "lucide-react"
import Image from "next/image"

export default function DhyanamHeroSection() {
  return (
    <div className="relative h-[480px] w-full bg-[#050505] text-white">
      <div className="absolute inset-0 opacity-50 grayscale">
        <Image 
          src={DhyanamHero} 
          alt="Dhyanam Hero" 
          layout="fill" 
          objectFit="cover" 
          className="grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />

      <div className="relative z-10 p-4 lg:p-8 lg:px-24 mt-20 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:w-96">
          <Search className="absolute left-4 top-1/2 z-30 -translate-y-1/2 text-white/40" size={16} />
          <input 
            type="text" 
            placeholder="Search your video" 
            className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-full py-2 pl-10 pr-4 text-xs focus:outline-none"
          />
        </div>
      </div>

      <div className="relative z-10 px-4 lg:px-16 mt-8 lg:mt-16 max-w-full lg:max-w-3xl text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-semibold leading-snug lg:leading-[1.1] mb-4 lg:mb-6">
          Discover place of faith,<br /> prayer, and divine guidance
        </h1>
        <p className="text-white/60 text-sm lg:text-[15px] leading-relaxed max-w-full lg:max-w-xl">
          We are a community shaped by prayer, scripture, and daily life. Across seasons and generations, we gather to celebrate the liturgy, support one another, and walk together in faith.
        </p>
      </div>
    </div>
  )
}
