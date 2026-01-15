import CustomRadio from '@/components/common/CustomRadio'
import FloatingInput from '@/components/common/FloatingInput'
import React from 'react'

export const ContactForm = () => {
  return (
      <div className="md:w-[60%] p-8 sm:p-12">
          <form className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <FloatingInput label="First Name" placeholder="John" />
              <FloatingInput label="Last Name" placeholder="Doe" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <FloatingInput label="Email" type="email" placeholder="demo@gmail.com" />
              <FloatingInput label="Phone Number" placeholder="+1 012 3456 789" />
            </div>

            {/* Subject Selection */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-black text-[#1A1C21]">Select Subject?</h4>
              <div className="flex flex-wrap gap-6">
                <CustomRadio label="General Inquiry" name="subj" checked={true} />
                <CustomRadio label="Booking Issue" name="subj"  />
                <CustomRadio label="Payment Inquiry" name="subj" />
                <CustomRadio label="General Inquiry" name="subj" />
              </div>
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2 w-full border-b border-gray-200 py-2 focus-within:border-[#3F37C9] transition-colors">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Message</label>
              <textarea 
                placeholder="Write your message.."
                className="bg-transparent outline-none text-sm font-medium text-[#1A1C21] placeholder:text-gray-300 min-h-[30px] resize-none"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button className="bg-[#2E297A] text-white px-10 py-3 rounded-lg font-semibold text-sm shadow-xl shadow-indigo-100 hover:bg-[#1E1B4B] transition-all w-full sm:w-auto">
                Send Message
              </button>
            </div>
          </form>
        </div>
  )
}
