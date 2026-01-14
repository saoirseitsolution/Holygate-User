import { MapPin, Wallet, Calendar, Search } from 'lucide-react';
import { travelHero } from '@/constants/images';
import Image from 'next/image';
import Dropdown from '@/components/common/dropdown';
import IconMap from '@/components/common/icons/IconMap';
import IconBudget from '@/components/common/icons/IconBudget';
import { IconCalender } from '@/components/common/icons/IconCalender';

export const TravelHero = () => {
  return (
    <div className="relative h-[600px] w-full flex flex-col justify-end px-4 lg:px-16 overflow-hidden">
      {/* 1. Background Image with Dark Tint */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden="true"
      >
        <Image src={travelHero} alt="Travel Hero" fill className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0" style={{ backgroundColor: '#00000040' }} />
      </div>

      {/* 2. Text Content */}
      <div className="relative z-10 mb-6 lg:mb-12 text-center lg:text-left">
        <h1 className="text-white text-4xl lg:text-6xl mb-2 lg:mb-4 tracking-tight">
          Find Your Dream Destination
        </h1>
        <p className="text-white/90 text-base lg:text-lg">
          Discover your perfect travel plan.
        </p>
      </div>

      {/* 3. Segmented Search Bar (The "Travel Bar") */}
      <div className="container relative mx-auto z-10 w-full mb-12 lg:mb-24">
        <div className="bg-white/95 container backdrop-blur-md rounded-full p-2 flex flex-wrap lg:flex-nowrap items-center shadow-2xl">
          {/* Location Segment */}
          <div className="flex-1 flex items-center gap-3 px-4 lg:px-6 border-r border-gray-200">
            <Dropdown icon={<IconMap />} items={[{ label: 'Location' }]} label="Location" />
          </div>

          {/* Budget Segment */}
          <div className="flex-1 flex items-center gap-3 px-4 lg:px-6 border-r border-gray-200">
            <Dropdown icon={<IconBudget />} items={[{ label: 'Budget' }]} label="Budget" />
          </div>

          {/* Date Segment */}
          <div className="flex-1 flex items-center gap-3 px-4 lg:px-6">
            <IconCalender />
            <input 
              type="text" 
              placeholder="dd/mm/yyyy" 
              className="bg-transparent text-gray-500 text-sm font-semibold outline-none w-full placeholder:text-gray-400"
            />
          </div>

          {/* Search Button Cap */}
          <button className="bg-[#2E2773] hover:bg-[#342da3] transition-colors text-white px-6 lg:px-8 m-1 py-2 lg:py-3 rounded-full flex items-center gap-3 font-bold shadow-lg shadow-indigo-200">
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};