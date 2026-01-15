import React, { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, Edit3, Save, X } from 'lucide-react';

const ProfileDetailsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@church.org",
    phone: "+91 98765 43210",
    dob: "1995-05-15",
    address: "123 Church Street, Mumbai"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Add API logic here
  };

  return (
    <div className="flex-1 space-y-6 animate-in fade-in duration-500">
      {/* --- Header Section --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#1A1C21]">Profile Details</h1>
          <p className="text-sm text-gray-400 font-medium">Manage your personal information</p>
        </div>
        
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-[#2E297A] text-white px-5 py-2 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-[#3F3D89] transition-all"
          >
            <Edit3 size={16} /> Edit Profile
          </button>
        ) : (
          <div className="flex gap-3">
             <button 
              onClick={() => setIsEditing(false)}
              className="px-5 py-2 rounded-xl font-bold border border-gray-200 text-gray-500 hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-[#2E297A] text-white px-5 py-2 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-[#3F3D89] transition-all"
            >
              <Save size={16} /> Save
            </button>
          </div>
        )}
      </div>

      {/* --- Main Info Card --- */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-10 shadow-sm">
        
        {/* Profile Header */}
        <div className="flex items-center gap-5 pb-8 border-b border-gray-100 mb-8">
          <div className="w-20 h-20 bg-[#3F3D89] rounded-full flex items-center justify-center text-white text-2xl font-black shadow-inner">
            {profile.firstName[0]}{profile.lastName[0]}
          </div>
          <div>
            <h3 className="text-xl font-black text-[#1A1C21]">{profile.firstName} {profile.lastName}</h3>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Member since Jan 2024</p>
          </div>
        </div>

        {/* Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <EditableField 
            label="First Name" 
            value={profile.firstName} 
            isEditing={isEditing} 
            onChange={(v) => setProfile({...profile, firstName: v})} 
          />
          <EditableField 
            label="Last Name" 
            value={profile.lastName} 
            isEditing={isEditing} 
            onChange={(v) => setProfile({...profile, lastName: v})} 
          />
          <EditableField 
            label="Email Address" 
            value={profile.email} 
            icon={Mail} 
            isEditing={isEditing} 
            onChange={(v) => setProfile({...profile, email: v})} 
          />
          <EditableField 
            label="Phone Number" 
            value={profile.phone} 
            icon={Phone} 
            isEditing={isEditing} 
            onChange={(v) => setProfile({...profile, phone: v})} 
          />
          <EditableField 
            label="Date of Birth" 
            value={profile.dob} 
            icon={Calendar} 
            type="date"
            isEditing={isEditing} 
            onChange={(v) => setProfile({...profile, dob: v})} 
          />
          <EditableField 
            label="Address" 
            value={profile.address} 
            icon={MapPin} 
            isEditing={isEditing} 
            onChange={(v) => setProfile({...profile, address: v})} 
          />
        </div>
      </div>
    </div>
  );
};

/* Reusable Atomic Field Component */
const EditableField = ({ label, value, icon: Icon, isEditing, onChange, type = "text" } : { label: string, value: string, icon?: React.ComponentType<{ size?: number }>, isEditing: boolean, onChange: (value: string) => void, type?: string }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 text-[13px] font-bold text-gray-400 uppercase tracking-tight">
      {Icon && <Icon size={14}  />} 
      {/* //className="text-[#3F3D89]" */}
      <span>{label}</span>
    </div>
    
    {isEditing ? (
      <input 
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-5 py-3 bg-white border-2 border-[#3F3D89]/20 rounded-lg text-[15px] font-bold text-[#1A1C21] outline-none focus:border-[#2E297A] focus:ring-4 focus:ring-[#2E297A]/5 transition-all"
      />
    ) : (
      <div className="w-full px-5 py-3 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[15px] font-bold text-gray-600">
        {value || <span className="text-gray-300">Not provided</span>}
      </div>
    )}
  </div>
);

export default ProfileDetailsSection;