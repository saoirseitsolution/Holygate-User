import React from 'react';
import { Heart, Play, ChevronRight } from 'lucide-react';
import { useSearchParams } from "next/navigation";
const PrayerCommunity = () => {
     const params = useSearchParams();
        const wishlist = params.get('wishlist');
  const prayerVideos = [1, 2, 3, 4];
  const centers = [1, 2, 3];
  if(wishlist){
    return null;
  }

  return (
    <div className='w-full pt-5'>
    <div className="py-12 container space-y-16 font-sans">
      
      {/* --- Recent Prayers Section --- */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1C21] mb-1">Recent Prayers</h2>
          <p className="text-gray-400 text-sm font-medium">Find churches and programs happening now</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prayerVideos.map((_, idx) => (
            <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm">
              {/* Background Video/Image Thumbnail */}
              <img 
                src={`https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&sig=${idx}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Prayer Session"
              />
              
              {/* Top Action: Heart Icon */}
              <button className="absolute top-4 left-4 p-2 text-white/90 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>

              {/* Bottom Video Info Overlay */}
              <div className="absolute inset-x-3 bottom-3 bg-black/40 backdrop-blur-md rounded-2xl p-3 flex items-center gap-3 border border-white/10">
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/20">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100" alt="host" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white text-[11px] font-bold truncate">Migrating to Linear 101</h4>
                  <p className="text-white/60 text-[9px] truncate">Find churches and programs...</p>
                </div>
                <button className="w-8 h-8 bg-[#2E297A] rounded-full flex items-center justify-center text-white shadow-lg">
                  <Play size={14} fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Nearest Prayer Centre Section --- */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1C21] mb-1">Nearest Prayer Centre</h2>
          <p className="text-gray-400 text-sm font-medium">Find churches and programs happening now</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {centers.map((_, idx) => (
            <div key={idx} className="group space-y-4">
              {/* Image Container with Floating Heart */}
              <div className="relative h-56 rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={`https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&sig=${idx}`} 
                  className="w-full h-full object-cover"
                  alt="Prayer Centre"
                />
                <button className="absolute top-4 left-4 p-2 text-white/90">
                  <Heart size={20} />
                </button>
              </div>

              {/* Text Content */}
              <div className="space-y-2 px-1">
                <h3 className="text-lg font-bold text-[#1A1C21]">Migrating to Linear 101</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-2 font-medium">
                  Find churches and programs happening now Migrating to Linear 101
                </p>
                
                {/* Primary Action Button */}
                <button className="w-full mt-4 bg-[#2E297A] text-white py-3.5 rounded-2xl text-xs font-bold hover:bg-[#3d3796] transition-all active:scale-95 shadow-lg shadow-indigo-100">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
    </div>
  );
};

export default PrayerCommunity;