"use client";
import IconMap from '@/components/common/icons/IconMap';
import { Heart, Star, MapPin } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

export interface TourData {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  rating: number;
  thumbnail: string | StaticImageData;
}

export const TravelCard = ({ tour }: { tour: TourData }) => {
    const route = useRouter();
  return (
    <div onClick={()=>route.push('/travel/details')} className="flex flex-col bg-white rounded-3xl cursor-pointer overflow-hidden border border-gray-100 shadow-sm group">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image 
          src={tour.thumbnail} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Heart Icon Overlay */}
        <button className="absolute top-4 left-4   rounded-full text-gray-400 hover:bg-gray-50 transition-colors">
          <Heart size={22} />
        </button>

        {/* Rating Badge Overlay */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
          <Star size={12} fill="#FACC15" className="text-yellow-400" />
          <span className="text-white text-[11px] font-bold">{tour.rating}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#1A1C21] font-bold text-[16px] mb-2 leading-tight">
          {tour.title}
        </h3>
        <p className="text-[#64748B] text-[12px] leading-relaxed line-clamp-2 mb-4">
          {tour.description}
        </p>
        
        {/* Location Row */}
        <div className="flex items-center gap-1.5 text-[#64748B] mb-6">
          <IconMap />
          <span className="text-[11px] font-medium">{tour.location}</span>
        </div>

        {/* Footer: Price and Action */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-row items-baseline gap-2">
            <span className="text-[#64748B] text-[10px] font-medium uppercase tracking-wider">From</span>
            <span className="text-[#2E2773] font-semibold text-[18px]">${tour.price}</span>
          </div>
          <button className="bg-[#2E2773] text-white px-4 py-1 rounded-xl text-[12px] font-bold hover:bg-[#342da3] transition-all shadow-md shadow-indigo-100">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};