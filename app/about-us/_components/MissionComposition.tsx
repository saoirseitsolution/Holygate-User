import { IconComma } from "@/components/common/icons/IconComma";
import { mission1, mission2, mission3 } from "@/constants/images";
import Image from "next/image";

const MissionComposition = () => (
  <div className="relative w-full col-span-3 h-[500px] flex items-end">
    {/* 1. Base Navy Quote Card */}
    <div className="relative z-10 w-full bg-[#2E297A] rounded-xl p-8 sm:p-12 shadow-2xl overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -bottom-14 -right-8 w-40 h-40 bg-white/5 rounded-full " />
      <div className="absolute bottom-12 right-12 w-20 h-20 bg-white/10 rounded-full" />

      <div className="relative z-20 mt-8">
       <IconComma/>
        <p className="text-white text-[13px] mt-2 leading-[1.8] font-medium w-4/5  opacity-80 mb-6 italic">
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. 
          It uses a dictionary of over 200 Latin words, combined with
        </p>
        <p className="text-[13px] font-semibold uppercase tracking-[2px] text-white">BOBBY PARKER</p>
      </div>
    </div>

    {/* 2. Primary Large Image (Stained Glass) */}
    <div className="absolute hidden sm:block top-2 left-1/2 -translate-x-1/2 w-[210px] h-[280px] z-30">
      <Image 
        src={mission1}
        className="w-full h-full object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-4 border-white"
        alt="Stained Glass"
      />
    </div>

    {/* 3. Small Left Image (Altar) */}
    <div className="absolute top-36 -translate-y-1/4 left-1/6 w-[120px] h-[140px] z-20">
      <Image 
        src={mission2} 
        className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-white/50" 
        alt="Altar Detail"
      />
    </div>

    {/* 4. Small Right Image (Candles) */}
    <div className="absolute top-36 -translate-y-1/4 right-1/6 w-[120px] h-[140px] z-20">
      <Image 
        src={mission3}
        className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-white/50" 
        alt="Candles"
      />
    </div>
  </div>
);
const HistoryMissionText = () => (
  <div className="flex flex-col col-span-2 justify-center space-y-16">
    <div className="space-y-4">
      <h3 className="text-3xl font-semibold text-[#1A1C21]">Our History</h3>
      <p className="text-[18px] text-gray-500  ">
        Saba is a spiritual community dedicated to spreading the message of peace, love, and faith. 
        Through prayer, meditation, and fellowship, Saba guides individuals toward a deeper 
        relationship with God. It is a place where hearts unite in devotion and lives are transformed through faith.
      </p>
    </div>
    
    <div className="space-y-4">
      <h3 className="text-3xl font-semibold text-[#1A1C21]">Our Mission</h3>
      <p className="text-[18px] text-gray-500">
        Founded in the spirit of devotion, Saba began its journey with a small group of faithful believers. 
        Over the years, it has grown into a vibrant spiritual community, touching thousands of lives 
        through prayer, outreach, and service.
      </p>
    </div>
  </div>
);

export default function AboutSection() {
  return (
    <section className="bg-white ">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-5 lg:gap-20 items-center">
        <HistoryMissionText />
        <MissionComposition />
      </div>
    </section>
  );
};