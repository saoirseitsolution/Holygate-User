import { anti_drug1, anti_drug2 } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

const AntiDrugHero = () => {
  return (
    <div className='relative w-full'>
    <section className="container h-[400px] lg:h-[70vh] bg-black overflow-hidden group">
      {/* --- Background Split Layer --- */}
      <div className="absolute inset-0 flex flex-row">
        {/* Left Image: Crowd */}
        <div className="relative w-full lg:w-1/2 h-full">
          <Image 
            src={anti_drug1}
            alt="Crowd"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

      

        {/* Right Image: Speaker */}
        <div className="relative w-full lg:w-1/2 h-full">
          <Image 
            src={anti_drug2} 
            alt="Speaker"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* --- Content Overlay (Positioned across both) --- */}
      <div className=" z-30 flex flex-col h-full justify-end pb-12 ">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-5xl  font-semibold text-white leading-tight mb-2 drop-shadow-2xl">
            Say No to Drugs.<br />
            Say Yes to Life
          </h1>
          
          <div className="flex  flex-col gap-8 lg:gap-8">
            {/* Description spanning both halves */}
            <p className=" text-gray-300 w-full md:w-3/4 text-sm md:text-lg   drop-shadow-md">
              Drug abuse destroys families, futures, and faith. Our Anti-Drug Mission is to spreading awareness, providing guidance, and helping individuals return a meaningful life through counseling, prayer and community support.
            </p>

            {/* Buttons */}
            <div className="flex z-50 gap-4 shrink-0">
              <button className="px-5 py-2 bg-transparent text-gray-300 border border-gray-300 rounded-full text-sm  hover:scale-105 transition-transform">
                Enquire Now
              </button>
              <button className="px-5 py-2 bg-[#2E297A] text-white rounded-full text-sm  hover:scale-105 transition-transform shadow-lg shadow-indigo-900/40">
                Book Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AntiDrugHero;