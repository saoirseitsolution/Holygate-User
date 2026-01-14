import { MapPin, Wallet, Calendar, Search } from 'lucide-react';
import { travelHero } from '@/constants/images';
import Image from 'next/image';
import Dropdown from '@/components/common/dropdown';
import IconMap from '@/components/common/icons/IconMap';
import IconBudget from '@/components/common/icons/IconBudget';
import { IconCalender } from '@/components/common/icons/IconCalender';

export const TravelHero = () => {
  return (
    <div className="relative h-[600px] w-full flex flex-col justify-end px-16 overflow-hidden">
      {/* 1. Background Image with Dark Tint */}
      <div 
        className="absolute inset-0  bg-cover bg-center"
        aria-hidden="true"
        // style={{ backgroundImage: `url(${travelHero})` }}
      >

        <Image src={travelHero} alt="Travel Hero" fill className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0" style={{ backgroundColor: '#00000040' }} />
      </div>

      {/* 2. Text Content */}
      <div className="relative z-10 mb-20">
        <h1 className="text-white text-6xl  mb-4 tracking-tight">
          Find Your Dream Destination
        </h1>
        <p className="text-white/90 text-lg">
          Discover your perfect travel plan.
        </p>
      </div>

     
    </div>
  );
};