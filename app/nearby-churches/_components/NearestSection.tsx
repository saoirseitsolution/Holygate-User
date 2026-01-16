import { Heart } from "lucide-react";
import { NearestChurchCard } from "./NearestChurchCard";

const NEAREST_CHURCHES_DATA = Array(9).fill({
  title: "Migrating to Linear 101",
  description: "Find churches and programs happening now migrating to Linear 101 within your local community area.",
  thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3"
});

export default function NearestSection() {
  return (
    <div className="w-full ">
    <section className=" container bg-white">
      {/* Header Area */}
      <div className="mb-10 mt-6">
        <h2 className="text-3xl font-bold text-[#1A1C21]">Nearest Churches</h2>
        <p className="text-[#64748B] text-sm mt-1">Location based nearest churches for you</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full text-[13px] font-bold text-[#3F37C9]">
            <Heart size={16} fill="#3F37C9" /> Watchlist
          </button>
          
          {/* Filter Dropdown Button */}
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full text-[13px] font-bold text-gray-500">
            Nearest First 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-[360px]">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <input 
            type="text" 
            placeholder="Search your church" 
            className="w-full bg-[#F3F4F6] border-none rounded-2xl py-3 pl-12 pr-6 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
      </div>

      {/* 3x3 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 mb-10">
        {NEAREST_CHURCHES_DATA.map((church, index) => (
          <NearestChurchCard key={index} church={{...church, id: index.toString()}} />
        ))}
      </div>
    </section>
    </div>
  );
}