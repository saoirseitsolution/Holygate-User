"use client";
import React, { ReactNode, useState } from 'react';
import { 
  ArrowLeft, Download, MapPin, Calendar, Clock, Users, 
  ChevronRight, CheckCircle2, XCircle, Info 
} from 'lucide-react';
import PaymentHistorySidebar from './PaymentHistorySidebar';
import BookingFeatures from './BookingFeatures';
import CancelBookingModal from './CancelBookingModal';

const BookingDetails = ({ onBack }: { onBack: () => void }) => {

    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  // Mock data representing the current booking
  const bookingData = {
    id: "BKG001",
    name: "Holy Land Pilgrimage"
  };

  const handleConfirmCancellation = () => {
    console.log(`Cancelling booking: ${bookingData.id}`);
    // Add your API logic here
    setIsCancelModalOpen(false);
  };
  const itinerary = [
    { day: 1, title: 'Arrival in Jerusalem', desc: 'Check-in and welcome dinner' },
    { day: 2, title: 'Old City Tour', desc: 'Visit Church of Holy Sepulchre, Western Wall' },
    { day: 3, title: 'Bethlehem Day Trip', desc: 'Church of Nativity, Shepherd\'s Field' },
    { day: 4, title: 'Dead Sea Experience', desc: 'Float in Dead Sea, Masada visit' },
    { day: 5, title: 'Galilee Region', desc: 'Sea of Galilee, Capernaum, Mount of Beatitudes' },
  ];

  return (
    <div className=" animate-in slide-in-from-right duration-500">
      {/* Back Navigation */}
      <button 
        onClick={onBack}
        className="flex cursor-pointer items-center gap-2 text-[#2E297A] font-bold text-xs mb-6 hover:opacity-70"
      >
        <ArrowLeft size={14} /> Back to Bookings
      </button>

      {/* Hero Header */}
      <div className="bg-[#2E297A] rounded-xl p-8 text-white mb-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Holy Land Pilgrimage</h1>
              <p className="text-white/60 text-[12px] font-semibold uppercase tracking-wider">Booking ID: BKG001</p>
            </div>
            <button className="bg-white text-[#2E297A] px-4 py-2 rounded-xl text-[10px] font-bold flex items-center gap-2">
              <Download size={14} /> Download
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <HeaderStat icon={<MapPin size={14}/>} label="Destination" value="Jerusalem, Israel" />
            <HeaderStat icon={<Calendar size={14}/>} label="Travel Dates" value="Mar 20 - Mar 29, 2026" />
            <HeaderStat icon={<Clock size={14}/>} label="Duration" value="10 Days / 9 Nights" />
            <HeaderStat icon={<Users size={14}/>} label="Travelers" value="1 Person" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- Left Column (Itinerary & Details) --- */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Traveler Details */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className=" font-bold text-[#1A1C21] mb-4">Traveler Details</h3>
            <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-50">
              <div className="flex justify-between items-start mb-4">
                <p className=" font-bold text-[#1A1C21]">Traveler 1</p>
                <span className="text-[10px] text-gray-400 font-medium">Age: 35</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-500">
                  <Users size={14} /> <span className="text-sm font-medium">John Doe</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="text-sm font-medium">john.doe@church.org</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="text-sm font-medium">+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Itinerary */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#1A1C21] mb-6">Travel Itinerary</h3>
            <div className="space-y-6">
              {itinerary.map((item) => (
                <div key={item.day} className="flex gap-6 relative">
                  <div className="shrink-0 w-10 h-10 bg-[#2E297A]/5 rounded-xl flex items-center justify-center text-[#2E297A] text-[10px] font-black">
                    Day {item.day}
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-semibold text-[#1A1C21]">{item.title}</p>
                    <p className="text-[12px] text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <BookingFeatures/>
        </div>

        {/* --- Right Column (Payments & Summary) --- */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Payment Summary */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#1A1C21] mb-6">Payment Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-[12px] font-medium">
                <span className="text-gray-400">Total Amount</span>
                <span className="text-[#1A1C21]">₹75,000</span>
              </div>
              <div className="flex justify-between text-[11px] font-medium">
                <span className="text-gray-400">Paid Amount</span>
                <span className="text-[#1A1C21]">₹25,000</span>
              </div>
            </div>
            
            <div className="bg-[#FFF8F1] rounded-xl p-4 border border-orange-100 mb-6 text-center">
              <p className="text-gray-400 text-[10px] font-semibold uppercase mb-1">Remaining Balance</p>
              <p className="text-xl font-bold text-orange-600">₹50,000</p>
            </div>

            <button className="w-full bg-[#2E297A] text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-indigo-100">
              Pay Remaining Amount
            </button>
          </div>
          <PaymentHistorySidebar/>

          {/* Cancel Booking */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#1A1C21] mb-2">Cancel Booking</h3>
            <p className="text-[10px] text-gray-400 font-medium leading-relaxed mb-6">
              You can cancel booking within 2-3 days before trip starts.
              <span className="block text-green-500 mt-1">• 100% refund available</span>
            </p>
            <button onClick={() => setIsCancelModalOpen(true)} className="w-full cursor-pointer bg-[#E51B3E] text-white py-2 rounded-lg text-xs font-semibold hover:bg-[#D41838]">
              Cancel Booking
            </button>
          </div>
        </div>
        <CancelBookingModal 
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={handleConfirmCancellation}
        bookingId={bookingData.id}
        packageName={bookingData.name}
      />
      </div>
    </div>
  );
};

const HeaderStat = ({ icon, label, value }:{ icon: ReactNode, label: string, value: string }) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-2 text-white/40">
      {icon} <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
    </div>
    <p className="text-xs font-semibold">{value}</p>
  </div>
);

export default BookingDetails;