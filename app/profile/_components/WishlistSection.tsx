import React, { useState } from 'react';
import { Heart, MapPin, Star, Play, Trash2, Music } from 'lucide-react';
import WishlistPackages from './WishlistPackages';
import SongsWishlist from './SongsWishlist';

const WishlistSection = () => {
  const [activeTab, setActiveTab] = useState('Packages');

  return (
    <div className="flex-1 max-w-6xl animate-in fade-in duration-500">
      {/* --- Header & Interactive Tabs --- */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#1A1C21]">My Wishlist</h1>
        <p className="text-sm text-gray-400 font-medium mt-1">Saved pilgrimage packages for future consideration</p>
        
        <div className="flex bg-[#F3F4F6] w-fit p-1.5 rounded-2xl gap-1 mt-6 border border-gray-100">
          {['Packages', 'Songs', 'Dhyanam'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-[#2E297A] text-white shadow-lg shadow-indigo-100' 
                  : 'text-gray-500 hover:text-[#2E297A]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* --- Dynamic Grid Content --- */}
      <div className="grid grid-cols-1 ">
        {activeTab === 'Packages' && (
          // Package Card Layout
          <WishlistPackages />
        ) }
         {activeTab === 'Songs' && (
          <SongsWishlist  />)}
        
      </div>
    </div>
  );
};



/* --- Media Card Component (Songs/Dhyanam) --- */
const MediaCard = ({ tabType } : { tabType: string }) => (
  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm group">
    <div className="relative aspect-square">
      <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Media" />
      {/* Centered Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
        <button className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:scale-110 transition-transform">
          <Play size={24} fill="white" className="ml-1" />
        </button>
      </div>
      {/* Title Overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10">
        <p className="text-white text-[11px] font-bold truncate">Migrating to Linear 101</p>
        <p className="text-white/60 text-[9px] mt-0.5">Find direction and progress</p>
      </div>
    </div>
    <div className="p-4 flex gap-2">
      <button className="flex-1 py-2.5 bg-gray-50 rounded-xl text-[10px] font-bold text-gray-400 flex items-center justify-center gap-2 hover:bg-gray-100">
        <Trash2 size={14} /> Remove
      </button>
      <button className="flex-1 py-2.5 bg-[#2E297A] rounded-xl text-[10px] font-bold text-white flex items-center justify-center gap-2 hover:bg-[#3F3D89]">
        Play Now <Play size={10} fill="currentColor" />
      </button>
    </div>
  </div>
);

export default WishlistSection;