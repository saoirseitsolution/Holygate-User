"use client";
import React from 'react';
import { 
  Check, 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  Download, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import { IconContainerCheck } from '@/components/common/icons/IconContainerCheck';
import { useRouter, useSearchParams } from 'next/navigation';

const SuccessPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const backUrl = params.get('back') || '/travel';
  return (
    <div className="min-h-screen bg-[#F9FAFB]  py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E6F9F0] rounded-full mb-6">
            <IconContainerCheck/>
          </div>
          <h1 className="text-3xl font-semibold text-[#1A1C21] mb-2">Booking Confirmed!</h1>
          <p className="text-gray-500 font-medium">Your spiritual journey has been successfully booked</p>
          <p className="mt-2 text-[13px] font-bold text-gray-400">
            Booking ID: <span className="text-[#3F37C9]">HGT9YKOXJ6D</span>
          </p>
        </div>

        {/* --- Main Booking Details Card --- */}
        <div className="bg-white border border-gray-100 rounded-lg p-6 sm:p-10 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1A1C21] mb-8">Migrating to Linear 101</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-8 gap-x-12 mb-10">
            {/* Date */}
            <div className="flex items-center gap-4">
              <div className="sm:w-12 sm:h-12 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Date</p>
                <p className="text-sm font-semibold text-[#1A1C21]">15 Jan 2026</p>
              </div>
            </div>
            {/* Guests */}
            <div className="flex items-center gap-4">
              <div className="sm:w-12 sm:h-12 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                <Users size={20} />
              </div>
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Guests</p>
                <p className="text-sm font-semibold text-[#1A1C21]">1 Person</p>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="sm:w-12 sm:h-12 w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-[#1A1C21]">Tamil Nadu</p>
              </div>
            </div>
            {/* Duration */}
            <div className="flex items-center gap-4">
              <div className="sm:w-12 sm:h-12 w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Duration</p>
                <p className="text-sm font-semibold text-[#1A1C21]">3 Days</p>
              </div>
            </div>
          </div>

          {/* Traveler Info Subsection */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Traveler Information</h3>
            <div className="bg-[#F8F9FD] rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6">
              <div>
                <p className="text-[11px] font-bold text-gray-400 mb-1">Name</p>
                <p className="text-sm font-semibold text-[#1A1C21]">John Doe</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 mb-1">Email</p>
                <p className="text-sm font-semibold text-[#1A1C21]">john.doe@example.com</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 mb-1">Phone</p>
                <p className="text-sm font-semibold text-[#1A1C21]">+91 1234567890</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 mb-1">Booking ID</p>
                <p className="text-sm font-black text-[#1A1C21]">HGT9YKOXJ6D</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- "What happens next?" Section --- */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1A1C21] mb-8">What happens next?</h2>
          <div className="space-y-8">
            {[
              { id: 1, title: "Confirmation Email", desc: "You'll receive a detailed confirmation email within the next few minutes." },
              { id: 2, title: "Pre-Trip Information", desc: "We'll send you detailed information about preparation, what to bring, and meeting point details 7 days before your trip." },
              { id: 3, title: "24-Hour Reminder", desc: "You'll get a reminder via email and SMS 24 hours before your departure with final details and contact information." }
            ].map((step) => (
              <div key={step.id} className="flex gap-5">
                <div className="shrink-0 w-8 h-8 bg-[#2E2773] text-white rounded-full flex items-center justify-center text-xs font-black shadow-lg shadow-indigo-100">
                  {step.id}
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#1A1C21] mb-1">{step.title}</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Action Buttons --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <button className="flex items-center justify-center gap-3 bg-white border border-gray-100 shadow-sm py-2 rounded-lg font-semibold text-gray-500 text-sm hover:bg-gray-50 transition-all">
            <Download size={18} /> Download Receipt
          </button>
          <button className="flex items-center justify-center gap-3 bg-white border shadow-sm border-gray-100 py-2 rounded-lg font-semibold text-gray-500 text-sm hover:bg-gray-50 transition-all">
            <Mail size={18} /> Email Confirmation
          </button>
        </div>

        {/* --- Need Help Footer Section --- */}
        <div className="bg-[#EFF6FF] border border-[#BEDBFF] rounded-lg p-8 mb-10">
          <h3 className="text-lg font-semibold text-[#1A1C21] mb-2">Need Help?</h3>
          <p className="text-gray-500 text-sm font-medium mb-6">Our support team is available 24/7 to assist you with any questions or concerns.</p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-white px-6 py-2 rounded-lg font-semibold text-[#1A1C21] text-[13px] border border-white hover:border-[#3F37C9] transition-all">
              Contact Support
            </button>
            <button className="bg-white px-6 py-2 rounded-lg font-semibold text-[#1A1C21] text-[13px] border border-white hover:border-[#3F37C9] transition-all">
              View FAQs
            </button>
          </div>
        </div>

        {/* --- Final CTA --- */}
        <div className="text-center">
          <button onClick={()=> router.push(backUrl)} className="bg-[#2E2773] cursor-pointer text-white px-10 py-2 rounded-lg font-semibold text-[15px] shadow-xl hover:bg-black transition-all">
            Explore More Programs
          </button>
        </div>

      </div>
    </div>
  );
};

export default SuccessPage;