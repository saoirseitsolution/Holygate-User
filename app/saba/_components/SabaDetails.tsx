"use client"

import { HeroSectionImage } from "@/constants/images"
import { Play } from "lucide-react"
import Image from "next/image"

export default function SabaAboutSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* About Saba Section */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">About Saba</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Saba is a spiritual community dedicated to spreading the message of peace, love, and faith. Through
                prayer, meditation, and fellowship, Saba guides individuals toward a deeper relationship with God. It is
                a place where hearts unite in devotion and lives are transformed through faith.
              </p>
            </div>

            {/* Image with Play Button */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden order-1 md:order-2 aspect-video md:aspect-auto md:h-65 lg:h-70">
              <Image
                src={HeroSectionImage}
                alt="Saba spiritual community gathering"
                height={100}
                width={100}
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                <div className="bg-blue-600 rounded-full p-3 md:p-4 hover:bg-blue-700 transition-colors">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our History Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our History</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Founded in the spirit of devotion, Saba began its journey with a small group of faithful believers. Over
                the years, it has grown into a vibrant spiritual community, touching thousands of lives through prayer,
                outreach, and service.
              </p>
            </div>

            {/* Image with Learn More */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-video md:aspect-auto md:h-65 lg:h-70">
              <Image
                src={HeroSectionImage}
                alt="Saba history and stained glass"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
              {/* Learn More Button */}
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
                <button className="bg-white text-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Learn more
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
