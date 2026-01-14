import { Check, CreditCard } from "lucide-react";

export const PaymentInformation = ({ onBack }: { onBack: () => void }) => {
  const labelStyle = "block text-[13px] font-bold text-[#1A1C21] mb-2";
  const inputStyle = "w-full bg-[#F3F4F6] border-none rounded-xl py-4 px-4 text-sm outline-none focus:ring-2 focus:ring-[#3F37C9]/20 font-medium";

  return (
    <div className="bg-white border border-gray-100 rounded-4xl p-10 space-y-8 animate-in slide-in-from-right duration-500">
      <h2 className="text-2xl font-black text-[#1A1C21]">Payment Information</h2>
      
      <div className="space-y-6">
        <div>
          <label className={labelStyle}>Card Number *</label>
          <div className="relative">
            <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="1234 5678 9012 3456" className={`${inputStyle} pl-12`} />
          </div>
        </div>

        <div>
          <label className={labelStyle}>Cardholder Name *</label>
          <input type="text" placeholder="John Doe" className={inputStyle} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Expiry Date *</label>
            <input type="text" placeholder="MM/YY" className={inputStyle} />
          </div>
          <div>
            <label className={labelStyle}>CVV *</label>
            <input type="password" placeholder="123" className={inputStyle} />
          </div>
        </div>

        {/* --- Security Badge --- */}
        <div className="bg-[#E6F9F0] border border-[#BFF2D9] p-4 rounded-xl flex items-center gap-3">
          <div className="bg-[#00BA63] text-white p-1 rounded-full">
            <Check size={12} strokeWidth={4} />
          </div>
          <p className="text-[#008A4A] text-[13px] font-bold leading-tight">
            Secure Payment: Your payment information is encrypted and secure.
          </p>
        </div>
      </div>

      
    </div>
  );
};