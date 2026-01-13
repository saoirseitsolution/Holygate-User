import { Play } from "lucide-react";
import Image, { StaticImageData } from "next/image";

export interface VideoData {
  id: string;
  title: string;
  subTitle: string; // Used for "Church Name" or "Description"
  author: string;
  timeOrDate: string; // e.g., "10 AM - 11 AM" or "19 Jan 2026"
  thumbnail: string | StaticImageData;
  avatar: string;
  colorTheme?: string; // For the "Recent" section cards
}
export const LiveCard = ({ video,key }: { video: VideoData,key:number }) => (
  
  <div key={key} className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
    <Image src={video.thumbnail} width={100} height={100} className="w-full h-full object-cover" alt="" />
    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute top-2 left-6 text-white ">{video.title}</div>
    <div className="absolute top-4 right-6 flex items-center gap-2">
      <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_10px_red]" />
      <span className="text-white text-xs font-bold uppercase">Live</span>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <Play fill="white" className="text-white w-10 h-10 opacity-80 group-hover:scale-110 transition-transform" />
    </div>
    <div className="absolute bottom-0 border-t border-gray-50/15 left-0 right-0 px-4 py-1 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent">
      <div className="flex items-center gap-2">
        <img src={video.avatar} className="w-8 h-8 rounded-full border border-white/20" alt="" />
        <div className="leading-tight">
          <p className="text-white text-xs font-bold">{video.author}</p>
          <p className="text-white/60 text-[10px]">{video.subTitle}</p>
        </div>
      </div>
      <div className="bg-[#CD1E1E]/60 px-3 py-1 rounded-full text-[10px] text-white/70  uppercase tracking-wider">
        {video.timeOrDate}
      </div>
    </div>
  </div>
);