"use client";
import { Heart } from "lucide-react";
import { VideoCard } from "./VideoCard";
import { useState } from "react";

const ARCHIVE_VIDEOS = Array(6).fill({
  title: "Migrating to Linear 101",
  description: "Find churches and programs happening now migrating to Linear 101 within your local community area.",
  author: "Jonathan Wills",
  date: "19 Jan 2026",
  thumbnail: "https://images.unsplash.com/photo-1510590337019-5ef8d3d32116",
  avatar: "https://i.pravatar.cc/100?u=jonathan"
});

export default function VideoSection() {
    const [value,setValue] = useState('Most recent');
  return (
    <section className="px-12 mb-14 bg-white ">
      <div className="mb-5">
        <h2 className="text-3xl font-bold text-[#1A1C21]">Videos</h2>
        <p className="text-[#64748B] text-sm mt-2 font-medium">Find churches and programs happening now</p>
      </div>

      {/* Filter & Action Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
        <div className="flex flex-wrap gap-2">
          <button className="bg-[#2E2773] text-white px-5 py-1 rounded-full text-[13px] font-bold shadow-lg shadow-indigo-100">All</button>
          {['Demo', 'Demo', 'Demo', 'Demo'].map((cat, i) => (
            <button key={i} className="bg-white text-gray-400 border border-gray-200 px-5 py-1 rounded-full text-[13px] font-bold hover:bg-gray-50 transition-colors">
              {cat}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-[#2E2773]  shadow-lg px-5 py-1.5 rounded-full text-[13px] font-bold text-[#2E2773] hover:bg-indigo-50">
            <Heart size={16} fill="#2E2773" /> Watchlist
          </button>
          <div className="relative group" onMouseEnter={(e) => e.currentTarget.classList.add('show')} onMouseLeave={(e) => e.currentTarget.classList.remove('show')}>
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
          </div>
        </div>
      </div>

      {/* Grid Implementation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {ARCHIVE_VIDEOS.map((video, index) => (
          <VideoCard key={index} video={{...video, id: index.toString()}} />
        ))}
      </div>
    </section>
  );
}