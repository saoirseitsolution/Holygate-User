import React, { useState } from 'react';
import { Play, Trash2, Music } from 'lucide-react';

const SongsWishlist = () => {
  const [activeTab, setActiveTab] = useState('Songs');

  const songItems = [1, 2, 3, 4]; // Mock data for matching the grid

  return (
    <div className="flex-1 max-w-6xl animate-in fade-in duration-500">
     

      {/* Songs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {songItems.map((item) => (
          <div key={item} className="bg-white rounded-xl border border-gray-100 p-2 shadow-sm flex flex-col group">
            
            {/* Square Media Container */}
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Song Cover" 
              />
              
              {/* Glass-morphism Overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Music size={12} className="text-white" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-white text-[11px] font-bold truncate">Migrating to Linear 101</p>
                    <p className="text-white/60 text-[9px] truncate">Find direction and progress</p>
                  </div>
                </div>
                <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#2E297A] shrink-0">
                  <Play size={14} fill="currentColor" className="ml-0.5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-3 mb-1 px-1">
              <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#F3F4F6] text-gray-500 rounded-lg text-[10px] font-bold hover:bg-gray-200 transition-colors">
                <Trash2 size={12} /> Remove
              </button>
              <button className="flex-1 py-2.5 bg-[#2E297A] text-white rounded-lg text-[10px] font-bold hover:bg-[#3F3D89] shadow-md shadow-indigo-50">
                Play Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsWishlist;