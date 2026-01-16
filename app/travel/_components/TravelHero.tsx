import { MapPin, Wallet, Calendar, Search } from 'lucide-react';
import { travelHero } from '@/constants/images';
import Image from 'next/image';
import Dropdown from '@/components/common/dropdown';
import IconMap from '@/components/common/icons/IconMap';
import IconBudget from '@/components/common/icons/IconBudget';
import { IconCalender } from '@/components/common/icons/IconCalender';
import GlobalSearchBar from './GlobalSearchBar';

export const TravelHero = () => {
  return (
    <div className='w-full relative'>
    <div className=" container h-[600px] w-full flex flex-col  justify-end ">
      {/* 1. Background Image with Dark Tint */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden="true"
      >
        <Image src={travelHero} alt="Travel Hero" fill className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0" style={{ backgroundColor: '#00000040' }} />
      </div>

      {/* 2. Text Content */}
      <div className="  z-10 mb-10  lg:text-left">
        <h1 className="text-white text-4xl lg:text-6xl mb-2 lg:mb-4 tracking-tight">
          Find Your Dream Destination
        </h1>
        <p className="text-white/90 text-base lg:text-lg">
          Discover your perfect travel plan.
        </p>
      </div>

      {/* 3. Segmented Search Bar (The "Travel Bar") */}
    <GlobalSearchBar/>
    </div>
    </div>
  );
};