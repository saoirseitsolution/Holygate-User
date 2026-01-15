import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Check } from 'lucide-react';

export default function ChangePassword() {
  const [showPass, setShowPass] = useState({ current: false, new: false, confirm: false });

  return (
    <div className="flex-1 max-w-6xl animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1A1C21]">Change Password</h1>
        <p className="text-sm text-gray-400 font-medium">Keep your account secure with a strong password</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* --- Main Form Card --- */}
        <div className="flex-2 bg-white rounded-xl border border-gray-100 p-6 md:p-10 shadow-sm">
          <div className="space-y-6">
            <PasswordField 
              label="Current Password" 
              placeholder="••••••••"
              show={showPass.current} 
              onToggle={() => setShowPass({...showPass, current: !showPass.current})} 
            />
            <PasswordField 
              label="New Password" 
              placeholder="••••••••"
              show={showPass.new} 
              onToggle={() => setShowPass({...showPass, new: !showPass.new})} 
            />
            <PasswordField 
              label="Confirm New Password" 
              placeholder="••••••••"
              show={showPass.confirm} 
              onToggle={() => setShowPass({...showPass, confirm: !showPass.confirm})} 
            />

            <button className="w-full bg-[#2E297A] text-white py-3 rounded-xl font-bold text-[15px] shadow-lg shadow-indigo-100 hover:bg-[#3F3D89] transition-all mt-4">
              Update Password
            </button>
          </div>
        </div>

        {/* --- Password Requirements Sidebar --- */}
        <div className="flex-1 bg-white rounded-xl border border-gray-100 p-8 shadow-sm h-fit">
          <h3 className="text-[15px] font-bold text-[#1A1C21] mb-6">Password Requirements</h3>
          <ul className="space-y-4">
            <RequirementItem text="At least 8 characters" met={true} />
            <RequirementItem text="Contains uppercase letter" met={true} />
            <RequirementItem text="Contains lowercase letter" met={true} />
            <RequirementItem text="Contains number" met={false} />
            <RequirementItem text="Contains special character" met={false} />
          </ul>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
            <p className="text-[11px] leading-relaxed text-gray-400 font-medium italic">
              Use a unique password that you don't use for other accounts. Consider using a password manager for better security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- Atomic Components --- */

const PasswordField = ({ label, show, onToggle, placeholder }: any) => (
  <div className="space-y-2">
    <label className="text-[13px] font-bold text-gray-400 uppercase tracking-tight ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
        <Lock size={18} />
      </div>
      <input 
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className="w-full pl-14 pr-14 py-4 bg-[#F9FAFB] border border-gray-100 rounded-2xl text-[15px] font-bold text-[#1A1C21] outline-none focus:bg-white focus:border-[#2E297A]/20 focus:ring-4 focus:ring-[#2E297A]/5 transition-all"
      />
      <button 
        type="button"
        onClick={onToggle}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2E297A] transition-colors"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  </div>
);

const RequirementItem = ({ text, met }: { text: string, met: boolean }) => (
  <li className="flex items-center gap-3">
    <div className={`p-0.5 rounded-full ${met ? "text-green-500" : "text-gray-200"}`}>
      <Check size={14} strokeWidth={3} />
    </div>
    <span className={`text-[13px] font-medium ${met ? "text-gray-600" : "text-gray-300"}`}>
      {text}
    </span>
  </li>
);

