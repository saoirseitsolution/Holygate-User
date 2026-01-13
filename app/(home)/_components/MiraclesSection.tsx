import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { HeroSectionImage } from '@/constants/images'

export default function MiraclesSection() {
  const miracles = [
    {
      image: HeroSectionImage,
      title: "Healing Miracle",
      description: "A powerful testimony of physical healing received through prayer and faith, reflecting God's restoring grace."
    },
    {
      image: HeroSectionImage,
      title: "Financial Breakthrough",
      description: "A testimony of unexpected provision and financial restoration through divine intervention."
    },
    {
      image: HeroSectionImage,
      title: "Deliverance Testimony",
      description: "A testimony of freedom from spiritual, emotional, or physical bondage through God's power."
    },
    {
      image: HeroSectionImage,
      title: "Family Restoration ",
      description: "A story of reconciliation, unity, and renewed relationships brought together through prayer."
    }
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-2 sm:mb-3">
              Miracles section
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Find churches and programs happening now
            </p>
          </div>
          
          <a
            href="#"
            className="flex items-center gap-2 text-black hover:text-gray-400 font-medium text-sm sm:text-base whitespace-nowrap transition-colors group mt-1"
          >
            <span className="hidden sm:inline">See all</span>
            <span className="sm:hidden">All</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {miracles.map((miracle, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[3/4]"
            >
              {/* Image with overlay */}
              <div className="absolute inset-0">
                <Image
                  src={miracle.image}
                  alt={miracle.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                  {miracle.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  {miracle.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}