import React from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { about, aboutbg } from '@/constants/images';
import BeliefsSection from './BeliefSection';
import MissionComposition from './MissionComposition';

// Reusable Feature Card (Place of Haven, etc.)
const FeatureCard = ({ title, description, iconColor = "#FFB800" } : { title: string, description: string, iconColor?: string }) => (
  <div className="flex gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-50">
    <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black" style={{ backgroundColor: iconColor }}>
      ✓
    </div>
    <div>
      <h4 className="text-sm font-black text-[#1A1C21] mb-1">{title}</h4>
      <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-3">{description}</p>
    </div>
  </div>
);

// Reusable History/Mission Text Block
const TextBlock = ({ title, content } : { title: string, content: string }) => (
  <div className="space-y-4">
    <h3 className="text-2xl font-black text-[#1A1C21]">{title}</h3>
    <p className="text-sm text-gray-500 leading-loose font-medium">{content}</p>
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- Hero Section --- */}
      <section className="relative h-[570px] flex items-end p-6 sm:p-16 overflow-hidden">
        <Image 
          src={about} 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Church Interior"
        />
        <div className="absolute inset-0 bg-black/19" /> {/* Dark overlay */}
        <div className="relative z-10 max-w-3xl mb-12">
          <h1 className="text-5xl font-semibold text-white mb-6">About Us</h1>
          <p className="text-gray-200 text-lg leading-relaxed tracking-wider opacity-90">
            We are a community shaped by prayer, Scripture, and daily life. Across seasons and 
            generations, we gather to celebrate the liturgy, support one another, and walk together 
            in faith. Our doors are open... for the curious, the searching, and the faithful alike.
          </p>
        </div>
      </section>

      {/* --- Beliefs Section --- */}
      <section className=" py-16 container mx-auto px-4 sm:px-6 lg:px-10 " >
        <BeliefsSection/>
       
         {/* Video Placeholder */}
         <div className="relative rounded-lg overflow-hidden h-[300px] sm:h-[450px] mb-20 group">
          <img src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2" className="w-full h-full object-cover" alt="Altar" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
            <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 hover:scale-110 transition-transform">
              <Play fill="white" size={32} />
            </button>
          </div>
        </div>

        {/* --- History & Mission Section --- */}
      <MissionComposition/>
      </section>
    </div>
  );
};

export default AboutUsPage;