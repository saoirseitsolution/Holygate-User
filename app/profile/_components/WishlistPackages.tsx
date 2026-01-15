import React, { useState } from 'react';
import { Heart, MapPin, Star, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { DhyanamHero, recent } from '@/constants/images';

const WishlistPackages = () => {
  const [activeTab, setActiveTab] = useState('Packages');

  const packages = [
    { id: 1, title: "Faith Journey Experience", loc: "Velankanni Church", price: "299", rating: "4.5" },
    { id: 2, title: "Faith Journey Experience", loc: "Velankanni Church", price: "299", rating: "4.5" },
    { id: 3, title: "Faith Journey Experience", loc: "Velankanni Church", price: "299", rating: "4.5" },
    { id: 4, title: "Faith Journey Experience", loc: "Velankanni Church", price: "299", rating: "4.5" },
  ];

  return (
    <div className="flex-1 max-w-7xl animate-in fade-in duration-500">
      {/* Header Section */}
      

      {/* Package Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm flex flex-col h-full">
            
            {/* Image Container with Badges */}
            <div className="relative h-44 shrink-0">
              <Image 
                src={DhyanamHero} 
                className="w-full h-full object-cover" 
                alt="Church" 
              />
              {/* Floating Heart Button */}
              <button className="absolute top-3 left-3 w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#2E297A] shadow-md">
                <Heart size={14} fill="currentColor" />
              </button>
              {/* Floating Rating Badge */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md flex items-center gap-1 text-white text-[10px] font-bold border border-white/20">
                <Star size={10} className="text-yellow-400" fill="currentColor" /> {pkg.rating}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-[#1A1C21] text-[13px] leading-tight mb-1.5">{pkg.title}</h3>
              <p className="text-[10px] text-gray-400 leading-normal mb-3 line-clamp-2">
                Deepen your faith through guided tours and worship experiences.
              </p>
              
              <div className="flex items-center gap-1 text-gray-400 text-[10px] font-medium mb-auto">
                <MapPin size={11} className="shrink-0" /> {pkg.loc}
              </div>

              {/* Price and Actions */}
              <div className="mt-4 pt-3 border-t border-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-medium text-gray-400">From <span className="text-[14px] font-bold text-[#2E297A] ml-0.5">${pkg.price}</span></span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#F3F4F6] text-gray-500 rounded-lg text-[10px] font-bold hover:bg-gray-200 transition-colors">
                    <Trash2 size={12} /> Remove
                  </button>
                  <button className="flex-1 py-2 bg-[#2E297A] text-white rounded-lg text-[10px] font-bold hover:bg-[#3F3D89] shadow-md shadow-indigo-50">
                    Book Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPackages;