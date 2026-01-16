"use client";
import { useState } from "react";
import { BookingCard } from "./BookingCard";

export const MyBookings = ({setActiveTab} : { setActiveTab: any}) => {
    const [filter, setFilter] = useState('all');
  return (
    <div className="">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#1A1C21]">My Bookings</h2>
          <p className="text-sm text-gray-400 font-medium">View and manage your travel bookings</p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-xl gap-1">
          <button className={`${filter === 'all' ? 'bg-[#2E297A] shadow-sm rounded-lg text-white' : 'hover:text-[#2E297A]'}  px-4 py-1.5  text-xs  font-bold `} onClick={() => setFilter('all')}>All</button>
          <button className={`${filter === 'upcoming' ? 'bg-[#2E297A] shadow-sm rounded-lg text-white' : 'hover:text-[#2E297A]'}  px-4 py-1.5  text-xs  font-bold `} onClick={() => setFilter('upcoming')}>Upcoming</button>
          <button className={`${filter === 'completed' ? 'bg-[#2E297A] shadow-sm rounded-lg text-white' : 'hover:text-[#2E297A]'}  px-4 py-1.5  text-xs  font-bold `} onClick={() => setFilter('completed')}>Completed</button>
        </div>
      </div>

      <BookingCard setActiveTab={setActiveTab}
        title="Faith & Spiritual Retreat" 
        id="BKGD01" 
        status="Confirmed" 
        paid={24000} 
        total={24000} 
        remaining={0}
      />
      <BookingCard setActiveTab={setActiveTab}
        title="Holy Land Pilgrimage" 
        id="BKGD02" 
        status="Pending" 
        paid={25000} 
        total={75000} 
        remaining={50000}
      />
    </div>
  );
};