import React from 'react';
import { Search, MapPin, Wallet, Calendar, ChevronDown } from 'lucide-react';

const GlobalSearchBar = () => {
  return (
    <div className="mx-auto z-10 w-full px-4 mb-12 lg:mb-20 max-w-6xl">
      {/* Desktop & Tablet Container */}
      <div className="bg-[#F3F4F6] lg:bg-white/95 backdrop-blur-md rounded-[20px] sm:rounded-full p-2 flex flex-col sm:flex-row items-center justify-between shadow-xl lg:shadow-2xl border border-white/20">
        
        {/* Location Segment */}
        <div className="w-full sm:flex-1 flex items-center gap-3 px-6 py-4 lg:py-2 border-b sm:border-b-0 sm:border-r border-gray-200 group cursor-pointer">
          <MapPin size={20} className="text-[#2E2773]" />
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between sm:justify-start gap-1">
              <span className="text-gray-400 text-[15px] font-medium">Location</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Budget Segment */}
        <div className="w-full lg:flex-1 flex items-center gap-3 px-6 py-4 lg:py-2 border-b lg:border-b-0 lg:border-r border-gray-200 group cursor-pointer">
          <Wallet size={20} className="text-[#2E2773]" />
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between lg:justify-start gap-1">
              <span className="text-gray-400 text-[15px] font-medium">Budget</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Date Segment */}
        <div className="w-full lg:flex-1 flex items-center gap-3 px-6 py-4 lg:py-2 group cursor-pointer">
          <Calendar size={20} className="text-[#2E2773]" />
          <input 
            type="text" 
            placeholder="dd/mm/yyyy" 
            className="bg-transparent text-gray-400 text-[15px] font-medium outline-none w-full placeholder:text-gray-400"
          />
        </div>

        {/* Search Button Cap */}
        <button className="w-full sm:w-auto bg-[#2E2773] hover:bg-[#3d348b] transition-all text-white md:px-10 px-3 md:py-4 py-3 sm:py-3 rounded-2xl sm:rounded-full flex items-center justify-center md:gap-3 gap-1 font-semibold shadow-lg shadow-indigo-200 active:scale-95">
          <Search size={20} strokeWidth={2.5} />
          <span className="text-[16px]">Search</span>
        </button>
      </div>
    </div>
  );
};

export default GlobalSearchBar;