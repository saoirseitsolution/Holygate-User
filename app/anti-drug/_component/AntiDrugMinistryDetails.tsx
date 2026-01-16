import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const AntiDrugMinistryDetails = () => {
  const speakers = [
    { name: "Fr. Joseph Mathew", image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80", desc: "Helping youth overcome addiction through faith and guidance." },
    { name: "Mr. Antony Paul", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80", desc: "Community outreach and rehabilitation coordination." },
    { name: "Dr. Thomas George", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80", desc: "Helping youth overcome addiction through faith and guidance." },
    { name: "Jonathan Wills", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80", desc: "Community outreach and rehabilitation coordination." },
  ];

  return (
    <div className="py-12 space-y-20 font-sans">
      
      {/* --- Top Speakers Section --- */}
      <section>
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1A1C21] mb-1">Top Speaker's</h2>
          <p className="text-gray-400 text-sm font-medium">Location based nearest churches for you.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="group relative h-[340px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Profile Image */}
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Bottom Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <h4 className="text-white text-[15px] font-bold">{speaker.name}</h4>
                </div>
                <p className="text-gray-300 text-[11px] leading-relaxed font-medium">
                  {speaker.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Anti-Drug Ministry Help Banner --- */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1C21] mb-1">Anti-Drug Ministry</h2>
          <p className="text-gray-400 text-sm font-medium">Supporting individuals and families affected by addiction through faith-based programs</p>
        </div>
    
        {/* Gradient Helpline Card */}
        <div className="w-full bg-linear-to-br from-[#9590C8] via-[#5B57A6] to-[#2E2773] rounded-xl p-7 md:p-9 shadow-2xl shadow-indigo-200">
          <div className="max-w-3xl">
            <h3 className="text-gray-200 text-sm font-bold uppercase tracking-wider mb-4">Need Help Now?</h3>
            <p className="text-white text-lg md:text-xl  leading-relaxed mb-7">
              If you or someone you know is struggling with addiction, reach out today. There is hope and help available.
            </p>
            
            <a 
              href="tel:1-800-662-HELP" 
              className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full text-[#2E297A] font-bold text-sm hover:bg-gray-100 transition-all active:scale-95 shadow-lg"
            >
              <Phone size={18} />
              Call Helpline: 1-800-662-HELP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntiDrugMinistryDetails;