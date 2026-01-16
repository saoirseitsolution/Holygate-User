import React from 'react';
import { Phone, Mail, MapPin, Twitter, Instagram, Disc as Discord } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { IconTwitter } from '@/components/common/icons/IconTwitter';
import { IconInstagram } from '@/components/common/icons/IconInstagram';
import { IconDiscord } from '@/components/common/icons/IconDiscord';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFF] mt-10 py-12 container px-4 sm:px-6 lg:px-8">
      <div className="px-3 mb-12">
        <h1 className="text-4xl font-bold text-[#1A1C21] mb-2">Contact Us</h1>
        <p className="text-gray-500 font-medium">Any question or remarks? Just write us a message!</p>
      </div>

      <div className=" mx-auto bg-white rounded-3xl shadow-xl shadow-indigo-50/50 p-2 flex flex-col md:flex-row min-h-[600px]">
        
        {/* --- Sidebar: Contact Information --- */}
        <div className="md:w-[40%] bg-[#2E297A] rounded-lg p-10 relative overflow-hidden flex flex-col justify-between text-white">
          <div>
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <p className="text-gray-300 text-sm font-medium">Say something to start a live chat!</p>
            
            <div className="mt-16 space-y-10">
              <div className="flex items-center gap-6">
                <Phone size={20} />
                <span className="text-sm font-medium">+1012 3456 789</span>
              </div>
              <div className="flex items-center gap-6">
                <Mail size={20} />
                <span className="text-sm font-medium">demo@gmail.com</span>
              </div>
              <div className="flex items-center gap-6">
                <MapPin size={20} className='shrink-0' />
                <span className="text-sm font-medium leading-relaxed max-w-[220px]">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons & Decorative Circles */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FFB800] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
              <IconTwitter/>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
              <IconInstagram/>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FFB800] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
              <IconDiscord/>
            </div>
          </div>

          {/* Background Decorative Circles */}
          <div className="absolute -bottom-16 -right-12 w-48 h-48 bg-[#FFFF] rounded-full opacity-12 " />
          <div className="absolute bottom-12 right-10 w-32 h-32 bg-[#FFF9F921]/20 rounded-full" />
        </div>

        {/* --- Form Section --- */}
        <ContactForm/>

      </div>
    </div>
  );
};

export default ContactPage;