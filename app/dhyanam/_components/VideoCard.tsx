import { Play, Heart } from 'lucide-react';

interface ArchiveVideo {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  thumbnail: string;
  avatar: string;
}

export const VideoCard = ({ video }: { video: ArchiveVideo }) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Thumbnail Container */}
      <div className="relative aspect-video rounded-[24px] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Heart Icon Overlay */}
        <button className="absolute top-4 left-4 z-10 text-white/70 hover:text-white transition-colors">
          <Heart size={20} />
        </button>

        {/* Center Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
            <Play size={20} fill="white" className="text-white ml-1" />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-1">
        <h3 className="text-[#1A1C21] font-bold text-[17px] leading-tight mb-2">
          {video.title}
        </h3>
        <p className="text-[#64748B] text-[13px] leading-relaxed line-clamp-2 mb-4">
          {video.description}
        </p>
        
        {/* Footer */}
        <div className="flex items-center gap-2.5">
          <img 
            src={video.avatar} 
            className="w-7 h-7 rounded-full border border-gray-100 object-cover" 
            alt={video.author} 
          />
          <span className="text-[#1A1C21] text-[12px] font-semibold">{video.author}</span>
          <span className="text-[#64748B] text-[12px] flex items-center gap-1.5 ml-auto">
            <span className="w-1 h-1 bg-gray-300 rounded-full" /> {video.date}
          </span>
        </div>
      </div>
    </div>
  );
};