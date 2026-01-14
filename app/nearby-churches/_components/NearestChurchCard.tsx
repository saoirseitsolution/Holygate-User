import { Heart } from 'lucide-react';

interface Church {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export const NearestChurchCard = ({ church }: { church: Church }) => {
  return (
    <div className="flex flex-col group">
      {/* Thumbnail with Heart Overlay */}
      <div className="relative aspect-video rounded-3xl overflow-hidden mb-4 shadow-sm">
        <img 
          src={church.thumbnail} 
          alt={church.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button className="absolute top-4 left-4 text-white/80 hover:text-white transition-colors">
          <Heart size={20} />
        </button>
      </div>

      {/* Text Content */}
      <div className="mb-5">
        <h3 className="text-[#1A1C21] font-bold text-[18px] leading-tight mb-2">
          {church.title}
        </h3>
        <p className="text-[#64748B] text-[13px] leading-relaxed line-clamp-2">
          {church.description}
        </p>
      </div>

      {/* Call to Action Button */}
      <button className="w-full bg-[#2E2773] text-white py-2 rounded-2xl text-[13px] font-bold hover:bg-[#342da3] transition-colors shadow-lg shadow-indigo-100">
        View Details
      </button>
    </div>
  );
};