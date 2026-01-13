import { Play, Heart } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface RecentVideo {
  id: string;
  title: string;
  description: string;
  author: string;
  duration: string;
  thumbnail: string | StaticImageData;
  avatar: string;
  // Use hex codes for precise control over opacity in the gradient
  themeHex: string; 
}

export const RecentCard = ({ video }: { video: RecentVideo }) => {
  return (
    <div className="relative group cursor-pointer aspect-[3/4.2] rounded-xl overflow-hidden shadow-2xl">
      {/* 1. Base Image */}
      <Image 
        src={video.thumbnail} 
        alt={video.title} 
        height={100}
        width={100}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. The Transparent-to-Solid Gradient Overlay */}
      {/* This creates the "wash" of color that starts halfway and turns solid at the bottom */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(to bottom, 
            transparent 0%, 
            transparent 60%, 
            ${video.themeHex} 93%, 
            ${video.themeHex} 95%, 
            ${video.themeHex} 89%)`
        }}
      />

      {/* 3. Subtle Bottom Blur (Glassmorphism effect for the text area) */}
      {/* <div className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[2px] z-0" /> */}

      {/* 4. Top Controls */}
      <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-20">
        <button className=" rounded-full  text-white/90 hover:text-white transition-colors">
          <Heart size={18} />
        </button>
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xl px-3 py-1 rounded-xl border border-white/10 text-white text-[10px] tracking-wider">
          <Play size={10} fill="white" /> PLAY
        </div>
      </div>

      {/* 5. Content Area */}
      <div className="absolute bottom-0 left-0 right-0 pt-6 px-4  pb-1 z-20 text-white">
        <h3 className=" text-[17px] line-clamp-1 mb-1 tracking-tight">
          {video.title}
        </h3>
        <p className="text-white/80 text-[11px] leading-tight line-clamp-2 mb-1 ">
          {video.description}
        </p>
        
        {/* Author Footer */}
        <div className="flex items-center gap-3 pt-1 border-t border-white/20">
          <div className="relative">
            <img 
              src={video.avatar} 
              className="w-7 h-7 rounded-full border border-white/40 object-cover" 
              alt={video.author} 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px]  tracking-wide">{video.author}</span>
          </div>
          <div className="ml-auto flex items-center gap-1 opacity-80">
            <div className="w-1 h-1 bg-white rounded-full" />
            <span className="text-[10px] ">{video.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};