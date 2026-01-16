"use client";
import { Heart, Play } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ARCHIVE_VIDEOS = Array(6).fill({
  title: "Migrating to Linear 101",
  description: "Find churches and programs happening now migrating to Linear 101 within your local community area.",
  author: "Jonathan Wills",
  date: "19 Jan 2026",
  thumbnail: "https://images.unsplash.com/photo-1510590337019-5ef8d3d32116",
  avatar: "https://i.pravatar.cc/100?u=jonathan"
});

export default function PrayerSection() {
  const route = useRouter();
   const params = useSearchParams();
    const wishlist = params.get('wishlist');
    const [value,setValue] = useState('Most recent');
  return (
    <section className="w-full py-14 bg-white ">
      <div className="mb-5 container">
        <h2 className="text-3xl font-bold text-[#1A1C21]">Prayers</h2>
        <p className="text-[#64748B] text-sm mt-2 font-medium">Find churches and programs happening now</p>
      </div>

      {/* Filter & Action Bar */}
      <div className="w-full">
        <div className="container">
      <div className="  flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
       {!wishlist && <div className="flex  flex-wrap gap-2">
          <button className="bg-[#2E2773] text-white px-5 py-1 rounded-full text-[13px] font-bold shadow-lg shadow-indigo-100">All</button>
          {['Demo', 'Demo', 'Demo', 'Demo'].map((cat, i) => (
            <button key={i} className="bg-white text-gray-400 border border-gray-200 px-5 py-1 rounded-full text-[13px] font-bold hover:bg-gray-50 transition-colors">
              {cat}
            </button>
          ))}
        </div>}
        
        <div className="flex items-center gap-3">
          <button onClick={()=> route.push('/prayers/?wishlist=true')} className="flex cursor-pointer items-center gap-2 bg-white border border-[#2E2773]  shadow-lg px-5 py-1.5 rounded-full text-[13px] font-bold text-[#2E2773] hover:bg-indigo-50">
            <Heart size={16} fill="#2E2773" /> Wishlist
          </button>
         { !wishlist ? <div className="relative group" onMouseEnter={(e) => e.currentTarget.classList.add('show')} onMouseLeave={(e) => e.currentTarget.classList.remove('show')}>
            <button className="flex items-center gap-2 bg-white border shadow-lg border-[#2E2773] px-5 py-1.5 rounded-full text-[13px] font-bold text-gray-500">
              <span id="dropdown-selected">{value}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className="absolute hidden group-hover:block show:block z-60 bg-white right-0 text-black shadow-lg rounded-md  w-48">
              <ul className="divide-y divide-gray-200">
                {['All', 'Most Recent', 'Most Played', 'Alphabetical(A to Z)'].map((item, index) => (
                  <li 
                    key={index} 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setValue(item);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div> : 
           <button onClick={()=> route.push('/prayers')} className="flex cursor-pointer items-center gap-2 bg-white border border-[#2E2773]  shadow-lg px-5 py-1.5 rounded-full text-[13px] font-bold text-[#2E2773] hover:bg-indigo-50">
            Add More
          </button>}
        </div>
      </div>
     
      {/* Grid Implementation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {[1,2,3,4,5,6].map((video, idx) => (
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
      </div>
       </div>
    </section>
  );
}