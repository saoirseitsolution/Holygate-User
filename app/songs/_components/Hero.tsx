"use client"

import { IconPlay } from "@/components/common/icons/IconPlay"
import { DhyanamHero, prayersHero, songHero, wave } from "@/constants/images"
import { Search } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative  h-[480px] w-full bg-[#050505] text-white">
      <div className="absolute inset-0 opacity-50 ">
        <Image 
          src={songHero} 
          alt="Hero" 
          layout="fill" 
          objectFit="cover" 
          className=""
        />
      </div>
      {/* <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" /> */}

      <div className="relative z-10 p-4 lg:p-8 lg:px-24  flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:w-96">
          <Search className="absolute left-4 top-1/2 z-30 -translate-y-1/2 text-white/40" size={16} />
          <input 
            type="text" 
            placeholder="Search your video" 
            className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-full py-2 pl-10 pr-4 text-xs focus:outline-none"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-end h-full">
      <div className="relative container z-10  ">
        <div className="flex items-center">
            <IconPlay/><Image className="h-24 w-auto" src={wave} alt='wave'/>
        </div>
        <h1 className="sm:text-4xl text-3xl lg:text-5xl font-semibold leading-snug lg:leading-[1.1] mb-4 lg:mb-6">
          Discover place of faith,<br /> prayer, and divine guidance
        </h1>
        <p className="text-white/60 text-sm mb-10 lg:text-[15px] leading-relaxed max-w-full sm:max-w-xl">
          We are a community shaped by prayer, scripture, and daily life. Across seasons and generations, we gather to celebrate the liturgy, support one another, and walk together in faith.
        </p>
      </div>
      </div>
    </div>
  )
}
