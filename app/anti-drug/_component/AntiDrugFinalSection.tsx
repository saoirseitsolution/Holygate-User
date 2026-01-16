import { anti_drug2 } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

const AntiDrugFinalSections = () => {
  const features = [
    {
      title: "Safe & Confidential",
      desc: "All conversations and personal details are handled with complete privacy. We ensure a safe space where individuals can speak freely without fear. Your trust and dignity are always respected.",
      image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80",
      isReversed: false
    },
    {
      title: "Expert Guidance",
      desc: "Our programs are guided by experienced counselors and professionals. Spiritual leaders and medical experts work together for holistic recovery. Right guidance at the right time can change lives.",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80",
      isReversed: true
    },
    {
      title: "Family Support",
      desc: "Addiction affects families as much as individuals. We help families understand, support, and heal together. Stronger families lead to lasting recovery.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
      isReversed: false
    },
    {
      title: "Hope & Recovery",
      desc: "Recovery is possible with the right care and encouragement. We focus on healing the mind, body, and spirit. Every step forward brings new hope and purpose.",
      image: "https://images.unsplash.com/photo-1515162305114-9d398f71387d?auto=format&fit=crop&q=80",
      isReversed: true
    }
  ];

  return (
    <div className="py-20 font-sans space-y-24">
      
      {/* --- Alternating Features Section --- */}
      <div className="space-y-24 xl:px-20 px-5 md:px-2">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${feature.isReversed ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Text Content */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-[#1A1C21]">{feature.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                {feature.desc}
              </p>
            </div>

            {/* Feature Image */}
            <div className="flex-1 w-full h-[200px] md:h-[300px]">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        ))}
      </div>

      {/* --- Bottom CTA Section: Book Awareness Program --- */}
      <section className="pt-20">
        <div className="relative w-full max-w-2xl lg:max-w-4xl mx-auto">
          {/* Background Card */}
          <div className="bg-[#F3F4F6] rounded-3xl p-8 md:p-12 md:pl-[30%] lg:pl-[40%] flex flex-col justify-center min-h-[300px]">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2E297A]">
                Book an Anti-Drug Awareness Program
              </h2>
              <p className="text-gray-400 lg:px-5 text-sm leading-relaxed max-w-md">
                Organize an awareness session for your school, college, church, or community. 
                Together, we can protect lives and build a drug-free society.
              </p>
              
              {/* Dual Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="px-5 py-2 border border-[#2E297A] text-[#2E297A] rounded-4xl text-sm font-bold hover:bg-gray-100 transition-all">
                  For Enquiry
                </button>
                <button className="px-5 py-2 bg-[#2E297A] text-white rounded-4xl text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-[#3d3796] transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Overlapping Image */}
          <div className="hidden md:block absolute -left-28 top-1/2 -translate-y-1/2 w-[300px] h-[150px] lg:w-[400px] lg:h-[250px] z-10">
            <Image 
              src={anti_drug2} 
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
              alt="Speaker"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AntiDrugFinalSections;