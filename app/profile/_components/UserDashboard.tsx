"use client";

import React from "react";
import { Calendar, Heart, Lock, User, Wallet } from "lucide-react";
import { MyBookings } from "./MyBookings";
import ProfileDetailsSection from "./ProfileDetailSection";
import ChangePassword from "./SecuritySettings";
import { FcLike } from "react-icons/fc";
import { IconLike } from "@/components/common/icons/IconLike";
import WishlistSection from "./WishlistSection";
import WalletSection from "./WalletSection";
import BookingDetails from "./BookingDetail";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = React.useState('profile');

  return (
    <div className="min-h-screen bg-[#FAFBFC] p-4 md:p-8">
      <div className="flex gap-7">
        
        {/* SIDEBAR */}
        <aside className="lg:w-80 shrink-0">
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm text-center">
            <div className="w-24 h-24 bg-[#3F3D89] rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-xl">JD</div>
            <div className="border-b border-gray-200 pb-4 shadow-b-sm">
            <h3 className="text-lg font-black text-[#1A1C21]">John Doe</h3>
            <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mt-1">Free Member</p>
            </div>
            <div className="mt-5 space-y-2">
              <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-4 px-5 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'profile' ? 'bg-[#2E297A] text-white' : 'text-gray-400 hover:bg-gray-50'}`}>
                <User size={18} /> Profile Details
              </button>
              <button onClick={() => setActiveTab('bookings')} className={`w-full flex items-center gap-4 px-5 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'bookings' ? 'bg-[#2E297A] text-white' : 'text-gray-400 hover:bg-gray-50'}`}>
                <Calendar size={18} /> My Bookings
              </button>
              <button onClick={() => setActiveTab('wishlist')} className={`w-full flex items-center gap-4 px-5 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'wishlist' ? 'bg-[#2E297A] text-white' : 'text-gray-400 hover:bg-gray-50'}`}>
                <Heart size={18} /> Wishlist
              </button>
              <button onClick={() => setActiveTab('wallet')} className={`w-full flex items-center gap-4 px-5 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'wallet' ? 'bg-[#2E297A] text-white' : 'text-gray-400 hover:bg-gray-50'}`}>
                <Wallet size={18} /> Wallet
              </button>
              <button onClick={() => setActiveTab('security')} className={`w-full flex items-center gap-4 px-5 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'security' ? 'bg-[#2E297A] text-white' : 'text-gray-400 hover:bg-gray-50'}`}>
                <Lock size={18} /> Change Password
              </button>
            </div>
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main className=" flex-12">
          {activeTab === 'profile' && <ProfileDetailsSection />}
          {activeTab === 'bookings' ? <MyBookings setActiveTab={setActiveTab}  /> : activeTab === 'details' && <BookingDetails onBack={() => setActiveTab('bookings')} />}
           {activeTab === 'wishlist' && <WishlistSection />}
           {activeTab === 'wallet' && <WalletSection />}
          {activeTab === 'security' && <ChangePassword />}
        </main>
      </div>
    </div>
  );
}