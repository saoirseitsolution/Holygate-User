"use client";
import IconMap from '@/components/common/icons/IconMap';
import { Clock, Users, Calendar, MapPin, Phone, Mail, Check, Download } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TravelDetailPage() {
    const route = useRouter();      
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* --- LEFT CONTENT AREA --- */}
        <div className="flex-1 space-y-16">
          
          {/* 1. Quick Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
            {[
              { icon: <Clock className="text-blue-500" />, label: "Duration", value: "3 Days", bg: "bg-blue-50" },
              { icon: <Users className="text-green-500" />, label: "Group Size", value: "15-25", bg: "bg-green-50" },
              { icon: <Calendar className="text-purple-500" />, label: "Available", value: "Year Round", bg: "bg-purple-50" },
              { icon: <IconMap fill='#F54900' />, label: "Pick-up", value: "Included", bg: "bg-orange-50" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${item.bg}`}>{item.icon}</div>
                <div>
                  <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">{item.label}</p>
                  <p className="text-[#1A1C21] font-semibold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 2. About This Program Section */}
          <div className="p-10 border shadow-sm border-gray-100 rounded-4xl bg-white">
            <h2 className="text-2xl font-bold text-[#1A1C21] mb-6">About This Program</h2>
            <div className="space-y-6 text-gray-500 leading-relaxed text-[15px]">
              <p>Find churches and programs happening now. Experience spiritual growth and community.</p>
              <p>
                Join us on this transformative spiritual journey where you'll experience deep prayer, 
                meaningful worship, and fellowship with fellow believers. This program is designed to 
                help you grow in faith while exploring the rich Christian heritage of the region.
              </p>
            </div>
          </div>

          {/* 3. Download Section */}
          <div className="p-10 shadow-sm border border-gray-100 rounded-4xl bg-white">
            <h2 className="text-xl font-semibold text-[#1A1C21] mb-8">Full Package Details, Please Download this PDF</h2>
            <button className="flex items-center gap-3 bg-[#2E2773] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#342da3] transition-all">
              <Download size={20} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDEBAR --- */}
        <aside className="w-full   lg:w-[400px] space-y-6">
          
          {/* Booking Card */}
          <div className="p-8 border grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 md:gap-8  border-gray-100 rounded-4xl bg-white shadow-md">
            <div className='grid grid-cols-1 md:grid-cols-2 md:col-span-2 lg:grid-cols-1 md:gap-6'>
                <div>
            <div className="mb-3">
              <div className="flex items-baseline gap-1">
                <span className="text-[#3F37C9] text-3xl font-bold">$299</span>
                <span className="text-gray-400 text-sm font-medium">per person</span>
              </div>
              <p className="text-gray-400 text-[11px] mt-2 italic">* Prices may vary based on season</p>
            </div>

            <div className="space-y-3">
              <button onClick={()=> route.push('/travel/details/book')} className="w-full cursor-pointer bg-[#2E2773] text-white py-4 rounded-xl font-bold hover:bg-[#342da3] transition-all">
                Book Now
              </button>
              <button className="w-full bg-white text-[#1A1C21] border border-gray-200 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                Add to Wishlist
              </button>
            </div>
            </div>
             <div className="mt-10 lg:pt-8 lg:mt-5 md:pt-0 md:mt-0 pt-8 border-t md:border-t-0 lg:border-t border-gray-100 space-y-6">
              <h3 className="font-semibold text-lg text-[#1A1C21]">Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-2.5 rounded-lg  text-[#2E2773]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase">Call us</p>
                    <p className="text-sm font-bold text-[#1A1C21]">+91 1234567890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-2.5 rounded-lg  text-[#2E2773]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase">Email us</p>
                    <p className="text-sm font-bold text-[#1A1C21]">info@holygate.com</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div>
           

            {/* Why Book With Us */}
            <div className="mt-10 lg:pt-5  md:pt-0 md:mt-0 pt-8 border-t md:border-t-0 lg:border-t border-gray-100">
              <h3 className="font-semibold text-lg text-[#1A1C21] mb-6">Why Book With Us?</h3>
              <ul className="space-y-4">
                {[
                  "Best price guarantee",
                  "Free cancellation up to 48 hours",
                  "Trusted by 10,000+ travelers",
                  "24/7 customer support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-green-500 stroke-[3px]" />
                    <span className="text-sm text-gray-600 ">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}