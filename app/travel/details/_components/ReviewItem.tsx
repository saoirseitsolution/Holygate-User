import { Star } from 'lucide-react';

interface ReviewProps {
  name: string;
  date: string;
  comment: string;
  rating: number;
}

export const ReviewItem = ({ name, date, comment, rating }: ReviewProps) => {
  return (
    <div className="py-2 border-b border-gray-100 last:border-0">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="text-[#1A1C21] font-semibold text-[15px]">{name}</h4>
          <p className="text-gray-400 text-[12px] mt-0.5">{date}</p>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              fill={i < rating ? "#FACC15" : "none"} 
              className={i < rating ? "text-yellow-400" : "text-gray-200"} 
            />
          ))}
        </div>
      </div>
      <p className="text-gray-500 text-[14px] leading-relaxed max-w-3xl">
        {comment}
      </p>
    </div>
  );
};