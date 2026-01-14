import { Check, Info, CreditCard, ChevronRight, Wallet } from 'lucide-react';
import { useState } from 'react';

export const InstallmentPlan = () => {
  const [selectedMethod, setSelectedMethod] = useState<'installments' | 'full'>('installments');
  const [selectedPlan, setSelectedPlan] = useState<string | number>(0);

  const plans = [
    { label: "3 Equal Payments", total: "₹75,000", payNow: "₹25,000", second: "₹25,000", final: "₹25,000" },
    { label: "2 Equal Payments", total: "₹75,000", payNow: "₹37,500", final: "₹37,500" },
    { label: "Small Start (20% now)", total: "₹75,000", payNow: "₹15,000", second: "₹37,500", final: "₹22,500" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* --- Method Selection --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-4/5">
        <div 
          onClick={() => setSelectedMethod('installments')}
          className={`cursor-pointer p-6 rounded-3xl border-2 transition-all relative
          ${selectedMethod === 'installments' ? "border-[#3F37C9] bg-[#F5F5FF]" : "border-gray-100 bg-white"}`}
        >
          {selectedMethod === 'installments' && (
            <div className="absolute top-4 right-4 w-5 h-5 bg-[#2E2773] rounded-full flex items-center justify-center text-white">
              <Check size={12} strokeWidth={4} />
            </div>
          )}
          <h4 className="font-bold  text-[#1A1C21] text-base flex items-center gap-2">
            <div className={`${selectedMethod == 'installments' ? 'p-2' : 'p-0'} rounded-lg bg-[#2E27731A]/50`}><CreditCard size={18} /></div> Pay in Installments
          </h4>
                    <div className="bg-[#2E2773] mt-3 text-white text-[10px] font-semibold px-2 py-1 rounded-lg w-fit mb-4 uppercase tracking-tighter">✨ Most Flexible</div>

          <p className="text-gray-400 text-xs my-2 leading-relaxed">Split your payment into smaller amounts. Manage payments at your own pace with zero additional charges.</p>
          <p className="text-[#2E2773] font-semibold text-xl">₹75,000</p>
          <p className="text-gray-400 text-xs my-2 leading-relaxed">Total • Pay as you can</p>
        </div>

        <div 
          onClick={() => setSelectedMethod('full')}
          className={`relative cursor-pointer p-6 rounded-3xl border-2 transition-all
          ${selectedMethod === 'full' ? "border-[#2E2773] bg-[#F5F5FF]" : "border-gray-100 bg-white"}`}
        >
             {selectedMethod === 'full' && (
            <div className="absolute top-4 right-4 w-5 h-5 bg-[#2E2773] rounded-full flex items-center justify-center text-white">
              <Check size={12} strokeWidth={4} />
            </div>
          )}
          <h4 className="font-bold text-[#1A1C21] text-base flex items-center gap-2">
            <div className={`${selectedMethod == 'full' ? 'p-2' : 'p-0'} rounded-lg bg-[#2E27731A]/50`}><Wallet size={18} /></div> Pay Full Amount
          </h4>
          <p className="text-gray-400 text-xs my-4 leading-relaxed">Complete your booking with a single payment. Quick, simple, and straightforward process.</p>
          <p className="text-[#1A1C21] font-semibold text-xl">₹75,000</p>
          <p className="text-gray-400 text-xs my-2 leading-relaxed">One-time payment</p>
        </div>
      </div>

      {/* --- Plan Selection --- */}
      {selectedMethod === 'installments' && (
        <div className="bg-white border border-gray-100 rounded-4xl p-8 space-y-4 md:w-3/4">
          <h3 className="text-lg font-semibold text-[#1A1C21] mb-2">Select Your Payment Plan</h3>
          <p className="text-gray-400 text-[13px] mb-6 font-medium">Choose a pre-set plan or create your own payment schedule. All plans are interest-free.</p>
          
          <div className="space-y-4">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedPlan(i)}
                className={`p-5 border rounded-[20px] transition-all cursor-pointer
                ${selectedPlan === i ? "border-[#2E2773] ring-1 ring-[#2E2773]" : "border-gray-100"}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${selectedPlan === i ? "border-[#2E2773]" : "border-gray-200"}`}>
                      {selectedPlan === i && <div className="w-2.5 h-2.5 bg-[#3F37C9] rounded-full" />}
                    </div>
                    <span className="font-bold text-[#1A1C21]">{plan.label}</span>
                  </div>
                  <span className="text-gray-400 text-xs font-bold">{plan.total} total</span>
                </div>
                
                <div className="bg-[#F8F9FD] rounded-xl p-4 space-y-3">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-gray-500 font-medium">Pay now:</span>
                    <span className="text-[#2E2773] font-black">{plan.payNow}</span>
                  </div>
                  {plan.second && (
                    <div className="flex justify-between text-[13px] opacity-60">
                      <span className="text-gray-500 font-medium">2nd Payment:</span>
                      <span className="text-[#1A1C21] font-bold">{plan.second}</span>
                    </div>
                  )}
                   <div className="flex justify-between text-[13px] opacity-60">
                      <span className="text-gray-500 font-medium">Final Payment:</span>
                      <span className="text-[#1A1C21] font-bold">{plan.final}</span>
                    </div>
                </div>
              </div>
            ))}
            <div 
              onClick={() => setSelectedPlan('custom' as any)}
              className={`bg-white p-6 border rounded-[20px] transition-all cursor-pointer
              ${selectedPlan === 'custom' ? "border-[#2E2773] ring-1 ring-[#2E2773]" : "border-gray-100"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${selectedPlan === 'custom' ? "border-[#2E2773]" : "border-gray-200"}`}>
                  {selectedPlan === 'custom' && <div className="w-2.5 h-2.5 bg-[#2E2773] rounded-full" />}
                </div>
                <span className="font-bold text-[#1A1C21] text-sm">Custom Amount</span>
              </div>
              
              <div className="space-y-4">
                <label className="block text-gray-500 text-[12px] font-medium">Enter amount to pay now (minimum ₹7,500):</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                  <input 
                    type="text" 
                    defaultValue="75000"
                    className="w-full bg-[#F3F4F6] border-none rounded-xl py-4 px-10 text-sm font-bold text-[#1A1C21] focus:ring-0"
                  />
                </div>
                <div className="bg-[#F8F9FD] rounded-xl p-5 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase mb-1">Pay now</p>
                    <p className="text-[#2] font-semibold text-lg">₹25,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-semibold uppercase mb-1">Remaining</p>
                    <p className="text-[#1A1C21] font-semibold text-lg">₹50,000</p>
                  </div>
                </div>
              </div>
            </div>
          
      
          </div>
        </div>
      )}

     
    </div>
  );
};