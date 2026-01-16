import { Heart } from "lucide-react";
import { TourData, TravelCard } from "../../_components/TravelCard";
import { travel } from "@/constants/images";

const TRAVEL_DATA: TourData[] = [
  {
    id: 't1',
    title: "Holy Pilgrimage Tour",
    description: "Visit sacred sites and experience divine blessings on this spiritual journey.",
    location: "Velankanni Church",
    price: 299,
    rating: 4.5,
    thumbnail: travel,
  },
  // Add more dummy data here to fill the grid...
];

export default function TravelSection() {
  return (
    <div className="w-full bg-[#F9FAFB] py-10">
    <section  className="py-16 container ">
      {/* Top Filter & Action Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
        
        
        <div className="flex items-center gap-3">
          <button className="flex cursor-pointer items-center gap-2 bg-[#2E2773] border border-gray-100 px-6 py-2.5 rounded-full text-[13px] font-bold text-[#ffff]">
            <Heart size={16} fill="#ffff" /> Wishlist
          </button>
          <button className="flex cursor-pointer items-center gap-2 bg-white border border-[#2E2773] px-6 py-2.5 rounded-full text-[13px] font-bold text-gray-500">
            Add More 
            {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg> */}
          </button>
        </div>
      </div>

      {/* Grid: 4 Columns per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array(3).fill(null).map((_, i) => (
          <TravelCard key={i} tour={{...TRAVEL_DATA[0], id: i.toString()}} />
        ))}
      </div>
    </section>
    </div>
  );
}