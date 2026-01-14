import { MapPin, Wallet, Calendar, Search, Star } from 'lucide-react';
import { travelHero } from '@/constants/images';
import Image from 'next/image';
import Dropdown from '@/components/common/dropdown';
import IconMap from '@/components/common/icons/IconMap';
import IconBudget from '@/components/common/icons/IconBudget';
import { IconCalender } from '@/components/common/icons/IconCalender';

export const Hero = () => {
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
        <div className='flex items-center gap-4 mb-3'>
        <div className=" bg-[#F0B100] backdrop-blur-md px-2 py-1 rounded-xl flex items-center gap-1 border border-white/10">
          <Star size={12} fill="#F0B100" className="bg- text-white" />
          <span className="text-white text-[11px] font-bold">4.5</span>
        </div>
        <p className='text-white'>(128 reviews)</p>
        </div>
        <h1 className="text-white text-6xl  mb-4 tracking-tight">
          Migrating to Linear 101
        </h1>
        <p className="text-white/90  flex items-center gap-2">
          <IconMap size={24} fill='#ffff'/> Vellankanni Church, Tamil Nadu
        </p>
      </div>

     
    </div>
  );
};