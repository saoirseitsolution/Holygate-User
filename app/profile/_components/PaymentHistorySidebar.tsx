import React from 'react';
import { CreditCard } from 'lucide-react';

const PaymentHistorySidebar = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm animate-in fade-in duration-500">
      {/* Title */}
      <h3 className="text-[16px] font-bold text-[#1A1C21] mb-3">Payment History</h3>
      
      {/* Transaction Item Container */}
      <div className="bg-[#F9FAFB] rounded-xl p-5 border border-gray-50/50">
        <div className="flex justify-between items-center mb-3">
          {/* Amount styling with black weight */}
          <span className="text-[18px] font-black text-[#1A1C21]">₹25,000</span>
          
          {/* Status badge - muted text */}
          <span className="text-[11px] font-bold text-gray-400 lowercase">completed</span>
        </div>
        
        <div className="space-y-1.5">
          {/* Date */}
          <p className="text-[12px] font-medium text-gray-400">Jan 18, 2026</p>
          
          {/* Method and ID with icon */}
          <div className="flex items-center gap-2 text-[12px] font-medium text-gray-500">
            <CreditCard size={14} className="text-gray-400" />
            <span>UPI • TXN123456</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistorySidebar;