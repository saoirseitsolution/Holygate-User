import React from 'react';
import { X } from 'lucide-react';

const CancelBookingModal = ({ isOpen, onClose, onConfirm, bookingId, packageName } : { isOpen: boolean, onClose: () => void, onConfirm: () => void, bookingId: string, packageName: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop with subtle blur */}
      <div 
        className="absolute inset-0 bg-[#1A1C21]/40 backdrop-blur-[2px] transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-[520px] rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Optional Close Icon for UX improvement */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-300 hover:text-gray-500 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-5 md:p-8">
          {/* Header Typography */}
          <h2 className="text-[20px] font-bold text-[#1A1C21] mb-4">
            Cancel Package
          </h2>

          {/* Description Text with Booking ID */}
          <p className="text-[16px] text-gray-400 font-medium leading-relaxed mb-10">
            Are you sure you want to cancel your Package <span className="text-[#1A1C21] font-bold">{packageName}</span>, 
            Booking ID: <span className="text-[#1A1C21] font-bold">{bookingId}</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-8 py-3 border border-gray-100 rounded-lg text-[14px] font-semibold text-[#1A1C21] hover:bg-gray-50 transition-all order-2 sm:order-1"
            >
              Keep Booking
            </button>
            
            <button
              onClick={onConfirm}
              className="px-8 py-3 bg-[#E51B3E] text-white rounded-lg text-[14px] font-semibold hover:bg-[#D41838] transition-all shadow-lg shadow-red-100 order-1 sm:order-2"
            >
              Cancel Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelBookingModal;