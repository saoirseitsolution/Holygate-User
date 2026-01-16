import React from 'react';
import { Wallet, Plus, ArrowUpRight, ArrowDownLeft, Trash2, CreditCard } from 'lucide-react';

const WalletProfile = () => {
  return (
    <div className=" animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-[#1A1C21]">My Wallet</h1>
        <p className="text-xs text-gray-400 mt-0.5">Manage your wallet balance and transactions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* --- Left Column: Balance Stack (3/12) --- */}
        <div className="lg:col-span-4 space-y-4">
          {/* Main Balance Card */}
          <div className="bg-[#2E297A] rounded-[24px] p-6 text-white shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-medium text-white/80">Wallet Balance</span>
              <Wallet size={18} className="text-white/60" />
            </div>
            <h2 className="text-3xl font-bold mb-1">₹31,000</h2>
            <p className="text-[10px] text-white/60 font-medium mb-6">Available balance</p>
            
            <button className="w-full bg-white text-[#2E297A] py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              <Plus size={14} strokeWidth={3} /> Add Money
            </button>
          </div>

          {/* Muted Stat Cards */}
          <div className="bg-white rounded-2xl border border-gray-50 p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
              <ArrowDownLeft size={18} />
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Total Added</p>
              <p className="text-sm font-bold text-[#1A1C21]">₹80,000</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-50 p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
              <ArrowUpRight size={18} />
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Total Spent</p>
              <p className="text-sm font-bold text-[#1A1C21]">₹49,000</p>
            </div>
          </div>
        </div>

        {/* --- Right Column: History & Methods (8/12) --- */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Transaction History */}
          <div className="bg-white rounded-[24px] border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-[#1A1C21]">Transaction History</h3>
              <button className="text-[10px] font-bold text-[#2E297A] hover:underline">View All</button>
            </div>

            <div className="space-y-3">
              <TransactionItem 
                title="Payment for Holy Land Pilgrimage" 
                date="Jan 18, 2026" 
                id="TXN001" 
                amount="-₹25,000" 
                type="out"
              />
              <TransactionItem 
                title="Wallet Top-up" 
                date="Jan 15, 2026" 
                id="TXN002" 
                amount="+₹50,000" 
                type="in"
              />
              <TransactionItem 
                title="Payment for Faith & Spiritual Retreat" 
                date="Jan 10, 2026" 
                id="TXN003" 
                amount="-₹24,000" 
                type="out"
              />
               <TransactionItem 
                title="Wallet Top-up via UPI" 
                date="Jan 5, 2026" 
                id="TXN004" 
                amount="+₹30,000" 
                type="in"
              />
            </div>
          </div>

          {/* Saved Payment Methods */}
          <div className="bg-white rounded-[24px] border border-gray-100 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#1A1C21] mb-6">Saved Payment Methods</h3>
            
            <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-50 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#2E297A]/5 rounded-xl flex items-center justify-center">
                  <CreditCard size={18} className="text-[#2E297A]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1A1C21]">UPI</p>
                  <p className="text-[10px] text-gray-400">john@okaxis</p>
                </div>
              </div>
              <button className="text-[10px] font-bold text-red-500 hover:text-red-600">Remove</button>
            </div>

            <button className="w-full py-3 border border-gray-100 rounded-xl text-[10px] font-bold text-gray-400 flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
              <Plus size={12} /> Add Payment Method
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

/* Internal Component for List Rows */
const TransactionItem = ({ title, date, id, amount, type }: any) => (
  <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
        {type === 'in' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
      </div>
      <div>
        <p className="text-xs font-bold text-[#1A1C21]">{title}</p>
        <p className="text-[10px] text-gray-400 font-medium">{date}  •  {id}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-xs font-black text-[#1A1C21]">{amount}</p>
      <p className="text-[9px] font-bold text-green-500 uppercase tracking-tighter">Completed</p>
    </div>
  </div>
);

export default WalletProfile;