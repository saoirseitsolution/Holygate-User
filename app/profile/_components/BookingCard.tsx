import IconMap from "@/components/common/icons/IconMap";
import { ArrowRight, Calendar, Clock, Download, User } from "lucide-react";

export const BookingCard = ({ title, id, status, paid, total, remaining , setActiveTab }: any) => {
  const progress = (paid / total) * 100;

  return (
    <div  className="bg-white border border-gray-100 rounded-[24px] p-6 mb-6 shadow-sm">
      {/* Header Row */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-[17px] font-bold text-[#1A1C21]">{title}</h3>
            <BookingBadge status={status} />
          </div>
          <p className="text-[11px] font-bold text-gray-400">Booking ID: <span className="text-[#2E297A] uppercase">{id}</span></p>
        </div>
      </div>

      {/* Info Grid (4 Columns) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 mb-8 border-b border-gray-50">
        <InfoItem icon={<IconMap size={14}/>} label="Destination" value="Velankanni, Tamil Nadu" />
        <InfoItem icon={<Calendar size={14}/>} label="Start Date" value="Feb 15, 2026" />
        <InfoItem icon={<Clock size={14}/>} label="Duration" value="4 Days / 3 Nights" />
        <InfoItem icon={<User size={14}/>} label="Travelers" value="2 People" />
      </div>

      {/* Payment Progress Section */}
      <div className="space-y-3 mb-8">
        <div className="flex justify-between text-[11px] font-bold">
          <span className="text-gray-400 uppercase tracking-tight">Payment Status</span>
          <span className="text-[#1A1C21]">₹{paid.toLocaleString()} / ₹{total.toLocaleString()}</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#2E297A] rounded-full" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        {remaining > 0 && (
          <p className="text-[10px] font-bold text-gray-400 italic">Remaining: ₹{remaining.toLocaleString()}</p>
        )}
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap gap-3">
        <button onClick={()=> setActiveTab('details')} className="flex cursor-pointer items-center gap-2 bg-[#2E297A] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#3F3D89] transition-all">
          View Details <ArrowRight size={14} />
        </button>
        {status === 'Confirmed' ? (
          <button className="flex items-center gap-2 border border-gray-200 text-[#1A1C21] px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-50">
            <Download size={14} /> Download Ticket
          </button>
        ) : status === 'Pending' ? (
          <button className="text-[#2E297A] px-4 py-2.5 text-xs font-bold hover:underline">
            Pay Now
          </button>
        ) : null}
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }: any) => (
  <div className="flex items-start gap-2.5">
    <div className="mt-0.5 text-[#2E297A]">{icon}</div>
    <div>
      <p className="text-[10px] font-bold text-gray-300 uppercase tracking-tight">{label}</p>
      <p className="text-[12px] font-bold text-[#4A4A4A] leading-tight">{value}</p>
    </div>
  </div>
);

const BookingBadge = ({ status }: { status: 'Confirmed' | 'Pending' | 'Completed' }) => {
  const styles = {
    Confirmed: "bg-green-50 text-green-600 border-green-100",
    Pending: "bg-orange-50 text-orange-600 border-orange-100",
    Completed: "bg-gray-50 text-gray-500 border-gray-100"
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${styles[status]}`}>
      {status}
    </span>
  );
};