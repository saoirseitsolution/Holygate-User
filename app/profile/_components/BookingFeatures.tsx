import React from 'react';
import { CheckCircle2, Circle, Building2 } from 'lucide-react';

const BookingFeatures = () => {
  const inclusions = [
    "Accommodation in 4-star hotels",
    "Daily breakfast and dinner",
    "Air-conditioned transportation",
    "English-speaking guide",
    "All entrance fees",
    "Travel insurance"
  ];

  const exclusions = [
    "International flights",
    "Lunch meals",
    "Personal expenses",
    "Tips and gratuities"
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* --- Inclusions & Exclusions Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* What's Included */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-[16px] font-bold text-[#1A1C21] mb-6">What's Included</h3>
          <ul className="space-y-4">
            {inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#2E297A] shrink-0 mt-0.5" />
                <span className="text-[13px] font-medium text-gray-500 leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* What's Not Included */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-[16px] font-bold text-[#1A1C21] mb-6">What's Not Included</h3>
          <ul className="space-y-4">
            {exclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Circle size={18} className="text-gray-300 shrink-0 mt-0.5" />
                <span className="text-[13px] font-medium text-gray-500 leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- Accommodation Section --- */}
      <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
        <h3 className="text-[16px] font-bold text-[#1A1C21] mb-3">Accommodation</h3>
        
        <div className="flex items-center gap-5 p-5 bg-[#F9FAFB] rounded-2xl border border-gray-50">
          {/* Hotel Image Placeholder */}
          <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 shrink-0">
            <Building2 size={24} />
          </div>
          
          <div className="space-y-1">
            <h4 className="text-[14px] font-bold text-[#1A1C21]">
              Holy Land Grand Hotel, Jerusalem
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                4-Star Rating
              </span>
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-orange-400 text-[10px]">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFeatures;