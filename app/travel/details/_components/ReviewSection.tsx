import { Star } from "lucide-react";
import { ReviewItem } from "./ReviewItem";

export const ReviewSection = () => {
  const reviews = [
    {
      name: "John Michael",
      date: "Dec 10, 2024",
      comment: "Absolutely wonderful experience! The spiritual atmosphere was incredible and the organization was perfect.",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      date: "Dec 5, 2024",
      comment: "Great pilgrimage program. Met wonderful people and felt spiritually renewed.",
      rating: 4
    },
    {
      name: "David Brown",
      date: "Nov 28, 2024",
      comment: "Life-changing experience. The guides were knowledgeable and caring. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto  mt-8">
      <div className="bg-white border border-gray-100 rounded-4xl p-10 mb-10 shadow-sm">
        
        {/* Header Summary */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#1A1C21]">Reviews</h2>
          <div className="flex items-center gap-2">
            <Star size={20} fill="#FACC15" className="text-yellow-400" />
            <span className="text-xl font-bold text-[#1A1C21]">4.5</span>
            <span className="text-gray-400 text-sm font-medium">(128 reviews)</span>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-2">
          {reviews.map((r, i) => (
            <ReviewItem key={i} {...r} />
          ))}
        </div>

        {/* View All Action */}
        <button className="w-full mt-8 py-4 border border-gray-200 rounded-xl text-gray-500 font-bold text-[14px] hover:bg-gray-50 transition-all">
          View All Reviews
        </button>
      </div>
    </div>
  );
};