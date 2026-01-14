import { Check, CreditCard, Info, User } from "lucide-react";

// INPUT WRAPPER FOR PIXEL PERFECT SPACING
const Input = ({ label, placeholder, type = "text", icon: Icon }: any) => (
  <div className="w-full">
    <label className="block text-[13px] font-semibold text-[#1A1C21] mb-2">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />}
      <input 
        type={type} 
        placeholder={placeholder}
        className={`w-full bg-[#F3F4F6] border-none rounded-lg py-3.5 px-4 text-sm outline-none focus:ring-2 focus:ring-[#3F37C9]/20 ${Icon ? 'pl-11' : ''}`}
      />
    </div>
  </div>
);

// STEP 1: PERSONAL INFO
export const DetailsForm = () => (
  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 space-y-6">
    <h2 className="text-xl font-semibold text-[#1A1C21]">Personal Information</h2>
    <div className="grid grid-cols-2 gap-5">
      <Input label="First Name *" placeholder="John" />
      <Input label="Last Name *" placeholder="Doe" />
    </div>
    <Input label="Email Address *" placeholder="john.doe@example.com" type="email" />
    <Input label="Phone Number *" placeholder="+91 1234567890" type="tel" />
    <div className="grid grid-cols-2 gap-5">
      <Input label="Select Date *" type="date" />
      <Input label="Number of Guests *" placeholder="1" type="number" icon={User} />
    </div>
    <Input label="Special Requests (Optional)" placeholder="Any dietary restrictions, accessibility needs, etc." type="textarea" />

  </div>
);

// STEP 2: REVIEW VIEW
export const ReviewBooking = () => (
  <div className="bg-white border border-gray-100 rounded-3xl p-10 space-y-8">
    <h2 className="text-xl font-semibold text-[#1A1C21]">Review Your Booking</h2>
    <div className="space-y-6">
                <h3 className="  text-gray-800 uppercase tracking-wide mb-4">Personal Information</h3>

      <section className="bg-[#F9FAFB] rounded-2xl p-6">
        <div className="grid grid-cols-[100px_1fr] gap-y-3 text-[14px]">
          <span className="text-gray-400">Name:</span> <span className="font-semibold text-[#1A1C21]">John Doe</span>
          <span className="text-gray-400">Email:</span> <span className="font-semibold text-[#1A1C21]">john.doe@example.com</span>

          <span className="text-gray-400">Phone:</span> <span className="font-semibold text-[#1A1C21]">9846521181</span>
        </div>
      </section>

       <h3 className="  text-gray-800 uppercase tracking-wide mb-4">Booking Details</h3>

      <section className="bg-[#F9FAFB] rounded-2xl p-6">
        <div className="grid grid-cols-[100px_1fr] gap-y-3 text-[14px]">
          <span className="text-gray-400">Date :</span> <span className="font-semibold text-[#1A1C21]"></span>
          <span className="text-gray-400">Guests :</span> <span className="font-semibold text-[#1A1C21]"> 1 Person</span>

        </div>
      </section>

      <div className="bg-[#EFF6FF] text-[#1C398E] p-5 rounded-2xl flex gap-4 items-start border border-[#BEDBFF]">
        <Info size={20} className="mt-0.5 shrink-0" />
        <div>
          <p className="font-semibold text-[14px] mb-1">Cancellation Policy</p>
          <p className="text-[13px] leading-relaxed opacity-90">Free cancellation up to 48 hours before the start date. After that, a 50% cancellation fee applies.</p>
        </div>
      </div>
    </div>
  </div>
);

// STEP 3: PAYMENT INFO
export const PaymentForm = () => (
  <div className="bg-white border border-gray-100 rounded-[32px] p-10 space-y-6">
    <h2 className="text-xl font-extrabold text-[#1A1C21]">Payment Information</h2>
    <Input label="Card Number *" placeholder="1234 5678 9012 3456" icon={CreditCard} />
    <Input label="Cardholder Name *" placeholder="John Doe" />
    <div className="grid grid-cols-2 gap-5">
      <Input label="Expiry Date *" placeholder="MM/YY" />
      <Input label="CVV *" placeholder="***" type="password" />
    </div>
    <div className="bg-[#F0FDF4] text-[#166534] p-4 rounded-xl flex items-center gap-3 border border-[#DCFCE7]">
      <div className="bg-[#166534] text-white rounded-full p-1"><Check size={12} strokeWidth={4} /></div>
      <span className="text-[13px] font-bold">Secure Payment: Your payment information is encrypted.</span>
    </div>
  </div>
);