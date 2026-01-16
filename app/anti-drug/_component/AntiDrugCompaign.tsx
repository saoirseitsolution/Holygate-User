import React from 'react';
import { ShieldAlert, Users, HeartPulse, Calendar, MapPin } from 'lucide-react';
import { IconDrug1 } from '@/components/common/icons/IconDrug1';
import { IconDrug2 } from '@/components/common/icons/IconDrug2';
import { IconDrug3 } from '@/components/common/icons/IconDrug3';

const AntiDrugPrograms = () => {
  const services = [
    {
      title: "Drug Awareness Sessions",
      desc: "Educational programs conducted in schools, colleges, and communities to spread awareness about the dangers of drug addiction.",
      icon: <IconDrug1 />,
    },
    {
      title: "Personal Counseling",
      desc: "Confidential one-to-one counseling sessions for individuals and families affected by drug addiction.",
      icon: <IconDrug2/>,
    },
    {
      title: "Recovery Support",
      desc: "Spiritual guidance, prayer support, and referral assistance for rehabilitation and long-term recovery.",
      icon: <IconDrug3 />,
    }
  ];

  const programs = [1, 2, 3, 4]; // Mock array for the cards

  return (
    <div className=" mx-auto py-12 font-sans">
      {/* --- Top Navy Service Banner --- */}
      <div className="bg-[#2E297A] max-w-7xl mx-auto rounded-xl p-8 md:p-8 mb-16 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index !=2 && 'border-r-2'}  border-gray-500 px-1 items  group`}>
              <div className="w-11 h-11  bg-white rounded-full flex items-center justify-center mb-4 shadow-lg transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-[13px] pr-4 leading-relaxed ">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- All Programs Header --- */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#1A1C21] mb-2">All Programs</h2>
        <p className="text-gray-400 text-sm font-medium">Programs based nearest churches for you.</p>
      </div>

      {/* --- Program Cards Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((_, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Card Image */}
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover"
                alt="Program"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase mb-3">
                <Calendar size={14} />
                <span>March 2024</span>
                <span className="ml-auto bg-[#2E297A] text-white px-3 py-1 rounded-lg normal-case">Book Now</span>
              </div>
              
              <h4 className="text-[15px] font-bold text-[#1A1C21] mb-2">Drug Awareness Sessions</h4>
              <p className="text-[12px] text-gray-400 leading-relaxed mb-6 line-clamp-2">
                A testimony of complete healing after being diagnosed with terminal cancer...
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-[12px] font-bold text-gray-500">Church: St.marys</span>
                <div className="flex items-center gap-1 text-[12px] font-bold text-gray-400">
                  <MapPin size={14} />
                  <span>Calicut</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AntiDrugPrograms;