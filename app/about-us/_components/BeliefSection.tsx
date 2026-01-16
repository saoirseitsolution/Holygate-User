import React from 'react';
import { Flag, Users, BookOpen, } from 'lucide-react';
import Image from 'next/image';
import { aboutbg } from '@/constants/images';

const FeatureItem = ({ Icon, title, description, iconColor }: { Icon: React.FC<{size: number, fill: string, color: string}>, title: string, description: string, iconColor: string }) => (
  <div className="relative pl-8 border-l border-gray-200">
    {/* Circular Icon with fixed positioning to overlap the border line */}
    <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
      <Icon size={12} fill={iconColor} color={iconColor} />
    </div>
    
    <div className="space-y-2">
      <h4 className="text-[19px]  text-[#1A1C21] ">
        {title}
      </h4>
      <p className="text-[15px] text-gray-500 leading-relaxed ">
        {description}
      </p>
    </div>
  </div>
);

const BeliefsSection = () => {
  return (
    <section className="relative py-3  overflow-hidden">
      {/* 1. Background Watermark Image */}
      <div className="absolute inset-0 z-0 -bottom-16 flex justify-center items-center opacity-10 pointer-events-none">
        <Image 
          src={aboutbg} 
          alt="Bible Watermark"
          className="w-[800px] h-auto object-contain"
        />
      </div>

      <div className="relative z-10">
        {/* Main Header and Intro Text */}
         {/* <Image 
          src={aboutbg} 
          className="absolute opacity-20 inset-0 w-full h-full object-cover"
          alt="Church Interior"
        /> */}
        <h2 className="text-4xl font-semibold text-[#1A1C21] mb-8">We are a Church That Believes in Jesus</h2>
        <div className="grid grid-cols-1  gap-12 mb-12">
          <div className="space-y-6 text-lg tracking-wide w-full md:w-3/4 text-gray-500 leading-relaxed font-thin">
            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text: and a search for forem ipsum' wil uncover many web sites stil in their infancy. Various versions have evolved over the ycars, sometimes by accident, sometimes on purpose finjected humour and the like), Itf you are going to use a passage of Lorem ipsum.</p>
            <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem psum gen- erators on the internet tend to repeat predefined. chunks as necessary:</p>
          </div>
        </div>


        {/* 2. The Features Grid with Vertical Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-4 mb-4 md:mb-14">
          <FeatureItem 
            Icon={Flag}
            iconColor="#FFB800"
            title="Place of Haven"
            description="Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."
          />
          <FeatureItem 
            Icon={Users}
            iconColor="#FFB800"
            title="Connects Groups"
            description="Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."
          />
          <FeatureItem 
            Icon={BookOpen}
            iconColor="#FFB800"
            title="Study Bible"
            description="Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."
          />
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;