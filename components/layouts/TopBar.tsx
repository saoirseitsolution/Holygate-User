"use client";
import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#2B5C77] text-white text-sm py-1 border-b border-[#1d4254]">
      <div className="containers mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Side: Announcement */}
        <p className="text-center md:text-left">
          Upcoming event: <span className="font-semibold">25 days 10 Hours 45 Seconds</span>
        </p>

        {/* Right Side: Contact Info */}
        <div className="flex items-center gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>24/7 Support: +91 9874563255</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={14} />
            <span>holygate123@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
