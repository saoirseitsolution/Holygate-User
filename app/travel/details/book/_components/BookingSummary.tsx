import IconMap from "@/components/common/icons/IconMap";
import { travel } from "@/constants/images";
import { Clock } from "lucide-react";
import Image from "next/image";

export const BookingSummary = () => (
  <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
    <h3 className="text-[18px] font-bold text-[#1A1C21] mb-6">Booking Summary</h3>
    <div className="rounded-2xl overflow-hidden mb-5">
      <Image src={travel} className="w-full h-32 object-cover" alt="Tour" />
    </div>
    <div className="space-y-1 mb-6">
      <h4 className="font-bold text-[#1A1C21] text-[15px]">Holy Pilgrimage Tour</h4>
      <div className="flex flex-col items-start gap-3 text-gray-400 text-[12px] font-medium">
        <p className="flex items-center gap-1"><IconMap size={14} /> Tamil Nadu</p>
        <p className="flex items-center gap-1"><Clock size={14} /> 3 Days</p>
      </div>
    </div>
    <div className="space-y-4 pt-5 border-t border-gray-100">
      <div className="flex justify-between text-[13px] text-gray-500 font-medium">
        <p>$299 x 1 guest</p>
        <p className="text-[#1A1C21] font-bold">$299</p>
      </div>
      <div className="flex justify-between text-[13px] text-gray-500 font-medium">
        <span>Service fee</span>
        <span className="text-[#1A1C21] font-bold">$29.90</span>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="text-[16px] font-bold text-[#1A1C21]">Total</span>
        <span className="text-[22px] font-extrabold text-[#2E2773]">$328.90</span>
      </div>
    </div>
  </div>
);