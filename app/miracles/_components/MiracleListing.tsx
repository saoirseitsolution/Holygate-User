"use client"

import { useState } from "react"
import { Heart, Calendar, ChevronDown } from "lucide-react"
import { HeroSectionImage } from "@/constants/images"
import { StaticImageData } from "next/image"
import Image from "next/image"

interface Miracle {
  id: string
  date: string
  title: string
  description: string
  author: string
  image: string | StaticImageData
  isWishlisted?: boolean
}

const MiracleData: Miracle[] = [
  {
    id: "1",
    date: "March 2024",
    title: "Healing from Terminal Illness",
    description: "A testimony of complete healing after being diagnosed with terminal cancer...",
    author: "Sarah Johnson",
    image: HeroSectionImage,
    isWishlisted: false,
  },
  {
    id: "2",
    date: "January 2024",
    title: "Financial Breakthrough",
    description: "God's provision in the midst of overwhelming debt and financial crisis...",
    author: "Thomas Family",
    image: HeroSectionImage,
    isWishlisted: false,
  },
  {
    id: "3",
    date: "February 2024",
    title: "Restored Marriage",
    description: "A marriage on the brink of divorce restored through faith and prayer...",
    author: "John & Mary Smith",
    image: HeroSectionImage,
    isWishlisted: false,
  },
  {
    id: "4",
    date: "December 2023",
    title: "Addiction Recovery",
    description: "Finding freedom and redemption through the power of faith and community support...",
    author: "Michael Chen",
    image: HeroSectionImage,
    isWishlisted: false,
  },
  {
    id: "5",
    date: "November 2023",
    title: "Job Blessing",
    description: "Unexpectedly finding the perfect job after months of searching and prayer...",
    author: "Jennifer Martinez",
    image: HeroSectionImage,
    isWishlisted: false,
  },
  {
    id: "6",
    date: "October 2023",
    title: "Family Reconciliation",
    description: "Years of estrangement healed through forgiveness and divine intervention...",
    author: "Robert & Lisa Brown",
    image: HeroSectionImage,
    isWishlisted: false,
  },
]

export default function MiracleListing() {
  const [displayCount, setDisplayCount] = useState(3)
  const [sortOrder, setSortOrder] = useState("recent")
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set())

  const displayedTestimonies = MiracleData.slice(0, displayCount)

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 3, MiracleData.length))
  }

  const toggleWishlist = (id: string) => {
    const newWishlisted = new Set(wishlisted)
    if (newWishlisted.has(id)) {
      newWishlisted.delete(id)
    } else {
      newWishlisted.add(id)
    }
    setWishlisted(newWishlisted)
  }

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="md:flex md:justify-between">

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Miracle Testimonies</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Read inspiring stories of God's miraculous work in people's lives
          </p>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col flex-row justify-between items-start items-center gap-4 mb-12">
          <div className="w-full w-auto flex gap-2 flex-col flex-row">
            {/* Wishlist Button */}
            <button
              className="px-6 py-2 border-2 border-gray-800 rounded-full text-gray-900 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              aria-label="Filter by wishlist"
            >
              <Heart size={20} strokeWidth={2} />
              <span>Wishlist</span>
            </button>

            {/* Sort Dropdown */}
            <div className="relative group">
              <button
                className="px-6 py-2 border-2 border-gray-800 rounded-full text-gray-900 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                aria-label="Sort options"
              >
                <span>Most recent</span>
                <ChevronDown size={20} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <button
                  onClick={() => setSortOrder("recent")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg"
                >
                  Most Recent
                </button>
                <button
                  onClick={() => setSortOrder("oldest")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 last:rounded-b-lg"
                >
                  Oldest First
                </button>
              </div>
            </div>
          </div>
        </div>

        </div>


        {/* Testimonies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedTestimonies.map((testimony) => (
            <div
              key={testimony.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gray-200">
                <Image
                  src={testimony.image || "/placeholder.svg"}
                  alt={testimony.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                {/* Wishlist Icon */}
                <button
                  onClick={() => toggleWishlist(testimony.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                  aria-label={`Add ${testimony.title} to wishlist`}
                >
                  <Heart
                    size={24}
                    strokeWidth={2}
                    className={wishlisted.has(testimony.id) ? "fill-red-500 text-red-500" : "text-gray-400"}
                  />
                </button>
              </div>

              {/* Content Container */}
              <div className="p-5 sm:p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{testimony.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">{testimony.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">{testimony.description}</p>

                {/* Author */}
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-gray-900 font-medium">By: {testimony.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayCount < MiracleData.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Load more testimonies"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
